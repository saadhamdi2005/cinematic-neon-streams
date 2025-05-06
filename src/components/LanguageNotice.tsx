
import { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import { LanguageCode } from '@/lib/translations';
import GlassCard from './ui/GlassCard';

const LanguageNotice = () => {
  const { language, setLanguage, t } = useContext(LanguageContext);
  const [isVisible, setIsVisible] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];
  
  // Hide notice after user interaction or after 10 seconds
  useEffect(() => {
    if (hasInteracted) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [hasInteracted]);

  const handleLanguageChange = (newLanguage: LanguageCode) => {
    setLanguage(newLanguage);
    setHasInteracted(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
      <div className="loading-border">
        <GlassCard className="p-4 animate-fadeIn bg-black/70" neonColor="blue">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-gradient-to-r from-yassin-neon-purple to-yassin-neon-blue rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m5 8 6 6 6-6"/>
                </svg>
              </div>
              <span className="font-medium text-lg holographic-text">{t('language_notice')}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 w-full mt-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code as LanguageCode)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    language === lang.code
                      ? 'bg-gradient-to-r from-yassin-neon-blue to-yassin-neon-purple text-white shadow-lg shadow-yassin-neon-blue/20'
                      : 'bg-white/10 hover:bg-white/20 text-white/80'
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setIsVisible(false)}
              className="mt-4 text-white/60 hover:text-white text-sm flex items-center gap-1 px-3 py-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
              <span>Dismiss</span>
            </button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default LanguageNotice;
