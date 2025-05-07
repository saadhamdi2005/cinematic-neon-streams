export type LanguageCode = 'en' | 'fr' | 'ar' | 'es';

// Define the translation key type to ensure typesafety
export type TranslationKey = 
  | 'loading'
  | 'please_wait'
  | 'language_notice'
  | 'channelsTitle'
  | 'channelsSubtitle'
  | 'pricing_title'
  | 'pricing_subtitle'
  | 'monthly'
  | 'yearly'
  | 'save'
  | 'yearly_discount'
  | 'month'
  | 'year'
  | 'basic_plan'
  | 'standard_plan'
  | 'premium_plan'
  | 'get_started'
  | 'most_popular'
  | 'basic_description'
  | 'standard_description'
  | 'premium_description'
  | 'channels'
  | 'movies'
  | 'tv_shows'
  | 'quality'
  | 'devices'
  | 'support'
  | 'faq_title'
  | 'faq_subtitle'
  | 'faq_q1'
  | 'faq_a1'
  | 'faq_q2'
  | 'faq_a2'
  | 'faq_q3'
  | 'faq_a3'
  | 'faq_q4'
  | 'faq_a4'
  | 'faq_q5'
  | 'faq_a5'
  | 'faq_q6'
  | 'faq_a6'
  | 'faq_q7'
  | 'faq_a7'
  | 'faq_q8'
  | 'faq_a8'
  | 'free_trial'
  | 'buy_now'
  | 'home'
  | 'pricing'
  | 'reseller_title'
  | 'reseller_subtitle'
  | 'reseller_competitive_pricing'
  | 'reseller_competitive_pricing_desc'
  | 'reseller_white_label'
  | 'reseller_white_label_desc'
  | 'reseller_support'
  | 'reseller_support_desc'
  | 'reseller_starter'
  | 'reseller_pro'
  | 'reseller_enterprise'
  | 'reseller_credits'
  | 'reseller_feature_credits_10'
  | 'reseller_feature_credits_25'
  | 'reseller_feature_credits_100'
  | 'reseller_feature_basic_panel'
  | 'reseller_feature_advanced_panel'
  | 'reseller_feature_premium_panel'
  | 'reseller_feature_email_support'
  | 'reseller_feature_priority_support'
  | 'reseller_feature_vip_support'
  | 'reseller_feature_white_label'
  | 'reseller_feature_custom_domain'
  | 'reseller_feature_custom_domain_included'
  | 'reseller_feature_marketing'
  | 'reseller_feature_account_manager'
  | 'reseller_feature_api_access'
  | 'reseller_most_popular'
  | 'reseller_get_started'
  | 'reseller_questions'
  | 'reseller_contact_us'
  | 'reseller_interested_in'
  | 'chat_with_us'
  | 'quarter';

// English translations (default)
const en = {
  loading: "Loading...",
  please_wait: "Please wait",
  language_notice: "Choose your language",
  channelsTitle: "Thousands of Live Channels",
  channelsSubtitle: "Enjoy premium TV channels from around the world",
  pricing_title: "Simple, Transparent Pricing",
  pricing_subtitle: "Choose the plan that's right for you",
  monthly: "Monthly",
  yearly: "Yearly",
  save: "Save",
  yearly_discount: "20% discount",
  month: "/month",
  year: "/year",
  basic_plan: "Basic",
  standard_plan: "Standard",
  premium_plan: "Premium",
  get_started: "Get Started",
  most_popular: "Most Popular",
  basic_description: "Perfect for casual viewing",
  standard_description: "Great for family entertainment",
  premium_description: "Ultimate entertainment experience",
  channels: "Channels",
  movies: "Movies",
  tv_shows: "TV Shows",
  quality: "Quality",
  devices: "Devices",
  support: "Support",
  faq_title: "Frequently Asked Questions",
  faq_subtitle: "Find answers to common questions about our service",
  faq_q1: "How does YassinIPTV work?",
  faq_a1: "YassinIPTV streams content through your internet connection. Simply subscribe to a plan, download our app on your preferred device, log in with your credentials, and start watching.",
  faq_q2: "What devices can I use with YassinIPTV?",
  faq_a2: "Our service works on smartphones, tablets, smart TVs, Android boxes, Amazon Firestick, Apple TV, and most devices that support IPTV players like VLC, IPTV Smarters, or Perfect Player.",
  faq_q3: "Is YassinIPTV legal?",
  faq_a3: "YassinIPTV offers licensed content through agreements with content providers. We ensure compliance with relevant regulations in the territories we operate in.",
  faq_q4: "Do I need a fast internet connection?",
  faq_a4: "We recommend a minimum speed of 10 Mbps for SD content and 25 Mbps for HD/4K content. Our adaptive streaming technology adjusts quality based on your connection.",
  faq_q5: "Can I cancel my subscription anytime?",
  faq_a5: "Yes, you can cancel your subscription at any time. No long-term contracts or hidden fees.",
  faq_q6: "What makes YassinIPTV different from other services?",
  faq_a6: "YassinIPTV provides premium quality channels, reliable streams, excellent customer service, and multi-device compatibility, all at an affordable price.",
  faq_q7: "How many devices can I use simultaneously?",
  faq_a7: "Depending on your plan, you can stream on 1 to 4 devices simultaneously. Check your plan details for the exact number allowed.",
  faq_q8: "Do you offer a free trial?",
  faq_a8: "Yes, we offer a 24-hour free trial so you can experience our service before subscribing.",
  free_trial: "Start Free Trial",
  buy_now: "Buy Now",
  home: "Home",
  pricing: "Pricing",
  reseller_title: "Become a Reseller",
  reseller_subtitle: "Start your own IPTV business with our comprehensive reseller program and earn substantial profits",
  reseller_competitive_pricing: "Competitive Pricing",
  reseller_competitive_pricing_desc: "Get access to our services at wholesale rates, allowing you to set your own margins and maximize profits.",
  reseller_white_label: "White-Label Solution",
  reseller_white_label_desc: "Rebrand our service under your own name with our complete white-label solution.",
  reseller_support: "24/7 Support",
  reseller_support_desc: "Dedicated support team to help you and your customers at any time of the day.",
  reseller_starter: "Starter Reseller",
  reseller_pro: "Pro Reseller",
  reseller_enterprise: "Enterprise Reseller",
  reseller_credits: "account credits",
  reseller_feature_credits_10: "10 account credits",
  reseller_feature_credits_25: "25 account credits",
  reseller_feature_credits_100: "100 account credits",
  reseller_feature_basic_panel: "Basic reseller panel",
  reseller_feature_advanced_panel: "Advanced reseller panel",
  reseller_feature_premium_panel: "Premium reseller panel",
  reseller_feature_email_support: "Email support",
  reseller_feature_priority_support: "Priority support",
  reseller_feature_vip_support: "24/7 VIP support",
  reseller_feature_white_label: "White label solution",
  reseller_feature_custom_domain: "Custom domain option",
  reseller_feature_custom_domain_included: "Custom domain included",
  reseller_feature_marketing: "Marketing materials",
  reseller_feature_account_manager: "Dedicated account manager",
  reseller_feature_api_access: "Custom API access",
  reseller_most_popular: "Most Popular",
  reseller_get_started: "Get Started",
  reseller_questions: "Have questions about our reseller program? Our team is ready to help you get started.",
  reseller_contact_us: "Contact Us",
  reseller_interested_in: "I'm interested in the",
  chat_with_us: "Chat with us",
  quarter: "Quarter"
};

// French translations
const fr = {
  loading: "Chargement...",
  please_wait: "Veuillez patienter",
  language_notice: "Choisissez votre langue",
  channelsTitle: "Des milliers de chaînes en direct",
  channelsSubtitle: "Profitez des chaînes TV premium du monde entier",
  pricing_title: "Tarification simple et transparente",
  pricing_subtitle: "Choisissez le forfait qui vous convient",
  monthly: "Mensuel",
  yearly: "Annuel",
  save: "Économisez",
  yearly_discount: "20% de réduction",
  month: "/mois",
  year: "/an",
  basic_plan: "Basique",
  standard_plan: "Standard",
  premium_plan: "Premium",
  get_started: "Commencer",
  most_popular: "Plus populaire",
  basic_description: "Parfait pour un visionnage occasionnel",
  standard_description: "Idéal pour le divertissement familial",
  premium_description: "L'expérience de divertissement ultime",
  channels: "Chaînes",
  movies: "Films",
  tv_shows: "Séries TV",
  quality: "Qualité",
  devices: "Appareils",
  support: "Support",
  faq_title: "Questions fréquemment posées",
  faq_subtitle: "Trouvez des réponses aux questions courantes sur notre service",
  faq_q1: "Comment fonctionne YassinIPTV?",
  faq_a1: "YassinIPTV diffuse du contenu via votre connexion internet. Abonnez-vous à un forfait, téléchargez notre application sur votre appareil préféré, connectez-vous avec vos identifiants et commencez à regarder.",
  faq_q2: "Quels appareils puis-je utiliser avec YassinIPTV?",
  faq_a2: "Notre service fonctionne sur smartphones, tablettes, smart TVs, box Android, Amazon Firestick, Apple TV et la plupart des appareils qui prennent en charge les lecteurs IPTV comme VLC, IPTV Smarters ou Perfect Player.",
  faq_q3: "YassinIPTV est-il légal?",
  faq_a3: "YassinIPTV propose du contenu sous licence grâce à des accords avec les fournisseurs de contenu. Nous assurons la conformité avec les réglementations pertinentes dans les territoires où nous opérons.",
  faq_q4: "Do I need a fast internet connection?",
  faq_a4: "We recommend a minimum speed of 10 Mbps for SD content and 25 Mbps for HD/4K content. Our adaptive streaming technology adjusts quality based on your connection.",
  faq_q5: "Can I cancel my subscription anytime?",
  faq_a5: "Yes, you can cancel your subscription at any time. No long-term contracts or hidden fees.",
  faq_q6: "What makes YassinIPTV different from other services?",
  faq_a6: "YassinIPTV provides premium quality channels, reliable streams, excellent customer service, and multi-device compatibility, all at an affordable price.",
  faq_q7: "How many devices can I use simultaneously?",
  faq_a7: "Depending on your plan, you can stream on 1 to 4 devices simultaneously. Check your plan details for the exact number allowed.",
  faq_q8: "Do you offer a free trial?",
  faq_a8: "Yes, we offer a 24-hour free trial so you can experience our service before subscribing.",
  free_trial: "Essai gratuit",
  buy_now: "Acheter maintenant",
  home: "Accueil",
  pricing: "Tarifs",
  reseller_title: "Devenez Revendeur",
  reseller_subtitle: "Lancez votre propre activité IPTV avec notre programme de revente complet et gagnez des profits substantiels",
  reseller_competitive_pricing: "Prix Compétitifs",
  reseller_competitive_pricing_desc: "Accédez à nos services à des tarifs de gros, vous permettant de fixer vos propres marges et maximiser vos profits.",
  reseller_white_label: "Solution en Marque Blanche",
  reseller_white_label_desc: "Rebrandez notre service sous votre propre nom avec notre solution complète en marque blanche.",
  reseller_support: "Support 24/7",
  reseller_support_desc: "Une équipe de support dédiée pour vous aider, vous et vos clients, à tout moment de la journée.",
  reseller_starter: "Revendeur Débutant",
  reseller_pro: "Revendeur Pro",
  reseller_enterprise: "Revendeur Entreprise",
  reseller_credits: "crédits de compte",
  reseller_feature_credits_10: "10 crédits de compte",
  reseller_feature_credits_25: "25 crédits de compte",
  reseller_feature_credits_100: "100 crédits de compte",
  reseller_feature_basic_panel: "Panneau de revendeur basique",
  reseller_feature_advanced_panel: "Panneau de revendeur avancé",
  reseller_feature_premium_panel: "Panneau de revendeur premium",
  reseller_feature_email_support: "Support par email",
  reseller_feature_priority_support: "Support prioritaire",
  reseller_feature_vip_support: "Support VIP 24/7",
  reseller_feature_white_label: "Solution en marque blanche",
  reseller_feature_custom_domain: "Option de domaine personnalisé",
  reseller_feature_custom_domain_included: "Domaine personnalisé inclus",
  reseller_feature_marketing: "Matériels marketing",
  reseller_feature_account_manager: "Gestionnaire de compte dédié",
  reseller_feature_api_access: "Accès API personnalisé",
  reseller_most_popular: "Plus Populaire",
  reseller_get_started: "Commencer",
  reseller_questions: "Des questions sur notre programme de revente ? Notre équipe est prête à vous aider à démarrer.",
  reseller_contact_us: "Contactez-nous",
  reseller_interested_in: "Je suis intéressé par le",
  chat_with_us: "Discuter avec nous",
  quarter: "Trimestre"
};

// Arabic translations
const ar = {
  loading: "جاري التحميل...",
  please_wait: "يرجى الانتظار",
  language_notice: "اختر لغتك",
  channelsTitle: "آلاف القنوات المباشرة",
  channelsSubtitle: "استمتع بقنوات تلفزيونية متميزة من جميع أنحاء العالم",
  pricing_title: "تسعير بسيط وشفاف",
  pricing_subtitle: "اختر الخطة المناسبة لك",
  monthly: "شهري",
  yearly: "سنوي",
  save: "وفر",
  yearly_discount: "خصم 20٪",
  month: "/شهر",
  year: "/سنة",
  basic_plan: "أساسي",
  standard_plan: "قياسي",
  premium_plan: "متميز",
  get_started: "ابدأ الآن",
  most_popular: "الأكثر شعبية",
  basic_description: "مثالي للمشاهدة العادية",
  standard_description: "رائع للترفيه العائلي",
  premium_description: "تجربة ترفيه فائقة",
  channels: "قنوات",
  movies: "أفلام",
  tv_shows: "مسلسلات",
  quality: "الجودة",
  devices: "الأجهزة",
  support: "الدعم",
  faq_title: "الأسئلة المتكررة",
  faq_subtitle: "ابحث عن إجابات للأسئلة الشائعة حول خدماتنا",
  faq_q1: "كيف يعمل YassinIPTV?",
  faq_a1: "YassinIPTV diffuse du contenu via votre connexion internet. Abonnez-vous à un forfait, téléchargez notre application sur votre appareil préféré, connectez-vous avec vos identifiants et commencez à regarder.",
  faq_q2: "Quels appareils puis-je utiliser avec YassinIPTV?",
  faq_a2: "Notre service fonctionne sur smartphones, tablettes, smart TVs, box Android, Amazon Firestick, Apple TV et la plupart des appareils qui prennent en charge les lecteurs IPTV comme VLC, IPTV Smarters ou Perfect Player.",
  faq_q3: "YassinIPTV est-il légal?",
  faq_a3: "YassinIPTV propose du contenu sous licence grâce à des accords avec les fournisseurs de contenu. Nous assurons la conformité avec les réglementations pertinentes dans les territoires où nous opérons.",
  faq_q4: "Do I need a fast internet connection?",
  faq_a4: "We recommend a minimum speed of 10 Mbps for SD content and 25 Mbps for HD/4K content. Our adaptive streaming technology adjusts quality based on your connection.",
  faq_q5: "Can I cancel my subscription anytime?",
  faq_a5: "Yes, you can cancel your subscription at any time. No long-term contracts or hidden fees.",
  faq_q6: "What makes YassinIPTV different from other services?",
  faq_a6: "YassinIPTV offre des chaînes de qualité premium, des flux fiables, un excellent service client et une compatibilité multi-appareils, le tout à un prix asequible.",
  faq_q7: "How many devices can I use simultaneously?",
  faq_a7: "Dependant on your plan, you can stream on 1 to 4 devices simultaneously. Check your plan details for the exact number allowed.",
  faq_q8: "Do you offer a free trial?",
  faq_a8: "Yes, we offer a free trial of 24 hours so you can experience our service before subscribing.",
  free_trial: "ابدأ التجربة المجانية",
  buy_now: "اشتر الآن",
  home: "الرئيسية",
  pricing: "التسعير",
  reseller_title: "كن موزعًا",
  reseller_subtitle: "ابدأ عملك الخاص في مجال IPTV مع برنامج الموزعين الشامل لدينا واكسب أرباحًا كبيرة",
  reseller_competitive_pricing: "أسعار تنافسية",
  reseller_competitive_pricing_desc: "احصل على خدماتنا بأسعار الجملة، مما يتيح لك تحديد هوامش الربح الخاصة بك وتعظيم الأرباح.",
  reseller_white_label: "حل العلامة البيضاء",
  reseller_white_label_desc: "أعد تسمية خدمتنا تحت اسمك الخاص مع حل العلامة البيضاء الكامل لدينا.",
  reseller_support: "دعم على مدار الساعة",
  reseller_support_desc: "فريق دعم مخصص لمساعدتك ومساعدة عملائك في أي وقت من اليوم.",
  reseller_starter: "الموزع المبتدئ",
  reseller_pro: "الموزع المحترف",
  reseller_enterprise: "موزع المؤسسات",
  reseller_credits: "رصيد الحساب",
  reseller_feature_credits_10: "10 أرصدة حساب",
  reseller_feature_credits_25: "25 رصيد حساب",
  reseller_feature_credits_100: "100 رصيد حساب",
  reseller_feature_basic_panel: "لوحة موزع أساسية",
  reseller_feature_advanced_panel: "لوحة موزع متقدمة",
  reseller_feature_premium_panel: "لوحة موزع متميزة",
  reseller_feature_email_support: "دعم بالبريد الإلكتروني",
  reseller_feature_priority_support: "دعم ذو أولوية",
  reseller_feature_vip_support: "دعم VIP 24/7",
  reseller_feature_white_label: "حل العلامة البيضاء",
  reseller_feature_custom_domain: "خيار النطاق المخصص",
  reseller_feature_custom_domain_included: "نطاق مخصص مشمول",
  reseller_feature_marketing: "مواد تسويقية",
  reseller_feature_account_manager: "مدير حساب مخصص",
  reseller_feature_api_access: "وصول API مخصص",
  reseller_most_popular: "الأكثر شعبية",
  reseller_get_started: "ابدأ الآن",
  reseller_questions: "هل لديك أسئلة حول برنامج الموزعين لدينا؟ فريقنا جاهز لمساعدتك على البدء.",
  reseller_contact_us: "اتصل بنا",
  reseller_interested_in: "أنا مهتم بـ",
  chat_with_us: "دردش معنا",
  quarter: "ربع سنوي"
};

// Spanish translations
const es = {
  loading: "Cargando...",
  please_wait: "Por favor espere",
  language_notice: "Elija su idioma",
  channelsTitle: "Miles de canales en vivo",
  channelsSubtitle: "Disfrute de canales premium de todo el mundo",
  pricing_title: "Precios simples y transparentes",
  pricing_subtitle: "Elija el plan adecuado para usted",
  monthly: "Mensual",
  yearly: "Anual",
  save: "Ahorre",
  yearly_discount: "20% de descuento",
  month: "/mes",
  year: "/año",
  basic_plan: "Básico",
  standard_plan: "Estándar",
  premium_plan: "Premium",
  get_started: "Comenzar",
  most_popular: "Más popular",
  basic_description: "Perfecto para visualización ocasional",
  standard_description: "Excelente para entretenimiento familiar",
  premium_description: "Experiencia de entretenimiento definitiva",
  channels: "Canales",
  movies: "Películas",
  tv_shows: "Series de TV",
  quality: "Calidad",
  devices: "Dispositivos",
  support: "Soporte",
  faq_title: "Preguntas frecuentes",
  faq_subtitle: "Encuentre respuestas a preguntas comunes sobre nuestro servicio",
  faq_q1: "¿Cómo funciona YassinIPTV?",
  faq_a1: "YassinIPTV transmite contenido a través de su conexión a Internet. Simplemente suscríbase a un plan, descargue nuestra aplicación en su dispositivo preferido, inicie sesión con sus credenciales y comience a ver.",
  faq_q2: "¿Qué dispositivos puedo usar con YassinIPTV?",
  faq_a2: "Nuestro servicio funciona en teléfonos inteligentes, tabletas, smart TVs, Android Box, Amazon Firestick, Apple TV y la mayoría de dispositivos que admiten reproductores IPTV como VLC, IPTV Smarters o Perfect Player.",
  faq_q3: "¿Es YassinIPTV legal?",
  faq_a3: "YassinIPTV ofrece contenido con licencia a través de acuerdos con proveedores de contenido. Aseguramos el cumplimiento de las regulaciones pertinentes en los territorios en los que operamos.",
  faq_q4: "¿Necesito una conexión a Internet rápida?",
  faq_a4: "Recomendamos una velocidad mínima de 10 Mbps para contenido SD y 25 Mbps para contenido HD/4K. Nuestra tecnología de transmisión adaptativa ajusta la calidad según su conexión.",
  faq_q5: "¿Puedo cancelar mi suscripción en cualquier momento?",
  faq_a5: "Sí, puede cancelar su suscripción en cualquier momento. No hay contratos a largo plazo ni tarifas ocultas.",
  faq_q6: "¿Qué hace a YassinIPTV diferente de otros servicios?",
  faq_a6: "YassinIPTV proporciona canales de calidad premium, transmisiones confiables, excelente servicio al cliente y compatibilidad con múltiples dispositivos, todo a un precio asequible.",
  faq_q7: "¿Cuántos dispositivos puedo usar simultáneamente?",
  faq_a7: "Dependiendo de su plan, puede transmitir en 1 a 4 dispositivos simultáneamente. Consulte los detalles de su plan para conocer el número exacto permitido.",
  faq_q8: "¿Ofrecen una prueba gratuita?",
  faq_a8: "Sí, ofrecemos una prueba gratuita de 24 horas para que pueda experimentar nuestro servicio antes de suscribirse.",
  free_trial: "Iniciar prueba gratuita",
  buy_now: "Comprar ahora",
  home: "Inicio",
  pricing: "Precios",
  reseller_title: "Conviértase en Revendedor",
  reseller_subtitle: "Inicie su propio negocio de IPTV con nuestro programa de revendedor integral y obtenga ganancias sustanciales",
  reseller_competitive_pricing: "Precios Competitivos",
  reseller_competitive_pricing_desc: "Acceda a nuestros servicios a precios mayoristas, lo que le permite establecer sus propios márgenes y maximizar las ganancias.",
  reseller_white_label: "Solución de Marca Blanca",
  reseller_white_label_desc: "Renombre nuestro servicio bajo su propia marca con nuestra solución completa de marca blanca.",
  reseller_support: "Soporte 24/7",
  reseller_support_desc: "Equipo de soporte dedicado para ayudarle a usted y a sus clientes en cualquier momento del día.",
  reseller_starter: "Revendedor Inicial",
  reseller_pro: "Revendedor Pro",
  reseller_enterprise: "Revendedor Empresarial",
  reseller_credits: "créditos de cuenta",
  reseller_feature_credits_10: "10 créditos de cuenta",
  reseller_feature_credits_25: "25 créditos de cuenta",
  reseller_feature_credits_100: "100 créditos de cuenta",
  reseller_feature_basic_panel: "Panel de revendedor básico",
  reseller_feature_advanced_panel: "Panel de revendedor avanzado",
  reseller_feature_premium_panel: "Panel de revendedor premium",
  reseller_feature_email_support: "Soporte por email",
  reseller_feature_priority_support: "Soporte prioritario",
  reseller_feature_vip_support: "Soporte VIP 24/7",
  reseller_feature_white_label: "Solución de marca blanca",
  reseller_feature_custom_domain: "Opción de dominio personalizado",
  reseller_feature_custom_domain_included: "Dominio personalizado incluido",
  reseller_feature_marketing: "Materiales de marketing",
  reseller_feature_account_manager: "Gestor de cuenta dedicado",
  reseller_feature_api_access: "Acceso API personalizado",
  reseller_most_popular: "Más Popular",
  reseller_get_started: "Comenzar",
  reseller_questions: "¿Tiene preguntas sobre nuestro programa de revendedor? Nuestro equipo está listo para ayudarle a comenzar.",
  reseller_contact_us: "Contáctenos",
  reseller_interested_in: "Estoy interesado en el",
  chat_with_us: "Chatear con nosotros",
  quarter: "Trimestre"
};

// Map of all available translations
const translations = {
  en,
  fr,
  ar,
  es
};

// Correct the getTranslation function - parameters were swapped
export const getTranslation = (
  key: TranslationKey,
  language: LanguageCode
): string => {
  // Make sure we access translations in the correct order
  return translations[language]?.[key] || translations.en[key] || key;
};

export default translations;
