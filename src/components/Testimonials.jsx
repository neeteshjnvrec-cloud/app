import React from 'react';
import { testimonials } from '../mockData';
import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-600 mb-2">Stories of</h2>
          <h3 className="text-5xl font-bold text-[#2B5F8D]">Healing and Hope</h3>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#4CAF50]">
              <CardContent className="p-8">
                <Quote size={40} className="text-[#4CAF50] mb-4 opacity-50" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#2B5F8D] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#2B5F8D]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <div className="flex text-[#FFC107] text-sm">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
