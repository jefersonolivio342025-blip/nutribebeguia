import { AlertTriangle } from "lucide-react";

const pains = [
  { emoji: "😰", text: "Medo constante de engasgo toda vez que o bebê come" },
  { emoji: "😟", text: "Ansiedade na hora de servir alimentos sólidos" },
  { emoji: "🤔", text: "Dúvidas se está fazendo certo com a introdução alimentar" },
  { emoji: "😔", text: "Insegurança sobre o que pode ou não pode oferecer" },
];

const PainSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-card">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-5">
            <AlertTriangle className="w-4 h-4" />
            Isso te parece familiar?
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-foreground">
            Você também sente isso?
          </h2>
        </div>

        <div className="space-y-4 mb-10">
          {pains.map((pain, i) => (
            <div key={i} className="flex items-center gap-4 bg-background rounded-2xl p-5 border border-border shadow-sm">
              <span className="text-3xl flex-shrink-0">{pain.emoji}</span>
              <p className="text-foreground font-medium text-lg">{pain.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-primary/5 rounded-2xl p-6 border border-primary/20">
          <p className="text-lg text-foreground font-semibold leading-relaxed">
            💛 Você <strong>não está sozinha</strong>. A maioria das mães passa por isso.
          </p>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            Mas <strong className="text-foreground">não precisa de ser assim</strong>. O NutriBebê foi criado para transformar esse pavor em <span className="text-primary font-semibold">tranquilidade</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
