
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-accounting-800 to-accounting-900 z-0"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-accounting-700/20 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-accounting-700/10 translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and learn how our professional accounting services can benefit you or your business.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-accounting-800 hover:bg-accounting-100 px-8 py-6 text-lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg" asChild>
              <Link to="/client-portal">Client Portal</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
