
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  neonColor?: "purple" | "pink" | "blue" | "green";
  glowIntensity?: "low" | "medium" | "high";
  pulsate?: boolean;
}

export function GlassCard({ 
  children, 
  className,
  glowOnHover = false,
  neonColor = "purple",
  glowIntensity = "medium",
  pulsate = false
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

  return (
    <div className={cn("glass-card", hoverClass, pulsateClass, className)}>
      {children}
    </div>
  );
}

export default GlassCard;
