
import React from 'react';
import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HazardousWastePage = () => {
  const { t } = useLanguage();

  const hazardousItems = [
    {
      title: 'Batteries',
      description: 'Never dispose of batteries in regular trash. They contain harmful chemicals that can leak into soil and water.',
      handling: 'Take to specialized recycling centers or electronic stores that accept batteries.'
    },
    {
      title: 'Paint and Solvents',
      description: 'Leftover paint, thinners, and solvents are toxic and flammable.',
      handling: 'Store in original containers and take to hazardous waste collection sites.'
    },
    {
      title: 'Electronics',
      description: 'Contains heavy metals and toxic components that are harmful to the environment.',
      handling: 'Recycle at certified e-waste facilities or return to manufacturers.'
    },
    {
      title: 'Chemicals',
      description: 'Household cleaners, pesticides, and other chemicals require special disposal.',
      handling: 'Keep in original containers and dispose at hazardous waste facilities.'
    }
  ];

  return (
    <div className="min-h-screen pb-16">
      <Header />
      <main className="container px-4 py-6">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertTriangle className="h-8 w-8 text-red-500" />
            <h1 className="text-3xl font-bold text-primary">
              {t.home.categories.hazardous}
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hazardous waste requires special handling and disposal. Never mix with regular trash or pour down drains.
            Follow proper guidelines to protect the environment and public health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hazardousItems.map((item, index) => (
            <Card key={index} className="border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-red-800">
                    Proper Handling: {item.handling}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 bg-red-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Safety Guidelines</h2>
          <ul className="list-disc pl-6 space-y-2 text-red-800">
            <li>Always wear protective gloves when handling hazardous materials</li>
            <li>Keep materials in their original containers with labels intact</li>
            <li>Store in a cool, dry place away from children and pets</li>
            <li>Never mix different types of hazardous waste</li>
            <li>Contact your local waste management facility for disposal dates</li>
          </ul>
        </div>
      </main>
      <Navigation />
    </div>
  );
};

export default HazardousWastePage;
