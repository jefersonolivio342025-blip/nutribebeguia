import { useEffect } from "react";
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

const Index = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get("utm_source");

      if (utmSource) {
        const supabaseUrl = "https://jdpycowlojjccbqmoaxj.supabase.co";
        const supabaseKey = "sb_publishable_1m1xv0ewxsSwRaaCztCPLQ_JZzd5nnu";

        try {
          await fetch(`${supabaseUrl}/rest/v1/leads_tracking`, {
            method: "POST",
            headers: {
              apikey: supabaseKey,
              Authorization: `Bearer ${supabaseKey}`,
              "Content-Type": "application/json",
              Prefer: "return=minimal",
            },
            body: JSON.stringify({
              user_id: "5ec9e6d7-88c1-4b22-9a46-4a247f870fc6",
              event_type: "visita_nutribebe_final",
              page_path: window.location.pathname,
              metadata: {
                origem: utmSource,
                campanha: urlParams.get("utm_campaign") || "direto",
              },
            }),
          });
          console.log("Rastreado com sucesso!");
        } catch (e) {
          console.error("Erro no rastreio:", e);
        }
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
