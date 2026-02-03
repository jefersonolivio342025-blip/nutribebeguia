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
    const SB_URL = "https://jdpycowlojjccbqmoaxj.supabase.co/rest/v1/leads_tracking";
    const SB_KEY = "sb_publishable_1m1xv0ewxsSwRaaCztCPLQ_JZzd5nnu";

    // 1. Identifica o Dispositivo
    const device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      ? "mobile"
      : "desktop";

    // Função Blindada para evitar Erro 400
    async function trackEvent(eventType: string) {
      try {
        const response = await fetch(SB_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: SB_KEY,
            Authorization: `Bearer ${SB_KEY}`,
            Prefer: "return=minimal", // Necessário para evitar erros de resposta em algumas configs
          },
          body: JSON.stringify({
            event_type: eventType,
            // Enviamos nos dois formatos possíveis para garantir compatibilidade
            device_type: device,
            metadata: { device: device, url: window.location.href },
          }),
        });

        if (!response.ok) {
          const errorInfo = await response.json();
          console.error("Erro Supabase:", errorInfo);
        }
      } catch (e) {
        console.error("Erro de conexão:", e);
      }
    }

    // 2. Rastreia a Visita Inicial
    trackEvent("visita");

    // 3. Rastreia a Profundidade do Scroll (Evitando disparos repetidos)
    let sentMarks = new Set();
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      const scrollPercent = (scrollPos / totalHeight) * 100;

      [25, 50, 75, 90].forEach((mark) => {
        if (scrollPercent >= mark && !sentMarks.has(mark)) {
          trackEvent(`scroll_${mark}`);
          sentMarks.add(mark);
        }
      });
    };

    // 4. Rastreia Cliques Globalmente
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const element = target.closest("a, button");

      if (element) {
        const text = element.textContent?.toLowerCase() || "";
        const href = (element as HTMLAnchorElement).href || "";

        if (
          text.includes("comprar") ||
          text.includes("oferta") ||
          href.includes("kiwify") ||
          href.includes("wa.me") ||
          href.includes("whatsapp")
        ) {
          trackEvent("clique");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClick);
    };
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
