import { ContactEmailLink } from "./ui/EmailLink";

export function Footer() {
	return (
		<footer className="bg-surface-alt border-t border-border">
			<div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* Brand */}
					<div>
						<h3 className="text-lg font-semibold text-primary mb-4">
							Francois Dab
						</h3>
						<p className="text-text-secondary text-sm leading-relaxed">
							Neuro-affirming coaching for late-diagnosed AuDHD adults who are
							ready to stop fighting their brain and start working with it.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
							Quick Links
						</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="/about"
									className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm leading-relaxed"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="/services"
									className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm leading-relaxed"
								>
									Services
								</a>
							</li>
							<li>
								<a
									href="/who-i-help"
									className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm leading-relaxed"
								>
									Who I Help
								</a>
							</li>
							<li>
								<a
									href="/faq"
									className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm leading-relaxed"
								>
									FAQ
								</a>
							</li>
							<li>
								<a
									href="https://dabii.substack.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm leading-relaxed"
								>
									Blog
								</a>
							</li>
						</ul>
					</div>

					{/* Connect */}
					<div>
						<h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
							Get Started
						</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="/contact"
									className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm leading-relaxed"
								>
									Contact
								</a>
							</li>
							<li>
								<a
									href="/services"
									className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm leading-relaxed"
								>
									Book a Blueprint Call
								</a>
							</li>
							<li>
								<ContactEmailLink className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm leading-relaxed" />
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-border">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-text-tertiary text-sm leading-relaxed">
							© 2025 Francois Dab. All rights reserved.
						</p>
						<p className="text-text-tertiary text-sm text-center leading-relaxed mt-2 md:mt-0">
							Made with understanding for neurodivergent minds ❤️
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
