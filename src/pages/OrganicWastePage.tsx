
import React from 'react';
import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Apple } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const OrganicWastePage = () => {
  const { t } = useLanguage();

  const organicWasteItems = [
    {
      title: 'Food Scraps',
      description: 'Fruit and vegetable waste, coffee grounds, eggshells.',
      handling: 'Can be composted or disposed in organic waste bins.',
      image: '/photo-1618160702438-9b02ab6515c9'
    },
    {
      title: 'Garden Waste',
      description: 'Grass clippings, leaves, small branches, and plant trimmings.',
      handling: 'Ideal for composting or green waste collection.',
      image: '/photo-1465146344425-f00d5f5c8f07'
    },
    {
      title: 'Natural Fibers',
      description: 'Cotton, wool, and other natural fabric scraps.',
      handling: 'Can be composted if untreated and 100% natural.',
      image: '/photo-1618160702438-9b02ab6515c9'
    },
    {
      title: 'Paper Products',
      description: 'Unbleached paper, cardboard, and natural paper products.',
      handling: 'Suitable for composting when torn into small pieces.',
      image: '/photo-1618160702438-9b02ab6515c9'
    }
  ];

  return (
    <div className="min-h-screen pb-16">
      <Header />
      <main className="container px-4 py-6">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Apple className="h-8 w-8 text-green-500" />
            <h1 className="text-3xl font-bold text-primary">
              {t.home.categories.organic}
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Organic waste is biodegradable material that can be broken down naturally. It's perfect for composting and enriching soil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {organicWasteItems.map((item, index) => (
            <Card key={index} className="border-l-4 border-l-green-500">
              <CardContent className="pt-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-green-800">
                    Proper Handling: {item.handling}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Navigation />
    </div>
  );
};

export default OrganicWastePage;
