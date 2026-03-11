import { CalendarDays, BookOpen, CheckSquare } from "lucide-react";

const steps = [
  {
    icon: CalendarDays,
    step: "1️⃣",
    title: "Visualize o cardápio do dia personalizado",
    desc: "Abra o app e veja imediatamente o que preparar para cada refeição, personalizado para a idade do seu bebê.",
  },
  {
    icon: BookOpen,
    step: "2️⃣",
    title: "Acesse receitas seguras e testadas",
    desc: "Receitas adequadas para cada fase — BLW ou papinhas — rápidas, nutritivas e sem complicação.",
  },
  {
    icon: CheckSquare,
    step: "3️⃣",
    title: "Organize as refeições com segurança total",
    desc: "Planeje a semana toda com praticidade, acompanhe o que o bebê já comeu e tenha controle total.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            📱 Como Funciona
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
            Como o aplicativo NutriBebê ajuda no dia a dia
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simples, prático e pensado para a rotina de mães reais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 border border-border shadow-sm text-center h-full">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-2xl mb-2 block">{item.step}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
