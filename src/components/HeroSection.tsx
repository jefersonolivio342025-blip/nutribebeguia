import heroBaby from "@/assets/hero-baby.jpg";

const HeroSection = () => {
  const handleCTAClick = () => {
    window.open("https://kiwify.app/xIOcCei", "_blank");
  };

  return (
    <section className="section-beige min-h-screen">
      <div className="container py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-foreground mb-6 animate-slide-up">
              Você tem medo do seu bebê{" "}
              <span className="text-primary">engasgar?</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <span className="text-2xl">🌱</span>{" "}
              <strong className="text-foreground">Introdução Alimentar Segura:</strong>{" "}
              Descubra o método validado por nutricionistas que ensina os{" "}
              <span className="text-primary font-semibold">cortes corretos</span> e{" "}
              <span className="text-primary font-semibold">texturas seguras</span> para o seu bebê.
            </p>

            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <button
                onClick={handleCTAClick}
                className="btn-cta-large uppercase tracking-wide animate-bounce-gentle"
              >
                Quero o Guia Agora
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 order-1 lg:order-2 animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl" />
              <img
                src={heroBaby}
                alt="Bebê feliz comendo fruta de forma segura"
                className="relative w-full max-w-md lg:max-w-lg mx-auto rounded-[2rem] shadow-card object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
