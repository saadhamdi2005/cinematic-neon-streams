
import { cn } from "@/lib/utils";
import { useRef, useEffect } from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  neonColor?: "purple" | "pink" | "blue" | "green";
  glowIntensity?: "low" | "medium" | "high";
  pulsate?: boolean;
  tiltEffect?: boolean;
}

export function GlassCard({ 
  children, 
  className,
  glowOnHover = false,
  neonColor = "purple",
  glowIntensity = "medium",
  pulsate = false,
  tiltEffect = false
}: GlassCardProps) {
  // Map neon color to actual color class
  const neonColorMap = {
    purple: {
      low: "hover:border-yassin-neon-purple/30 hover:shadow-[0_0_10px_rgba(139,92,246,0.3)]",
      medium: "hover:border-yassin-neon-purple/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]",
      high: "hover:border-yassin-neon-purple/70 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
    },
    pink: {
      low: "hover:border-yassin-neon-pink/30 hover:shadow-[0_0_10px_rgba(217,70,239,0.3)]",
      medium: "hover:border-yassin-neon-pink/50 hover:shadow-[0_0_20px_rgba(217,70,239,0.4)]",
      high: "hover:border-yassin-neon-pink/70 hover:shadow-[0_0_30px_rgba(217,70,239,0.6)]"
    },
    blue: {
      low: "hover:border-yassin-neon-blue/30 hover:shadow-[0_0_10px_rgba(30,174,219,0.3)]",
      medium: "hover:border-yassin-neon-blue/50 hover:shadow-[0_0_20px_rgba(30,174,219,0.4)]",
      high: "hover:border-yassin-neon-blue/70 hover:shadow-[0_0_30px_rgba(30,174,219,0.6)]"
    },
    green: {
      low: "hover:border-yassin-neon-green/30 hover:shadow-[0_0_10px_rgba(34,197,94,0.3)]",
      medium: "hover:border-yassin-neon-green/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]",
      high: "hover:border-yassin-neon-green/70 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]"
    }
  };

  const pulsateClass = pulsate ? "animate-pulse-glow" : "";
  const hoverClass = glowOnHover ? `transition-all duration-300 ${neonColorMap[neonColor][glowIntensity]}` : "";
  
  // Ref for tilt effect
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!tiltEffect || !cardRef.current) return;
    
    const card = cardRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top;  // y position within the element
      
      // Calculate percentage position within element (0 to 1)
      const xPercent = x / rect.width;
      const yPercent = y / rect.height;
      
      // Calculate tilt angle (maximum of 10 degrees)
      const tiltX = (0.5 - yPercent) * 8;
      const tiltY = (xPercent - 0.5) * 8;
      
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    };
    
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [tiltEffect]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "glass-card transition-transform duration-300", 
        hoverClass, 
        pulsateClass, 
        tiltEffect && "transform-gpu",
        className
      )}
    >
      {children}
    </div>
  );
}

export default GlassCard;
