import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Clock, Check, ArrowRight, Smartphone } from "lucide-react";
import { openCheckout } from "@/lib/checkout";

const CYCLE_SECONDS = 2 * 3600 + 47 * 60 + 33;

const includes = [
  "Acesso imediato ao aplicativo completo",
  "Cardápios prontos para cada fase",
  "Receitas organizadas por idade",
  "Atualizações inclusas para sempre",
  "Garantia incondicional de 7 dias",
];

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
            🔥 {s} mães já acessaram. Restam {1000 - s} vagas!
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

        <div className="w-full text-center lg:text-left max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-2 text-foreground text-center">
            Comece hoje por apenas
          </h2>
          <div className="mb-2 text-center">
            <span className="line-through text-muted-foreground italic text-lg font-medium">R$ 97,00</span>
            <div className="text-6xl font-black text-primary">R$ 29,90</div>
          </div>
          <p className="text-center text-foreground font-semibold mb-6">
            <Smartphone className="w-4 h-4 inline mr-1" />
            Acesso imediato ao aplicativo após a compra.
          </p>

          <ul className="mb-8 space-y-3">
            {includes.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground justify-center lg:justify-start">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <button
            onClick={openCheckout}
            className="w-full max-w-md mx-auto text-white font-black py-5 px-10 rounded-2xl hover:scale-105 transition-transform text-xl flex items-center justify-center gap-2"
            style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)" }}
          >
            Quero ver os cardápios do meu bebê
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
