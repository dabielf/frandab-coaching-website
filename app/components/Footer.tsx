import { SparkleCluster } from "~/components/doodles";
import { ContactEmailLink } from "./ui/EmailLink";

export function Footer() {
	return (
		<footer className="bg-sd-cream border-t border-sd-sage/20">
			<div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* Brand */}
					<div className="relative">
						<div className="flex items-center gap-2 mb-4">
							<span className="font-heading text-xl font-semibold text-sd-heading">
								Francois Dab
							</span>
							<SparkleCluster className="w-8 h-8 twinkle-2" />
						</div>
						<p className="font-body text-sm leading-relaxed text-sd-dim-text">
							Neuro-affirming coaching for late-diagnosed AuDHD adults who are
							ready to stop fighting their brain and start working with it.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-body text-sm font-semibold text-sd-emerald mb-4 uppercase tracking-wider">
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
										className="font-body text-sd-dim-text hover:text-sd-emerald transition-colors duration-200 text-sm leading-relaxed"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Connect */}
					<div>
						<h4 className="font-body text-sm font-semibold text-sd-emerald mb-4 uppercase tracking-wider">
							Get Started
						</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="/contact"
									className="font-body text-sd-dim-text hover:text-sd-emerald transition-colors duration-200 text-sm leading-relaxed"
								>
									Contact
								</a>
							</li>
							<li>
								<a
									href="/services"
									className="font-body text-sd-dim-text hover:text-sd-emerald transition-colors duration-200 text-sm leading-relaxed"
								>
									Book a Vibe Check Call
								</a>
							</li>
							<li>
								<ContactEmailLink className="font-body text-sd-dim-text hover:text-sd-emerald transition-colors duration-200 text-sm leading-relaxed" />
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-sd-sage/20">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="font-body text-sd-dim-text/70 text-sm leading-relaxed">
							© 2025 Francois Dab. All rights reserved.
						</p>
						<p className="font-handwritten text-sd-emerald/60 text-xl text-center mt-2 md:mt-0">
							made with understanding for neurodivergent minds
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
