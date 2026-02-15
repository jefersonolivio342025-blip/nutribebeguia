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

    const params = new URLSearchParams(window.location.search);
    const utm_source = params.get("utm_source") || "direto";
    const utm_campaign = params.get("utm_campaign") || "organico";
    const device = /Android|iPhone|iPad/i.test(navigator.userAgent) ? "mobile" : "desktop";

    async function trackEvent(val: string, extraData: any = {}) {
      try {
        const payload: any = {
          event_type: val,
          utm_source: utm_source,
          utm_campaign: utm_campaign,
          click_x: extraData.click_x !== undefined ? Number(extraData.click_x.toFixed(2)) : null,
          click_y: extraData.click_y !== undefined ? Number(extraData.click_y.toFixed(2)) : null,
          metadata: {
            device: device,
            path: window.location.pathname,
            ...Object.fromEntries(Object.entries(extraData).filter(([k]) => k !== "click_x" && k !== "click_y")),
          },
        };

        await fetch(SB_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: SB_KEY,
            Authorization: `Bearer ${SB_KEY}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify(payload),
        });
      } catch (e) {
        console.error("❌ Erro no rastreio:", e);
      }
    }

    // 1. Visita Inicial
    trackEvent("visita");

    // 2. Persistência de UTM nos Links (Onde o Fernando vira venda rastreada)
    const query = window.location.search;
    if (query) {
      setTimeout(() => {
        // Aguarda os componentes renderizarem
        const links = document.querySelectorAll("a");
        links.forEach((link) => {
          if (link.href.includes("kiwify.com.br") || link.href.includes("wa.me")) {
            const connector = link.href.includes("?") ? "&" : "?";
            link.href += connector + query.substring(1);
          }
        });
      }, 1000);
    }

    // 3. Captura de Cliques e Heatmap
    const handleGlobalClick = (e: MouseEvent) => {
      const width = window.innerWidth;
      const height = document.documentElement.scrollHeight;
      const x = (e.pageX / width) * 100;
      const y = (e.pageY / height) * 100;

      // Mapa de calor (para o banco de dados)
      trackEvent("click_heatmap", { click_x: x, click_y: y });

      // Cliques de conversão (Para sua Tabela de Performance)
      const el = (e.target as HTMLElement).closest("a, button");
      if (el) {
        const text = el.textContent?.toLowerCase() || "";
        const href = (el as HTMLAnchorElement).href || "";
        if (text.includes("comprar") || text.includes("acesso") || href.includes("kiwify") || href.includes("wa.me")) {
          trackEvent("clique");
        }
      }
    };

    // 4. Scroll (Engajamento)
    const sentMarks = new Set();
    const handleScroll = () => {
      const h = document.documentElement;
      const pct = Math.round(((window.scrollY + window.innerHeight) / h.scrollHeight) * 100);
      [25, 50, 75, 90].forEach((mark) => {
        if (pct >= mark && !sentMarks.has(mark)) {
          trackEvent(`scroll_${mark}`, { scroll_depth: mark });
          sentMarks.add(mark);
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
