import React, { useState } from 'react';
import { Shield, CreditCard, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SuperPay.in</h1>
              <p className="text-sm text-gray-600">Complete Digital Payment Solutions</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">HOME</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">ABOUT</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">SERVICES</a>
              <a href="#policies" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">POLICIES</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">CONTACT US</a>
            </nav>
            <Shield className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Secure & Compliant</span>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-4 py-2 rounded-md hover:bg-gray-50"
              >
                HOME
              </a>
              <a 
                href="#about" 
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-4 py-2 rounded-md hover:bg-gray-50"
              >
                ABOUT
              </a>
              <a 
                href="#services" 
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-4 py-2 rounded-md hover:bg-gray-50"
              >
                SERVICES
              </a>
              <a 
                href="#policies" 
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-4 py-2 rounded-md hover:bg-gray-50"
              >
                POLICIES
              </a>
              <a 
                href="#contact" 
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-4 py-2 rounded-md hover:bg-gray-50"
              >
                CONTACT US
              </a>
              <div className="flex items-center space-x-2 px-4 py-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Secure & Compliant</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;