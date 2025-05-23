import React from 'react';
import { Search, Code, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-electric" />,
      title: 'We audit your business needs',
      description: 'Our team analyzes your current workflows, pain points, and opportunities for AI automation.'
    },
    {
      icon: <Code className="h-10 w-10 text-electric" />,
      title: 'We implement automation tailored to your tools',
      description: 'Custom AI solutions that integrate with your existing tech stack and business processes.'
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-electric" />,
      title: 'You enjoy hands-off lead handling and support',
      description: 'Watch as your business runs more efficiently with automated customer interactions.'
    }
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-16 bg-dark tech-pattern relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 text-white">How It Works</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Getting started with us is straightforward. Here's our proven process:
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-electric/10 via-purple/30 to-electric/10 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="card group backdrop-blur-sm">
                <div className="mb-6 p-6 rounded-full bg-dark-300/50 border border-dark-300 shadow-lg relative group-hover:border-electric/20 transition-all duration-300">
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-electric to-purple flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  {step.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-electric/5 to-transparent"></div>
    </section>
  );
};

export default HowItWorks;