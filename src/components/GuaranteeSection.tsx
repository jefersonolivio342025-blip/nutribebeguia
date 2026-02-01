import AnimatedSection from "./AnimatedSection";
import { Shield, CheckCircle, RefreshCcw } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="container">
        <AnimatedSection animation="scale">
          <div className="max-w-3xl mx-auto">
            {/* Guarantee Card */}
            <div className="relative bg-card rounded-3xl p-8 lg:p-12 text-center border-2 border-primary/20 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-4 left-4 w-32 h-32 bg-primary rounded-full blur-3xl" />
                <div className="absolute bottom-4 right-4 w-40 h-40 bg-primary rounded-full blur-3xl" />
              </div>

              {/* Seal/Badge */}
              <AnimatedSection animation="up" delay={100}>
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="absolute w-32 h-32 bg-primary/10 rounded-full animate-pulse" />
                  <div className="relative w-28 h-28 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-24 h-24 bg-card rounded-full flex flex-col items-center justify-center border-4 border-primary">
                      <Shield className="w-8 h-8 text-primary mb-1" />
                      <span className="text-2xl font-black text-primary">7</span>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wide">dias</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Title */}
              <AnimatedSection animation="up" delay={200}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Garantia <span className="text-primary">Incondicional</span> de 7 Dias
                </h2>
              </AnimatedSection>

              {/* Description */}
              <AnimatedSection animation="up" delay={300}>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Se você não ficar 100% satisfeita com o Guia NutriBebê, devolvemos todo o seu dinheiro. 
                  Sem perguntas, sem burocracia. O risco é todo nosso!
                </p>
              </AnimatedSection>

              {/* Guarantee Points */}
              <AnimatedSection animation="up" delay={400}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">Sem perguntas</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <RefreshCcw className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">Reembolso em até 24h</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">Compra 100% segura</span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Trust message */}
              <AnimatedSection animation="up" delay={500}>
                <p className="mt-8 text-sm text-muted-foreground italic">
                  "Sua satisfação é nossa prioridade. Confiamos tanto no nosso guia que oferecemos essa garantia."
                </p>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GuaranteeSection;
