import { Link } from "react-router";

interface CardProps {
  title: string;
  subtitle?: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  interactive?: boolean;
  className?: string;
}

export function Card({ 
  title, 
  subtitle, 
  description, 
  ctaText, 
  ctaLink, 
  interactive = false,
  className = '' 
}: CardProps) {
  const cardClass = interactive 
    ? 'bg-surface rounded-xl p-6 md:p-8 border border-border transition-all duration-200 cursor-pointer hover:border-border-hover hover:shadow-md'
    : 'bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm';
  
  return (
    <div className={`${cardClass} ${className}`}>
      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-text-primary">{title}</h3>
      {subtitle && (
        <p className="font-semibold text-text-secondary mb-3">{subtitle}</p>
      )}
      <p className="text-base leading-relaxed text-text-secondary mb-6">
        {description}
      </p>
      {ctaText && ctaLink && (
        <Link to={ctaLink} className="inline-flex items-center px-6 py-3 text-primary rounded-lg font-medium transition-colors duration-200 hover:bg-primary-soft focus:outline-none focus:ring-4 focus:ring-primary/20">
          {ctaText}
        </Link>
      )}
    </div>
  );
}