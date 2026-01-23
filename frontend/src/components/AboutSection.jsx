import React from 'react';
import { aboutUs, contactInfo } from '../mockData';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Image */}
          <div className="order-2 md:order-1">
            <img
              src={aboutUs.image}
              alt="About Us"
              className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl font-bold text-[#2B5F8D] mb-6">{aboutUs.title}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {aboutUs.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white rounded-full px-8 py-6 text-base mt-6">
              Read more →
            </Button>
          </div>
        </div>

        {/* Helpline CTA */}
        <div className="mt-20 bg-gradient-to-r from-[#2B5F8D] to-[#1e4a6b] rounded-2xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl font-light mb-2">24/7 Patient Helpline</h3>
          <a href={`tel:${contactInfo.helpline}`} className="text-5xl font-bold mb-6 inline-flex items-center gap-4 hover:text-[#4CAF50] transition-colors">
            <Phone size={48} />
            {contactInfo.helpline}
          </a>
          <div className="mt-8">
            <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white rounded-full px-12 py-6 text-lg font-semibold">
              Request a free Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
