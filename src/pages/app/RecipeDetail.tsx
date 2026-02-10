import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, AlertTriangle, ChefHat } from "lucide-react";
import { recipes, ageRanges } from "@/data/recipes";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="px-4 pt-6 max-w-lg mx-auto text-center py-20">
        <p className="text-lg mb-2">😕</p>
        <p className="text-muted-foreground">Receita não encontrada.</p>
        <Link to="/app/receitas" className="text-app-mint-dark underline text-sm mt-2 inline-block">
          Voltar às receitas
        </Link>
      </div>
    );
  }

  const ageLabel = ageRanges.find((a) => a.value === recipe.ageRange)?.label;
  const ageColor = recipe.ageRange === "6m" ? "bg-app-mint-light text-app-mint-dark" :
    recipe.ageRange === "9m" ? "bg-app-peach-light text-app-peach-dark" :
    "bg-purple-100 text-purple-700";

  return (
    <div className="px-4 pt-4 max-w-lg mx-auto pb-4">
      {/* Back */}
      <Link to="/app/receitas" className="inline-flex items-center gap-1 text-sm text-muted-foreground mb-4 hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </Link>

      {/* Title */}
      <div className="mb-4">
        <div className="flex items-start gap-2 mb-2">
          <h1 className="text-xl font-heading font-bold text-foreground flex-1">{recipe.title}</h1>
          <Badge variant="secondary" className={cn("text-xs shrink-0 rounded-full", ageColor)}>
            {ageLabel}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{recipe.description}</p>
      </div>

      {/* Meta */}
      <div className="flex gap-3 mb-5">
        <div className="flex items-center gap-1.5 rounded-xl bg-app-mint-light px-3 py-2">
          <Clock className="h-4 w-4 text-app-mint-dark" />
          <span className="text-xs font-semibold text-app-mint-dark">{recipe.prepTime} min</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-xl bg-app-peach-light px-3 py-2">
          <ChefHat className="h-4 w-4 text-app-peach-dark" />
          <span className="text-xs font-semibold text-app-peach-dark">{recipe.category}</span>
        </div>
      </div>

      {/* Allergens */}
      {recipe.allergens.length > 0 && (
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 mb-5">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <p className="text-sm font-bold text-amber-800">Alérgenos</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {recipe.allergens.map((a) => (
              <Badge key={a} variant="outline" className="text-xs border-amber-300 text-amber-700 rounded-full">
                {a}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Ingredients */}
      <div className="rounded-2xl bg-white border border-border/50 p-4 mb-4">
        <h2 className="text-base font-heading font-bold text-foreground mb-3">🥗 Ingredientes</h2>
        <ul className="space-y-2">
          {recipe.ingredients.map((ing, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground">
              <span className="h-2 w-2 rounded-full bg-app-mint mt-1.5 shrink-0" />
              {ing}
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="rounded-2xl bg-white border border-border/50 p-4">
        <h2 className="text-base font-heading font-bold text-foreground mb-3">👩‍🍳 Modo de Preparo</h2>
        <ol className="space-y-3">
          {recipe.instructions.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-foreground">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-app-mint-light text-app-mint-dark font-bold text-xs flex items-center justify-center">
                {i + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
