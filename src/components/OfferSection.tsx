import { useState, useEffect } from "react";
import ebookMockup from "@/assets/ebook-mockup.png";
import { Progress } from "@/components/ui/progress";

const Timer = () => {
const [t, setT] = useState({ h: 2, m: 47, s: 33 });
useEffect(() => {
const i = setInterval(() => {
setT(p => {
let { h, m, s } = p;
if (s > 0) s--; else if (m > 0) { m--; s = 59; } else if (h > 0) { h--; m = 59; s = 59; }
return { h, m, s };
});
}, 1000);
return () => clearInterval(i);
}, []);
const f = (n: number) => n.toString().padStart(2, "0");
return (
<div className="flex justify-center gap-2 text-white font-bold">
<div className="bg-destructive p-2 rounded">{f(t.h)}</div>:
<div className="bg-destructive p-2 rounded">{f(t.m)}</div>:
<div className="bg-destructive p-2 rounded">{f(t.s)}</div>
</div>
);
};export const OfferSection = () => {
const [s, setS] = useState(847);
useEffect(() => {
const i = setInterval(() => setS(v => v < 990 ? v + 1 : 847), 30000);
return () => clearInterval(i);
}, []);

return (
<section className="bg-card py-12">
<div className="container px-4 max-w-4xl mx-auto text-center">
<div className="mb-8">
<p className="text-sm font-bold mb-2">🔥 {s} ativos. Restam {1000 - s} vagas!</p>
<Progress value={(s/1000)*100} className="h-2" />
</div>
<div className="bg-destructive/10 border p-6 rounded-2xl mb-10">
<p className="text-destructive font-bold mb-2 italic">⏰ Oferta expira em:</p>
<Timer />
</div>
<div className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left">
<img src={ebookMockup} className="w-full max-w-[280px] mx-auto border-[8px] border-slate-900 rounded-[2.5rem] shadow-2xl" alt="App" />
<div className="flex-1">
<h2 className="text-3xl font-black mb-4">App <span className="text-primary">NutriBebê Pro</span></h2>
<div className="mb-6 space-y-2 text-sm font-semibold text-muted-foreground">
<p>✅ Cortes Seguros (Vídeos)</p>
<p>✅ Cardápios e +100 Receitas</p>
<p>✅ Acesso Vitalício (Sem Mensalidade)</p>
</div>
<div className="mb-6">
<span className="line-through text-muted-foreground italic text-lg">R$ 97,00

export default OfferSection;