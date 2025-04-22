
import React from 'react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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
  const navigate = useNavigate();

  const handleContactClick = () => {
    // Explicitly log before navigation to confirm function is called
    console.log('Navigating to contact page...');
    // Force navigation with replace to ensure it works
    navigate('/contact', { replace: true });
  };

  return (
    <div 
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-white border border-gray-200',
        'transition-all duration-300 hover:shadow-xl subtle-shift',
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
        
        {/* Use a more prominent button that's easier to click */}
        <Button 
          onClick={handleContactClick}
          className="px-4 py-2 bg-techpurple-600 text-white rounded-md hover:bg-techpurple-700 transition-colors"
        >
          Contact for details
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
      
      <div className="absolute inset-0 border-2 border-transparent opacity-0 group-hover:opacity-100 group-hover:border-techpurple-400/30 rounded-2xl transition-all duration-300" />
    </div>
  );
};

export default ProjectCard;
