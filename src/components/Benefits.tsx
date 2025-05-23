import React from 'react';
import { Bot, UserPlus, MessageSquare, Calendar } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Bot className="h-12 w-12 text-electric" />,
      title: 'AI Chat Agents',
      description: 'Intelligent Conversations',
      details: 'Advanced AI agents that handle customer inquiries 24/7, providing instant, human-like responses while continuously learning from interactions.'
    },
    {
      icon: <UserPlus className="h-12 w-12 text-electric" />,
      title: 'Lead Capture',
      description: 'Automated Lead Capture',
      details: 'Smart lead generation system that identifies, qualifies, and nurtures prospects automatically, increasing your conversion rates significantly.'
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-electric" />,
      title: 'CRM Integration',
      description: 'Seamless Connection',
      details: 'Deep integration with your existing CRM, ensuring all customer interactions and lead data are synchronized in real-time.'
    },
    {
      icon: <Calendar className="h-12 w-12 text-electric" />,
      title: 'Smart Scheduling',
      description: 'Automated Booking',
      details: 'Intelligent appointment setting that handles scheduling, reminders, and follow-ups automatically, reducing no-shows and maximizing efficiency.'
    }
  ];

  return (
    <section id="benefits" className="py-12 md:py-16 bg-dark-100 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 text-white">Our Services</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transform your business operations with our AI automation tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="card group backdrop-blur-sm"
            >
              <div className="mb-6 p-6 rounded-full bg-dark-300/50 border border-dark-300 shadow-lg relative group-hover:border-electric/20 transition-all duration-300">
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-electric to-purple flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                {benefit.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{benefit.title}</h3>
              <p className="text-electric font-medium mb-4">{benefit.description}</p>
              <p className="text-gray-400">{benefit.details}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-electric/5 to-transparent"></div>
    </section>
  );
};

export default Benefits;