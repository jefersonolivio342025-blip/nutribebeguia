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

// Garante que o TypeScript reconheça o Pixel do Facebook
declare global {
  interface Window {
    fbq: any;
  }
}

const Index = () => {
  useEffect(() => {
    const SB_URL = "https://jdpycowlojjccbqmoaxj.supabase.co/rest/v1/leads_tracking";
    const SB_KEY = "sb_publishable_1m1xv0ewxsSwRaaCztCPLQ_JZzd5nnu";

    const params = new URLSearchParams(window.location.search);

    // Captura e persistência de UTMs
    const source = params.get("utm_source") || localStorage.getItem("nb_source") || "direto";
    const campaign = params.get("utm_campaign") || localStorage.getItem("nb_campaign") || "organico";
    const content = params.get("utm_content") || localStorage.getItem("nb_content") || "sem_criativo";

    if (params.get("utm_source")) localStorage.setItem("nb_source", params.get("utm_source")!);
    if (params.get("utm_campaign")) localStorage.setItem("nb_campaign", params.get("utm_campaign")!);
    if (params.get("utm_content")) localStorage.setItem("nb_content", params.get("utm_content")!);

    // Função de rastreio para o seu Dashboard
    async function trackEvent(val: string, metadata = {}) {
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
            utm_source: source,
            utm_campaign: campaign,
            utm_content: content,
            metadata: {
              ...metadata,
              device: /Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
              path: window.location.pathname,
            },
          }),
        });
      } catch (e) {
        console.warn("Rastreio falhou, mas a experiência continua.");
      }
    }

    trackEvent("visita");

    // Lógica de clique profissional para Checkout e WhatsApp
    const handleGlobalClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("a");
      if (!el) return;

      const href = el.href || "";
      const isCheckout = href.includes("kiwify.com.br") || href.includes("hotmart.com") || href.includes("wa.me");

      if (isCheckout) {
        // Pausa o redirecionamento para processar o pixel e o banco
        e.preventDefault();

        try {
          if (typeof window.fbq === "function") {
            window.fbq("track", "InitiateCheckout");
          }
        } catch (err) {}

        trackEvent("clique", { target: href.includes("wa.me") ? "whatsapp" : "checkout" });

        let finalUrl = href;
        if (href.startsWith("http")) {
          try {
            const url = new URL(href);
            url.searchParams.set("utm_source", source);
            url.searchParams.set("utm_campaign", campaign);
            url.searchParams.set("utm_content", content);
            finalUrl = url.toString();
          } catch (err) {}
        }

        // Redireciona após 500ms (tempo para o fetch completar)
        setTimeout(() => {
          window.location.href = finalUrl;
        }, 500);
      }
    };

    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
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

// ESSA LINHA É O QUE RESOLVE O ERRO TS1192 NO APP.TSX
export default Index;
