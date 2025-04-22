
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  className,
}) => {
  return (
    <Link 
      to="/contact"
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-white border border-gray-200',
        'transition-all duration-300 hover:shadow-xl subtle-shift block',
        className
      )}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium bg-techblue-50 text-techblue-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-2 transition-all group-hover:text-techpurple-600">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div 
          className="inline-flex items-center px-4 py-2 bg-techpurple-600 text-white rounded-md hover:bg-techpurple-700 transition-colors"
        >
          Contact for details
          <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
      
      <div className="absolute inset-0 border-2 border-transparent opacity-0 group-hover:opacity-100 group-hover:border-techpurple-400/30 rounded-2xl transition-all duration-300" />
    </Link>
  );
};

export default ProjectCard;
