import { Link } from "react-router";
import {
	Brain,
	Code2,
	Cpu,
	Footprints,
	Heart,
	Languages,
	Minimize2,
	Puzzle,
	Search,
	Sparkles,
	ArrowRight,
} from "lucide-react";
import { AmbientBlob, GentleCard, PillDivider } from "~/components/doodles";
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
			{/* ═══ HERO ═══ */}
			<section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[-10%] right-[-10%]" size="50vw" />
				<AmbientBlob color="mist" position="bottom-[-15%] left-[-10%]" size="35vw" />

				<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
					<p className="font-hand text-gs-ink text-3xl mb-6 rotate-[-2deg]">
						the origin story
					</p>

					<h1 className="font-serif text-4xl md:text-6xl font-semibold leading-[1.2] text-gs-heading mb-8 tracking-[-0.01em]">
						From "What's Wrong With Me?" <br className="hidden md:block" />
						<span className="text-gs-ink">
							to "Oh, That Explains Everything"
						</span>
					</h1>

					<PillDivider className="mb-8" />

					<p className="font-sans text-xl md:text-2xl text-gs-body leading-relaxed max-w-2xl mx-auto">
						My journey through 40 years of unknowing masking to finally
						understanding my AuDHD brain—and how it shaped everything about
						who I am as a coach.
					</p>
				</div>
			</section>

			{/* ═══ MY LATE DIAGNOSIS STORY ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[10%] left-[-15%]" size="30vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
						{/* Image Column */}
						<div className="lg:w-1/3 flex flex-col items-center relative">
							<div className="rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
								<img
									className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-[1.5rem] shadow-[0_4px_12px_oklch(0%_0_0/0.08),0_16px_40px_oklch(0%_0_0/0.1)] ring-4 ring-gs-surface/80"
									src="/avatar.jpeg"
									alt="It's-a-me, Francois"
								/>
								<p className="text-center font-hand text-gs-ink text-xl mt-4 rotate-[1deg]">
									Me, probably overthinking this pose
								</p>
							</div>
						</div>

						{/* Content Column */}
						<div className="lg:w-2/3 space-y-6">
							<h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-gs-heading tracking-[-0.01em]">
								My Late Diagnosis Story
							</h2>
							<p className="font-hand text-gs-ink text-3xl rotate-[-1deg]">
								buckle up, it's a ride
							</p>

							<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
								For 40 years, I lived with an invisible question mark hovering
								over my life. Why could I instinctively understand the most
								complex human dynamics but melt down over choosing what to wear?
								Why did I attract clients who seemed to vibrate at the same
								frequency as me—people who were "too much" and "not enough" all
								at once?
							</p>

							<p className="font-serif text-2xl md:text-3xl font-semibold text-gs-ink tracking-[-0.01em] leading-relaxed">
								At 40, I finally got my answer: I'm AuDHD.
							</p>

							<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
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
									<GentleCard key={i}>
										<div className="flex gap-4 items-start">
											<div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gs-gold/60 text-gs-ink">
												<Puzzle className="w-6 h-6" />
											</div>
											<p className="font-sans text-[17px] md:text-lg text-gs-body leading-relaxed">
												{item}
											</p>
										</div>
									</GentleCard>
								))}
							</div>

							<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
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

			{/* ═══ THE PLOT TWIST ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="mist" position="top-[-5%] right-[-10%]" size="40vw" />

				<div className="max-w-3xl mx-auto px-6 relative z-10">
					<div className="text-center space-y-8">
						<h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-gs-heading tracking-[-0.01em]">
							The Plot Twist That Changed Everything
						</h2>
						<p className="font-hand text-gs-ink text-3xl rotate-[-1deg]">
							plot twist of a lifetime
						</p>

						<GentleCard>
							<div className="space-y-6">
								<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
									Here's what I learned: Most coaching is built on neurotypical
									assumptions. "Just follow your inner wisdom!" they say. But
									what if your inner wisdom was shaped by 40 years of masking?
									"Trust the process!" they insist. But what if the process was
									never designed for brains like ours?
								</p>
								<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
									This is why I walked away from pursuing ICF certification. Not
									because I don't value professional development, but because
									their approach assumes a neurotypical baseline. For those of
									us diagnosed late, we need more than someone who asks good
									questions. We need someone who understands that our "inner
									wisdom" might be buried under decades of compensatory
									strategies.
								</p>
								<p className="font-sans text-lg md:text-xl font-medium text-gs-ink leading-relaxed">
									Sometimes you need a guide who's walked this path. Sometimes
									you need someone to teach you what you never had the chance to
									learn. Sometimes you need validation that your struggles
									aren't moral failings—they're the natural result of living in
									a world that wasn't built for your brain.
								</p>
							</div>
						</GentleCard>
					</div>
				</div>
			</section>

			{/* ═══ WHAT I BRING ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[5%] left-[-10%]" size="35vw" />
				<AmbientBlob color="mist" position="bottom-[-5%] right-[-15%]" size="30vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							What I Bring to Our Work
						</h2>
						<p className="font-hand text-gs-ink text-2xl rotate-[-1deg]">
							a whole toolkit of lived experience
						</p>
						<p className="font-sans text-lg md:text-xl text-gs-body max-w-2xl mx-auto mt-6 leading-relaxed">
							A blend of hard-earned lived experience and specific professional
							skills tailored for the AuDHD mind.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{whatIBring.map((item, i) => (
							<GentleCard key={i}>
								<div className="w-14 h-14 rounded-2xl bg-gs-gold/60 text-gs-ink flex items-center justify-center flex-shrink-0 mb-5">
									<item.icon className="w-7 h-7" />
								</div>
								<h3 className="font-serif text-2xl font-semibold text-gs-heading mb-3 tracking-[-0.01em]">
									{item.title}
								</h3>
								<p className="font-sans text-[17px] md:text-lg text-gs-body leading-relaxed">
									{item.desc}
								</p>
							</GentleCard>
						))}
					</div>
				</div>
			</section>

			{/* ═══ MY APPROACH ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="mist" position="top-[-10%] left-[-10%]" size="40vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-gs-heading tracking-[-0.01em]">
								My Approach
							</h2>
							<p className="font-hand text-gs-ink text-2xl mb-8 rotate-[-2deg]">
								no neurotypical playbooks here
							</p>

							<div className="space-y-6">
								<p className="font-sans text-xl font-medium text-gs-heading leading-relaxed">
									I'm not here to help you become a better neurotypical. I'm
									here to help you become a more sustainable version of
									yourself.
								</p>
								<p className="font-sans text-lg text-gs-body leading-relaxed">This means:</p>
								<ul className="space-y-4">
									{[
										"Honoring both your need for structure AND your need for chaos",
										"Translating between your internal experience and the external world",
										"Breaking down overwhelming problems into manageable pieces",
										"Validating your struggles while building practical solutions",
										"Creating systems that work with your brain, not against it",
									].map((item, i) => (
										<li key={i} className="flex gap-4 items-start">
											<div className="flex-shrink-0 w-6 h-6 rounded-full bg-gs-mist flex items-center justify-center mt-0.5">
												<div className="w-2 h-2 rounded-full bg-gs-ink" />
											</div>
											<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
												{item}
											</p>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Quote card */}
						<div className="relative flex justify-center">
							<GentleCard className="max-w-md">
								<Heart className="w-12 h-12 text-gs-ink mb-4 opacity-60" />
								<p className="font-sans text-lg md:text-xl italic text-gs-heading leading-relaxed">
									"Yes, I'm still learning to apply 'decomplexification' to my
									own life. We teach what we most need to learn, right?"
								</p>
								<p className="font-hand text-gs-ink/60 text-xl mt-4 rotate-[2deg]">
									(still a work in progress)
								</p>
							</GentleCard>
						</div>
					</div>
				</div>
			</section>

			{/* ═══ BEYOND THE COACHING ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[-5%] right-[-10%]" size="35vw" />

				<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
					<div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gs-gold/60 text-gs-ink mb-6">
						<Search className="w-7 h-7" />
					</div>
					<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
						Beyond the Coaching
					</h2>
					<p className="font-hand text-gs-ink text-2xl mb-12 rotate-[1deg]">
						the nerdy stuff behind the scenes
					</p>

					<div className="space-y-6 text-left">
						<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
							When I'm not coaching or untangling my own executive
							dysfunction, you'll find me deep in a rabbit hole about the
							interactions between autism and ADHD, building software tools
							for neurodivergent minds <Code2 className="inline w-5 h-5 text-gs-ink" />,
							or having marathon video calls with my partner Olivia.
						</p>
						<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
							She's AuDHD and gifted too, does autism testing in the US, and
							is simply the best human I know. We can spend hours dissecting
							theory of mind, neurodivergence intersections, and loving every
							minute of our nerdy deep dives.
						</p>
						<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
							I live in Mexico City, where the chaos somehow makes sense to
							my AuDHD brain, and I maintain an embarrassing number of
							half-finished coding projects that I'll definitely get back to
							someday.
						</p>
					</div>
				</div>
			</section>

			{/* ═══ CTA ═══ */}
			<section className="py-28 md:py-36 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="mist" position="top-[-10%] left-[-10%]" size="40vw" />
				<AmbientBlob color="gold" position="bottom-[-10%] right-[-5%]" size="30vw" />

				<div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
					<h2 className="font-serif text-4xl md:text-5xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
						Ready to Connect?
					</h2>
					<PillDivider className="mb-8" />
					<p className="font-hand text-gs-ink text-3xl mb-8 rotate-[-1deg]">
						let's figure this out together
					</p>

					<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed mb-12">
						If you're tired of trying to fit your octagonal brain into square
						holes, let's talk. I can't promise to fix your executive
						dysfunction (still working on my own), but I can promise to see
						you, understand you, and help you build a life that actually fits.
					</p>

					<Link
						to="/services"
						className="group inline-flex items-center gap-3 bg-gs-ink text-white rounded-2xl px-10 py-5 font-sans font-medium text-xl shadow-[0_4px_12px_rgba(67,91,114,0.15)] hover:-translate-y-0.5 hover:bg-gs-ink-hover hover:shadow-[0_6px_16px_rgba(67,91,114,0.2)] transition-all duration-300 gs-press"
					>
						Explore the Coaching Program
						<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
					</Link>
				</div>
			</section>
		</>
	);
}
