import { Link, useLocation } from "react-router";
import { ExternalLink } from "lucide-react";
import { Container } from "~/components/ui";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
	{ path: "/about", label: "About" },
	{ path: "/who-i-help", label: "Who I Help" },
	{ path: "/services", label: "Services" },
	{ path: "/faq", label: "FAQ" },
	{ path: "/contact", label: "Contact" },
];

export function Navigation() {
	const location = useLocation();

	return (
		<nav className="bg-gs-cream/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gs-mist/30">
			<Container size="wide">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Logo/Brand */}
					<Link
						to="/"
						className="hover:opacity-80 transition-opacity"
					>
						<span className="font-serif text-xl md:text-2xl font-semibold text-gs-heading tracking-[-0.01em]">
							Francois Dab
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-1">
						{navItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`font-sans text-sm font-medium px-3 py-2 rounded-xl transition-colors duration-200 tracking-[-0.01em] ${
									location.pathname === item.path
										? "text-gs-ink bg-gs-gold/30"
										: "text-gs-body hover:text-gs-ink hover:bg-gs-gold/20"
								}`}
							>
								{item.label}
							</Link>
						))}

						{/* Blog — visually separated as external */}
						<a
							href="https://dabii.substack.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="font-sans text-sm font-medium px-3 py-2 rounded-xl transition-colors duration-200 tracking-[-0.01em] text-gs-body hover:text-gs-ink hover:bg-gs-gold/20 inline-flex items-center gap-1.5"
						>
							Blog
							<ExternalLink className="w-3 h-3 opacity-50" />
						</a>

						<ThemeToggle />

						{/* CTA — drives the real conversion */}
						<Link
							to="/book-call"
							className="ml-2 bg-gs-ink text-white rounded-2xl px-7 py-2.5 font-sans text-sm font-medium shadow-[0_4px_12px_rgba(67,91,114,0.15)] hover:-translate-y-0.5 hover:bg-gs-ink-hover hover:shadow-[0_6px_16px_rgba(67,91,114,0.2)] transition-all duration-200 gs-press"
						>
							Book a Vibe Check
						</Link>
					</div>

					{/* Mobile Menu */}
					<div className="md:hidden flex items-center">
						<MobileMenu />
					</div>
				</div>
			</Container>
		</nav>
	);
}
