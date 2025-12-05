import { Link, Outlet } from "react-router";

export default function ToolsLayout() {
	return (
		<div className="min-h-screen bg-surface-alt text-text-primary">
			<header className="border-b border-border bg-surface">
				<div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
					<Link
						to="/"
						className="font-semibold text-primary transition-colors duration-200 hover:text-primary-hover"
					>
						Francois Dab
					</Link>
					<nav className="flex items-center gap-4 text-sm">
						<Link
							to="/tools"
							className="text-text-secondary transition-colors duration-200 hover:text-primary"
						>
							Home
						</Link>
						<Link
							to="/contact"
							className="text-text-secondary transition-colors duration-200 hover:text-primary"
						>
							Get Support
						</Link>
					</nav>
				</div>
			</header>

			<main className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10">
				<Outlet />
			</main>
		</div>
	);
}
