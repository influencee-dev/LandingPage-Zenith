/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FisiofitConceptSection } from './components/FisiofitConceptSection';
import { MethodSection } from './components/MethodSection';
import { SubscriptionCardsSection } from './components/SubscriptionCardsSection';
import { CoursesSection } from './components/CoursesSection';
import { ContactFormSection } from './components/ContactFormSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { PrivacyModal } from './components/PrivacyModal';
import { CookieBanner } from './components/CookieBanner';
import { InterestOption } from './types';

export default function App() {
  const [selectedInterest, setSelectedInterest] = useState<InterestOption>('Palestra Fitness');
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Smooth scroll handler to contact form
  const scrollToForm = (interest?: InterestOption) => {
    if (interest) {
      setSelectedInterest(interest);
    }
    const formElement = document.getElementById('form-contatto');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Smooth scroll handler to subscription section
  const scrollToSubscriptions = () => {
    const plansElement = document.getElementById('abbonamenti');
    if (plansElement) {
      plansElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col selection:bg-[#005662] selection:text-white">
      {/* 1. HEADER */}
      <Header onCtaClick={() => scrollToForm()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <HeroSection
          onDiscoverPathClick={() => scrollToForm()}
          onViewPlansClick={scrollToSubscriptions}
        />

        {/* 3. SEZIONE "COS'È UN CENTRO FISIOFIT EXPERT" */}
        <FisiofitConceptSection />

        {/* 4. SEZIONE METODO */}
        <MethodSection />

        {/* 5. SEZIONE ABBONAMENTI */}
        <SubscriptionCardsSection
          onSelectPlan={(plan) => scrollToForm(plan)}
        />

        {/* 6. SEZIONE CORSI */}
        <CoursesSection
          onSelectCourses={(courseInterest) => scrollToForm(courseInterest)}
        />

        {/* 7. SEZIONE CONVERSIONE / FORM */}
        <ContactFormSection
          selectedInterest={selectedInterest}
          onInterestChange={(newInterest) => setSelectedInterest(newInterest)}
          onOpenPrivacy={() => setIsPrivacyOpen(true)}
        />

        {/* 8. CTA FINALE */}
        <FinalCTASection onCtaClick={() => scrollToForm()} />
      </main>

      {/* 9. FOOTER */}
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      {/* MOBILE STICKY CTA */}
      <MobileStickyCTA onCtaClick={() => scrollToForm()} />

      {/* PRIVACY POLICY MODAL */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* COOKIE POPUP / BANNER */}
      <CookieBanner onOpenPrivacy={() => setIsPrivacyOpen(true)} />
    </div>
  );
}
