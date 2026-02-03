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
      // Criamos um payload que tenta agradar qualquer estrutura de banco de dados
      const body = {
        event_type: val, // Opção padrão
        event: val, // Opção comum 2
        device_type: device,
        device: device,
        metadata: { device: device, path: window.location.pathname },
      };

      try {
        const response = await fetch(SB_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: SB_KEY,
            Authorization: `Bearer ${SB_KEY}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify(body),
        });

        if (response.ok) {
          console.log(`✅ Registrado: ${val}`);
        } else {
          // Se falhar com o corpo completo, tenta o "mínimo absoluto"
          fetch(SB_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json", apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` },
            body: JSON.stringify({ event_type: val }),
          });
        }
      } catch (e) {
        console.error("Erro no fetch:", e);
      }
    }

    // 1. Visita
    trackEvent("visita");

    // 2. Scroll (com trava para não sobrecarregar)
    const sent = new Set();
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      const pct = Math.round((scrollPos / totalHeight) * 100);

      [25, 50, 75, 90].forEach((mark) => {
        if (pct >= mark && !sent.has(mark)) {
          trackEvent(`scroll_${mark}`);
          sent.add(mark);
        }
      });
    };

    // 3. Cliques
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
