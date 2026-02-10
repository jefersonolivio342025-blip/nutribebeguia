import { useState, useMemo } from "react";
import { Search, Filter, Clock, AlertTriangle } from "lucide-react";
import { recipes, categories, ageRanges, type Recipe } from "@/data/recipes";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Link, useSearchParams } from "react-router-dom";

const Recipes = () => {
  const [searchParams] = useSearchParams();
  const initialAge = searchParams.get("age") || "";
  
  const [search, setSearch] = useState("");
  const [selectedAge, setSelectedAge] = useState(initialAge);
  const [selectedCategory, setSelectedCategory] = useState("");

  const filtered = useMemo(() => {
    return recipes.filter((r) => {
      const matchSearch = !search || r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.ingredients.some((i) => i.toLowerCase().includes(search.toLowerCase()));
      const matchAge = !selectedAge || r.ageRange === selectedAge;
      const matchCat = !selectedCategory || r.category === selectedCategory;
      return matchSearch && matchAge && matchCat;
    });
  }, [search, selectedAge, selectedCategory]);

  return (
    <div className="px-4 pt-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-heading font-bold text-foreground mb-4">
        📖 Biblioteca de Receitas
      </h1>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar receita ou ingrediente..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 rounded-xl bg-white border-border/50"
        />
      </div>

      {/* Age Filter */}
      <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
        <button
          onClick={() => setSelectedAge("")}
          className={cn(
            "px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors",
            !selectedAge ? "bg-app-mint text-white" : "bg-white text-muted-foreground border border-border/50"
          )}
        >
          Todas
        </button>
        {ageRanges.map((age) => (
          <button
            key={age.value}
            onClick={() => setSelectedAge(selectedAge === age.value ? "" : age.value)}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors",
              selectedAge === age.value ? "bg-app-mint text-white" : "bg-white text-muted-foreground border border-border/50"
            )}
          >
            {age.label}
          </button>
        ))}
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        <button
          onClick={() => setSelectedCategory("")}
          className={cn(
            "px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors",
            !selectedCategory ? "bg-app-peach text-white" : "bg-white text-muted-foreground border border-border/50"
          )}
        >
          Todas
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(selectedCategory === cat ? "" : cat)}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors",
              selectedCategory === cat ? "bg-app-peach text-white" : "bg-white text-muted-foreground border border-border/50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-xs text-muted-foreground mb-3">{filtered.length} receita(s) encontrada(s)</p>

      {/* Recipe cards */}
      <div className="flex flex-col gap-3 pb-4">
        {filtered.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-lg mb-1">🔍</p>
            <p className="text-sm">Nenhuma receita encontrada.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const ageLabel = ageRanges.find((a) => a.value === recipe.ageRange)?.label;
  const ageColor = recipe.ageRange === "6m" ? "bg-app-mint-light text-app-mint-dark" :
    recipe.ageRange === "9m" ? "bg-app-peach-light text-app-peach-dark" :
    "bg-purple-100 text-purple-700";

  return (
    <Link
      to={`/app/receitas/${recipe.id}`}
      className="block rounded-2xl bg-white p-4 shadow-sm border border-border/50 hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-sm font-bold text-foreground leading-snug flex-1 pr-2">{recipe.title}</h3>
        <Badge variant="secondary" className={cn("text-[10px] shrink-0 rounded-full", ageColor)}>
          {ageLabel}
        </Badge>
      </div>
      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{recipe.description}</p>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{recipe.prepTime} min</span>
        </div>
        {recipe.allergens.length > 0 && (
          <div className="flex items-center gap-1 text-xs text-app-peach-dark">
            <AlertTriangle className="h-3 w-3" />
            <span>{recipe.allergens.length} alérgeno(s)</span>
          </div>
        )}
        <Badge variant="outline" className="text-[10px] rounded-full ml-auto">{recipe.category}</Badge>
      </div>
    </Link>
  );
};

export default Recipes;
