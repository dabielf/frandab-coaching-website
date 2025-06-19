declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export const frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    author?: string;
    tags?: string[];
    image?: string;
  };
  export default MDXComponent;
}