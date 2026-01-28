import { Star, Quote } from "lucide-react";
import testimonialCamila from "@/assets/testimonial-camila.jpg";
import testimonialFernanda from "@/assets/testimonial-fernanda.jpg";
import testimonialJuliana from "@/assets/testimonial-juliana.jpg";

const testimonials = [
  {
    name: "Camila Santos",
    location: "São Paulo, SP",
    text: "Eu tinha muito medo de começar a IA, mas com o guia aprendi os cortes certos e minha filha nunca engasgou. Agora ela come de tudo!",
    rating: 5,
    babyAge: "Mãe da Sofia, 11 meses",
    image: testimonialCamila
  },
  {
    name: "Fernanda Oliveira",
    location: "Curitiba, PR",
    text: "As receitas são práticas e rápidas! Em 15 minutos preparo uma refeição nutritiva. Meu filho ama o bolinho de legumes.",
    rating: 5,
    babyAge: "Mãe do Pedro, 9 meses",
    image: testimonialFernanda
  },
  {
    name: "Juliana Costa",
    location: "Belo Horizonte, MG",
    text: "A lista de alimentos proibidos me salvou! Eu não sabia que mel era perigoso antes de 1 ano. Recomendo para todas as mães!",
    rating: 5,
    babyAge: "Mãe da Luna, 8 meses",
    image: testimonialJuliana
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            💬 Depoimentos Reais
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            O que as mães estão dizendo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mais de 2.500 mães já transformaram a alimentação dos seus bebês com o NutriBebê
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.babyAge}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
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
