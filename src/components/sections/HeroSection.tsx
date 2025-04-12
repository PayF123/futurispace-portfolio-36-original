
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Server } from 'lucide-react';
import AnimatedGradient from '@/components/ui/AnimatedGradient';

const HeroSection = () => {
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

  return (
    <AnimatedGradient className="relative min-h-screen flex flex-col justify-center pt-20">
      <div className="absolute inset-0 overflow-hidden" ref={heroRef}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{
          animationDelay: '0s'
        }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{
          animationDelay: '1s'
        }} />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{
          animationDelay: '2s'
        }} />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 animate-fadeIn">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
            Enterprise Software Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Building <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Intelligent Software</span> For Modern Businesses
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            We develop custom enterprise applications, cloud solutions, and data-driven software to solve complex business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]">
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-blue-600 border border-blue-200 hover:border-blue-400 transition-all shadow-md hover:shadow-lg transform hover:translate-y-[-2px]">
              Get in Touch
            </Link>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Custom Development</h3>
            <p className="text-gray-600 text-sm">Tailored software solutions designed for your specific business needs</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Data Engineering</h3>
            <p className="text-gray-600 text-sm">Transform raw data into actionable insights with our data solutions</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
              <Server className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Cloud Solutions</h3>
            <p className="text-gray-600 text-sm">Scalable, secure and optimized cloud infrastructure for modern applications</p>
          </div>
        </div>
      </div>
    </AnimatedGradient>
  );
};

export default HeroSection;
