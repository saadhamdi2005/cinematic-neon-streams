
import { useState, useRef, useEffect } from "react";
import { Bot, Send, X } from "lucide-react";
import TypedText from "@/components/ui/TypedText";
import GlassCard from "@/components/ui/GlassCard";

interface AIChatbotProps {
  className?: string;
}

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  completed?: boolean;
}

export function AIChatbot({ className }: AIChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! 👋 I'm YassinBot, your IPTV assistant. How can I help you today?", isBot: true, completed: true }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);

  // Animation for floating effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        // Create a subtle floating effect by oscillating between values
        // We're using a different phase than WhatsAppButton to avoid synchronized movement
        return Math.sin((Date.now() / 1000) + Math.PI) * 3;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  // Auto responses based on keywords
  const autoResponses: Record<string, string> = {
    "trial": "Great! I can help you get started with a free 24-hour trial. Please click the 'Free Trial' button on our pricing section or message us directly on WhatsApp for instant activation.",
    "pricing": "We offer competitive plans starting at just €15/month with access to 10,000+ channels and 40,000+ movies. Check out our pricing section for more details!",
    "setup": "Setting up YassinIPTV is easy! We support Smart TVs, iOS, Android, Firestick, and more. Check our Installation section for step-by-step guides.",
    "channels": "YassinIPTV offers 10,000+ channels including sports (beIN, ESPN, Sky), movies, series, news, and international channels from 100+ countries.",
    "payment": "We accept various payment methods including credit cards, PayPal, and cryptocurrency. For more details, please message us on WhatsApp.",
    "hello": "Hello there! 👋 How can I assist you with YassinIPTV today?",
    "hi": "Hi! 👋 What would you like to know about YassinIPTV?",
    "help": "I'd be happy to help! You can ask me about our plans, channels, setup instructions, or anything related to YassinIPTV!"
  };

  // Function to handle sending a new message
  const handleSend = () => {
    if (input.trim() === "") return;
    
    // Add user message
    const userMessageId = Date.now();
    setMessages(prev => [...prev, { id: userMessageId, text: input, isBot: false, completed: true }]);
    setInput("");
    setIsTyping(true);
    
    // Generate bot response after a delay
    setTimeout(() => {
      const botMessageId = Date.now() + 1;
      let foundResponse = false;
      
      // Check for keyword matches
      Object.entries(autoResponses).forEach(([keyword, response]) => {
        if (input.toLowerCase().includes(keyword) && !foundResponse) {
          setMessages(prev => [...prev, { id: botMessageId, text: response, isBot: true }]);
          foundResponse = true;
        }
      });
      
      // Default response if no keywords matched
      if (!foundResponse) {
        setMessages(prev => [...prev, { 
          id: botMessageId, 
          text: "Thank you for your message! For more specific information, please contact us directly on WhatsApp for immediate assistance.", 
          isBot: true 
        }]);
      }
      
      setIsTyping(false);
    }, 1500);
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat button */}
      <button 
        onClick={() => setIsOpen(true)}
        style={{ transform: `translateY(${position}px)` }}
        className={`fixed bottom-24 left-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-yassin-neon-purple to-yassin-neon-blue shadow-lg hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all duration-300 ${className || ""}`}
      >
        <Bot className="text-white" size={24} />
        
        {/* Pulsing effect to attract attention */}
        <span className="absolute -inset-1 rounded-full bg-yassin-neon-purple/20 animate-ping"></span>
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <GlassCard 
          className="fixed bottom-24 left-6 z-50 w-80 sm:w-96 max-h-[500px] p-0 overflow-hidden flex flex-col shadow-2xl border-yassin-neon-purple/30"
          neonColor="purple"
          glowOnHover
          tiltEffect
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-yassin-neon-purple/80 to-yassin-neon-blue/80 p-4 text-white">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Bot size={20} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
              <h3 className="font-bold">YassinIPTV Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
              <X size={20} />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-80 bg-black/40">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                <div 
                  className={`max-w-[80%] rounded-xl p-3 ${
                    message.isBot 
                      ? "bg-black/40 text-white border border-yassin-neon-purple/20" 
                      : "bg-gradient-to-r from-yassin-neon-purple/90 to-yassin-neon-blue/90 text-white"
                  }`}
                >
                  {message.isBot && !message.completed ? (
                    <TypedText
                      text={message.text}
                      typingSpeed={20}
                      onComplete={() => {
                        setMessages(prev => 
                          prev.map(msg => 
                            msg.id === message.id ? { ...msg, completed: true } : msg
                          )
                        );
                      }}
                    />
                  ) : (
                    <div>{message.text}</div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-black/40 rounded-xl p-3 text-white border border-yassin-neon-purple/20">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-white/70 rounded-full animate-bounce" style={{animationDelay: "0ms"}}></div>
                    <div className="h-2 w-2 bg-white/70 rounded-full animate-bounce" style={{animationDelay: "150ms"}}></div>
                    <div className="h-2 w-2 bg-white/70 rounded-full animate-bounce" style={{animationDelay: "300ms"}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <div className="border-t border-white/10 p-3 flex items-center gap-2 bg-black/60">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 bg-black/30 border border-white/10 rounded-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yassin-neon-purple/50"
            />
            <button
              onClick={handleSend}
              disabled={input.trim() === ""}
              className="bg-gradient-to-r from-yassin-neon-purple/80 to-yassin-neon-blue/80 hover:from-yassin-neon-purple hover:to-yassin-neon-blue text-white rounded-full p-2 focus:outline-none disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </GlassCard>
      )}
    </>
  );
}

export default AIChatbot;
