import { cn } from "~/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

export function H1({ children, className, ...props }: HeadingProps) {
  return (
    <h1 
      className={cn("text-3xl md:text-4xl font-semibold tracking-tight text-text-primary", className)} 
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }: HeadingProps) {
  return (
    <h2 
      className={cn("text-2xl md:text-3xl font-semibold tracking-tight text-text-primary", className)} 
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }: HeadingProps) {
  return (
    <h3 
      className={cn("text-xl md:text-2xl font-semibold text-text-primary", className)} 
      {...props}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className, ...props }: HeadingProps) {
  return (
    <h4 
      className={cn("text-lg md:text-xl font-semibold text-text-primary", className)} 
      {...props}
    >
      {children}
    </h4>
  );
}

export function BodyLarge({ children, className, ...props }: TextProps) {
  return (
    <p 
      className={cn("text-lg leading-relaxed text-text-primary", className)} 
      {...props}
    >
      {children}
    </p>
  );
}

export function BodyBase({ children, className, ...props }: TextProps) {
  return (
    <p 
      className={cn("text-base leading-relaxed text-text-primary", className)} 
      {...props}
    >
      {children}
    </p>
  );
}

export function BodySmall({ children, className, ...props }: TextProps) {
  return (
    <p 
      className={cn("text-sm leading-relaxed text-text-primary", className)} 
      {...props}
    >
      {children}
    </p>
  );
}

export function Caption({ children, className, ...props }: TextProps) {
  return (
    <p 
      className={cn("text-xs uppercase tracking-wider font-medium text-text-tertiary", className)} 
      {...props}
    >
      {children}
    </p>
  );
}