import { ContactEmailLink } from "./ui/EmailLink";

export function Footer() {
	return (
		<footer className="bg-gs-cream">
			{/* Pill divider */}
			<div className="flex justify-center pt-16">
				<div className="w-24 h-1 bg-gs-mist rounded-full" />
			</div>

			<div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* Brand */}
					<div>
						<span className="font-serif text-xl font-semibold text-gs-heading tracking-[-0.01em]">
							Francois Dab
						</span>
						<p className="font-sans text-sm leading-relaxed text-gs-body mt-4">
							Neuro-affirming coaching for late-diagnosed AuDHD adults who are
							ready to stop fighting their brain and start working with it.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-serif text-sm font-semibold text-gs-ink mb-4 uppercase tracking-wider">
							Quick Links
						</h4>
						<ul className="space-y-2">
							{[
								{ href: "/about", label: "About" },
								{ href: "/services", label: "Services" },
								{ href: "/who-i-help", label: "Who I Help" },
								{ href: "/faq", label: "FAQ" },
								{ href: "https://dabii.substack.com", label: "Blog", external: true },
							].map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										target={link.external ? "_blank" : undefined}
										rel={link.external ? "noopener noreferrer" : undefined}
										className="font-sans text-gs-body hover:text-gs-ink transition-colors duration-300 text-sm leading-relaxed"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Connect */}
					<div>
						<h4 className="font-serif text-sm font-semibold text-gs-ink mb-4 uppercase tracking-wider">
							Get Started
						</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="/contact"
									className="font-sans text-gs-body hover:text-gs-ink transition-colors duration-300 text-sm leading-relaxed"
								>
									Contact
								</a>
							</li>
							<li>
								<a
									href="/book-call"
									className="font-sans text-gs-body hover:text-gs-ink transition-colors duration-300 text-sm leading-relaxed"
								>
									Book a Vibe Check
								</a>
							</li>
							<li>
								<ContactEmailLink className="font-sans text-gs-body hover:text-gs-ink transition-colors duration-300 text-sm leading-relaxed" />
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8">
					<div className="w-full h-px bg-gs-mist/50 mb-8" />
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="font-sans text-gs-body/70 text-sm leading-relaxed">
							© {new Date().getFullYear()} Francois Dab. All rights reserved.
						</p>
						<p className="font-hand text-gs-ink text-xl text-center mt-2 md:mt-0">
							made with understanding for neurodivergent minds
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
