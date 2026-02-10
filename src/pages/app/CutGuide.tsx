import { useState } from "react";
import { cutGuides } from "@/data/cutGuides";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AlertTriangle, Info } from "lucide-react";

const ageFilters = [
  { value: "", label: "Todos" },
  { value: "6m", label: "6 meses" },
  { value: "9m", label: "9 meses" },
  { value: "12m", label: "1 ano+" },
];

const CutGuide = () => {
  const [selectedAge, setSelectedAge] = useState("");

  const filtered = selectedAge
    ? cutGuides.filter((g) => g.ageRange === selectedAge)
    : cutGuides;

  return (
    <div className="px-4 pt-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-heading font-bold text-foreground mb-2">
        ✂️ Guia de Cortes e Texturas
      </h1>
      <p className="text-sm text-muted-foreground mb-4">
        Aprenda o corte seguro para cada alimento em cada fase do bebê.
      </p>

      {/* Safety banner */}
      <div className="rounded-2xl bg-amber-50 border border-amber-200 p-3 mb-4 flex items-start gap-2">
        <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
        <p className="text-xs text-amber-800">
          <strong>Regra de ouro:</strong> O alimento deve ser macio o suficiente para amassar entre seus dedos indicador e polegar.
        </p>
      </div>

      {/* Age filter */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        {ageFilters.map((age) => (
          <button
            key={age.value}
            onClick={() => setSelectedAge(age.value)}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors",
              selectedAge === age.value ? "bg-app-mint text-white" : "bg-white text-muted-foreground border border-border/50"
            )}
          >
            {age.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3 pb-4">
        {filtered.map((guide) => {
          const isDanger = guide.safetyTip.includes("⚠️") || guide.cutType === "NÃO OFERECER";
          const ageColor = guide.ageRange === "6m" ? "bg-app-mint-light text-app-mint-dark" :
            guide.ageRange === "9m" ? "bg-app-peach-light text-app-peach-dark" :
            "bg-purple-100 text-purple-700";

          return (
            <div
              key={guide.id}
              className={cn(
                "rounded-2xl bg-white p-4 shadow-sm border transition-all",
                isDanger ? "border-red-200" : "border-border/50"
              )}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{guide.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-bold text-foreground">{guide.food}</h3>
                    <Badge variant="secondary" className={cn("text-[10px] rounded-full", ageColor)}>
                      {guide.ageRange === "6m" ? "6m" : guide.ageRange === "9m" ? "9m" : "1a+"}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{guide.description}</p>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Info className="h-3 w-3 text-app-mint-dark" />
                    <span className="text-xs font-semibold text-app-mint-dark">Corte: {guide.cutType}</span>
                  </div>
                  <div className={cn(
                    "rounded-xl p-2 text-xs",
                    isDanger ? "bg-red-50 text-red-700" : "bg-app-mint-light/50 text-app-mint-dark"
                  )}>
                    {guide.safetyTip}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CutGuide;
