
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import WasteCategoryCard from '@/components/WasteCategoryCard';
import { Leaf, Recycle, AlertTriangle, Trash2, Apple } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  const { t } = useLanguage();

  const wasteCategoryItems = [
    {
      title: t.home.categories.compost,
      description: "Turn kitchen scraps and yard waste into nutrient-rich soil for your garden.",
      color: "#795548", // compost color
      icon: <Leaf size={24} />,
      path: "/compost",
    },
    {
      title: t.home.categories.recycle,
      description: "Learn which materials can be recycled and how to prepare them properly.",
      color: "#2196F3", // recyclable color
      icon: <Recycle size={24} />,
      path: "/recycle",
    },
    {
      title: t.home.categories.hazardous,
      description: "Safely dispose of chemicals, batteries, and other harmful materials.",
      color: "#F44336", // hazardous color
      icon: <AlertTriangle size={24} />,
      path: "/hazardous",
    },
    {
      title: t.home.categories.general,
      description: "What goes in your regular trash bin and how to reduce waste.",
      color: "#9E9E9E", // general color
      icon: <Trash2 size={24} />,
      path: "/general",
    },
    {
      title: t.home.categories.organic,
      description: "Handle fruit, vegetable, and other natural waste properly.",
      color: "#8BC34A", // organic color
      icon: <Apple size={24} />,
      path: "/organic",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen pb-16">
      <Header />
      
      <main className="container px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-primary mb-2">{t.home.title}</h1>
          <p className="text-gray-600">{t.home.subtitle}</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {wasteCategoryItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <WasteCategoryCard
                title={item.title}
                description={item.description}
                color={item.color}
                icon={item.icon}
                path={item.path}
              />
            </motion.div>
          ))}
        </motion.div>
      </main>
      
      <Navigation />
    </div>
  );
};

export default Index;
