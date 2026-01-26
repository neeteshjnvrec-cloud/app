import React from 'react';
import { heroData, brandName } from '../mockData';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-0 min-h-[600px] items-center">
          {/* Left Content */}
          <div className="bg-[#2B5F8D] text-white py-20 px-12 relative z-10">
            <div className="max-w-xl">
              <h2 className="text-xl font-light mb-2 tracking-wider">{heroData.title}</h2>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">{heroData.subtitle}</h1>
              <p className="text-lg mb-6 leading-relaxed">
                {heroData.description}{' '}
                <span className="font-bold">{heroData.highlights[0]}</span>,{' '}
                <span className="font-bold">{heroData.highlights[1]}</span>,{' '}
                <span className="font-bold">{heroData.highlights[2]}</span>, and{' '}
                <span className="font-bold">{heroData.highlights[3]}</span>
              </p>
            </div>
            {/* Green accent line */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-[#4CAF50]"></div>
          </div>

          {/* Right Image with Diagonal Cut */}
          <div className="relative h-full min-h-[600px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${heroData.image}')`,
                clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2B5F8D]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
