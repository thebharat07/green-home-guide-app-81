
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Header from '@/components/Header';

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container px-4 py-12 flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-8xl mb-6 opacity-30">🍂</div>
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">This page has been composted!</p>
          <Button asChild>
            <Link to="/">{t.common.back} to Home</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
