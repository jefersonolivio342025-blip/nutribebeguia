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
    
    const rawMobile = customer.mobile || "";
    const cleanPhone = rawMobile.toString().replace(/\D/g, "");
    const email = customer.email || "";

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // 1. SALVAR NO SUPABASE
    await supabase.from("leads_tracking").insert({
      event_type: `kiwify_${order.order_status}`,
      utm_source: order.TrackingParameters?.utm_source || "",
      WhatsApp: cleanPhone || null,
      metadata: {
        customer_name: customer.full_name,
        customer_email: email,
        order_id: order.order_id
      },
    });

    // 2. ENVIAR PARA API DE CONVERSÕES DO FACEBOOK
    const FB_PIXEL_ID = "3077997939046690"; // Seu Pixel do NutriBebê
    const FB_ACCESS_TOKEN = Deno.env.get("FB_ACCESS_TOKEN"); // Você precisará configurar esta Secret no Supabase

    if (FB_ACCESS_TOKEN) {
      const hashedEmail = await hashData(email);
      const hashedPhone = await hashData(cleanPhone);

      await fetch(`https://graph.facebook.com/v18.0/${FB_PIXEL_ID}/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [{
            event_name: "Purchase", // Ou "InitiateCheckout" dependendo do status
            event_time: Math.floor(Date.now() / 1000),
            event_id: order.order_id,
            action_source: "email",
            user_data: {
              em: [hashedEmail],
              ph: [hashedPhone],
            },
            custom_data: {
              value: order.Commissions?.charge_amount / 100,
              currency: "BRL",
            },
          }],
          access_token: FB_ACCESS_TOKEN,
        }),
      });
    }

    return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
  }
});
