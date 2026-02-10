Entendido, Jeferson! Vamos ajustar essa OfferSection para que ela reflita o valor de R$ 29,90, mude o foco do "E-book" para o "App NutriBebê Pro" e mantenha os gatilhos de urgência (o contador e a barra de progresso).

Aqui está o código pronto para você copiar e substituir no seu arquivo. Enviei como texto simples para garantir que você visualize:

import { useState, useEffect } from "react";
import ebookMockup from "@/assets/ebook-mockup.png";
import AnimatedSection from "./AnimatedSection";
import { Progress } from "@/components/ui/progress";

const CountdownTimer = () => {
const [timeLeft, setTimeLeft] = useState({
hours: 2,
minutes: 47,
seconds: 33,
});

useEffect(() => {
const timer = setInterval(() => {
setTimeLeft((prev) => {
let { hours, minutes, seconds } = prev;
if (seconds > 0) {
seconds--;
} else if (minutes > 0) {
minutes--;
seconds = 59;
} else if (hours > 0) {
hours--;
minutes = 59;
seconds = 59;
} else {
return { hours: 2, minutes: 47, seconds: 33 };
}
return { hours, minutes, seconds };
});
}, 1000);
return () => clearInterval(timer);
}, []);

const formatNumber = (num: number) => num.toString().padStart(2, "0");

return (
<div className="flex items-center justify-center gap-2 sm:gap-3">
<div className="flex flex-col items-center">
<div className="bg-destructive text-destructive-foreground text-2xl sm:text-3xl font-black px-3 sm:px-4 py-2 rounded-xl min-w-[60px] sm:min-w-[70px] text-center shadow-lg">
{formatNumber(timeLeft.hours)}
</div>
<span className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">Horas</span>
</div>
<span className="text-2xl sm:text-3xl font-bold text-destructive animate-pulse">:</span>
<div className="flex flex-col items-center">
<div className="bg-destructive text-destructive-foreground text-2xl sm:text-3xl font-black px-3 sm:px-4 py-2 rounded-xl min-w-[60px] sm:min-w-[70px] text-center shadow-lg">
{formatNumber(timeLeft.minutes)}
</div>
<span className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">Min</span>
</div>
<span className="text-2xl sm:text-3xl font-bold text-destructive animate-pulse">:</span>
<div className="flex flex-col items-center">
<div className="bg-destructive text-destructive-foreground text-2xl sm:text-3xl font-black px-3 sm:px-4 py-2 rounded-xl min-w-[60px] sm:min-w-[70px] text-center shadow-lg">
{formatNumber(timeLeft.seconds)}
</div>
<span className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">Seg</span>
</div>
</div>
);
};

const SalesProgress = () => {
const [soldCount, setSoldCount] = useState(847);
const totalUnits = 1000;
const percentage = (soldCount / totalUnits) * 100;

useEffect(() => {
const timer = setInterval(() => {
setSoldCount((prev) => {
if (prev >= 987) return 847;
return prev + 1;
});
}, 45000);
return () => clearInterval(timer);
}, []);

return (
<div className="w-full max-w-md mx-auto">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-semibold text-foreground">
🔥 {soldCount} usuários Pro ativos
</span>
<span className="text-sm text-destructive font-bold">
Restam apenas {totalUnits - soldCount} licenças!
</span>
</div>
<Progress value={percentage} className="h-3 bg-muted" />
<p className="text-xs text-muted-foreground mt-2 text-center">
⚠️ Lote promocional de acesso vitalício limitado
</p>
</div>
);
};

const OfferSection = () => {
const handleCTAClick = () => {
window.open("", "_blank");
};

return (
<section className="bg-card py-16 lg:py-24">
<div className="container">
<AnimatedSection animation="up" className="mb-10">
<SalesProgress />
</AnimatedSection>

);
};

export default OfferSection;