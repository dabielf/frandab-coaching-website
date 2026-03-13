import { useState } from "react";
import { Link, useLocation } from "react-router";
import { ExternalLink } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "~/components/ui/sheet";

const navItems = [
	{ path: "/about", label: "About" },
	{ path: "/who-i-help", label: "Who I Help" },
	{ path: "/services", label: "Services" },
	{ path: "/faq", label: "FAQ" },
	{ path: "/contact", label: "Contact" },
];

export function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<button
					type="button"
					className="p-2 -mr-2 rounded-2xl hover:bg-gs-gold/40 transition-all duration-200 md:hidden cursor-pointer"
					aria-label={isOpen ? "Close menu" : "Open menu"}
				>
					<MenuIcon className="w-6 h-6 text-gs-body" />
				</button>
			</SheetTrigger>

			<SheetContent
				side="right"
				className="w-80 bg-gs-cream border-l border-gs-mist/30 p-0"
			>
				<SheetHeader className="sr-only">
					<SheetTitle>Mobile Navigation</SheetTitle>
					<SheetDescription>Main site navigation</SheetDescription>
				</SheetHeader>

				<div className="flex flex-col h-full py-6 px-6 overflow-y-auto">
					<div className="flex justify-end mb-8" />

					<nav className="flex flex-col space-y-1 mt-8 flex-1">
						{navItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								onClick={() => setIsOpen(false)}
								className={`block py-3 px-4 rounded-2xl font-sans text-lg font-medium transition-all duration-200 tracking-[-0.01em] ${
									location.pathname === item.path
										? "bg-gs-gold/30 text-gs-ink"
										: "text-gs-body hover:bg-gs-gold/30 hover:text-gs-ink"
								}`}
							>
								{item.label}
							</Link>
						))}

						{/* Blog — separated with subtle divider */}
						<div className="pt-2 mt-2 border-t border-gs-mist/30">
							<a
								href="https://dabii.substack.com/"
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => setIsOpen(false)}
								className="flex items-center justify-between py-3 px-4 rounded-2xl font-sans text-lg font-medium text-gs-body hover:bg-gs-gold/30 hover:text-gs-ink transition-all duration-200 tracking-[-0.01em]"
							>
								Blog
								<ExternalLink className="w-4 h-4 opacity-40" />
							</a>
						</div>
					</nav>

					{/* Theme toggle + CTA at bottom */}
					<div className="pt-4 pb-2 space-y-4">
						<div className="flex items-center justify-between px-4">
							<span className="font-sans text-sm text-gs-body">Theme</span>
							<ThemeToggle />
						</div>
						<Link
							to="/book-call"
							onClick={() => setIsOpen(false)}
							className="block w-full text-center py-4 px-6 rounded-2xl bg-gs-ink text-white font-sans font-medium text-lg shadow-[0_4px_12px_rgba(67,91,114,0.15)] hover:bg-gs-ink-hover transition-all duration-200 gs-press"
						>
							Book a Vibe Check
						</Link>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}

function MenuIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	);
}
