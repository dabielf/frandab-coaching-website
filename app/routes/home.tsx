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
	Timer,
	Zap,
} from "lucide-react";
import { AmbientBlob, FadeIn, GentleCard, PillDivider } from "~/components/doodles";
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
				"Neuro-affirming coaching for late-diagnosed AuDHD adults who are ready to stop fighting their brain and start working with it. Book your free Vibe Check call today.",
		},
	];
}

export default function Home() {
	const painPoints = [
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
	];

	const services = [
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
	];

	const testimonials = [
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
	];


	return (
		<>
			{/* ═══════════════════════════════════════════
			    HERO
			    ═══════════════════════════════════════════ */}
			<section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden bg-gs-cream">
				{/* Ambient blobs */}
				<AmbientBlob color="gold" position="top-[-10%] right-[-10%]" size="50vw" />
				<AmbientBlob color="mist" position="bottom-[-20%] left-[-10%]" size="40vw" />

				<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
					{/* Handwritten welcome */}
					<p className="font-hand text-gs-ink text-2xl mb-6 rotate-[-2deg] gs-hero-enter gs-hero-delay-1">
						oh hello there!
					</p>

					{/* Uppercase tagline */}
					<p className="font-sans text-sm font-medium mb-8 text-gs-ink tracking-[0.35em] uppercase gs-hero-enter gs-hero-delay-2">
						Neuro-Affirming Coaching for Late-Diagnosed Adults
					</p>

					{/* Main headline */}
					<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 font-semibold leading-[1.2] text-gs-heading tracking-[-0.01em] gs-hero-enter gs-hero-delay-3">
						Your Brain Isn't Too Much.{" "}
						<br />
						<span className="text-gs-ink">
							The World Just Isn't Built for Its Brilliance.
						</span>
					</h1>

					{/* Pill divider */}
					<PillDivider className="mb-8 gs-hero-enter gs-hero-delay-4" />

					{/* Subtitle */}
					<p className="font-sans text-xl md:text-2xl max-w-xl mx-auto mb-16 text-gs-body leading-relaxed gs-hero-enter gs-hero-delay-5">
						<strong className="text-gs-heading">
							Neuro-affirming coaching for late-diagnosed AuDHD adults who are
							ready to stop fighting their brain and start working with it.
						</strong>
					</p>

					{/* Primary CTA */}
					<Link
						to="/services"
						className="group inline-flex items-center gap-3 bg-gs-ink text-white rounded-2xl px-10 py-5 font-sans font-medium text-xl shadow-[0_4px_12px_rgba(67,91,114,0.15)] hover:-translate-y-0.5 hover:bg-gs-ink-hover hover:shadow-[0_6px_16px_rgba(67,91,114,0.2)] transition-all duration-300 gs-press gs-hero-enter gs-hero-delay-5"
					>
						Learn about the Re-Architect's Journey
						<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
					</Link>
				</div>
			</section>

			{/* ═══════════════════════════════════════════
			    PAIN POINTS
			    ═══════════════════════════════════════════ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="mist" position="top-[10%] right-[-15%]" size="35vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							Does This Sound Like Your Brain?
						</h2>
						<PillDivider className="mb-6" />
						<p className="font-hand text-gs-ink text-2xl rotate-[-2deg]">
							what if none of these are flaws?
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
						{painPoints.map((item, i) => (
							<GentleCard key={i}>
								<div className="flex gap-5 items-start">
									<div className="w-14 h-14 rounded-2xl bg-gs-gold/60 text-gs-ink flex items-center justify-center flex-shrink-0">
										<item.icon className="w-7 h-7" />
									</div>
									<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
										{item.text}
									</p>
								</div>
							</GentleCard>
						))}
					</div>

					<GentleCard className="max-w-3xl mx-auto">
						<div className="text-center space-y-4">
							<p className="font-sans text-lg md:text-xl font-medium text-gs-heading leading-relaxed">
								You're not broken. You're not failing. You're AuDHD in a world
								that wasn't designed for your operating system.
							</p>
							<p className="font-hand text-gs-ink text-2xl rotate-[2deg]">
								(yes, YOU. the one reading this right now)
							</p>
						</div>
					</GentleCard>
				</div>
			</section>

			{/* ═══════════════════════════════════════════
			    ABOUT
			    ═══════════════════════════════════════════ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[5%] left-[-15%]" size="35vw" />

				<div className="max-w-4xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							Hi, I'm Francois
						</h2>
						<PillDivider />
					</div>

					<div className="flex flex-col lg:flex-row gap-12 items-center">
						{/* Photo — journal snapshot */}
						<div className="lg:w-1/3 flex flex-col items-center">
							<div className="rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
								<img
									src="/avatar.jpeg"
									alt="Francois Dab"
									className="w-64 h-64 md:w-72 md:h-72 rounded-[1.5rem] object-cover shadow-[0_4px_12px_oklch(0%_0_0/0.08),0_16px_40px_oklch(0%_0_0/0.1)] ring-4 ring-gs-surface/80"
								/>
								<p className="text-center font-hand text-gs-ink text-xl mt-4 rotate-[1deg]">
									Hi, I'm Francois
								</p>
							</div>
						</div>

						{/* Bio text */}
						<div className="lg:w-2/3 space-y-5">
							<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
								At 40, I discovered I wasn't "too intense," "too sensitive," or
								"too much." I was AuDHD.
							</p>
							<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
								Looking back, the signs were everywhere—including the fact that
								most of my coaching clients before my diagnosis were
								neurodivergent. Game recognizes game, even when we don't have the
								words for it yet.
							</p>
							<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
								My special power? Taking the overwhelming complexity of life and
								breaking it down into something actually manageable.
							</p>
							<p className="font-hand text-gs-ink text-xl rotate-[-1deg]">
								(still working on applying this to my own executive dysfunction, but hey, we're all works in progress)
							</p>
							<div className="pt-4">
								<Link
									to="/about"
									className="group inline-flex items-center gap-2 font-sans font-medium text-lg text-gs-ink hover:gap-3 transition-all duration-300"
								>
									More About My Journey
									<ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ═══════════════════════════════════════════
			    SERVICES
			    ═══════════════════════════════════════════ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="mist" position="top-[-10%] left-[-10%]" size="45vw" />
				<AmbientBlob color="gold" position="bottom-[-10%] right-[-10%]" size="35vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							How I Can Help
						</h2>
						<PillDivider className="mb-6" />
						<p className="font-hand text-gs-ink text-2xl rotate-[1deg]">
							pick your adventure!
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{services.map((item, i) => (
							<GentleCard key={i} className="flex flex-col h-full">
								<div className="flex flex-col h-full">
									<div className="w-14 h-14 rounded-2xl bg-gs-gold/60 text-gs-ink flex items-center justify-center flex-shrink-0 mb-5">
										<item.icon className="w-7 h-7" />
									</div>
									<h3 className="font-serif text-2xl mb-3 font-semibold text-gs-heading tracking-[-0.01em]">
										{item.title}
									</h3>
									<p className="font-sans text-base font-medium mb-3 text-gs-ink leading-relaxed">
										{item.subtitle}
									</p>
									<p className="font-sans text-[17px] mb-8 flex-grow text-gs-body leading-relaxed">
										{item.desc}
									</p>
									<Link
										to="/services"
										className="group inline-flex items-center gap-2 font-sans font-medium text-gs-ink hover:gap-3 transition-all duration-300"
									>
										Learn More
										<ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
									</Link>
								</div>
							</GentleCard>
						))}
					</div>
				</div>
			</section>

			{/* ═══════════════════════════════════════════
			    TESTIMONIALS
			    ═══════════════════════════════════════════ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[5%] right-[-10%]" size="30vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							What Clients Say
						</h2>
						<PillDivider className="mb-6" />
						<p className="font-hand text-gs-ink text-2xl rotate-[-1deg]">
							in their own words
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{testimonials.map((t, i) => (
							<GentleCard key={i}>
								<p className="font-sans text-lg md:text-xl italic mb-6 text-gs-heading leading-relaxed">
									"{t.quote}"
								</p>
								<div className="flex items-center gap-3">
									<div className="w-8 h-1 rounded-full bg-gs-gold" />
									<p className="font-sans text-sm font-medium text-gs-ink">
										— {t.author}, {t.context}
									</p>
								</div>
							</GentleCard>
						))}
					</div>
				</div>
			</section>

			{/* ═══════════════════════════════════════════
			    FINAL CTA
			    ═══════════════════════════════════════════ */}
			<section className="py-28 md:py-36 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="mist" position="top-[-10%] left-[-10%]" size="40vw" />
				<AmbientBlob color="gold" position="bottom-[-10%] right-[-5%]" size="30vw" />

				<FadeIn className="max-w-2xl mx-auto px-6 relative z-10 text-center">
					<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
						Ready to Stop Fighting Your Brain?
					</h2>
					<PillDivider className="mb-8" />

					<p className="font-sans text-lg md:text-xl mb-4 text-gs-body leading-relaxed">
						Your AuDHD brain isn't a bug—it's a feature. Let's figure out how
						to work with your unique operating system instead of against it.
					</p>

					<p className="font-hand text-gs-ink text-2xl mb-12 rotate-[-1deg]">
						with kindness, curiosity, and a little bit of play
					</p>

					<Link
						to="/services"
						className="group inline-flex items-center gap-3 bg-gs-ink text-white rounded-2xl px-10 py-5 font-sans font-medium text-xl shadow-[0_4px_12px_rgba(67,91,114,0.15)] hover:-translate-y-0.5 hover:bg-gs-ink-hover hover:shadow-[0_6px_16px_rgba(67,91,114,0.2)] transition-all duration-300 gs-press"
					>
						Learn about the Re-Architect's Journey
						<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
					</Link>
				</FadeIn>
			</section>
		</>
	);
}
