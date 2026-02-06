import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "~/components/ui/sheet";

export function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const navItems = [
		{ path: "/", label: "Home" },
		{ path: "/about", label: "About" },
		{ path: "/who-i-help", label: "Who I Help" },
		{ path: "https://dabii.substack.com/", label: "Blog" },
		{ path: "/faq", label: "FAQ" },
		{ path: "/contact", label: "Contact" },
		{ path: "/services", label: "Work With Me" },
	];

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<button
					type="button"
					className="p-2 -mr-2 rounded-lg hover:bg-sd-sage/15 transition-colors md:hidden cursor-pointer"
					aria-label={isOpen ? "Close menu" : "Open menu"}
				>
					<MenuIcon className="w-6 h-6 text-sd-dim-text" />
				</button>
			</SheetTrigger>

			<SheetContent
				side="right"
				className="w-80 bg-sd-cream border-l border-sd-sage/20 p-0"
			>
				<SheetHeader className="sr-only">
					<SheetTitle>Mobile Navigation</SheetTitle>
					<SheetDescription>Main site navigation</SheetDescription>
				</SheetHeader>

				<div className="flex flex-col h-full py-6 px-6 overflow-y-auto">
					<div className="flex justify-end mb-8" />

					<nav className="flex flex-col space-y-2 mt-8 flex-1">
						{navItems.slice(0, -1).map((item) => (
							<Link
								key={item.path}
								to={item.path}
								target={item.path.startsWith("http") ? "_blank" : "_self"}
								onClick={() => setIsOpen(false)}
								className={`block py-3 px-4 rounded-lg font-body text-lg font-medium transition-colors ${
									location.pathname === item.path
										? "bg-sd-sage/15 text-sd-emerald"
										: "text-sd-dim-text hover:bg-sd-sage/10 hover:text-sd-emerald"
								}`}
							>
								{item.label}
							</Link>
						))}
					</nav>

					{/* CTA button at bottom */}
					<div className="pt-4 pb-2">
						<Link
							to="/services"
							onClick={() => setIsOpen(false)}
							className="block w-full text-center py-3 px-6 rounded-full bg-sd-deep-green text-white font-body font-bold text-lg hover:opacity-90 transition-opacity"
						>
							Work With Me
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
