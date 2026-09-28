'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyUsAndCoverage from '@/components/WhyUsAndCoverage';
import QuoteCalculator from '@/components/QuoteCalculator';
import CtaBanner from '@/components/CtaBanner';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LegalComplianceModal, { PolicyType } from '@/components/LegalComplianceModals';

export default function Home() {
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

  return (
    <main className="min-h-screen bg-[#0B1F33] text-slate-100 flex flex-col font-sans">
      {/* 1. Header Navigation Bar */}
      <Navbar />

      {/* 2. Hero Section: Reliable Freight Transportation Across the United States */}
      <Hero />

      {/* 3. About Us: Dependable, efficient, professional trucking solutions */}
      <AboutSection />

      {/* 4. Freight Services (FTL, LTL, Regional, Long-Distance, Commercial, etc.) */}
      <ServicesSection />

      {/* 5. Why CK Transports & Our Coverage (with US Route Map) */}
      <WhyUsAndCoverage />

      {/* 6. Request a Freight Quote (Pure informational specifications & dispatch contact) */}
      <QuoteCalculator />

      {/* 7. CTA Banner: Let's Move Your Business Forward */}
      <CtaBanner />

      {/* 8. Contact Us: Corporate Address, Phone, Email, Operating Hours */}
      <ContactSection />

      {/* 9. Plain Corporate Footer with Legal Governance Links */}
      <Footer onOpenPolicy={(policy) => setActivePolicy(policy)} />

      {/* Read-Only Legal Compliance Modal (Terms, Privacy, Refund/TONU, Payment Terms) */}
      <LegalComplianceModal
        activePolicy={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </main>
  );
}
