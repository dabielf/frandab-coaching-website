import type { Route } from "./+types/blog";
import { getAllPosts } from "~/lib/posts";
import { BlogCard } from "~/components/blog/BlogCard";
import { Container, H1, BodyLarge } from "~/components/ui";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog - Francois Dab | AuDHD Life Coach" },
    { name: "description", content: "Insights, tools, and strategies for navigating life with AuDHD. Real talk from someone who gets it." },
  ];
}

export function loader() {
  const posts = getAllPosts();
  return { posts };
}

export default function Blog({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;

  return (
    <div className="min-h-screen bg-background">
      <Container className="py-24">
        <header className="mb-12">
          <H1 className="mb-6">
            Blog
          </H1>
          <BodyLarge className="text-text-secondary">
            Insights, tools, and strategies for navigating life with AuDHD. 
            Real talk from someone who gets it.
          </BodyLarge>
        </header>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-secondary">
              No posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}