import { User, Crown, Clock, Heart, LogOut, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
const Profile = () => {
  return (
    <div className="px-4 pt-6 max-w-lg mx-auto">
      {/* Avatar */}
      <div className="flex flex-col items-center mb-6">
        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-app-mint to-app-peach flex items-center justify-center mb-3">
          <User className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-xl font-heading font-bold text-foreground">Mamãe NutriBebê</h1>
        <p className="text-sm text-muted-foreground">nutribebe@email.com</p>
      </div>

      {/* Access info */}
      <div className="rounded-2xl bg-gradient-to-br from-app-mint-light to-white border border-app-mint/20 p-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-app-mint/20 p-2">
            <Crown className="h-5 w-5 text-app-mint-dark" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">Acesso Vitalício</p>
            <p className="text-xs text-muted-foreground">Seu plano não expira nunca ✨</p>
          </div>
        </div>
      </div>

      {/* Menu items */}
      <div className="rounded-2xl bg-white border border-border/50 overflow-hidden">
        {[
          { icon: Heart, label: "Receitas Favoritas", sublabel: "Em breve" },
          { icon: Clock, label: "Histórico de Atividades", sublabel: "Em breve" },
          { icon: LogOut, label: "Sair da Conta", sublabel: "" },
        ].map((item, i) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-muted/30 transition-colors",
              i > 0 && "border-t border-border/50"
            )}
          >
            <item.icon className="h-5 w-5 text-app-mint-dark" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
              {item.sublabel && <p className="text-[10px] text-muted-foreground">{item.sublabel}</p>}
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>
        ))}
      </div>

      <p className="text-center text-[10px] text-muted-foreground mt-6">NutriBebê Pro v1.0</p>
    </div>
  );
};


export default Profile;
