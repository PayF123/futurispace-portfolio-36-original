
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-techblue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{
          animationDelay: '0s'
        }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-techpurple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{
          animationDelay: '1s'
        }} />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{
          animationDelay: '2s'
        }} />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 animate-fadeIn">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-techpurple-100 text-techpurple-800">
            Innovative Tech Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Businesses with <span className="text-gradient">AI AR/VR &amp; Blockchain</span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            We create cutting-edge technology solutions that transform businesses and drive growth in the digital era.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-techblue-600 text-white hover:bg-techblue-700 transition-all shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-techblue-600 border border-techblue-200 hover:border-techblue-400 transition-all shadow-md hover:shadow-lg transform hover:translate-y-[-2px]">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </AnimatedGradient>
  );
};

export default HeroSection;
