import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
const faqs = [
{
question: "Como recebo o acesso ao App NutriBebê Pro?",
answer: "O acesso é imediato! Assim que o seu pagamento for aprovado (no cartão ou PIX), você receberá um e-mail da Kiwify com o link exclusivo e as instruções para acessar a nossa plataforma e instalar o app no seu celular.",
},
{
question: "Preciso pagar mensalidade?",
answer: "Não! O NutriBebê Pro é de pagamento único. Você paga apenas R$ 29,90 uma vez e tem acesso vitalício a todas as receitas, cardápios e atualizações futuras sem nunca mais pagar nada.",
},
{
question: "O App funciona em qualquer celular?",
answer: "Sim! Nossa plataforma é compatível com Android e iPhone (iOS). Você poderá acessar pelo celular, tablet ou até pelo computador.",
},
{
question: "O que vem dentro do aplicativo?",
answer: "Você terá acesso ao guia visual de cortes seguros (BLW), cronogramas de introdução alimentar passo a passo, uma biblioteca com mais de 100 receitas saudáveis e cardápios semanais completos para não precisar pensar no que cozinhar.",
},
{
question: "O pagamento é seguro?",
answer: "Totalmente. O pagamento é processado pela Kiwify, uma das maiores e mais seguras plataformas de produtos digitais do Brasil. Seus dados estão 100% protegidos.",
},
{
question: "E se eu não gostar, tenho garantia?",
answer: "Com certeza! Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você achar que o conteúdo não é para você, basta solicitar o reembolso e devolvemos 100% do seu dinheiro.",
},
];

return (
<section id="faq" className="section-beige">
<div className="container py-16 lg:py-24 max-w-3xl mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
Dúvidas <span className="text-primary">Frequentes</span>
</h2>
<p className="text-muted-foreground font-medium">
Tudo o que você precisa saber sobre o NutriBebê Pro.
</p>
</div>

);
};

export default FAQSection;