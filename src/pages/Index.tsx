
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Rocket, Palette } from 'lucide-react';
import AnimatedGradient from '@/components/ui/AnimatedGradient';
import ServiceCard from '@/components/ui/ServiceCard';
import ProjectCard from '@/components/ui/ProjectCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parallaxEffect = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      heroRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      heroRef.current.style.opacity = `${1 - scrollPosition * 0.002}`;
    };

    window.addEventListener('scroll', parallaxEffect);
    return () => window.removeEventListener('scroll', parallaxEffect);
  }, []);

  const services = [
    {
      title: 'AI Development',
      description: 'Harness the power of artificial intelligence with our custom AI solutions designed to automate processes and provide valuable insights.',
      icon: Code,
    },
    {
      title: 'AR/VR Solutions',
      description: 'Create immersive experiences that transform how users interact with your brand, products, or services.',
      icon: Rocket,
    },
    {
      title: 'Blockchain Development',
      description: 'Build secure, transparent, and decentralized applications with our blockchain development services.',
      icon: Database,
    },
    {
      title: 'UI/UX Design',
      description: 'Elevate your digital presence with intuitive, beautiful interfaces that enhance user experience and drive engagement.',
      icon: Palette,
    },
  ];

  const projects = [
    {
      title: 'AI-Powered Financial Assistant',
      description: 'An intelligent financial management platform that helps users make smarter investment decisions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['AI', 'Machine Learning', 'Finance'],
    },
    {
      title: 'Virtual Reality Training Platform',
      description: 'A VR-based platform for industrial training that reduces costs and improves safety.',
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2196&q=80',
      tags: ['VR', '3D Modeling', 'Training'],
    },
    {
      title: 'Blockchain Supply Chain Solution',
      description: 'A transparent supply chain management system built on blockchain technology.',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80',
      tags: ['Blockchain', 'Supply Chain', 'Smart Contracts'],
    },
  ];

  const testimonials = [
    {
      quote: 'TechInnovate transformed our business with their AI solution. The increase in efficiency and accuracy exceeded our expectations.',
      author: 'Sarah Johnson',
      role: 'CTO',
      company: 'Global Finance Inc.',
    },
    {
      quote: 'The AR experience created by TechInnovate revolutionized how our customers interact with our products. Sales have increased by 45%.',
      author: 'Mark Williams',
      role: 'Marketing Director',
      company: 'Retail Solutions',
    },
    {
      quote: 'Their blockchain solution provided the security and transparency we needed. Working with TechInnovate was seamless and professional.',
      author: 'David Chen',
      role: 'CEO',
      company: 'SecureChain',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <AnimatedGradient className="relative min-h-screen flex flex-col justify-center pt-20">
        <div className="absolute inset-0 overflow-hidden" ref={heroRef}>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-techblue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-techpurple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 z-10 animate-fadeIn">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-techpurple-100 text-techpurple-800">
              Innovative Tech Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Businesses with <span className="text-gradient">AI, AR/VR & Blockchain</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              We create cutting-edge technology solutions that transform businesses and drive growth in the digital era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-techblue-600 text-white hover:bg-techblue-700 transition-all shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-techblue-600 border border-techblue-200 hover:border-techblue-400 transition-all shadow-md hover:shadow-lg transform hover:translate-y-[-2px]"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </AnimatedGradient>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-techblue-100 text-techblue-800">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transformative Technology Services
            </h2>
            <p className="text-gray-600">
              We provide innovative solutions across multiple technology domains to help your business thrive in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-techpurple-100 text-techpurple-800">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent Projects
            </h2>
            <p className="text-gray-600">
              Explore our successful projects that demonstrate our expertise and innovation in action.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                link="/work"
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/work" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-techpurple-600 text-white hover:bg-techpurple-700 transition-all shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-techblue-100 text-techblue-800">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600">
              Hear from businesses that have successfully transformed their operations with our technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedGradient className="relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business with Technology?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact us today to discuss how our solutions can address your specific business challenges.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-techblue-600 text-white hover:bg-techblue-700 transition-all shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </AnimatedGradient>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
