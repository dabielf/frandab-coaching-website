import { cn } from "~/lib/utils";

interface ContainerProps {
  size?: 'narrow' | 'base' | 'wide';
  className?: string;
  children: React.ReactNode;
}

export function Container({ size = 'base', className, children }: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-3xl", // 768px - good for reading
    base: "max-w-4xl",   // 1024px - good for content
    wide: "max-w-5xl"    // 1280px - good for headlines
  };
  
  return (
    <div className={cn("mx-auto px-6", sizeClasses[size], className)}>
      {children}
    </div>
  );
}