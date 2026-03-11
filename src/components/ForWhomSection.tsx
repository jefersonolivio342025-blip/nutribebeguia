import { Check } from "lucide-react";

const targets = [
  "Mães de bebês entre 6 e 24 meses",
  "Quem está iniciando a introdução alimentar agora",
  "Mães que trabalham fora e precisam de praticidade",
  "Quem sente insegurança sobre o que o bebê pode ou não comer",
];

const ForWhomSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-card">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            🎯 Para Quem É
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
            Para quem é o NutriBebê
          </h2>
          <p className="text-muted-foreground text-lg">
            Se você se identifica com algum destes pontos, o app foi feito para você.
          </p>
        </div>

        <div className="space-y-4">
          {targets.map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-background rounded-2xl p-5 border border-border shadow-sm">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <p className="text-foreground font-medium text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
