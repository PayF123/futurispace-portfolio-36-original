
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
  link = '/services',
}) => {
  return (
    <div 
      className={cn(
        'relative group glass rounded-2xl p-6 border border-gray-200',
        'transition-all duration-300 hover:shadow-xl',
        'hover:border-techpurple-300/50 subtle-shift',
        className
      )}
    >
      <div className="relative z-10">
        <div className="bg-gradient-to-r from-techblue-600 to-techpurple-600 p-3 rounded-lg w-fit mb-5">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-techblue-800">.NET</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center font-medium text-techpurple-600 hover:text-techpurple-700"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-techblue-500/5 to-techpurple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default ServiceCard;
