import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define supported languages
export type Language = "en" | "ar";

// Interface for the translation content
export interface Translations {
  [key: string]: string | Translations;
}

// Language context props
interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextProps>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
  isRTL: false,
});

// Translation data
const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.howWeHelp": "How We Help",
    "nav.services": "Services",
    "nav.about": "About 24/7",
    "nav.contact": "Contact",
    "nav.bookNow": "Book Now",

    // Common
    "common.languageSwitch": "العربية",

    // Home Page
    "home.hero.title": "Experience",
    "home.hero.subtitle": "Luxury",
    "home.hero.description":
      "Elite concierge services for the most discerning clients.",
    "home.hero.cta": "Reserve Your Experience",
    "home.hero.verified": "Verified Service",
    "home.hero.trusted": "Trusted by elite travelers",

    "home.services.title": "Exceptional Services",
    "home.services.subtitle":
      "Crafted experiences for the most discerning travelers",

    "home.cta.title": "Experience Luxury Like Never Before",
    "home.cta.description":
      "Reserve your personal concierge service and unlock the most exclusive experiences available.",
    "home.cta.button": "Book Your Experience",
    "home.cta.limited":
      "Limited availability. Reservations subject to confirmation.",

    // How We Help Page
    "howWeHelp.hero.title": "How We Help",
    "howWeHelp.hero.description":
      "Our approach combines personalized attention, cultural understanding, and exclusive access to create extraordinary experiences.",

    "howWeHelp.difference.title": "The 24/7 Difference",
    "howWeHelp.difference.subtitle":
      "What sets us apart from standard concierge services",

    // Services Page
    "services.hero.title": "Our Services",
    "services.hero.description":
      "Bespoke luxury concierge services designed for the most discerning clients",

    "services.bespoke.title": "Bespoke Services",
    "services.bespoke.description":
      "Can't find what you're looking for? Our concierge specialists excel at fulfilling unique requests.",
    "services.bespoke.button": "Make a Custom Request",

    // About Page
    "about.hero.title": "About 24/7",
    "about.hero.description":
      "The story behind the most trusted luxury concierge service",

    "about.story.title": "Our Story",
    "about.values.title": "Our Values",
    "about.values.subtitle": "The principles that guide everything we do",
    "about.team.title": "Our Team",
    "about.team.subtitle":
      "Meet the expert concierges who make the extraordinary possible",

    // Contact Page
    "contact.hero.title": "Contact Us",
    "contact.hero.description":
      "Reach out to start planning your extraordinary experience",

    "contact.info.title": "Get in Touch",
    "contact.form.title": "Send a Message",
    "contact.form.success": "Message Sent",
    "contact.form.successDesc":
      "Thank you for reaching out. A 24/7 concierge representative will contact you shortly.",
    "contact.form.button": "Send Message",
    "contact.form.privacy":
      "We value your privacy and will never share your information.",

    "contact.location.title": "Our Location",
    "contact.location.subtitle":
      "Located in the heart of Moscow's business district",

    // Booking Form
    "booking.title": "Reserve Your Concierge",
    "booking.success.title": "Booking Confirmed",
    "booking.success.description":
      "Thank you! Concierge {name} has been assigned to you.",
    "booking.success.notification":
      "You'll receive confirmation details via text message shortly.",
    "booking.button": "Request Concierge",
    "booking.terms": "By booking, you agree to our terms of service",
  },

  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.howWeHelp": "كيف نساعد",
    "nav.services": "الخدمات",
    "nav.about": "عن 24/7",
    "nav.contact": "اتصل بنا",
    "nav.bookNow": "احجز الآن",

    // Common
    "common.languageSwitch": "English",

    // Home Page
    "home.hero.title": "تجربة",
    "home.hero.subtitle": "الفخامة",
    "home.hero.description": "خدمات الكونسيرج النخبوية للعملاء الأكثر تميزًا.",
    "home.hero.cta": "احجز تجربتك",
    "home.hero.verified": "خدمة موثوقة",
    "home.hero.trusted": "يثق بها المسافرون النخبة",

    "home.services.title": "خدمات استثنائية",
    "home.services.subtitle": "تجارب مصممة للمسافرين الأكثر تميزًا",

    "home.cta.title": "استمتع بالفخامة كما لم تختبرها من قبل",
    "home.cta.description":
      "احجز خدمة الكونسيرج الشخصية واستمتع بأكثر التجارب حصرية.",
    "home.cta.button": "احجز تجربتك",
    "home.cta.limited": "الأماكن محدودة. الحجوزات خاضعة للتأكيد.",

    // How We Help Page
    "howWeHelp.hero.title": "كيف نساعد",
    "howWeHelp.hero.description":
      "نهجنا يجمع بين الاهتمام الشخصي، والفهم الثقافي، والوصول الحصري لخلق تجارب استثنائية.",

    "howWeHelp.difference.title": "ما يميز 24/7",
    "howWeHelp.difference.subtitle": "ما يميزنا عن خدمات الكونسيرج العادية",

    // Services Page
    "services.hero.title": "خدماتنا",
    "services.hero.description":
      "خدمات كونسيرج فاخرة مصممة خصيصًا للعملاء الأكثر تميزًا",

    "services.bespoke.title": "خدمات مخصصة",
    "services.bespoke.description":
      "لم تجد ما تبحث عنه؟ متخصصو الكونسيرج لدينا يتفوقون في تلبية الطلبات الفريدة.",
    "services.bespoke.button": "تقديم طلب مخصص",

    // About Page
    "about.hero.title": "عن 24/7",
    "about.hero.description": "القصة وراء خدمة الكونسيرج الفاخرة الأكثر ثقة",

    "about.story.title": "قصتنا",
    "about.values.title": "قيمنا",
    "about.values.subtitle": "المبادئ التي توجه كل ما نقوم به",
    "about.team.title": "فريقنا",
    "about.team.subtitle":
      "تعرف على خبراء الكونسيرج الذين يجعلون المستحيل ممكنًا",

    // Contact Page
    "contact.hero.title": "اتصل بنا",
    "contact.hero.description": "تواصل معنا لبدء تخطيط تجربتك الاستثنائية",

    "contact.info.title": "تواصل معنا",
    "contact.form.title": "أرسل رسالة",
    "contact.form.success": "تم إرسال الرسالة",
    "contact.form.successDesc":
      "شكرًا لتواصلك معنا. سيتصل بك ممثل كونسيرج 24/7 قريبًا.",
    "contact.form.button": "إرسال الرسالة",
    "contact.form.privacy": "نحن نقدر خصوصيتك ولن نشارك معلوماتك أبدًا.",

    "contact.location.title": "موقعنا",
    "contact.location.subtitle": "يقع في قلب حي الأعمال في موسكو",

    // Booking Form
    "booking.title": "احجز الكونسيرج الخاص بك",
    "booking.success.title": "تم تأكيد الحجز",
    "booking.success.description":
      "شكرًا لك! تم تعيين الكونسيرج {name} لخدمتك.",
    "booking.success.notification":
      "ستتلقى تفاصيل التأكيد عبر رسالة نصية قريبًا.",
    "booking.button": "طلب كونسيرج",
    "booking.terms": "بالحجز، أنت توافق على شروط الخدمة الخاصة بنا",
  },
};

// Language provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Get browser language or use default
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split("-")[0];
    return browserLang === "ar" ? "ar" : "en";
  };

  // Initialize from localStorage or browser language
  const getInitialLanguage = (): Language => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language;
      return savedLanguage || getBrowserLanguage();
    }
    return "en";
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage());
  const isRTL = language === "ar";

  // Set HTML attributes for RTL and language
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language, isRTL]);

  // Translation function
  const t = (key: string): string => {
    // Split the key by dots to traverse nested objects
    const keys = key.split(".");

    // Start from the current language translations
    let current: any = translations[language];

    // Traverse the keys
    for (const k of keys) {
      if (current[k] === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      current = current[k];
    }

    if (typeof current !== "string") {
      console.warn(`Translation value is not a string for key: ${key}`);
      return key;
    }

    return current;
  };

  // Handle language change
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
