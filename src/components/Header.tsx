import React from 'react';
import { Shield, CreditCard, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
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
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">HOME</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">SERVICES</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">CONTACT US</a>
            </nav>
            <Shield className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Secure & Compliant</span>
          </div>
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;