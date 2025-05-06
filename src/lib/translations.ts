
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
  | 'faq_a5';

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
  faq_a5: "Yes, you can cancel your subscription at any time. No long-term contracts or hidden fees."
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
  faq_q4: "Ai-je besoin d'une connexion internet rapide?",
  faq_a4: "Nous recommandons une vitesse minimale de 10 Mbps pour le contenu SD et 25 Mbps pour le contenu HD/4K. Notre technologie de streaming adaptatif ajuste la qualité en fonction de votre connexion.",
  faq_q5: "Puis-je annuler mon abonnement à tout moment?",
  faq_a5: "Oui, vous pouvez annuler votre abonnement à tout moment. Pas de contrats à long terme ni de frais cachés."
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
  faq_q1: "كيف يعمل YassinIPTV؟",
  faq_a1: "يبث YassinIPTV المحتوى عبر اتصالك بالإنترنت. ما عليك سوى الاشتراك في خطة، وتنزيل تطبيقنا على جهازك المفضل، وتسجيل الدخول باستخدام بيانات اعتمادك، وبدء المشاهدة.",
  faq_q2: "ما هي الأجهزة التي يمكنني استخدامها مع YassinIPTV؟",
  faq_a2: "تعمل خدمتنا على الهواتف الذكية والأجهزة اللوحية وأجهزة التلفزيون الذكية وصناديق Android وAmazon Firestick وApple TV ومعظم الأجهزة التي تدعم مشغلات IPTV مثل VLC أو IPTV Smarters أو Perfect Player.",
  faq_q3: "هل YassinIPTV قانوني؟",
  faq_a3: "يقدم YassinIPTV محتوى مرخصًا من خلال اتفاقيات مع مزودي المحتوى. نحن نضمن الامتثال للوائح ذات الصلة في المناطق التي نعمل فيها.",
  faq_q4: "هل أحتاج إلى اتصال إنترنت سريع؟",
  faq_a4: "نوصي بسرعة لا تقل عن 10 ميجابت في الثانية للمحتوى بدقة SD و25 ميجابت في الثانية للمحتوى بدقة HD/4K. تقوم تقنية البث المتكيفة لدينا بضبط الجودة بناءً على اتصالك.",
  faq_q5: "هل يمكنني إلغاء اشتراكي في أي وقت؟",
  faq_a5: "نعم، يمكنك إلغاء اشتراكك في أي وقت. لا توجد عقود طويلة الأمد أو رسوم خفية."
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
  faq_a3: "YassinIPTV ofrece contenido con licencia a través de acuerdos con proveedores de contenido. Aseguramos el cumplimiento de las regulaciones relevantes en los territorios en los que operamos.",
  faq_q4: "¿Necesito una conexión a Internet rápida?",
  faq_a4: "Recomendamos una velocidad mínima de 10 Mbps para contenido SD y 25 Mbps para contenido HD/4K. Nuestra tecnología de transmisión adaptativa ajusta la calidad según su conexión.",
  faq_q5: "¿Puedo cancelar mi suscripción en cualquier momento?",
  faq_a5: "Sí, puede cancelar su suscripción en cualquier momento. No hay contratos a largo plazo ni tarifas ocultas."
};

// Map of all available translations
const translations = {
  en,
  fr,
  ar,
  es
};

// Helper function to get translation
export const getTranslation = (
  key: TranslationKey,
  language: LanguageCode
): string => {
  return translations[language][key] || translations.en[key] || key;
};

export default translations;
