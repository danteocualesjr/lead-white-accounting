
import React from 'react';
import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose White Accounting Services</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our firm is large enough to offer a full range of professional services, but small enough to give you the individual attention that you deserve.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accounting-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-accounting-600 h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">20+ Years of Experience</h4>
                  <p className="text-muted-foreground">Over two decades of tax and accounting expertise serving the Baltimore area.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accounting-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-accounting-600 h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Low-Pressure Approach</h4>
                  <p className="text-muted-foreground">We believe in providing services in a friendly, supportive, and pressure-free environment.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accounting-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-accounting-600 h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Excellent Client Retention</h4>
                  <p className="text-muted-foreground">Our high client retention rate is a testament to the quality of our services.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accounting-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-accounting-600 h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Small Business Specialists</h4>
                  <p className="text-muted-foreground">Specialized focus on serving small businesses and non-profit organizations.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="glass-card bg-gradient-to-br from-accounting-600 to-accounting-800 text-white">
              <h3 className="text-2xl font-semibold mb-4">Our Business Philosophy</h3>
              <blockquote className="text-xl italic mb-6">
                "Plans fail for lack of counsel, but with many advisers they succeed."
              </blockquote>
              <p className="text-accounting-100 mb-4">- Proverbs 15:22 NIV</p>
              <p className="text-sm">
                Mr. White's business model rests on this biblical and financial principle, ensuring that we provide the guidance and counsel you need to succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
