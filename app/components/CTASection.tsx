import { Link } from "react-router";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    link: string;
  };
  secondaryCTA?: {
    text: string;
    link: string;
  };
  footnote?: string;
  background?: 'default' | 'alt' | 'primary-soft';
}

export function CTASection({ 
  title, 
  description, 
  primaryCTA, 
  secondaryCTA, 
  footnote,
  background = 'default' 
}: CTASectionProps) {
  const bgClass = background === 'alt' ? 'bg-surface-alt' :
                  background === 'primary-soft' ? 'bg-primary-soft' : '';

  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 text-text-primary">{title}</h2>
        <div className="max-w-prose mx-auto">
          <p className="text-lg leading-relaxed text-text-secondary mb-8">
            {description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <Link to={primaryCTA.link} className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-medium text-lg transition-colors duration-200 hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/20">
            {primaryCTA.text}
          </Link>
          {secondaryCTA && (
            <Link to={secondaryCTA.link} className="inline-flex items-center px-6 py-3 bg-secondary-soft text-secondary rounded-lg font-medium transition-colors duration-200 hover:bg-secondary/10 focus:outline-none focus:ring-4 focus:ring-secondary/20">
              {secondaryCTA.text}
            </Link>
          )}
        </div>
        {footnote && (
          <p className="text-sm leading-relaxed text-text-tertiary">
            <em>{footnote}</em>
          </p>
        )}
      </div>
    </section>
  );
}