
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TypedTextProps {
  text: string;
  className?: string;
  delay?: number;
  typingSpeed?: number;
  showCursor?: boolean;
  onComplete?: () => void;
  startTyping?: boolean;
}

export function TypedText({
  text,
  className,
  delay = 0,
  typingSpeed = 40,
  showCursor = true,
  onComplete,
  startTyping = true,
}: TypedTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const completedRef = useRef(false);

  useEffect(() => {
    if (!startTyping) {
      return;
    }

    let timeout: NodeJS.Timeout;
    
    // Initial delay before typing starts
    timeout = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          if (!completedRef.current && onComplete) {
            completedRef.current = true;
            onComplete();
          }
        }
      }, typingSpeed);
      
      return () => clearInterval(typingInterval);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [text, delay, typingSpeed, onComplete, startTyping]);

  return (
    <span className={cn(className, showCursor && isTyping ? "typing-cursor" : "")}>
      {displayedText}
    </span>
  );
}

export default TypedText;
