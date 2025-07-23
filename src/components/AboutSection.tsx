import React from "react";
import {
  Building2,
  Users,
  Award,
  Target,
  CheckCircle,
  Mail,
  Phone,
} from "lucide-react";

const AboutSection: React.FC = () => {
  const milestones = [
    {
      year: "2019",
      event: "SuperPay.in Founded",
      description: "Started as a digital payment solution provider",
    },
    {
      year: "2020",
      event: "AEPS Integration",
      description: "Launched Aadhaar Enabled Payment System services",
    },
    {
      year: "2021",
      event: "Multi-Service Platform",
      description: "Expanded to utility payments and money transfers",
    },
    {
      year: "2022",
      event: "E-Recharge Services",
      description: "Added mobile, DTH, and FASTag recharge services",
    },
    {
      year: "2023",
      event: "SuperPay Cards",
      description: "Launched our own payment card solutions",
    },
    {
      year: "2024",
      event: "Partnership Expansion",
      description: "Seeking strategic payment gateway partnerships",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Innovation",
      description:
        "Focus on innovation, customer satisfaction, and transparency in all our services",
    },
    {
      icon: Users,
      title: "Customer First",
      description:
        "Dedicated to providing secure, fast, and convenient services for our customers",
    },
    {
      icon: Target,
      title: "Reliability",
      description:
        "Growing as a reliable fintech solution for modern India with trusted platform",
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About SuperPay
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SuperPay is a leading digital payment and utility services platform
            designed to simplify online transactions for individuals and small
            businesses across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
              Our mission is to offer secure, fast, and convenient services such
              as bill payments, recharges, and money transfers — all under one
              trusted platform. With a focus on innovation, customer
              satisfaction, and transparency, SuperPay continues to grow as a
              reliable fintech solution for modern India.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">
                  Secure digital payment solutions
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">
                  Comprehensive utility services
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">
                  Trusted by thousands of users
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">24/7 customer support</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Company Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Building2 className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Registered Address
                  </h4>
                  <p className="text-gray-600 text-sm">
                    SuperPay
                    <br />
                    #1/232, Ayyannavalavu, Ariyagoundampatty
                    <br />
                    Murungapatty PO, Salem-636307
                    <br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Mobile Number</h4>
                  <p className="text-gray-600">+91 7904567701</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">superpayinfo07@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm text-center"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Journey</h3>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex-shrink-0">
                  {milestone.year}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{milestone.event}</h4>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
