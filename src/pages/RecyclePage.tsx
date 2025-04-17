
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecyclePage = () => {
  const { t } = useLanguage();

  const recyclableItems = [
    {
      title: "Paper & Cardboard",
      description: "Newspapers, magazines, cardboard boxes (flattened), office paper.",
      icon: "📰",
      color: "bg-blue-100",
    },
    {
      title: "Plastic Bottles",
      description: "Water bottles, soda bottles, milk jugs (rinse first).",
      icon: "🧴",
      color: "bg-blue-100",
    },
    {
      title: "Glass Containers",
      description: "Bottles and jars (remove caps and rinse).",
      icon: "🍶",
      color: "bg-blue-100",
    },
    {
      title: "Metal Cans",
      description: "Aluminum cans, steel cans, tin cans (rinse first).",
      icon: "🥫",
      color: "bg-blue-100",
    },
  ];

  const nonRecyclableItems = [
    {
      title: "Plastic Bags",
      description: "Take to grocery store collection points instead.",
      icon: "🛍️",
      color: "bg-red-100",
    },
    {
      title: "Styrofoam",
      description: "Most recycling programs don't accept styrofoam.",
      icon: "📦",
      color: "bg-red-100",
    },
    {
      title: "Food-Soiled Paper",
      description: "Pizza boxes with grease, paper towels, napkins.",
      icon: "🍕",
      color: "bg-red-100",
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
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
          <h1 className="text-3xl font-bold text-primary mb-2">{t.home.categories.recycle}</h1>
          <p className="text-gray-600">Learn what items can be recycled and how to prepare them properly.</p>
        </motion.div>

        <div className="mb-8">
          <h2 className="section-heading text-recyclable">Common Recyclable Items</h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {recyclableItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className={`waste-category-card ${item.color} border-l-4 border-recyclable`}>
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mb-8">
          <h2 className="section-heading text-red-500">Common Non-Recyclable Items</h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {nonRecyclableItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className={`waste-category-card ${item.color} border-l-4 border-red-500`}>
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mb-8">
          <h2 className="section-heading">Recycling Tips</h2>
          
          <div className="bg-white rounded-xl shadow-md p-5">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="bg-recyclable w-6 h-6 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="font-medium">Rinse containers</h3>
                  <p className="text-sm text-gray-600">Remove food residue to prevent contamination.</p>
                </div>
              </li>
              
              <li className="flex gap-3">
                <div className="bg-recyclable w-6 h-6 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="font-medium">Remove caps</h3>
                  <p className="text-sm text-gray-600">Most recycling facilities prefer bottles without caps.</p>
                </div>
              </li>
              
              <li className="flex gap-3">
                <div className="bg-recyclable w-6 h-6 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="font-medium">Flatten cardboard</h3>
                  <p className="text-sm text-gray-600">Break down boxes to save space.</p>
                </div>
              </li>
              
              <li className="flex gap-3">
                <div className="bg-recyclable w-6 h-6 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="font-medium">Check local guidelines</h3>
                  <p className="text-sm text-gray-600">Recycling rules vary by location. Check with your local facility.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link to="/quiz" className="inline-flex items-center text-primary hover:underline">
            <span>Test your knowledge</span>
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </main>
      
      <Navigation />
    </div>
  );
};

export default RecyclePage;
