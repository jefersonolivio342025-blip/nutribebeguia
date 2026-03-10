import { ArrowRight } from "lucide-react";
import { openCheckout } from "@/lib/checkout";

const ValueAnchorSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-card">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            💰 Comparação de Valor
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-foreground mb-6">
            Quanto custa organizar a alimentação do seu bebê?
          </h2>
        </div>

        <div className="space-y-4 mb-8">
          <div className="bg-background rounded-2xl p-5 border border-border flex items-center justify-between">
            <span className="text-foreground font-medium">Consulta com nutricionista infantil</span>
            <span className="text-muted-foreground font-bold text-lg line-through">R$ 150–300</span>
          </div>
          <div className="bg-background rounded-2xl p-5 border border-border flex items-center justify-between">
            <span className="text-foreground font-medium">App de planejamento de refeições</span>
            <span className="text-muted-foreground font-bold text-lg line-through">R$ 197</span>
          </div>
          <div className="bg-background rounded-2xl p-5 border border-border flex items-center justify-between">
            <span className="text-foreground font-medium">Livro especializado em IA</span>
            <span className="text-muted-foreground font-bold text-lg line-through">R$ 89</span>
          </div>
        </div>

        <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 text-center">
          <p className="text-muted-foreground font-medium mb-2">Com o aplicativo NutriBebê você investe apenas</p>
          <div className="text-5xl font-black text-primary mb-2">R$ 29,90</div>
          <p className="text-foreground font-bold text-lg mb-1">
            🍕 Menos que uma pizza.
          </p>
          <p className="text-sm text-muted-foreground mb-6">Acesso imediato ao aplicativo após a compra.</p>
          <button
            onClick={openCheckout}
            className="inline-flex items-center justify-center px-8 py-4 text-white font-bold rounded-xl hover:scale-105 transition-transform text-lg"
            style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)" }}
          >
            Quero ver os cardápios do meu bebê
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueAnchorSection;
