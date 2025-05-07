
import { useState } from "react";
import TypedText from "@/components/ui/TypedText";
import GlassCard from "@/components/ui/GlassCard";
import { Zap, Shield, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ResellerSection() {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState({
    card1: false,
    card2: false,
    card3: false
  });

  const features = [
    {
      title: "reseller_competitive_pricing",
      description: "reseller_competitive_pricing_desc",
      icon: <Zap className="w-8 h-8 text-yassin-neon-purple" />,
      color: "purple"
    },
    {
      title: "reseller_white_label",
      description: "reseller_white_label_desc",
      icon: <Star className="w-8 h-8 text-yassin-neon-blue" />,
      color: "blue"
    },
    {
      title: "reseller_support",
      description: "reseller_support_desc",
      icon: <Shield className="w-8 h-8 text-yassin-neon-green" />,
      color: "green"
    },
  ];

  const plans = [
    {
      title: "reseller_starter",
      credits: 10,
      price: 100,
      features: [
        "reseller_feature_credits_10",
        "reseller_feature_basic_panel",
        "reseller_feature_email_support",
        "reseller_feature_white_label"
      ],
      color: "blue"
    },
    {
      title: "reseller_pro",
      credits: 25,
      price: 200,
      features: [
        "reseller_feature_credits_25",
        "reseller_feature_advanced_panel",
        "reseller_feature_priority_support",
        "reseller_feature_white_label",
        "reseller_feature_custom_domain",
        "reseller_feature_marketing"
      ],
      color: "purple",
      popular: true
    },
    {
      title: "reseller_enterprise",
      credits: 100,
      price: 600,
      features: [
        "reseller_feature_credits_100",
        "reseller_feature_premium_panel",
        "reseller_feature_vip_support",
        "reseller_feature_white_label",
        "reseller_feature_custom_domain_included",
        "reseller_feature_marketing",
        "reseller_feature_account_manager",
        "reseller_feature_api_access"
      ],
      color: "pink"
    }
  ];

  return (
    <section id="reseller" className="py-20 relative overflow-hidden">
      {/* Enhanced animated background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-yassin-neon-purple/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-yassin-neon-blue/10 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-2/3 right-1/3 w-[400px] h-[400px] bg-yassin-neon-green/5 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 reveal-animation">
          <h2 className="text-4xl font-bold mb-4">
            <TypedText text={t('reseller_title')} className="text-gradient" delay={100} />
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {t('reseller_subtitle')}
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 reveal-animation">
          {features.map((feature, index) => (
            <GlassCard 
              key={index}
              className="p-6 flex flex-col items-center text-center h-full transform transition-transform hover:scale-105"
              glowOnHover
              neonColor={feature.color as "purple" | "blue" | "green"}
              glowIntensity="high"
              tiltEffect
              pulsate={index === 1}
            >
              <div className="mb-4 p-3 bg-white/5 rounded-full ring-2 ring-white/10 shadow-xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{t(feature.title)}</h3>
              <p className="text-white/70">{t(feature.description)}</p>
              
              {/* Enhanced neon reflection */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-yassin-neon-purple/5 to-transparent rounded-b-xl"></div>
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
                {/* Animated neon border */}
                <div className={`absolute -inset-[1px] rounded-xl ${
                  isPopular 
                    ? 'bg-gradient-to-r from-yassin-neon-purple via-yassin-neon-blue to-yassin-neon-purple bg-size-200 animate-gradient-x'
                    : 'bg-gradient-to-r from-white/20 to-white/10'
                }`}></div>
                
                {isPopular && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <span className="bg-yassin-neon-purple px-4 py-1 rounded-full text-sm font-medium animate-pulse-glow shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                      {t('reseller_most_popular')}
                    </span>
                  </div>
                )}
                
                <GlassCard
                  className={`p-6 flex flex-col h-full border-0 relative z-10 transform transition-transform hover:scale-[1.02]`}
                  glowOnHover
                  neonColor={neonColor}
                  glowIntensity="high"
                  tiltEffect
                  floatingEffect={isPopular}
                  pulsate={isPopular}
                >
                  <h3 className={`text-xl font-bold mb-2 ${isPopular ? 'text-gradient' : 'text-white'}`}>{t(plan.title)}</h3>
                  <div className="mb-2">
                    <span className={`text-3xl font-bold ${isPopular ? 'text-white drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]' : 'text-white'}`}>${plan.price}</span>
                  </div>
                  <p className="text-yassin-neon-blue mb-5">
                    {plan.credits} {t('reseller_credits')}
                  </p>
                  
                  <ul className="space-y-3 mb-6 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Star className={`w-4 h-4 ${
                          isPopular ? 'text-yassin-neon-green' : 'text-yassin-neon-blue'
                        } ${isHovered[`card${index+1}` as keyof typeof isHovered] ? 'animate-pulse-fast' : ''}`} />
                        <span className="text-sm">{t(feature)}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={`https://wa.me/212657263966?text=${encodeURIComponent(`${t('reseller_interested_in')} ${t(plan.title)}`)}`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className={`w-full text-center py-2 rounded-lg transition-all transform hover:scale-105 relative overflow-hidden group ${
                      isPopular 
                        ? 'bg-gradient-to-r from-yassin-neon-purple to-yassin-neon-blue hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] text-white' 
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40'
                    }`}
                  >
                    {/* Moving light effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-150%] group-hover:animate-shine"></span>
                    <span className="relative z-10">{t('reseller_get_started')}</span>
                  </a>
                </GlassCard>

                {/* Enhanced glow effect when hovered */}
                {isHovered[`card${index+1}` as keyof typeof isHovered] && (
                  <div className="absolute inset-0 -z-10 rounded-lg" 
                    style={{
                      background: `radial-gradient(circle at center, var(--yassin-neon-${neonColor}) 0%, transparent 70%)`,
                      opacity: 0.2,
                      filter: "blur(30px)"
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Call to action with enhanced neon effect */}
        <div className="mt-16 text-center reveal-animation">
          <p className="text-white/70 mb-6">
            {t('reseller_questions')}
          </p>
          <a 
            href="https://wa.me/212657263966?text=I need more information about becoming a reseller"
            target="_blank"
            rel="noopener noreferrer" 
            className="relative inline-block py-3 px-8 rounded-full bg-yassin-darkest border border-yassin-neon-purple/50 text-white font-medium transform transition-transform hover:scale-105 overflow-hidden group"
          >
            {/* Inner neon glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-yassin-neon-blue/20 to-yassin-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
            
            {/* Border glow */}
            <span className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              style={{ 
                boxShadow: "0 0 15px rgba(139,92,246,0.5), inset 0 0 10px rgba(139,92,246,0.5)",
                background: "linear-gradient(to right, rgba(139,92,246,0.1), rgba(30,174,219,0.1))"
              }}>
            </span>
            
            {/* Text */}
            <span className="relative z-10 text-gradient">{t('reseller_contact_us')}</span>
            
            {/* Animated glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-150%] group-hover:animate-shine"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ResellerSection;
