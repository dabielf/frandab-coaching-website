type MDXComponents = {
  [key: string]: React.ComponentType<any>;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-semibold tracking-tight mt-8 mb-4" style={{ color: 'var(--color-text-primary)' }}>
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold tracking-tight mt-8 mb-4" style={{ color: 'var(--color-text-primary)' }}>
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold mt-6 mb-3" style={{ color: 'var(--color-text-primary)' }}>
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'var(--color-text-primary)' }}>
        {children}
      </h4>
    ),
    p: ({ children }: any) => (
      <p className="leading-relaxed mb-6" style={{ color: 'var(--color-text-primary)' }}>
        {children}
      </p>
    ),
    a: ({ href, children }: any) => (
      <a
        href={href}
        className="underline underline-offset-2 hover:opacity-80 transition-opacity"
        style={{ color: 'var(--color-primary)' }}
      >
        {children}
      </a>
    ),
    ul: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-6" style={{ color: 'var(--color-text-primary)' }}>
        {children}
      </ul>
    ),
    ol: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-6" style={{ color: 'var(--color-text-primary)' }}>
        {children}
      </ol>
    ),
    li: ({ children }: any) => (
      <li className="ml-4">
        {children}
      </li>
    ),
    blockquote: ({ children }: any) => (
      <blockquote 
        className="border-l-4 pl-4 py-2 my-6 italic" 
        style={{ 
          borderColor: 'var(--color-primary)', 
          color: 'var(--color-text-secondary)' 
        }}
      >
        {children}
      </blockquote>
    ),
    code: ({ children }: any) => (
      <code 
        className="px-2 py-1 rounded text-sm font-mono"
        style={{ backgroundColor: 'var(--color-surface-alt)' }}
      >
        {children}
      </code>
    ),
    pre: ({ children }: any) => (
      <pre 
        className="border rounded-lg p-4 overflow-x-auto mb-6 font-mono text-sm"
        style={{ 
          backgroundColor: 'var(--color-surface-alt)', 
          borderColor: 'var(--color-border)' 
        }}
      >
        {children}
      </pre>
    ),
    img: ({ src, alt }: any) => (
      <img
        src={src}
        alt={alt}
        className="rounded-lg shadow-sm my-6 max-w-full h-auto"
      />
    ),
    hr: () => (
      <hr className="my-8" style={{ borderColor: 'var(--color-border)' }} />
    ),
    strong: ({ children }: any) => (
      <strong className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
        {children}
      </strong>
    ),
    em: ({ children }: any) => (
      <em className="italic">
        {children}
      </em>
    ),
    ...components,
  };
}