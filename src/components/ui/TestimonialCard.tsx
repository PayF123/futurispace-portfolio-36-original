
import React from 'react';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  image,
  className,
}) => {
  return (
    <div 
      className={cn(
        'glass rounded-2xl p-6 md:p-8 transition-all duration-300',
        'hover:shadow-lg subtle-shift',
        className
      )}
    >
      <Quote className="h-8 w-8 text-techpurple-400 mb-4 opacity-40" />
      
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      
      <div className="flex items-center">
        {image && (
          <div className="mr-4">
            <img 
              src={image} 
              alt={author} 
              className="w-12 h-12 rounded-full object-cover border-2 border-techpurple-100"
            />
          </div>
        )}
        
        <div>
          <p className="font-semibold text-gray-800">{author}</p>
          <p className="text-sm text-gray-500">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
