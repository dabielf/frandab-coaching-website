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
		// { path: "/services", label: "Work With Me" },
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
					className="p-2 -mr-2 rounded-lg hover:bg-surface-alt transition-colors md:hidden cursor-pointer"
					aria-label={isOpen ? "Close menu" : "Open menu"}
				>
					<MenuIcon className="w-6 h-6" />
				</button>
			</SheetTrigger>

			{/* We override bg-background with bg-surface to match your theme preference.
        The Sheet component automatically handles the portal/overlay behavior.
      */}
			<SheetContent
				side="right"
				className="w-80 bg-surface border-l border-border p-0"
			>
				<SheetHeader className="sr-only">
					<SheetTitle>Mobile Navigation</SheetTitle>
					<SheetDescription>Main site navigation</SheetDescription>
				</SheetHeader>

				<div className="flex flex-col h-full py-6 px-6 overflow-y-auto">
					{/* Custom Close Button Area (optional, Sheet has a default one too, but this matches your layout) */}
					<div className="flex justify-end mb-8">
						{/* The default Sheet close button is absolute positioned, 
                so we can just use spacing here or rely on the default X */}
					</div>

					<nav className="flex flex-col space-y-4 mt-8">
						{navItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								target={item.path.startsWith("http") ? "_blank" : "_self"}
								onClick={() => setIsOpen(false)}
								className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${
									location.pathname === item.path
										? "bg-primary-soft text-primary"
										: "text-secondary hover:bg-surface-alt hover:text-primary"
								}`}
							>
								{item.label}
							</Link>
						))}
					</nav>
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