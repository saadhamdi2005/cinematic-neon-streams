
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const { t } = useLanguage();
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  // This effect adds scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    const animElements = document.querySelectorAll('.pricing-animate');
    animElements.forEach((el) => observer.observe(el));

    return () => {
      animElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Format prices based on selected period
  const getPrice = (basePrice: number) => {
    if (selectedPeriod === 'month') return basePrice;
    if (selectedPeriod === 'quarter') return basePrice * 3 * 0.85; // 15% discount
    if (selectedPeriod === 'year') return basePrice * 12 * 0.7; // 30% discount
    return basePrice;
  };

  const plans = [
    {
      name: 'standard',
      connections: 1,
      price: 10,
      features: ['all_channels', 'hd_quality', 'vod_access', 'support', 'all_devices']
    },
    {
      name: 'gold',
      connections: 2,
      price: 15,
      features: ['all_channels', 'hd_quality', 'vod_access', 'support', 'all_devices', 'ppv_events']
    },
    {
      name: 'premium',
      connections: 4,
      price: 20,
      features: ['all_channels', 'hd_quality', 'vod_access', 'support', 'all_devices', 'ppv_events', 'ultra_hd', 'multiroom']
    }
  ];

  // Animation variants for zoom effect
  const textAnimation = {
    initial: { scale: 0.9, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: { duration: 0.5, type: "spring" }
  };

  const planAnimation = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5, type: "spring", stiffness: 100 }
  };

  return (
    <section id="pricing" className="py-20 px-4 relative bg-yassin-darker overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-gradient heading-glow"
            {...textAnimation}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('pricing_title')}
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-white/70"
            {...textAnimation}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('pricing_desc')}
          </motion.p>

          <motion.div 
            className="mt-8 inline-flex p-1 bg-yassin-darkest/70 backdrop-blur-sm rounded-full"
            {...textAnimation}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {['month', 'quarter', 'year'].map((period) => (
              <button
                key={period}
                className={`px-6 py-2 rounded-full text-sm transition-all ${
                  selectedPeriod === period
                    ? 'bg-gradient-to-r from-yassin-neon-blue to-yassin-neon-purple text-white shadow-lg'
                    : 'text-white/60 hover:text-white'
                }`}
                onClick={() => setSelectedPeriod(period)}
              >
                {t(period)}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <div id="trial" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative pricing-animate glass-card overflow-hidden rounded-2xl ${
                plan.name === 'gold'
                  ? 'border-2 border-yassin-neon-purple transform scale-105 md:scale-110 z-10'
                  : 'border border-white/10'
              }`}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              variants={planAnimation}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
              }}
            >
              {plan.name === 'gold' && (
                <div className="absolute -right-10 top-6 transform rotate-45 bg-gradient-to-r from-yassin-neon-purple to-yassin-neon-blue px-12 py-1 text-xs font-semibold text-white shadow-lg">
                  {t('most_popular')}
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <motion.h3 
                  className="text-lg font-medium text-white mb-2 uppercase"
                  {...textAnimation}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                >
                  {t(plan.name)}
                </motion.h3>
                
                <motion.div 
                  className="flex items-end mb-6"
                  {...textAnimation}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <span className="text-4xl font-bold text-white">${getPrice(plan.price).toFixed(2)}</span>
                  <span className="text-white/60 ml-2">/ {t(selectedPeriod)}</span>
                </motion.div>
                
                <motion.div 
                  className="text-sm text-white/70 mb-4"
                  {...textAnimation}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  {t('connections').replace('{count}', plan.connections.toString())}
                </motion.div>
                
                <motion.ul 
                  className="space-y-3 mb-6"
                  {...textAnimation}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  {plan.features.map((feature) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-start gap-2"
                      {...textAnimation}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <Check className="text-yassin-neon-blue shrink-0 mt-0.5" size={16} />
                      <span className="text-white/80">{t(feature)}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                
                <motion.div
                  {...textAnimation}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <a
                    href="#contact"
                    className={`w-full py-3 px-6 rounded-lg block text-center transition-all duration-300 ${
                      plan.name === 'gold'
                        ? 'bg-gradient-to-r from-yassin-neon-blue to-yassin-neon-purple text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {plan.name === 'gold' ? t('get_started') : t('select_plan')}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Free Trial Section */}
        <motion.div 
          className="mt-16 text-center pricing-animate"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-4 text-gradient"
            {...textAnimation}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {t('try_before_buy')}
          </motion.h3>
          
          <motion.p 
            className="max-w-2xl mx-auto mb-6 text-white/70"
            {...textAnimation}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {t('free_trial_desc')}
          </motion.p>
          
          <motion.div
            {...textAnimation}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="btn-primary py-3 px-8 text-lg"
            >
              {t('get_free_trial')}
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-yassin-neon-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yassin-neon-blue/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default PricingSection;
