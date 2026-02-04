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
    const utm_campaign = params.get("utm_campaign") || null;
    const device = /Android|iPhone|iPad/i.test(navigator.userAgent) ? "mobile" : "desktop";

    async function trackEvent(val: string, extraData: any = {}) {
      try {
        // Criamos o objeto base
        const payload: any = {
          event_type: val,
          utm_source: utm_source,
          utm_campaign: utm_campaign,
          metadata: {
            device: device,
            path: window.location.pathname,
          },
        };

        // Extraímos click_x e click_y se existirem e garantimos que são números
        if (extraData.click_x !== undefined) {
          payload.click_x = Number(extraData.click_x.toFixed(2));
          payload.click_y = Number(extraData.click_y.toFixed(2));

          // Removemos do metadata para não duplicar informação
          const { click_x, click_y, ...otherMetadata } = extraData;
          payload.metadata = { ...payload.metadata, ...otherMetadata };
        } else {
          payload.metadata = { ...payload.metadata, ...extraData };
        }

        const response = await fetch(SB_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: SB_KEY,
            Authorization: `Bearer ${SB_KEY}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          console.log(`✅ [${val}] enviado com sucesso! X: ${payload.click_x || "-"} Y: ${payload.click_y || "-"}`);
        } else {
          const errorMsg = await response.text();
          console.error("❌ Erro Supabase:", errorMsg);
        }
      } catch (e) {
        console.error("❌ Erro na requisição:", e);
      }
    }

    // 1. Visita Inicial
    trackEvent("visita");

    // 2. Captura Global de Cliques (Heatmap + Conversão)
    const handleGlobalClick = (e: MouseEvent) => {
      const width = window.innerWidth;
      const height = document.documentElement.scrollHeight;

      // Cálculo preciso em porcentagem
      const x = (e.pageX / width) * 100;
      const y = (e.pageY / height) * 100;

      // Salva no mapa de calor
      trackEvent("click_heatmap", { click_x: x, click_y: y });

      // Verifica cliques em botões de compra
      const el = (e.target as HTMLElement).closest("a, button");
      if (el) {
        const text = el.textContent?.toLowerCase() || "";
        const href = (el as HTMLAnchorElement).href || "";
        if (text.includes("comprar") || text.includes("oferta") || href.includes("kiwify") || href.includes("wa.me")) {
          trackEvent("clique");
        }
      }
    };

    // 3. Rastreio de Scroll (25%, 50%, 75%, 90%)
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
