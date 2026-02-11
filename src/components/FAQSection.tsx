import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
const faqs = [
{ q: "Como recebo o acesso?", a: "Imediato por e-mail após a compra." },
{ q: "Tem mensalidade?", a: "Não, é pagamento único de R$ 29,90." },
{ q: "Funciona em iPhone e Android?", a: "Sim, em todos os modelos." },
{ q: "O que tem no app?", a: "Cortes BLW, receitas e cardápios." },
{ q: "Tem garantia?", a: "Sim, 7 dias de garantia total." }
];

return (
<section id="faq" className="bg-orange-50/50 py-16">
<div className="container max-w-3xl mx-auto px-4">
<h2 className="text-3xl font-black mb-8 text-center">Dúvidas Frequentes</h2>
  );
};

export default FAQSection;