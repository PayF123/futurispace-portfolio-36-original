
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AiMlHero from '@/components/aiml/AiMlHero';
import AiMlServices from '@/components/aiml/AiMlServices';
import AiMlProcess from '@/components/aiml/AiMlProcess';
import AiMlCaseStudies from '@/components/aiml/AiMlCaseStudies';
import CTASection from '@/components/sections/CTASection';

const AiMl = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AiMlHero />
      <AiMlServices />
      <AiMlProcess />
      <AiMlCaseStudies />
      <CTASection />
      <Footer />
    </div>
  );
};

export default AiMl;
