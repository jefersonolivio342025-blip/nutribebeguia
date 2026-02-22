import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Clock } from "lucide-react";
import heroBaby from "@/assets/hero-baby.jpg";

const CYCLE_SECONDS = 2 * 3600 + 47 * 60 + 33;

export const OfferSection = () => {
  const [s, setS] = useState(847);
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = sessionStorage.getItem("nb_countdown");
    return saved ? Math.max(0, parseInt(saved, 10)) : CYCLE_SECONDS;
  });

  useEffect(() => {
    const i = setInterval(() => setS((v) => (v < 990 ? v + 1 : 847)), 30000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const i = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev <= 0 ? CYCLE_SECONDS : prev - 1;
        sessionStorage.setItem("nb_countdown", String(next));
        return next;
      });
    }, 1000);
    return () => clearInterval(i);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="bg-card py-12">
      <div className="container px-4 max-w-4xl mx-auto">
        {/* Urgency bar */}
        <div className="text-center mb-4">
          <p className="text-sm font-bold mb-2 text-foreground">
            🔥 {s} ativos. Restam {1000 - s} vagas!
          </p>
          <Progress value={(s / 1000) * 100} className="h-2 max-w-md mx-auto" />
        </div>

        {/* Countdown timer */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <Clock className="w-5 h-5 text-destructive animate-pulse" />
          <span className="text-sm font-bold text-destructive">Oferta expira em:</span>
          <div className="flex gap-1">
            {[
              { value: pad(hours), label: "h" },
              { value: pad(minutes), label: "m" },
              { value: pad(seconds), label: "s" },
            ].map((unit, i) => (
              <span key={i} className="bg-foreground text-background font-black text-lg px-2.5 py-1 rounded-lg tabular-nums">
                {unit.value}
                <span className="text-xs font-medium ml-0.5">{unit.label}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
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
              className="w-full bg-primary text-primary-foreground font-black py-5 px-10 rounded-2xl shadow-xl hover:scale-105 transition-transform text-xl"
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
