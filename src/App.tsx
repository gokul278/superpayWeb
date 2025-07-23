import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AboutSection from './components/AboutSection';
import BusinessOverview from './components/BusinessOverview';
import TechnicalRequirements from './components/TechnicalRequirements';
import FinancialProjections from './components/FinancialProjections';
import ComplianceSection from './components/ComplianceSection';
import PoliciesSection from './components/PoliciesSection';
import PoliciesSection from './components/PoliciesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <AboutSection />
      <BusinessOverview />
      <TechnicalRequirements />
      <FinancialProjections />
      <ComplianceSection />
      <PoliciesSection />
      <PoliciesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;