import React, { useState } from 'react';
import { 
  Gauge, GitBranch, AlertCircle, Package, 
  Phone, RefreshCw, Users, Video,
  Monitor, Car, CheckSquare 
} from 'lucide-react';
import { technologyFeatures } from '../mockData';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';

const iconMap = {
  'gauge': Gauge,
  'git-branch': GitBranch,
  'alert-circle': AlertCircle,
  'package': Package,
  'phone': Phone,
  'refresh-cw': RefreshCw,
  'users': Users,
  'video': Video,
  'monitor': Monitor,
  'car': Car,
  'check-square': CheckSquare
};

const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState('cutting-edge');

  return (
    <section className="py-20 bg-[#2B5F8D] text-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light mb-2">
            {technologyFeatures.title}
          </h2>
          <h3 className="text-5xl font-bold">
            <span className="italic">No</span>
            <span className="text-[#4CAF50] italic">{technologyFeatures.subtitle}</span>
            <span className="text-sm align-super">™</span>
          </h3>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-transparent mb-12 h-auto">
            {technologyFeatures.tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="bg-white/10 data-[state=active]:bg-[#4CAF50] text-white py-4 px-6 rounded-lg text-base font-semibold hover:bg-white/20 transition-all duration-300 data-[state=active]:shadow-lg"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {technologyFeatures.tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {tab.features.map((feature, index) => {
                  const Icon = iconMap[feature.icon];
                  return (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/10"
                    >
                      <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mb-4 shadow-lg">
                        <Icon size={32} className="text-white" strokeWidth={2} />
                      </div>
                      <h4 className="text-lg font-bold mb-3">{feature.title}</h4>
                      <p className="text-sm text-gray-200 leading-relaxed">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TechnologySection;
