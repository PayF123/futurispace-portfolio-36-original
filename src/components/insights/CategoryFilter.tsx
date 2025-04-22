
import React from 'react';
import { cn } from '@/lib/utils';

interface Category {
  name: string;
  count: number;
}

interface Props {
  categories: Category[];
  selectedCategory: string;
  onChange: (cat: string) => void;
}

const CategoryFilter: React.FC<Props> = ({ categories, selectedCategory, onChange }) => (
  <div className="flex justify-center mb-12 overflow-x-auto pb-2">
    <div className="flex space-x-2">
      {categories.map((category) => (
        <button
          key={category.name}
          className={cn(
            'px-5 py-2.5 rounded-full font-medium transition-all flex items-center',
            selectedCategory === category.name
              ? 'bg-techblue-600 text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          )}
          onClick={() => onChange(category.name)}
        >
          {category.name}
          <span className={cn(
            'ml-2 text-sm px-2 py-0.5 rounded-full',
            selectedCategory === category.name
              ? 'bg-white/20 text-white'
              : 'bg-gray-100 text-gray-600'
          )}>
            {category.count}
          </span>
        </button>
      ))}
    </div>
  </div>
);

export default CategoryFilter;
