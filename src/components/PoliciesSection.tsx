import React, { useState } from 'react';
import { FileText, Shield, RefreshCw, X, Truck, AlertCircle } from 'lucide-react';

const PoliciesSection: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  const policies = [
    {
      id: 'terms',
      title: 'Terms & Conditions',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            This website is operated by SuperPay. By accessing or using our website, services, or making a payment through our platform, you agree to comply with and be bound by the following terms and conditions.
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">1. Use of the Website</h4>
              <p className="text-gray-600">You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">2. User Responsibilities</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• You are responsible for maintaining the confidentiality of your account and password.</li>
                <li>• You agree to provide accurate and complete information when using our services.</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">3. Payment Terms</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• All payments made through SuperPay are final and non-refundable unless stated otherwise.</li>
                <li>• SuperPay is not liable for failed transactions due to incorrect information provided by the user.</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">4. Intellectual Property</h4>
              <p className="text-gray-600">All content on this site, including text, graphics, logos, and software, is the property of SuperPay or its content suppliers and is protected by applicable laws.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">5. Limitation of Liability</h4>
              <p className="text-gray-600">SuperPay shall not be liable for any indirect, incidental, or consequential damages resulting from your use of our website or services.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">6. Modifications</h4>
              <p className="text-gray-600">SuperPay reserves the right to update or modify these terms at any time without prior notice. Continued use of the site indicates acceptance of the updated terms.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">7. Governing Law</h4>
              <p className="text-gray-600">These terms are governed by and construed in accordance with the laws of INDIA Tamil Nadu.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            At SuperPay, we are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data when you use our website and services.
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">1. Information We Collect</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Personal details (name, email, phone number, etc.) provided during registration or payment.</li>
                <li>• Transaction details.</li>
                <li>• Technical data such as IP address, browser type, and device information.</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">2. How We Use Your Information</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• To process payments and provide services.</li>
                <li>• To send important updates or notifications.</li>
                <li>• To improve user experience and website performance.</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">3. Data Security</h4>
              <p className="text-gray-600">We implement appropriate technical and organizational measures to protect your data against unauthorized access or loss.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">4. Third-Party Sharing</h4>
              <p className="text-gray-600">We do not sell or rent your personal data. Information may be shared with trusted payment processors or as required by law.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">5. User Rights</h4>
              <p className="text-gray-600">You may request to access, update, or delete your personal information by contacting us.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'refund',
      title: 'Return & Refund Policy',
      icon: RefreshCw,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            We strive to ensure that our customers are fully satisfied with the services provided. If you're not satisfied, please refer to our return and refund terms below:
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">1. Return & Refund Eligibility</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Refund requests must be made within 5 days of the transaction date.</li>
                <li>• Only payments made for services not delivered or technical failures are eligible.</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">2. Refund Mode</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Refunds will be processed to the original payment method (e.g., bank transfer, UPI, or credit/debit card).</li>
                <li>• Processing time may take 5–7 business days depending on your bank or payment gateway.</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">3. Non-Refundable Items</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Services that have already been rendered.</li>
                <li>• Transactions completed using incorrect user data not caused by SuperPay.</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">4. How to Request a Refund</h4>
              <p className="text-gray-600 mb-2">To initiate a refund, please contact our support team at:</p>
              <p className="text-blue-600 font-medium">superpayinfo07@gmail.com</p>
              <p className="text-gray-600">Include your transaction ID, date, and reason for the refund.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cancellation',
      title: 'Cancellation Policy',
      icon: X,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            At SuperPay, we understand that plans may change. Our cancellation policy is designed to be fair and transparent.
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">1. Cancellation Duration</h4>
              <p className="text-gray-600">You can cancel your order or service within 24 hours of the transaction, provided the service has not been initiated or completed.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">2. How to Cancel</h4>
              <p className="text-gray-600 mb-2">To request a cancellation, please contact us immediately with the following details:</p>
              <ul className="text-gray-600 space-y-1">
                <li>• Transaction ID</li>
                <li>• Registered email or phone number</li>
                <li>• Reason for cancellation</li>
              </ul>
              <p className="text-blue-600 font-medium mt-2">📧 Email: superpayinfo07@gmail.com</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'shipping',
      title: 'Shipping Policy',
      icon: Truck,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            Although SuperPay mainly offers digital services, if any physical products or documents are delivered as part of your purchase, the following policy applies:
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">1. Shipping Duration</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• All eligible physical items will be shipped within 3–5 business days of order confirmation.</li>
                <li>• Delivery timelines may vary based on your location and shipping provider.</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">2. Shipping Charges</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Standard shipping is free for orders above ₹500.</li>
                <li>• A flat rate of ₹50 applies to orders below ₹500.</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">3. Shipping Methods</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• We use reliable courier services with tracking for all physical deliveries.</li>
                <li>• Tracking details will be provided via email or SMS once dispatched.</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">4. Delivery Delays</h4>
              <p className="text-gray-600">While we strive for timely delivery, delays may occur due to unforeseen circumstances (weather, strikes, courier delays). We will notify you of any significant delay.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="policies" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Policies & Terms</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please review our comprehensive policies to understand how we operate and protect your interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {policies.map((policy) => {
            const Icon = policy.icon;
            return (
              <button
                key={policy.id}
                onClick={() => setActivePolicy(activePolicy === policy.id ? null : policy.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                  activePolicy === policy.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Icon className={`h-6 w-6 ${activePolicy === policy.id ? 'text-blue-600' : 'text-gray-600'}`} />
                  <h3 className={`font-semibold ${activePolicy === policy.id ? 'text-blue-900' : 'text-gray-900'}`}>
                    {policy.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600">Click to view details</p>
              </button>
            );
          })}
        </div>

        {activePolicy && (
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {policies.find(p => p.id === activePolicy)?.title}
              </h3>
              <button
                onClick={() => setActivePolicy(null)}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="prose max-w-none">
              {policies.find(p => p.id === activePolicy)?.content}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PoliciesSection;