interface HeroProps {
  title: string;
  subtitle?: string | React.ReactNode;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'default' | 'large';
  className?: string;
}

export function Hero({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  variant = 'default',
  className = '' 
}: HeroProps) {
  const paddingClass = variant === 'large' ? 'py-24 md:py-32' : 'py-16 md:py-24';
  
  return (
    <section className={`${paddingClass} bg-primary-soft ${className}`}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-text-primary">
          {title}
        </h1>
        {subtitle && (
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed text-text-secondary mb-8">
              {subtitle}
            </p>
          </div>
        )}
        {ctaText && ctaLink && (
          <a href={ctaLink} className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-medium text-lg transition-colors duration-200 hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/20">
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}