import { useState, useEffect } from "react";
import ebookMockup from "@/assets/ebook-mockup.png";
import AnimatedSection from "./AnimatedSection";
import { Progress } from "@/components/ui/progress";

const CountdownTimer = () => {
const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 47, seconds: 33 });
useEffect(() => {
const timer = setInterval(() => {
setTimeLeft((prev) => {
let { hours, minutes, seconds } = prev;
if (seconds > 0) seconds--;
else if (minutes > 0) { minutes--; seconds = 59; }
else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
return { hours, minutes, seconds };
});
}, 1000);
return () => clearInterval(timer);
}, []);
const f = (n: number) => n.toString().padStart(2, "0");
return (
<div className="flex justify-center gap-3">
<div className="text-center"><div className="bg-destructive text-white text-2xl font-bold px-3 py-1 rounded-lg">{f(timeLeft.hours)}</div><span className="text-[10px]">HRS</span></div>
<div className="text-center"><div className="bg-destructive text-white text-2xl font-bold px-3 py-1 rounded-lg">{f(timeLeft.minutes)}</div><span className="text-[10px]">MIN</span></div>
<div className="text-center"><div className="bg-destructive text-white text-2xl font-bold px-3 py-1 rounded-lg">{f(timeLeft.seconds)}</div><span className="text-[10px]">SEG</span></div>
</div>
);
};

export const OfferSection = () => {
const [sold, setSold] = useState(847);
useEffect(() => { const t = setInterval(() => setSold(s => s < 985 ? s + 1 : 847), 45000); return () => clearInterval(t); }, []);

return (
<section className="bg-card py-12">
<div className="container px-4 max-w-5xl mx-auto">
<div className="mb-10 text-center">
<p className="font-bold text-sm mb-2">🔥 {sold} usuários ativos. Restam {1000 - sold} vagas!</p>
<Progress value={(sold/1000)*100} className="h-2 max-w-md mx-auto" />
</div>

);
};

export default OfferSection;