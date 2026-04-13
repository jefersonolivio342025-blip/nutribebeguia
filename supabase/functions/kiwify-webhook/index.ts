import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Função para criptografar dados para o Facebook (SHA256)
async function hashData(data: string) {
  if (!data) return null;
  const msgUint8 = new TextEncoder().encode(data.trim().toLowerCase());
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, "0")).join("");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = await req.json();
    const order = body.order || {};
    const customer = order.Customer || {};
    const product = order.Product || {};
    
    const rawMobile = customer.mobile || "";
    const cleanPhone = rawMobile.toString().replace(/\D/g, "");
    const email = customer.email || "";

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // 1. SALVAR NO SUPABASE (Com colunas organizadas)
    await supabase.from("leads_tracking").insert({
      event_type: `kiwify_${order.order_status}`,
      utm_source: order.TrackingParameters?.utm_source || "",
      WhatsApp: cleanPhone || null,
      metadata: {
        customer_name: customer.full_name || "",
        customer_email: email || "",
        product_name: product.product_name || "",
        order_id: order.order_id || "",
        status: order.order_status || ""
      },
    });

    // 2. LOGICA DE EVENTO PARA O FACEBOOK
    // Se for aprovado, envia "Purchase". Se for boleto/pix gerado, "InitiateCheckout".
    let fbEventName = "InitiateCheckout";
    if (order.order_status === "paid" || order.order_status === "approved") {
      fbEventName = "Purchase";
    }

    const FB_PIXEL_ID = "3077997939046690";
    const FB_ACCESS_TOKEN = Deno.env.get("FB_ACCESS_TOKEN");

    if (FB_ACCESS_TOKEN) {
      const hashedEmail = await hashData(email);
      const hashedPhone = await hashData(cleanPhone);
      const value = (order.Commissions?.charge_amount || 0) / 100;

      await fetch(`https://graph.facebook.com/v18.0/${FB_PIXEL_ID}/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [{
            event_name: fbEventName,
            event_time: Math.floor(Date.now() / 1000),
            event_id: order.order_id,
            action_source: "system_generated",
            user_data: {
              em: [hashedEmail],
              ph: [hashedPhone],
            },
            custom_data: {
              value: value,
              currency: "BRL",
              content_name: product.product_name,
            },
          }],
          access_token: FB_ACCESS_TOKEN,
        }),
      });
    }

    return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Erro no Webhook:", message);
    return new Response(JSON.stringify({ error: message }), { status: 500, headers: corsHeaders });
  }
});
