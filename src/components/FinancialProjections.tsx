import React from 'react';
import { DollarSign, TrendingUp, Target, Calendar } from 'lucide-react';

const FinancialProjections: React.FC = () => {
  const projections = [
    { period: 'Year 1', volume: '₹15 Cr', transactions: '50K', growth: '200%' },
    { period: 'Year 2', volume: '₹35 Cr', transactions: '120K', growth: '180%' },
    { period: 'Year 3', volume: '₹75 Cr', transactions: '250K', growth: '150%' },
  ];

  return (
    <section id="financial" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Projections</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SuperPay.in's aggressive growth strategy and expanding service portfolio 
            position us for substantial transaction volume increases, creating significant 
            revenue opportunities for our payment gateway partner.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Transaction Volume Growth</h3>
            <div className="space-y-4">
              {projections.map((proj, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">{proj.period}</h4>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      +{proj.growth}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">Transaction Volume</div>
                      <div className="text-2xl font-bold text-blue-600">{proj.volume}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Monthly Transactions</div>
                      <div className="text-2xl font-bold text-blue-600">{proj.transactions}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Metrics</h3>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Average Transaction Value</h4>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">₹850</div>
                <div className="text-sm text-gray-600">25% increase from last year</div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Conversion Rate</h4>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">3.8%</div>
                <div className="text-sm text-gray-600">Significantly above industry average</div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Chargeback Rate</h4>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">0.2%</div>
                <div className="text-sm text-gray-600">Exceptionally low risk profile</div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Calendar className="h-5 w-5 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Customer Lifetime</h4>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">28 months</div>
                <div className="text-sm text-gray-600">Exceptional customer loyalty</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialProjections;