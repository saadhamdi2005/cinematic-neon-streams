
import { useState, useEffect } from "react";
import GlassCard from "@/components/ui/GlassCard";
import TypedText from "@/components/ui/TypedText";
import { Check, Zap, Shield, Timer } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Pricing plans
const plans = [
  {
    id: "monthly",
    name: "Monthly",
    price: 15,
    features: [
      "10,000+ Live TV Channels",
      "40,000+ Movies & Series",
      "HD & 4K Quality",
      "Multi-device support",
      "24/7 Customer Support",
      "Regular Content Updates",
    ],
    popular: false,
    color: "blue",
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: 35,
    features: [
      "Everything in Monthly",
      "Premium Sports",
      "VOD Categories",
      "Lower cost per month",
      "Anti-freeze technology",
      "Premium TV Guide",
    ],
    popular: true,
    color: "purple",
  },
  {
    id: "yearly",
    name: "Yearly",
    price: 100,
    features: [
      "Everything in Quarterly",
      "Guaranteed uptime",
      "No buffering guarantee",
      "Exclusive content",
      "Priority Support",
      "Lowest cost per month",
    ],
    popular: false,
    color: "pink",
  }
];

// Currency options
const currencies = [
  { id: "usd", symbol: "$", name: "USD" },
  { id: "eur", symbol: "€", name: "EUR" },
  { id: "gbp", symbol: "£", name: "GBP" }
];

export function PricingSection() {
  const { t } = useLanguage();
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [floatOffsets, setFloatOffsets] = useState([0, 0, 0]);
  
  // Enhanced floating animation effect with better randomization
  useEffect(() => {
    const interval = setInterval(() => {
      setFloatOffsets([
        Math.sin(Date.now() / 2000) * 10,
        Math.sin((Date.now() / 2000) + Math.PI * 0.6) * 10,
        Math.sin((Date.now() / 2000) + Math.PI * 1.2) * 10
      ]);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  // Simple currency conversion factors (just for demo)
  const conversionRates = {
    usd: 1,
    eur: 0.85,
    gbp: 0.75
  };

  // Get price in selected currency
  const getPrice = (basePrice: number) => {
    const rate = conversionRates[selectedCurrency.id as keyof typeof conversionRates];
    return Math.round(basePrice * rate);
  };

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <TypedText
              text={t("pricing_title")}
              className="text-gradient"
              delay={100}
            />
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {t("pricing_subtitle")}
          </p>
        </div>

        {/* Free Trial Section - Now at the top */}
        <div id="trial" className="mb-16 max-w-3xl mx-auto animate-float">
          <GlassCard className="p-8 text-center" tiltEffect glowOnHover neonColor="green">
            <div className="flex justify-center mb-3">
              <Zap className="w-12 h-12 text-yassin-neon-green animate-pulse" />
            </div>
            <h3 className="text-3xl font-bold mb-3 text-gradient">Try our Free 24h Trial</h3>
            <p className="mb-6 text-white/70 text-lg">
              Experience our premium service with no commitment. Get access to all our channels and features for 24 hours.
            </p>
            <a
              href="https://wa.me/212643264633?text=I'd like to try the free 24h trial"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-block transform transition-transform hover:scale-105 animate-pulse-glow"
            >
              <span className="flex items-center">
                <Timer className="mr-2" />
                {t("free_trial")}
              </span>
            </a>
          </GlassCard>
        </div>

        {/* Currency selector */}
        <div className="flex justify-center mb-10">
          <div className="bg-white/10 rounded-full p-1 inline-flex">
            {currencies.map((currency) => (
              <button
                key={currency.id}
                onClick={() => setSelectedCurrency(currency)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCurrency.id === currency.id
                    ? "bg-yassin-neon-purple text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {currency.symbol} {currency.name}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const neonColor = plan.color as "purple" | "pink" | "blue" | "green";
            const isPopular = plan.popular;
            
            return (
              <div 
                key={plan.id} 
                className={`relative ${isPopular ? "md:-mt-6" : ""}`}
                style={{
                  transform: `translateY(${floatOffsets[index]}px)`,
                  transition: "transform 0.5s ease"
                }}
              >
                {isPopular && (
                  <div className="absolute -top-6 inset-x-0 flex justify-center z-10">
                    <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 px-6 py-2 rounded-full text-base font-bold shadow-lg animate-pulse-slow">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <GlassCard
                  className={`p-6 flex flex-col h-full ${isPopular ? "border-yassin-neon-purple shadow-xl shadow-yassin-neon-purple/20" : ""}`}
                  glowOnHover
                  neonColor={neonColor}
                  tiltEffect
                  floatingEffect
                >
                  <h3 className="text-xl font-bold mb-2">{t(plan.id as any)}</h3>
                  <div className="mb-5">
                    <span className="text-4xl font-bold">
                      {selectedCurrency.symbol}{getPrice(plan.price)}
                    </span>
                    <span className="text-white/60 ml-1">
                      {plan.id === "monthly" ? "/month" : plan.id === "quarterly" ? "/3 months" : "/year"}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-6 flex-grow">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-yassin-neon-green" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={`https://wa.me/212643264633?text=I'm interested in the ${plan.name} plan`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className={`w-full text-center py-2 rounded-lg transition-all transform hover:scale-105 ${
                      isPopular 
                        ? "bg-yassin-neon-purple hover:bg-yassin-neon-purple/80 text-white" 
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    {t("buy_now")}
                  </a>
                </GlassCard>
              </div>
            );
          })}
        </div>

        {/* Security information */}
        <div className="mt-20 max-w-4xl mx-auto">
          <GlassCard className="p-8" glowOnHover neonColor="blue">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-10 h-10 text-yassin-neon-blue mr-3" />
              <h3 className="text-2xl font-bold">Secure Streaming Experience</h3>
            </div>
            <p className="mb-6 text-white/70 text-center">
              We take your security seriously. Our platform implements multiple protection layers to ensure your data and streaming experience remain secure.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-yassin-neon-blue">Encrypted Connections</h4>
                <p className="text-sm text-white/70">All data transmitted between your device and our servers is encrypted using industry-standard protocols.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-yassin-neon-blue">Secure Authentication</h4>
                <p className="text-sm text-white/70">Multi-factor authentication available for all accounts to prevent unauthorized access.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-yassin-neon-blue">DDoS Protection</h4>
                <p className="text-sm text-white/70">Our infrastructure is protected against distributed denial-of-service attacks to ensure uptime.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-yassin-neon-blue">Regular Security Audits</h4>
                <p className="text-sm text-white/70">We continuously test our systems for vulnerabilities to stay ahead of potential threats.</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
