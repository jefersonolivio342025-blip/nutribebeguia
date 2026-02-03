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
  return (
    <div className="min-h-screen">
      <StickyHeader />

      {/* Removidas as propriedades de clique manuais. 
        O script que colocamos no index.html já rastreia esses botões automaticamente.
      */}
      <HeroSection />

      <BenefitsSection />
      <TransformationSection />
      <TestimonialsSection />
      <TargetAudienceSection />
      <FAQSection />

      <OfferSection />

      <GuaranteeSection />
      <Footer />

      {/* O script global também detecta o clique aqui automaticamente */}
      <WhatsAppButton />

      <SocialProofNotification />
    </div>
  );
};

export default Index;
