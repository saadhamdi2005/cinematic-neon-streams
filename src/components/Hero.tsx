
import { useEffect } from "react";
import TypedText from "@/components/ui/TypedText";

export function Hero() {
  // Function to handle scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    const fadeElements = document.querySelectorAll(".fade-in-up");
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 heading-glow">
            <TypedText
              text="TV Reimagined. Streams from the Future."
              className="text-gradient"
              delay={500}
            />
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-8 fade-in-up" style={{transitionDelay: "0.3s"}}>
            Experience premium channels and movies with next-generation streaming technology.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in-up" style={{transitionDelay: "0.6s"}}>
            <a href="#pricing" className="btn-primary">
              Start Watching
            </a>
            <a href="#trial" className="btn-secondary">
              Free 24h Trial
            </a>
            <a href="#reseller" className="btn-accent">
              Become Reseller
            </a>
          </div>
          
          <div className="mt-16 px-4 fade-in-up" style={{transitionDelay: "0.9s"}}>
            <div className="glass-card p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-radial from-yassin-neon-purple/10 to-transparent opacity-40"></div>
              <h2 className="text-2xl font-bold mb-4">All-in-One Entertainment Solution</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4">
                  <p className="text-4xl font-bold text-yassin-neon-blue">10,000+</p>
                  <p className="text-white/60">Live Channels</p>
                </div>
                <div className="p-4">
                  <p className="text-4xl font-bold text-yassin-neon-purple">40,000+</p>
                  <p className="text-white/60">Movies & Series</p>
                </div>
                <div className="p-4">
                  <p className="text-4xl font-bold text-yassin-neon-pink">99.9%</p>
                  <p className="text-white/60">Uptime</p>
                </div>
                <div className="p-4">
                  <p className="text-4xl font-bold text-yassin-neon-green">24/7</p>
                  <p className="text-white/60">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-yassin-neon-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-yassin-neon-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute top-2/3 left-1/3 w-40 h-40 bg-yassin-neon-pink/10 rounded-full blur-3xl"></div>
    </div>
  );
}

export default Hero;
