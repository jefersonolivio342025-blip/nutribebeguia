import { ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="bg-white border-2 border-primary/20 rounded-3xl p-8 text-center shadow-sm mb-16">
          <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-black mb-4">Garantia Incondicional de 7 Dias</h2>
          <p className="text-muted-foreground mb-8">
            Se você não ficar 100% satisfeita com o <strong>App NutriBebê Pro</strong>, devolvemos todo o seu dinheiro.
            Sem perguntas, sem burocracia. O risco é todo nosso!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-bold">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="text-primary w-5 h-5" /> Sem perguntas
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="text-primary w-5 h-5" /> Reembolso em até 24h
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="text-primary w-5 h-5" /> Compra 100% segura
            </div>
          </div>
          <p className="mt-8 italic text-muted-foreground text-sm">
            "Sua satisfação é nossa prioridade. Confiamos tanto no nosso app que oferecemos essa garantia."
          </p>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl font-black mb-6">Pronta para começar a introdução alimentar com segurança?</h3>
          <button
            onClick={() => window.open("https://pay.kiwify.com.br/9j0V7DB", "_blank")}
            className="w-full max-w-md bg-primary text-white font-black py-5 px-8 rounded-2xl shadow-xl hover:scale-105 transition-transform text-lg"
          >
            QUERO O APP POR R$ 29,90
          </button>
          <p className="mt-4 text-xs text-muted-foreground flex items-center justify-center gap-2">
            🔒 Compra segura · Acesso imediato · Garantia de 7 dias
          </p>
        </div>

        <div className="border-t border-slate-200 pt-12 text-center">
          <h4 className="font-black text-primary text-2xl mb-2">NutriBebê</h4>
          <p className="text-muted-foreground font-medium mb-6">
            Introdução alimentar segura e tranquila para o seu bebê
          </p>
          <p className="text-[11px] text-muted-foreground/60 uppercase tracking-widest font-semibold">
            © 2026 NutriBebê. Todos os direitos reservados.
          </p>
        </div>