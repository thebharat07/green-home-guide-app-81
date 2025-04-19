
import React from 'react';
import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const GeneralWastePage = () => {
  const { t } = useLanguage();

  const generalWasteItems = [
    {
      title: 'Paper Products',
      description: 'Used tissues, paper towels, and contaminated paper products.',
      handling: 'Place in regular trash bin.',
      image: 'https://images.unsplash.com/photo-1618755506432-997cb3811f50?q=80'
    },
    {
      title: 'Food Packaging',
      description: 'Contaminated food wrappers, chip bags, and non-recyclable packaging.',
      handling: 'Dispose in regular trash.',
      image: 'https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?q=80'
    },
    {
      title: 'Personal Items',
      description: 'Diapers, sanitary products, and other personal care items.',
      handling: 'Seal in plastic bags before disposing.',
      image: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d18?q=80'
    },
    {
      title: 'Mixed Materials',
      description: 'Items made of multiple materials that cannot be separated.',
      handling: 'Place in regular waste bin.',
      image: 'https://images.unsplash.com/photo-1589050150450-cc467ac110bc?q=80'
    }
  ];

  return (
    <div className="min-h-screen pb-16">
      <Header />
      <main className="container px-4 py-6">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trash2 className="h-8 w-8 text-gray-500" />
            <h1 className="text-3xl font-bold text-primary">
              {t.home.categories.general}
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            General waste includes items that cannot be recycled, composted, or disposed of through special waste streams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {generalWasteItems.map((item, index) => (
            <Card key={index} className="border-l-4 border-l-gray-500">
              <CardContent className="pt-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-800">
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

export default GeneralWastePage;
