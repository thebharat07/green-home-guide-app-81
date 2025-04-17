
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home, Leaf, Recycle, HelpCircle, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  
  const navItems = [
    { icon: <Home size={20} />, label: t.navigation.home, path: '/' },
    { icon: <Leaf size={20} />, label: t.navigation.compost, path: '/compost' },
    { icon: <Recycle size={20} />, label: t.navigation.recycle, path: '/recycle' },
    { icon: <HelpCircle size={20} />, label: t.navigation.quiz, path: '/quiz' },
    { icon: <Settings size={20} />, label: t.navigation.settings, path: '/settings' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:shadow-md z-10">
      <div className="flex justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center p-2 transition-colors ${
                isActive
                  ? 'text-primary'
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
              {isActive && (
                <div className="absolute bottom-0 w-6 h-0.5 bg-primary rounded-t-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
