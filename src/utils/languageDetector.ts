
import { LanguageCode } from "@/lib/translations";

export const detectBrowserLanguage = (): LanguageCode => {
  // Check if window is available (for SSR compatibility)
  if (typeof window !== 'undefined') {
    // Supported languages
    const supportedLanguages: LanguageCode[] = ['en', 'fr', 'ar', 'es'];
    
    try {
      // Get browser language
      const userLang = navigator.language.slice(0, 2).toLowerCase();
      
      // Check if language is supported
      if (supportedLanguages.includes(userLang as LanguageCode)) {
        return userLang as LanguageCode;
      }
    } catch (error) {
      console.error("Error detecting browser language:", error);
    }
  }
  
  // Default to English
  return 'en';
};

export const setDocumentLanguageAttributes = (language: LanguageCode) => {
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
};
