import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    { q: "Como recebo o acesso?", a: "Imediato por e-mail após a compra via Kiwify." },
    { q: "Tem mensalidade?", a: "Não, é pagamento único de R$ 29,90 com acesso vitalício." },
    { q: "Funciona em iPhone e Android?", a: "Sim, funciona perfeitamente em todos os modelos." },
    { q: "O que tem no app?", a: "Cortes BLW em vídeo, receitas e cardápios completos." },
    { q: "Tem garantia?", a: "Sim, você tem 7 dias de garantia total." },
  ];

  return (
    <section id="faq" className="bg-orange-50/50 py-16">
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-black mb-8 text-center text-foreground">Dúvidas Frequentes</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`i-${i}`} className="bg-white border rounded-xl px-4">
              <AccordionTrigger className="text-left font-bold">{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
