
import React from 'react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="py-12 bg-accounting-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="text-muted-foreground text-xl mt-4">
              Get in touch with White Accounting Services
            </p>
          </div>
        </div>
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
