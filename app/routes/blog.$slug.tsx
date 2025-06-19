import type { Route } from "./+types/blog.$slug";
import { getPostBySlug } from "~/lib/posts";
import { BlogLayout } from "~/components/blog/BlogLayout";
import { useMDXComponents } from "~/components/blog/MDXComponents";
import { MDXProvider } from "@mdx-js/react";
import type React from "react";

// Get all MDX posts using Vite's import.meta.glob() with eager loading for Cloudflare Workers compatibility
const mdxModules = import.meta.glob<{ default: React.ComponentType }>('../posts/*.mdx', { eager: true });

// Create slug-to-component mapping using eager imports
const postComponents = Object.fromEntries(
  Object.entries(mdxModules).map(([path, module]) => {
    // Extract slug from path: ../posts/welcome-to-my-blog.mdx -> welcome-to-my-blog
    const slug = path.replace(/.*\/(.+)\.mdx$/, '$1');
    return [slug, module.default];
  })
);

export function loader({ params }: Route.LoaderArgs) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    throw new Response("Post not found", { status: 404 });
  }
  
  return { post };
}

export function meta({ data }: Route.MetaArgs) {
  if (!data?.post) {
    return [
      { title: "Post Not Found" },
      { name: "description", content: "The requested blog post could not be found." },
    ];
  }

  const { post } = data;
  return [
    { title: `${post.title} - Francois Dab | AuDHD Life Coach` },
    { name: "description", content: post.excerpt },
    { property: "og:title", content: post.title },
    { property: "og:description", content: post.excerpt },
    { property: "og:type", content: "article" },
    { property: "article:author", content: post.author || "Francois Dab" },
    { property: "article:published_time", content: post.date },
    ...(post.tags?.map(tag => ({ property: "article:tag", content: tag })) || []),
  ];
}

export default function BlogPost({ loaderData, params }: Route.ComponentProps) {
  const { post } = loaderData;
  const components = useMDXComponents({});
  const MDXContent = postComponents[params.slug];

  if (!MDXContent) {
    return (
      <BlogLayout meta={post}>
        <div className="flex justify-center py-12">
          <div className="text-text-secondary">Post content not found.</div>
        </div>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout meta={post}>
      <MDXProvider components={components}>
        <MDXContent />
      </MDXProvider>
    </BlogLayout>
  );
}