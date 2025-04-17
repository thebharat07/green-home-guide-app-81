
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const SettingsPage = () => {
  const { language, setLanguage, t, availableLanguages } = useLanguage();

  const languageOptions = [
    { value: 'en', label: 'English', flag: '🇬🇧' },
    { value: 'es', label: 'Español', flag: '🇪🇸' },
    { value: 'fr', label: 'Français', flag: '🇫🇷' },
  ];

  return (
    <div className="min-h-screen pb-16">
      <Header />
      
      <main className="container px-4 py-6">
        <div className="mb-6">
          <Link to="/" className="flex items-center text-gray-600 hover:text-primary transition-colors">
            <ArrowLeft size={18} className="mr-1" />
            <span>{t.common.back}</span>
          </Link>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-primary mb-2">{t.navigation.settings}</h1>
          <p className="text-gray-600">Customize your app experience</p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-md p-5 mb-6">
          <h2 className="text-xl font-medium mb-4">Language</h2>
          
          <RadioGroup
            value={language}
            onValueChange={(value) => setLanguage(value as any)}
            className="space-y-2"
          >
            {languageOptions.map((option) => (
              <div
                key={option.value}
                className="flex items-center space-x-2 rounded-lg p-2 cursor-pointer hover:bg-gray-50"
              >
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value} className="flex items-center gap-2 cursor-pointer">
                  <span className="text-xl">{option.flag}</span>
                  <span>{option.label}</span>
                </Label>
                {language === option.value && (
                  <Check className="ml-auto text-primary" size={18} />
                )}
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5">
          <h2 className="text-xl font-medium mb-4">About</h2>
          <p className="text-gray-600 mb-3">
            This app was designed to help you learn about proper waste management techniques and become more environmentally conscious.
          </p>
          <p className="text-xs text-gray-500">Version 1.0.0</p>
        </div>
      </main>
      
      <Navigation />
    </div>
  );
};

export default SettingsPage;
