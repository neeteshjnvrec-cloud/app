import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { contactInfo, brandName } from '../mockData';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
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
        subject: formData.subject,
        message: formData.message,
        to_email: 'kumarneetesh96@gmail.com'
      };

      // EmailJS configuration - Replace with your actual service details
      await emailjs.send(
        'service_8ahmo6u', // Replace with your EmailJS service ID
        'template_lle5w4q', // Replace with your EmailJS template ID
        emailParams,
        'CP4os0ioukURB02S6' // Replace with your EmailJS public key
      );

      // Send WhatsApp message
      const whatsappMessage = `New Contact Inquiry:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nOrganization: ${formData.organization}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
      const whatsappUrl = `https://wa.me/918476828634?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Message Sent Successfully!",
        description: "Check WhatsApp for confirmation. Email sent to our team.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2B5F8D] to-[#1e4a6b] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to elevate your healthcare solutions with {brandName}? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            <Card className="bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#4CAF50]">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2B5F8D] mb-3">Call Us</h3>
                <p className="text-gray-600 mb-2">24/7 Support Available</p>
                <a href={`tel:${contactInfo.helpline}`} className="text-[#4CAF50] font-bold text-lg hover:underline">
                  {contactInfo.helpline}
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#2B5F8D]">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#2B5F8D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2B5F8D] mb-3">Email Us</h3>
                <p className="text-gray-600 mb-2">We'll respond within 24 hours</p>
                <a href={`mailto:${contactInfo.email}`} className="text-[#2B5F8D] font-bold hover:underline break-all">
                  {contactInfo.email}
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#4CAF50]">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2B5F8D] mb-3">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday</p>
                <p className="text-gray-600 font-bold">9:00 AM - 6:00 PM</p>
                <p className="text-sm text-gray-500 mt-2">24/7 Emergency Support</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Contact Section */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#2B5F8D] mb-6">Send Us a Message</h2>
              <Card className="bg-white shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Full Name *</label>
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
                        <label className="text-sm font-medium text-gray-700">Email Address *</label>
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

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Phone Number *</label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          required
                          className="border-gray-300 focus:border-[#2B5F8D] focus:ring-[#2B5F8D]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Organization</label>
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
                      <label className="text-sm font-medium text-gray-700">Subject *</label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        className="border-gray-300 focus:border-[#2B5F8D] focus:ring-[#2B5F8D]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        required
                        className="border-gray-300 focus:border-[#2B5F8D] focus:ring-[#2B5F8D] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#2B5F8D] mb-6">Contact Information</h2>
              <Card className="bg-gradient-to-br from-[#2B5F8D] to-[#1e4a6b] text-white shadow-xl mb-8">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="flex-shrink-0 mt-1 text-[#4CAF50]" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Main Office</h3>
                      <p className="text-blue-100">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone size={24} className="flex-shrink-0 mt-1 text-[#4CAF50]" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Phone</h3>
                      <a href={`tel:${contactInfo.helpline}`} className="text-blue-100 hover:text-white transition-colors">
                        {contactInfo.helpline}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail size={24} className="flex-shrink-0 mt-1 text-[#4CAF50]" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Email</h3>
                      <a href={`mailto:${contactInfo.email}`} className="text-blue-100 hover:text-white transition-colors break-all">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-white shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#2B5F8D] mb-6">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#2B5F8D] hover:bg-[#4CAF50] rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                      aria-label="Facebook"
                    >
                      <Facebook size={24} className="text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#2B5F8D] hover:bg-[#4CAF50] rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                      aria-label="Twitter"
                    >
                      <Twitter size={24} className="text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#2B5F8D] hover:bg-[#4CAF50] rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={24} className="text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#2B5F8D] hover:bg-[#4CAF50] rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram size={24} className="text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Partnership CTA */}
              <Card className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white shadow-xl mt-8">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-3">Looking to Partner?</h3>
                  <p className="text-green-100 mb-6">
                    {brandName} is always looking to grow our distributor network and expand our partnerships.
                  </p>
                  <Button className="bg-white text-[#4CAF50] hover:bg-gray-100 rounded-full px-8 py-3 font-bold">
                    Learn About Partnership
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="h-96 bg-gray-100">
        <MapContainer center={[27.1997, 79.2997]} zoom={15} className="w-full h-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[27.1997, 79.2997]}>
            <Popup>
              <div className="text-center">
                <strong>{brandName}</strong><br />
                {contactInfo.address}<br />
                <a href={`tel:${contactInfo.helpline}`} className="text-blue-600 hover:underline">
                  {contactInfo.helpline}
                </a>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </section>
    </div>
  );
};

export default ContactPage;
