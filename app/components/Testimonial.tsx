interface TestimonialProps {
  quote: string;
  author: string;
  context?: string;
  className?: string;
}

export function Testimonial({ quote, author, context, className = '' }: TestimonialProps) {
  return (
    <blockquote className={`text-lg italic leading-relaxed text-text-secondary text-center ${className}`}>
      "{quote}"
      <cite className="block mt-4 text-sm font-medium text-text-secondary">
        - {author}{context && `, ${context}`}
      </cite>
    </blockquote>
  );
}