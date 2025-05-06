
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-accounting-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to work with us? Contact us today to schedule a consultation or learn more about our services.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="glass-card h-full">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-500"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-500"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-accounting-600 hover:bg-accounting-700 py-6 text-lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="glass-card h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="bg-accounting-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-accounting-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <p className="text-muted-foreground">(410) 254-3400</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-accounting-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-accounting-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:pwhite@whiteaccounting.com" 
                      className="text-accounting-600 hover:text-accounting-700"
                    >
                      pwhite@whiteaccounting.com
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-accounting-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-accounting-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      6077-C Harford Road<br />
                      Baltimore, MD 21214
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-lg font-medium mb-4">Business Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
