import React from 'react';
import { ThumbsUp, CheckCircle, RefreshCw, DollarSign } from 'lucide-react';
import { features } from '../mockData';

const iconMap = {
  'thumbs-up': ThumbsUp,
  'check-circle': CheckCircle,
  'refresh-cw': RefreshCw,
  'dollar-sign': DollarSign
};

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="relative mb-4">
                  {/* Green ring background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50] to-[#45a049] rounded-full transform scale-110 opacity-30 group-hover:scale-125 transition-transform duration-300"></div>
                  {/* Blue circle */}
                  <div className="relative w-28 h-28 bg-[#2B5F8D] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1">
                    <Icon size={48} className="text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#2B5F8D] group-hover:text-[#4CAF50] transition-colors">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
