
import { Suspense, lazy, useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import LoadingOverlay from "./components/ui/LoadingOverlay";

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

  // Add cursor trail effect
  useEffect(() => {
    // Create cursor trails
    const createTrail = (e: MouseEvent) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      document.body.appendChild(trail);
      
      // Remove the trail after animation completes
      setTimeout(() => {
        if (trail && document.body.contains(trail)) {
          document.body.removeChild(trail);
        }
      }, 800);
    };
    
    // Add event listener for mouse movement
    document.addEventListener('mousemove', createTrail);
    
    // Throttle to create trails every 100ms for performance
    let lastTrail = 0;
    const throttledTrail = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTrail > 100) {
        lastTrail = now;
        createTrail(e);
      }
    };
    
    document.removeEventListener('mousemove', createTrail);
    document.addEventListener('mousemove', throttledTrail);
    
    return () => {
      document.removeEventListener('mousemove', throttledTrail);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          
          {/* Full-screen loading overlay */}
          {isLoading && (
            <LoadingOverlay 
              isLoading={isLoading} 
              fullScreen 
              variant="primary"
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
