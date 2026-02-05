
import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, Bell, UserCheck } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { brandName, contactInfo } from '../mockData';

const PrivacyPolicy = () => {
  const effectiveDate = "November 30, 2025";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2B5F8D] to-[#1e4a6b] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <ShieldCheck size={40} className="text-[#4CAF50]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Your trust is our priority. Learn how {brandName} protects and manages your personal data.
          </p>
          <div className="mt-6 inline-block bg-[#4CAF50] px-4 py-1 rounded-full text-sm font-medium">
            Effective Date: {effectiveDate}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction Card */}
            <Card className="mb-8 border-none shadow-md">
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed">
                  Injury Free Living Private Limited (“we,” “us,” or “our”) operates the website 
                  <span className="font-semibold text-[#2B5F8D]">www.injuryfreeliving.com</span>. This Privacy Policy 
                  is designed to inform you of our protocols regarding the collection, use, and disclosure 
                  of personal information we receive from users of the site. By using our services, you agree 
                  to the collection and use of information in accordance with this policy.
                </p>
              </CardContent>
            </Card>

            {/* Detailed Sections */}
            <div className="space-y-12">
              
              {/* 1. Information Collection */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Eye className="text-[#2B5F8D]" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2B5F8D]">1. Information We Collect</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#4CAF50]">
                    <h3 className="font-bold mb-2">Personal Data</h3>
                    <p className="text-gray-600 text-sm">Identifiable information such as your Name, Email Address, Phone Number, and Professional/Organization details provided during inquiries.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#2B5F8D]">
                    <h3 className="font-bold mb-2">Usage Data</h3>
                    <p className="text-gray-600 text-sm">Non-identifiable data including IP addresses, browser types, and navigation patterns collected automatically via cookies.</p>
                  </div>
                </div>
              </div>

              {/* 2. Purpose of Processing */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <UserCheck className="text-[#2B5F8D]" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2B5F8D]">2. How We Use Your Information</h2>
                </div>
                <ul className="grid md:grid-cols-2 gap-3 text-gray-700 list-disc list-inside bg-white p-8 rounded-xl shadow-sm">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our products</li>
                  <li>To provide customer support and process demos</li>
                  <li>To gather analysis to improve website performance</li>
                  <li>To monitor the usage of our Service</li>
                  <li>To detect, prevent, and address technical issues</li>
                </ul>
              </div>

              {/* 3. Data Protection & Security */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Lock className="text-[#2B5F8D]" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2B5F8D]">3. Data Security & Storage</h2>
                </div>
                <Card className="bg-white">
                  <CardContent className="p-6 text-gray-700 leading-relaxed">
                    The security of your data is important to us. We implement industry-standard 
                    <strong> Secure Socket Layer (SSL)</strong> technology and encrypted storage to protect 
                    your personal information. While we strive to use commercially acceptable means to 
                    protect your Personal Data, we cannot guarantee its absolute security as no method 
                    of transmission over the Internet is 100% secure.
                  </CardContent>
                </Card>
              </div>

              {/* 4. Disclosure of Data */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FileText className="text-[#2B5F8D]" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2B5F8D]">4. Disclosure of Data</h2>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl text-gray-700">
                  <p className="mb-4 font-medium">We may disclose your personal information in the following situations:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Compliance:</strong> To comply with a legal obligation or government request.</li>
                    <li>• <strong>Protection:</strong> To protect and defend the rights or property of {brandName}.</li>
                    <li>• <strong>Service Providers:</strong> To third-party companies that facilitate our Service (e.g., payment processors or analytics).</li>
                  </ul>
                </div>
              </div>

              {/* 5. User Rights */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Bell className="text-[#2B5F8D]" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2B5F8D]">5. Your Rights</h2>
                </div>
                <p className="text-gray-700">
                  Under various data protection laws, you have the right to access, update, or delete the 
                  information we have on you. If you wish to exercise these rights, please contact us 
                  at <a href={`mailto:${contactInfo.email}`} className="text-[#2B5F8D] font-semibold hover:underline">{contactInfo.email}</a>.
                </p>
              </div>

              <hr className="border-gray-200" />

              {/* Contact Information */}
              <div className="bg-[#2B5F8D] text-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Contact Our Privacy Team</h2>
                <p className="mb-6 text-blue-100">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-blue-200 uppercase tracking-wider font-bold">Email Address</p>
                    <p className="text-lg">{contactInfo.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-200 uppercase tracking-wider font-bold">Helpline</p>
                    <p className="text-lg">{contactInfo.helpline}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-blue-200 uppercase tracking-wider font-bold">Registered Office</p>
                    <p className="text-lg">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;