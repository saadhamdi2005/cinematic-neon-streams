
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  neonColor?: "purple" | "pink" | "blue" | "green";
}

export function GlassCard({ 
  children, 
  className,
  glowOnHover = false,
  neonColor = "purple"
}: GlassCardProps) {
  // Map neon color to actual color class
  const neonColorMap = {
    purple: "hover:border-yassin-neon-purple/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]",
    pink: "hover:border-yassin-neon-pink/50 hover:shadow-[0_0_20px_rgba(217,70,239,0.4)]",
    blue: "hover:border-yassin-neon-blue/50 hover:shadow-[0_0_20px_rgba(30,174,219,0.4)]",
    green: "hover:border-yassin-neon-green/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
  };

  const hoverClass = glowOnHover ? `transition-all duration-300 ${neonColorMap[neonColor]}` : "";

  return (
    <div className={cn("glass-card", hoverClass, className)}>
      {children}
    </div>
  );
}

export default GlassCard;
