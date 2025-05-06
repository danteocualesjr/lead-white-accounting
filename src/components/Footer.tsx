
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accounting-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">White Accounting Services</h3>
            <p className="mb-4">Professional accounting services with a unique, low-pressure approach.</p>
            <p className="text-accounting-200">
              6077-C Harford Road<br />
              Baltimore, MD 21214
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accounting-300 transition-colors">Home</Link></li>
              <li><Link to="/profile" className="hover:text-accounting-300 transition-colors">Profile</Link></li>
              <li><Link to="/services" className="hover:text-accounting-300 transition-colors">Services</Link></li>
              <li><Link to="/resources" className="hover:text-accounting-300 transition-colors">Resources</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Client Area</h4>
            <ul className="space-y-2">
              <li><Link to="/client-portal" className="hover:text-accounting-300 transition-colors">Client Portal</Link></li>
              <li><Link to="/make-a-payment" className="hover:text-accounting-300 transition-colors">Make a Payment</Link></li>
              <li><Link to="/newsletter" className="hover:text-accounting-300 transition-colors">Newsletter</Link></li>
              <li><Link to="/articles" className="hover:text-accounting-300 transition-colors">Articles</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="mb-2">Phone: (410) 254-3400</p>
            <p className="mb-4">
              <a href="mailto:pwhite@whiteaccounting.com" className="hover:text-accounting-300 transition-colors">
                pwhite@whiteaccounting.com
              </a>
            </p>
            <Link to="/contact" className="text-accounting-300 hover:text-accounting-200 transition-colors font-medium">
              Get in Touch →
            </Link>
          </div>
        </div>

        <div className="border-t border-accounting-800 mt-8 pt-8 text-accounting-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} White Accounting Services, LLC. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-accounting-300 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-accounting-300 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
