
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
    "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" :
    "absolute inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-sm";

  return (
    <div className={cn(containerStyles, "transition-all duration-300", className)}>
      <div className="flex flex-col items-center p-8 rounded-2xl bg-black/40 border border-white/10 animate-fadeIn">
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-xl bg-yassin-neon-purple/20"></div>
          <LoadingSpinner size="lg" variant={variant} />
        </div>
        
        <p className="mt-6 text-white font-medium text-center loading-text">
          {message || t("loading")}
        </p>
        
        <p className="text-white/60 text-sm mt-2">{t("please_wait")}</p>
        
        <div className="mt-4 w-full max-w-xs">
          <div className="cyber-progress"></div>
          
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
