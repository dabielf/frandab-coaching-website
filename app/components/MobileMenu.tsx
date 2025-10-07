import { useState } from "react";
import { Link, useLocation } from "react-router";

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

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	return (
		<>
			{/* Mobile Menu Button */}
			<button
				type="button"
				onClick={toggleMenu}
				className="p-2 -mr-2 rounded-lg hover:bg-surface-alt transition-colors md:hidden cursor-pointer"
				aria-label={isOpen ? "Close menu" : "Open menu"}
				aria-expanded={isOpen}
			>
				{isOpen ? (
					<CloseIcon className="w-6 h-6" />
				) : (
					<MenuIcon className="w-6 h-6" />
				)}
			</button>

			{/* Mobile Menu Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
					onClick={closeMenu}
				/>
			)}

			{/* Mobile Menu Panel */}
			<div
				className={`fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-surface border-l border-border z-50 transition-transform duration-300 ease-in-out md:hidden ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="p-6 z-50 bg-surface">
					{/* Close Button */}
					<div className="flex justify-end mb-8">
						<button
							onClick={closeMenu}
							className="p-2 rounded-lg hover:bg-background-alt transition-colors cursor-pointer"
							aria-label="Close menu"
						>
							<CloseIcon className="w-6 h-6" />
						</button>
					</div>

					{/* Navigation Links */}
					<nav className="space-y-4">
						{navItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								target={item.path.startsWith("http") ? "_blank" : "_self"}
								onClick={closeMenu}
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
			</div>
		</>
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

function CloseIcon({ className }: { className?: string }) {
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
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	);
}
