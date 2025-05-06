
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calculator, Search } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
}

const ResourceCard = ({ title, description, icon, to }: ResourceCardProps) => {
  return (
    <Link to={to} className="block">
      <div className="glass-card flex flex-col items-start h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="bg-accounting-100 p-3 rounded-xl text-accounting-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
};

const ResourceLinks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Resources</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Access our comprehensive library of tools and information to assist you with your financial needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ResourceCard 
            title="Financial Calculators" 
            description="Useful calculators to help you plan for retirement, calculate loan payments, and more."
            icon={<Calculator size={28} />}
            to="/resources"
          />
          
          <ResourceCard 
            title="Tax Resources" 
            description="Access IRS forms, publications, tax rates, and important due dates."
            icon={<FileText size={28} />}
            to="/resources"
          />
          
          <ResourceCard 
            title="Helpful Links" 
            description="Quick access to the IRS Withholding Calculator, refund status, and more."
            icon={<Search size={28} />}
            to="/resources"
          />
        </div>
      </div>
    </section>
  );
};

export default ResourceLinks;
