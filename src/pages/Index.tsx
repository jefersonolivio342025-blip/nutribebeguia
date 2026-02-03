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
    // Configurações do seu Supabase
    const SB_URL = "https://jdpycowlojjccbqmoaxj.supabase.co/rest/v1/leads_tracking";
    const SB_KEY = "sb_publishable_1m1xv0ewxsSwRaaCztCPLQ_JZzd5nnu";

    // 1. Identifica o Dispositivo
    const deviceType = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      ? "mobile"
      : "desktop";

    // Função para enviar os dados para o Supabase
    async function trackEvent(eventType: string) {
      try {
        await fetch(SB_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: SB_KEY,
            Authorization: `Bearer ${SB_KEY}`,
          },
          body: JSON.stringify({
            event_type: eventType,
            device_type: deviceType,
            created_at: new Date().toISOString(),
          }),
        });
      } catch (e) {
        console.error("Erro ao rastrear evento:", e);
      }
    }

    // 2. Rastreia a Visita Inicial
    trackEvent("visita");

    // 3. Rastreia a Profundidade do Scroll (Analytics)
    let sentScrolls = new Set();
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

      [25, 50, 75, 90].forEach((mark) => {
        if (scrollPercent >= mark && !sentScrolls.has(mark)) {
          trackEvent(`scroll_${mark}`);
          sentScrolls.add(mark);
        }
      });
    };

    // 4. Rastreia Cliques (Ouvinte global para botões e links)
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const element = target.closest("a, button");

      if (element) {
        const text = element.textContent?.toLowerCase() || "";
        const href = (element as HTMLAnchorElement).href || "";

        // Se o clique for em botão de compra ou WhatsApp, registra como "clique"
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

    // Limpeza ao desmontar o componente
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
