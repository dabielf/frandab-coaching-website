import { Link } from "react-router";
import {
	Brain,
	Code2,
	Cpu,
	Footprints,
	GitBranch,
	Heart,
	Languages,
	Minimize2,
	Puzzle,
	Search,
	Sparkles,
	ArrowRight,
} from "lucide-react";
import {
	BigDoodleLeaf,
	BigDoodleStar,
	DoodleCard,
	ScribblyUnderline,
	SparkleCluster,
	SunburstSVG,
	WavyDivider,
} from "~/components/doodles";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "About Francois Dab - Late AuDHD Diagnosis & Coaching Journey" },
		{
			name: "description",
			content:
				"Discover Francois's journey from 40 years of unknowing masking to AuDHD diagnosis and becoming a coach who truly gets the neurodivergent experience.",
		},
	];
}

export default function About() {
	const whatIBring = [
		{
			title: "Lived Experience",
			desc: "Two years post-diagnosis, I'm still learning what it means to live authentically AuDHD. I bring both the fresh perspective of recent discovery and the wisdom of four decades of unknowing adaptation.",
			icon: Footprints,
		},
		{
			title: "The Translator Brain",
			desc: "As a high-masking, gifted AuDHDer with a special interest in psychology, I became fluent in both autistic and non-autistic communication styles. I can help you navigate between worlds without losing yourself.",
			icon: Languages,
		},
		{
			title: "Decomplexification",
			desc: "My brain physically cannot handle unnecessary complexity. This limitation became my greatest strength—I instinctively break down overwhelming situations into their simplest, most manageable components.",
			icon: Minimize2,
		},
		{
			title: "ACT Training",
			desc: "My certification in Acceptance and Commitment Therapy gives me concrete tools for working with the anxiety, perfectionism, and identity challenges that come with late diagnosis.",
			icon: Brain,
		},
		{
			title: "The Tech Brain",
			desc: "As a professional software engineer with a side passion for building tools that make AuDHD life simpler, I bring a unique systems-thinking approach to coaching. I see patterns where others see chaos.",
			icon: Cpu,
		},
		{
			title: "Pre-Diagnosis Wisdom",
			desc: "Those years of coaching before my diagnosis? They taught me that neurodivergent clients need something different. I was adapting my approach intuitively then. Now I do it intentionally.",
			icon: Sparkles,
		},
	];


	return (
		<>
			{/* ═══════════════════════════════════════════
			    HERO — cream background
			    ═══════════════════════════════════════════ */}
			<section className="relative pt-18 pb-20 md:pt-28 md:pb-32 overflow-hidden bg-sd-cream">
				{/* Background decorations */}
				<BigDoodleLeaf className="absolute top-20 left-4 w-20 h-28 float-b1" />
				<SparkleCluster className="absolute top-[20%] right-8 w-10 h-10 twinkle-2" />
				<SparkleCluster className="absolute bottom-[30%] left-8 w-14 h-14 twinkle-1" />

				<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
					{/* Handwritten welcome */}
					<p className="font-handwritten text-sd-gold text-3xl mb-6" style={{ transform: "rotate(-3deg)" }}>
						the origin story
					</p>

						{/* Main headline */}
					<h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.25] text-sd-heading mb-6">
						From "What's Wrong With Me?" <br className="hidden md:block" />
						<em className="text-sd-emerald">
							to "Oh, That Explains Everything"
						</em>
					</h1>

					<ScribblyUnderline colorVar="--sd-gold" className="w-48 md:w-64 mb-8" />

					{/* Subtitle */}
					<p className="font-body text-xl md:text-2xl text-sd-dim-text leading-[2] max-w-2xl mx-auto">
						My journey through 40 years of unknowing masking to finally
						understanding my AuDHD brain—and how it shaped everything about
						who I am as a coach.
					</p>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-linen" />

			{/* ═══════════════════════════════════════════
			    MY LATE DIAGNOSIS STORY — linen background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-linen">
				{/* Background decorations */}
				<SparkleCluster className="absolute top-12 right-12 w-10 h-10 twinkle-1" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
						{/* Image Column — Polaroid-doodle style */}
						<div className="lg:w-1/3 flex flex-col items-center relative">
							<DoodleCard className="p-0">
								<div className="p-4 pb-14">
									<img
										className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-sm"
										src="/avatar.jpeg"
										alt="It's-a-me, Francois"
									/>
									<p className="absolute bottom-8 left-0 right-0 text-center font-handwritten text-sd-dim-text text-xl">
										Me, probably overthinking this pose
									</p>
								</div>
							</DoodleCard>
						</div>

						{/* Content Column */}
						<div className="lg:w-2/3 space-y-6">
							<h2 className="font-heading text-3xl md:text-4xl font-normal mb-4 text-sd-heading">
								My Late Diagnosis Story
							</h2>
							<ScribblyUnderline colorVar="--sd-emerald" className="w-56 md:w-72 !mx-0 mb-4" />
							<p className="font-handwritten text-sd-emerald text-2xl" style={{ transform: "rotate(-1deg)" }}>
								buckle up, it's a ride
							</p>

							<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
								For 40 years, I lived with an invisible question mark hovering
								over my life. Why could I instinctively understand the most
								complex human dynamics but melt down over choosing what to wear?
								Why did I attract clients who seemed to vibrate at the same
								frequency as me—people who were "too much" and "not enough" all
								at once?
							</p>

							<DoodleCard className="max-w-xl">
								<p className="font-body text-xl font-bold text-sd-emerald leading-[2]">
									At 40, I finally got my answer: I'm AuDHD.
								</p>
							</DoodleCard>

							<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
								The diagnosis didn't change who I am. It gave me the language to
								understand who I'd always been. Suddenly, a lifetime of
								contradictions made sense:
							</p>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
								{[
									"Why I could mediate complex conflicts but couldn't handle grocery stores",
									"Why my clients kept saying 'you just GET it' when I'd never quite gotten myself",
									"Why I'd built an entire career around making the complex simple—because my brain literally couldn't handle unnecessary complexity",
									"Why I'd always felt like a translator between worlds, never quite belonging to either",
								].map((item, i) => (
									<DoodleCard key={i}>
										<div className="flex gap-4 items-start">
											<div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-sd-sage/15 text-sd-emerald">
												<Puzzle className="w-6 h-6" />
											</div>
											<p className="font-body text-[17px] md:text-lg text-sd-dim-text leading-[2]">
												{item}
											</p>
										</div>
									</DoodleCard>
								))}
							</div>

							<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
								Before my diagnosis, I was already a life coach. But I was
								coaching with one hand tied behind my back, using neurotypical
								frameworks that felt like wearing shoes on the wrong feet. My
								instincts were good—I naturally attracted neurodivergent clients
								and intuitively adapted my approach—but I didn't understand why
								traditional coaching methods felt so wrong for so many of us.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-on-dark-bg" />

			{/* ═══════════════════════════════════════════
			    THE PLOT TWIST — dark section
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-on-dark-bg">
				{/* Decorations — simpler on dark */}
				<SparkleCluster className="absolute top-12 right-16 w-10 h-10 twinkle-1" />

				<div className="max-w-3xl mx-auto px-6 relative z-10">
					<div className="relative">
						<div className="absolute -left-8 -top-8 opacity-10 rotate-12 hidden md:block text-sd-on-dark-dim">
							<GitBranch className="w-32 h-32" />
						</div>
						<div className="relative z-10 text-center space-y-8">
							<h2 className="font-heading text-3xl md:text-4xl font-normal mb-4 text-sd-on-dark-heading">
								The Plot Twist That Changed Everything
							</h2>
							<ScribblyUnderline colorVar="--sd-gold" className="w-56 md:w-72 mb-4" />
							<p className="font-handwritten text-sd-on-dark-dim text-2xl" style={{ transform: "rotate(-1deg)" }}>
								plot twist of a lifetime
							</p>

							<div className="rounded-2xl border-2 border-dashed border-sd-on-dark-dim/15 bg-sd-on-dark-text/5 p-8 md:p-10">
								<p className="font-body text-lg md:text-xl text-sd-on-dark-text/75 leading-[2] mb-6">
									Here's what I learned: Most coaching is built on neurotypical
									assumptions. "Just follow your inner wisdom!" they say. But
									what if your inner wisdom was shaped by 40 years of masking?
									"Trust the process!" they insist. But what if the process was
									never designed for brains like ours?
								</p>
								<p className="font-body text-lg md:text-xl text-sd-on-dark-text/75 leading-[2] mb-6">
									This is why I walked away from pursuing ICF certification. Not
									because I don't value professional development, but because
									their approach assumes a neurotypical baseline. For those of
									us diagnosed late, we need more than someone who asks good
									questions. We need someone who understands that our "inner
									wisdom" might be buried under decades of compensatory
									strategies.
								</p>
								<p className="font-body text-lg md:text-xl font-medium text-sd-gold leading-[2]">
									Sometimes you need a guide who's walked this path. Sometimes
									you need someone to teach you what you never had the chance to
									learn. Sometimes you need validation that your struggles
									aren't moral failings—they're the natural result of living in
									a world that wasn't built for your brain.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-cream" />

			{/* ═══════════════════════════════════════════
			    WHAT I BRING — cream background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-cream">
				{/* Background decorations */}
				<SparkleCluster className="absolute top-16 left-8 w-10 h-10 twinkle-2" />
				<BigDoodleStar className="absolute bottom-20 left-[8%] w-14 h-14 twinkle-3" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 text-sd-heading">
							What I Bring to Our Work
						</h2>
						<ScribblyUnderline colorVar="--sd-gold" className="w-56 md:w-72 mb-4" />
						<p className="font-handwritten text-sd-gold text-2xl" style={{ transform: "rotate(-1deg)" }}>
							a whole toolkit of lived experience
						</p>
						<p className="font-body text-lg md:text-xl text-sd-dim-text max-w-2xl mx-auto mt-6 leading-[2]">
							A blend of hard-earned lived experience and specific professional
							skills tailored for the AuDHD mind.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{whatIBring.map((item, i) => (
							<DoodleCard key={i}>
								<div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 mb-5 bg-sd-sage/15 text-sd-emerald">
									<item.icon className="w-7 h-7" />
								</div>
								<h3 className="font-heading text-2xl font-semibold text-sd-heading mb-3">
									{item.title}
								</h3>
								<p className="font-body text-[17px] md:text-lg text-sd-dim-text leading-[2]">
									{item.desc}
								</p>
							</DoodleCard>
						))}
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-linen" />

			{/* ═══════════════════════════════════════════
			    MY APPROACH — linen background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-linen">
				{/* Background decorations */}
				<SparkleCluster className="absolute top-10 right-8 w-10 h-10 twinkle-1" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="font-heading text-3xl md:text-4xl font-normal mb-4 text-sd-heading">
								My Approach
							</h2>
							<ScribblyUnderline colorVar="--sd-sage" className="w-48 md:w-64 !mx-0 mb-4" />
							<p className="font-handwritten text-sd-emerald text-2xl mb-8" style={{ transform: "rotate(-2deg)" }}>
								no neurotypical playbooks here
							</p>

							<div className="space-y-6">
								<p className="font-body text-xl font-medium text-sd-text leading-[2]">
									I'm not here to help you become a better neurotypical. I'm
									here to help you become a more sustainable version of
									yourself.
								</p>
								<p className="font-body text-lg text-sd-dim-text leading-[2]">This means:</p>
								<ul className="space-y-4">
									{[
										"Honoring both your need for structure AND your need for chaos",
										"Translating between your internal experience and the external world",
										"Breaking down overwhelming problems into manageable pieces",
										"Validating your struggles while building practical solutions",
										"Creating systems that work with your brain, not against it",
									].map((item, i) => (
										<li key={i} className="flex gap-4 items-start">
											<div className="flex-shrink-0 w-6 h-6 rounded-full bg-sd-cream flex items-center justify-center mt-0.5 border-2 border-dashed border-sd-sage/35">
												<div className="w-2 h-2 rounded-full bg-sd-emerald" />
											</div>
											<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
												{item}
											</p>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Quote card */}
						<div className="relative flex justify-center">
							<SunburstSVG className="absolute -top-6 -right-6 w-20 h-20 spin-lazy opacity-40" />
							<DoodleCard className="max-w-md">
								<Heart className="w-12 h-12 text-sd-gold mb-4 opacity-80" />
								<p className="font-heading text-lg md:text-xl italic text-sd-text leading-[2]">
									"Yes, I'm still learning to apply 'decomplexification' to my
									own life. We teach what we most need to learn, right?"
								</p>
								<p className="font-handwritten text-sd-emerald/60 text-xl mt-4" style={{ transform: "rotate(2deg)" }}>
									(still a work in progress)
								</p>
							</DoodleCard>
						</div>
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-cream" />

			{/* ═══════════════════════════════════════════
			    BEYOND THE COACHING — cream background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-cream">
				{/* Background decorations */}
				<SparkleCluster className="absolute top-12 left-12 w-10 h-10 twinkle-2" />

				<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
					<div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sd-sage/15 text-sd-emerald mb-6">
						<Search className="w-7 h-7" />
					</div>
					<h2 className="font-heading text-3xl md:text-4xl mb-4 text-sd-heading">
						Beyond the Coaching
					</h2>
					<ScribblyUnderline colorVar="--sd-emerald" className="w-48 md:w-64 mb-4" />
					<p className="font-handwritten text-sd-gold text-2xl mb-10" style={{ transform: "rotate(1deg)" }}>
						the nerdy stuff behind the scenes
					</p>

					<div className="space-y-6 text-left">
						<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
							When I'm not coaching or untangling my own executive
							dysfunction, you'll find me deep in a rabbit hole about the
							interactions between autism and ADHD, building software tools
							for neurodivergent minds <Code2 className="inline w-5 h-5 text-sd-emerald" />,
							or having marathon video calls with my partner Olivia.
						</p>
						<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
							She's AuDHD and gifted too, does autism testing in the US, and
							is simply the best human I know. We can spend hours dissecting
							theory of mind, neurodivergence intersections, and loving every
							minute of our nerdy deep dives.
						</p>
						<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
							I live in Mexico City, where the chaos somehow makes sense to
							my AuDHD brain, and I maintain an embarrassing number of
							half-finished coding projects that I'll definitely get back to
							someday.
						</p>
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-linen" />

			{/* ═══════════════════════════════════════════
			    CTA — linen background
			    ═══════════════════════════════════════════ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-sd-linen">
				{/* Background decorations */}
				<SparkleCluster className="absolute top-12 right-16 w-10 h-10 twinkle-2" />

				<div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
					<h2 className="font-heading text-3xl md:text-4xl mb-4 text-sd-heading">
						Ready to Connect?
					</h2>
					<ScribblyUnderline colorVar="--sd-gold" className="w-48 md:w-64 mb-6" />
					<p className="font-handwritten text-sd-emerald text-2xl mb-8" style={{ transform: "rotate(-1deg)" }}>
						let's figure this out together
					</p>

					<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2] mb-10">
						If you're tired of trying to fit your octagonal brain into square
						holes, let's talk. I can't promise to fix your executive
						dysfunction (still working on my own), but I can promise to see
						you, understand you, and help you build a life that actually fits.
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
