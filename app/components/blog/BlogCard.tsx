import { Link } from "react-router";
import type { PostMeta } from "~/lib/posts";
import { Card } from "~/components/ui";

export function BlogCard({ slug, title, date, excerpt, readingTime, tags }: PostMeta) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card variant="interactive" className="group">
      <div className="flex items-center gap-4 text-sm text-text-tertiary mb-3">
        <time dateTime={date}>{formattedDate}</time>
        {readingTime && (
          <>
            <span>•</span>
            <span>{readingTime}</span>
          </>
        )}
      </div>
      
      <h2 className="text-xl font-semibold mb-3 text-text-primary group-hover:text-primary transition-colors">
        <Link to={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h2>
      
      <p className="text-text-secondary leading-relaxed mb-4">
        {excerpt}
      </p>
      
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary-soft text-primary text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <Link
        to={`/blog/${slug}`}
        className="inline-flex items-center text-primary font-medium hover:underline"
      >
        Read more
        <span className="ml-1">→</span>
      </Link>
    </Card>
  );
}