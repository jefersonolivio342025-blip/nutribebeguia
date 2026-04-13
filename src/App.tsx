import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AppLayout from "./components/app/AppLayout";
import LeadsCRM from "./pages/app/LeadsCRM";
import Dashboard from "./pages/app/Dashboard";
import Recipes from "./pages/app/Recipes";
import RecipeDetail from "./pages/app/RecipeDetail";
import CutGuide from "./pages/app/CutGuide";
import FoodSchedule from "./pages/app/FoodSchedule";
import Profile from "./pages/app/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="receitas" element={<Recipes />} />
            <Route path="receitas/:id" element={<RecipeDetail />} />
            <Route path="cortes" element={<CutGuide />} />
            <Route path="cronograma" element={<FoodSchedule />} />
            <Route path="perfil" element={<Profile />} />
            <Route path="leads" element={<LeadsCRM />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
