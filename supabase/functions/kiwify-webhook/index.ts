import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = await req.json();
    console.log("Kiwify Data:", JSON.stringify(body));

    // Mapeamento exato baseado no JSON que você enviou
    const order = body.order || {};
    const customer = order.Customer || {};
    const product = order.Product || {};
    
    // Captura o telefone em order.Customer.mobile
    const rawMobile = customer.mobile || "";
    const cleanPhone = rawMobile.toString().replace(/\D/g, "");

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error } = await supabase.from("leads_tracking").insert({
      event_type: `kiwify_${order.order_status || 'unknown'}`,
      utm_source: order.TrackingParameters?.utm_source || "",
      WhatsApp: cleanPhone || null, // NOME DA COLUNA COM W MAIÚSCULO
      metadata: {
        customer_name: customer.full_name || "",
        customer_email: customer.email || "",
        product_name: product.product_name || "",
        order_id: order.order_id || ""
      },
    });

    if (error) throw error;
    return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
  }
});
