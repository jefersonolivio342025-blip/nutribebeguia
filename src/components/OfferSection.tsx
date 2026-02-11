import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

export const OfferSection = () => {
  const [s, setS] = useState(847);
  useEffect(() => {
    const i = setInterval(() => setS((v) => (v < 990 ? v + 1 : 847)), 30000);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="bg-card py-12">
      <div className="container px-4 max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-sm font-bold mb-2">
            🔥 {s} ativos. Restam {1000 - s} vagas!
          </p>
          <Progress value={(s / 1000) * 100} className="h-2" />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4">
              App <span className="text-primary">NutriBebê Pro</span>
            </h2>
            <div className="mb-6 space-y-2 text-sm font-semibold text-muted-foreground">
              <p>✅ Guia Visual de Cortes Seguros (Passo a Passo)</p>
              <p>✅ Cardápios e Receitas Exclusivas</p>
              <p>✅ Acesso Vitalício (Sem Mensalidade)</p>
            </div>
            <div className="mb-6">
              <span className="line-through text-muted-foreground italic">R$ 97,00</span>
              <div className="text-5xl font-black text-primary">R$ 29,90</div>
            </div>
            <button
              onClick={() => window.open("https://pay.kiwify.com.br/9j0V7DB", "_blank")}
              className="w-full lg:w-auto bg-primary text-white font-bold py-4 px-10 rounded-xl"
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
