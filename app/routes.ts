import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  route("/services", "routes/services.tsx"),
  route("/who-i-help", "routes/who-i-help.tsx"),
  route("/faq", "routes/faq.tsx"),
  route("/contact", "routes/contact.tsx"),
  route("/book-call", "routes/book-call.tsx"),
  route("/blog", "routes/blog.tsx"),
  route("/blog/:slug", "routes/blog.$slug.tsx"),
] satisfies RouteConfig;
