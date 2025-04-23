
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center text-2xl font-bold mb-6">
              <div className="mr-2 flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 w-8 h-8 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                CognitiveDatablocks
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Enterprise software solutions driving digital transformation for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">AI Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">AR/VR Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Blockchain Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/insights" className="text-gray-400 hover:text-white transition-colors">Insights</Link>
              </li>
              <li>
                <Link to="/work" className="text-gray-400 hover:text-white transition-colors">Work</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">info@cognitivedatablocks.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">+91 98989 62002<br />+91 97263 11611</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  841, 1st Block, Solaris Business Hub, Nr. Parshwanath Jain Mandir Bhuyangdev, Sola Rd, Ahmedabad, Gujarat 380013
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} CognitiveDatablocks. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

