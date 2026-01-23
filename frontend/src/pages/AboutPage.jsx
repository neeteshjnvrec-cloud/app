import React, { useState } from 'react';
import { 
  Users, Lightbulb, Award, DollarSign, 
  Heart, Target, TrendingUp, Globe
} from 'lucide-react';
import { aboutData, brandName } from '../mockData';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import LeadCaptureModal from './LeadCaptureModal';

const iconMap = {
  'users': Users,
  'lightbulb': Lightbulb,
  'award': Award,
  'dollar-sign': DollarSign,
  'heart': Heart,
  'target': Target
};

const AboutPage = () => {
  const [showLeadModal, setShowLeadModal] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2B5F8D] to-[#1e4a6b] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">We Are {brandName}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {aboutData.mission}
          </p>
        </div>
      </section>

      {/* Mission & Focus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-[#4CAF50] shadow-xl">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-[#2B5F8D] mb-6">Our Focus</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{aboutData.focus}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2B5F8D] mb-16">Our Four Pillars</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-[#2B5F8D] to-[#1e4a6b] text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">WOUND CARE</h3>
                <p className="text-blue-100">Solutions for faster healing and infection control</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#4CAF50] to-[#45a049] text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">WOUND CLOSURE</h3>
                <p className="text-green-100">Secure closures for optimal healing</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#2B5F8D] to-[#1e4a6b] text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">TISSUE REGENERATION</h3>
                <p className="text-blue-100">Restore damaged tissues effectively</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#4CAF50] to-[#45a049] text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">SCAR MANAGEMENT</h3>
                <p className="text-green-100">Reduce scar visibility and aid skin recovery</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-t-4 border-[#2B5F8D] shadow-xl hover:shadow-2xl transition-all">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold text-[#2B5F8D] mb-6">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{aboutData.vision}</p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-[#4CAF50] shadow-xl hover:shadow-2xl transition-all">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold text-[#4CAF50] mb-6">Our Philosophy</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{aboutData.philosophy}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2B5F8D] mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aboutData.values.map((value, index) => {
              const Icon = iconMap[value.icon];
              return (
                <Card key={index} className="bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#2B5F8D] to-[#1e4a6b] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#2B5F8D] mb-3">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why We Exist - Statistics */}
      <section className="py-20 bg-[#2B5F8D] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why We Exist</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#4CAF50] mb-3">10.5</div>
              <p className="text-blue-100">Traumatic wounds per 1,000 individuals</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#4CAF50] mb-3">400M+</div>
              <p className="text-blue-100">Projected diabetes cases by 2025</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#4CAF50] mb-3">25%</div>
              <p className="text-blue-100">Diabetic patients develop foot ulcers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#4CAF50] mb-3">15%</div>
              <p className="text-blue-100">Facing amputation risk</p>
            </div>
          </div>
          <p className="text-lg text-center max-w-4xl mx-auto text-blue-100 leading-relaxed">
            {brandName} addresses these critical healthcare challenges with innovative solutions in wound care, closure, tissue regeneration, and scar management, advancing healing, reducing complications, and enhancing outcomes.
          </p>
        </div>
      </section>

      {/* Foundation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={aboutData.image} 
                  alt="Foundation" 
                  className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#2B5F8D] mb-6">{aboutData.foundation.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {aboutData.foundation.description}
                </p>
                <div className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white p-6 rounded-xl">
                  <p className="text-xl font-bold text-center">Every wound matters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2B5F8D] to-[#1e4a6b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us on Our Journey</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Be part of revolutionizing healthcare with solutions that truly matter. At {brandName}, we are committed to redefining care, one innovation at a time.
          </p>
          <Button 
            onClick={() => setShowLeadModal(true)}
            className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-12 py-6 text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
          >
            Partner With Us
          </Button>
        </div>
      </section>

      <LeadCaptureModal 
        isOpen={showLeadModal} 
        onClose={() => setShowLeadModal(false)}
        title="Partner With Us"
      />
    </div>
  );
};

export default AboutPage;
