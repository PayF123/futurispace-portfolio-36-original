
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import AnimatedGradient from '@/components/ui/AnimatedGradient';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

const Insights = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1500);
  };
  
  const articles = [
    {
      title: 'The Future of AI in Business Transformation',
      excerpt: 'Explore how artificial intelligence is revolutionizing business processes and creating new opportunities for growth and innovation.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'AI',
      date: 'June 12, 2023',
      readTime: '5 min read',
    },
    {
      title: 'How AR and VR are Changing the Retail Experience',
      excerpt: 'Discover how augmented and virtual reality technologies are transforming the retail landscape and enhancing customer engagement.',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'AR/VR',
      date: 'May 28, 2023',
      readTime: '7 min read',
    },
    {
      title: 'Blockchain Beyond Cryptocurrency: Real-World Applications',
      excerpt: 'Learn about the practical applications of blockchain technology in various industries beyond just cryptocurrency.',
      image: 'https://images.unsplash.com/photo-1642403711604-3908e90960ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80',
      category: 'Blockchain',
      date: 'April 15, 2023',
      readTime: '6 min read',
    },
    {
      title: 'The Psychology of User Experience Design',
      excerpt: 'Understand the psychological principles that drive effective user experience design and how they can be applied to digital products.',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'UI/UX',
      date: 'March 3, 2023',
      readTime: '8 min read',
    },
    {
      title: 'The Role of Machine Learning in Predictive Maintenance',
      excerpt: 'Explore how machine learning is being used to predict equipment failures and optimize maintenance schedules in industrial settings.',
      image: 'https://images.unsplash.com/photo-1576400883215-7083592054d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      category: 'AI',
      date: 'February 19, 2023',
      readTime: '5 min read',
    },
    {
      title: 'Creating Immersive Virtual Training Environments',
      excerpt: 'Learn about the benefits of virtual reality training and how it is being implemented across various industries.',
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'AR/VR',
      date: 'January 7, 2023',
      readTime: '6 min read',
    },
  ];
  
  const categories = [
    { name: 'All', count: articles.length },
    { name: 'AI', count: articles.filter(a => a.category === 'AI').length },
    { name: 'AR/VR', count: articles.filter(a => a.category === 'AR/VR').length },
    { name: 'Blockchain', count: articles.filter(a => a.category === 'Blockchain').length },
    { name: 'UI/UX', count: articles.filter(a => a.category === 'UI/UX').length },
  ];
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <AnimatedGradient className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-techpurple-100 text-techpurple-800">
              Our Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Thoughts and Perspectives on Technology
            </h1>
            <p className="text-lg text-gray-600 mb-0">
              Explore our articles, news updates, and expert opinions on the latest trends in AI, AR/VR, and Blockchain technologies.
            </p>
          </div>
        </div>
      </AnimatedGradient>
      
      {/* Articles Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Categories */}
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
                  onClick={() => setSelectedCategory(category.name)}
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
          
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
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
                    <a href="#">{article.title}</a>
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">{article.excerpt}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center font-medium text-techpurple-600 hover:text-techpurple-700 mt-auto"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto glass rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated on Technology Trends</h2>
              <p className="text-gray-600">
                Subscribe to our newsletter to receive the latest insights, news, and updates on emerging technologies.
              </p>
            </div>
            
            {isSubscribed ? (
              <div className="bg-green-50 text-green-800 p-4 rounded-lg text-center">
                <p className="font-medium">Thank you for subscribing!</p>
                <p className="text-sm mt-1">You'll receive our next newsletter in your inbox.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <input 
                    type="email" 
                    className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-techpurple-500 focus:border-transparent"
                    placeholder="Enter your email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button 
                  type="submit" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-techblue-600 text-white hover:bg-techblue-700 transition-all shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Insights;
