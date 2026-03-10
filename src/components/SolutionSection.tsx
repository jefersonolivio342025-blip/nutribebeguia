import { Utensils, BookOpen, ShieldAlert, Smartphone } from "lucide-react";

const solutions = [
  {
    icon: Smartphone,
    title: "Tudo dentro do aplicativo",
    desc: "Cardápios, receitas e orientações na palma da sua mão, acessíveis a qualquer momento.",
  },
  {
    icon: BookOpen,
    title: "Receitas organizadas por fase",
    desc: "Do primeiro purê aos sólidos: receitas simples, rápidas e nutritivas para cada etapa.",
  },
  {
    icon: ShieldAlert,
    title: "Alimentos seguros por idade",
    desc: "Saiba o que oferecer e o que evitar em cada fase, reduzindo o risco de engasgos.",
  },
  {
    icon: Utensils,
    title: "Planejamento prático de refeições",
    desc: "Sem improvisar. Tenha um plano claro do que preparar todos os dias para o seu bebê.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            ✨ A Solução
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
            Como o NutriBebê te ajuda
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um aplicativo completo para organizar a alimentação do seu bebê com segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((item, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
