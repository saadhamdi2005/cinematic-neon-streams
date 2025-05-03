
import { useEffect } from "react";
import TypedText from "@/components/ui/TypedText";
import GlassCard from "@/components/ui/GlassCard";

export function Hero() {
  // Function to handle scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });

    const fadeElements = document.querySelectorAll(".fade-in-up, .scroll-reveal");
    fadeElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 heading-glow text-center-all">
            <TypedText
              text="TV Reimagined. Streams from the Future."
              className="text-gradient neon-text"
              delay={500}
              typingSpeed={60}
              showCursor={true}
            />
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-8 fade-in-up text-center-all" style={{transitionDelay: "0.6s"}}>
            <TypedText 
              text="Experience premium channels and movies with next-generation streaming technology."
              delay={2000}
              typingSpeed={30}
            />
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in-up" style={{transitionDelay: "1s"}}>
            <a href="#pricing" className="btn-primary">
              <TypedText text="Start Watching" delay={2500} typingSpeed={40} />
            </a>
            <a href="#trial" className="btn-secondary">
              <TypedText text="Free 24h Trial" delay={2800} typingSpeed={40} />
            </a>
            <a href="#reseller" className="btn-accent">
              <TypedText text="Become Reseller" delay={3100} typingSpeed={40} />
            </a>
          </div>
          
          <div className="mt-16 px-4 fade-in-up" style={{transitionDelay: "1.3s"}}>
            <GlassCard className="p-6 relative overflow-hidden" glowOnHover neonColor="purple" glowIntensity="high">
              <div className="absolute inset-0 bg-gradient-radial from-yassin-neon-purple/10 to-transparent opacity-40"></div>
              <h2 className="text-2xl font-bold mb-4 text-center-all">
                <TypedText text="All-in-One Entertainment Solution" delay={3400} typingSpeed={30} />
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 scroll-reveal" style={{transitionDelay: "3600ms"}}>
                  <p className="text-4xl font-bold text-yassin-neon-blue animate-pulse-glow">10,000+</p>
                  <p className="text-white/60">Live Channels</p>
                </div>
                <div className="p-4 scroll-reveal" style={{transitionDelay: "3800ms"}}>
                  <p className="text-4xl font-bold text-yassin-neon-purple animate-pulse-glow">40,000+</p>
                  <p className="text-white/60">Movies & Series</p>
                </div>
                <div className="p-4 scroll-reveal" style={{transitionDelay: "4000ms"}}>
                  <p className="text-4xl font-bold text-yassin-neon-pink animate-pulse-glow">99.9%</p>
                  <p className="text-white/60">Uptime</p>
                </div>
                <div className="p-4 scroll-reveal" style={{transitionDelay: "4200ms"}}>
                  <p className="text-4xl font-bold text-yassin-neon-green animate-pulse-glow">24/7</p>
                  <p className="text-white/60">Support</p>
                </div>
              </div>
            </GlassCard>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 fade-in-up" style={{transitionDelay: "1.5s"}}>
            <img src="/lovable-uploads/6cd53962-48d0-4424-9b03-e32da4604648.png" alt="TV5 Monde" className="h-12 w-auto object-contain" />
            <img src="/lovable-uploads/c75bc413-6c2a-4658-a485-91c15e68761e.png" alt="TSN" className="h-12 w-auto object-contain" />
            <img src="/lovable-uploads/7f7caaed-046e-4c56-9691-77c579c38f8d.png" alt="TRT World" className="h-12 w-auto object-contain" />
            <img src="/lovable-uploads/9d9fdc01-80ae-4fdd-a283-69f73a5343ea.png" alt="Viasat History" className="h-12 w-auto object-contain" />
          </div>
        </div>
      </div>
      
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-60 h-60 bg-yassin-neon-blue/10 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-yassin-neon-purple/10 rounded-full blur-[100px]"></div>
      <div className="absolute top-2/3 left-1/3 w-96 h-96 bg-yassin-neon-pink/5 rounded-full blur-[120px]"></div>
    </div>
  );
}

export default Hero;
