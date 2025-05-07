
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { BrandWhatsapp } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  className?: string;
  text?: string;
}

export function WhatsAppButton({ 
  phoneNumber, 
  className,
  text = "Chat with us"
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Remove any non-numeric characters from the phone number
  const formattedNumber = phoneNumber.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${formattedNumber}`;

  // Animation for floating effect
  const [position, setPosition] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        // Create a subtle floating effect by oscillating between 0 and 1
        return Math.sin(Date.now() / 1000) * 3;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: `translateY(${position}px)` }}
      className={cn(
        "fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-5 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all duration-300 group",
        className
      )}
      aria-label="Chat with YassinIPTV support on WhatsApp"
    >
      {/* WhatsApp Logo - Using the correct WhatsApp icon */}
      <div className="flex items-center justify-center w-7 h-7 bg-white rounded-full shadow-inner overflow-hidden">
        <BrandWhatsapp className="w-4 h-4 text-green-600" />
      </div>

      {/* Text that appears with typing animation effect */}
      <div className="overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-500 hidden md:block">
        <span className="whitespace-nowrap typing-animation">{text}</span>
      </div>
      
      {/* Glow effect */}
      {isHovered && (
        <div className="absolute inset-0 -z-10 bg-green-500/20 blur-xl rounded-full"></div>
      )}
    </a>
  );
}

export default WhatsAppButton;
