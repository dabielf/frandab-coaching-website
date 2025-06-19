import type { Config } from "@react-router/dev/config";

export default {
  // Enable SSR for Cloudflare Workers deployment
  ssr: true,
  // Prerendering is currently disabled due to "getBuiltinModule is not a function" error
  // This error occurs because the prerendering process tries to use Node.js APIs
  // that aren't available in Cloudflare Workers runtime.
  // The site still works with server-side rendering (SSR) on Cloudflare Workers.
  // 
  // TODO: Investigate React Router v7 + Cloudflare Workers prerendering compatibility
  // or consider using Cloudflare's native static asset handling instead.
  future: {
    unstable_viteEnvironmentApi: true,
  },
} satisfies Config;
