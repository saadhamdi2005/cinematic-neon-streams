
// Translation keys for the entire application
export const translations = {
  en: {
    // Navigation
    home: "Home",
    channels: "Channels",
    movies: "Movies",
    pricing: "Pricing",
    reseller: "Reseller",
    installation: "Installation",
    faq: "FAQ",
    freeTrial: "Free Trial",

    // Hero section
    heroTitle: "Premium IPTV Streaming",
    heroSubtitle: "Experience the future of television with premium channels, movies and shows.",
    heroButton: "Get Started",
    
    // Channels section
    channelsTitle: "Explore Our Channels",
    channelsSubtitle: "Access thousands of premium channels from around the world.",
    
    // Movies section
    moviesTitle: "Latest Movies & Shows",
    moviesSubtitle: "Stream the latest blockbusters and binge-worthy series.",
    
    // Pricing section
    pricingTitle: "Simple & Affordable Plans",
    pricingSubtitle: "Choose the plan that works best for you.",
    monthly: "Monthly",
    quarterly: "3 Months",
    yearly: "12 Months",
    devices: "Devices",
    channels: "Channels",
    vod: "VOD",
    support: "Support",
    buyNow: "Buy Now",
    
    // Reseller section
    resellerTitle: "Become a Reseller",
    resellerSubtitle: "Start your own business with our reseller program.",
    
    // Installation section
    installTitle: "Easy Installation",
    installSubtitle: "Get started in minutes with our simple setup process.",
    
    // FAQ section
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Find answers to common questions about our service.",
    
    // Footer
    contactUs: "Contact Us",
    support: "Support",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    copyright: "© 2025 YassinIPTV. All rights reserved.",
  },
  
  fr: {
    // Navigation
    home: "Accueil",
    channels: "Chaînes",
    movies: "Films",
    pricing: "Tarification",
    reseller: "Revendeur",
    installation: "Installation",
    faq: "FAQ",
    freeTrial: "Essai Gratuit",

    // Hero section
    heroTitle: "Streaming IPTV Premium",
    heroSubtitle: "Découvrez l'avenir de la télévision avec des chaînes, films et séries premium.",
    heroButton: "Commencer",
    
    // Channels section
    channelsTitle: "Explorez Nos Chaînes",
    channelsSubtitle: "Accédez à des milliers de chaînes premium du monde entier.",
    
    // Movies section
    moviesTitle: "Derniers Films & Séries",
    moviesSubtitle: "Regardez les derniers blockbusters et séries à succès.",
    
    // Pricing section
    pricingTitle: "Plans Simples & Abordables",
    pricingSubtitle: "Choisissez le plan qui vous convient le mieux.",
    monthly: "Mensuel",
    quarterly: "3 Mois",
    yearly: "12 Mois",
    devices: "Appareils",
    channels: "Chaînes",
    vod: "VOD",
    support: "Support",
    buyNow: "Acheter",
    
    // Reseller section
    resellerTitle: "Devenez Revendeur",
    resellerSubtitle: "Lancez votre propre entreprise avec notre programme de revendeur.",
    
    // Installation section
    installTitle: "Installation Facile",
    installSubtitle: "Commencez en quelques minutes avec notre processus d'installation simple.",
    
    // FAQ section
    faqTitle: "Questions Fréquemment Posées",
    faqSubtitle: "Trouvez des réponses aux questions courantes sur notre service.",
    
    // Footer
    contactUs: "Contactez-Nous",
    support: "Support",
    termsOfService: "Conditions d'Utilisation",
    privacyPolicy: "Politique de Confidentialité",
    copyright: "© 2025 YassinIPTV. Tous droits réservés.",
  },
  
  ar: {
    // Navigation
    home: "الرئيسية",
    channels: "القنوات",
    movies: "الأفلام",
    pricing: "الأسعار",
    reseller: "الموزعون",
    installation: "التثبيت",
    faq: "الأسئلة الشائعة",
    freeTrial: "تجربة مجانية",

    // Hero section
    heroTitle: "بث IPTV ممتاز",
    heroSubtitle: "استمتع بمستقبل التلفزيون مع قنوات وأفلام وعروض ممتازة.",
    heroButton: "ابدأ الآن",
    
    // Channels section
    channelsTitle: "استكشف قنواتنا",
    channelsSubtitle: "الوصول إلى آلاف القنوات المتميزة من جميع أنحاء العالم.",
    
    // Movies section
    moviesTitle: "أحدث الأفلام والعروض",
    moviesSubtitle: "شاهد أحدث الأفلام الضخمة والمسلسلات الرائعة.",
    
    // Pricing section
    pricingTitle: "خطط بسيطة وبأسعار معقولة",
    pricingSubtitle: "اختر الخطة التي تناسبك.",
    monthly: "شهري",
    quarterly: "3 أشهر",
    yearly: "12 شهر",
    devices: "الأجهزة",
    channels: "القنوات",
    vod: "VOD",
    support: "الدعم",
    buyNow: "اشترِ الآن",
    
    // Reseller section
    resellerTitle: "كن موزعًا",
    resellerSubtitle: "ابدأ عملك الخاص مع برنامج الموزعين لدينا.",
    
    // Installation section
    installTitle: "تثبيت سهل",
    installSubtitle: "ابدأ في دقائق مع عملية الإعداد البسيطة لدينا.",
    
    // FAQ section
    faqTitle: "الأسئلة المتكررة",
    faqSubtitle: "ابحث عن إجابات للأسئلة الشائعة حول خدمتنا.",
    
    // Footer
    contactUs: "اتصل بنا",
    support: "الدعم",
    termsOfService: "شروط الخدمة",
    privacyPolicy: "سياسة الخصوصية",
    copyright: "© 2025 YassinIPTV. جميع الحقوق محفوظة.",
  }
};

export type LanguageCode = 'en' | 'fr' | 'ar';
export type TranslationKey = keyof typeof translations.en;

export function getTranslation(lang: LanguageCode, key: TranslationKey): string {
  return translations[lang][key] || translations.en[key];
}
