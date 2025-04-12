
import React from 'react';
import TestimonialCard from '@/components/ui/TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [{
    quote: 'TechInnovate transformed our business with their AI solution. The increase in efficiency and accuracy exceeded our expectations.',
    author: 'Sarah Johnson',
    role: 'CTO',
    company: 'Global Finance Inc.'
  }, {
    quote: 'The AR experience created by TechInnovate revolutionized how our customers interact with our products. Sales have increased by 45%.',
    author: 'Mark Williams',
    role: 'Marketing Director',
    company: 'Retail Solutions'
  }, {
    quote: 'Their blockchain solution provided the security and transparency we needed. Working with TechInnovate was seamless and professional.',
    author: 'David Chen',
    role: 'CEO',
    company: 'SecureChain'
  }];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-techblue-100 text-techblue-800">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600">
            Hear from businesses that have successfully transformed their operations with our technology solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} role={testimonial.role} company={testimonial.company} />)}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
