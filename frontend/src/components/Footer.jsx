import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { footerData } from '../mockData';

const iconMap = {
  'facebook': Facebook,
  'twitter': Twitter,
  'youtube': Youtube,
  'instagram': Instagram
};

const Footer = () => {
  return (
    <footer className="bg-[#1B5E20] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              <span className="text-white">No</span>
              <span className="text-[#4CAF50]">Wound</span>
              <span className="text-xs align-super">™</span>
            </div>
            <p className="text-gray-200 leading-relaxed mb-6">
              {footerData.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerData.links.map((link, index) => (
                <li key={index}>
                  <a href={link.path} className="text-gray-200 hover:text-[#4CAF50] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <a href={`mailto:${footerData.contact.email}`} className="flex items-start gap-3 text-gray-200 hover:text-[#4CAF50] transition-colors">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <span>{footerData.contact.email}</span>
              </a>
              <a href={`tel:${footerData.contact.phone}`} className="flex items-start gap-3 text-gray-200 hover:text-[#4CAF50] transition-colors">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <span>{footerData.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex items-start gap-3 text-gray-200 mb-6">
            <MapPin size={20} className="mt-1 flex-shrink-0" />
            <span>{footerData.address}</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {footerData.social.map((social, index) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#4CAF50] transition-all duration-300 transform hover:scale-110"
                  aria-label={social.platform}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-300 text-sm">
            <p className="mb-2">Copyright © 2024 NoWound - We create innovative products and technologies that drive the advancement in wound management</p>
            <div className="flex justify-center gap-6">
              <a href="#privacy" className="hover:text-[#4CAF50] transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#terms" className="hover:text-[#4CAF50] transition-colors">Terms & Services</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${footerData.contact.phone.replace(/\D/g, '')}`}
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 z-50"
        aria-label="WhatsApp"
      >
        <Phone size={28} className="text-white" />
      </a>

      {/* Floating Helpline Button */}
      <a
        href={`tel:${footerData.contact.phone}`}
        className="fixed bottom-28 right-8 bg-[#2B5F8D] text-white px-6 py-4 rounded-full shadow-2xl hover:bg-[#1e4a6b] transition-all duration-300 z-50 flex items-center gap-2 font-semibold"
      >
        <Phone size={20} />
        <div className="flex flex-col items-start">
          <span className="text-xs">24/7 Helpline</span>
          <span className="text-sm">{footerData.contact.phone}</span>
        </div>
      </a>
    </footer>
  );
};

export default Footer;
