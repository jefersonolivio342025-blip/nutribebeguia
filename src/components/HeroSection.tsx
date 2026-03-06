import { ArrowRight, Check } from "lucide-react";
import heroBaby from "@/assets/hero-baby.jpg";
import { openCheckout } from "@/lib/checkout";

const bullets = [
  "Cortes seguros por idade",
  "Lista de alimentos permitidos e proibidos",
  "Receitas nutritivas simples",
  "Guia prático dentro do app",
];

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                👶 +2.500 mães já confiam no NutriBebê
              </span>
              <h1 className="text-4xl lg:text-5xl font-black mb-5 text-foreground leading-tight">
                Transforma a introdução alimentar no momento mais{" "}
                <span className="text-primary">alegre e seguro</span> do teu dia! 🥕✨
              </h1>
              <p className="text-lg text-muted-foreground mb-8 font-medium leading-relaxed">
                Descobre como ter a confiança para ver o teu bebé a explorar novos sabores com um sorriso no rosto,{" "}
                <strong className="text-foreground">sem o stress e o receio constante do engasgo</strong>.
              </p>

              <button
                onClick={openCheckout}
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-white font-bold rounded-xl hover:scale-105 transition-transform text-lg"
                style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)" }}
              >
                QUERO O MEU BEBÊ COMENDO ASSIM
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>

              <ul className="mt-6 space-y-2.5">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 flex justify-center">
            <img
              src={heroBaby}
              alt="Bebê comendo de forma saudável durante introdução alimentar"
              className="rounded-3xl shadow-xl max-w-sm w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
