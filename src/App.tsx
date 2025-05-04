
import { Suspense, lazy, useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import LoadingOverlay from "./components/ui/LoadingOverlay";
import "./styles/customAnimations.css";
import "./styles/loadingStyles.css";

// Lazy load the page components for better performance
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Show loading screen for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          
          {/* Enhanced Full-screen loading overlay */}
          {isLoading && (
            <LoadingOverlay 
              isLoading={isLoading} 
              fullScreen 
              variant="primary"
              message="Loading YassinIPTV"
              className="bg-black"
            />
          )}
          
          <BrowserRouter>
            <Suspense fallback={<LoadingOverlay isLoading fullScreen />}>
              <Routes>
                <Route path="/" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
