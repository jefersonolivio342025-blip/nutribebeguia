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
    // 1. CAPTURA AS UTMs DA URL (EX: ?utm_source=fb&utm_campaign=anuncio01)
    const query = window.location.search;

    if (query) {
      // 2. FUNÇÃO PARA CARIMBAR OS BOTÕES
      const carimbarBotoes = () => {
        const links = document.querySelectorAll("a");
        links.forEach((link) => {
          // Verifica se o link é do seu WhatsApp ou da sua Kiwify
          if (link.href.includes("wa.me") || link.href.includes("kiwify.com.br")) {
            // Se o botão já não tiver a UTM, a gente adiciona
            if (!link.href.includes("utm_source")) {
              const connector = link.href.includes("?") ? "&" : "?";
              link.href += connector + query.substring(1);
            }
          }
        });
      };

      // Executa logo de cara
      carimbarBotoes();

      // Como o Lovable carrega componentes em tempos diferentes,
      // rodamos novamente após 1.5 segundos para garantir que pegou todos os botões
      setTimeout(carimbarBotoes, 1500);
    }
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
