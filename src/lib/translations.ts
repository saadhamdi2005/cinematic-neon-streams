
// Define all available languages
export type LanguageCode = "en" | "fr" | "ar" | "es";

// Define translation key types for type safety
export type TranslationKey = 
  // Navigation
  | "home" | "channels" | "movies" | "pricing" | "reseller" | "installation" | "faq" 
  | "language" | "login" | "signup" | "free_trial" | "support"
  // Hero section
  | "hero_title" | "hero_subtitle" | "hero_cta" | "hero_secondary_cta"
  // Features section
  | "features_title" | "channels_count" | "movies_count" | "devices_support" | "countries"
  // Channels section
  | "channels_title" | "channels_subtitle" | "channels_cta"
  // Movies section
  | "movies_title" | "movies_subtitle" | "movies_cta"
  // Pricing section
  | "pricing_title" | "pricing_subtitle" 
  | "basic_plan" | "standard_plan" | "premium_plan" | "most_popular"
  | "month" | "devices" | "channel_count" | "movie_count" | "support_247" | "hd_quality" | "ultra_hd"
  | "select_plan" | "includes_vat" | "buy_now" | "free_trial"
  // Pricing Plans
  | "monthly" | "quarterly" | "yearly"
  // Reseller section
  | "reseller_title" | "reseller_subtitle" | "reseller_cta"
  | "reseller_feature1" | "reseller_feature2" | "reseller_feature3"
  // Installation section
  | "install_title" | "install_subtitle" | "install_step1" | "install_step2" | "install_step3"
  | "device_android" | "device_ios" | "device_windows" | "device_mac" | "device_smarttv"
  // FAQ section
  | "faq_title" | "faq_subtitle"
  | "faq_q1" | "faq_a1" | "faq_q2" | "faq_a2" | "faq_q3" | "faq_a3" 
  | "faq_q4" | "faq_a4" | "faq_q5" | "faq_a5" | "faq_q6" | "faq_a6"
  // Footer
  | "footer_rights" | "footer_privacy" | "footer_terms" | "footer_contact"
  // Chat
  | "chat_title" | "chat_placeholder" | "chat_send" | "chat_welcome"
  // Loading
  | "loading" | "please_wait";

// Define translations for all languages
export const translations: Record<LanguageCode, Record<TranslationKey, string>> = {
  en: {
    // Navigation
    home: "Home",
    channels: "Channels",
    movies: "Movies",
    pricing: "Pricing",
    reseller: "Reseller",
    installation: "Installation",
    faq: "FAQ",
    language: "Language",
    login: "Login",
    signup: "Sign Up",
    free_trial: "Free Trial",
    support: "Support",
    // Hero section
    hero_title: "Premium IPTV Service",
    hero_subtitle: "Access 10,000+ channels and 40,000+ movies on any device",
    hero_cta: "Get Started",
    hero_secondary_cta: "Learn More",
    // Features section
    features_title: "Why Choose YassinIPTV?",
    channels_count: "10,000+ Channels",
    movies_count: "40,000+ Movies & Series",
    devices_support: "All Devices Supported",
    countries: "Worldwide Coverage",
    // Channels section
    channels_title: "Explore Our Channels",
    channels_subtitle: "Access premium channels from around the world",
    channels_cta: "View All Channels",
    // Movies section
    movies_title: "Latest Movies & Series",
    movies_subtitle: "Watch the newest releases and timeless classics",
    movies_cta: "Explore Library",
    // Pricing section
    pricing_title: "Simple, Transparent Pricing",
    pricing_subtitle: "Choose the plan that works for you",
    basic_plan: "Basic",
    standard_plan: "Standard",
    premium_plan: "Premium",
    most_popular: "Most Popular",
    month: "month",
    devices: "Devices",
    channel_count: "Channels",
    movie_count: "Movies",
    support_247: "24/7 Support",
    hd_quality: "HD Quality",
    ultra_hd: "Ultra HD (4K)",
    select_plan: "Select Plan",
    includes_vat: "Includes VAT",
    buy_now: "Buy Now",
    // Pricing plans
    monthly: "Monthly",
    quarterly: "Quarterly",
    yearly: "Yearly",
    // Reseller section
    reseller_title: "Become a Reseller",
    reseller_subtitle: "Start your own IPTV business with our reseller program",
    reseller_cta: "Join Now",
    reseller_feature1: "Competitive Pricing",
    reseller_feature2: "Admin Panel Access",
    reseller_feature3: "Technical Support",
    // Installation section
    install_title: "Easy Installation",
    install_subtitle: "Get started in minutes with our simple setup process",
    install_step1: "Subscribe to a plan",
    install_step2: "Download our app",
    install_step3: "Enter your credentials and enjoy",
    device_android: "Android",
    device_ios: "iOS",
    device_windows: "Windows",
    device_mac: "Mac",
    device_smarttv: "Smart TV",
    // FAQ section
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Find answers to common questions about our service",
    faq_q1: "What is IPTV?",
    faq_a1: "IPTV (Internet Protocol Television) delivers television content over internet networks rather than traditional formats like satellite or cable.",
    faq_q2: "What devices are supported?",
    faq_a2: "We support all major devices including Smart TVs, Android, iOS, Windows, Mac, Firestick, Roku, and more.",
    faq_q3: "How many devices can I use simultaneously?",
    faq_a3: "Depending on your subscription plan, you can use 1 to 4 devices simultaneously.",
    faq_q4: "Do you offer a free trial?",
    faq_a4: "Yes, we offer a 24-hour free trial so you can test our service before committing.",
    faq_q5: "How do I pay for the service?",
    faq_a5: "We accept various payment methods including credit cards, PayPal, and cryptocurrency for your convenience.",
    faq_q6: "What if I'm not satisfied with the service?",
    faq_a6: "We offer a 7-day money-back guarantee if you're not completely satisfied with our service.",
    // Footer
    footer_rights: "All Rights Reserved",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_contact: "Contact Us",
    // Chat
    chat_title: "Chat with Support",
    chat_placeholder: "Type your message...",
    chat_send: "Send",
    chat_welcome: "Hello! How can I help you today?",
    // Loading
    loading: "Loading",
    please_wait: "Please wait..."
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
    language: "Langue",
    login: "Connexion",
    signup: "S'inscrire",
    free_trial: "Essai Gratuit",
    support: "Support",
    // Hero section
    hero_title: "Service IPTV Premium",
    hero_subtitle: "Accédez à plus de 10 000 chaînes et 40 000 films sur n'importe quel appareil",
    hero_cta: "Commencer",
    hero_secondary_cta: "En Savoir Plus",
    // Features section
    features_title: "Pourquoi Choisir YassinIPTV?",
    channels_count: "10 000+ Chaînes",
    movies_count: "40 000+ Films & Séries",
    devices_support: "Tous Appareils Supportés",
    countries: "Couverture Mondiale",
    // Channels section
    channels_title: "Explorez Nos Chaînes",
    channels_subtitle: "Accédez aux chaînes premium du monde entier",
    channels_cta: "Voir Toutes Les Chaînes",
    // Movies section
    movies_title: "Films & Séries Récents",
    movies_subtitle: "Regardez les dernières sorties et les classiques intemporels",
    movies_cta: "Explorer la Bibliothèque",
    // Pricing section
    pricing_title: "Tarification Simple et Transparente",
    pricing_subtitle: "Choisissez le forfait qui vous convient",
    basic_plan: "Basique",
    standard_plan: "Standard",
    premium_plan: "Premium",
    most_popular: "Le Plus Populaire",
    month: "mois",
    devices: "Appareils",
    channel_count: "Chaînes",
    movie_count: "Films",
    support_247: "Support 24/7",
    hd_quality: "Qualité HD",
    ultra_hd: "Ultra HD (4K)",
    select_plan: "Sélectionner",
    includes_vat: "TVA incluse",
    buy_now: "Acheter",
    // Pricing plans
    monthly: "Mensuel",
    quarterly: "Trimestriel",
    yearly: "Annuel",
    // Reseller section
    reseller_title: "Devenez Revendeur",
    reseller_subtitle: "Lancez votre propre entreprise IPTV avec notre programme de revendeur",
    reseller_cta: "Rejoindre",
    reseller_feature1: "Prix Compétitifs",
    reseller_feature2: "Accès au Panneau Admin",
    reseller_feature3: "Support Technique",
    // Installation section
    install_title: "Installation Facile",
    install_subtitle: "Commencez en quelques minutes avec notre processus d'installation simple",
    install_step1: "Abonnez-vous à un forfait",
    install_step2: "Téléchargez notre application",
    install_step3: "Entrez vos identifiants et profitez",
    device_android: "Android",
    device_ios: "iOS",
    device_windows: "Windows",
    device_mac: "Mac",
    device_smarttv: "Smart TV",
    // FAQ section
    faq_title: "Questions Fréquemment Posées",
    faq_subtitle: "Trouvez des réponses aux questions courantes sur notre service",
    faq_q1: "Qu'est-ce que l'IPTV?",
    faq_a1: "L'IPTV (Télévision sur Protocole Internet) diffuse du contenu télévisuel via des réseaux internet plutôt que par des formats traditionnels comme le satellite ou le câble.",
    faq_q2: "Quels appareils sont pris en charge?",
    faq_a2: "Nous prenons en charge tous les principaux appareils, y compris Smart TV, Android, iOS, Windows, Mac, Firestick, Roku et plus encore.",
    faq_q3: "Combien d'appareils puis-je utiliser simultanément?",
    faq_a3: "Selon votre forfait d'abonnement, vous pouvez utiliser de 1 à 4 appareils simultanément.",
    faq_q4: "Proposez-vous un essai gratuit?",
    faq_a4: "Oui, nous proposons un essai gratuit de 24 heures pour que vous puissiez tester notre service avant de vous engager.",
    faq_q5: "Comment puis-je payer le service?",
    faq_a5: "Nous acceptons différentes méthodes de paiement, notamment les cartes de crédit, PayPal et les cryptomonnaies pour votre commodité.",
    faq_q6: "Que se passe-t-il si je ne suis pas satisfait du service?",
    faq_a6: "Nous offrons une garantie de remboursement de 7 jours si vous n'êtes pas entièrement satisfait de notre service.",
    // Footer
    footer_rights: "Tous Droits Réservés",
    footer_privacy: "Politique de Confidentialité",
    footer_terms: "Conditions d'Utilisation",
    footer_contact: "Contactez-nous",
    // Chat
    chat_title: "Discuter avec le Support",
    chat_placeholder: "Tapez votre message...",
    chat_send: "Envoyer",
    chat_welcome: "Bonjour! Comment puis-je vous aider aujourd'hui?",
    // Loading
    loading: "Chargement",
    please_wait: "Veuillez patienter..."
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    channels: "القنوات",
    movies: "الأفلام",
    pricing: "الأسعار",
    reseller: "الموزعين",
    installation: "التثبيت",
    faq: "الأسئلة الشائعة",
    language: "اللغة",
    login: "تسجيل الدخول",
    signup: "إنشاء حساب",
    free_trial: "تجربة مجانية",
    support: "الدعم",
    // Hero section
    hero_title: "خدمة IPTV متميزة",
    hero_subtitle: "الوصول إلى أكثر من 10,000 قناة و 40,000 فيلم على أي جهاز",
    hero_cta: "ابدأ الآن",
    hero_secondary_cta: "تعرف على المزيد",
    // Features section
    features_title: "لماذا تختار YassinIPTV؟",
    channels_count: "أكثر من 10,000 قناة",
    movies_count: "أكثر من 40,000 فيلم ومسلسل",
    devices_support: "دعم جميع الأجهزة",
    countries: "تغطية عالمية",
    // Channels section
    channels_title: "استكشف قنواتنا",
    channels_subtitle: "الوصول إلى القنوات المتميزة من جميع أنحاء العالم",
    channels_cta: "عرض جميع القنوات",
    // Movies section
    movies_title: "أحدث الأفلام والمسلسلات",
    movies_subtitle: "شاهد أحدث الإصدارات والكلاسيكيات الخالدة",
    movies_cta: "استكشاف المكتبة",
    // Pricing section
    pricing_title: "أسعار بسيطة وشفافة",
    pricing_subtitle: "اختر الخطة التي تناسبك",
    basic_plan: "أساسي",
    standard_plan: "قياسي",
    premium_plan: "متميز",
    most_popular: "الأكثر شعبية",
    month: "شهر",
    devices: "الأجهزة",
    channel_count: "القنوات",
    movie_count: "الأفلام",
    support_247: "دعم على مدار الساعة",
    hd_quality: "جودة عالية الدقة",
    ultra_hd: "جودة فائقة الدقة (4K)",
    select_plan: "اختر الخطة",
    includes_vat: "شامل ضريبة القيمة المضافة",
    buy_now: "اشتر الآن",
    // Pricing plans
    monthly: "شهري",
    quarterly: "ربع سنوي",
    yearly: "سنوي",
    // Reseller section
    reseller_title: "كن موزعاً",
    reseller_subtitle: "ابدأ عملك الخاص في IPTV مع برنامج الموزعين",
    reseller_cta: "انضم الآن",
    reseller_feature1: "أسعار تنافسية",
    reseller_feature2: "الوصول إلى لوحة الإدارة",
    reseller_feature3: "دعم فني",
    // Installation section
    install_title: "تثبيت سهل",
    install_subtitle: "ابدأ في دقائق مع عملية الإعداد البسيطة",
    install_step1: "اشترك في خطة",
    install_step2: "قم بتنزيل تطبيقنا",
    install_step3: "أدخل بيانات اعتمادك واستمتع",
    device_android: "أندرويد",
    device_ios: "آي أو إس",
    device_windows: "ويندوز",
    device_mac: "ماك",
    device_smarttv: "التلفاز الذكي",
    // FAQ section
    faq_title: "الأسئلة الشائعة",
    faq_subtitle: "ابحث عن إجابات للأسئلة الشائعة حول خدمتنا",
    faq_q1: "ما هو IPTV؟",
    faq_a1: "IPTV (تلفزيون بروتوكول الإنترنت) يقدم محتوى تلفزيونياً عبر شبكات الإنترنت بدلاً من التنسيقات التقليدية مثل الأقمار الصناعية أو الكابل.",
    faq_q2: "ما هي الأجهزة المدعومة؟",
    faq_a2: "نحن ندعم جميع الأجهزة الرئيسية بما في ذلك أجهزة التلفزيون الذكية وأندرويد وآي أو إس وويندوز وماك وفايرستيك وروكو والمزيد.",
    faq_q3: "كم عدد الأجهزة التي يمكنني استخدامها في وقت واحد؟",
    faq_a3: "اعتماداً على خطة الاشتراك الخاصة بك، يمكنك استخدام من 1 إلى 4 أجهزة في نفس الوقت.",
    faq_q4: "هل تقدمون تجربة مجانية؟",
    faq_a4: "نعم، نقدم تجربة مجانية لمدة 24 ساعة حتى تتمكن من اختبار خدمتنا قبل الالتزام.",
    faq_q5: "كيف يمكنني الدفع مقابل الخدمة؟",
    faq_a5: "نحن نقبل وسائل دفع متنوعة بما في ذلك بطاقات الائتمان وباي بال والعملات المشفرة لراحتك.",
    faq_q6: "ماذا لو لم أكن راضياً عن الخدمة؟",
    faq_a6: "نحن نقدم ضمان استرداد الأموال لمدة 7 أيام إذا لم تكن راضياً تماماً عن خدمتنا.",
    // Footer
    footer_rights: "جميع الحقوق محفوظة",
    footer_privacy: "سياسة الخصوصية",
    footer_terms: "شروط الخدمة",
    footer_contact: "اتصل بنا",
    // Chat
    chat_title: "دردشة مع الدعم",
    chat_placeholder: "اكتب رسالتك...",
    chat_send: "إرسال",
    chat_welcome: "مرحباً! كيف يمكنني مساعدتك اليوم؟",
    // Loading
    loading: "جاري التحميل",
    please_wait: "يرجى الانتظار..."
  },
  es: {
    // Navigation
    home: "Inicio",
    channels: "Canales",
    movies: "Películas",
    pricing: "Precios",
    reseller: "Distribuidor",
    installation: "Instalación",
    faq: "Preguntas Frecuentes",
    language: "Idioma",
    login: "Iniciar Sesión",
    signup: "Registrarse",
    free_trial: "Prueba Gratuita",
    support: "Soporte",
    // Hero section
    hero_title: "Servicio IPTV Premium",
    hero_subtitle: "Accede a más de 10.000 canales y 40.000 películas en cualquier dispositivo",
    hero_cta: "Comenzar",
    hero_secondary_cta: "Saber más",
    // Features section
    features_title: "¿Por qué elegir YassinIPTV?",
    channels_count: "Más de 10.000 canales",
    movies_count: "Más de 40.000 películas y series",
    devices_support: "Compatible con todos los dispositivos",
    countries: "Cobertura mundial",
    // Channels section
    channels_title: "Explora Nuestros Canales",
    channels_subtitle: "Accede a canales premium de todo el mundo",
    channels_cta: "Ver todos los canales",
    // Movies section
    movies_title: "Últimas Películas y Series",
    movies_subtitle: "Mira los últimos estrenos y clásicos de siempre",
    movies_cta: "Explorar Biblioteca",
    // Pricing section
    pricing_title: "Precios Simples y Transparentes",
    pricing_subtitle: "Elige el plan que funcione para ti",
    basic_plan: "Básico",
    standard_plan: "Estándar",
    premium_plan: "Premium",
    most_popular: "Más Popular",
    month: "mes",
    devices: "Dispositivos",
    channel_count: "Canales",
    movie_count: "Películas",
    support_247: "Soporte 24/7",
    hd_quality: "Calidad HD",
    ultra_hd: "Ultra HD (4K)",
    select_plan: "Seleccionar Plan",
    includes_vat: "IVA incluido",
    buy_now: "Comprar Ahora",
    // Pricing plans
    monthly: "Mensual",
    quarterly: "Trimestral",
    yearly: "Anual",
    // Reseller section
    reseller_title: "Conviértete en Distribuidor",
    reseller_subtitle: "Inicia tu propio negocio IPTV con nuestro programa de distribución",
    reseller_cta: "Únete Ahora",
    reseller_feature1: "Precios Competitivos",
    reseller_feature2: "Acceso al Panel de Administración",
    reseller_feature3: "Soporte Técnico",
    // Installation section
    install_title: "Instalación Fácil",
    install_subtitle: "Comienza en minutos con nuestro sencillo proceso de configuración",
    install_step1: "Suscríbete a un plan",
    install_step2: "Descarga nuestra aplicación",
    install_step3: "Ingresa tus credenciales y disfruta",
    device_android: "Android",
    device_ios: "iOS",
    device_windows: "Windows",
    device_mac: "Mac",
    device_smarttv: "Smart TV",
    // FAQ section
    faq_title: "Preguntas Frecuentes",
    faq_subtitle: "Encuentra respuestas a preguntas comunes sobre nuestro servicio",
    faq_q1: "¿Qué es IPTV?",
    faq_a1: "IPTV (Televisión por Protocolo de Internet) ofrece contenido televisivo a través de redes de internet en lugar de formatos tradicionales como satélite o cable.",
    faq_q2: "¿Qué dispositivos son compatibles?",
    faq_a2: "Soportamos todos los dispositivos principales incluyendo Smart TVs, Android, iOS, Windows, Mac, Firestick, Roku y más.",
    faq_q3: "¿Cuántos dispositivos puedo usar simultáneamente?",
    faq_a3: "Dependiendo de tu plan de suscripción, puedes usar de 1 a 4 dispositivos simultáneamente.",
    faq_q4: "¿Ofrecen una prueba gratuita?",
    faq_a4: "Sí, ofrecemos una prueba gratuita de 24 horas para que puedas probar nuestro servicio antes de comprometerte.",
    faq_q5: "¿Cómo puedo pagar por el servicio?",
    faq_a5: "Aceptamos varios métodos de pago, incluyendo tarjetas de crédito, PayPal y criptomonedas para tu conveniencia.",
    faq_q6: "¿Qué pasa si no estoy satisfecho con el servicio?",
    faq_a6: "Ofrecemos una garantía de devolución de dinero de 7 días si no estás completamente satisfecho con nuestro servicio.",
    // Footer
    footer_rights: "Todos los Derechos Reservados",
    footer_privacy: "Política de Privacidad",
    footer_terms: "Términos de Servicio",
    footer_contact: "Contáctanos",
    // Chat
    chat_title: "Chat con Soporte",
    chat_placeholder: "Escribe tu mensaje...",
    chat_send: "Enviar",
    chat_welcome: "¡Hola! ¿Cómo puedo ayudarte hoy?",
    // Loading
    loading: "Cargando",
    please_wait: "Por favor espera..."
  }
};

// Add the getTranslation function
export function getTranslation(language: LanguageCode, key: TranslationKey): string {
  try {
    return translations[language][key] || key;
  } catch (error) {
    console.error(`Translation not found for key: ${key} in language: ${language}`);
    return key;
  }
}
