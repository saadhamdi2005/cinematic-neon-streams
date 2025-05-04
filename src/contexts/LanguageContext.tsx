
import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode, TranslationKey, getTranslation } from '@/lib/translations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: (key: TranslationKey) => string;
  dir: 'ltr' | 'rtl';
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
  dir: 'ltr'
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>('en');
  
  // Get the direction based on language
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  
  // Translation function
  const t = (key: TranslationKey): string => {
    return getTranslation(language, key);
  };
  
  // Update HTML dir attribute and lang when language changes
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    
    // Add RTL specific styles when Arabic is selected
    if (language === 'ar') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
    
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', language);
  }, [language, dir]);
  
  // Load user's preferred language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && ['en', 'fr', 'ar', 'es'].includes(savedLanguage)) {
      setLanguage(savedLanguage as LanguageCode);
    }
  }, []);
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
