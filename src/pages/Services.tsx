
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, Rocket, Palette, Layers, Server, Shield, Cpu, Cloud, LineChart, Network, Smartphone } from 'lucide-react';
import AnimatedGradient from '@/components/ui/AnimatedGradient';
import ServiceCard from '@/components/ui/ServiceCard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Services = () => {
  const serviceCategories = [
    {
      category: 'AI Development',
      description: 'Harness the power of artificial intelligence with our custom AI solutions designed to automate processes and provide valuable insights.',
      icon: Code,
      services: [
        {
          title: 'Machine Learning',
          description: 'Custom machine learning models that improve over time and deliver increasing value to your business.',
          icon: Cpu,
        },
        {
          title: 'Natural Language Processing',
          description: 'Text analysis solutions that understand, interpret, and respond to human language with remarkable accuracy.',
          icon: Server,
        },
        {
          title: 'Predictive Analytics',
          description: 'Forecast trends and behaviors using historical data to make data-driven business decisions.',
          icon: LineChart,
        },
      ]
    },
    {
      category: 'AR/VR Solutions',
      description: 'Create immersive experiences that transform how users interact with your brand, products, or services.',
      icon: Rocket,
      services: [
        {
          title: 'Virtual Reality Applications',
          description: 'Immersive VR experiences that transport users to new environments for training, entertainment, or product visualization.',
          icon: Cloud,
        },
        {
          title: 'Augmented Reality Apps',
          description: 'AR applications that enhance the real world with digital information and media, creating interactive user experiences.',
          icon: Smartphone,
        },
        {
          title: '3D Visualization',
          description: 'Realistic 3D models and visualizations that bring concepts and products to life before they are built.',
          icon: Layers,
        },
      ]
    },
    {
      category: 'Blockchain Development',
      description: 'Build secure, transparent, and decentralized applications with our blockchain development services.',
      icon: Database,
      services: [
        {
          title: 'Smart Contracts',
          description: 'Self-executing contracts with the terms directly written into code, ensuring transparency and security.',
          icon: Shield,
        },
        {
          title: 'Decentralized Applications',
          description: 'Build dApps that run on a P2P network of computers rather than a single computer, eliminating central points of failure.',
          icon: Network,
        },
        {
          title: 'Tokenization',
          description: 'Create digital tokens that represent real-world assets, enabling fractional ownership and increasing liquidity.',
          icon: Server,
        },
      ]
    },
    {
      category: 'UI/UX Design',
      description: 'Elevate your digital presence with intuitive, beautiful interfaces that enhance user experience and drive engagement.',
      icon: Palette,
      services: [
        {
          title: 'User Interface Design',
          description: 'Visually stunning interfaces that reflect your brand and delight your users.',
          icon: Layers,
        },
        {
          title: 'User Experience Design',
          description: 'Thoughtful experiences that guide users through your product, making complex tasks feel simple.',
          icon: LineChart,
        },
        {
          title: 'Interaction Design',
          description: 'Engaging animations and interactions that make your product feel responsive and alive.',
          icon: Smartphone,
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <AnimatedGradient className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-techpurple-100 text-techpurple-800">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cutting-Edge Technology Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-0">
              We deliver innovative services across AI, AR/VR, Blockchain, and UI/UX design to help businesses thrive in the digital era.
            </p>
          </div>
        </div>
      </AnimatedGradient>
      
      {/* Services Categories */}
      {serviceCategories.map((category, index) => (
        <section 
          key={index} 
          className={`py-20 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
          id={category.category.toLowerCase().replace(/\s+/g, '-')}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-r from-techblue-600 to-techpurple-600 p-4 rounded-lg w-fit mb-6">
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">{category.category}</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {category.description}
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-techblue-600 text-white hover:bg-techblue-700 transition-all shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]"
                >
                  Discuss Your Project
                </Link>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {category.services.map((service, sIndex) => (
                  <div 
                    key={sIndex} 
                    className="glass rounded-xl p-6 border border-gray-200 transition-all hover:shadow-lg hover:border-techpurple-300/50 subtle-shift"
                  >
                    <div className="flex">
                      <div className="mr-4">
                        <div className="bg-techpurple-100 p-3 rounded-lg">
                          <service.icon className="h-6 w-6 text-techpurple-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass rounded-2xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-techblue-500/10 to-techpurple-500/10" />
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-600 mb-8">
                Contact us today to discuss how our technology solutions can address your specific business challenges and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-techblue-600 text-white hover:bg-techblue-700 transition-all shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/work" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-techblue-600 border border-techblue-200 hover:border-techblue-400 transition-all shadow-md hover:shadow-lg transform hover:translate-y-[-2px]"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
