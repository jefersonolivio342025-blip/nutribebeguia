import { Star } from "lucide-react";
import testimonialCamila from "@/assets/testimonial-camila.jpg";
import testimonialFernanda from "@/assets/testimonial-fernanda.jpg";
import testimonialJuliana from "@/assets/testimonial-juliana.jpg";

const testimonials = [
  {
    name: "Camila Santos",
    babyAge: "Mãe da Sofia, 11 meses",
    before: "Eu tinha pavor de oferecer comida sólida. Ficava tremendo só de pensar no engasgo.",
    after: "Hoje a Sofia come banana, cenoura e até frango desfiado sozinha. Eu me sinto segura e tranquila!",
    image: testimonialCamila,
  },
  {
    name: "Fernanda Oliveira",
    babyAge: "Mãe do Pedro, 9 meses",
    before: "Eu não sabia nem por onde começar. Pesquisava no Google e ficava mais confusa ainda.",
    after: "Com o app, em 15 minutos preparo uma refeição nutritiva. O Pedro ama o bolinho de legumes!",
    image: testimonialFernanda,
  },
  {
    name: "Juliana Costa",
    babyAge: "Mãe da Luna, 8 meses",
    before: "Dava só papinha de potinho porque tinha medo de fazer errado com comida de verdade.",
    after: "Agora a Luna come comida caseira todos os dias. A lista de alimentos proibidos me salvou!",
    image: testimonialJuliana,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            💬 Histórias Reais de Transformação
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            De medo a confiança total
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja como outras mães superaram o medo da introdução alimentar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 shadow-lg border border-border h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="mb-4 bg-destructive/5 rounded-xl p-4 border border-destructive/10">
                <p className="text-xs font-bold text-destructive uppercase tracking-wider mb-1">Antes</p>
                <p className="text-sm text-foreground italic">"{t.before}"</p>
              </div>

              <div className="mb-6 bg-primary/5 rounded-xl p-4 border border-primary/10">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Depois</p>
                <p className="text-sm text-foreground italic">"{t.after}"</p>
              </div>

              <div className="mt-auto border-t border-border pt-4 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.babyAge}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
