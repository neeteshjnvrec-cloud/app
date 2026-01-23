import React, { useState } from 'react';
import { 
  Flag, ShieldCheck, Zap, Award, 
  HeartPulse, Stethoscope, Activity, 
  Bandage, Heart, Sparkles,
  Download, PlayCircle, CheckCircle, XCircle
} from 'lucide-react';
import { productData, brandName } from '../mockData';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import LeadCaptureModal from '../components/LeadCaptureModal';
import AgenciesSection from '../components/AgenciesSection';

const iconMap = {
  'flag': Flag,
  'shield-check': ShieldCheck,
  'zap': Zap,
  'award': Award,
  'heart-pulse': HeartPulse,
  'stethoscope': Stethoscope,
  'activity': Activity,
  'band-aid': Bandage,
  'shield-heart': Heart,
  'sparkles': Sparkles
};

const ProductPage = () => {
  const [showLeadModal, setShowLeadModal] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2B5F8D] to-[#1e4a6b] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Precision-Controlled
          </h1>
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Advanced NPWT by <span className="font-bold italic">{brandName}</span><span className="text-sm align-super">™</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">{productData.tagline}</p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2B5F8D] mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {productData.keyFeatures.map((feature, index) => (
              <Card key={index} className="border-l-4 border-[#4CAF50] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#4CAF50] flex-shrink-0 mt-1" size={24} />
                    <p className="text-gray-700 leading-relaxed">{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              onClick={() => setShowLeadModal(true)}
              className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Request Free Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Healing Mechanisms */}
      <section className="py-20 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2B5F8D] mb-4">Accelerate Wound Healing</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Understanding how {brandName} NPWT works</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {productData.healingMechanisms.map((mechanism, index) => (
              <Card key={index} className="bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#2B5F8D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2B5F8D] mb-3">{mechanism.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{mechanism.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {productData.badges.map((badge, index) => {
              const Icon = iconMap[badge.icon];
              return (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#2B5F8D] to-[#1e4a6b] rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:shadow-2xl transition-all transform group-hover:scale-110">
                    <Icon size={36} className="text-white" />
                  </div>
                  <p className="text-sm font-bold text-gray-700">{badge.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Indications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2B5F8D] mb-12">Clinical Indications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {productData.indications.map((indication, index) => {
              const Icon = iconMap[indication.icon];
              return (
                <Card key={index} className="bg-white border-t-4 border-[#4CAF50] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#4CAF50] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#2B5F8D] mb-2">{indication.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{indication.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contraindications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2B5F8D] mb-12">Contraindications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {productData.contraindications.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-red-50 p-4 rounded-lg border border-red-200">
                <XCircle className="text-red-500 flex-shrink-0" size={20} />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 bg-gradient-to-br from-[#2B5F8D] to-[#1e4a6b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Product Information & Downloads</h2>
          <p className="text-blue-100 mb-12 text-lg">Access comprehensive product documentation</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <Download size={48} className="mx-auto mb-4 text-[#4CAF50]" />
                <h3 className="text-xl font-bold mb-2">Product Brochure</h3>
                <p className="text-sm text-blue-100">Comprehensive product catalog</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <Download size={48} className="mx-auto mb-4 text-[#4CAF50]" />
                <h3 className="text-xl font-bold mb-2">User Manual</h3>
                <p className="text-sm text-blue-100">Complete operation guide</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <PlayCircle size={48} className="mx-auto mb-4 text-[#4CAF50]" />
                <h3 className="text-xl font-bold mb-2">Product Video</h3>
                <p className="text-sm text-blue-100">Watch how it works</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Wound Care?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Experience the power of advanced NPWT technology. Request a free demo today!
          </p>
          <Button 
            onClick={() => setShowLeadModal(true)}
            className="bg-white text-[#4CAF50] hover:bg-gray-100 px-12 py-6 text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
          >
            Get Your Free Demo Now
          </Button>
        </div>
      </section>

      <AgenciesSection />

      <LeadCaptureModal 
        isOpen={showLeadModal} 
        onClose={() => setShowLeadModal(false)} 
      />
    </div>
  );
};

export default ProductPage;
