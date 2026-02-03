import { useEffect } from "react"; // 1. Adicionado
import { createClient } from "@supabase/supabase-js"; // 2. Adicionado
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TransformationSection from "@/components/TransformationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import FAQSection from "@/components/FAQSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import SocialProofNotification from "@/components/SocialProofNotification";
import StickyHeader from "@/components/StickyHeader";

// 3. Conexão direta (configurada aqui para facilitar no seu site)
const supabaseUrl = "https://jdpycowlojjccbqmoaxj.supabase.co";
const supabaseKey = "sb_publishable_1m1xv0ewxsSwRaaCztCPLQ_JZzd5nnu";
const supabase = createClient(supabaseUrl, supabaseKey);

const Index = () => {
  // 4. BLOCO DE RASTREAMENTO (O "Espião" de UTMs)
  useEffect(() => {
    const trackVisitor = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get("utm_source");

      // Só envia se tiver UTM ou você pode tirar o 'if' para rastrear TODO MUNDO
      if (utmSource) {
        await supabase.from("leads_tracking").insert([
          {
            user_id: "5ec9e6d7-88c1-4b22-9a46-4a247f870fc6",
            event_type: "visita_nutribebe",
            page_path: window.location.pathname,
            metadata: {
              origem: utmSource,
              campanha: urlParams.get("utm_campaign") || "direto",
              dispositivo: navigator.userAgent.includes("Mobi") ? "Celular" : "Desktop",
            },
          },
        ]);
        console.log("Visitante rastreado com sucesso!");
      }
    };

    trackVisitor();
  }, []);

  return (
    <div className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      <BenefitsSection />
      <TransformationSection />
      <TestimonialsSection />
      <TargetAudienceSection />
      <FAQSection />
      <OfferSection />
      <GuaranteeSection />
      <Footer />
      <WhatsAppButton />
      <SocialProofNotification />
    </div>
  );
};

export default Index;
