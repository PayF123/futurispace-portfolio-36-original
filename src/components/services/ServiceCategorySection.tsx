
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
        <div className="bg-gradient-to-r from-techblue-600 to-techpurple-600 p-4 rounded-lg w-fit">
          <category.icon className="h-8 w-8 text-white" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{category.category}</h2>
          <p className="text-gray-600 mt-2">
            {category.description}
          </p>
        </div>
        <Link 
          to="/contact" 
          className="inline-flex items-center px-4 py-2 rounded-lg bg-techblue-600 text-white hover:bg-techblue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          Discuss Your Project
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {category.services.map((service, sIndex) => (
          <Card 
            key={sIndex} 
            className="glass border border-gray-200 transition-all hover:shadow-lg hover:border-techpurple-300/50 subtle-shift"
          >
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="bg-techpurple-100 p-2 rounded-lg">
                  <service.icon className="h-5 w-5 text-techpurple-600" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-gray-600">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategorySection;
