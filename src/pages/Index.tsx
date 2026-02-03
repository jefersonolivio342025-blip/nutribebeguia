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
  // CONFIGURAÇÕES DO SUPABASE (Centralizadas)
  const supabaseUrl = "https://jdpycowlojjccbqmoaxj.supabase.co";
  const supabaseKey = "sb_publishable_1m1xv0ewxsSwRaaCztCPLQ_JZzd5nnu";

  // FUNÇÃO PARA RASTREAR QUALQUER COISA (Visitas ou Cliques)
  const trackEvent = async (eventType: string, extraMetadata = {}) => {
    const urlParams = new URLSearchParams(window.location.search);
    try {
      await fetch(`${supabaseUrl}/rest/v1/leads_tracking`, {
        method: "POST",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          user_id: "5ec9e6d7-88c1-4b22-9a46-4a247f870fc6",
          event_type: eventType,
          page_path: window.location.pathname,
          metadata: {
            origem: urlParams.get("utm_source") || "direto",
            campanha: urlParams.get("utm_campaign") || "nenhuma",
            ...extraMetadata,
          },
        }),
      });
      console.log(`Evento ${eventType} rastreado!`);
    } catch (e) {
      console.error("Erro no rastreio:", e);
    }
  };

  // Rastreia a visita automaticamente quando a página abre
  useEffect(() => {
    trackEvent("visita_nutribebe_final");
  }, []);

  return (
    <div className="min-h-screen">
      <StickyHeader />
      {/* Adicionamos a função de clique nos principais botões */}
      <HeroSection onCtaClick={() => trackEvent("clique_hero_checkout")} />
      <BenefitsSection />
      <TransformationSection />
      <TestimonialsSection />
      <TargetAudienceSection />
      <FAQSection />
      <OfferSection onCheckoutClick={() => trackEvent("clique_oferta_pagamento")} />
      <GuaranteeSection />
      <Footer />
      {/* Botão flutuante do WhatsApp */}
      <div onClick={() => trackEvent("clique_whatsapp_suporte")}>
        <WhatsAppButton />
      </div>
      <SocialProofNotification />
    </div>
  );
};

export default Index;
