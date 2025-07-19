import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">SuperPay.in</h2>
          <h3 className="text-2xl font-semibold text-blue-600 mb-6">
            Complete Digital Payment & Financial Services Platform
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
            SuperPay.in is seeking a strategic payment gateway partnership to power our comprehensive 
            digital payment ecosystem including utility payments, money transfers, e-recharge services, 
            and financial solutions across India.
          </p>
          
          <div className="bg-white rounded-xl p-6 mb-8 max-w-4xl mx-auto shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Utility Payments</h4>
            <p className="text-gray-600 text-left">
              Utility payments are regular charges for essential services like electricity, water, gas, and internet. 
              These payments ensure continued access to daily necessities and are typically billed monthly. 
              Paying on time helps avoid service disruptions or penalties. Modern methods like online and mobile 
              payments make utility bill management easier and faster.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">Multi-Service Platform</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">Utility Bill Payments</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">Financial Services</span>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 mx-auto">
            <span>View Application Details</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;