import { useState } from "react";
import { Check, AlertCircle, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FoodEntry {
  id: string;
  food: string;
  date: string;
  reaction: "none" | "mild" | "severe";
  notes: string;
}

const defaultEntries: FoodEntry[] = [
  { id: "1", food: "Banana", date: "2025-02-10", reaction: "none", notes: "" },
  { id: "2", food: "Abóbora", date: "2025-02-08", reaction: "none", notes: "Adorou!" },
  { id: "3", food: "Ovo", date: "2025-02-06", reaction: "mild", notes: "Vermelhidão leve no rosto" },
];

const FoodSchedule = () => {
  const [entries, setEntries] = useState<FoodEntry[]>(defaultEntries);
  const [showForm, setShowForm] = useState(false);
  const [newFood, setNewFood] = useState("");
  const [newReaction, setNewReaction] = useState<FoodEntry["reaction"]>("none");
  const [newNotes, setNewNotes] = useState("");

  const addEntry = () => {
    if (!newFood.trim()) return;
    const entry: FoodEntry = {
      id: Date.now().toString(),
      food: newFood.trim(),
      date: new Date().toISOString().split("T")[0],
      reaction: newReaction,
      notes: newNotes.trim(),
    };
    setEntries([entry, ...entries]);
    setNewFood("");
    setNewReaction("none");
    setNewNotes("");
    setShowForm(false);
  };

  const removeEntry = (id: string) => {
    setEntries(entries.filter((e) => e.id !== id));
  };

  const reactionConfig = {
    none: { label: "Sem reação", color: "bg-app-mint-light text-app-mint-dark", icon: Check },
    mild: { label: "Reação leve", color: "bg-amber-100 text-amber-700", icon: AlertCircle },
    severe: { label: "Reação forte", color: "bg-red-100 text-red-700", icon: AlertCircle },
  };

  return (
    <div className="px-4 pt-6 max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">📅 Cronograma Alimentar</h1>
          <p className="text-sm text-muted-foreground">Registre o que o bebê já provou</p>
        </div>
        <Button
          size="sm"
          onClick={() => setShowForm(!showForm)}
          className="rounded-full bg-app-mint hover:bg-app-mint-dark text-white"
        >
          {showForm ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </Button>
      </div>

      {/* Add form */}
      {showForm && (
        <div className="rounded-2xl bg-white border border-border/50 p-4 mb-4 shadow-sm">
          <h3 className="text-sm font-bold text-foreground mb-3">Novo Alimento</h3>
          <Input
            placeholder="Nome do alimento"
            value={newFood}
            onChange={(e) => setNewFood(e.target.value)}
            className="rounded-xl mb-3"
          />
          <p className="text-xs text-muted-foreground mb-2">Reação alérgica?</p>
          <div className="flex gap-2 mb-3">
            {(["none", "mild", "severe"] as const).map((r) => {
              const cfg = reactionConfig[r];
              return (
                <button
                  key={r}
                  onClick={() => setNewReaction(r)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-semibold transition-colors",
                    newReaction === r ? cfg.color : "bg-muted text-muted-foreground"
                  )}
                >
                  {cfg.label}
                </button>
              );
            })}
          </div>
          <Input
            placeholder="Observações (opcional)"
            value={newNotes}
            onChange={(e) => setNewNotes(e.target.value)}
            className="rounded-xl mb-3"
          />
          <Button onClick={addEntry} className="w-full rounded-xl bg-app-mint hover:bg-app-mint-dark text-white">
            Salvar
          </Button>
        </div>
      )}

      {/* Entries */}
      <div className="flex flex-col gap-2 pb-4">
        {entries.map((entry) => {
          const cfg = reactionConfig[entry.reaction];
          const ReactionIcon = cfg.icon;
          return (
            <div key={entry.id} className="rounded-2xl bg-white p-4 shadow-sm border border-border/50">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-bold text-foreground">{entry.food}</h3>
                <button onClick={() => removeEntry(entry.id)} className="text-muted-foreground hover:text-red-500 transition-colors">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="text-[10px] text-muted-foreground mb-2">{entry.date}</p>
              <div className="flex items-center gap-2">
                <span className={cn("inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-semibold", cfg.color)}>
                  <ReactionIcon className="h-3 w-3" />
                  {cfg.label}
                </span>
                {entry.notes && (
                  <span className="text-xs text-muted-foreground truncate">{entry.notes}</span>
                )}
              </div>
            </div>
          );
        })}
        {entries.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-lg mb-1">📋</p>
            <p className="text-sm">Nenhum alimento registrado ainda.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodSchedule;
