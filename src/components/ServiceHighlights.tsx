
import React from 'react';
import { 
  CreditCard, 
  FileText, 
  BarChart,
  Users,
  Calculator,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="glass-card flex flex-col items-start h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="bg-accounting-100 p-3 rounded-xl text-accounting-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link 
        to="/services" 
        className="mt-auto text-accounting-600 hover:text-accounting-700 font-medium flex items-center"
      >
        Learn more →
      </Link>
    </div>
  );
};

const ServiceHighlights = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide a full range of professional accounting services, with individual attention tailored to your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Tax Preparation & Planning" 
            description="Strategic tax planning and expert preparation services for individuals and businesses."
            icon={<FileText size={28} />}
          />
          
          <ServiceCard 
            title="Bookkeeping & Write-Up" 
            description="Accurate and timely bookkeeping services to keep your finances organized."
            icon={<Calculator size={28} />}
          />
          
          <ServiceCard 
            title="Payroll Services" 
            description="Comprehensive payroll solutions to ensure your employees are paid accurately and on time."
            icon={<CreditCard size={28} />}
          />
          
          <ServiceCard 
            title="Business Consulting" 
            description="Strategic advice to help your business grow and overcome financial challenges."
            icon={<BarChart size={28} />}
          />
          
          <ServiceCard 
            title="IRS Representation" 
            description="Professional representation in audits, collections, and appeals before the IRS."
            icon={<Search size={28} />}
          />
          
          <ServiceCard 
            title="Non-Profit Services" 
            description="Specialized accounting services for non-profit organizations in the Baltimore area."
            icon={<Users size={28} />}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
