import heroBaby from "@/assets/hero-baby.jpg";

const HeroSection = () => {
  const handleCTAClick = () => {
    window.open("", "_blank");
  };

  return (
    <section className="section-beige min-h-screen">
      <div className="container py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold mb-6">
              📱 NOVO APP NUTRIBEBÊ PRO
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-foreground mb-6">
              Segurança para o seu bebê na <span className="text-primary">palma da mão!</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              <span className="text-2xl">🥗</span>{" "}
              <strong className="text-foreground">Muito mais que um e-book:</strong> Tenha acesso imediato a receitas,
              cardápios e o guia de <span className="text-primary font-semibold">cortes seguros</span> direto no nosso
              aplicativo exclusivo por apenas <span className="text-primary font-semibold"> R$ 29,90.</span>
            </p>

            <div className="space-y-4">
              <button
                onClick={handleCTAClick}
                className="btn-cta-large uppercase tracking-wide shadow-xl shadow-primary/20"
              >
                Quero o App Agora
              </button>
              <p className="text-sm font-bold text-foreground italic">✨ Pagamento único • Sem mensalidades</p>
            </div>
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl opacity-60" />
              <div className="relative mx-auto w-full max-w-[300px] lg:max-w-[350px] border-[8px] border-slate-900 rounded-[3rem] shadow-2xl overflow-hidden bg-white">
                <img src={heroBaby} alt="App NutriBebê Pro" className="w-full object-cover aspect-[9/16]" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-primary/20 text-center">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase">Acesso Vitalício</p>
                  <p className="text-xl font-black text-primary">R$ 29,90</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
