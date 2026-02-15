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

    // 1. LÓGICA DE MEMÓRIA (PERSISTÊNCIA)
    // Pega da URL ou recupera do "bolso" (localStorage)
    const source = params.get("utm_source") || localStorage.getItem("nb_source") || "direto";
    const campaign = params.get("utm_campaign") || localStorage.getItem("nb_campaign") || "organico";

    // Se veio algo novo na URL, atualiza a memória
    if (params.get("utm_source")) localStorage.setItem("nb_source", params.get("utm_source")!);
    if (params.get("utm_campaign")) localStorage.setItem("nb_campaign", params.get("utm_campaign")!);

    // 2. FUNÇÃO PARA ENVIAR EVENTOS AO BANCO (DASHBOARD)
    async function trackEvent(val: string) {
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
            metadata: {
              device: /Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
              path: window.location.pathname,
            },
          }),
        });
      } catch (e) {
        console.error("Erro no rastreio:", e);
      }
    }

    // Registra a visita assim que carrega
    trackEvent("visita");

    // 3. FUNÇÃO PARA CARIMBAR OS BOTÕES (CHECKOUT/ZAP)
    const carimbarBotoes = () => {
      const links = document.querySelectorAll("a");
      links.forEach((link) => {
        if (link.href.includes("wa.me") || link.href.includes("kiwify.com.br")) {
          // Usa a URL API para evitar erros de interrogação dupla
          try {
            const url = new URL(link.href);
            url.searchParams.set("utm_source", source);
            url.searchParams.set("utm_campaign", campaign);
            link.href = url.toString();
          } catch (e) {
            // Fallback caso a URL seja inválida
            const connector = link.href.includes("?") ? "&" : "?";
            link.href += `${connector}utm_source=${source}&utm_campaign=${campaign}`;
          }
        }
      });
    };

    // 4. MONITORAR CLIQUES DE CONVERSÃO
    const handleGlobalClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("a, button");
      if (el) {
        const text = el.textContent?.toLowerCase() || "";
        const href = (el as HTMLAnchorElement).href || "";
        // Se o clique for em botões de compra, avisa o dashboard
        if (text.includes("comprar") || text.includes("acesso") || href.includes("kiwify") || href.includes("wa.me")) {
          trackEvent("clique");
        }
      }
    };

    // Execução
    carimbarBotoes();
    setTimeout(carimbarBotoes, 2000); // Garante o carimbo após o load total
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

export default Index;
