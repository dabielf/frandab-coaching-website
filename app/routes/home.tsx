import { Link } from "react-router";
import { BodyBase, Card, Container, H2, H3, Section } from "~/components/ui";
import { Hero } from "../components/Hero";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{
			title:
				"AuDHD Life Coach - Francois Dab | Neuro-Affirming Coaching for Late-Diagnosed Adults",
		},
		{
			name: "description",
			content:
				"Neuro-affirming coaching for late-diagnosed AuDHD adults who are ready to stop fighting their brain and start working with it. Book your free blueprint call today.",
		},
	];
}

export default function Home() {
	return (
		<>
			<Hero
				title="Your Brain Isn't Too Much. The World Just Isn't Built for Its Brilliance."
				subtitle={
					<strong>
						Neuro-affirming coaching for late-diagnosed AuDHD adults who are
						ready to stop fighting their brain and start working with it.
					</strong>
				}
				ctaText="Learn about the Re-Architect's Journey →"
				ctaLink="/services"
			/>

			{/* Does This Sound Like Your Brain */}
			<Section>
				<Container>
					<H2 className="text-center mb-12">
						Does This Sound Like Your Brain?
					</H2>
					<ul className="space-y-4 mb-8">
						<li className="flex items-start space-x-3">
							<span className="text-primary mt-1">•</span>
							<BodyBase>
								You can solve everyone else's problems but feel paralyzed by
								your own "simple" daily tasks
							</BodyBase>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-primary mt-1">•</span>
							<BodyBase>
								You're simultaneously the most organized and the most chaotic
								person you know
							</BodyBase>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-primary mt-1">•</span>
							<BodyBase>
								You excel at understanding complex systems but struggle when
								someone asks "what's for dinner?"
							</BodyBase>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-primary mt-1">•</span>
							<BodyBase>
								You've mastered the art of appearing "together" while privately
								drowning in overwhelm
							</BodyBase>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-primary mt-1">•</span>
							<BodyBase>
								You crave deep, authentic connections but find most social
								interactions exhausting
							</BodyBase>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-primary mt-1">•</span>
							<BodyBase>
								You can hyperfocus for 12 hours on a passion project but can't
								remember to pay that bill sitting right in front of you
							</BodyBase>
						</li>
					</ul>
					<div className="text-center">
						<BodyBase className="font-semibold">
							<strong>
								You're not broken. You're not failing. You're AuDHD in a world
								that wasn't designed for your operating system.
							</strong>
						</BodyBase>
					</div>
				</Container>
			</Section>

			{/* About Francois */}
			<Section background="alt">
				<Container>
					<H2 className="text-center mb-12">Hi, I'm Francois</H2>
					<div className="text-center space-y-4">
						<BodyBase>
							At 40, I discovered I wasn't "too intense," "too sensitive," or
							"too much." I was AuDHD.
						</BodyBase>
						<BodyBase>
							Looking back, the signs were everywhere—including the fact that
							most of my coaching clients before my diagnosis were
							neurodivergent. Game recognizes game, even when we don't have the
							words for it yet.
						</BodyBase>
						<BodyBase>
							My special power? Taking the overwhelming complexity of life and
							breaking it down into something actually manageable. (Still
							working on applying this to my own executive dysfunction, but hey,
							we're all works in progress.)
						</BodyBase>
						<div className="pt-6">
							<Link
								to="/about"
								className="inline-flex items-center px-6 py-3 text-primary rounded-lg font-medium transition-colors duration-200 hover:bg-primary-soft focus:outline-none focus:ring-4 focus:ring-primary/20"
							>
								More About My Journey →
							</Link>
						</div>
					</div>
				</Container>
			</Section>

			<Section>
				<Container>
					<H2 className="text-center mb-16">How I Can Help</H2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<Card>
							<H3 className="mb-4">1-on-1 Coaching</H3>
							<p className="font-semibold text-text-secondary mb-3">
								For when you need personalized strategies that actually work
								with your brain
							</p>
							<BodyBase className="mb-6">
								Deep dive into your unique flavor of AuDHD and build systems
								that honor both your need for structure and your craving for
								flexibility.
							</BodyBase>
							<Link
								to="/services"
								className="inline-flex items-center px-6 py-3 text-primary rounded-lg font-medium transition-colors duration-200 hover:bg-primary-soft focus:outline-none focus:ring-4 focus:ring-primary/20"
							>
								Learn More →
							</Link>
						</Card>
						<Card>
							<H3 className="mb-4">Relationship Navigation</H3>
							<p className="font-semibold text-text-secondary mb-3">
								Because 'just communicate' isn't helpful when you speak
								different neurological languages
							</p>
							<BodyBase className="mb-6">
								Master the art of translation between autistic and non-autistic
								communication styles, set boundaries that stick, and build
								connections that energize rather than drain.
							</BodyBase>
							<Link
								to="/services"
								className="inline-flex items-center px-6 py-3 text-primary rounded-lg font-medium transition-colors duration-200 hover:bg-primary-soft focus:outline-none focus:ring-4 focus:ring-primary/20"
							>
								Learn More →
							</Link>
						</Card>
						<Card>
							<H3 className="mb-4">Productivity Decomplexified</H3>
							<p className="font-semibold text-text-secondary mb-3">
								Systems for people whose brains laugh at traditional
								productivity advice
							</p>
							<BodyBase className="mb-6">
								Transform overwhelming chaos into manageable steps, without
								pretending you'll suddenly love using a planner.
							</BodyBase>
							<Link
								to="/services"
								className="inline-flex items-center px-6 py-3 text-primary rounded-lg font-medium transition-colors duration-200 hover:bg-primary-soft focus:outline-none focus:ring-4 focus:ring-primary/20"
							>
								Learn More →
							</Link>
						</Card>
					</div>
				</Container>
			</Section>

			<Section background="primary-soft">
				<Container>
					<H2 className="text-center mb-16">What Clients Say</H2>
					<div className="space-y-8">
						<blockquote className="text-lg italic leading-relaxed text-text-secondary text-center">
							"Francois gets it in a way that no other coach has. He doesn't try
							to neurotypical-splain productivity to me. Instead, he helps me
							see how my AuDHD brain already has its own brilliant systems: they
							just needed translation."
							<cite className="block mt-4 text-sm font-medium text-text-secondary">
								- S, diagnosed at 37
							</cite>
						</blockquote>
						<blockquote className="text-lg italic leading-relaxed text-text-secondary text-center">
							"I came to Francois drowning in relationship confusion. He helped
							me understand that I wasn't 'bad at people'. I was just speaking a
							different language. Now I can advocate for my needs without
							apology."
							<cite className="block mt-4 text-sm font-medium text-text-secondary">
								- M, self-discovered at 42
							</cite>
						</blockquote>
						<blockquote className="text-lg italic leading-relaxed text-text-secondary text-center">
							"The decomplexification thing is real. Francois took my spiral of
							work overwhelm and broke it down into bite-sized pieces my brain
							could actually handle. First coach who didn't make me feel more
							broken."
							<cite className="block mt-4 text-sm font-medium text-text-secondary">
								- J, self-discovered at 35
							</cite>
						</blockquote>
					</div>
				</Container>
			</Section>

			<Section>
				<Container>
					<div className="text-center">
						<H2 className="mb-6">Ready to Stop Fighting Your Brain?</H2>
						<div className="max-w-prose mx-auto">
							<BodyBase className="mb-8">
								Your AuDHD brain isn't a bug—it's a feature. Let's figure out
								how to work with your unique operating system instead of against
								it.
							</BodyBase>
						</div>
						<div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
							<Link
								to="/services"
								className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-medium text-lg transition-colors duration-200 hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/20"
							>
								Learn about the Re-Architect's Journey →
							</Link>
						</div>
						{/* <p className="text-sm leading-relaxed text-text-tertiary">
							<em>
								No pressure. No sales pitch. Just two AuDHD brains figuring out
								if we're a good match.
							</em>
						</p> */}
					</div>
				</Container>
			</Section>
		</>
	);
}
