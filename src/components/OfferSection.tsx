import ebookMockup from "@/assets/ebook-mockup.png";

const OfferSection = () => {
  const handleCTAClick = () => {
    window.open("https://pay.kiwify.com.br/vrYjxFv", "_blank");
  };

  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* E-book Mockup */}
          <div className="flex-1 flex justify-center">
            <div className="relative animate-float">
              <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl" />
              <img
                src={ebookMockup}
                alt="E-book NutriBebê em tablet e smartphone"
                className="relative w-full max-w-sm lg:max-w-md drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Offer Content */}
          <div className="flex-1 text-center lg:text-left">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
