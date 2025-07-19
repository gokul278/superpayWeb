import React from 'react';
import { Shield, FileCheck, Lock, Award } from 'lucide-react';

const ComplianceSection: React.FC = () => {
  const certifications = [
    {
      icon: Shield,
      title: 'PCI DSS Compliance',
      description: 'Level 1 PCI DSS compliance with annual assessments',
      status: 'Certified'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'GDPR and CCPA compliant data handling practices',
      status: 'Compliant'
    },
    {
      icon: FileCheck,
      title: 'Financial Auditing',
      description: 'Annual financial audits by certified public accountants',
      status: 'Current'
    },
    {
      icon: Award,
      title: 'Industry Standards',
      description: 'ISO 27001 and SOC 2 Type II certifications',
      status: 'Certified'
    }
  ];

  return (
    <section id="compliance" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance & Security</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We maintain the highest standards of security and compliance to protect customer data 
            and ensure regulatory adherence across all markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        {cert.status}
                      </span>
                    </div>
                    <p className="text-gray-600">{cert.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Risk Management</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fraud Prevention</h4>
              <p className="text-sm text-gray-600">Advanced ML-based fraud detection with real-time monitoring</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Data Security</h4>
              <p className="text-sm text-gray-600">End-to-end encryption with secure key management</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Regular Audits</h4>
              <p className="text-sm text-gray-600">Quarterly security assessments and penetration testing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;