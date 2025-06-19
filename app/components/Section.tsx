interface SectionProps {
  children: React.ReactNode;
  variant?: 'default' | 'small' | 'large';
  background?: 'default' | 'alt' | 'primary-soft';
  container?: 'narrow' | 'base' | 'wide';
  className?: string;
}

export function Section({ 
  children, 
  variant = 'default', 
  background = 'default',
  container = 'base',
  className = '' 
}: SectionProps) {
  const sectionClass = variant === 'small' ? 'py-12 md:py-16' : 
                      variant === 'large' ? 'py-24 md:py-32' : 'py-16 md:py-24';
  
  const bgClass = background === 'alt' ? 'bg-surface-alt' :
                  background === 'primary-soft' ? 'bg-primary-soft' : '';
  
  const containerClass = container === 'narrow' ? 'max-w-3xl mx-auto px-6' :
                         container === 'wide' ? 'max-w-7xl mx-auto px-6' : 'max-w-5xl mx-auto px-6';
  
  return (
    <section className={`${sectionClass} ${bgClass} ${className}`}>
      <div className={containerClass}>
        {children}
      </div>
    </section>
  );
}