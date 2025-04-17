import React, { createContext, useContext, useState, useEffect } from 'react';

// Update the Language type
export type Language = 'en' | 'te' | 'hi';

// Update translations for Telugu and Hindi
const translations: Record<Language, Translations> = {
  en: {
    home: {
      title: 'Waste Management Guide',
      subtitle: 'Learn how to properly manage household waste',
      categories: {
        compost: 'Composting',
        recycle: 'Recycling',
        hazardous: 'Hazardous Waste',
        general: 'General Waste',
        organic: 'Organic Waste'
      }
    },
    navigation: {
      home: 'Home',
      compost: 'Composting',
      recycle: 'Recycling',
      quiz: 'Test Your Knowledge',
      settings: 'Settings'
    },
    common: {
      learnMore: 'Learn More',
      back: 'Back',
      next: 'Next',
      start: 'Start',
      finish: 'Finish'
    },
    languages: {
      en: 'English',
      es: 'Spanish',
      fr: 'French'
    }
  },
  te: {
    home: {
      title: 'వ్యర్థ నిర్వహణ మార్గదర్శిका',
      subtitle: 'ఇంటి వ్యర్థాలను సరిగ్గా ఎలా నిర్వహించాలో తెలుసుకోండి',
      categories: {
        compost: 'కంపోస్టింగ్',
        recycle: 'రీసైక్లింగ్',
        hazardous: 'ప్రమాదకర వ్యర్థం',
        general: 'సాధారణ వ్యర్థం',
        organic: 'సేంద్రిয వ్యర్థం'
      }
    },
    navigation: {
      home: 'హోం',
      compost: 'కంపోస్టింగ్',
      recycle: 'రీసైక్లింగ్',
      quiz: 'మీ జ్ఞానాన్ని పరీక్షించుకోండి',
      settings: 'సెట్టింగ్స్'
    },
    common: {
      learnMore: 'మరింత తెలుసుకోండి',
      back: 'వెనక్కు',
      next: 'తర్వాత',
      start: 'ప్రారంభం',
      finish: 'ముగింపు'
    },
    languages: {
      en: 'ఇంగ్లిష్',
      te: 'తెలుగు',
      hi: 'హిందీ'
    }
  },
  hi: {
    home: {
      title: 'कचरा प्रबंधन गाइड',
      subtitle: 'घरेलू कचरे को सही तरीके से कैसे प्रबंधित करें',
      categories: {
        compost: 'कंपोस्टिंग',
        recycle: 'रीसाइक्लिंग',
        hazardous: 'खतरनाक कचरा',
        general: 'सामान्य कचरा',
        organic: 'जैविक कचरा'
      }
    },
    navigation: {
      home: 'होम',
      compost: 'कंपोस्टिंग',
      recycle: 'रीसाइक्लिंग',
      quiz: 'अपना ज्ञान परखें',
      settings: 'सेटिंग्स'
    },
    common: {
      learnMore: 'और जानें',
      back: 'वापस',
      next: 'अगला',
      start: 'शुरू करें',
      finish: 'समाप्त करें'
    },
    languages: {
      en: 'अंग्रेजी',
      te: 'तेलुगु',
      hi: 'हिंदी'
    }
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  availableLanguages: Language[];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [t, setTranslations] = useState<Translations>(translations.en);

  const availableLanguages: Language[] = ['en', 'te', 'hi'];

  useEffect(() => {
    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && availableLanguages.includes(savedLanguage)) {
      setLanguage(savedLanguage);
      setTranslations(translations[savedLanguage]);
    }
  }, []);

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('preferred-language', language);
    setTranslations(translations[language]);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, availableLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
