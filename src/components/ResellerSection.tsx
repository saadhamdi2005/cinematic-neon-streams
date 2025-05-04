
import { useState } from "react";
import TypedText from "@/components/ui/TypedText";
import GlassCard from "@/components/ui/GlassCard";
import { Zap, Shield, Star } from "lucide-react";

export function ResellerSection() {
  const [isHovered, setIsHovered] = useState({
    card1: false,
    card2: false,
    card3: false
  });

  const features = [
    {
      title: "Competitive Pricing",
      description: "Get access to our services at wholesale rates, allowing you to set your own margins and maximize profits.",
      icon: <Zap className="w-8 h-8 text-yassin-neon-purple" />
    },
    {
      title: "White-Label Solution",
      description: "Rebrand our service under your own name with our complete white-label solution.",
      icon: <Star className="w-8 h-8 text-yassin-neon-blue" />
    },
    {
      title: "24/7 Support",
      description: "Dedicated support team to help you and your customers at any time of the day.",
      icon: <Shield className="w-8 h-8 text-yassin-neon-green" />
    },
  ];

  const plans = [
    {
      title: "Starter Reseller",
      credits: 10,
      price: 100,
      features: [
        "10 account credits",
        "Basic reseller panel",
        "Email support",
        "White label solution"
      ],
      color: "blue"
    },
    {
      title: "Pro Reseller",
      credits: 25,
      price: 200,
      features: [
        "25 account credits",
        "Advanced reseller panel",
        "Priority support",
        "White label solution",
        "Custom domain option",
        "Marketing materials"
      ],
      color: "purple",
      popular: true
    },
    {
      title: "Enterprise Reseller",
      credits: 100,
      price: 600,
      features: [
        "100 account credits",
        "Premium reseller panel",
        "24/7 VIP support",
        "White label solution",
        "Custom domain included",
        "Marketing materials",
        "Dedicated account manager",
        "Custom API access"
      ],
      color: "pink"
    }
  ];

  return (
    <section id="reseller" className="py-20 relative overflow-hidden">
      {/* Animated background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-yassin-neon-purple/10 blur-[100px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-yassin-neon-blue/10 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 reveal-animation">
          <h2 className="text-4xl font-bold mb-4">
            <TypedText text="Become a Reseller" className="text-gradient" delay={100} />
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Start your own IPTV business with our comprehensive reseller program and earn substantial profits
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 reveal-animation">
          {features.map((feature, index) => (
            <GlassCard 
              key={index}
              className="p-6 flex flex-col items-center text-center h-full"
              glowOnHover
              neonColor={index === 0 ? "purple" : index === 1 ? "blue" : "green"}
              tiltEffect
            >
              <div className="mb-4 p-3 bg-white/5 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </GlassCard>
          ))}
        </div>

        {/* Reseller Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto reveal-animation">
          {plans.map((plan, index) => {
            const neonColor = plan.color as "purple" | "pink" | "blue" | "green";
            const isPopular = plan.popular;
            
            return (
              <div 
                key={index} 
                className={`relative ${isPopular ? "md:-mt-4" : ""}`}
                onMouseEnter={() => setIsHovered(prev => ({ ...prev, [`card${index+1}`]: true }))}
                onMouseLeave={() => setIsHovered(prev => ({ ...prev, [`card${index+1}`]: false }))}
              >
                {isPopular && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <span className="bg-yassin-neon-purple px-4 py-1 rounded-full text-sm font-medium animate-pulse-glow">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <GlassCard
                  className={`p-6 flex flex-col h-full ${isPopular ? "border-yassin-neon-purple" : ""}`}
                  glowOnHover
                  neonColor={neonColor}
                  tiltEffect
                  floatingEffect
                >
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold">${plan.price}</span>
                  </div>
                  <p className="text-yassin-neon-blue mb-5">
                    {plan.credits} account credits
                  </p>
                  
                  <ul className="space-y-3 mb-6 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yassin-neon-green" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={`https://wa.me/212657263966?text=I'm interested in the ${plan.title} plan`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className={`w-full text-center py-2 rounded-lg transition-all transform hover:scale-105 ${
                      isPopular 
                        ? "bg-yassin-neon-purple hover:bg-yassin-neon-purple/80 text-white" 
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    Get Started
                  </a>
                </GlassCard>

                {/* Glow effect when hovered */}
                {isHovered[`card${index+1}` as keyof typeof isHovered] && (
                  <div className="absolute inset-0 -z-10 rounded-lg" 
                    style={{
                      background: `radial-gradient(circle at center, var(--yassin-neon-${neonColor}) 0%, transparent 70%)`,
                      opacity: 0.2,
                      filter: "blur(20px)"
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center reveal-animation">
          <p className="text-white/70 mb-6">
            Have questions about our reseller program? Our team is ready to help you get started.
          </p>
          <a 
            href="https://wa.me/212657263966?text=I need more information about becoming a reseller"
            target="_blank"
            rel="noopener noreferrer" 
            className="btn-primary inline-block transform transition-transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default ResellerSection;
