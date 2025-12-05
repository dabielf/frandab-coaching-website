import type { Route } from "./+types/tools/app";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Tools - Francois Dab" },
		{
			name: "description",
			content:
				"Tools for neurodivergent adults to help them navigate their lives and find support.",
		},
	];
}

export default function ToolsApp() {
	return (
		<>
			<div>App Page</div>
		</>
	);
}
