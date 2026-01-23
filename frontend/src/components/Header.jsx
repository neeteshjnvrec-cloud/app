import React, { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { contactInfo } from '../mockData';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1B5E20] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="font-semibold">24/7 Helpline:</span>
            <a href={`tel:${contactInfo.helpline}`} className="flex items-center gap-2 hover:text-green-200 transition-colors">
              <Phone size={16} />
              {contactInfo.helpline}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-green-200 transition-colors">
              <Mail size={16} />
              {contactInfo.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-[#2B5F8D]">No</span>
                <span className="text-[#4CAF50]">Wound</span>
                <span className="text-xs align-super">™</span>
                <div className="text-xs text-gray-500 font-normal">Smart Healing</div>
                <div className="text-[10px] text-gray-400 font-normal">by MEDVITAL VENTURES</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#product" className="text-gray-700 hover:text-[#2B5F8D] transition-colors font-medium">Product</a>
              <a href="#about" className="text-gray-700 hover:text-[#2B5F8D] transition-colors font-medium">About us</a>
              <a href="#resources" className="text-gray-700 hover:text-[#2B5F8D] transition-colors font-medium">Resources</a>
              <a href="#contact" className="text-gray-700 hover:text-[#2B5F8D] transition-colors font-medium">Contact</a>
              <Button className="bg-[#2B5F8D] hover:bg-[#1e4a6b] text-white rounded-full px-6">
                Partner with us →
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <a href="#product" className="text-gray-700 hover:text-[#2B5F8D] transition-colors font-medium">Product</a>
              <a href="#about" className="text-gray-700 hover:text-[#2B5F8D] transition-colors font-medium">About us</a>
              <a href="#resources" className="text-gray-700 hover:text-[#2B5F8D] transition-colors font-medium">Resources</a>
              <a href="#contact" className="text-gray-700 hover:text-[#2B5F8D] transition-colors font-medium">Contact</a>
              <Button className="bg-[#2B5F8D] hover:bg-[#1e4a6b] text-white rounded-full w-full">
                Partner with us →
              </Button>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
