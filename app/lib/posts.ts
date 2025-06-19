export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  image?: string;
  readingTime: string;
}

export interface Post extends PostMeta {
  content: string;
}

// Calculate reading time (rough estimate: 200 words per minute)
function calculateReadingTime(content: any): string {
  // Handle various content types
  let textContent = '';
  
  if (typeof content === 'string') {
    textContent = content;
  } else if (content && typeof content === 'object') {
    // If content is an object with a default export (common with Vite imports)
    textContent = content.default || content.content || String(content);
  } else {
    textContent = String(content || '');
  }
  
  if (!textContent || typeof textContent !== 'string') {
    return '2 min read'; // fallback
  }
  
  const wordCount = textContent.split(/\s+/).filter(word => word.length > 0).length;
  const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${readingTimeMinutes} min read`;
}

// Generate post manifest using React Router v7 idiomatic approach
function generatePostManifest(): PostMeta[] {
  // Use eager imports for build-time content discovery - React Router v7 recommended approach
  const mdxModules = import.meta.glob('../posts/*.mdx', { eager: true });
  const mdxRawContent = import.meta.glob('../posts/*.mdx', { query: '?raw', eager: true });
  
  const posts: PostMeta[] = [];
  
  for (const [path, module] of Object.entries(mdxModules)) {
    try {
      // Extract slug from path: ../posts/welcome-to-my-blog.mdx -> welcome-to-my-blog
      const slug = path.replace(/.*\/(.+)\.mdx$/, '$1');
      
      // Get raw content for reading time calculation
      const rawContentModule = mdxRawContent[path];
      let rawContent = '';
      if (rawContentModule) {
        if (typeof rawContentModule === 'string') {
          rawContent = rawContentModule;
        } else if (rawContentModule && typeof rawContentModule === 'object' && 'default' in rawContentModule) {
          rawContent = (rawContentModule as any).default;
        }
      }
      
      // Access frontmatter from the processed MDX module
      const mdxModule = module as any;
      const frontmatter = mdxModule.frontmatter;
      
      if (frontmatter && frontmatter.title && frontmatter.date) {
        posts.push({
          slug,
          title: frontmatter.title,
          date: frontmatter.date,
          excerpt: frontmatter.excerpt || '',
          author: frontmatter.author || 'Francois Dab',
          tags: frontmatter.tags || [],
          readingTime: frontmatter.readingTime || calculateReadingTime(rawContent),
          ...(frontmatter.image && { image: frontmatter.image })
        });
      }
    } catch (error) {
      console.warn(`Failed to load post from ${path}:`, error);
    }
  }
  
  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Memoize the manifest to avoid regenerating on every call
let cachedManifest: PostMeta[] | null = null;

function getPostManifest(): PostMeta[] {
  if (!cachedManifest) {
    cachedManifest = generatePostManifest();
  }
  return cachedManifest;
}

export function getAllPosts(): PostMeta[] {
  return getPostManifest();
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getPostManifest();
  const post = posts.find(p => p.slug === slug);
  
  if (!post) {
    return null;
  }
  
  return {
    ...post,
    content: '', // Content is handled by the MDX component itself
  };
}

export function getAllPostSlugs(): string[] {
  const posts = getPostManifest();
  return posts.map(post => post.slug);
}