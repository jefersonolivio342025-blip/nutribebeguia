import { BookOpen, Scissors, CalendarDays, Baby, Heart, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { to: "/app/receitas", icon: ChefHat, label: "Receitas do Dia", color: "bg-app-mint-light text-app-mint-dark" },
  { to: "/app/cortes", icon: Scissors, label: "Guia de Cortes", color: "bg-app-peach-light text-app-peach-dark" },
  { to: "/app/cronograma", icon: CalendarDays, label: "Cronograma", color: "bg-app-mint-light text-app-mint-dark" },
  { to: "/app/receitas?age=6m", icon: Baby, label: "Bebê 6m", color: "bg-app-peach-light text-app-peach-dark" },
];

const tips = [
  "Ofereça água em copo aberto desde o início da IA.",
  "Nunca force o bebê a comer — respeite os sinais de saciedade.",
  "Introduza um alimento novo por vez e espere 3 dias para observar reações.",
  "Alimentos BLW devem ser macios o suficiente para amassar entre os dedos.",
  "Evite sal, açúcar e mel até 1 ano de idade.",
];

const Dashboard = () => {
  const tipOfDay = tips[new Date().getDay() % tips.length];

  return (
    <div className="px-4 pt-6 max-w-lg mx-auto relative">

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">👋</span>
          <h1 className="text-2xl font-heading font-bold text-foreground">Olá, mamãe!</h1>
        </div>
        <p className="text-muted-foreground text-sm">Vamos preparar algo gostoso para o seu bebê hoje?</p>
      </div>

      {/* Tip of the Day */}
      <div className="rounded-2xl bg-gradient-to-br from-app-mint-light to-white p-4 mb-6 border border-app-mint/20">
        <div className="flex items-start gap-3">
          <div className="rounded-full bg-app-mint/20 p-2 mt-0.5">
            <Heart className="h-4 w-4 text-app-mint-dark" />
          </div>
          <div>
            <p className="text-xs font-semibold text-app-mint-dark uppercase tracking-wide mb-1">Dica do dia</p>
            <p className="text-sm text-foreground leading-relaxed">{tipOfDay}</p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <h2 className="text-lg font-heading font-bold text-foreground mb-3">Atalhos Rápidos</h2>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {quickLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="flex flex-col items-center gap-2 rounded-2xl bg-white p-4 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
          >
            <div className={`rounded-xl p-3 ${link.color}`}>
              <link.icon className="h-6 w-6" />
            </div>
            <span className="text-sm font-semibold text-foreground">{link.label}</span>
          </Link>
        ))}
      </div>

      {/* Stats */}
      <h2 className="text-lg font-heading font-bold text-foreground mb-3">Seu Progresso</h2>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: "Receitas", value: "25", icon: BookOpen },
          { label: "Guias", value: "16", icon: Scissors },
          { label: "Dias ativos", value: "∞", icon: CalendarDays },
        ].map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-white p-3 text-center shadow-sm border border-border/50">
            <stat.icon className="h-5 w-5 mx-auto mb-1 text-app-mint-dark" />
            <p className="text-xl font-bold text-foreground">{stat.value}</p>
            <p className="text-[10px] text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
