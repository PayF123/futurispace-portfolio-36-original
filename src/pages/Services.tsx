
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceCategorySection from '@/components/services/ServiceCategorySection';
import ServicesCTA from '@/components/services/ServicesCTA';
import { serviceCategories } from '@/data/serviceCategories';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(serviceCategories[0].category.toLowerCase().replace(/\s+/g, '-'));
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <ServicesHero />
      
      <div className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <Tabs 
            defaultValue={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="bg-white rounded-xl p-4 shadow-sm mb-8">
              <TabsList className="w-full flex flex-wrap justify-center gap-3 p-1 bg-gray-100 rounded-lg">
                {serviceCategories.map((category) => (
                  <TabsTrigger 
                    key={category.category} 
                    value={category.category.toLowerCase().replace(/\s+/g, '-')}
                    className="flex items-center gap-2 px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:text-techblue-600 data-[state=active]:shadow-sm transition-all"
                  >
                    <category.icon className="h-4 w-4" />
                    <span>{category.category}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8">
              {serviceCategories.map((category, index) => (
                <TabsContent 
                  key={category.category} 
                  value={category.category.toLowerCase().replace(/\s+/g, '-')}
                  className="animate-fadeIn"
                >
                  <ServiceCategorySection 
                    category={category}
                    index={index}
                  />
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
      
      <ServicesCTA />
      
      <Footer />
    </div>
  );
};

export default Services;
