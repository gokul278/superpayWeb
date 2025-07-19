import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BusinessOverview from './components/BusinessOverview';
import TechnicalRequirements from './components/TechnicalRequirements';
import FinancialProjections from './components/FinancialProjections';
import ComplianceSection from './components/ComplianceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <BusinessOverview />
      <TechnicalRequirements />
      <FinancialProjections />
      <ComplianceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;