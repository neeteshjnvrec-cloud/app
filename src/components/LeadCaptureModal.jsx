import React, { useState } from 'react';
import { X, Phone, Mail, User, Building, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';

const LeadCaptureModal = ({ isOpen, onClose, title = "Get Your Free Demo" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const emailParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        organization: formData.organization,
        message: formData.message,
        to_email: 'kumarneetesh96@gmail.com' // Corrected email
      };

      // EmailJS configuration - Replace with your actual service details
      await emailjs.send(
       'service_8ahmo6u', // Replace with your EmailJS service ID
        'template_lle5w4q', // Replace with your EmailJS template ID
        emailParams,
        'CP4os0ioukURB02S6' // Replace with your EmailJS public key
      );

      // Send WhatsApp message
      const whatsappMessage = `New Demo Request:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nOrganization: ${formData.organization}\nMessage: ${formData.message}`;
      const whatsappUrl = `https://wa.me/918130444101?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Request Submitted Successfully!",
        description: "Check WhatsApp for confirmation. Email sent to our team.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        message: ''
      });
      onClose();
    } catch (error) {
      console.error('Error sending request:', error);
      toast({
        title: "Error",
        description: "Failed to send request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#2B5F8D] to-[#1e4a6b] text-white p-8 rounded-t-2xl">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-blue-100">Fill out the form below and our team will get back to you within 24 hours</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <User size={16} className="text-[#2B5F8D]" />
                Full Name *
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="border-gray-300 focus:border-[#2B5F8D] focus:ring-[#2B5F8D]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Mail size={16} className="text-[#2B5F8D]" />
                Email Address *
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="border-gray-300 focus:border-[#2B5F8D] focus:ring-[#2B5F8D]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Phone size={16} className="text-[#2B5F8D]" />
                Phone Number *
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 12345 67890"
                required
                className="border-gray-300 focus:border-[#2B5F8D] focus:ring-[#2B5F8D]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Building size={16} className="text-[#2B5F8D]" />
                Organization
              </label>
              <Input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Hospital/Clinic Name"
                className="border-gray-300 focus:border-[#2B5F8D] focus:ring-[#2B5F8D]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <MessageSquare size={16} className="text-[#2B5F8D]" />
              Message
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your requirements..."
              rows={4}
              className="border-gray-300 focus:border-[#2B5F8D] focus:ring-[#2B5F8D] resize-none"
            />
          </div>

          <div className="flex gap-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#4CAF50] hover:bg-[#45a049] text-white py-6 text-lg font-semibold rounded-full"
            >
              {isSubmitting ? 'Submitting...' : 'Request Demo'}
            </Button>
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="px-8 py-6 text-lg rounded-full border-2 border-gray-300 hover:bg-gray-50"
            >
              Cancel
            </Button>
          </div>

          <p className="text-xs text-center text-gray-500">
            By submitting this form, you agree to our Privacy Policy and Terms of Service
          </p>
        </form>
      </div>
    </div>
  );
};

export default LeadCaptureModal;
