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

    // 1. Captura UTMs e Dispositivo
    const params = new URLSearchParams(window.location.search);
    const utm_source = params.get("utm_source") || "direto";
    const utm_campaign = params.get("utm_campaign") || null;
    const device = /Android|iPhone|iPad/i.test(navigator.userAgent) ? "mobile" : "desktop";

    async function trackEvent(val: string, extraData = {}) {
      try {
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
            utm_source: utm_source,
            utm_campaign: utm_campaign,
            metadata: {
              device: device,
              path: window.location.pathname,
              ...extraData,
            },
            // Se houver coordenadas de clique, elas entram aqui
            ...((extraData as any).click_x && {
              click_x: (extraData as any).click_x,
              click_y: (extraData as any).click_y,
            }),
          }),
        });
      } catch (e) {
        // Erro silencioso
      }
    }

    // 2. Visita Inicial
    trackEvent("visita");

    // 3. Captura de Mapa de Calor (Heatmap) + Cliques de Conversão
    const handleGlobalClick = (e: MouseEvent) => {
      const width = window.innerWidth;
      const height = document.documentElement.scrollHeight;

      // Coordenadas em % para o Heatmap
      const click_x = (e.pageX / width) * 100;
      const click_y = (e.pageY / height) * 100;

      // Primeiro, registra o ponto no Mapa de Calor
      trackEvent("click_heatmap", { click_x, click_y });

      // Segundo, verifica se foi um clique em botão de conversão
      const el = (e.target as HTMLElement).closest("a, button");
      if (el) {
        const text = el.textContent?.toLowerCase() || "";
        const href = (el as HTMLAnchorElement).href || "";
        if (text.includes("comprar") || text.includes("oferta") || href.includes("kiwify") || href.includes("wa.me")) {
          trackEvent("clique");
        }
      }
    };

    // 4. Scroll
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

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleGlobalClick);
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
