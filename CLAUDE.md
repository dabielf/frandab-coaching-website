# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AuDHD (Autism + ADHD) life coaching website for late-diagnosed adults. Built with React Router v7 and deployed on Cloudflare Workers, it's designed with sensory sensitivities and neurodivergent needs in mind.

**Domain**: frandab.com

## Development Commands

### Core Commands
```bash
# Development server with HMR
pnpm run dev

# Production build
pnpm run build

# Preview production build locally
pnpm run preview

# Type checking (includes cf-typegen and react-router typegen)
pnpm run typecheck

# Deploy to Cloudflare
pnpm run deploy

# Generate Cloudflare types
pnpm run cf-typegen
```

### Deployment Options
```bash
# Direct deployment (build + deploy)
pnpm run deploy

# Deploy preview version
pnpm dlx wrangler versions upload

# Promote version to production
pnpm dlx wrangler versions deploy
```

## Project Architecture

### Stack
- **Framework**: React Router v7.5 with server-side rendering (SSR)
- **Runtime**: Cloudflare Workers
- **React**: v19.1
- **Styling**: TailwindCSS v4 with custom design tokens
- **UI Components**: shadcn/ui (new-york style)
- **TypeScript**: v5.8 with strict mode
- **Package Manager**: pnpm
- **Email**: Resend API for contact forms

### Directory Structure
```
app/
├── components/          # React components
│   ├── ui/             # shadcn/ui base components (Button, Card, Input, etc.)
│   ├── Navigation.tsx  # Main navbar
│   ├── Footer.tsx      # Site footer
│   ├── ThemeToggle.tsx # Light/dark mode switcher
│   └── MobileMenu.tsx  # Mobile navigation drawer
├── routes/              # React Router file-based routes
│   ├── _site-layout.tsx # Main layout wrapper (Navigation + Footer)
│   ├── home.tsx        # Homepage (/)
│   ├── about.tsx       # About page (/about)
│   ├── services.tsx    # Services page (/services)
│   ├── who-i-help.tsx  # Target audience (/who-i-help)
│   ├── faq.tsx         # FAQ page (/faq)
│   ├── contact.tsx     # Contact form (/contact)
│   ├── book-call.tsx   # Call booking (/book-call)
│   └── tools/          # Tools section (nested routes)
├── lib/                 # Utility libraries
│   ├── utils.ts        # cn() helper for Tailwind class merging
│   └── email.ts        # Resend email integration
├── hooks/               # Custom React hooks
│   └── use-mobile.ts   # Mobile breakpoint detection (768px)
├── root.tsx             # Root layout (HTML shell, SEO, theme script)
├── entry.server.tsx     # SSR entry point with streaming
├── routes.ts            # Route configuration
└── app.css              # Global styles with design tokens

workers/
└── app.ts              # Cloudflare Workers entry point

public/                  # Static assets (favicons, PWA icons, avatar)
```

### Key Configuration Files
- `react-router.config.ts` - React Router configuration (SSR enabled)
- `wrangler.jsonc` - Cloudflare Workers configuration
- `vite.config.ts` - Vite build with Cloudflare, TailwindCSS plugins
- `components.json` - shadcn/ui configuration
- `tsconfig.json` - Main TypeScript config with `~/*` path alias

## Routes

| Path | File | Description |
|------|------|-------------|
| `/` | `home.tsx` | Homepage with hero and overview |
| `/about` | `about.tsx` | Coach background and philosophy |
| `/services` | `services.tsx` | Detailed service offerings |
| `/who-i-help` | `who-i-help.tsx` | Target audience details |
| `/faq` | `faq.tsx` | Frequently asked questions |
| `/contact` | `contact.tsx` | Contact form (uses Resend) |
| `/book-call` | `book-call.tsx` | Discovery call booking |
| `/tools/*` | `tools/` | Tools section (nested layout) |

All main routes use `_site-layout.tsx` which provides Navigation and Footer.

## Email Integration

Contact form emails are sent via Resend API. The `sendContactEmail()` function in `app/lib/email.ts` handles this.

**Required environment variable**: `RESEND_API_KEY`

## Styling

### Design Tokens (app/app.css)
Custom CSS properties for theming:
- Light theme: warm off-white backgrounds, teal primary (#2d5a4e)
- Dark theme: dark backgrounds, lighter teal (#7fb5a3)
- Fonts: Lexend (sans), JetBrains Mono (code)

### Tailwind Configuration
- Uses TailwindCSS v4 with `@tailwindcss/vite` plugin
- Custom tokens via `@theme inline` in CSS
- Dark mode via `@custom-variant dark` selector
- Motion preferences respected (`prefers-reduced-motion`)

### UI Components
Built on shadcn/ui (new-york style) with Radix UI primitives:
- Button, Card, Input, Sheet, Sidebar, Separator, Tooltip, Skeleton
- Custom: Container, Typography, Section, EmailLink

## Content & Design Philosophy

### Design Principles (from STYLE_GUIDE.md)
1. **Sensory Kindness** - Every visual choice considers sensory sensitivities
2. **Predictable Flexibility** - Consistent patterns with personal adjustment options
3. **Cognitive Clarity** - Information architecture that reduces mental load
4. **Authentic Warmth** - Professional without corporate coldness

### Content Strategy
- **Tone**: Conversational, authentic, understanding of AuDHD experiences
- **Structure**: Clear hierarchy with generous white space
- **Accessibility**: Built for neurodivergent users, clarity over cleverness

## Environment Variables

### Development (.dev.vars)
```
RESEND_API_KEY=your_api_key_here
```

### Production
Configure in Cloudflare Workers dashboard or wrangler.jsonc.

## Important Documentation Files
- **CONTENT.md**: All website copy and content structure
- **STYLE_GUIDE.md**: Complete design system, color tokens, accessibility guidelines
- **BEST_PRACTICES.md**: React Router 7 + Cloudflare Workers optimization guide
- **CLOUDFLARE_COMPATIBILITY.md**: Cloudflare-specific compatibility notes
- **README.md**: Basic setup and deployment instructions

## Development Notes

### Known Constraints
- **Prerendering disabled**: Due to Cloudflare Workers not supporting all Node.js APIs required by React Router prerendering. Site uses SSR instead.
- **No test framework**: Type checking via `pnpm run typecheck` only

### Path Alias
Use `~/` to import from the `app/` directory:
```typescript
import { Button } from "~/components/ui/Button"
import { cn } from "~/lib/utils"
```

### TypeScript
- Strict mode enabled
- Cloudflare Worker types via `worker-configuration.d.ts`
- React Router types auto-generated in `.react-router/types/`

### Deployment
- Deployed on Cloudflare Workers edge network
- Wrangler CLI for deployment (`pnpm run deploy`)
- Observability enabled for monitoring
- Compatibility date: 2025-04-04
- nodejs_compat flag enabled
