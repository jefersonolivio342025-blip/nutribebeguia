import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    console.log("Kiwify webhook received:", JSON.stringify(body));

    // A Kiwify envia dados na raiz ou em objetos. Vamos mapear tudo.
    const customer = body.Customer || body.customer || {};
    const product = body.Product || body.product || {};
    const orderStatus = body.order_status || body.OrderStatus || "unknown";

    // CAPTURA DO WHATSAPP (Ajustado para cobrir todas as possibilidades da Kiwify)
    const rawMobile = 
      body.customer_mobile || 
      body.Customer_mobile || 
      customer.mobile || 
      customer.phone || 
      customer.full_phone || 
      body.mobile || 
      "";
    
    // Limpa tudo que não for número
    const whatsappValue = rawMobile.toString().replace(/\D/g, "");

    // CAPTURA DE UTMs (Ajustado para pegar da raiz ou do objeto Tracking)
    const tracking = body.TrackingParameters || body.tracking_parameters || {};
    const utmSource = body.utm_source || tracking.utm_source || body.src || tracking.src || "";
    const utmCampaign = body.utm_campaign || tracking.utm_campaign || "";
    const utmContent = body.utm_content || tracking.utm_content || "";

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // INSERÇÃO NO BANCO
    const { error } = await supabase.from("leads_tracking").insert({
      event_type: `kiwify_${orderStatus}`,
      utm_source: utmSource,
      utm_campaign: utmCampaign,
      utm_content: utmContent,
      whatsapp_lead: whatsappValue || null, // NOME DA COLUNA NO BANCO
      metadata: {
        customer_name: customer.full_name || customer.name || body.customer_name || "",
        customer_email: customer.email || body.customer_email || "",
        product_name: product.product_name || product.name || "",
        order_id: body.order_id || body.OrderId || "",
        raw_payload: body // Salva tudo para debug se precisar
      },
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Webhook error:", err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
