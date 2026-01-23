import React from 'react';
import { 
  Building2, Lightbulb, Activity, 
  Award, Trophy, Briefcase 
} from 'lucide-react';
import { agencies } from '../mockData';

const iconMap = {
  'building-2': Building2,
  'lightbulb': Lightbulb,
  'activity': Activity,
  'award': Award,
  'trophy': Trophy,
  'briefcase': Briefcase
};

const AgenciesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-600 mb-2">Supporting</h2>
          <h3 className="text-5xl font-bold text-[#2B5F8D]">Agencies</h3>
        </div>

        {/* Agencies Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-12 items-center justify-center flex-wrap">
            {[...agencies, ...agencies].map((agency, index) => {
              const Icon = iconMap[agency.logo];
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-32 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-4 transform hover:scale-110"
                >
                  <Icon size={48} className="text-[#2B5F8D] mb-2" />
                  <p className="text-xs text-center text-gray-600 font-medium">{agency.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenciesSection;
