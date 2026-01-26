import React, { useState } from 'react';
import { Download, FileText, PlayCircle, ExternalLink, Calendar, Newspaper } from 'lucide-react';
import { resourcesData, brandName } from '../mockData';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import LeadCaptureModal from '../components/LeadCaptureModal';

const ResourcesPage = () => {
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [activeTab, setActiveTab] = useState('news');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2B5F8D] to-[#1e4a6b] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Resources & Information</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Access comprehensive information, clinical studies, and educational materials about {brandName}
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent h-auto">
              <TabsTrigger
                value="news"
                className="bg-gray-100 data-[state=active]:bg-[#2B5F8D] data-[state=active]:text-white py-4 px-6 rounded-lg text-base font-semibold hover:bg-gray-200 transition-all"
              >
                <Newspaper className="mr-2" size={20} />
                News Articles
              </TabsTrigger>
              <TabsTrigger
                value="downloads"
                className="bg-gray-100 data-[state=active]:bg-[#2B5F8D] data-[state=active]:text-white py-4 px-6 rounded-lg text-base font-semibold hover:bg-gray-200 transition-all"
              >
                <Download className="mr-2" size={20} />
                Downloads
              </TabsTrigger>
              <TabsTrigger
                value="clinical"
                className="bg-gray-100 data-[state=active]:bg-[#2B5F8D] data-[state=active]:text-white py-4 px-6 rounded-lg text-base font-semibold hover:bg-gray-200 transition-all"
              >
                <FileText className="mr-2" size={20} />
                Clinical Studies
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="bg-gray-100 data-[state=active]:bg-[#2B5F8D] data-[state=active]:text-white py-4 px-6 rounded-lg text-base font-semibold hover:bg-gray-200 transition-all"
              >
                <PlayCircle className="mr-2" size={20} />
                Videos
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* News Articles */}
          {activeTab === 'news' && (
            <div>
              <h2 className="text-4xl font-bold text-center text-[#2B5F8D] mb-12">Latest News & Articles</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {resourcesData.news.map((article, index) => (
                  <Card key={index} className="bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar size={16} />
                        <span>{article.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#2B5F8D] mb-3">{article.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{article.source}</p>
                      <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white rounded-full">
                        Read Article <ExternalLink size={16} className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Downloads */}
          {activeTab === 'downloads' && (
            <div>
              <h2 className="text-4xl font-bold text-center text-[#2B5F8D] mb-12">Product Documentation</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {resourcesData.downloads.map((download, index) => (
                  <Card key={index} className="bg-white border-l-4 border-[#4CAF50] hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-[#4CAF50] rounded-xl flex items-center justify-center mb-4">
                        <Download size={32} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#2B5F8D] mb-3">{download.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="bg-gray-100 px-3 py-1 rounded-full">{download.type}</span>
                        <span>{download.size}</span>
                      </div>
                      <p className="text-gray-600 mb-6">{download.description}</p>
                      <Button className="w-full bg-[#2B5F8D] hover:bg-[#1e4a6b] text-white rounded-full">
                        Download Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Clinical Studies */}
          {activeTab === 'clinical' && (
            <div>
              <h2 className="text-4xl font-bold text-center text-[#2B5F8D] mb-12">Clinical Research & Studies</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {resourcesData.clinicalStudies.map((study, index) => (
                  <Card key={index} className="bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-64 object-cover"
                    />
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-[#2B5F8D] mb-4">{study.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{study.description}</p>
                      <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white rounded-full">
                        Read Full Study <ExternalLink size={16} className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Videos */}
          {activeTab === 'videos' && (
            <div>
              <h2 className="text-4xl font-bold text-center text-[#2B5F8D] mb-12">Educational Videos</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <Card className="bg-white hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-[#2B5F8D] to-[#1e4a6b] rounded-xl h-64 flex items-center justify-center mb-6 cursor-pointer hover:scale-105 transition-transform">
                      <PlayCircle size={80} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2B5F8D] mb-3">Product Overview</h3>
                    <p className="text-gray-600 mb-4">Complete walkthrough of {brandName} NPWT system features and benefits</p>
                    <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white rounded-full">
                      Watch Video
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-white hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-[#4CAF50] to-[#45a049] rounded-xl h-64 flex items-center justify-center mb-6 cursor-pointer hover:scale-105 transition-transform">
                      <PlayCircle size={80} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2B5F8D] mb-3">Setup & Operation Guide</h3>
                    <p className="text-gray-600 mb-4">Step-by-step instructions for setting up and operating the device</p>
                    <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white rounded-full">
                      Watch Video
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-white hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-[#2B5F8D] to-[#1e4a6b] rounded-xl h-64 flex items-center justify-center mb-6 cursor-pointer hover:scale-105 transition-transform">
                      <PlayCircle size={80} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2B5F8D] mb-3">Patient Success Stories</h3>
                    <p className="text-gray-600 mb-4">Real patient testimonials and recovery journeys</p>
                    <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white rounded-full">
                      Watch Video
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-white hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-[#4CAF50] to-[#45a049] rounded-xl h-64 flex items-center justify-center mb-6 cursor-pointer hover:scale-105 transition-transform">
                      <PlayCircle size={80} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2B5F8D] mb-3">Maintenance & Care</h3>
                    <p className="text-gray-600 mb-4">Essential maintenance tips to ensure optimal device performance</p>
                    <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white rounded-full">
                      Watch Video
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2B5F8D] to-[#1e4a6b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need More Information?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our team is ready to provide additional resources and answer your questions
          </p>
          <Button 
            onClick={() => setShowLeadModal(true)}
            className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-12 py-6 text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
          >
            Request Information
          </Button>
        </div>
      </section>

      <LeadCaptureModal 
        isOpen={showLeadModal} 
        onClose={() => setShowLeadModal(false)}
        title="Request More Information"
      />
    </div>
  );
};

export default ResourcesPage;
