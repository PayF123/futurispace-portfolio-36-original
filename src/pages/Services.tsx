
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceCategorySection from '@/components/services/ServiceCategorySection';
import ServicesCTA from '@/components/services/ServicesCTA';
import { serviceCategories } from '@/data/serviceCategories';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <ServicesHero />
      
      {serviceCategories.map((category, index) => (
        <ServiceCategorySection 
          key={index}
          category={category}
          index={index}
        />
      ))}
      
      <ServicesCTA />
      
      <Footer />
    </div>
  );
};

export default Services;
