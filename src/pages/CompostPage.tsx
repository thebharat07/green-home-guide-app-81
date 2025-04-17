
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompostPage = () => {
  const { t } = useLanguage();

  const compostItems = [
    {
      title: "Fruit & Vegetable Scraps",
      description: "Apple cores, banana peels, carrot tops, etc.",
      icon: "🍎",
    },
    {
      title: "Coffee Grounds & Filters",
      description: "Used coffee grounds add nitrogen to your compost.",
      icon: "☕",
    },
    {
      title: "Eggshells",
      description: "Crush them to add calcium to your compost.",
      icon: "🥚",
    },
    {
      title: "Yard Trimmings",
      description: "Grass clippings, leaves, small branches.",
      icon: "🍃",
    },
    {
      title: "Nutshells",
      description: "Except walnut shells, which can be toxic to plants.",
      icon: "🌰",
    },
    {
      title: "Paper & Cardboard",
      description: "Tear into small pieces first.",
      icon: "📄",
    }
  ];

  const nonCompostItems = [
    {
      title: "Meat & Dairy",
      description: "Attracts pests and causes odor issues.",
      icon: "🍖",
    },
    {
      title: "Oils & Fats",
      description: "Slows decomposition and attracts pests.",
      icon: "🍳",
    },
    {
      title: "Pet Waste",
      description: "Can contain harmful pathogens.",
      icon: "🐕",
    }
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
          <h1 className="text-3xl font-bold text-primary mb-2">{t.home.categories.compost}</h1>
          <p className="text-gray-600">Learn what items can be composted and how to maintain your compost pile.</p>
        </motion.div>

        <div className="mb-8">
          <h2 className="section-heading text-compost">What to Compost</h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {compostItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="waste-category-card">
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
          <h2 className="section-heading text-red-500">What NOT to Compost</h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {nonCompostItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="waste-category-card border-l-4 border-red-500">
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
          <h2 className="section-heading">Composting Steps</h2>
          
          <div className="bg-white rounded-xl shadow-md p-5">
            <ol className="space-y-4">
              <li className="flex gap-3">
                <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Choose a location</h3>
                  <p className="text-sm text-gray-600">Find a dry, shady spot near a water source.</p>
                </div>
              </li>
              
              <li className="flex gap-3">
                <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-medium">Layer your materials</h3>
                  <p className="text-sm text-gray-600">Alternate between green materials (food scraps, grass) and brown materials (leaves, paper).</p>
                </div>
              </li>
              
              <li className="flex gap-3">
                <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-medium">Water occasionally</h3>
                  <p className="text-sm text-gray-600">Keep the pile as moist as a wrung-out sponge.</p>
                </div>
              </li>
              
              <li className="flex gap-3">
                <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-medium">Turn regularly</h3>
                  <p className="text-sm text-gray-600">Every few weeks, use a pitchfork to turn the pile and aerate it.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div className="text-center">
          <Link to="/recycle" className="inline-flex items-center text-primary hover:underline">
            <span>Learn about recycling</span>
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </main>
      
      <Navigation />
    </div>
  );
};

export default CompostPage;
