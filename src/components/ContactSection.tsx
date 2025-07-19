import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Partner Together</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to discuss how SuperPay.in can work with your payment gateway? Our team is available to answer your questions 
            and provide additional documentation as needed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">superpayinfo07@gmail.com</p>
                  <p className="text-sm text-gray-500">Business Development Team</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+91 79045 67701</p>
                  <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM IST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">
                    2/55, Ayyannavalavu<br />
                    Ariyagouondampatti, Murungapatti PO<br />
                    Salem, Tamil Nadu - 636 307<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Schedule a Meeting</h4>
                  <p className="text-gray-600">Book a consultation call</p>
                  <button className="mt-2 text-blue-600 hover:text-blue-800 font-medium text-sm">
                    View Available Times →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Next Steps</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Initial Discussion</h4>
                  <p className="text-sm text-gray-600">Schedule a call to discuss partnership terms and requirements</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Documentation Review</h4>
                  <p className="text-sm text-gray-600">Exchange technical documentation and compliance certificates</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Integration Planning</h4>
                  <p className="text-sm text-gray-600">Define integration timeline and technical specifications</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Partnership Agreement</h4>
                  <p className="text-sm text-gray-600">Finalize partnership terms and begin integration process</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Start Partnership Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;