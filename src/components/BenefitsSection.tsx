import { CalendarDays, BookOpen, Lightbulb, HelpCircle } from "lucide-react";

const benefits = [
  {
    icon: CalendarDays,
    title: "Cardápios prontos para bebês",
    description: "Saiba o que preparar em cada refeição, sem precisar pesquisar ou adivinhar.",
  },
  {
    icon: BookOpen,
    title: "Receitas simples para introdução alimentar",
    description: "Receitas práticas, rápidas e adequadas para cada fase do bebê.",
  },
  {
    icon: Lightbulb,
    title: "Ideias de refeições para o dia a dia",
    description: "Chega de ficar sem saber o que oferecer. Tenha opções variadas sempre à mão.",
  },
  {
    icon: HelpCircle,
    title: "Ajuda prática para mães",
    description: "Perfeito para quem não sabe por onde começar ou quer mais segurança na alimentação do bebê.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            ✅ Benefícios
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O que você encontra no{" "}
            <span className="text-primary">NutriBebê</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4 bg-card rounded-2xl p-6 border border-border shadow-sm h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
