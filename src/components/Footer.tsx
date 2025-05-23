import React, { useState } from 'react';
import { Linkedin, Facebook, Instagram, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }]);

      if (error) throw error;
      
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error: any) {
      setStatus('error');
      setMessage(error.message === '23505' ? 
        'You are already subscribed!' : 
        'Something went wrong. Please try again.');
    }
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <footer className="bg-dark-200/50 backdrop-blur-sm border-t border-dark-300/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="font-heading text-2xl tracking-wider mb-6 gradient-text font-bold">
              CSW Automation Agency
            </div>
            <p className="text-gray-400 mb-6">
              AI solutions for modern businesses. Automate your customer support, lead capture, and appointment setting.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/107401518" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-electric transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric transition-colors">
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/cswautomationagency/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-electric transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-gray-400 hover:text-electric transition-colors inline-flex items-center"
                  onClick={handleClick}
                >
                  Privacy Policy
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest in AI automation.</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="w-full bg-dark-300/50 border border-dark-300 rounded-lg p-3 text-white focus:outline-none focus:border-electric"
                disabled={status === 'loading'}
              />
              {status !== 'idle' && (
                <div className={`text-sm flex items-center ${
                  status === 'success' ? 'text-success' : 
                  status === 'error' ? 'text-error' : 
                  'text-gray-400'
                }`}>
                  {status === 'success' ? (
                    <CheckCircle className="w-4 h-4 mr-2" />
                  ) : status === 'error' ? (
                    <AlertCircle className="w-4 h-4 mr-2" />
                  ) : null}
                  {message}
                </div>
              )}
              <button 
                type="submit" 
                className={`btn btn-primary w-full ${status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''}`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-dark-300/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} CSW Automation. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link 
              to="/terms" 
              className="text-gray-400 hover:text-electric transition-colors"
              onClick={handleClick}
            >
              Terms
            </Link>
            <Link 
              to="/privacy-policy" 
              className="text-gray-400 hover:text-electric transition-colors"
              onClick={handleClick}
            >
              Privacy
            </Link>
            <Link 
              to="/cookies" 
              className="text-gray-400 hover:text-electric transition-colors"
              onClick={handleClick}
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;