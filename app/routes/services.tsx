import { useId } from "react";
import { Link } from "react-router";
import {
	ArrowRight,
	BatteryCharging,
	Brain,
	Calendar,
	CheckCircle2,
	Clock,
	Compass,
	Heart,
	Map,
	MessageCircle,
	Shield,
	Sparkles,
	Users,
	XCircle,
	Zap,
} from "lucide-react";
import {
	BodyBase,
	BodyLarge,
	BodySmall,
	Container,
	H1,
	H2,
	H3,
	H4,
	Section,
} from "~/components/ui";
import type { Route } from "./+types/services";

export function meta({}: Route.MetaArgs) {
	return [
		{
			title:
				"The Re-Architect's Journey - Personal Coaching Program | François Dab",
		},
		{
			name: "description",
			content:
				"A deeply collaborative, client-led coaching journey for late-diagnosed AuDHD individuals. Limited founding client spots available with François, who understands the path from burnout to rebuilding.",
		},
	];
}

export default function Services() {
	const tierPricingId = useId();
	return (
		<>
			{/* Hero Section - Client Centered Value Prop */}
			<section className="relative pt-18 pb-20 md:pt-28 md:pb-32 bg-primary-soft/30 overflow-hidden">
				{/* Abstract background shape for visual interest */}
				<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-soft to-transparent opacity-60 -z-10 rounded-l-full blur-3xl" />

				<Container size="base">
					<div className="text-center max-w-4xl mx-auto">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-primary/20 text-primary text-sm font-medium mb-6 shadow-sm">
							<Sparkles className="w-4 h-4" />
							<span>A Personal Invitation to you</span>
						</div>
						<H1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-8 leading-tight">
							The Re-Architect's Journey
						</H1>

						<p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl mx-auto font-medium">
							A dedicated, 4-month partnership to help you understand your
							unique blueprint, recover from burnout, and build a life that
							actually works for your brain.
						</p>
					</div>
				</Container>
			</section>

			{/* Client-Led Journey */}
			<Section className="py-20">
				<Container>
					<div className="text-center max-w-3xl mx-auto mb-16">
						<H2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
							A Radically Responsive, Client-Led Journey
						</H2>
						<BodyLarge className="text-text-secondary">
							This is not a one-size-fits-all curriculum with pre-set modules.
							It is a deeply collaborative and client-led space. You are the
							architect of your life; my role is to act as your specialist
							consultant, helping you read your unique blueprints and understand
							your materials.
						</BodyLarge>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
						{[
							{
								title: "Self-Acceptance",
								desc: "Integrating your AuDHD identity and unlearning a lifetime of masking.",
								icon: Heart,
							},
							{
								title: "Burnout Recovery",
								desc: "Creating practical strategies for managing energy and sensory needs.",
								icon: BatteryCharging,
							},
							{
								title: "Productivity & Executive Function",
								desc: "Designing systems that work with your brain, not against it.",
								icon: Brain,
							},
							{
								title: "Relationships & Communication",
								desc: "Learning the language to express your needs and connect authentically.",
								icon: MessageCircle,
							},
							{
								title: "Finding Community",
								desc: "Exploring what it means to feel a sense of belonging.",
								icon: Users,
							},
							{
								title: "Pathfinding",
								desc: "Answering the big questions—'What does a thriving life look like for me, and how do I make it happen?'",
								icon: Compass,
							},
						].map((item, i) => (
							<div
								key={i}
								className="bg-surface border border-border p-6 rounded-xl hover:shadow-md hover:border-primary/30 transition-all duration-300 ease-in-out group"
							>
								<div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ease-in-out">
									<item.icon className="w-6 h-6 text-primary" />
								</div>
								<H4 className="mb-2 text-primary">{item.title}</H4>
								<BodySmall className="text-text-secondary">
									{item.desc}
								</BodySmall>
							</div>
						))}
					</div>

					<div className="max-w-4xl mx-auto bg-primary-soft/50 border border-primary/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
						<div className="flex-shrink-0 p-4 bg-white rounded-full shadow-sm">
							<Map className="w-8 h-8 text-primary" />
						</div>
						<div className="space-y-4 text-center md:text-left">
							<BodyBase className="text-lg font-medium text-primary">
								You set the destination. I help you read the map and navigate
								the terrain.
							</BodyBase>
							<BodyBase className="text-text-secondary">
								We’ll take your spoon levels into account at each session. Not
								every session has to be a deep dive. Sometimes it's just about
								recentering, accepting where you are and figuring out where to
								go from there.
							</BodyBase>
						</div>
					</div>
				</Container>
			</Section>

			{/* Coaching Container */}
			<Section background="alt" className="py-20">
				<Container>
					<div className="text-center max-w-3xl mx-auto mb-16">
						<H2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
							The Coaching Container
						</H2>
						<BodyLarge className="text-text-secondary">
							To do this deep, client-led work, we need a container built on
							trust and consistency. This structure is the reliable scaffolding
							that gives our exploratory work a safe place to land.
						</BodyLarge>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
						<div className="bg-surface border border-border rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 ease-in-out shadow-sm hover:shadow-md transform">
							<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 ease-in-out">
								<Calendar className="w-24 h-24" />
							</div>
							<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary font-bold text-xl relative z-10 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 ease-out">
								16
							</div>
							<div className="relative z-10">
								<H3 className="text-xl font-bold text-primary mb-3">Duration</H3>
								<BodyBase className="text-text-secondary">
									A 4-month (16-week) deep dive to allow for real, sustainable
									change.
								</BodyBase>
							</div>
						</div>

						<div className="bg-surface border border-border rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 ease-in-out shadow-sm hover:shadow-md transform">
							<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 ease-in-out">
								<Clock className="w-24 h-24" />
							</div>
							<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 group-hover:bg-primary transition-all duration-300 ease-out">
								<Users className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
							</div>
							<div className="relative z-10">
								<H3 className="text-xl font-bold text-primary mb-3">
									Core Sessions
								</H3>
								<BodyBase className="text-text-secondary">
									16 weekly, 60-minute 1-on-1 Re-Architect Sessions. Dedicated
									time for the strategic work that matters most.
								</BodyBase>
							</div>
						</div>

						<div className="bg-surface border border-border rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 ease-in-out shadow-sm hover:shadow-md transform">
							<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 ease-in-out">
								<Zap className="w-24 h-24" />
							</div>
							<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 group-hover:bg-primary transition-all duration-300 ease-out">
								<Zap className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
							</div>
							<div className="relative z-10">
								<H3 className="text-xl font-bold text-primary mb-3">
									Responsive Support
								</H3>
								<BodyBase className="text-text-secondary">
									Up to 2 weekly, 20-minute "Spotlight Sessions" on demand for
									real-time implementation support.
								</BodyBase>
							</div>
						</div>
					</div>

					<div className="bg-surface border border-border rounded-2xl p-8 md:p-10 max-w-4xl mx-auto flex gap-6 items-start">
						<Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
						<div>
							<H3 className="text-xl font-bold text-primary mb-4">
								A Note on Capacity & Integrity
							</H3>
							<BodyBase className="text-text-secondary mb-4">
								I am still navigating my own recovery from burnout. Because of
								this, and to protect the depth and integrity of our work, I take
								on a maximum of two to three new clients per month.
							</BodyBase>
							<BodyBase className="font-medium text-primary">
								This isn't a marketing tactic; it's me practicing
								sustainability. It ensures you get my focused, present, and
								highest-quality engagement.
							</BodyBase>
						</div>
					</div>
				</Container>
			</Section>

			{/* Founding Client Opportunities */}
			<Section className="py-20" id={tierPricingId}>
				<Container>
					<div className="text-center max-w-3xl mx-auto mb-16">
						<H2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
							Founding Client Opportunities
						</H2>
						<BodyBase className="text-lg text-text-secondary mb-4">
							My fees are out in the open. Nothing I hate more than hidden fees.
							This framework has been my lifeline, and I'm inviting a small
							group to partner with me as I refine it.
						</BodyBase>
						<BodySmall className="bg-surface-alt inline-block px-4 py-2 rounded-full font-medium text-primary">
							Applications are reviewed in the order they are received.
						</BodySmall>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
						{/* Co-Creator Tier */}
						<div className="bg-surface border-2 border-primary rounded-2xl p-8 relative shadow-lg transform md:-translate-y-4 z-10 transition-transform duration-300 ease-in-out">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
								<span className="bg-primary text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-md tracking-wide whitespace-nowrap">
									Current Tier
								</span>
							</div>
							<div className="text-center pb-6 border-b border-border/50 mb-6">
								<H3 className="text-2xl font-bold text-primary mb-2">
									Co-Creator
								</H3>
								<div className="flex items-baseline justify-center gap-1 mb-2">
									<span className="text-4xl font-bold text-text-primary">
										$1,500
									</span>
									<span className="text-text-tertiary">/ total</span>
								</div>
								<BodySmall className="text-primary font-medium">
									1 Spot Left
								</BodySmall>
								<BodySmall className="text-text-tertiary line-through mt-1">
									Full Value: $4,000
								</BodySmall>
							</div>
							<ul className="space-y-4 mb-8">
								<li className="flex gap-3 text-sm text-text-secondary">
									<CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
									<span>First to experience the container</span>
								</li>
								<li className="flex gap-3 text-sm text-text-secondary">
									<CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
									<span>Detailed feedback shapes the program</span>
								</li>
								<li className="flex gap-3 text-sm text-text-secondary">
									<CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
									<span>Best value exchange</span>
								</li>
							</ul>
							<div className="text-center pt-4 border-t border-border/50">
								<BodySmall className="text-text-tertiary">
									Payment plan: 3 x $550
								</BodySmall>
							</div>
						</div>

						{/* Founder's Tier */}
						<div className="bg-surface border border-border rounded-2xl p-8 relative opacity-90 hover:opacity-100 transition-all duration-300 ease-in-out">
							<div className="text-center pb-6 border-b border-border/50 mb-6">
								<H3 className="text-2xl font-bold text-text-primary mb-2">
									Founder's
								</H3>
								<div className="flex items-baseline justify-center gap-1 mb-2">
									<span className="text-4xl font-bold text-text-secondary">
										$2,400
									</span>
									<span className="text-text-tertiary">/ total</span>
								</div>
								<BodySmall className="text-text-secondary">
									6 Spots Available
								</BodySmall>
								<BodySmall className="text-text-tertiary line-through mt-1">
									Full Value: $4,000
								</BodySmall>
							</div>
							<BodySmall className="text-text-secondary mb-6 text-center leading-relaxed">
								Refined by Co-Creator feedback. A balance between a proven
								framework and collaborative refinement.
							</BodySmall>
							<div className="text-center pt-4 border-t border-border/50">
								<BodySmall className="text-text-tertiary">
									Payment plan: 3 x $850
								</BodySmall>
							</div>
						</div>

						{/* Standard Investment */}
						<div className="bg-surface border border-border rounded-2xl p-8 relative opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out">
							<div className="text-center pb-6 border-b border-border/50 mb-6">
								<H3 className="text-2xl font-bold text-text-primary mb-2">
									Standard
								</H3>
								<div className="flex items-baseline justify-center gap-1 mb-2">
									<span className="text-4xl font-bold text-text-secondary">
										$4,000
									</span>
									<span className="text-text-tertiary">/ total</span>
								</div>
								<BodySmall className="text-text-secondary">
									Future Pricing
								</BodySmall>
							</div>
							<BodySmall className="text-text-secondary mb-6 text-center leading-relaxed">
								The established program rate after all founding spots are
								filled.
							</BodySmall>
							<div className="text-center pt-4 border-t border-border/50">
								<BodySmall className="text-text-tertiary">
									Payment plan: 3 x $1,350
								</BodySmall>
							</div>
						</div>
					</div>
				</Container>
			</Section>

			{/* Filtering Section (For You / Not For You) */}
			<Section background="alt" className="py-20">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* This is for you */}
						<div className="bg-surface border border-primary/20 rounded-2xl p-8 shadow-sm">
							<div className="flex items-center gap-3 mb-8">
								<div className="p-2 bg-primary/10 rounded-lg">
									<CheckCircle2 className="w-6 h-6 text-primary" />
								</div>
								<H3 className="text-2xl font-bold text-primary m-0">
									This Journey is For You If:
								</H3>
							</div>
							<ul className="space-y-4">
								{[
									"You're late-diagnosed or self-discovered and ready to move from chaos to clarity.",
									"You crave a coach who understands the exhaustion of high-masking.",
									"You believe (or want to believe) there is profound joy in being autistic.",
									"You're curious about what's possible beyond quick fixes.",
									"You bring a willingness to show up as you are, honoring your capacity.",
								].map((item, i) => (
									<li key={i} className="flex gap-4 items-start">
										<div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
										<BodySmall className="text-base text-text-secondary leading-relaxed">
											{item}
										</BodySmall>
									</li>
								))}
							</ul>
						</div>

						{/* This is NOT for you */}
						<div className="bg-surface border border-border rounded-2xl p-8">
							<div className="flex items-center gap-3 mb-8">
								<div className="p-2 bg-text-tertiary/10 rounded-lg">
									<XCircle className="w-6 h-6 text-text-tertiary" />
								</div>
								<H3 className="text-2xl font-bold text-text-secondary m-0">
									This is NOT The Right Path If:
								</H3>
							</div>
							<ul className="space-y-4">
								{[
									"You need clinical therapy or crisis intervention.",
									"You're seeking a magic bullet to 'fix' you.",
									"You want group support (this is intimate 1-on-1 work).",
									"You're not ready to examine your patterns honestly.",
									"You need a fully polished, corporate-style program.",
								].map((item, i) => (
									<li key={i} className="flex gap-4 items-start">
										<div className="w-1.5 h-1.5 rounded-full bg-text-tertiary mt-2.5 flex-shrink-0" />
										<BodySmall className="text-base text-text-secondary leading-relaxed">
											{item}
										</BodySmall>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="mt-12 p-8 border-l-4 border-primary bg-surface shadow-sm rounded-r-xl">
						<H4 className="font-bold text-primary mb-2">
							This Journey is Coaching Work
						</H4>
						<p className="text-text-secondary mb-2">
							<strong>What I will validate:</strong> Your emotions and
							experience, always.
						</p>
						<p className="text-text-secondary">
							<strong>What I will question:</strong> Your reactions and the
							stories these emotions come from. Not to judge, but for the sake
							of curious exploration. It <strong>will</strong> be annoying
							sometimes.
						</p>
					</div>

					<div className="mt-12 text-center">
						<p className="text-lg text-text-secondary max-w-3xl mx-auto">
							From my Substack,{" "}
							<Link
								to="https://dabii.substack.com/"
								target="_blank"
								className="text-primary font-medium hover:underline underline-offset-4 decoration-2"
							>
								"But you don't look autistic,"
							</Link>{" "}
							to this program, my mission is the same: to help us feel seen,
							understood, and empowered.
						</p>
					</div>
				</Container>
			</Section>

			{/* How to Get Started */}
			<Section className="py-20">
				<Container>
					<H2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">
						How to Get Started
					</H2>

					<div className="relative">
						{/* Vertical line connecting steps */}
						<div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-border z-0" />

						<div className="space-y-12 relative z-10">
							{/* Step 1 */}
							<div className="flex flex-col md:flex-row gap-8">
								<div className="flex-shrink-0 w-16 h-16 bg-surface border-2 border-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary shadow-sm mx-auto md:mx-0">
									1
								</div>
								<div className="flex-1 bg-surface border border-border p-8 rounded-2xl hover:shadow-md transition-shadow">
									<div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
										<H3 className="text-xl font-bold text-primary m-0">
											The Vibe Check
										</H3>
										<span className="inline-block px-3 py-1 bg-primary-soft text-primary text-xs font-bold uppercase tracking-wider rounded-full w-fit">
											Free • 30-40 min
										</span>
									</div>
									<p className="text-text-secondary mb-4 text-lg">
										Before anything else, let's simply meet as humans. No
										pitch, no pressure. Just space to feel it out together.
									</p>
									<p className="text-sm text-text-tertiary">
										<strong>Goal:</strong> mutual clarity and comfort.
									</p>
								</div>
							</div>

							{/* Step 2 */}
							<div className="flex flex-col md:flex-row gap-8">
								<div className="flex-shrink-0 w-16 h-16 bg-surface border-2 border-border rounded-full flex items-center justify-center text-2xl font-bold text-text-tertiary shadow-sm mx-auto md:mx-0">
									2
								</div>
								<div className="flex-1 bg-surface border border-border p-8 rounded-2xl hover:shadow-md transition-shadow">
									<div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
										<H3 className="text-xl font-bold text-text-primary m-0">
											Trial Coaching Session
										</H3>
										<span className="inline-block px-3 py-1 bg-surface-alt text-text-secondary text-xs font-bold uppercase tracking-wider rounded-full w-fit">
											$90 • Up to 90 min
										</span>
									</div>
									<p className="text-text-secondary mb-4 text-lg">
										Experience what it's like to be coached in this space. A
										deep, practical taste of the work. If we continue, this
										fee is subtracted from the total.
									</p>
									<p className="text-sm text-text-tertiary">
										<strong>Goal:</strong> experience the process, not just
										the promise.
									</p>
								</div>
							</div>

							{/* Step 3 */}
							<div className="flex flex-col md:flex-row gap-8">
								<div className="flex-shrink-0 w-16 h-16 bg-surface border-2 border-border rounded-full flex items-center justify-center text-2xl font-bold text-text-tertiary shadow-sm mx-auto md:mx-0">
									3
								</div>
								<div className="flex-1 bg-surface border border-border p-8 rounded-2xl hover:shadow-md transition-shadow">
									<div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
										<H3 className="text-xl font-bold text-text-primary m-0">
											The Re-Architect's Journey
										</H3>
										<span className="inline-block px-3 py-1 bg-surface-alt text-text-secondary text-xs font-bold uppercase tracking-wider rounded-full w-fit">
											4 Month Container
										</span>
									</div>
									<p className="text-text-secondary mb-4 text-lg">
										We begin. A steady, flexibly structured space for real
										change: less chaos, more clarity, and the freedom to move
										at your own rhythm.
									</p>
									<p className="text-sm text-text-tertiary">
										<strong>Goal:</strong> long-term integration and
										transformation.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Logic behind flow */}
					<div className="mt-16 bg-primary-soft/30 p-8 rounded-2xl text-center border border-primary/5">
						<H4 className="text-lg font-bold text-primary mb-3">
							Why This Flow?
						</H4>
						<p className="text-text-secondary max-w-3xl mx-auto">
							Because most of us—especially those with AuDHD—need safety before
							structure, clarity before commitment, and experience before
							investment.
						</p>
					</div>

					{/* CTA Area */}
					<div className="mt-16 text-center space-y-8">
						<div>
							<p className="text-lg font-medium text-text-primary mb-4">
								Ready to start with Step 1?
							</p>
							<Link
								to="https://calendar.app.google/DzX2xMDgSeyRDGhU7"
								target="_blank"
								className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-hover transition-all shadow-lg shadow-primary/20"
							>
								Book Your Vibe Check Call <ArrowRight className="ml-2 w-5 h-5" />
							</Link>
						</div>

						<div className="pt-8 border-t border-border w-full max-w-md mx-auto">
							<p className="text-text-secondary mb-4 text-sm">
								Already trust the vibe and want to start working?
							</p>
							<Link
								to="https://buy.stripe.com/14A7sK1IH4K8bY56OMgrS00"
								target="_blank"
								className="inline-flex items-center px-6 py-3 bg-white border border-primary/20 text-primary rounded-lg font-medium hover:bg-primary-soft transition-colors"
							>
								Book Your 90min First Session
							</Link>
						</div>

						<div className="pt-4">
							<Link
								to="/faq"
								className="text-text-tertiary text-sm hover:text-primary transition-colors underline underline-offset-4"
							>
								Frequently Asked Questions
							</Link>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}