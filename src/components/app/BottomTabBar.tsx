import { Home, BookOpen, Scissors, CalendarDays, User } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const tabs = [
  { to: "/app", icon: Home, label: "Início" },
  { to: "/app/receitas", icon: BookOpen, label: "Receitas" },
  { to: "/app/cortes", icon: Scissors, label: "Cortes" },
  { to: "/app/cronograma", icon: CalendarDays, label: "Agenda" },
  { to: "/app/perfil", icon: User, label: "Perfil" },
];

const BottomTabBar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/app") return location.pathname === "/app";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white/95 backdrop-blur-md safe-area-bottom">
      <div className="flex items-center justify-around py-1.5 px-2">
        {tabs.map((tab) => {
          const active = isActive(tab.to);
          return (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.to === "/app"}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 min-w-[56px]",
                active
                  ? "text-app-mint-dark"
                  : "text-muted-foreground hover:text-app-mint-dark"
              )}
            >
              <tab.icon
                className={cn(
                  "transition-all duration-200",
                  active ? "h-6 w-6" : "h-5 w-5"
                )}
                strokeWidth={active ? 2.5 : 2}
              />
              <span className={cn(
                "text-[10px] leading-tight",
                active ? "font-bold" : "font-medium"
              )}>
                {tab.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomTabBar;
