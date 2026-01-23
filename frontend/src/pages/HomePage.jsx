import React from 'react';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import Features from '../components/Features';
import TechnologySection from '../components/TechnologySection';
import Testimonials from '../components/Testimonials';
import AboutSection from '../components/AboutSection';
import AgenciesSection from '../components/AgenciesSection';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ProductSection />
      <Features />
      <TechnologySection />
      <Testimonials />
      <AboutSection />
      <AgenciesSection />
    </div>
  );
};

export default HomePage;
