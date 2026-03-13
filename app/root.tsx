import { useEffect } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
  { rel: "manifest", href: "/site.webmanifest" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&family=Kalam&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log(
      "%cHey there, fellow curious brain \uD83D\uDC4B",
      "font-size: 16px; font-weight: bold; color: #435B72;",
    );
    console.log(
      "%cIf you're inspecting source code, we're probably the same kind of neurodivergent.\nBuilt with care, hyperfocus, and a lot of coffee.\n\nfrandab.com",
      "font-size: 12px; color: #6E635A; line-height: 1.6;",
    );
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Francois Dab - AuDHD Life Coach",
    description: "Neuro-affirming coaching for late-diagnosed AuDHD adults. Specialized support for autism and ADHD individuals.",
    url: "https://frandab.com",
    serviceType: "Life Coaching",
    areaServed: "Worldwide",
    availableLanguage: ["English", "French"],
    provider: {
      "@type": "Person",
      name: "Francois Dab",
      description: "AuDHD life coach specializing in late-diagnosed adults",
      knowsAbout: ["Autism", "ADHD", "AuDHD", "Life Coaching", "Neurodivergence"]
    }
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* SEO Meta Tags */}
        <meta name="author" content="Francois Dab" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#F5F0E8" />
        
        {/* Open Graph */}
        <meta property="og:site_name" content="Francois Dab - AuDHD Life Coach" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@frandab" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Theme init — runs before paint to prevent FOUC */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme:dark)").matches))document.documentElement.classList.add("dark")})()` }} />

        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const is404 = isRouteErrorResponse(error) && error.status === 404;

  if (is404) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
        <p className="font-hand text-gs-ink text-2xl mb-6 rotate-[-2deg]">
          well, this is awkward
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-gs-heading mb-4 tracking-[-0.01em]">
          Page Not Found
        </h1>
        <div className="w-24 h-1 bg-gs-mist mx-auto rounded-full mb-8" />
        <p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed max-w-md mb-8">
          This page wandered off — probably got distracted by something shiny.
        </p>
        <a
          href="/"
          className="group inline-flex items-center gap-2 font-sans font-medium text-lg text-gs-ink hover:gap-3 transition-all duration-300"
        >
          Head back home
          <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
        </a>
      </main>
    );
  }

  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = `Error ${error.status}`;
    details = error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <p className="font-hand text-gs-ink text-2xl mb-6 rotate-[-1deg]">
        something went sideways
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-gs-heading mb-4 tracking-[-0.01em]">
        {message}
      </h1>
      <div className="w-24 h-1 bg-gs-mist mx-auto rounded-full mb-8" />
      <p className="font-sans text-lg text-gs-body leading-relaxed max-w-md mb-8">{details}</p>
      {stack && (
        <pre className="w-full max-w-3xl p-4 overflow-x-auto mt-2 bg-gs-surface rounded-[2rem] text-left">
          <code className="text-sm">{stack}</code>
        </pre>
      )}
      <a
        href="/"
        className="group inline-flex items-center gap-2 font-sans font-medium text-lg text-gs-ink hover:gap-3 transition-all duration-300 mt-6"
      >
        Head back home
        <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
      </a>
    </main>
  );
}
