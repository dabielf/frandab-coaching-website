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
	User,
} from "lucide-react";
import {
	BodyBase,
	BodyLarge,
	Container,
	H1,
	H2,
	H3,
	H4,
	Section,
} from "~/components/ui";
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
	return (
		<>
			{/* Hero Section */}
			<section className="relative pt-18 pb-20 md:pt-28 md:pb-32 bg-primary-soft/30 overflow-hidden">
				{/* Abstract background shape */}
				<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-soft to-transparent opacity-60 -z-10 rounded-l-full blur-3xl" />

				<Container size="base">
					<div className="text-center max-w-4xl mx-auto">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-primary/20 text-primary text-sm font-medium mb-6 shadow-sm">
							<User className="w-4 h-4" />
							<span>The Origin Story</span>
						</div>
						<H1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-8 leading-tight">
							From "What's Wrong With Me?" <br className="hidden md:block" />
							to "Oh, That Explains Everything"
						</H1>
						<p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl mx-auto font-medium">
							My journey through 40 years of unknowing masking to finally
							understanding my AuDHD brain—and how it shaped everything about
							who I am as a coach.
						</p>
					</div>
				</Container>
			</section>

			{/* My Late Diagnosis Story */}
			<Section>
				<Container>
					<div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
						{/* Image Column - Polaroid Style */}
						<div className="lg:w-1/3 flex justify-center lg:justify-start">
							<div className="relative group">
								<div className="absolute inset-0 bg-primary/20 rounded-xl rotate-6 group-hover:rotate-3 transition-transform duration-300 ease-in-out" />
								<div className="relative bg-surface p-3 rounded-xl border border-border shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-300 ease-in-out">
									<img
										className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-lg"
										src="/avatar.jpeg"
										alt="It's-a-me, Francois"
									/>
									<div className="pt-4 pb-1 text-center font-handwriting text-text-secondary opacity-80">
										Me, probably overthinking this pose
									</div>
								</div>
							</div>
						</div>

						{/* Content Column */}
						<div className="lg:w-2/3 space-y-6">
							<H2 className="text-3xl font-bold text-primary mb-6">
								My Late Diagnosis Story
							</H2>
							<BodyBase className="text-lg">
								For 40 years, I lived with an invisible question mark hovering
								over my life. Why could I instinctively understand the most
								complex human dynamics but melt down over choosing what to wear?
								Why did I attract clients who seemed to vibrate at the same
								frequency as me—people who were "too much" and "not enough" all
								at once?
							</BodyBase>
							<div className="p-6 bg-surface-alt rounded-2xl border-l-4 border-primary my-8">
								<BodyLarge className="font-bold text-primary text-xl">
									At 40, I finally got my answer: I'm AuDHD.
								</BodyLarge>
							</div>
							<BodyBase className="text-lg">
								The diagnosis didn't change who I am. It gave me the language to
								understand who I'd always been. Suddenly, a lifetime of
								contradictions made sense:
							</BodyBase>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
								{[
									"Why I could mediate complex conflicts but couldn't handle grocery stores",
									"Why my clients kept saying 'you just GET it' when I'd never quite gotten myself",
									"Why I'd built an entire career around making the complex simple—because my brain literally couldn't handle unnecessary complexity",
									"Why I'd always felt like a translator between worlds, never quite belonging to either",
								].map((item, i) => (
									<div
										key={i}
										className="flex gap-3 p-4 bg-surface border border-border rounded-xl hover:border-primary/30 transition-colors"
									>
										<Puzzle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
										<BodyBase className="text-sm">{item}</BodyBase>
									</div>
								))}
							</div>

							<BodyBase className="text-lg">
								Before my diagnosis, I was already a life coach. But I was
								coaching with one hand tied behind my back, using neurotypical
								frameworks that felt like wearing shoes on the wrong feet. My
								instincts were good—I naturally attracted neurodivergent clients
								and intuitively adapted my approach—but I didn't understand why
								traditional coaching methods felt so wrong for so many of us.
							</BodyBase>
						</div>
					</div>
				</Container>
			</Section>

			{/* The Plot Twist */}
			<Section background="alt" className="py-20">
				<Container size="narrow">
					<div className="relative">
						<div className="absolute -left-8 -top-8 text-primary/10 rotate-12 hidden md:block">
							<GitBranch className="w-32 h-32" />
						</div>
						<div className="relative z-10 text-center space-y-8">
							<H2 className="text-3xl md:text-4xl font-bold text-primary">
								The Plot Twist That Changed Everything
							</H2>
							<div className="bg-surface p-8 md:p-10 rounded-2xl shadow-sm border border-primary/10">
								<p className="text-lg leading-relaxed text-text-secondary mb-6">
									Here's what I learned: Most coaching is built on neurotypical
									assumptions. "Just follow your inner wisdom!" they say. But
									what if your inner wisdom was shaped by 40 years of masking?
									"Trust the process!" they insist. But what if the process was
									never designed for brains like ours?
								</p>
								<p className="text-lg leading-relaxed text-text-secondary mb-6">
									This is why I walked away from pursuing ICF certification. Not
									because I don't value professional development, but because
									their approach assumes a neurotypical baseline. For those of
									us diagnosed late, we need more than someone who asks good
									questions. We need someone who understands that our "inner
									wisdom" might be buried under decades of compensatory
									strategies.
								</p>
								<p className="text-lg leading-relaxed font-medium text-primary">
									Sometimes you need a guide who's walked this path. Sometimes
									you need someone to teach you what you never had the chance to
									learn. Sometimes you need validation that your struggles
									aren't moral failings—they're the natural result of living in
									a world that wasn't built for your brain.
								</p>
							</div>
						</div>
					</div>
				</Container>
			</Section>

			{/* What I Bring */}
			<Section className="py-20">
				<Container>
					<div className="text-center mb-16">
						<H2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
							What I Bring to Our Work
						</H2>
						<BodyLarge className="text-text-secondary max-w-2xl mx-auto">
							A blend of hard-earned lived experience and specific professional
							skills tailored for the AuDHD mind.
						</BodyLarge>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
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
						].map((item, i) => (
							<div
								key={i}
								className="bg-surface border border-border p-8 rounded-2xl hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
							>
								<div className="w-12 h-12 bg-primary-soft rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
									<item.icon className="w-6 h-6 text-primary" />
								</div>
								<H4 className="text-xl font-bold text-text-primary mb-3">
									{item.title}
								</H4>
								<BodyBase className="text-text-secondary leading-relaxed">
									{item.desc}
								</BodyBase>
							</div>
						))}
					</div>
				</Container>
			</Section>

			{/* My Approach */}
			<Section background="primary-soft" className="py-20">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<H2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
								My Approach
							</H2>
							<div className="space-y-6">
								<p className="text-xl font-medium text-text-primary">
									I'm not here to help you become a better neurotypical. I'm
									here to help you become a more sustainable version of
									yourself.
								</p>
								<p className="text-text-secondary">This means:</p>
								<ul className="space-y-4">
									{[
										"Honoring both your need for structure AND your need for chaos",
										"Translating between your internal experience and the external world",
										"Breaking down overwhelming problems into manageable pieces",
										"Validating your struggles while building practical solutions",
										"Creating systems that work with your brain, not against it",
									].map((item, i) => (
										<li key={i} className="flex gap-4 items-start">
											<div className="flex-shrink-0 w-6 h-6 rounded-full bg-surface flex items-center justify-center mt-0.5 border border-primary/20">
												<div className="w-2 h-2 rounded-full bg-primary" />
											</div>
											<BodyBase className="text-lg text-text-secondary">
												{item}
											</BodyBase>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="relative flex justify-center">
							<div className="absolute inset-0 bg-white/20 rounded-full blur-3xl" />
							<div className="relative bg-surface p-8 rounded-2xl shadow-sm border border-primary/10 max-w-md transform rotate-1 hover:rotate-0 transition-transform duration-500">
								<Heart className="w-12 h-12 text-primary mb-4 opacity-80" />
								<p className="text-lg italic text-text-secondary">
									"Yes, I'm still learning to apply 'decomplexification' to my
									own life. We teach what we most need to learn, right?"
								</p>
							</div>
						</div>
					</div>
				</Container>
			</Section>

			{/* Beyond the Coaching */}
			<Section className="py-20">
				<Container>
					<div className="max-w-3xl mx-auto text-center">
						<div className="inline-block p-3 bg-surface-alt rounded-full mb-6">
							<Search className="w-6 h-6 text-text-tertiary" />
						</div>
						<H2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
							Beyond the Coaching
						</H2>
						<div className="space-y-6 text-lg text-text-secondary leading-relaxed">
							<p>
								When I'm not coaching or untangling my own executive
								dysfunction, you'll find me deep in a rabbit hole about the
								interactions between autism and ADHD, building software tools
								for neurodivergent minds <Code2 className="inline w-4 h-4" />,
								or having marathon video calls with my partner Olivia.
							</p>
							<p>
								She's AuDHD and gifted too, does autism testing in the US, and
								is simply the best human I know. We can spend hours dissecting
								theory of mind, neurodivergence intersections, and loving every
								minute of our nerdy deep dives.
							</p>
							<p>
								I live in Mexico City 🌮, where the chaos somehow makes sense to
								my AuDHD brain, and I maintain an embarrassing number of
								half-finished coding projects that I'll definitely get back to
								someday.
							</p>
						</div>
					</div>
				</Container>
			</Section>

			{/* CTA */}
			<Section background="alt" className="py-20">
				<Container>
					<div className="text-center max-w-3xl mx-auto">
						<H2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
							Ready to Connect?
						</H2>
						<BodyLarge className="text-text-secondary mb-8">
							If you're tired of trying to fit your octagonal brain into square
							holes, let's talk. I can't promise to fix your executive
							dysfunction (still working on my own), but I can promise to see
							you, understand you, and help you build a life that actually fits.
						</BodyLarge>
						<Link
							to="/services"
							className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 hover:-translate-y-1"
						>
							Learn about the Re-Architect's Journey
						</Link>
					</div>
				</Container>
			</Section>
		</>
	);
}