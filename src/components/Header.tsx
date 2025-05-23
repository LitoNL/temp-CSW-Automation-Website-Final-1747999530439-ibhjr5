import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleDemoClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-100/95 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" onClick={scrollToTop} className="flex items-center">
          <span className="font-heading text-2xl md:text-3xl tracking-wider">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric to-purple">CSW</span>
            <span className="text-white ml-1">Automation</span>
            <span className="text-electric ml-1">Agency</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleNavigation('benefits')} 
            className="text-gray-300 hover:text-electric transition"
          >
            Services
          </button>
          <button 
            onClick={() => handleNavigation('how-it-works')} 
            className="text-gray-300 hover:text-electric transition"
          >
            How It Works
          </button>
          <Link 
            to="/contact" 
            className="btn btn-primary"
            onClick={handleDemoClick}
          >
            Free Demo
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-100/95 backdrop-blur-md py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <button
              onClick={() => handleNavigation('benefits')}
              className="text-gray-300 hover:text-electric transition py-2"
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation('how-it-works')}
              className="text-gray-300 hover:text-electric transition py-2"
            >
              How It Works
            </button>
            <Link
              to="/contact"
              className="btn btn-primary inline-block text-center"
              onClick={handleDemoClick}
            >
              Free Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;