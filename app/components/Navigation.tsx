import { Link, useLocation } from "react-router";
import { Container } from "~/components/ui";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
	const location = useLocation();

	const navItems = [
		{ path: "/", label: "Home" },
		{ path: "/about", label: "About" },
		{ path: "/who-i-help", label: "Who I Help" },
		{ path: "https://dabii.substack.com/", label: "Blog" },
		{ path: "/faq", label: "FAQ" },
		{ path: "/contact", label: "Contact" },
	];

	return (
		<nav className="bg-sd-cream/90 backdrop-blur-sm border-b border-sd-sage/20 sticky top-0 z-50">
			<Container size="wide">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Logo/Brand */}
					<Link
						to="/"
						className="hover:opacity-80 transition-opacity"
					>
						<span className="font-heading text-xl md:text-2xl font-semibold text-sd-heading">
							Francois Dab
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								target={item.path.startsWith("http") ? "_blank" : "_self"}
								className={`font-body text-sm font-medium transition-colors duration-200 hover:text-sd-emerald ${
									location.pathname === item.path
										? "text-sd-emerald"
										: "text-sd-dim-text"
								}`}
							>
								{item.label}
							</Link>
						))}
						<Link
							to="/services"
							className="px-5 py-2 rounded-full bg-sd-deep-green text-white font-body text-sm font-bold hover:opacity-90 transition-opacity cursor-pointer"
						>
							Work With Me
						</Link>
						<ThemeToggle />
					</div>

					{/* Mobile Menu */}
					<div className="md:hidden flex items-center space-x-4">
						<ThemeToggle />
						<MobileMenu />
					</div>
				</div>
			</Container>
		</nav>
	);
}
