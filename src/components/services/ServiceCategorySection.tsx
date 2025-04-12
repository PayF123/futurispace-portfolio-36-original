
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

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

const ServiceCategorySection: React.FC<ServiceCategorySectionProps> = ({ category, index }) => {
  return (
    <section 
      className={`py-20 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
      id={category.category.toLowerCase().replace(/\s+/g, '-')}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-r from-techblue-600 to-techpurple-600 p-4 rounded-lg w-fit mb-6">
              <category.icon className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">{category.category}</h2>
            <p className="text-gray-600 mb-6 text-lg">
              {category.description}
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-techblue-600 text-white hover:bg-techblue-700 transition-all shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]"
            >
              Discuss Your Project
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {category.services.map((service, sIndex) => (
              <div 
                key={sIndex} 
                className="glass rounded-xl p-6 border border-gray-200 transition-all hover:shadow-lg hover:border-techpurple-300/50 subtle-shift"
              >
                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-techpurple-100 p-3 rounded-lg">
                      <service.icon className="h-6 w-6 text-techpurple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategorySection;
