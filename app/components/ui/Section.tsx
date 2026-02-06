import { cn } from "~/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg';
  background?: 'default' | 'alt' | 'cream' | 'linen' | 'dark' | 'primary-soft';
  className?: string;
  children: React.ReactNode;
}

export function Section({ size = 'md', background = 'default', className, children, ...props }: SectionProps) {
  const sizeClasses = {
    sm: "py-12 md:py-16",
    md: "py-20 md:py-28",
    lg: "py-24 md:py-32"
  };

  const backgroundClasses = {
    default: "bg-sd-cream",
    cream: "bg-sd-cream",
    alt: "bg-sd-linen",
    linen: "bg-sd-linen",
    dark: "bg-sd-on-dark-bg text-sd-on-dark-text",
    'primary-soft': "bg-primary-soft"
  };

  return (
    <section
      className={cn("overflow-hidden relative", sizeClasses[size], backgroundClasses[background], className)}
      {...props}
    >
      {children}
    </section>
  );
}
