import { useState, useEffect } from "react";
import ebookMockup from "@/assets/ebook-mockup.png";
import AnimatedSection from "./AnimatedSection";
import { Progress } from "@/components/ui/progress";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 33,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          return { hours: 2, minutes: 47, seconds: 33 };
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      <div className="flex flex-col items-center">
        <div className="bg-destructive text-destructive-foreground text-2xl sm:text-3xl font-black px-3 sm:px-4 py-2 rounded-xl min-w-[60px] sm:min-w-[70px] text-center shadow-lg">
          {formatNumber(timeLeft.hours)}
        </div>
        <span className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">Horas</span>
      </div>
      <span className="text-2xl sm:text-3xl font-bold text-destructive animate-pulse">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-destructive text-destructive-foreground text-2xl sm:text-3xl font-black px-3 sm:px-4 py-2 rounded-xl min-w-[60px] sm:min-w-[70px] text-center shadow-lg">
          {formatNumber(timeLeft.minutes)}
        </div>
        <span className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">Min</span>
      </div>
      <span className="text-2xl sm:text-3xl font-bold text-destructive animate-pulse">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-destructive text-destructive-foreground text-2xl sm:text-3xl font-black px-3 sm:px-4 py-2 rounded-xl min-w-[60px] sm:min-w-[70px] text-center shadow-lg">
          {formatNumber(timeLeft.seconds)}
        </div>
        <span className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">Seg</span>
      </div>
    </div>
  );
};

const SalesProgress = () => {
  const [soldCount, setSoldCount] = useState(847);
  const totalUnits = 1000;
  const percentage = (soldCount / totalUnits) * 100;

  useEffect(() => {
    // Simulate slow increase in sales
    const timer = setInterval(() => {
      setSoldCount((prev) => {
        if (prev >= 987) return 847; // Reset to create loop
        return prev + 1;
      });
    }, 45000); // Every 45 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-foreground">
          🔥 {soldCount} vendidos
        </span>
        <span className="text-sm text-destructive font-bold">
          Restam apenas {totalUnits - soldCount}!
        </span>
      </div>
      <Progress 
        value={percentage} 
        className="h-3 bg-muted"
      />
      <p className="text-xs text-muted-foreground mt-2 text-center">
        ⚠️ Lote promocional com unidades limitadas
      </p>
    </div>
  );
};

const OfferSection = () => {
  const handleCTAClick = () => {
    window.open("https://pay.kiwify.com.br/9j0V7DB", "_blank");
  };

  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="container">
        {/* Sales Progress */}
        <AnimatedSection animation="up" className="mb-10">
          <SalesProgress />
        </AnimatedSection>

        {/* Urgency Banner */}
        <AnimatedSection animation="scale" className="mb-10">
          <div className="bg-destructive/10 border-2 border-destructive/30 rounded-2xl p-6 text-center max-w-2xl mx-auto">
            <p className="text-destructive font-bold text-lg mb-4">
              ⏰ Oferta expira em:
            </p>
            <CountdownTimer />
            <p className="text-sm text-muted-foreground mt-4">
              Depois desse tempo, o preço volta para R$ 47,00
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* E-book Mockup */}
          <AnimatedSection animation="left" className="flex-1 flex justify-center">
            <div className="relative animate-float">
              <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl" />
              <img
                src={ebookMockup}
                alt="E-book NutriBebê em tablet e smartphone"
                className="relative w-full max-w-sm lg:max-w-md drop-shadow-2xl"
              />
            </div>
          </AnimatedSection>

          {/* Offer Content */}
          <AnimatedSection animation="right" className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
              🎁 Oferta Especial por Tempo Limitado
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Guia Completo{" "}
              <span className="text-primary">NutriBebê</span>
            </h2>

            <ul className="space-y-3 mb-8 text-left max-w-md mx-auto lg:mx-0">
              {[
                "Guia completo de cortes seguros com fotos",
                "50 receitas nutritivas e rápidas",
                "Lista de alimentos proibidos até 1 ano",
                "Cronograma de introdução alimentar",
                "Bônus: Cardápio semanal pronto",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary text-xl flex-shrink-0">✓</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* Pricing */}
            <div className="mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-2">
                <span className="text-2xl text-muted-foreground line-through">
                  R$ 47,00
                </span>
                <span className="px-3 py-1 bg-destructive/10 text-destructive font-bold rounded-full text-sm">
                  -68% OFF
                </span>
              </div>
              <div className="flex items-baseline justify-center lg:justify-start gap-2">
                <span className="text-lg text-muted-foreground">por apenas</span>
                <span className="text-5xl lg:text-6xl font-black text-primary">
                  R$ 14,90
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleCTAClick}
              className="btn-cta-large w-full sm:w-auto uppercase tracking-wide text-lg animate-pulse-soft"
            >
              Sim! Quero o Guia por R$ 14,90
            </button>

            <p className="mt-4 text-sm text-muted-foreground">
              🔒 Pagamento 100% seguro · Acesso imediato
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
