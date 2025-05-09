
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define feature interface
interface PlanFeature {
  id: string;
  basic: boolean;
  standard: boolean;
  premium: boolean;
  label: string;
}

// More professional pricing section with free trial at the top
const PricingSection = () => {
  const { t, language } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<"month" | "year" | "quarter">("month");
  
  const handleBillingCycleChange = (cycle: "month" | "year" | "quarter") => {
    setBillingCycle(cycle);
  };

  // Features table with boolean values for each plan
  const features: PlanFeature[] = [
    { id: "channels", basic: true, standard: true, premium: true, label: "5000+ TV Channels" },
    { id: "vod", basic: false, standard: true, premium: true, label: "15000+ Movies & Series" },
    { id: "hd", basic: true, standard: true, premium: true, label: "HD Streaming Quality" },
    { id: "uhd", basic: false, standard: false, premium: true, label: "4K UHD Streaming" },
    { id: "devices", basic: true, standard: true, premium: true, label: "Multi-device Support" },
    { id: "connections", basic: false, standard: true, premium: true, label: "Simultaneous Connections" },
    { id: "ppv", basic: false, standard: true, premium: true, label: "PPV Events Included" },
    { id: "epg", basic: true, standard: true, premium: true, label: "Electronic Program Guide" },
    { id: "catchup", basic: false, standard: true, premium: true, label: "7-day Catch-up TV" },
    { id: "support", basic: false, standard: true, premium: true, label: "24/7 Priority Support" },
  ];

  // Pricing data based on billing cycle
  const pricingData = {
    basic: {
      month: 9.99,
      quarter: 25.99,
      year: 89.99,
      connections: 1
    },
    standard: {
      month: 14.99,
      quarter: 39.99,
      year: 139.99,
      connections: 2
    },
    premium: {
      month: 19.99,
      quarter: 54.99,
      year: 199.99,
      connections: 4
    }
  };

  // Calculate savings percentages for quarterly and yearly options
  const calculateSavings = (plan: "basic" | "standard" | "premium", cycle: "quarter" | "year") => {
    const monthlyPrice = pricingData[plan].month;
    
    let regularPrice: number;
    if (cycle === "quarter") {
      regularPrice = monthlyPrice * 3;
    } else {
      regularPrice = monthlyPrice * 12;
    }
    
    const discountedPrice = pricingData[plan][cycle];
    const savings = ((regularPrice - discountedPrice) / regularPrice) * 100;
    
    return Math.round(savings);
  };

  return (
    <section id="pricing" className="py-20 bg-yassin-darkest relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--yassin-neon-purple)_0%,transparent_70%)] opacity-5"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/c7b76c61-391a-491b-a4cd-7756be710fac.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Free Trial Box at the top of pricing section */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yassin-neon-blue via-yassin-neon-purple to-yassin-neon-pink blur-lg opacity-50 rounded-3xl transform -rotate-1"></div>
          <div className="relative bg-gradient-to-r from-black to-yassin-darker border border-white/10 p-8 rounded-2xl shadow-glow flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                {t('free_trial_title')}
              </h3>
              <p className="text-white/70 max-w-xl">
                {t('free_trial_subtitle')}
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yassin-neon-purple to-yassin-neon-blue hover:from-yassin-neon-blue hover:to-yassin-neon-purple text-white font-bold py-3 px-8 rounded-full shadow-glow transition-all duration-300 transform hover:scale-105"
              aria-label="Request free trial"
            >
              {t('free_trial_button')}
            </Button>
          </div>
        </div>
      
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient heading-glow">
            {t('pricing_title')}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {t('pricing_subtitle')}
          </p>
        </div>
        
        {/* Billing cycle tabs - uniform appearance */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 uniform-button-container">
          <Button
            onClick={() => handleBillingCycleChange("month")}
            className={`${
              billingCycle === "month"
                ? "bg-gradient-to-r from-yassin-neon-blue to-yassin-neon-purple text-white"
                : "bg-black/20 text-white border border-white/10"
            } rounded-full px-6 py-2 min-w-[120px] font-medium transition-all duration-300`}
            aria-pressed={billingCycle === "month"}
            aria-label="Switch to monthly billing"
          >
            {t('monthly')}
          </Button>
          <Button
            onClick={() => handleBillingCycleChange("quarter")}
            className={`${
              billingCycle === "quarter"
                ? "bg-gradient-to-r from-yassin-neon-blue to-yassin-neon-purple text-white"
                : "bg-black/20 text-white border border-white/10"
            } rounded-full px-6 py-2 min-w-[120px] font-medium transition-all duration-300`}
            aria-pressed={billingCycle === "quarter"}
            aria-label="Switch to quarterly billing"
          >
            {t('quarter')}
          </Button>
          <Button
            onClick={() => handleBillingCycleChange("year")}
            className={`${
              billingCycle === "year"
                ? "bg-gradient-to-r from-yassin-neon-blue to-yassin-neon-purple text-white"
                : "bg-black/20 text-white border border-white/10"
            } rounded-full px-6 py-2 min-w-[120px] font-medium transition-all duration-300 relative`}
            aria-pressed={billingCycle === "year"}
            aria-label="Switch to yearly billing"
          >
            {t('yearly')}
            <span className="absolute -top-2 -right-2 bg-yassin-neon-pink text-white text-xs font-bold px-2 py-0.5 rounded-full">
              -20%
            </span>
          </Button>
        </div>
        
        {/* Pricing cards in grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-yassin-neon-blue/50 hover:shadow-glow-sm transform hover:-translate-y-1">
            <div className="p-6 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">{t('basic_plan')}</h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-yassin-neon-blue">$</span>
                <span className="text-4xl font-extrabold text-white">
                  {pricingData.basic[billingCycle].toFixed(2)}
                </span>
                <span className="text-white/70 ml-1">
                  {billingCycle === "year" ? t('year') : billingCycle === "quarter" ? "/quarter" : t('month')}
                </span>
              </div>
              
              {/* Show savings if quarterly or yearly */}
              {billingCycle !== "month" && (
                <div className="mt-2 inline-block bg-white/10 text-yassin-neon-pink text-sm font-medium px-2 py-0.5 rounded">
                  {t('save')} {calculateSavings("basic", billingCycle === "quarter" ? "quarter" : "year")}%
                </div>
              )}
              
              <p className="text-white/70 mt-4">
                {pricingData.basic.connections} {t('connections_count', { count: pricingData.basic.connections })}
              </p>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature.id} className="flex items-center">
                    {feature.basic ? (
                      <Check className="h-5 w-5 text-yassin-neon-blue mr-3" />
                    ) : (
                      <X className="h-5 w-5 text-white/30 mr-3" />
                    )}
                    <span className={feature.basic ? "text-white" : "text-white/50"}>
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full mt-6 bg-transparent border border-yassin-neon-blue text-white hover:bg-yassin-neon-blue/20 transition-all rounded-xl py-3 font-medium"
              >
                {t('get_started')}
              </Button>
            </div>
          </div>
          
          {/* Standard Plan */}
          <div className="bg-black/30 backdrop-blur-md border border-yassin-neon-purple rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1 relative">
            {/* Most popular badge */}
            <div className="absolute top-0 right-0">
              <div className="bg-yassin-neon-purple text-white text-xs font-bold px-3 py-1 rounded-bl-lg animate-pulse-slow">
                {t('most_popular')}
              </div>
            </div>
            
            <div className="p-6 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">{t('standard_plan')}</h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-yassin-neon-purple">$</span>
                <span className="text-4xl font-extrabold text-white">
                  {pricingData.standard[billingCycle].toFixed(2)}
                </span>
                <span className="text-white/70 ml-1">
                  {billingCycle === "year" ? t('year') : billingCycle === "quarter" ? "/quarter" : t('month')}
                </span>
              </div>
              
              {/* Show savings if quarterly or yearly */}
              {billingCycle !== "month" && (
                <div className="mt-2 inline-block bg-white/10 text-yassin-neon-pink text-sm font-medium px-2 py-0.5 rounded">
                  {t('save')} {calculateSavings("standard", billingCycle === "quarter" ? "quarter" : "year")}%
                </div>
              )}
              
              <p className="text-white/70 mt-4">
                {pricingData.standard.connections} {t('connections_count', { count: pricingData.standard.connections })}
              </p>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature.id} className="flex items-center">
                    {feature.standard ? (
                      <Check className="h-5 w-5 text-yassin-neon-purple mr-3" />
                    ) : (
                      <X className="h-5 w-5 text-white/30 mr-3" />
                    )}
                    <span className={feature.standard ? "text-white" : "text-white/50"}>
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full mt-6 bg-gradient-to-r from-yassin-neon-purple to-yassin-neon-blue hover:from-yassin-neon-blue hover:to-yassin-neon-purple text-white transition-all rounded-xl py-3 font-medium shadow-glow"
              >
                {t('get_started')}
              </Button>
            </div>
          </div>
          
          {/* Premium Plan */}
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-yassin-neon-pink/50 hover:shadow-glow-sm transform hover:-translate-y-1">
            <div className="p-6 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">{t('premium_plan')}</h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-yassin-neon-pink">$</span>
                <span className="text-4xl font-extrabold text-white">
                  {pricingData.premium[billingCycle].toFixed(2)}
                </span>
                <span className="text-white/70 ml-1">
                  {billingCycle === "year" ? t('year') : billingCycle === "quarter" ? "/quarter" : t('month')}
                </span>
              </div>
              
              {/* Show savings if quarterly or yearly */}
              {billingCycle !== "month" && (
                <div className="mt-2 inline-block bg-white/10 text-yassin-neon-pink text-sm font-medium px-2 py-0.5 rounded">
                  {t('save')} {calculateSavings("premium", billingCycle === "quarter" ? "quarter" : "year")}%
                </div>
              )}
              
              <p className="text-white/70 mt-4">
                {pricingData.premium.connections} {t('connections_count', { count: pricingData.premium.connections })}
              </p>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature.id} className="flex items-center">
                    {feature.premium ? (
                      <Check className="h-5 w-5 text-yassin-neon-pink mr-3" />
                    ) : (
                      <X className="h-5 w-5 text-white/30 mr-3" />
                    )}
                    <span className={feature.premium ? "text-white" : "text-white/50"}>
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full mt-6 bg-transparent border border-yassin-neon-pink text-white hover:bg-yassin-neon-pink/20 transition-all rounded-xl py-3 font-medium"
              >
                {t('select')}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Money back guarantee */}
        <div className="text-center mt-10 text-white/70">
          <p>30-day money-back guarantee. Cancel anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
