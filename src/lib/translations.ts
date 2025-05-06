
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
  | 'reseller'
  | 'installation'
  | 'faq'
  | 'channels_showcase_title'
  | 'channels_showcase_description'
  | 'worldwide_channels'
  | 'movie_showcase_title'
  | 'movie_showcase_description'
  | 'all_genres'
  | 'chat_welcome'
  | 'chat_title'
  | 'chat_placeholder'
  | 'customer_feedback'
  | 'feedback_description'
  | 'customers_say'
  | 'share_experience'
  | 'thank_you'
  | 'feedback_submitted'
  | 'name'
  | 'email'
  | 'rating'
  | 'your_experience'
  | 'submit_feedback';

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
  reseller: "Reseller",
  installation: "Installation",
  faq: "FAQ",
  channels_showcase_title: "Thousands of Live Channels",
  channels_showcase_description: "Enjoy premium TV channels from around the world",
  worldwide_channels: "Worldwide Channels",
  movie_showcase_title: "Extensive Movie Collection",
  movie_showcase_description: "Stream the latest movies and classics from our vast library",
  all_genres: "All Genres",
  chat_welcome: "Welcome to our support chat",
  chat_title: "Customer Support",
  chat_placeholder: "Type your message here...",
  customer_feedback: "Customer Feedback",
  feedback_description: "Join thousands of satisfied customers who love YassinIPTV. Share your experience or read what others have to say.",
  customers_say: "What Our Customers Say",
  share_experience: "Share Your Experience",
  thank_you: "Thank You!",
  feedback_submitted: "Your feedback has been submitted successfully.",
  name: "Name",
  email: "Email",
  rating: "Rating",
  your_experience: "Your Experience",
  submit_feedback: "Submit Feedback"
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
  faq_a5: "Oui, vous pouvez annuler votre abonnement à tout moment. Pas de contrats à long terme ni de frais cachés.",
  faq_q6: "Qu'est-ce qui distingue YassinIPTV des autres services?",
  faq_a6: "YassinIPTV offre des chaînes de qualité premium, des flux fiables, un excellent service client et une compatibilité multi-appareils, le tout à un prix abordable.",
  faq_q7: "Combien d'appareils puis-je utiliser simultanément?",
  faq_a7: "Selon votre forfait, vous pouvez diffuser sur 1 à 4 appareils simultanément. Consultez les détails de votre forfait pour connaître le nombre exact autorisé.",
  faq_q8: "Offrez-vous un essai gratuit?",
  faq_a8: "Oui, nous offrons un essai gratuit de 24 heures pour que vous puissiez tester notre service avant de vous abonner.",
  free_trial: "Essai gratuit",
  buy_now: "Acheter maintenant",
  home: "Accueil",
  pricing: "Tarifs",
  reseller: "Revendeur",
  installation: "Installation",
  faq: "FAQ",
  channels_showcase_title: "Des milliers de chaînes en direct",
  channels_showcase_description: "Profitez des chaînes TV premium du monde entier",
  worldwide_channels: "Chaînes du monde entier",
  movie_showcase_title: "Collection de films extensive",
  movie_showcase_description: "Diffusez les derniers films et les classiques de notre vaste bibliothèque",
  all_genres: "Tous les genres",
  chat_welcome: "Bienvenue sur notre chat de support",
  chat_title: "Support client",
  chat_placeholder: "Tapez votre message ici...",
  customer_feedback: "Avis clients",
  feedback_description: "Rejoignez des milliers de clients satisfaits qui adorent YassinIPTV. Partagez votre expérience ou lisez ce que les autres ont à dire.",
  customers_say: "Ce que disent nos clients",
  share_experience: "Partagez votre expérience",
  thank_you: "Merci !",
  feedback_submitted: "Votre avis a été soumis avec succès.",
  name: "Nom",
  email: "Email",
  rating: "Évaluation",
  your_experience: "Votre expérience",
  submit_feedback: "Soumettre l'avis"
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
  faq_a5: "نعم، يمكنك إلغاء اشتراكك في أي وقت. لا توجد عقود طويلة الأمد أو رسوم خفية.",
  faq_q6: "ما الذي يميز YassinIPTV عن الخدمات الأخرى؟",
  faq_a6: "يوفر YassinIPTV قنوات ذات جودة متميزة، وبث موثوق، وخدمة عملاء ممتازة، وتوافق مع أجهزة متعددة، كل ذلك بسعر معقول.",
  faq_q7: "كم عدد الأجهزة التي يمكنني استخدامها في وقت واحد؟",
  faq_a7: "اعتمادًا على خطتك، يمكنك البث على 1 إلى 4 أجهزة في وقت واحد. تحقق من تفاصيل خطتك لمعرفة العدد المسموح به بالضبط.",
  faq_q8: "هل تقدمون تجربة مجانية؟",
  faq_a8: "نعم، نقدم تجربة مجانية لمدة 24 ساعة حتى تتمكن من تجربة خدمتنا قبل الاشتراك.",
  free_trial: "ابدأ التجربة المجانية",
  buy_now: "اشتر الآن",
  home: "الرئيسية",
  pricing: "التسعير",
  reseller: "موزع",
  installation: "التثبيت",
  faq: "الأسئلة الشائعة",
  channels_showcase_title: "آلاف القنوات المباشرة",
  channels_showcase_description: "استمتع بقنوات تلفزيونية متميزة من جميع أنحاء العالم",
  worldwide_channels: "قنوات عالمية",
  movie_showcase_title: "مجموعة أفلام واسعة",
  movie_showcase_description: "شاهد أحدث الأفلام والكلاسيكيات من مكتبتنا الواسعة",
  all_genres: "كل الأنواع",
  chat_welcome: "مرحبًا بكم في دردشة الدعم الخاصة بنا",
  chat_title: "دعم العملاء",
  chat_placeholder: "اكتب رسالتك هنا...",
  customer_feedback: "آراء العملاء",
  feedback_description: "انضم إلى آلاف العملاء الراضين الذين يحبون YassinIPTV. شارك تجربتك أو اقرأ ما يقوله الآخرون.",
  customers_say: "ما يقوله عملاؤنا",
  share_experience: "شارك تجربتك",
  thank_you: "شكرا لك!",
  feedback_submitted: "تم إرسال رأيك بنجاح.",
  name: "الاسم",
  email: "البريد الإلكتروني",
  rating: "التقييم",
  your_experience: "تجربتك",
  submit_feedback: "إرسال التعليق"
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
  reseller: "Revendedor",
  installation: "Instalación",
  faq: "Preguntas frecuentes",
  channels_showcase_title: "Miles de canales en vivo",
  channels_showcase_description: "Disfrute de canales premium de todo el mundo",
  worldwide_channels: "Canales mundiales",
  movie_showcase_title: "Extensa colección de películas",
  movie_showcase_description: "Transmita las últimas películas y clásicos de nuestra amplia biblioteca",
  all_genres: "Todos los géneros",
  chat_welcome: "Bienvenido a nuestro chat de soporte",
  chat_title: "Atención al cliente",
  chat_placeholder: "Escriba su mensaje aquí...",
  customer_feedback: "Opiniones de clientes",
  feedback_description: "Únase a miles de clientes satisfechos que aman YassinIPTV. Comparta su experiencia o lea lo que otros tienen que decir.",
  customers_say: "Lo que dicen nuestros clientes",
  share_experience: "Comparta su experiencia",
  thank_you: "¡Gracias!",
  feedback_submitted: "Su opinión ha sido enviada con éxito.",
  name: "Nombre",
  email: "Correo electrónico",
  rating: "Calificación",
  your_experience: "Su experiencia",
  submit_feedback: "Enviar opinión"
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
