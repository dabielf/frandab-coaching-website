import type { Route } from "./+types/tools";

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

export default function Tools() {
	return (
		<>
			<div>Tools Page</div>
		</>
	);
}
