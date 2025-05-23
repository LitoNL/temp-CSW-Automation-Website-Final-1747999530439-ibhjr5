import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  const handleClick = () => {
    // Reset scroll position when navigating to contact form
    window.scrollTo(0, 0);
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-dark tech-pattern relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 text-white">
              Experience the Future of Business
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Elevate your business with AI automation that delivers real results. Our intelligent solutions handle customer interactions while you focus on growth.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/contact" 
                className="btn btn-primary group"
                onClick={handleClick}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-electric/5 to-transparent"></div>
    </section>
  );
};

export default CallToAction;