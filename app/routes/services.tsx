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
	Users,
	XCircle,
	Zap,
} from "lucide-react";
import { AmbientBlob, GentleCard, PillDivider } from "~/components/doodles";
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

	const tiers = {
		founders: {
			payInFull: 1800,
			installment: 650,
		},
		standard: {
			payInFull: 3000,
			installment: 1100,
		},
	};

	const formatUSD = (amount: number) =>
		amount.toLocaleString("en-US", {
			style: "currency",
			currency: "USD",
			maximumFractionDigits: 0,
		});

	const installmentTotal = (installment: number) => installment * 3;

	const journeyCards = [
		{ title: "Self-Acceptance", desc: "Integrating your AuDHD identity and unlearning a lifetime of masking.", icon: Heart },
		{ title: "Burnout Recovery", desc: "Creating practical strategies for managing energy and sensory needs.", icon: BatteryCharging },
		{ title: "Productivity & Executive Function", desc: "Designing systems that work with your brain, not against it.", icon: Brain },
		{ title: "Relationships & Communication", desc: "Learning the language to express your needs and connect authentically.", icon: MessageCircle },
		{ title: "Finding Community", desc: "Exploring what it means to feel a sense of belonging.", icon: Users },
		{ title: "Pathfinding", desc: "Answering the big questions—'What does a thriving life look like for me, and how do I make it happen?'", icon: Compass },
	];

	const forYouItems = [
		"You're late-diagnosed or self-discovered and ready to move from chaos to clarity.",
		"You crave a coach who understands the exhaustion of high-masking.",
		"You believe (or want to believe) there is profound joy in being autistic.",
		"You're curious about what's possible beyond quick fixes.",
		"You bring a willingness to show up as you are, honoring your capacity.",
	];

	const notForYouItems = [
		"You need clinical therapy or crisis intervention.",
		"You're seeking a magic bullet to 'fix' you.",
		"You want group support (this is intimate 1-on-1 work).",
		"You're not ready to examine your patterns honestly.",
		"You need a fully polished, corporate-style program.",
	];

	return (
		<>
			{/* ═══ HERO ═══ */}
			<section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[-10%] right-[-10%]" size="50vw" />
				<AmbientBlob color="mist" position="bottom-[-15%] left-[-10%]" size="35vw" />

				<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
					<p className="font-hand text-gs-ink text-3xl mb-6 rotate-[-2deg]">
						a personal invitation to you
					</p>

					<h1 className="font-serif text-4xl md:text-6xl font-semibold leading-[1.2] text-gs-heading mb-8 tracking-[-0.01em]">
						The Re-Architect's Journey
					</h1>

					<PillDivider className="mb-8" />

					<p className="font-sans text-xl md:text-2xl text-gs-body leading-relaxed max-w-2xl mx-auto">
						A dedicated, 4-month partnership to help you understand your
						unique blueprint, recover from burnout, and build a life that
						actually works for your brain.
					</p>

					{/* Felt-experience mirror */}
					<GentleCard className="mt-12 max-w-2xl mx-auto text-left">
						<ul className="space-y-3">
							{[
								"You look functional. You're running on overdrive.",
								"You can do hard things… until you hit the wall.",
								"You don't need more discipline. You need a life that fits your wiring.",
							].map((item, i) => (
								<li key={i} className="flex gap-3 items-start">
									<div className="w-1.5 h-1.5 rounded-full bg-gs-ink mt-2.5 flex-shrink-0" />
									<span className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
										{item}
									</span>
								</li>
							))}
						</ul>
					</GentleCard>

					{/* CTAs */}
					<div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							to="https://calendar.app.google/DzX2xMDgSeyRDGhU7"
							target="_blank"
							className="group inline-flex items-center justify-center gap-2 bg-gs-ink text-white rounded-2xl px-8 py-4 font-sans font-medium text-lg shadow-[0_4px_12px_rgba(67,91,114,0.15)] hover:-translate-y-0.5 hover:bg-gs-ink-hover hover:shadow-[0_6px_16px_rgba(67,91,114,0.2)] transition-all duration-300 gs-press"
						>
							Book Your Vibe Check (Free)
							<ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
						</Link>

						<Link
							to="https://buy.stripe.com/14A7sK1IH4K8bY56OMgrS00"
							target="_blank"
							className="inline-flex items-center justify-center px-8 py-4 bg-gs-surface border border-gs-mist text-gs-ink rounded-2xl font-sans font-medium text-lg hover:bg-gs-cream transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.03)]"
						>
							Book a 90-min Trial Session ($90)
						</Link>
					</div>

					{/* Safety framing */}
					<GentleCard className="mt-10 max-w-3xl mx-auto text-left">
						<div className="flex gap-4 items-start">
							<Shield className="w-6 h-6 text-gs-ink flex-shrink-0 mt-0.5" />
							<p className="font-sans text-lg text-gs-body leading-relaxed">
								Because most of us—especially those with AuDHD—need{" "}
								<strong className="text-gs-heading">safety before structure</strong>,{" "}
								<strong className="text-gs-heading">clarity before commitment</strong>, and{" "}
								<strong className="text-gs-heading">experience before investment</strong>.
							</p>
						</div>
					</GentleCard>
				</div>
			</section>

			{/* ═══ CLIENT-LED JOURNEY ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="mist" position="top-[-5%] right-[-15%]" size="35vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							A Radically Responsive, Client-Led Journey
						</h2>
						<p className="font-hand text-gs-ink text-2xl">
							you lead, i consult
						</p>
					</div>

					<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed text-center max-w-3xl mx-auto mb-16">
						This is not a one-size-fits-all curriculum with pre-set modules.
						It is a deeply collaborative and client-led space. You are the
						architect of your life; my role is to act as your specialist
						consultant, helping you read your unique blueprints and understand
						your materials.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
						{journeyCards.map((item, i) => (
							<GentleCard key={i}>
								<div className="flex flex-col items-start gap-4">
									<div className="w-14 h-14 rounded-2xl bg-gs-gold/60 text-gs-ink flex items-center justify-center flex-shrink-0">
										<item.icon className="w-7 h-7" />
									</div>
									<h3 className="font-serif text-xl font-semibold text-gs-heading tracking-[-0.01em]">
										{item.title}
									</h3>
									<p className="font-sans text-[17px] text-gs-body leading-relaxed">
										{item.desc}
									</p>
								</div>
							</GentleCard>
						))}
					</div>

					<GentleCard className="max-w-4xl mx-auto">
						<div className="flex flex-col md:flex-row gap-8 items-center">
							<div className="flex-shrink-0 w-16 h-16 rounded-full bg-gs-gold/60 flex items-center justify-center">
								<Map className="w-8 h-8 text-gs-ink" />
							</div>
							<div className="space-y-4 text-center md:text-left">
								<p className="font-sans text-lg font-semibold text-gs-heading leading-relaxed">
									You set the destination. I help you read the map and navigate the terrain.
								</p>
								<p className="font-sans text-lg text-gs-body leading-relaxed">
									We'll take your spoon levels into account at each session. Not
									every session has to be a deep dive. Sometimes it's just about
									recentering, accepting where you are and figuring out where to
									go from there.
								</p>
							</div>
						</div>
					</GentleCard>
				</div>
			</section>

			{/* ═══ THE COACHING CONTAINER ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[-10%] left-[-10%]" size="45vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							The Coaching Container
						</h2>
						<p className="font-hand text-gs-ink text-2xl">
							the scaffolding for deep work
						</p>
					</div>

					<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed text-center max-w-3xl mx-auto mb-16">
						To do this deep, client-led work, we need a container built on
						trust and consistency. This structure is the reliable scaffolding
						that gives our exploratory work a safe place to land.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
						{/* Duration */}
						<GentleCard>
							<div className="relative overflow-hidden">
								<div className="absolute top-0 right-0 opacity-5">
									<Calendar className="w-20 h-20 text-gs-ink" />
								</div>
								<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gs-gold/60 text-gs-ink font-sans text-2xl font-semibold">
									16
								</div>
								<h3 className="font-serif text-xl font-semibold text-gs-heading mb-3 tracking-[-0.01em]">
									Duration
								</h3>
								<p className="font-sans text-[17px] text-gs-body leading-relaxed">
									A 4-month (16-week) deep dive to allow for real, sustainable change.
								</p>
							</div>
						</GentleCard>

						{/* Core Sessions */}
						<GentleCard>
							<div className="relative overflow-hidden">
								<div className="absolute top-0 right-0 opacity-5">
									<Clock className="w-20 h-20 text-gs-ink" />
								</div>
								<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gs-gold/60 text-gs-ink">
									<Users className="w-7 h-7" />
								</div>
								<h3 className="font-serif text-xl font-semibold text-gs-heading mb-3 tracking-[-0.01em]">
									Core Sessions
								</h3>
								<p className="font-sans text-[17px] text-gs-body leading-relaxed">
									16 weekly, 60-minute 1-on-1 Re-Architect Sessions. Dedicated
									time for the strategic work that matters most.
								</p>
							</div>
						</GentleCard>

						{/* Responsive Support */}
						<GentleCard>
							<div className="relative overflow-hidden">
								<div className="absolute top-0 right-0 opacity-5">
									<Zap className="w-20 h-20 text-gs-ink" />
								</div>
								<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gs-gold/60 text-gs-ink">
									<Zap className="w-7 h-7" />
								</div>
								<h3 className="font-serif text-xl font-semibold text-gs-heading mb-3 tracking-[-0.01em]">
									Responsive Support
								</h3>
								<p className="font-sans text-[17px] text-gs-body leading-relaxed">
									Up to 2 weekly, 20-minute "Spotlight Sessions" for real-time
									implementation support (scripts, stuck moments, quick decisions).
								</p>
								<p className="font-sans text-sm text-gs-body/70 mt-3">
									Request by message/email. I aim to respond within 1–2 business days (weekdays).
								</p>
							</div>
						</GentleCard>
					</div>

					{/* What sessions feel like */}
					<GentleCard className="max-w-4xl mx-auto mb-12">
						<h3 className="font-serif text-xl font-semibold text-gs-heading mb-6 tracking-[-0.01em]">
							What sessions feel like (most weeks)
						</h3>
						<ul className="space-y-4">
							{[
								"We start with a quick capacity check (deep dive vs stabilize).",
								"We pick one focus and make it smaller than your brain expects.",
								"We leave with a Plan A and a low-spoons Plan B.",
								'We do a friction forecast ("what might derail this?") and adjust.',
							].map((item, i) => (
								<li key={i} className="flex gap-3 items-start">
									<CheckCircle2 className="w-5 h-5 text-gs-ink flex-shrink-0 mt-0.5" />
									<span className="font-sans text-[17px] text-gs-body leading-relaxed">
										{item}
									</span>
								</li>
							))}
						</ul>
					</GentleCard>

					{/* Capacity & Integrity */}
					<GentleCard className="max-w-4xl mx-auto mb-12">
						<div className="flex gap-6 items-start">
							<Shield className="w-8 h-8 text-gs-ink flex-shrink-0 mt-1" />
							<div>
								<h3 className="font-serif text-xl font-semibold text-gs-heading mb-4 tracking-[-0.01em]">
									A Note on Capacity & Integrity
								</h3>
								<p className="font-sans text-[17px] text-gs-body leading-relaxed mb-4">
									I am still navigating my own recovery from burnout. Because of
									this, and to protect the depth and integrity of our work, I take
									on a maximum of two to three new clients per month.
								</p>
								<p className="font-sans text-[17px] font-medium text-gs-ink leading-relaxed">
									This isn't a marketing tactic; it's me practicing
									sustainability. It ensures you get my focused, present, and
									highest-quality engagement.
								</p>
							</div>
						</div>
					</GentleCard>

					{/* Overwhelmed callout */}
					<GentleCard className="max-w-4xl mx-auto">
						<div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
							<div className="flex gap-4 items-start">
								<div className="p-3 bg-gs-gold/60 rounded-2xl">
									<Shield className="w-6 h-6 text-gs-ink" />
								</div>
								<div>
									<h4 className="font-serif text-lg font-semibold text-gs-heading mb-1">
										If you're overwhelmed, start here.
									</h4>
									<p className="font-sans text-sm text-gs-body">
										You don't have to decide everything today. Book the free Vibe
										Check, and we'll find the next tiny step together—without pressure.
									</p>
								</div>
							</div>
							<Link
								to="https://calendar.app.google/DzX2xMDgSeyRDGhU7"
								target="_blank"
								className="group inline-flex items-center justify-center gap-2 px-7 py-3 bg-gs-ink text-white rounded-2xl font-sans font-medium shadow-[0_4px_12px_rgba(67,91,114,0.15)] hover:-translate-y-0.5 hover:bg-gs-ink-hover hover:shadow-[0_6px_16px_rgba(67,91,114,0.2)] transition-all duration-300 gs-press w-full md:w-auto"
							>
								Book Your Vibe Check Call
								<ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
							</Link>
						</div>
					</GentleCard>
				</div>
			</section>

			{/* ═══ PRICING ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream" id={tierPricingId}>
				<AmbientBlob color="mist" position="top-[-10%] right-[-15%]" size="35vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							Founding Client Opportunities
						</h2>
						<p className="font-hand text-gs-ink text-2xl rotate-[-1deg]">
							transparent pricing, pinky promise
						</p>
					</div>

					<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed text-center max-w-3xl mx-auto mb-4">
						My fees are out in the open. Nothing I hate more than hidden fees.
						This framework has been my lifeline, and I'm inviting a small
						group to partner with me as I refine it.
					</p>
					<div className="text-center mb-16">
						<span className="font-sans text-sm font-medium text-gs-ink bg-gs-gold/40 inline-block px-4 py-2 rounded-full">
							I review requests in the order I hear from folks.
						</span>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto items-start">
						{/* Founder's Tier */}
						<GentleCard className="md:-translate-y-4 z-10 border-2 border-gs-ink/20">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
								<span className="bg-gs-ink text-white px-6 py-1.5 rounded-full text-sm font-sans font-medium shadow-md tracking-wide whitespace-nowrap">
									Current Tier
								</span>
							</div>
							<div className="text-center pb-6 border-b border-gs-mist/50 mb-6">
								<h3 className="font-serif text-2xl font-semibold text-gs-heading mb-2 tracking-[-0.01em]">
									Founder's
								</h3>
								<div className="flex items-baseline justify-center gap-1 mb-1">
									<span className="font-sans text-4xl font-semibold text-gs-heading">
										{formatUSD(tiers.founders.payInFull)}
									</span>
									<span className="font-sans text-sm text-gs-body">/ pay in full</span>
								</div>
								<p className="font-sans text-sm text-gs-body">
									or 3 payments of{" "}
									<span className="font-medium text-gs-heading">{formatUSD(tiers.founders.installment)}</span>{" "}
									(total <span className="font-medium text-gs-heading">{formatUSD(installmentTotal(tiers.founders.installment))}</span>)
								</p>
								<p className="font-sans text-sm font-medium text-gs-ink mt-3">5 Spots Left</p>
								<p className="font-sans text-sm text-gs-body line-through mt-1">
									Full Value: {formatUSD(tiers.standard.payInFull)}
								</p>
							</div>
							<p className="font-sans text-[17px] text-gs-body text-center leading-relaxed">
								A founding rate for early clients partnering with me as the framework is refined. Best value exchange.
							</p>
						</GentleCard>

						{/* Standard Investment */}
						<GentleCard>
							<div className="text-center pb-6 border-b border-gs-mist/50 mb-6">
								<h3 className="font-serif text-2xl font-semibold text-gs-heading mb-2 tracking-[-0.01em]">Standard</h3>
								<div className="flex items-baseline justify-center gap-1 mb-1">
									<span className="font-sans text-4xl font-semibold text-gs-body">{formatUSD(tiers.standard.payInFull)}</span>
									<span className="font-sans text-sm text-gs-body">/ pay in full</span>
								</div>
								<p className="font-sans text-sm text-gs-body">
									or 3 payments of{" "}
									<span className="font-medium text-gs-heading">{formatUSD(tiers.standard.installment)}</span>{" "}
									(total <span className="font-medium text-gs-heading">{formatUSD(installmentTotal(tiers.standard.installment))}</span>)
								</p>
								<p className="font-sans text-sm text-gs-body mt-3">Future Pricing</p>
							</div>
							<p className="font-sans text-[17px] text-gs-body text-center leading-relaxed">
								The established program rate after all founding spots are filled.
							</p>
						</GentleCard>
					</div>

					{/* Payment explanation */}
					<GentleCard className="mt-12 max-w-4xl mx-auto">
						<div className="flex gap-4 items-start">
							<Shield className="w-6 h-6 text-gs-ink flex-shrink-0 mt-0.5" />
							<div>
								<h4 className="font-serif text-lg font-semibold text-gs-heading mb-2">About payment options</h4>
								<p className="font-sans text-lg text-gs-body leading-relaxed">
									<strong className="text-gs-heading">Pay-in-full is discounted.</strong> Payment plans include
									a small continuity buffer because I reserve a limited number of
									client spots and protect that capacity over four months.
								</p>
							</div>
						</div>
					</GentleCard>
				</div>
			</section>

			{/* ═══ FOR YOU / NOT FOR YOU ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[-5%] left-[-10%]" size="35vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<GentleCard className="border border-gs-mist">
							<div className="flex items-center gap-3 mb-8">
								<div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gs-gold/60 text-gs-ink">
									<CheckCircle2 className="w-6 h-6" />
								</div>
								<h3 className="font-serif text-2xl font-semibold text-gs-heading m-0 tracking-[-0.01em]">
									This Journey is For You If:
								</h3>
							</div>
							<ul className="space-y-4">
								{forYouItems.map((item, i) => (
									<li key={i} className="flex gap-4 items-start">
										<div className="w-1.5 h-1.5 rounded-full bg-gs-ink mt-3 flex-shrink-0" />
										<span className="font-sans text-lg text-gs-body leading-relaxed">{item}</span>
									</li>
								))}
							</ul>
						</GentleCard>

						<GentleCard>
							<div className="flex items-center gap-3 mb-8">
								<div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gs-mist/40 text-gs-body">
									<XCircle className="w-6 h-6" />
								</div>
								<h3 className="font-serif text-2xl font-semibold text-gs-body m-0 tracking-[-0.01em]">
									This is NOT The Right Path If:
								</h3>
							</div>
							<ul className="space-y-4">
								{notForYouItems.map((item, i) => (
									<li key={i} className="flex gap-4 items-start">
										<div className="w-1.5 h-1.5 rounded-full bg-gs-mist mt-3 flex-shrink-0" />
										<span className="font-sans text-lg text-gs-body leading-relaxed">{item}</span>
									</li>
								))}
							</ul>
						</GentleCard>
					</div>

					{/* Coaching work note */}
					<GentleCard className="mt-12 max-w-4xl mx-auto border-l-4 border-gs-ink">
						<h4 className="font-serif text-lg font-semibold text-gs-heading mb-2">This Journey is Coaching Work</h4>
						<p className="font-sans text-lg text-gs-body leading-relaxed mb-2">
							<strong className="text-gs-heading">What I will validate:</strong> Your emotions and experience, always.
						</p>
						<p className="font-sans text-lg text-gs-body leading-relaxed">
							<strong className="text-gs-heading">What I will question:</strong> Your reactions and the stories these emotions come from. Not to judge, but for the sake of curious exploration. It <strong className="text-gs-heading">will</strong> be annoying sometimes.
						</p>
					</GentleCard>

					{/* Mid-page CTA */}
					<div className="mt-12 text-center">
						<Link
							to="https://calendar.app.google/DzX2xMDgSeyRDGhU7"
							target="_blank"
							className="group inline-flex items-center gap-2 bg-gs-ink text-white rounded-2xl px-8 py-4 font-sans font-medium text-lg shadow-[0_4px_12px_rgba(67,91,114,0.15)] hover:-translate-y-0.5 hover:bg-gs-ink-hover hover:shadow-[0_6px_16px_rgba(67,91,114,0.2)] transition-all duration-300 gs-press"
						>
							Book Your Vibe Check Call
							<ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
						</Link>
					</div>

					<div className="mt-12 text-center">
						<p className="font-sans text-lg text-gs-body leading-relaxed max-w-3xl mx-auto">
							From my Substack,{" "}
							<Link
								to="https://dabii.substack.com/"
								target="_blank"
								className="text-gs-ink font-medium hover:underline underline-offset-4 decoration-2"
							>
								"But you don't look autistic"
							</Link>
							, to this program, my mission is the same: to help us feel seen,
							understood, and empowered.
						</p>
					</div>
				</div>
			</section>

			{/* ═══ HOW TO GET STARTED ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="mist" position="top-[-10%] left-[-10%]" size="40vw" />
				<AmbientBlob color="gold" position="bottom-[-10%] right-[-5%]" size="30vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							How to Get Started
						</h2>
						<p className="font-hand text-gs-ink text-2xl rotate-[1deg]">
							three gentle steps
						</p>
					</div>

					<div className="space-y-10 max-w-4xl mx-auto">
						{/* Step 1 */}
						<GentleCard>
							<div className="flex flex-col md:flex-row gap-8">
								<div className="flex-shrink-0 w-16 h-16 bg-gs-gold/60 rounded-full flex items-center justify-center font-sans text-2xl font-semibold text-gs-ink mx-auto md:mx-0">
									1
								</div>
								<div className="flex-1">
									<div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
										<h3 className="font-serif text-xl font-semibold text-gs-heading m-0 tracking-[-0.01em]">The Vibe Check</h3>
										<span className="inline-block px-3 py-1 bg-gs-gold/40 text-gs-ink text-xs font-sans font-medium uppercase tracking-wider rounded-full w-fit">
											Free &bull; 30-40 min
										</span>
									</div>
									<p className="font-sans text-lg text-gs-body leading-relaxed mb-4">
										Before anything else, let's simply meet as humans. No pitch, no pressure. Just space to feel it out together.
									</p>
									<GentleCard variant="cream" className="mb-4">
										<p className="font-sans text-sm font-medium text-gs-body mb-3">What we'll do:</p>
										<ul className="space-y-2">
											{[
												"Quick capacity check + what's bringing you here",
												"Map the stuck loop (burnout / masking / EF / relationships)",
												"Identify what kind of support would feel safe + workable",
												"Decide next step (trial session or not)",
											].map((item, i) => (
												<li key={i} className="flex gap-3 items-start">
													<div className="w-1.5 h-1.5 rounded-full bg-gs-ink mt-2.5 flex-shrink-0" />
													<span className="font-sans text-sm text-gs-body leading-relaxed">{item}</span>
												</li>
											))}
										</ul>
									</GentleCard>
									<p className="font-sans text-sm text-gs-body">
										<strong className="text-gs-heading">Goal:</strong> mutual clarity and comfort. You'll leave with at least one small next step—no matter what you decide.
									</p>
								</div>
							</div>
						</GentleCard>

						{/* Step 2 */}
						<GentleCard>
							<div className="flex flex-col md:flex-row gap-8">
								<div className="flex-shrink-0 w-16 h-16 bg-gs-mist/40 rounded-full flex items-center justify-center font-sans text-2xl font-semibold text-gs-body mx-auto md:mx-0">
									2
								</div>
								<div className="flex-1">
									<div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
										<h3 className="font-serif text-xl font-semibold text-gs-heading m-0 tracking-[-0.01em]">Trial Coaching Session</h3>
										<span className="inline-block px-3 py-1 bg-gs-mist/30 text-gs-body text-xs font-sans font-medium uppercase tracking-wider rounded-full w-fit">
											$90 &bull; Up to 90 min
										</span>
									</div>
									<p className="font-sans text-lg text-gs-body leading-relaxed mb-4">
										Experience what it's like to be coached in this space. A deep, practical taste of the work. If we continue, this fee is subtracted from the total.
									</p>
									<p className="font-sans text-sm text-gs-body">
										<strong className="text-gs-heading">Goal:</strong> experience the process, not just the promise.
									</p>
								</div>
							</div>
						</GentleCard>

						{/* Step 3 */}
						<GentleCard>
							<div className="flex flex-col md:flex-row gap-8">
								<div className="flex-shrink-0 w-16 h-16 bg-gs-mist/40 rounded-full flex items-center justify-center font-sans text-2xl font-semibold text-gs-body mx-auto md:mx-0">
									3
								</div>
								<div className="flex-1">
									<div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
										<h3 className="font-serif text-xl font-semibold text-gs-heading m-0 tracking-[-0.01em]">The Re-Architect's Journey</h3>
										<span className="inline-block px-3 py-1 bg-gs-mist/30 text-gs-body text-xs font-sans font-medium uppercase tracking-wider rounded-full w-fit">
											4 Month Container
										</span>
									</div>
									<p className="font-sans text-lg text-gs-body leading-relaxed mb-4">
										We begin. A steady, flexibly structured space for real change: less chaos, more clarity, and the freedom to move at your own rhythm.
									</p>
									<p className="font-sans text-sm text-gs-body">
										<strong className="text-gs-heading">Goal:</strong> long-term integration and transformation.
									</p>
								</div>
							</div>
						</GentleCard>
					</div>

					{/* Why this flow */}
					<GentleCard className="mt-16 max-w-4xl mx-auto">
						<div className="text-center">
							<h4 className="font-serif text-lg font-semibold text-gs-heading mb-3">Why This Flow?</h4>
							<p className="font-sans text-lg text-gs-body leading-relaxed max-w-3xl mx-auto">
								Because most of us—especially those with AuDHD—need safety before
								structure, clarity before commitment, and experience before investment.
							</p>
						</div>
					</GentleCard>

					{/* CTA Area */}
					<div className="mt-16 text-center space-y-8">
						<div>
							<p className="font-hand text-gs-ink text-2xl mb-4 rotate-[-1deg]">
								ready? let's go!
							</p>
							<p className="font-sans text-lg font-medium text-gs-heading mb-6">
								Ready to start with Step 1?
							</p>
							<Link
								to="https://calendar.app.google/DzX2xMDgSeyRDGhU7"
								target="_blank"
								className="group inline-flex items-center gap-3 bg-gs-ink text-white rounded-2xl px-10 py-5 font-sans font-medium text-xl shadow-[0_4px_12px_rgba(67,91,114,0.15)] hover:-translate-y-0.5 hover:bg-gs-ink-hover hover:shadow-[0_6px_16px_rgba(67,91,114,0.2)] transition-all duration-300 gs-press"
							>
								Book Your Vibe Check Call
								<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
							</Link>
						</div>

						<div className="pt-8 w-full max-w-md mx-auto">
							<div className="w-24 h-px bg-gs-mist mx-auto mb-8" />
							<p className="font-sans text-sm text-gs-body mb-4">
								Already trust the vibe and want to start working?
							</p>
							<Link
								to="https://buy.stripe.com/14A7sK1IH4K8bY56OMgrS00"
								target="_blank"
								className="inline-flex items-center px-6 py-3 bg-gs-surface border border-gs-mist text-gs-ink rounded-2xl font-sans font-medium hover:bg-gs-cream transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.03)]"
							>
								Book a 90-min Trial Session
							</Link>
						</div>

						<div className="pt-4">
							<Link
								to="/faq"
								className="font-sans text-sm text-gs-body hover:text-gs-ink transition-colors underline underline-offset-4"
							>
								Frequently Asked Questions
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
