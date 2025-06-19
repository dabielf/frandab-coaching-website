# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AuDHD (Autism + ADHD) life coaching website for late-diagnosed adults. Built with React Router v7 and deployed on Cloudflare Workers, it's designed with sensory sensitivities and neurodivergent needs in mind. Currently focused on static content delivery.

## Development Commands

### Core Commands
```bash
# Development server with HMR
pnpm run dev

# Production build
pnpm run build

# Preview production build locally
pnpm run preview

# Type checking
pnpm run typecheck

# Deploy to Cloudflare
pnpm run deploy

# Generate Cloudflare types
pnpm run cf-typegen
```

### Deployment Options
```bash
# Direct deployment
pnpm run deploy

# Deploy preview version
pnpm dlx wrangler versions upload

# Promote version to production
pnpm dlx wrangler versions deploy
```

## Project Architecture

### Stack
- **Framework**: React Router v7 with static rendering (SSG)
- **Runtime**: Cloudflare Workers
- **Styling**: TailwindCSS v4
- **TypeScript**: Full type safety with Cloudflare bindings
- **Package Manager**: pnpm
- **Rendering**: Static site generation for content pages

### Directory Structure
```
app/
├── routes/          # React Router file-based routing
├── entry.server.tsx # Server entry point
├── root.tsx         # Root layout component
└── routes.ts        # Route configuration

workers/
└── app.ts          # Cloudflare Worker handler

CONTENT.md          # Complete website content (copy)
STYLE_GUIDE.md      # Comprehensive design system & accessibility guidelines
```

### Key Configuration Files
- `react-router.config.ts` - React Router configuration with SSR enabled
- `wrangler.jsonc` - Cloudflare Workers deployment configuration
- `vite.config.ts` - Build tooling with Cloudflare and TailwindCSS plugins

## Content & Design Philosophy

### Design Principles (from STYLE_GUIDE.md)
1. **Sensory Kindness** - Every visual choice considers sensory sensitivities
2. **Predictable Flexibility** - Consistent patterns with personal adjustment options
3. **Cognitive Clarity** - Information architecture that reduces mental load
4. **Authentic Warmth** - Professional without corporate coldness

### Content Strategy
- **Tone**: Conversational, authentic, and understanding of AuDHD experiences
- **Structure**: Clear hierarchy with generous white space
- **Accessibility**: Built for neurodivergent users with focus on clarity over cleverness
- All website copy is detailed in CONTENT.md for easy reference and editing

### Color System
- Light/dark theme support with CSS custom properties
- Warm, muted colors designed for sensory comfort
- High contrast ratios for accessibility

## Development Notes

### Important Files to Reference
- **CONTENT.md**: All website copy and content structure
- **STYLE_GUIDE.md**: Complete design system, color tokens, and accessibility guidelines
- **BEST_PRACTICES.md**: React Router 7 + Cloudflare Workers optimization guide and best practices
- **README.md**: Basic setup and deployment instructions

### Static Site Approach
- Currently configured for static content delivery
- All pages are statically rendered at build time
- No dynamic server-side functionality needed for current use case
- Future interactive features can be added as needed

### Special Considerations
- No test framework currently configured
- Built for Cloudflare Workers environment
- Uses React Router v7's file-based routing system
- TailwindCSS configured with custom design tokens from style guide
- TypeScript configured for Cloudflare Worker types

### Deployment Context
- Deployed on Cloudflare Workers
- Uses Wrangler CLI for deployment
- Environment variables configured in wrangler.jsonc
- Observability enabled for monitoring