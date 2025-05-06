
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceHighlights from '@/components/ServiceHighlights';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ResourceLinks from '@/components/ResourceLinks';
import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <ServiceHighlights />
        <WhyChooseUs />
        <Testimonials />
        <ResourceLinks />
        <CTASection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
