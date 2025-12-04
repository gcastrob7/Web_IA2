import React from 'react';

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, children, icon, className = "" }) => {
  return (
    <div className={`bg-slate-800/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm hover:border-brand-accent/50 transition-colors duration-300 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="text-brand-accent">{icon}</div>}
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="text-slate-300 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default SectionCard;