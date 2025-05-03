
import { cn } from "@/lib/utils";

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
        "fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] group",
        className
      )}
    >
      <WhatsAppIcon className="w-5 h-5" />
      <span className="max-w-0 overflow-hidden transition-all duration-300 group-hover:max-w-xs">
        {text}
      </span>
    </a>
  );
}

// Custom WhatsApp icon
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>
  </svg>
);

export default WhatsAppButton;
