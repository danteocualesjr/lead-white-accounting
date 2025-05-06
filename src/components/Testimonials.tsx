
import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

const Testimonial = ({ quote, author, role }: TestimonialProps) => {
  return (
    <div className="glass-card flex flex-col h-full">
      <div className="text-3xl text-accounting-400 mb-4">"</div>
      <p className="text-lg mb-6 flex-grow">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-muted-foreground text-sm">{role}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-accounting-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We pride ourselves on our excellent client retention rate and high-quality service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial 
            quote="White Accounting has been handling our business taxes for over 5 years. Their expertise and attention to detail have saved us thousands of dollars."
            author="Sarah Johnson"
            role="Small Business Owner"
          />
          
          <Testimonial 
            quote="As a non-profit organization, we needed specialized accounting services. Paul and his team have been instrumental in helping us manage our finances effectively."
            author="Michael Thompson"
            role="Executive Director, Local Non-Profit"
          />
          
          <Testimonial 
            quote="I appreciate the low-pressure approach that White Accounting takes. They're always available to answer my questions and provide guidance when needed."
            author="Jennifer Williams"
            role="Individual Client"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
