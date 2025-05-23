import React from 'react';
import { ArrowRight, Brain, Cpu, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const scrollToFeatures = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const featuresSection = document.getElementById('benefits');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-16 bg-gradient-to-b from-dark to-dark-200 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric to-purple">
              Transform Your Business
            </span>
            <span className="block text-white mt-2">
              with AI Automation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Streamline Operations. Capture Leads. Scale Effortlessly.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link 
              to="/contact" 
              className="btn btn-primary group"
            >
              Book Your Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="#benefits"
              onClick={scrollToFeatures}
              className="btn btn-secondary"
            >
              Explore Solutions
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-electric to-purple p-5 animate-float">
              <Brain className="w-full h-full text-white" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-2">24/7 AI Support</h3>
            <p className="text-gray-400">Intelligent responses that learn and adapt to your business</p>
          </div>

          <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-purple to-electric p-5 animate-float" style={{ animationDelay: '2s' }}>
              <Network className="w-full h-full text-white" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-2">Smart Lead Capture</h3>
            <p className="text-gray-400">Automated qualification and nurturing that converts</p>
          </div>

          <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-electric to-purple p-5 animate-float" style={{ animationDelay: '4s' }}>
              <Cpu className="w-full h-full text-white" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-2">Process Automation</h3>
            <p className="text-gray-400">Streamlined workflows that save time and reduce errors</p>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
      <div className="absolute top-20 left-0 w-96 h-96 bg-electric/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;