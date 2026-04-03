import { useState } from "react";
import { ChevronLeft, ChevronRight, Smartphone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const screens = [
  {
    title: "Cardápio do Dia",
    description: "Saiba exatamente o que oferecer em cada refeição",
    emoji: "🥗",
    features: ["Café da manhã", "Almoço", "Lanche", "Jantar"],
    color: "from-emerald-50 to-teal-50",
  },
  {
    title: "Receitas por Idade",
    description: "Receitas filtradas para a fase do seu bebê",
    emoji: "👶",
    features: ["6 a 8 meses", "9 a 12 meses", "12 a 24 meses"],
    color: "from-orange-50 to-amber-50",
  },
  {
    title: "Guia de Cortes",
    description: "Como cortar cada alimento com segurança (BLW)",
    emoji: "🔪",
    features: ["Fotos ilustrativas", "Por tipo de alimento", "Dicas anti-engasgo"],
    color: "from-blue-50 to-indigo-50",
  },
  {
    title: "Lista de Compras",
    description: "Monte a lista da semana em segundos",
    emoji: "🛒",
    features: ["Geração automática", "Por categoria", "Compartilhável"],
    color: "from-pink-50 to-rose-50",
  },
];

const AppPreviewSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? screens.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === screens.length - 1 ? 0 : c + 1));

  const screen = screens[current];

  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="container px-4 max-w-5xl mx-auto">
        <AnimatedSection animation="up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-5 py-2 rounded-full mb-4">
              <Smartphone className="w-5 h-5" />
              <span>CONHEÇA O APP</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-3">
              Veja o app <span className="text-primary">por dentro</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Um app completo, bonito e fácil de usar — feito por nutricionistas para mães reais.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="scale">
          <div className="relative max-w-sm mx-auto">
            {/* Phone frame */}
            <div className="relative bg-foreground rounded-[2.5rem] p-3 shadow-2xl">
              <div className="bg-card rounded-[2rem] overflow-hidden">
                {/* Status bar */}
                <div className="bg-foreground text-primary-foreground text-xs flex justify-between items-center px-6 py-2">
                  <span>9:41</span>
                  <div className="w-20 h-5 bg-foreground/80 rounded-full" />
                  <span>100%</span>
                </div>

                {/* Screen content */}
                <div className={`bg-gradient-to-b ${screen.color} p-6 min-h-[380px] flex flex-col`}>
                  <div className="text-center mb-6">
                    <span className="text-5xl mb-3 block">{screen.emoji}</span>
                    <h3 className="text-xl font-black text-foreground">{screen.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{screen.description}</p>
                  </div>

                  <div className="space-y-3 flex-1">
                    {screen.features.map((feat, i) => (
                      <div
                        key={i}
                        className="bg-card/80 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                          {i + 1}
                        </div>
                        <span className="text-sm font-semibold text-foreground">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="bg-card border-t border-border px-6 py-3 flex justify-around">
                  {["🏠", "📋", "🔍", "👤"].map((e, i) => (
                    <span key={i} className="text-lg opacity-50">{e}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 sm:-translate-x-14 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 sm:translate-x-14 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-primary w-6" : "bg-border"
                }`}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AppPreviewSection;
