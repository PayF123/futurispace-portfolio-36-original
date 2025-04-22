
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceCategory {
  category: string;
  description: string;
  icon: LucideIcon;
  services: ServiceItem[];
}

interface ServiceCategorySectionProps {
  category: ServiceCategory;
  index: number;
}

const ServiceCategorySection: React.FC<ServiceCategorySectionProps> = ({ category }) => {
  const isMobile = useIsMobile();

  return (
    <div className="space-y-10">
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
        <div className="bg-gradient-to-r from-techblue-500 to-techpurple-500 p-5 rounded-xl shadow-md w-16 h-16 flex items-center justify-center">
          <category.icon className="h-8 w-8 text-white" />
        </div>
        <div className="flex-1 space-y-3">
          <h2 className="text-3xl font-bold text-gray-800">{category.category}</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            {category.description}
          </p>
        </div>
        <Link 
          to="/contact" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
          className="inline-flex items-center px-6 py-3 rounded-lg bg-techblue-600 text-white hover:bg-techblue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 whitespace-nowrap w-full lg:w-auto justify-center lg:justify-start"
        >
          Discuss Your Project
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {category.services.map((service, sIndex) => (
          <Card 
            key={sIndex} 
            className="border border-gray-100 transition-all hover:shadow-lg hover:border-techpurple-200 subtle-shift bg-white overflow-hidden"
          >
            <CardHeader className="pb-2 space-y-4">
              <div className="bg-techpurple-50 p-3 rounded-lg w-fit">
                <service.icon className="h-6 w-6 text-techpurple-600" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategorySection;
