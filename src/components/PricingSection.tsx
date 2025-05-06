
import { useState, useRef } from 'react';
import { CheckCircle2, XCircle } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion'; // Add framer-motion for zoom animations

interface PlanFeature {
  feature: string;
  basic: boolean;
  standard: boolean;
  premium: boolean;
}

const PricingSection = () => {
  const { t } = useLanguage();
  const [isYearly, setIsYearly] = useState(false);
  const basicRef = useRef<HTMLDivElement>(null);
  const standardRef = useRef<HTMLDivElement>(null);
  const premiumRef = useRef<HTMLDivElement>(null);
  
  // Animation variants for text zoom effects
  const textVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };
  
  const priceVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.7, delay: 0.2 } },
    hover: { scale: 1.1, transition: { duration: 0.2 } }
  };

  // Define plan features
  const planFeatures: PlanFeature[] = [
    { feature: t('channels'), basic: true, standard: true, premium: true },
    { feature: '100+ ' + t('movies'), basic: true, standard: true, premium: true },
    { feature: t('tv_shows'), basic: false, standard: true, premium: true },
    { feature: 'HD ' + t('quality'), basic: true, standard: true, premium: true },
    { feature: '4K ' + t('quality'), basic: false, standard: false, premium: true },
    { feature: '1 ' + t('devices'), basic: true, standard: false, premium: false },
    { feature: '3 ' + t('devices'), basic: false, standard: true, premium: false },
    { feature: '5 ' + t('devices'), basic: false, standard: false, premium: true },
    { feature: '24/7 ' + t('support'), basic: false, standard: true, premium: true },
  ];

  // Calculate prices with yearly discount
  const prices = {
    basic: {
      monthly: 9.99,
      yearly: 7.99
    },
    standard: {
      monthly: 19.99,
      yearly: 15.99
    },
    premium: {
      monthly: 29.99,
      yearly: 23.99
    }
  };
  
  // Helper function to render a specific plan price
  const getPlanPrice = (plan: 'basic' | 'standard' | 'premium') => {
    const price = isYearly ? prices[plan].yearly : prices[plan].monthly;
    return (
      <motion.div 
        variants={priceVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="text-4xl font-bold"
      >
        {price}
      </motion.div>
    );
  };

  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            variants={textVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="text-3xl md:text-4xl font-bold mb-4 text-gradient heading-glow"
          >
            {t('pricing_title')}
          </motion.h2>
          <motion.p 
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="text-white/70 max-w-2xl mx-auto"
          >
            {t('pricing_subtitle')}
          </motion.p>

          {/* Toggle between monthly/yearly pricing */}
          <div className="mt-10 inline-flex items-center bg-black/30 p-1 rounded-full border border-white/10 relative">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isYearly
                  ? "bg-gradient-to-r from-yassin-neon-blue to-yassin-neon-purple text-white shadow-lg"
                  : "text-white/70 hover:text-white"
              }`}
              onClick={() => setIsYearly(false)}
            >
              <motion.span
                variants={textVariants} 
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                {t('monthly')}
              </motion.span>
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isYearly
                  ? "bg-gradient-to-r from-yassin-neon-blue to-yassin-neon-purple text-white shadow-lg"
                  : "text-white/70 hover:text-white"
              }`}
              onClick={() => setIsYearly(true)}
            >
              <motion.span
                variants={textVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="flex items-center"
              >
                {t('yearly')}
                <span className="ml-2 text-xs bg-yassin-neon-green/90 text-black px-2 py-0.5 rounded-full whitespace-nowrap">
                  {t('save')} 20%
                </span>
              </motion.span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Basic Plan */}
          <motion.div
            ref={basicRef}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden relative group"
          >
            <div className="p-8">
              <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                whileHover="hover" 
                className="text-xl font-bold text-white mb-2"
              >
                {t('basic_plan')}
              </motion.div>
              <motion.p
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="text-white/60 text-sm mb-6"
              >
                {t('basic_description')}
              </motion.p>
              
              <div className="flex items-end mb-6">
                {getPlanPrice('basic')}
                <span className="text-white/60 ml-1 mb-1">
                  {isYearly ? t('year') : t('month')}
                </span>
              </div>

              <button className="w-full py-3 px-4 rounded-lg bg-white/10 hover:bg-yassin-neon-blue/20 text-white border border-yassin-neon-blue/50 transition-all duration-300 mb-6 backdrop-blur-sm">
                <motion.span
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  {t('get_started')}
                </motion.span>
              </button>

              <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate" 
                className="space-y-3 text-sm"
              >
                {planFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    {feature.basic ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 mr-2 text-yassin-neon-green" />
                        <span className="text-white/80">{feature.feature}</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 mr-2 text-white/40" />
                        <span className="text-white/40">{feature.feature}</span>
                      </>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yassin-neon-blue/50 to-transparent"></div>
          </motion.div>

          {/* Standard Plan */}
          <motion.div
            ref={standardRef}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-sm border border-yassin-neon-blue/30 rounded-xl overflow-hidden relative group md:transform md:-translate-y-4"
          >
            {/* Popular Tag */}
            <div className="absolute top-0 right-0">
              <div className="bg-yassin-neon-purple text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                <motion.span
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  {t('most_popular')}
                </motion.span>
              </div>
            </div>
            
            <div className="p-8">
              <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="text-xl font-bold text-white mb-2"
              >
                {t('standard_plan')}
              </motion.div>
              <motion.p 
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="text-white/60 text-sm mb-6"
              >
                {t('standard_description')}
              </motion.p>
              
              <div className="flex items-end mb-6">
                {getPlanPrice('standard')}
                <span className="text-white/60 ml-1 mb-1">
                  {isYearly ? t('year') : t('month')}
                </span>
              </div>

              <button className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-yassin-neon-blue to-yassin-neon-purple text-white transition-all duration-300 mb-6 shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transform hover:scale-[1.02]">
                <motion.span
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  {t('get_started')}
                </motion.span>
              </button>

              <motion.div 
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="space-y-3 text-sm"
              >
                {planFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    {feature.standard ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 mr-2 text-yassin-neon-green" />
                        <span className="text-white/80">{feature.feature}</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 mr-2 text-white/40" />
                        <span className="text-white/40">{feature.feature}</span>
                      </>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Glow effects */}
            <div className="absolute inset-0 border border-yassin-neon-blue/20 rounded-xl blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yassin-neon-blue to-transparent"></div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            ref={premiumRef}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden relative group"
          >
            <div className="p-8">
              <motion.div 
                variants={textVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="text-xl font-bold text-white mb-2"
              >
                {t('premium_plan')}
              </motion.div>
              <motion.p
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="text-white/60 text-sm mb-6"
              >
                {t('premium_description')}
              </motion.p>
              
              <div className="flex items-end mb-6">
                {getPlanPrice('premium')}
                <span className="text-white/60 ml-1 mb-1">
                  {isYearly ? t('year') : t('month')}
                </span>
              </div>

              <button className="w-full py-3 px-4 rounded-lg bg-white/10 hover:bg-yassin-neon-purple/20 text-white border border-yassin-neon-purple/50 transition-all duration-300 mb-6 backdrop-blur-sm">
                <motion.span
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  {t('get_started')}
                </motion.span>
              </button>

              <motion.div 
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="space-y-3 text-sm"
              >
                {planFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    {feature.premium ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 mr-2 text-yassin-neon-green" />
                        <span className="text-white/80">{feature.feature}</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 mr-2 text-white/40" />
                        <span className="text-white/40">{feature.feature}</span>
                      </>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yassin-neon-purple/50 to-transparent"></div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-yassin-neon-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-64 h-64 bg-yassin-neon-purple/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default PricingSection;
