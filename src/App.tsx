import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import TechHome from "./pages/TechHome";
import DesignHome from "./pages/DesignHome";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Methodology from "./pages/Methodology";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import VisualCommunication from "./pages/VisualCommunication";
import BusinessSolutions from "./pages/BusinessSolutions";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tech" element={<TechHome />} />
          <Route path="/tech/servicos" element={<SoftwareDevelopment />} />
          <Route path="/tech/solucoes" element={<BusinessSolutions />} />
          <Route path="/design" element={<DesignHome />} />
          <Route path="/design/servicos" element={<VisualCommunication />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/metodologia" element={<Methodology />} />

          {/* Redirects das URLs antigas */}
          <Route
            path="/segmentos/desenvolvimento-de-software"
            element={<Navigate to="/tech/servicos" replace />}
          />
          <Route
            path="/segmentos/comunicacao-visual"
            element={<Navigate to="/design/servicos" replace />}
          />
          <Route path="/solucoes" element={<Navigate to="/tech/solucoes" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
