
import { cn } from "@/lib/utils";
import { MessageSquare } from "lucide-react";

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
  // Remove any non-numeric characters from the phone number
  const formattedNumber = phoneNumber.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${formattedNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-5 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all duration-300 group",
        className
      )}
    >
      {/* Professional WhatsApp Icon */}
      <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
        </svg>
      </div>

      {/* Text that appears on hover with typing animation */}
      <div className="overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-500">
        <span className="whitespace-nowrap typing-animation">{text}</span>
      </div>
    </a>
  );
}

export default WhatsAppButton;
