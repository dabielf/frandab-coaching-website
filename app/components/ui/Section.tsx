import { cn } from "~/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg';
  background?: 'default' | 'alt' | 'primary-soft';
  className?: string;
  children: React.ReactNode;
}

export function Section({ size = 'md', background = 'default', className, children, ...props }: SectionProps) {
  const sizeClasses = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-20 md:py-32"
  };
  
  const backgroundClasses = {
    default: "bg-background",
    alt: "bg-surface-alt",
    'primary-soft': "bg-primary-soft"
  };
  
  return (
    <section 
      className={cn(sizeClasses[size], backgroundClasses[background], className)} 
      {...props}
    >
      {children}
    </section>
  );
}