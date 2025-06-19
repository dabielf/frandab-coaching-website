# Adding Blog Posts

Due to Cloudflare Workers compatibility requirements, we use a manual registry system for blog posts instead of dynamic imports.

## How to Add a New Blog Post

1. **Create your MDX file** in this directory (`app/posts/`)
   - Name it with a URL-friendly slug: `your-post-title.mdx`
   - Include frontmatter with required fields:
   ```mdx
   ---
   title: "Your Post Title"
   date: "YYYY-MM-DD"
   excerpt: "Brief description of your post"
   author: "Author Name"
   tags: ["tag1", "tag2"]
   ---
   
   Your post content here...
   ```

2. **Update the post registry** at `app/lib/post-registry.ts`:
   - Import your new MDX file
   - Add it to the `postRegistry` object
   - Add the content to `postContent` for reading time calculation

3. **Update React Router config** at `react-router.config.ts`:
   - Add your post route to the `blogRoutes` array in the prerender function
   - Format: `/blog/your-post-slug`

## Example

If you're adding a post called `executive-function-hacks.mdx`:

1. In `app/lib/post-registry.ts`:
```typescript
import ExecutiveFunctionPost from '../posts/executive-function-hacks.mdx';

export const postRegistry: Record<string, MDXModule> = {
  // ... existing posts
  'executive-function-hacks': ExecutiveFunctionPost as MDXModule,
};

export const postContent: Record<string, string> = {
  // ... existing content
  'executive-function-hacks': `Your post content here...`,
};
```

2. In `react-router.config.ts`:
```typescript
const blogRoutes = [
  // ... existing routes
  "/blog/executive-function-hacks"
];
```

## Why This Approach?

Cloudflare Workers doesn't support Node.js filesystem APIs or dynamic imports via `import.meta.glob`. This manual registry ensures all blog posts are statically imported at build time, making them compatible with the Workers runtime while maintaining type safety and build-time optimization.