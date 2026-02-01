import { CheckCircle, XCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const idealFor = [
  "Mães de primeira viagem que querem começar a IA com segurança",
  "Quem tem medo de engasgos e não sabe os cortes corretos",
  "Mães que buscam receitas práticas prontas em 15 minutos",
  "Famílias com bebês de 6 a 12 meses iniciando a IA",
  "Quem quer economizar tempo e ter um guia visual completo",
];

const notFor = [
  "Quem busca receitas para crianças maiores de 2 anos",
  "Mães que preferem papinhas industrializadas",
  "Quem não está disposta a preparar refeições caseiras",
];

const TargetAudienceSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="up">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              🎯 Este Guia é Para Você?
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Descubra se o NutriBebê é para você
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Criamos este guia pensando em mães que realmente querem fazer a diferença na alimentação dos seus bebês
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Ideal Para Card */}
          <AnimatedSection animation="left">
            <div className="bg-background rounded-2xl p-6 lg:p-8 border-2 border-primary/20 h-full shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-primary">
                  Ideal Para
                </h3>
              </div>
              <ul className="space-y-4">
                {idealFor.map((item, index) => (
                  <AnimatedSection key={index} animation="left" delay={100 + index * 80}>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground leading-relaxed">{item}</span>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Não é Para Card */}
          <AnimatedSection animation="right">
            <div className="bg-background rounded-2xl p-6 lg:p-8 border-2 border-muted/50 h-full shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-muted/30 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-muted-foreground">
                  Não é Para
                </h3>
              </div>
              <ul className="space-y-4">
                {notFor.map((item, index) => (
                  <AnimatedSection key={index} animation="right" delay={100 + index * 80}>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
