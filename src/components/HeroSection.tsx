import { ArrowRight, Check, Smartphone } from "lucide-react";
import heroBaby from "@/assets/hero-baby.jpg";
import { openCheckout } from "@/lib/checkout";

const bullets = [
  "Cardápios prontos por idade",
  "Receitas simples e nutritivas",
  "Organização das refeições do dia",
  "Tudo dentro do aplicativo",
];

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-10 lg:pt-28 lg:pb-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0">
              <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                <Smartphone className="w-4 h-4" />
                +2.500 mães já usam o NutriBebê
              </span>
              <h1 className="text-3xl lg:text-5xl font-black mb-5 text-foreground leading-tight">
                Saiba exatamente o que oferecer ao seu bebê na{" "}
                <span className="text-primary">introdução alimentar</span>.
              </h1>
              <p className="text-lg text-muted-foreground mb-6 font-medium leading-relaxed">
                Cardápios prontos e receitas simples para bebês de 6 a 24 meses, ajudando mães a{" "}
                <strong className="text-foreground">evitar erros comuns na alimentação</strong>.
              </p>

              {/* Safety connection text */}
              <div className="bg-primary/5 border border-primary/15 rounded-2xl p-4 mb-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Muitas mães ficam inseguras na introdução alimentar e têm medo de oferecer alimentos errados que podem causar engasgos ou dificuldade para o bebê.{" "}
                  <strong className="text-foreground">O NutriBebê organiza as refeições e mostra opções adequadas para cada momento do bebê.</strong>
                </p>
              </div>

              <button
                onClick={openCheckout}
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-white font-bold rounded-xl hover:scale-105 transition-transform text-lg"
                style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)" }}
              >
                Quero acessar o aplicativo agora
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
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
