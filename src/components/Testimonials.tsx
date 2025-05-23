import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "CSW Automation transformed our customer service. Their AI handles 80% of inquiries without human intervention, and our response time went from hours to seconds.",
      name: "Sarah Johnson",
      title: "VP of Operations, TechSolutions Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The lead capture system is incredible. We've increased qualified leads by 45% and our sales team can focus on closing instead of chasing prospects.",
      name: "Michael Chen",
      title: "Sales Director, GrowthFocus",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-dark-100 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what businesses like yours have achieved with CSW Automation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card relative group hover:shadow-lg">
              <Quote className="absolute top-4 right-4 h-12 w-12 text-cyan/10 group-hover:text-cyan/20 transition-all duration-300" />
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-cyan"
                  />
                </div>
                <div>
                  <p className="text-gray-300 mb-4 relative z-10">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-cyan text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-electric/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Testimonials;