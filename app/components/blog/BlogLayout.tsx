import type { PostMeta } from "~/lib/posts";
import { Container, H1, BodyLarge } from "~/components/ui";

interface BlogLayoutProps {
  meta: PostMeta;
  children: React.ReactNode;
}

export function BlogLayout({ meta, children }: BlogLayoutProps) {
  const formattedDate = new Date(meta.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="min-h-screen bg-background">
      <Container size="narrow" className="py-24">
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-text-tertiary mb-4">
            <time dateTime={meta.date}>{formattedDate}</time>
            {meta.readingTime && (
              <>
                <span>•</span>
                <span>{meta.readingTime}</span>
              </>
            )}
            {meta.author && (
              <>
                <span>•</span>
                <span>By {meta.author}</span>
              </>
            )}
          </div>
          
          <H1 className="mb-6">
            {meta.title}
          </H1>
          
          {meta.excerpt && (
            <BodyLarge className="text-text-secondary">
              {meta.excerpt}
            </BodyLarge>
          )}
          
          {meta.tags && meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary-soft text-primary text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        
        <div className="max-w-none">
          {children}
        </div>
      </Container>
    </article>
  );
}