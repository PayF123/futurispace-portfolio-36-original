
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <ServicesHero />
      
      <div className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs 
            defaultValue={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mb-6 w-full flex flex-wrap justify-center gap-2">
              {serviceCategories.map((category) => (
                <TabsTrigger 
                  key={category.category} 
                  value={category.category.toLowerCase().replace(/\s+/g, '-')}
                  className="flex items-center gap-2 data-[state=active]:bg-techblue-600 data-[state=active]:text-white rounded-md"
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.category}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
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
          </Tabs>
        </div>
      </div>
      
      <ServicesCTA />
      
      <Footer />
    </div>
  );
};

export default Services;
