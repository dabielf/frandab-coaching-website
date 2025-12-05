import { Link } from "react-router";
import {
	ArrowRight,
	Battery,
	Brain,
	Calendar,
	Heart,
	Lightbulb,
	MessageCircle,
	Puzzle,
	Sparkles,
	Timer,
	Zap,
} from "lucide-react";
import {
	BodyBase,
	BodyLarge,
	Container,
	H1,
	H2,
	H3,
	Section,
} from "~/components/ui";
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
			{/* Hero Section */}
			<section className="relative pt-18 pb-20 md:pt-28 md:pb-32 bg-primary-soft/30 overflow-hidden">
				{/* Abstract background shape */}
				<div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary-soft to-transparent opacity-60 -z-10 rounded-l-full blur-3xl" />

				<Container size="base">
					<div className="text-center max-w-4xl mx-auto">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-primary/20 text-primary text-sm font-medium mb-8 shadow-sm">
							<Sparkles className="w-4 h-4" />
							<span>Neuro-Affirming Coaching for Late-Diagnosed Adults</span>
						</div>
						<H1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary mb-8 leading-tight">
							Your Brain Isn't Too Much. <br />
							The World Just Isn't Built for Its Brilliance.
						</H1>
						<p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl mx-auto font-medium mb-10">
							<strong>
								Neuro-affirming coaching for late-diagnosed AuDHD adults who are
								ready to stop fighting their brain and start working with it.
							</strong>
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								to="/services"
								className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 hover:-translate-y-1"
							>
								Learn about the Re-Architect's Journey{" "}
								<ArrowRight className="ml-2 w-5 h-5" />
							</Link>
						</div>
					</div>
				</Container>
			</section>

			{/* Does This Sound Like Your Brain? */}
			<Section className="py-20">
				<Container>
					<div className="text-center max-w-3xl mx-auto mb-16">
						<H2 className="text-center mb-12">
							Does This Sound Like Your Brain?
						</H2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
						{[
							{
								text: "You can solve everyone else's problems but feel paralyzed by your own 'simple' daily tasks",
								icon: Puzzle,
							},
							{
								text: "You're simultaneously the most organized and the most chaotic person you know",
								icon: Zap,
							},
							{
								text: "You excel at understanding complex systems but struggle when someone asks 'what's for dinner?'",
								icon: Brain,
							},
							{
								text: "You've mastered the art of appearing 'together' while privately drowning in overwhelm",
								icon: Battery,
							},
							{
								text: "You crave deep, authentic connections but find most social interactions exhausting",
								icon: Heart,
							},
							{
								text: "You can hyperfocus for 12 hours on a passion project but can't remember to pay that bill sitting right in front of you",
								icon: Timer,
							},
						].map((item, i) => (
							<div
								key={i}
								className="bg-surface border border-border p-8 rounded-2xl transition-colors duration-300"
							>
								<div className="w-12 h-12 bg-primary-soft rounded-xl flex items-center justify-center mb-6 text-primary">
									<item.icon className="w-6 h-6" />
								</div>
								<BodyBase className="text-text-secondary leading-relaxed">
									{item.text}
								</BodyBase>
							</div>
						))}
					</div>
					<div className="text-center">
						<BodyBase className="font-semibold text-lg">
							<strong>
								You're not broken. You're not failing. You're AuDHD in a world
								that wasn't designed for your operating system.
							</strong>
						</BodyBase>
					</div>
				</Container>
			</Section>

			{/* About Francois - Personal Touch */}
			<Section background="alt" className="py-20">
				<Container>
					<div className="flex flex-col lg:flex-row gap-12 items-center">
						<div className="lg:w-1/3 flex justify-center">
							{/* Polaroid Effect */}
							<div className="relative group rotate-[-3deg] hover:rotate-0 transition-transform duration-500 ease-out">
								<div className="absolute inset-0 bg-primary/20 rounded-lg blur-md opacity-50" />
								<div className="relative bg-white p-4 pb-12 rounded-lg shadow-lg border border-border">
									<img
										src="/avatar.jpeg"
										alt="Francois Dab"
										className="w-full h-auto rounded-sm aspect-square object-cover filter sepia-[0.1]"
									/>
									<div className="absolute bottom-4 left-0 right-0 text-center font-handwriting text-text-secondary opacity-70">
										Hi, I'm Francois
									</div>
								</div>
							</div>
						</div>

						<div className="lg:w-2/3 space-y-6">
							<H2 className="mb-6">Hi, I'm Francois</H2>
							<div className="space-y-4 text-lg text-text-secondary leading-relaxed">
								<BodyBase>
									At 40, I discovered I wasn't "too intense," "too sensitive,"
									or "too much." I was AuDHD.
								</BodyBase>
								<BodyBase>
									Looking back, the signs were everywhere—including the fact
									that most of my coaching clients before my diagnosis were
									neurodivergent. Game recognizes game, even when we don't have
									the words for it yet.
								</BodyBase>
								<BodyBase>
									My special power? Taking the overwhelming complexity of life
									and breaking it down into something actually manageable.
									(Still working on applying this to my own executive
									dysfunction, but hey, we're all works in progress.)
								</BodyBase>
							</div>
							<div className="pt-4">
								<Link
									to="/about"
									className="inline-flex items-center text-primary font-bold hover:underline underline-offset-4 decoration-2"
								>
									More About My Journey <ArrowRight className="ml-2 w-4 h-4" />
								</Link>
							</div>
						</div>
					</div>
				</Container>
			</Section>

			{/* How I Can Help */}
			<Section className="py-20">
				<Container>
					<div className="text-center mb-16">
						<H2 className="text-center mb-16">How I Can Help</H2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								title: "1-on-1 Coaching",
								subtitle:
									"For when you need personalized strategies that actually work with your brain",
								desc: "Deep dive into your unique flavor of AuDHD and build systems that honor both your need for structure and your craving for flexibility.",
								icon: Lightbulb,
							},
							{
								title: "Relationship Navigation",
								subtitle:
									"Because 'just communicate' isn't helpful when you speak different neurological languages",
								desc: "Master the art of translation between autistic and non-autistic communication styles, set boundaries that stick, and build connections that energize rather than drain.",
								icon: MessageCircle,
							},
							{
								title: "Productivity Decomplexified",
								subtitle:
									"Systems for people whose brains laugh at traditional productivity advice",
								desc: "Transform overwhelming chaos into manageable steps, without pretending you'll suddenly love using a planner.",
								icon: Calendar,
							},
						].map((item, i) => (
							<div
								key={i}
								className="group bg-surface border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
							>
								<div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
									<item.icon className="w-6 h-6" />
								</div>
								<H3 className="text-xl font-bold text-primary mb-4">
									{item.title}
								</H3>
								<p className="font-semibold text-text-secondary mb-3">
									{item.subtitle}
								</p>
								<BodyBase className="text-text-secondary mb-8 flex-grow">
									{item.desc}
								</BodyBase>
								<Link
									to="/services"
									className="inline-flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform duration-300"
								>
									Learn More <ArrowRight className="ml-2 w-4 h-4" />
								</Link>
							</div>
						))}
					</div>
				</Container>
			</Section>

			{/* Social Proof */}
			<Section background="primary-soft" className="py-20">
				<Container>
					<div className="text-center mb-16">
						<H2 className="text-center mb-16">What Clients Say</H2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								quote:
									"Francois gets it in a way that no other coach has. He doesn't try to neurotypical-splain productivity to me. Instead, he helps me see how my AuDHD brain already has its own brilliant systems: they just needed translation.",
								author: "S",
								context: "diagnosed at 37",
							},
							{
								quote:
									"I came to Francois drowning in relationship confusion. He helped me understand that I wasn't 'bad at people'. I was just speaking a different language. Now I can advocate for my needs without apology.",
								author: "M",
								context: "self-discovered at 42",
							},
							{
								quote:
									"The decomplexification thing is real. Francois took my spiral of work overwhelm and broke it down into bite-sized pieces my brain could actually handle. First coach who didn't make me feel more broken.",
								author: "J",
								context: "self-discovered at 35",
							},
						].map((testimonial, i) => (
							<div
								key={i}
								className="bg-surface p-8 rounded-2xl shadow-sm border border-primary/10 relative"
							>
								{/* Quote marks decoration */}
								<div className="absolute top-4 left-6 text-6xl text-primary/10 font-serif leading-none">
									"
								</div>
								<div className="relative z-10">
									<p className="text-lg italic text-text-secondary mb-6 leading-relaxed">
										"{testimonial.quote}"
									</p>
									<div className="flex items-center gap-3">
										<div className="w-8 h-1 bg-primary/20 rounded-full" />
										<p className="text-sm font-bold text-primary">
											- {testimonial.author}, {testimonial.context}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</Container>
			</Section>

			{/* Final CTA */}
			<Section className="py-24">
				<Container size="small">
					<div className="text-center">
						<H2 className="mb-6">Ready to Stop Fighting Your Brain?</H2>
						<BodyLarge className="text-text-secondary mb-10">
							Your AuDHD brain isn't a bug—it's a feature. Let's figure out how
							to work with your unique operating system instead of against it.
						</BodyLarge>
						<Link
							to="/services"
							className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 hover:-translate-y-1"
						>
							Learn about the Re-Architect's Journey{" "}
							<ArrowRight className="ml-2 w-5 h-5" />
						</Link>
					</div>
				</Container>
			</Section>
		</>
	);
}