import { Link, useLocation } from "react-router";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { Container, ButtonLink } from "~/components/ui";

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/who-i-help", label: "Who I Help" },
    { path: "/blog", label: "Blog" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-surface/70 border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <Container size="wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-semibold text-primary hover:text-primary-hover transition-colors duration-200"
          >
            Francois Dab
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-text-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink
              to="/book-call"
              size="sm"
            >
              Book a Call
            </ButtonLink>
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