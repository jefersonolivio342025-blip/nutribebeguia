import { ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="bg-slate-50 py-16 border-t">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="bg-white border-2 border-primary/20 rounded-3xl p-8 text-center shadow-sm mb-16">
          <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-black mb-4 text-foreground">Garantia Incondicional de 7 Dias</h2>
          <p className="text-muted-foreground mb-8">
            Se você não ficar 100% satisfeita com o <strong>App NutriBebê Pro</strong>, devolvemos todo o seu dinheiro.
            Sem perguntas, sem burocracia. O risco é todo nosso!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-bold text-foreground">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="text-primary w-5 h-5" /> Sem perguntas
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="text-primary w-5 h-5" /> Reembolso em 24h
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="text-primary w-5 h-5" /> Compra Segura
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-black mb-6 text-foreground text-center">
            Pronta para começar a introdução alimentar com segurança?
          </h3>
          <button
            onClick={() => window.open("https://pay.kiwify.com.br/vrYjxFv", "_blank")}
            className="w-full max-w-md text-white font-black py-5 px-8 rounded-2xl hover:scale-105 transition-transform text-lg"
            style={{ background: 'var(--gradient-cta)', boxShadow: 'var(--shadow-cta)' }}
          >
            QUERO O APP POR R$ 29,90
          </button>
          <p className="mt-4 text-xs text-muted-foreground italic text-center">
            🔒 Compra segura · Acesso imediato · Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
