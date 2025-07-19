import React from 'react';
import { Code, Shield, Zap, Globe } from 'lucide-react';

const TechnicalRequirements: React.FC = () => {
  const requirements = [
    {
      icon: Code,
      title: 'API Integration',
      description: 'RESTful API integration for utility payments, AEPS, UPI transfers, and recharge services.',
      specs: ['REST APIs', 'Real-time webhooks', 'Mobile SDK', 'Testing environment']
    },
    {
      icon: Shield,
      title: 'Security Standards',
      description: 'RBI compliance, advanced security for AEPS, Aadhar Pay, and financial transactions.',
      specs: ['RBI Guidelines', 'SSL/TLS encryption', 'Biometric security', 'OTP verification']
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Fast utility bill payments, instant recharges, and real-time money transfers.',
      specs: ['<5s processing', '99.5% uptime', 'High availability', 'Load balancing']
    },
    {
      icon: Globe,
      title: 'Indian Market Support',
      description: 'INR processing, local payment methods, and regional language support.',
      specs: ['INR currency', 'UPI integration', 'Regional support', 'Hindi/Tamil']
    }
  ];

  return (
    <section id="technical" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Requirements</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SuperPay.in requires a robust payment gateway infrastructure capable of 
            supporting our diverse service portfolio including utility payments, financial services, 
            money transfers, and e-recharge solutions across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {requirements.map((req, index) => {
            const Icon = req.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{req.title}</h3>
                    <p className="text-gray-600 mb-4">{req.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {req.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="bg-blue-50 px-3 py-1 rounded-full text-sm text-blue-700">
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Integration Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Initial Setup</h4>
              <p className="text-sm text-gray-600">API credentials and sandbox configuration</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Development</h4>
              <p className="text-sm text-gray-600">Integration development and testing</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Testing</h4>
              <p className="text-sm text-gray-600">Comprehensive testing and certification</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Go Live</h4>
              <p className="text-sm text-gray-600">Production deployment and monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalRequirements;