
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
        "fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-5 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all duration-300 group",
        className
      )}
    >
      {/* Professional WhatsApp Icon */}
      <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-inner">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" fill="#25D366" className="w-7 h-7">
          <defs><linearGradient id="whatsapp-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#25D366" />
            <stop offset="100%" stopColor="#128C7E" />
          </linearGradient></defs>
          <path d="M87.4,0C39.195,0,0,39.196,0,87.399c0,15.3,3.991,29.59,10.994,42.006L1.766,171.984l44.358-11.636 c11.61,6.357,24.756,9.905,38.676,9.905c48.203,0,87.4-39.196,87.4-87.4C172.2,39.196,135.605,0,87.4,0z M87.4,159.68 c-13.972,0-27.094-4.154-38.027-11.336l-26.65,6.979l7.151-25.851c-8.01-11.733-12.721-25.941-12.721-41.073 c0-40.039,32.557-72.597,72.596-72.597c40.039,0,72.596,32.558,72.596,72.597C162.346,127.123,127.439,159.68,87.4,159.68z M127.734,105.299c-2.21-1.095-13.049-6.439-15.092-7.167c-2.043-0.729-3.528-1.094-5.018,1.095 c-1.486,2.189-5.784,7.167-7.077,8.626c-1.292,1.46-2.58,1.642-4.79,0.547c-2.212-1.095-9.324-3.434-17.75-10.936 c-6.553-5.839-10.98-13.044-12.268-15.233c-1.292-2.189-0.141-3.373,0.971-4.459c0.998-0.978,2.212-2.556,3.316-3.834 c1.104-1.278,1.476-2.19,2.212-3.653c0.741-1.462,0.364-2.74-0.182-3.834c-0.547-1.095-5.018-12.088-6.871-16.552 c-1.853-4.464-3.704-3.834-5.018-3.834c-1.291,0-2.776-0.182-4.267-0.182s-3.891,0.547-5.93,2.737 c-2.039,2.189-7.792,7.623-7.792,18.615s7.974,21.62,9.085,23.079c1.104,1.462,15.276,24.313,37.722,33.116 c22.446,8.803,22.446,5.858,26.53,5.494c4.083-0.365,13.164-5.38,15.007-10.572C128.274,110.679,128.274,106.394,127.734,105.299z" fill="url(#whatsapp-gradient)"/>
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
