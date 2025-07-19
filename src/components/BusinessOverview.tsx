import React from 'react';
import { Building2, Globe, Users, TrendingUp, CreditCard, Smartphone, Zap, Banknote } from 'lucide-react';

const BusinessOverview: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Service Categories', value: '3 Major' },
    { icon: Globe, label: 'Service Types', value: '12+' },
    { icon: TrendingUp, label: 'Daily Transactions', value: '1000+' },
    { icon: Building2, label: 'Years in Business', value: '5+' }
  ];

  const services = [
    {
      icon: CreditCard,
      title: 'Financial Services',
      services: ['AEPS', 'SuperPay Cards', 'Aadhar Pay', 'Credit Card Payment']
    },
    {
      icon: Banknote,
      title: 'Money Transfer',
      services: ['Transfer Account', 'UPI Id Transfer']
    },
    {
      icon: Smartphone,
      title: 'E-Recharge',
      services: ['Mobile', 'DTH', 'FASTag', 'Credit Card', 'Rental']
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Overview</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SuperPay.in operates a comprehensive digital payment ecosystem, serving 
            businesses and consumers across India with innovative financial services, 
            money transfer solutions, and e-recharge services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Service Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">{service.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Business Details</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Brand Name:</strong> SuperPay.in</li>
                <li><strong>Industry:</strong> Digital Payment & Financial Services</li>
                <li><strong>Business Type:</strong> Multi-Service Payment Platform</li>
                <li><strong>Location:</strong> Salem, Tamil Nadu, India</li>
                <li><strong>Email:</strong> superpayinfo07@gmail.com</li>
                <li><strong>Mobile:</strong> +91 79045 67701</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Core Services</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Utility Bill Payment Services</li>
                <li>• AEPS & Aadhar Pay Solutions</li>
                <li>• Money Transfer & UPI Services</li>
                <li>• Mobile & DTH Recharge</li>
                <li>• Credit Card Payment Processing</li>
                <li>• FASTag & Rental Payments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOverview;