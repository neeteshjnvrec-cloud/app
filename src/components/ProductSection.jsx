import React, { useState } from 'react';
import { Flag, ShieldCheck, Zap, Award } from 'lucide-react';
import { productData, brandName } from '../mockData';
import { Button } from './ui/button';
import LeadCaptureModal from './LeadCaptureModal';

const iconMap = {
  'flag': Flag,
  'shield-check': ShieldCheck,
  'zap': Zap,
  'award': Award
};

const ProductSection = () => {
  const [showLeadModal, setShowLeadModal] = useState(false);

  return (
    <>
      <section className="py-20 bg-white" id="product">
        <div className="container mx-auto px-4">
          {/* Our Brand Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gray-300 w-32"></div>
              <h2 className="text-3xl font-bold text-[#2B5F8D]">Our Innovation</h2>
              <div className="h-px bg-gray-300 w-32"></div>
            </div>
            <div className="mb-8">
              <div className="text-4xl font-bold inline-block">
                <span className="text-[#2B5F8D]">{brandName}</span>
                <span className="text-xs align-super">™</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">Smart Healing Solutions</div>
            </div>
          </div>

          {/* Product Showcase */}
          <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-3xl p-12 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <h3 className="text-3xl font-light text-[#2B5F8D] leading-tight">
                  {productData.title}{' '}
                  <span className="font-bold">{productData.highlight}</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {productData.description}
                </p>
                <Button 
                  onClick={() => setShowLeadModal(true)}
                  className="bg-[#2B5F8D] hover:bg-[#1e4a6b] text-white rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all"
                >
                  Request Free Demo →
                </Button>
              </div>

              {/* Right Image */}
              <div className="relative">
                <img
                  src={productData.image}
                  alt="NPWT Device"
                  className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {productData.badges.map((badge, index) => {
                const Icon = iconMap[badge.icon];
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 shadow-md">
                      <Icon size={32} className="text-[#2B5F8D]" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">{badge.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <LeadCaptureModal 
        isOpen={showLeadModal} 
        onClose={() => setShowLeadModal(false)} 
      />
    </>
  );
};

export default ProductSection;
