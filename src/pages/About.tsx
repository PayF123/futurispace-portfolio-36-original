
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/about/OurStory';
import CoreValues from '@/components/about/CoreValues';
// Removed LeadershipTeam import

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <AboutHero />
        <OurStory />
        <CoreValues />
        {/* Removed LeadershipTeam component */}
      </main>

      <Footer />
    </div>
  );
};

export default About;
