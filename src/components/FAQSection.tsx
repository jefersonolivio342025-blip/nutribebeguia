import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "O Guia NutriBebê é indicado para qual idade?",
    answer: "O guia é ideal para bebês a partir dos 6 meses, quando geralmente inicia a introdução alimentar. As receitas e orientações acompanham o desenvolvimento do bebê até os 2 anos de idade, adaptando texturas e consistências conforme cada fase."
  },
  {
    question: "O conteúdo é validado por profissionais de saúde?",
    answer: "Sim! Todo o conteúdo foi desenvolvido e validado por nutricionistas especializadas em pediatria. Seguimos as recomendações da Sociedade Brasileira de Pediatria (SBP) e da Organização Mundial da Saúde (OMS)."
  },
  {
    question: "O guia ensina sobre o método BLW?",
    answer: "Sim! Abordamos tanto a introdução alimentar tradicional quanto o BLW (Baby-Led Weaning) e a introdução participativa. Você aprenderá os cortes seguros e como oferecer os alimentos de forma segura em qualquer método escolhido."
  },
  {
    question: "Recebo o guia impresso em casa?",
    answer: "O Guia NutriBebê é 100% digital. Após a confirmação do pagamento, você recebe acesso imediato por e-mail para baixar o material em PDF. Assim você pode acessar pelo celular, tablet ou computador a qualquer momento."
  },
  {
    question: "E se meu bebê tiver alergia alimentar?",
    answer: "O guia inclui uma seção especial sobre alergias alimentares, com orientações sobre como introduzir alimentos potencialmente alergênicos de forma segura e sinais de alerta que você deve observar."
  },
  {
    question: "Quanto tempo tenho acesso ao material?",
    answer: "O acesso é vitalício! Uma vez que você baixa o PDF, ele é seu para sempre. Você pode consultar quantas vezes quiser, imprimir se desejar e acessar de qualquer dispositivo."
  },
  {
    question: "O guia inclui lista de compras?",
    answer: "Sim! Além das 50 receitas nutritivas, incluímos listas de compras organizadas por fase de desenvolvimento, facilitando sua ida ao supermercado e garantindo que você tenha todos os ingredientes necessários."
  },
  {
    question: "Posso pedir reembolso se não gostar?",
    answer: "Claro! Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeita com o material, basta solicitar o reembolso e devolvemos 100% do seu dinheiro, sem perguntas."
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="up">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Tire Suas Dúvidas
            </span>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground">
              Respondemos as principais dúvidas das mamães sobre o Guia NutriBebê
            </p>
          </div>
        </AnimatedSection>

        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} animation="up" delay={index * 50}>
                <AccordionItem
                  value={`item-${index}`}
                  className="rounded-2xl border border-border bg-card px-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
