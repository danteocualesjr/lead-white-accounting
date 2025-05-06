
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accounting-950/60 to-accounting-900/95 z-0"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-[-1]">
        <AspectRatio ratio={16 / 9} className="h-full">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2426&q=80"
            alt="Professional accounting workspace"
            className="w-full h-full object-cover"
          />
        </AspectRatio>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Accounting Services <br />
            <span className="text-accounting-300">That You Can Trust</span>
          </h1>
          
          <p className="text-white/90 text-xl md:text-2xl mb-8 max-w-2xl">
            Professional and personalized accounting solutions with a unique, low-pressure approach to help you succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-accounting-600 hover:bg-accounting-700 px-8 py-6 text-lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg" asChild>
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{
        clipPath: "ellipse(75% 100% at 50% 100%)"
      }}></div>
    </div>
  );
};

export default Hero;
