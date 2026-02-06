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
import {
	BigDoodleLeaf,
	DoodleCard,
	ScribblyUnderline,
	SparkleCluster,
	WavyDivider,
} from "~/components/doodles";
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
			    HERO — cream background, maximum decoration
			    ═══════════════════════════════════════════ */}
			<section className="relative pt-18 pb-20 md:pt-28 md:pb-32 overflow-hidden bg-sd-cream">
				{/* Background decorations */}
				<BigDoodleLeaf className="absolute top-20 left-4 w-20 h-28 float-b1" />
				<SparkleCluster className="absolute top-[20%] right-8 w-10 h-10 twinkle-2" />
				<SparkleCluster className="absolute bottom-[30%] left-8 w-14 h-14 twinkle-1" />

				<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
					{/* Handwritten welcome */}
					<p className="font-handwritten text-sd-gold text-3xl mb-6" style={{ transform: "rotate(-3deg)" }}>
						oh hello there!
					</p>

					{/* Uppercase tagline */}
					<p className="font-body text-sm font-medium mb-8 text-sd-emerald tracking-[0.35em] uppercase">
						Neuro-Affirming Coaching for Late-Diagnosed Adults
					</p>

					{/* Main headline */}
					<h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 font-semibold leading-[1.25] text-sd-heading">
						Your Brain Isn't Too Much.{" "}
						<br />
						<em className="text-sd-emerald">
							The World Just Isn't Built for Its Brilliance.
						</em>
					</h1>

					<ScribblyUnderline colorVar="--sd-gold" className="w-48 md:w-64 mb-8" />

					{/* Subtitle */}
					<p className="font-body text-xl md:text-2xl max-w-xl mx-auto mb-12 text-sd-dim-text leading-[2]">
						<strong>
							Neuro-affirming coaching for late-diagnosed AuDHD adults who are
							ready to stop fighting their brain and start working with it.
						</strong>
					</p>

					{/* Primary CTA */}
					<Link
						to="/services"
						className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-body font-bold text-xl transition-transform duration-200 ease-out hover:-translate-y-2 hover:scale-105 bg-sd-deep-green shadow-[0_12px_35px_var(--sd-deep-green)/0.3]"
					>
						Learn about the Re-Architect's Journey
						<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
					</Link>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-linen" />

			{/* ═══════════════════════════════════════════
			    PAIN POINTS — linen background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-linen">
				<SparkleCluster className="absolute top-12 right-12 w-10 h-10 twinkle-1" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
							Does This Sound Like Your Brain?
						</h2>
						<ScribblyUnderline colorVar="--sd-emerald" className="w-56 md:w-72 mb-4" />
						<p className="font-handwritten text-sd-emerald text-2xl">
							what if none of these are flaws?
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
						{painPoints.map((item, i) => (
							<DoodleCard key={i}>
								<div className="flex gap-5 items-start">
									<div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-sd-sage/15 text-sd-emerald">
										<item.icon className="w-7 h-7" />
									</div>
									<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
										{item.text}
									</p>
								</div>
							</DoodleCard>
						))}
					</div>

					<DoodleCard className="max-w-3xl mx-auto">
						<div className="text-center space-y-3">
							<p className="font-body text-lg md:text-xl font-semibold text-sd-text leading-[2]">
								<strong>
									You're not broken. You're not failing. You're AuDHD in a world
									that wasn't designed for your operating system.
								</strong>
							</p>
							<p className="font-handwritten text-sd-gold text-2xl" style={{ transform: "rotate(2deg)" }}>
								(yes, YOU. the one reading this right now)
							</p>
						</div>
					</DoodleCard>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-cream" />

			{/* ═══════════════════════════════════════════
			    ABOUT — cream background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-cream">
				<SparkleCluster className="absolute top-16 left-8 w-10 h-10 twinkle-2" />

				<div className="max-w-4xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
							Hi, I'm Francois
						</h2>
						<ScribblyUnderline colorVar="--sd-sage" className="w-36 md:w-48 mb-4" />
					</div>

					<div className="flex flex-col lg:flex-row gap-12 items-center">
						{/* Photo — polaroid-style with doodle border */}
						<div className="lg:w-1/3 flex flex-col items-center relative">
							<DoodleCard className="p-0">
								<div className="p-4 pb-14">
									<img
										src="/avatar.jpeg"
										alt="Francois Dab"
										className="w-full h-auto rounded-sm aspect-square object-cover"
										style={{ maxWidth: "280px" }}
									/>
									<p className="absolute bottom-8 left-0 right-0 text-center font-handwritten text-sd-dim-text text-xl">
										Hi, I'm Francois
									</p>
								</div>
							</DoodleCard>
							</div>

						{/* Bio text */}
						<div className="lg:w-2/3 space-y-5">
							<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
								At 40, I discovered I wasn't "too intense," "too sensitive," or
								"too much." I was AuDHD.
							</p>
							<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
								Looking back, the signs were everywhere—including the fact that
								most of my coaching clients before my diagnosis were
								neurodivergent. Game recognizes game, even when we don't have the
								words for it yet.
							</p>
							<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
								My special power? Taking the overwhelming complexity of life and
								breaking it down into something actually manageable. (Still
								working on applying this to my own executive dysfunction, but hey,
								we're all works in progress.)
							</p>
							<div className="pt-4">
								<Link
									to="/about"
									className="group inline-flex items-center gap-2 font-body font-bold text-lg hover:gap-3 transition-all text-sd-emerald"
								>
									More About My Journey
									<ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-on-dark-bg" />

			{/* ═══════════════════════════════════════════
			    SERVICES — deepGreen dark section
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-on-dark-bg">
				<SparkleCluster className="absolute top-12 right-16 w-10 h-10 twinkle-1" />
				<SparkleCluster className="absolute bottom-16 left-12 w-12 h-12 twinkle-3" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-on-dark-heading">
							How I Can Help
						</h2>
						<ScribblyUnderline colorVar="--sd-gold" className="w-48 md:w-64 mb-4" />
						<p className="font-handwritten text-sd-on-dark-dim text-2xl">
							pick your adventure!
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						{services.map((item, i) => (
							<div
								key={i}
								className="doodle-hover rounded-2xl flex flex-col h-full border-2 border-dashed border-sd-on-dark-dim/15 bg-sd-on-dark-text/5"
							>
								<div className="p-8 md:p-10 flex flex-col h-full">
									<div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 mb-5 bg-sd-on-dark-dim/20 text-sd-gold">
										<item.icon className="w-7 h-7" />
									</div>
									<h3 className="font-heading text-2xl mb-3 font-semibold text-sd-on-dark-heading">
										{item.title}
									</h3>
									<p className="font-body text-base font-semibold mb-3 text-sd-on-dark-dim leading-relaxed">
										{item.subtitle}
									</p>
									<p className="font-body text-[17px] mb-8 flex-grow text-sd-on-dark-text/75 leading-[2]">
										{item.desc}
									</p>
									<Link
										to="/services"
										className="group inline-flex items-center gap-2 font-body font-medium hover:gap-3 transition-all text-sd-gold"
									>
										Learn More
										<ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-cream" />

			{/* ═══════════════════════════════════════════
			    TESTIMONIALS — cream background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-cream">
				<SparkleCluster className="absolute top-10 left-12 w-10 h-10 twinkle-1" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
							What Clients Say
						</h2>
						<ScribblyUnderline colorVar="--sd-gold" className="w-48 md:w-64 mb-4" />
						<p className="font-handwritten text-sd-emerald text-2xl">
							in their own words
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{testimonials.map((t, i) => (
							<DoodleCard key={i}>
								<p className="font-heading text-lg md:text-xl italic mb-6 font-normal text-sd-text leading-[2]">
									"{t.quote}"
								</p>
								<div className="flex items-center gap-3">
									<div className="w-8 h-1 rounded-full bg-sd-emerald/30" />
									<p className="font-body text-sm font-bold text-sd-emerald">
										- {t.author}, {t.context}
									</p>
								</div>
							</DoodleCard>
						))}
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-linen" />

			{/* ═══════════════════════════════════════════
			    FINAL CTA — linen background
			    ═══════════════════════════════════════════ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-sd-linen">
				<SparkleCluster className="absolute top-12 right-16 w-10 h-10 twinkle-2" />
				<BigDoodleLeaf flip className="absolute top-8 left-4 w-16 h-24 float-b3" />

				<div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
					<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
						Ready to Stop Fighting Your Brain?
					</h2>
					<ScribblyUnderline colorVar="--sd-gold" className="w-56 md:w-72 mb-6" />

					<p className="font-body text-lg md:text-xl mb-4 text-sd-dim-text leading-[2]">
						Your AuDHD brain isn't a bug—it's a feature. Let's figure out how
						to work with your unique operating system instead of against it.
					</p>

					<p className="font-handwritten text-sd-emerald text-2xl mb-10" style={{ transform: "rotate(-1deg)" }}>
						with kindness, curiosity, and a little bit of play
					</p>

					<Link
						to="/services"
						className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-body font-bold text-xl transition-transform duration-200 ease-out hover:-translate-y-2 hover:scale-105 bg-sd-deep-green shadow-[0_12px_35px_var(--sd-deep-green)/0.3]"
					>
						Learn about the Re-Architect's Journey
						<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
					</Link>
				</div>
			</section>
		</>
	);
}
