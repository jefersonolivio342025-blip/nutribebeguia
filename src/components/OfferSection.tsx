import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import heroBaby from "@/assets/hero-baby.jpg";

export const OfferSection = () => {
  const [s, setS] = useState(847);
  useEffect(() => {
    const i = setInterval(() => setS((v) => (v < 990 ? v + 1 : 847)), 30000);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="bg-card py-12">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-bold mb-2 text-foreground">
            🔥 {s} ativos. Restam {1000 - s} vagas!
          </p>
          <Progress value={(s / 1000) * 100} className="h-2 max-w-md mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* FOTO DO BEBÊ REESTABELECIDA AQUI */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={heroBaby}
              alt="Bebê comendo de forma saudável"
              className="rounded-[2.5rem] shadow-2xl border-[10px] border-white max-w-xs rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-black mb-4 text-foreground">
              App <span className="text-primary">NutriBebê Pro</span>
            </h2>

            <div className="mb-8 space-y-3 text-sm font-semibold text-muted-foreground">
              <p className="flex items-center gap-2 justify-center lg:justify-start">
                ✅ Guia Visual de Cortes Seguros
              </p>
              <p className="flex items-center gap-2 justify-center lg:justify-start">
                ✅ Cardápios e Receitas Exclusivas
              </p>
              <p className="flex items-center gap-2 justify-center lg:justify-start">
                ✅ Acesso Vitalício (Sem Mensalidade)
              </p>
            </div>

            <div className="mb-8">
              <span className="line-through text-muted-foreground italic text-lg font-medium">R$ 97,00</span>
              <div className="text-6xl font-black text-primary">R$ 29,90</div>
            </div>

            <button
              onClick={() => window.open("https://pay.kiwify.com.br/vrYjxFv", "_blank")}
              className="w-full bg-primary text-white font-black py-5 px-10 rounded-2xl shadow-xl hover:scale-105 transition-transform text-xl"
            >
              QUERO O APP AGORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
