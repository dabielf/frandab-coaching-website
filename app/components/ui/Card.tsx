import { cn } from "~/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'basic' | 'interactive';
  className?: string;
  children: React.ReactNode;
}

export function Card({ variant = 'basic', className, children, ...props }: CardProps) {
  const baseClasses = "bg-surface rounded-xl p-6 md:p-8 border border-border";
  
  const variantClasses = {
    basic: "hover:shadow-sm transition-shadow",
    interactive: "hover:border-border-hover hover:shadow-lg transition-all cursor-pointer"
  };
  
  return (
    <div 
      className={cn(baseClasses, variantClasses[variant], className)} 
      {...props}
    >
      {children}
    </div>
  );
}