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

    const device = /Android|iPhone|iPad/i.test(navigator.userAgent) ? "mobile" : "desktop";

    async function trackEvent(val: string) {
      try {
        // Enviamos apenas o que o banco já provou que aceita para não gerar Erro 400
        await fetch(SB_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: SB_KEY,
            Authorization: `Bearer ${SB_KEY}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            event_type: val,
            metadata: { device: device, path: window.location.pathname },
          }),
        });
      } catch (e) {
        // Erro de rede silencioso
      }
    }

    // 1. Visita Inicial
    trackEvent("visita");

    // 2. Scroll (Com travas em memória para eficiência)
    const sent = new Set();
    const handleScroll = () => {
      const h = document.documentElement;
      const pct = Math.round(((window.scrollY + window.innerHeight) / h.scrollHeight) * 100);

      [25, 50, 75, 90].forEach((mark) => {
        if (pct >= mark && !sent.has(mark)) {
          trackEvent(`scroll_${mark}`);
          sent.add(mark);
        }
      });
    };

    // 3. Cliques em Conversão
    const handleClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("a, button");
      if (el) {
        const text = el.textContent?.toLowerCase() || "";
        const href = (el as HTMLAnchorElement).href || "";
        if (text.includes("comprar") || text.includes("oferta") || href.includes("kiwify") || href.includes("wa.me")) {
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
