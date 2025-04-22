
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Article {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
}

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
    <div className="aspect-video overflow-hidden">
      <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center mb-3">
        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-techpurple-100 text-techpurple-800">
          {article.category}
        </span>
        <span className="mx-2 text-gray-300">•</span>
        <span className="text-sm text-gray-500">{article.date}</span>
        <span className="mx-2 text-gray-300">•</span>
        <span className="text-sm text-gray-500">{article.readTime}</span>
      </div>
      <h3 className="text-xl font-semibold mb-3 hover:text-techpurple-600 transition-colors">
        <a href={`/insights/${article.slug}`}>{article.title}</a>
      </h3>
      <p className="text-gray-600 mb-4 flex-grow">{article.excerpt}</p>
      <a 
        href={`/insights/${article.slug}`} 
        className="inline-flex items-center font-medium text-techpurple-600 hover:text-techpurple-700 mt-auto"
      >
        Read More
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  </div>
);

export default ArticleCard;

