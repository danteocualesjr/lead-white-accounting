
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="glass-navbar">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-accounting-800">
            White Accounting
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Button className="bg-accounting-600 hover:bg-accounting-700" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <MobileNavLinks closeMenu={() => setIsMenuOpen(false)} />
              <Button className="w-full bg-accounting-600 hover:bg-accounting-700" asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = () => {
  return (
    <>
      <Link to="/" className="text-foreground hover:text-accounting-600 transition-colors">
        Home
      </Link>
      <Link to="/profile" className="text-foreground hover:text-accounting-600 transition-colors">
        Profile
      </Link>
      <Link to="/services" className="text-foreground hover:text-accounting-600 transition-colors">
        Services
      </Link>
      <Link to="/resources" className="text-foreground hover:text-accounting-600 transition-colors">
        Resources
      </Link>
      <Link to="/client-portal" className="text-foreground hover:text-accounting-600 transition-colors">
        Client Portal
      </Link>
      <Link to="/newsletter" className="text-foreground hover:text-accounting-600 transition-colors">
        Newsletter
      </Link>
      <Link to="/make-a-payment" className="text-foreground hover:text-accounting-600 transition-colors">
        Make a Payment
      </Link>
    </>
  );
};

const MobileNavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <>
      <Link 
        to="/" 
        className="text-foreground hover:text-accounting-600 transition-colors py-2"
        onClick={closeMenu}
      >
        Home
      </Link>
      <Link 
        to="/profile" 
        className="text-foreground hover:text-accounting-600 transition-colors py-2"
        onClick={closeMenu}
      >
        Profile
      </Link>
      <Link 
        to="/services" 
        className="text-foreground hover:text-accounting-600 transition-colors py-2"
        onClick={closeMenu}
      >
        Services
      </Link>
      <Link 
        to="/resources" 
        className="text-foreground hover:text-accounting-600 transition-colors py-2"
        onClick={closeMenu}
      >
        Resources
      </Link>
      <Link 
        to="/client-portal" 
        className="text-foreground hover:text-accounting-600 transition-colors py-2"
        onClick={closeMenu}
      >
        Client Portal
      </Link>
      <Link 
        to="/newsletter" 
        className="text-foreground hover:text-accounting-600 transition-colors py-2"
        onClick={closeMenu}
      >
        Newsletter
      </Link>
      <Link 
        to="/make-a-payment" 
        className="text-foreground hover:text-accounting-600 transition-colors py-2"
        onClick={closeMenu}
      >
        Make a Payment
      </Link>
    </>
  );
};

export default Navbar;
