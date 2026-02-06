import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { contactInfo, brandName, brandTagline } from '../mockData';
import { Button } from './ui/button';
import LeadCaptureModal from './LeadCaptureModal';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [hasAutoTriggered, setHasAutoTriggered] = useState(false); // Prevents annoying repetitive popups
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Mouse tracking logic for Corner Trigger
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Trigger if:
      // 1. Mouse is in the top 100 pixels (near browser tabs/header)
      // 2. Mouse is in the right 20% of the screen width
      // 3. Modal hasn't already auto-opened in this session
      const isTopRight = e.clientX > (window.innerWidth * 0.8) && e.clientY < 100;

      if (isTopRight && !hasAutoTriggered) {
        setShowLeadModal(true);
        setHasAutoTriggered(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hasAutoTriggered]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1B5E20] text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-2">
          <div className="flex items-center gap-6 flex-wrap justify-center">
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
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-[#2B5F8D]">{brandName}</span>
                <span className="text-xs align-super">™</span>
                <div className="text-xs text-gray-500 font-normal">{brandTagline}</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                to="/product" 
                className={`${isActive('/product') ? 'text-[#2B5F8D] font-bold' : 'text-gray-700'} hover:text-[#2B5F8D] transition-colors font-medium`}
              >
                Product
              </Link>
              <Link 
                to="/about" 
                className={`${isActive('/about') ? 'text-[#2B5F8D] font-bold' : 'text-gray-700'} hover:text-[#2B5F8D] transition-colors font-medium`}
              >
                About Us
              </Link>
              <Link 
                to="/resources" 
                className={`${isActive('/resources') ? 'text-[#2B5F8D] font-bold' : 'text-gray-700'} hover:text-[#2B5F8D] transition-colors font-medium`}
              >
                Resources
              </Link>
              <Link 
                to="/contact" 
                className={`${isActive('/contact') ? 'text-[#2B5F8D] font-bold' : 'text-gray-700'} hover:text-[#2B5F8D] transition-colors font-medium`}
              >
                Contact
              </Link>
              <Button 
                onClick={() => setShowLeadModal(true)}
                className="bg-[#2B5F8D] hover:bg-[#1e4a6b] text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all"
              >
                Get Free Demo →
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
              <Link to="/product" className="text-gray-700 hover:text-[#2B5F8D] transition-colors font-medium">
                Product
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-[#2B5F8D] transition-colors font-medium">
                About Us
              </Link>
              <Link to="/resources" className="text-gray-700 hover:text-[#2B5F8D] transition-colors font-medium">
                Resources
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-[#2B5F8D] transition-colors font-medium">
                Contact
              </Link>
              <Button 
                onClick={() => setShowLeadModal(true)}
                className="bg-[#2B5F8D] hover:bg-[#1e4a6b] text-white rounded-full w-full"
              >
                Get Free Demo →
              </Button>
            </nav>
          )}
        </div>
      </header>

      <LeadCaptureModal 
        isOpen={showLeadModal} 
        onClose={() => setShowLeadModal(false)} 
      />
    </>
  );
};

export default Header;