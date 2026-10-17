import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { WhatsAppBookingWizard } from './components/WhatsAppBookingWizard';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PlaceholderEditorModal } from './components/PlaceholderEditorModal';
import { DEFAULT_BUSINESS_CONFIG, PRICING_PACKAGES } from './data/businessData';
import { BusinessConfig, PricingPackage } from './types';

export default function App() {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const [businessConfig, setBusinessConfig] = useState<BusinessConfig>(() => {
    try {
      const saved = localStorage.getItem('carcare_business_config');
      return saved ? JSON.parse(saved) : DEFAULT_BUSINESS_CONFIG;
    } catch {
      return DEFAULT_BUSINESS_CONFIG;
    }
  });

  const [packages, setPackages] = useState<PricingPackage[]>(() => {
    try {
      const saved = localStorage.getItem('carcare_pricing_packages');
      return saved ? JSON.parse(saved) : PRICING_PACKAGES;
    } catch {
      return PRICING_PACKAGES;
    }
  });

  const handleSaveConfig = (newConfig: BusinessConfig) => {
    setBusinessConfig(newConfig);
    try {
      localStorage.setItem('carcare_business_config', JSON.stringify(newConfig));
    } catch {
      // storage unavailable
    }
  };

  const handleSavePackages = (newPackages: PricingPackage[]) => {
    setPackages(newPackages);
    try {
      localStorage.setItem('carcare_pricing_packages', JSON.stringify(newPackages));
    } catch {
      // storage unavailable
    }
  };

  const handleResetDefaults = () => {
    setBusinessConfig(DEFAULT_BUSINESS_CONFIG);
    setPackages(PRICING_PACKAGES);
    try {
      localStorage.removeItem('carcare_business_config');
      localStorage.removeItem('carcare_pricing_packages');
    } catch {
      // storage unavailable
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* 3-Zone Navigation Header */}
      <Header onOpenPlaceholderEditor={() => setIsEditorOpen(true)} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onExplorePackages={() => scrollToSection('packages')} />

        {/* Services Showcase */}
        <Services />

        {/* Service Packages & Pricing */}
        <Pricing
          customPackages={packages}
          onOpenPlaceholderEditor={() => setIsEditorOpen(true)}
        />

        {/* Interactive WhatsApp Booking Builder */}
        <WhatsAppBookingWizard />

        {/* Why Choose Car Care */}
        <WhyChooseUs />

        {/* Detailing Gallery */}
        <Gallery />

        {/* FAQs */}
        <FAQ />

        {/* Contact & Coimbatore Location Details */}
        <ContactLocation
          config={businessConfig}
          onOpenPlaceholderEditor={() => setIsEditorOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer config={businessConfig} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Placeholder Details Configuration Modal */}
      <PlaceholderEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        config={businessConfig}
        onSaveConfig={handleSaveConfig}
        packages={packages}
        onSavePackages={handleSavePackages}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
