
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import InsightHero from '@/components/insights/InsightHero';
import CategoryFilter from '@/components/insights/CategoryFilter';
import ArticleCard from '@/components/insights/ArticleCard';
import NewsletterSection from '@/components/insights/NewsletterSection';

// Utility to create a slug from a title
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const Insights = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1500);
  };

  const articlesData = [
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
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
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

  // Add slug for each article
  const articles = articlesData.map(article => ({
    ...article,
    slug: slugify(article.title),
  }));

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
      <InsightHero />
      {/* Articles Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Categories */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onChange={setSelectedCategory}
          />
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
      <NewsletterSection
        email={email}
        isSubmitting={isSubmitting}
        isSubscribed={isSubscribed}
        setEmail={setEmail}
        handleSubscribe={handleSubscribe}
      />
      <Footer />
    </div>
  );
};

export default Insights;

