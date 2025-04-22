
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceCategorySection from '@/components/services/ServiceCategorySection';
import ServicesCTA from '@/components/services/ServicesCTA';
import { serviceCategories } from '@/data/serviceCategories';
import { useIsMobile } from '@/hooks/use-mobile';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(serviceCategories[0].category.toLowerCase().replace(/\s+/g, '-'));
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <ServicesHero />
      
      <div className="py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <Tabs 
            defaultValue={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="bg-white rounded-xl p-2 md:p-4 shadow-sm mb-8">
              <TabsList className="w-full flex flex-wrap justify-center gap-2 p-1 bg-gray-100 rounded-lg overflow-x-auto max-h-48 md:max-h-none">
                {serviceCategories.map((category) => (
                  <TabsTrigger 
                    key={category.category} 
                    value={category.category.toLowerCase().replace(/\s+/g, '-')}
                    className="flex items-center gap-1 md:gap-2 px-2 py-1 md:px-4 md:py-2 rounded-md data-[state=active]:bg-white data-[state=active]:text-techblue-600 data-[state=active]:shadow-sm transition-all min-w-fit text-xs md:text-sm"
                  >
                    <category.icon className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                    <span className="truncate">{category.category}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-8 mt-20 md:mt-0">
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
