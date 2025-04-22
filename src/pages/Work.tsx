
import React, { useState } from 'react';
import AnimatedGradient from '@/components/ui/AnimatedGradient';
import ProjectCard from '@/components/ui/ProjectCard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Work = () => {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  
  const projects = [
    {
      title: 'AI-Powered Financial Assistant',
      description: 'An intelligent financial management platform that helps users make smarter investment decisions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['AI', 'Machine Learning', 'Finance'],
      category: 'ai',
    },
    {
      title: 'Virtual Reality Training Platform',
      description: 'A VR-based platform for industrial training that reduces costs and improves safety.',
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2196&q=80',
      tags: ['VR', '3D Modeling', 'Training'],
      category: 'arvr',
    },
    {
      title: 'Blockchain Supply Chain Solution',
      description: 'A transparent supply chain management system built on blockchain technology.',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80',
      tags: ['Blockchain', 'Supply Chain', 'Smart Contracts'],
      category: 'blockchain',
    },
    {
      title: 'E-commerce UI/UX Redesign',
      description: 'A complete redesign of an e-commerce platform focused on improving user experience and increasing conversions.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      tags: ['UI/UX', 'E-commerce', 'Design'],
      category: 'uiux',
    },
    {
      title: 'Predictive Maintenance System',
      description: 'An AI-powered system that predicts equipment failures before they occur, minimizing downtime.',
      image: 'https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['AI', 'IoT', 'Predictive Analytics'],
      category: 'ai',
    },
    {
      title: 'Augmented Reality Shopping App',
      description: 'An AR application that allows customers to visualize products in their home before purchasing.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['AR', 'Mobile App', 'Retail'],
      category: 'arvr',
    },
    {
      title: 'Cryptocurrency Exchange Platform',
      description: 'A secure and user-friendly platform for trading various cryptocurrencies.',
      image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      tags: ['Blockchain', 'Cryptocurrency', 'FinTech'],
      category: 'blockchain',
    },
    {
      title: 'Healthcare Dashboard UI',
      description: 'An intuitive dashboard for healthcare providers to monitor patient data and improve care.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['UI/UX', 'Healthcare', 'Dashboard'],
      category: 'uiux',
    },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI Development' },
    { id: 'arvr', name: 'AR/VR Solutions' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'uiux', name: 'UI/UX Design' },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <AnimatedGradient className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-techpurple-100 text-techpurple-800">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Work Speaks For Itself
            </h1>
            <p className="text-lg text-gray-600 mb-0">
              Explore our portfolio of innovative projects across various technology domains.
            </p>
          </div>
        </div>
      </AnimatedGradient>
      
      {/* Projects Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters */}
          <div className="flex justify-center mb-12 overflow-x-auto pb-2">
            <div className="flex space-x-2">
              {filters.map((item) => (
                <button
                  key={item.id}
                  className={cn(
                    'px-5 py-2.5 rounded-full font-medium transition-all',
                    filter === item.id
                      ? 'bg-techblue-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  )}
                  onClick={() => setFilter(item.id)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          <div key={filter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass rounded-2xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-techblue-500/10 to-techpurple-500/10" />
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
              <p className="text-gray-600 mb-8">
                We're always looking for new challenges. Let's discuss how we can turn your idea into reality.
              </p>
              <Button 
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-techblue-600 text-white hover:bg-techblue-700 transition-all shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]"
              >
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Work;
