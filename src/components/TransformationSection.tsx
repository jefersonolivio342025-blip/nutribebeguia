import momKitchen from "@/assets/mom-kitchen.jpg";
import AnimatedSection from "./AnimatedSection";

const TransformationSection = () => {
  return (
    <section className="section-beige py-16 lg:py-24">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Image */}
          <AnimatedSection animation="left" className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] blur-2xl" />
              <img
                src={momKitchen}
                alt="Mãe tranquila preparando comida saudável para bebê"
                className="relative w-full rounded-3xl shadow-card object-cover aspect-video lg:aspect-[4/3]"
              />
            </div>
          </AnimatedSection>

          {/* Quote */}
          <AnimatedSection animation="right" className="flex-1 text-center lg:text-left">
            <div className="relative">
              <span className="absolute -top-8 -left-4 text-8xl text-primary/20 font-serif">
                "
              </span>
              <blockquote className="relative z-10">
                <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-6">
                  Imagine ter a{" "}
                  <span className="text-primary font-bold">segurança</span> de
                  saber exatamente o que colocar no pratinho hoje,{" "}
                  <span className="text-primary font-bold">sem dúvidas</span> e{" "}
                  <span className="text-primary font-bold">sem medo</span>.
                </p>
              </blockquote>
              <span className="absolute -bottom-4 right-0 lg:-right-4 text-8xl text-primary/20 font-serif">
                "
              </span>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-primary font-bold text-sm"
                  >
                    ⭐
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">+2.500 mães</strong> já
                confiam no NutriBebê
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
