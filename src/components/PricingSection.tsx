
import { useState, useEffect } from "react";
import GlassCard from "@/components/ui/GlassCard";
import TypedText from "@/components/ui/TypedText";
import { Check } from "lucide-react";

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
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [floatOffsets, setFloatOffsets] = useState([0, 0, 0]);
  
  // Floating animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFloatOffsets([
        Math.sin(Date.now() / 2000) * 8,
        Math.sin((Date.now() / 2000) + Math.PI * 0.6) * 8,
        Math.sin((Date.now() / 2000) + Math.PI * 1.2) * 8
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
              text="Simple Pricing Plans"
              className="text-gradient"
              delay={100}
            />
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Choose the plan that's right for you and start streaming right away with our industry-leading IPTV service
          </p>
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
                className={`relative ${isPopular ? "md:-mt-4" : ""}`}
                style={{
                  transform: `translateY(${floatOffsets[index]}px)`,
                  transition: "transform 0.5s ease"
                }}
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
                >
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
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
                    href={`https://wa.me/212657263966?text=I'm interested in the ${plan.name} plan`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className={`w-full text-center py-2 rounded-lg transition-all ${
                      isPopular 
                        ? "bg-yassin-neon-purple hover:bg-yassin-neon-purple/80 text-white" 
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    Select Plan
                  </a>
                </GlassCard>
              </div>
            );
          })}
        </div>

        {/* Free Trial Section */}
        <div id="trial" className="mt-16 max-w-3xl mx-auto">
          <GlassCard className="p-8 text-center" tiltEffect>
            <h3 className="text-2xl font-bold mb-3">Not sure yet? Try our Free 24h Trial</h3>
            <p className="mb-6 text-white/70">
              Experience our premium service with no commitment. Get access to all our channels and features for 24 hours.
            </p>
            <a
              href="https://wa.me/212657263966?text=I'd like to try the free 24h trial"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-block"
            >
              Get Free Trial
            </a>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
