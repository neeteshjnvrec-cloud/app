import React from 'react';
import { FileCheck, Scale, AlertCircle, RefreshCcw, ShieldAlert, Globe } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { brandName, contactInfo } from '../mockData';

const TermsAndConditions = () => {
  const effectiveDate = "November 30, 2025";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2B5F8D] to-[#1e4a6b] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <Scale size={40} className="text-[#4CAF50]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Please read these terms carefully before using the {brandName} platform and services.
          </p>
          <div className="mt-6 inline-block bg-[#4CAF50] px-4 py-1 rounded-full text-sm font-medium">
            Last Updated: {effectiveDate}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Agreement Card */}
            <Card className="mb-12 border-none shadow-md border-l-4 border-[#4CAF50]">
              <CardContent className="p-8">
                <h2 className="text-xl font-bold text-[#2B5F8D] mb-4 flex items-center gap-2">
                  <FileCheck size={20} /> Agreement to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using the website <span className="font-semibold">www.injuryfreeliving.com</span>, 
                  you agree to be bound by these Terms and Conditions. These terms constitute a legally 
                  binding agreement between you and <strong>Injury Free Living Private Limited</strong>. 
                  If you disagree with any part of these terms, you may not access our services.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-12">
              
              {/* 1. Use of Services */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Globe className="text-[#2B5F8D]" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2B5F8D]">1. Use of Services</h2>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <p className="text-gray-700 mb-4">You agree to use our services only for lawful purposes. You are prohibited from:</p>
                  <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-600 list-disc list-inside">
                    <li>Violating any local or international laws</li>
                    <li>Attempting to breach website security</li>
                    <li>Using automated systems (bots) to scrape data</li>
                    <li>Impersonating any person or entity</li>
                    <li>Transmitting viruses or malicious code</li>
                    <li>Interfering with other users' experience</li>
                  </ul>
                </div>
              </div>

              {/* 2. Intellectual Property */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <ShieldAlert className="text-[#2B5F8D]" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2B5F8D]">2. Intellectual Property Rights</h2>
                </div>
                <Card className="bg-white">
                  <CardContent className="p-6 text-gray-700">
                    All content, including but not limited to text, graphics, logos, images, and software 
                    on this website, is the exclusive property of <strong>{brandName}</strong>. 
                    No portion of this site may be reproduced, duplicated, or sold without express 
                    written consent from Injury Free Living Private Limited.
                  </CardContent>
                </Card>
              </div>

              {/* 3. Limitation of Liability */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <AlertCircle className="text-[#2B5F8D]" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2B5F8D]">3. Limitation of Liability</h2>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl text-gray-800">
                  <p className="text-sm italic">
                    "In no event shall Injury Free Living Private Limited, nor its directors or employees, 
                    be liable for any indirect, consequential, or special liability arising out of or in 
                    any way related to your use of this Website."
                  </p>
                </div>
              </div>

              {/* 4. Modifications */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <RefreshCcw className="text-[#2B5F8D]" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2B5F8D]">4. Modifications to Terms</h2>
                </div>
                <p className="text-gray-700">
                  We reserve the right to revise these terms at any time. By continuing to use the website 
                  after changes are posted, you are agreeing to the revised terms. We encourage users 
                  to check this page frequently for updates.
                </p>
              </div>

              {/* 5. Governing Law */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#2B5F8D]">5. Governing Law</h2>
                <Card className="bg-gray-50 border-none">
                  <CardContent className="p-6 text-gray-700">
                    These Terms shall be governed by and defined following the laws of <strong>India</strong>. 
                    Injury Free Living Private Limited and yourself irrevocably consent that the courts 
                    of Delhi, India shall have exclusive jurisdiction to resolve any dispute.
                  </CardContent>
                </Card>
              </div>

              {/* Contact Block */}
              <div className="bg-[#1e4a6b] text-white p-10 rounded-2xl shadow-xl text-center">
                <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
                <p className="mb-8 text-blue-100">
                  If you require clarification on any of our terms or conditions, please reach out to our legal compliance team.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a href={`mailto:${contactInfo.email}`} className="bg-[#4CAF50] hover:bg-[#45a049] px-8 py-3 rounded-full font-bold transition-all shadow-lg">
                    Email Support
                  </a>
                  <a href={`tel:${contactInfo.helpline}`} className="bg-white text-[#2B5F8D] hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all shadow-lg">
                    Call Legal Dept
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;