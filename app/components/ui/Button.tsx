import { Link } from "react-router";
import { cn } from "~/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  to: string;
}

const getButtonClasses = (variant: ButtonProps['variant'] = 'primary', size: ButtonProps['size'] = 'md') => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-hover focus:ring-primary/20",
    secondary: "bg-secondary-soft text-secondary hover:bg-secondary-soft/80 focus:ring-secondary/20",
    ghost: "text-primary bg-transparent hover:bg-primary-soft focus:ring-primary/20"
  };
  
  return cn(baseClasses, sizeClasses[size], variantClasses[variant]);
};

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(getButtonClasses(variant, size), className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({ variant = 'primary', size = 'md', className, children, to, ...props }: ButtonLinkProps) {
  return (
    <Link
      to={to}
      className={cn(getButtonClasses(variant, size), "no-underline", className)}
      {...props}
    >
      {children}
    </Link>
  );
}