import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ValueAnchorSection from "@/components/ValueAnchorSection";
import FAQSection from "@/components/FAQSection";
import OfferSection from "@/components/OfferSection";
import BonusSection from "@/components/BonusSection";
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

    // 1. PERSISTÊNCIA DE UTMs
    const source = params.get("utm_source") || localStorage.getItem("nb_source") || "direto";
    const campaign = params.get("utm_campaign") || localStorage.getItem("nb_campaign") || "organico";
    const content = params.get("utm_content") || localStorage.getItem("nb_content") || "sem_criativo";

    if (params.get("utm_source")) localStorage.setItem("nb_source", params.get("utm_source")!);
    if (params.get("utm_campaign")) localStorage.setItem("nb_campaign", params.get("utm_campaign")!);
    if (params.get("utm_content")) localStorage.setItem("nb_content", params.get("utm_content")!);

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
            utm_content: content,
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

    // 2. META PIXEL - PageView com dados extras
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "PageView", {
        page_path: window.location.pathname,
        page_title: document.title,
      });
    }

    trackEvent("visita");

    // 3. SCROLL ENGAGEMENT - ViewContent ao atingir 50%
    let viewContentFired = false;
    const handleScroll = () => {
      if (viewContentFired) return;
      const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (scrollPercent >= 0.5) {
        viewContentFired = true;
        if (typeof window !== "undefined" && (window as any).fbq) {
          (window as any).fbq("track", "ViewContent", {
            value: 29.90,
            currency: "BRL",
            content_name: "NutriBebê Pro",
          });
        }
        trackEvent("scroll_50");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 4. CARIMBAR UTMs NOS LINKS
    const carimbarBotoes = () => {
      const links = document.querySelectorAll("a");
      links.forEach((link) => {
        if (link.href.includes("wa.me") || link.href.includes("kiwify.com.br")) {
          try {
            const url = new URL(link.href);
            url.searchParams.set("utm_source", source);
            url.searchParams.set("utm_campaign", campaign);
            url.searchParams.set("utm_content", content);
            link.href = url.toString();
          } catch (e) {
            const connector = link.href.includes("?") ? "&" : "?";
            link.href += `${connector}utm_source=${source}&utm_campaign=${campaign}&utm_content=${content}`;
          }
        }
      });
    };

    // 5. CLICK HANDLER - InitiateCheckout com valor
    const handleGlobalClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("a, button");
      if (el) {
        const text = el.textContent?.toLowerCase() || "";
        const href = (el as HTMLAnchorElement).href || "";
        const isCheckout = href.includes("kiwify") || text.includes("comprar") || text.includes("acesso") || text.includes("proteger") || text.includes("quero");

        if (isCheckout) {
          trackEvent("clique");
          if (typeof window !== "undefined" && (window as any).fbq) {
            (window as any).fbq("trackCustom", "ClickToCheckout", { 
              value: 29.90, 
              currency: "BRL",
              button_text: text 
            });
          }
        }
      }
    };

    carimbarBotoes();
    setTimeout(carimbarBotoes, 2000);
    window.addEventListener("click", handleGlobalClick);

    // 6. LEAD QUALIFICADO - 30s na página
    const leadTimer = setTimeout(() => {
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("trackCustom", "LeadQualificado");
      }
      trackEvent("lead_qualificado");
    }, 30000);

    return () => {
      window.removeEventListener("click", handleGlobalClick);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(leadTimer);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <TestimonialsSection />
      <ValueAnchorSection />
      <OfferSection />
      <BonusSection />
      <FAQSection />
      <GuaranteeSection />
      <Footer />
      <WhatsAppButton />
      <SocialProofNotification />
    </div>
  );
};

export default Index;
