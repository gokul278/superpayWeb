import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">SuperPay.in</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Comprehensive digital payment platform providing utility payments, financial services, 
              money transfers, and e-recharge solutions across India. Seeking strategic payment gateway 
              partnerships to accelerate growth and deliver exceptional payment experiences.
            </p>
            <div className="flex space-x-4">
              <span className="bg-green-600 px-3 py-1 rounded-full text-sm">RBI Compliant</span>
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Multi-Service</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors duration-200">About SuperPay</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Our Services</a></li>
              <li><a href="#compliance" className="hover:text-white transition-colors duration-200">Security</a></li>
              <li><a href="#compliance" className="hover:text-white transition-colors duration-200">Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Partnership</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#technical" className="hover:text-white transition-colors duration-200">Gateway Partnership</a></li>
              <li><a href="#technical" className="hover:text-white transition-colors duration-200">Technical Requirements</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Integration Support</a></li>
              <li><a href="#financial" className="hover:text-white transition-colors duration-200">Documentation</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 SuperPay.in. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;