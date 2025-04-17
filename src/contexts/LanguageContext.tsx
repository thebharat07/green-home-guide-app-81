
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define available languages
export type Language = 'en' | 'es' | 'fr';

// Define translation structure
export type Translations = {
  home: {
    title: string;
    subtitle: string;
    categories: {
      compost: string;
      recycle: string;
      hazardous: string;
      general: string;
      organic: string;
    };
  };
  navigation: {
    home: string;
    compost: string;
    recycle: string;
    quiz: string;
    settings: string;
  };
  common: {
    learnMore: string;
    back: string;
    next: string;
    start: string;
    finish: string;
  };
  languages: {
    en: string;
    es: string;
    fr: string;
  };
};

// Define available translations
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
  es: {
    home: {
      title: 'Guía de Gestión de Residuos',
      subtitle: 'Aprende cómo gestionar correctamente los residuos domésticos',
      categories: {
        compost: 'Compostaje',
        recycle: 'Reciclaje',
        hazardous: 'Residuos Peligrosos',
        general: 'Residuos Generales',
        organic: 'Residuos Orgánicos'
      }
    },
    navigation: {
      home: 'Inicio',
      compost: 'Compostaje',
      recycle: 'Reciclaje',
      quiz: 'Pon a Prueba tus Conocimientos',
      settings: 'Configuración'
    },
    common: {
      learnMore: 'Más Información',
      back: 'Atrás',
      next: 'Siguiente',
      start: 'Comenzar',
      finish: 'Finalizar'
    },
    languages: {
      en: 'Inglés',
      es: 'Español',
      fr: 'Francés'
    }
  },
  fr: {
    home: {
      title: 'Guide de Gestion des Déchets',
      subtitle: 'Apprenez à gérer correctement les déchets ménagers',
      categories: {
        compost: 'Compostage',
        recycle: 'Recyclage',
        hazardous: 'Déchets Dangereux',
        general: 'Déchets Généraux',
        organic: 'Déchets Organiques'
      }
    },
    navigation: {
      home: 'Accueil',
      compost: 'Compostage',
      recycle: 'Recyclage',
      quiz: 'Testez vos Connaissances',
      settings: 'Paramètres'
    },
    common: {
      learnMore: 'En Savoir Plus',
      back: 'Retour',
      next: 'Suivant',
      start: 'Commencer',
      finish: 'Terminer'
    },
    languages: {
      en: 'Anglais',
      es: 'Espagnol',
      fr: 'Français'
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

  const availableLanguages: Language[] = ['en', 'es', 'fr'];

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
