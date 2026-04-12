import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    console.log("Kiwify webhook received:", JSON.stringify(body));

    // Kiwify envia os dados em diferentes formatos dependendo do evento
    // Estrutura comum: { order_status, Customer, Product, Subscription, ... }
    const customer = body.Customer || body.customer || {};
    const product = body.Product || body.product || {};
    const orderStatus = body.order_status || body.OrderStatus || "";

    // Capturar WhatsApp/telefone do comprador - campo principal da Kiwify é customer_mobile
    const rawMobile =
      body.customer_mobile || body.Customer_mobile ||
      customer.mobile || customer.phone || customer.full_phone ||
      body.phone || body.mobile || "";
    
    // Limpar caracteres não numéricos (parênteses, traços, espaços)
    const whatsappLead = rawMobile ? rawMobile.replace(/\D/g, "") : "";

    // Capturar UTMs que foram passadas no link de checkout
    const trackingParams = body.TrackingParameters || body.tracking_parameters || {};
    const utmSource = trackingParams.utm_source || trackingParams.src || "";
    const utmCampaign = trackingParams.utm_campaign || "";
    const utmContent = trackingParams.utm_content || "";
    const src = trackingParams.src || "";

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error } = await supabase.from("leads_tracking").insert({
      event_type: `kiwify_${orderStatus}`,
      utm_source: utmSource,
      utm_campaign: utmCampaign,
      utm_content: utmContent,
      whatsapp_lead: whatsappLead || null,
      metadata: {
        customer_name: customer.full_name || customer.name || "",
        customer_email: customer.email || "",
        product_name: product.product_name || product.name || "",
        order_id: body.order_id || body.OrderId || "",
        src: src,
        raw_tracking: trackingParams,
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
