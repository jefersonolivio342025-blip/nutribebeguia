import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
const faqs = [
{ q: "Como recebo o acesso?", a: "Imediato! Você recebe um e-mail da Kiwify com o link do app assim que o pagamento for aprovado." },
{ q: "Preciso pagar mensalidade?", a: "Não! É pagamento único de R$ 29,90 com acesso vitalício." },
{ q: "Funciona em qualquer celular?", a: "Sim! É compatível com Android e iPhone (iOS)." },
{ q: "O que tem no app?", a: "Guia de cortes seguros, cronogramas de introdução alimentar e +100 receitas." },
{ q: "É seguro?", a: "Sim, o pagamento é processado pela Kiwify com 7 dias de garantia." }
];

return (
<section id="faq" className="bg-orange-50/50 py-16">
<div className="container max-w-3xl mx-auto px-4">
<div className="text-center mb-10">
<h2 className="text-3xl font-black mb-2 text-foreground">Dúvidas Frequentes</h2>
<p className="text-muted-foreground">Tudo sobre o NutriBebê Pro</p>
</div>
<Accordion type="single" collapsible className="space-y-3">
{faqs.map((f, i) => (
<AccordionItem key={i} value={item-${i}} className="bg-white border rounded-xl px-4 shadow-sm">
<AccordionTrigger className="text-left font-bold">{f.q}</AccordionTrigger>
<AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
</AccordionItem>
))}
</Accordion>
</div>
</section>
);
};

export default FAQSection;