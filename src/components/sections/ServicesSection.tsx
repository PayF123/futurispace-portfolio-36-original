
import React from 'react';
import { Code, Rocket, Database, Palette, Cloud, Smartphone, LineChart, Code2, Gamepad, Globe, Monitor, Cpu } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';

const ServicesSection = () => {
  const services = [{
    title: 'AI Development',
    description: 'Harness the power of artificial intelligence with our custom AI solutions designed to automate processes and provide valuable insights.',
    icon: Code
  }, {
    title: 'AR/VR Solutions',
    description: 'Create immersive experiences that transform how users interact with your brand, products, or services.',
    icon: Rocket
  }, {
    title: 'Blockchain Development',
    description: 'Build secure, transparent, and decentralized applications with our blockchain development services.',
    icon: Database
  }, {
    title: 'UI/UX Design',
    description: 'Elevate your digital presence with intuitive, beautiful interfaces that enhance user experience and drive engagement.',
    icon: Palette
  }];

  const additionalServices = [{
    title: 'Cloud Solutions',
    description: 'Scalable, secure cloud infrastructure and migration services to optimize your business operations.',
    icon: Cloud
  }, {
    title: 'Mobile App Development',
    description: 'Create powerful, user-friendly mobile applications for iOS and Android platforms.',
    icon: Smartphone
  }, {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with our advanced analytics solutions.',
    icon: LineChart
  }, {
    title: '.NET Development',
    description: 'Build robust, scalable enterprise applications with our expert .NET development services.',
    icon: Code2
  }];
  
  const emergingTechServices = [{
    title: 'Game Development',
    description: 'Create engaging and immersive gaming experiences across multiple platforms with cutting-edge technology.',
    icon: Gamepad
  }, {
    title: 'Metaverse Development',
    description: 'Build virtual worlds and experiences that connect users in the emerging metaverse landscape.',
    icon: Globe
  }, {
    title: 'Web Development',
    description: 'Develop modern, responsive websites and web applications that drive user engagement and business growth.',
    icon: Monitor
  }, {
    title: 'IoT Development',
    description: 'Connect devices and systems with innovative Internet of Things solutions that transform data into valuable insights.',
    icon: Cpu
  }];

  return (
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
          {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />)}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {additionalServices.map((service, index) => <ServiceCard key={`additional-${index}`} title={service.title} description={service.description} icon={service.icon} />)}
        </div>
        
        <div className="mt-16 text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-techpurple-100 text-techpurple-800">
            Emerging Technologies
          </span>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Next-Generation Digital Solutions
          </h3>
          <p className="text-gray-600">
            Stay ahead of the curve with our cutting-edge services in emerging technology fields.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {emergingTechServices.map((service, index) => (
            <ServiceCard 
              key={`emerging-${index}`} 
              title={service.title} 
              description={service.description} 
              icon={service.icon}
              className="hover:border-techpurple-300/50" 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
