
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  {
    name: 'Home',
    path: '/'
  }, 
  {
    name: 'About Us',
    path: '/about'
  },
  {
    name: 'Services',
    path: '/services'
  },
  {
    name: 'AI/ML',
    path: '/ai-ml'
  },  
  {
    name: 'Work',
    path: '/work'
  }, 
  {
    name: 'Insights',
    path: '/insights'
  }, 
  {
    name: 'Contact Us',
    path: '/contact'
  }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Scroll to top when a navigation link is clicked
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5')}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center text-2xl font-bold" onClick={handleNavClick}>
            <div className="mr-2 flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 w-8 h-8 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              CognitiveDatablocks
            </span>
          </NavLink>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                onClick={handleNavClick}
                className={({isActive}) => cn(
                  'relative font-medium transition-colors duration-200',
                  'hover:text-blue-600 after:absolute after:bottom-[-4px]',
                  'after:left-0 after:h-0.5 after:bg-blue-600',
                  'after:transition-all after:duration-200',
                  isActive 
                    ? 'text-blue-600 after:w-full' 
                    : 'text-gray-800 after:w-0 hover:after:w-full'
                )}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          
          <button 
            className="md:hidden flex items-center text-gray-800" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      <div className={cn(
        'md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out',
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
        'pt-24 px-6'
      )}>
        <nav className="flex flex-col space-y-6">
          {navLinks.map(link => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              onClick={handleNavClick}
              className={({isActive}) => cn(
                'text-xl font-medium transition-colors duration-200 flex items-center',
                isActive 
                  ? 'text-blue-600' 
                  : 'text-gray-800 hover:text-blue-600'
              )}
            >
              {link.name}
              <ChevronDown 
                className={cn(
                  'ml-1 w-5 h-5 transform transition-transform', 
                  location.pathname === link.path ? 'rotate-180' : 'rotate-0'
                )} 
              />
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

