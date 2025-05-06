
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import LoadingSpinner from "./LoadingSpinner";
import { cn } from "@/lib/utils";

interface LoadingOverlayProps {
  isLoading: boolean;
  fullScreen?: boolean;
  message?: string;
  className?: string;
  variant?: "default" | "primary" | "secondary";
}

const LoadingOverlay = ({
  isLoading,
  fullScreen = false,
  message,
  className,
  variant = "primary"
}: LoadingOverlayProps) => {
  const { t } = useContext(LanguageContext);
  
  if (!isLoading) return null;
  
  // Container styles based on whether it's fullscreen or not
  const containerStyles = fullScreen ? 
    "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md" :
    "absolute inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-sm";

  return (
    <div className={cn(containerStyles, "transition-all duration-500", className)}>
      <div className="flex flex-col items-center p-8 rounded-2xl bg-black/50 border border-white/20 animate-fadeIn shadow-2xl">
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-xl bg-yassin-neon-purple/30"></div>
          <LoadingSpinner size="lg" variant={variant} />
        </div>
        
        <div className="mt-6">
          <h3 className="text-xl font-bold text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-yassin-neon-purple via-yassin-neon-blue to-yassin-neon-purple loading-text">
            {message || t("loading")}
          </h3>
          
          <p className="text-white/70 text-sm mt-2 text-center">{t("please_wait")}</p>
        </div>
        
        <div className="mt-6 w-full max-w-xs">
          <div className="h-1.5 w-full bg-black/30 rounded-full overflow-hidden">
            <div className="cyber-progress-bar"></div>
          </div>
          
          <div className="mt-4 loading-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
