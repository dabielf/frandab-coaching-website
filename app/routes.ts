import {
	index,
	layout,
	type RouteConfig,
	route,
} from "@react-router/dev/routes";

export default [
	layout("routes/_site-layout.tsx", [
		index("routes/home.tsx"),
		route("/about", "routes/about.tsx"),
		route("/services", "routes/services.tsx"),
		route("/who-i-help", "routes/who-i-help.tsx"),
		route("/faq", "routes/faq.tsx"),
		route("/contact", "routes/contact.tsx"),
		route("/book-call", "routes/book-call.tsx"),
	]),
	layout("routes/tools/_layout.tsx", [
		route("/tools", "routes/tools/index.tsx"),
	]),
	layout("routes/tools/app/_layout.tsx", [
		route("/tools/app", "routes/tools/app/index.tsx"),
	]),
] satisfies RouteConfig;
