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
import {
	BigDoodleLeaf,
	BigDoodleStar,
	DoodleCard,
	ScribblyUnderline,
	SparkleCluster,
	SunburstSVG,
	WavyDivider,
} from "~/components/doodles";
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

	// Pricing (3 total payments) — pay-in-full is discounted
	const tiers = {
		founders: {
			payInFull: 1800,
			installment: 650, // total 1950
		},
		standard: {
			payInFull: 3000,
			installment: 1100, // total 3300
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
			{/* ═══════════════════════════════════════════
			    HERO — cream background
			    ═══════════════════════════════════════════ */}
			<section className="relative pt-18 pb-20 md:pt-28 md:pb-32 overflow-hidden bg-sd-cream">
				{/* Background decorations */}
				<BigDoodleLeaf className="absolute top-20 left-4 w-20 h-28 float-b1" />
				<SparkleCluster className="absolute top-16 right-12 w-10 h-10 twinkle-1" />

				<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
					{/* Handwritten annotation */}
					<p className="font-handwritten text-sd-gold text-3xl mb-6" style={{ transform: "rotate(-2deg)" }}>
						a personal invitation to you
					</p>

					<h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.25] text-sd-heading mb-6">
						The Re-Architect's Journey
					</h1>

					<ScribblyUnderline colorVar="--sd-gold" className="w-48 md:w-64 mb-8" />

					<p className="font-body text-xl md:text-2xl text-sd-dim-text leading-[2] max-w-2xl mx-auto">
						A dedicated, 4-month partnership to help you understand your
						unique blueprint, recover from burnout, and build a life that
						actually works for your brain.
					</p>

					{/* Felt-experience mirror */}
					<DoodleCard className="mt-10 max-w-2xl mx-auto text-left">
						<ul className="space-y-3">
							{[
								"You look functional. You're running on overdrive.",
								"You can do hard things… until you hit the wall.",
								"You don't need more discipline. You need a life that fits your wiring.",
							].map((item, i) => (
								<li key={i} className="flex gap-3 items-start">
									<div className="w-1.5 h-1.5 rounded-full bg-sd-emerald mt-2.5 flex-shrink-0" />
									<span className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
										{item}
									</span>
								</li>
							))}
						</ul>
					</DoodleCard>

					{/* Primary CTAs */}
					<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							to="https://calendar.app.google/DzX2xMDgSeyRDGhU7"
							target="_blank"
							className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-sd-deep-green text-white rounded-full font-body font-bold text-lg transition-transform duration-200 ease-out hover:-translate-y-2 hover:scale-105 shadow-[0_12px_35px_var(--sd-deep-green)/0.3]"
						>
							Book Your Vibe Check (Free)
							<ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
						</Link>

						<Link
							to="https://buy.stripe.com/14A7sK1IH4K8bY56OMgrS00"
							target="_blank"
							className="inline-flex items-center justify-center px-8 py-4 bg-sd-cream border-2 border-dashed border-sd-sage/35 text-sd-emerald rounded-full font-body font-bold text-lg hover:bg-sd-linen transition-colors"
						>
							Book a 90-min Trial Session ($90)
						</Link>
					</div>

					{/* Safety framing */}
					<div className="mt-8 max-w-3xl mx-auto bg-sd-linen/60 border-2 border-dashed border-sd-sage/25 rounded-2xl p-6 flex gap-4 items-start text-left">
						<Shield className="w-6 h-6 text-sd-emerald flex-shrink-0 mt-0.5" />
						<p className="font-body text-lg text-sd-dim-text leading-[2]">
							Because most of us—especially those with AuDHD—need{" "}
							<strong className="text-sd-text">safety before structure</strong>,{" "}
							<strong className="text-sd-text">clarity before commitment</strong>, and{" "}
							<strong className="text-sd-text">experience before investment</strong>.
						</p>
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-linen" />

			{/* ═══════════════════════════════════════════
			    CLIENT-LED JOURNEY — linen background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-linen">
				<SparkleCluster className="absolute top-12 right-12 w-10 h-10 twinkle-1" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
							A Radically Responsive, Client-Led Journey
						</h2>
						<ScribblyUnderline colorVar="--sd-emerald" className="w-56 md:w-72 mb-4" />
						<p className="font-handwritten text-sd-emerald text-2xl">
							you lead, i consult
						</p>
					</div>

					<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2] text-center max-w-3xl mx-auto mb-14">
						This is not a one-size-fits-all curriculum with pre-set modules.
						It is a deeply collaborative and client-led space. You are the
						architect of your life; my role is to act as your specialist
						consultant, helping you read your unique blueprints and understand
						your materials.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
						{journeyCards.map((item, i) => (
							<DoodleCard key={i}>
								<div className="flex flex-col items-start gap-4">
									<div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-sd-sage/15 text-sd-emerald">
										<item.icon className="w-7 h-7" />
									</div>
									<h3 className="font-heading text-xl font-semibold text-sd-heading">
										{item.title}
									</h3>
									<p className="font-body text-[17px] text-sd-dim-text leading-[2]">
										{item.desc}
									</p>
								</div>
							</DoodleCard>
						))}
					</div>

					<DoodleCard className="max-w-4xl mx-auto">
						<div className="flex flex-col md:flex-row gap-8 items-center">
							<div className="flex-shrink-0 w-16 h-16 rounded-full bg-sd-sage/15 flex items-center justify-center">
								<Map className="w-8 h-8 text-sd-emerald" />
							</div>
							<div className="space-y-4 text-center md:text-left">
								<p className="font-body text-lg font-semibold text-sd-heading leading-[2]">
									You set the destination. I help you read the map and navigate
									the terrain.
								</p>
								<p className="font-body text-lg text-sd-dim-text leading-[2]">
									We'll take your spoon levels into account at each session. Not
									every session has to be a deep dive. Sometimes it's just about
									recentering, accepting where you are and figuring out where to
									go from there.
								</p>
							</div>
						</div>
					</DoodleCard>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-on-dark-bg" />

			{/* ═══════════════════════════════════════════
			    THE COACHING CONTAINER — dark section
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-on-dark-bg">
				<SparkleCluster className="absolute top-12 right-16 w-10 h-10 twinkle-1" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-on-dark-heading">
							The Coaching Container
						</h2>
						<ScribblyUnderline colorVar="--sd-gold" className="w-56 md:w-72 mb-4" />
						<p className="font-handwritten text-sd-on-dark-dim text-2xl">
							the scaffolding for deep work
						</p>
					</div>

					<p className="font-body text-lg md:text-xl text-sd-on-dark-text/75 leading-[2] text-center max-w-3xl mx-auto mb-14">
						To do this deep, client-led work, we need a container built on
						trust and consistency. This structure is the reliable scaffolding
						that gives our exploratory work a safe place to land.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
						{/* Duration */}
						<div
							className="doodle-hover rounded-2xl flex flex-col border-2 border-dashed border-sd-on-dark-dim/15 bg-sd-on-dark-text/5"
						>
							<div className="p-8 md:p-10 flex flex-col relative overflow-hidden">
								<div className="absolute top-4 right-4 opacity-10">
									<Calendar className="w-20 h-20 text-sd-gold" />
								</div>
								<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-sd-on-dark-dim/20 text-sd-gold font-heading text-2xl font-bold">
									16
								</div>
								<h3 className="font-heading text-xl font-semibold text-sd-on-dark-heading mb-3">
									Duration
								</h3>
								<p className="font-body text-[17px] text-sd-on-dark-text/75 leading-[2]">
									A 4-month (16-week) deep dive to allow for real, sustainable
									change.
								</p>
							</div>
						</div>

						{/* Core Sessions */}
						<div
							className="doodle-hover rounded-2xl flex flex-col border-2 border-dashed border-sd-on-dark-dim/15 bg-sd-on-dark-text/5"
						>
							<div className="p-8 md:p-10 flex flex-col relative overflow-hidden">
								<div className="absolute top-4 right-4 opacity-10">
									<Clock className="w-20 h-20 text-sd-gold" />
								</div>
								<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-sd-on-dark-dim/20 text-sd-gold">
									<Users className="w-7 h-7" />
								</div>
								<h3 className="font-heading text-xl font-semibold text-sd-on-dark-heading mb-3">
									Core Sessions
								</h3>
								<p className="font-body text-[17px] text-sd-on-dark-text/75 leading-[2]">
									16 weekly, 60-minute 1-on-1 Re-Architect Sessions. Dedicated
									time for the strategic work that matters most.
								</p>
							</div>
						</div>

						{/* Responsive Support */}
						<div
							className="doodle-hover rounded-2xl flex flex-col border-2 border-dashed border-sd-on-dark-dim/15 bg-sd-on-dark-text/5"
						>
							<div className="p-8 md:p-10 flex flex-col relative overflow-hidden">
								<div className="absolute top-4 right-4 opacity-10">
									<Zap className="w-20 h-20 text-sd-gold" />
								</div>
								<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-sd-on-dark-dim/20 text-sd-gold">
									<Zap className="w-7 h-7" />
								</div>
								<h3 className="font-heading text-xl font-semibold text-sd-on-dark-heading mb-3">
									Responsive Support
								</h3>
								<p className="font-body text-[17px] text-sd-on-dark-text/75 leading-[2]">
									Up to 2 weekly, 20-minute "Spotlight Sessions" for real-time
									implementation support (scripts, stuck moments, quick decisions).
								</p>
								<p className="font-body text-sm text-sd-on-dark-dim mt-3">
									Request by message/email. I aim to respond within 1–2 business
									days (weekdays).
								</p>
							</div>
						</div>
					</div>

					{/* What sessions feel like */}
					<div className="max-w-4xl mx-auto border-2 border-dashed border-sd-on-dark-dim/15 bg-sd-on-dark-text/5 rounded-2xl p-8 md:p-10 mb-12">
						<h3 className="font-heading text-xl font-semibold text-sd-on-dark-heading mb-6">
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
									<CheckCircle2 className="w-5 h-5 text-sd-gold flex-shrink-0 mt-0.5" />
									<span className="font-body text-[17px] text-sd-on-dark-text/75 leading-[2]">
										{item}
									</span>
								</li>
							))}
						</ul>
					</div>

					{/* Capacity & Integrity */}
					<div className="max-w-4xl mx-auto border-2 border-dashed border-sd-on-dark-dim/15 bg-sd-on-dark-text/5 rounded-2xl p-8 md:p-10 flex gap-6 items-start">
						<Shield className="w-8 h-8 text-sd-gold flex-shrink-0 mt-1" />
						<div>
							<h3 className="font-heading text-xl font-semibold text-sd-on-dark-heading mb-4">
								A Note on Capacity & Integrity
							</h3>
							<p className="font-body text-[17px] text-sd-on-dark-text/75 leading-[2] mb-4">
								I am still navigating my own recovery from burnout. Because of
								this, and to protect the depth and integrity of our work, I take
								on a maximum of two to three new clients per month.
							</p>
							<p className="font-body text-[17px] font-semibold text-sd-gold leading-[2]">
								This isn't a marketing tactic; it's me practicing
								sustainability. It ensures you get my focused, present, and
								highest-quality engagement.
							</p>
						</div>
					</div>

					{/* Overwhelmed callout */}
					<div className="mt-12 max-w-4xl mx-auto border-2 border-dashed border-sd-gold/25 bg-sd-on-dark-text/5 rounded-2xl p-7 md:p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
						<div className="flex gap-4 items-start">
							<div className="p-3 bg-sd-on-dark-dim/20 rounded-xl">
								<Shield className="w-6 h-6 text-sd-gold" />
							</div>
							<div>
								<h4 className="font-heading text-lg font-semibold text-sd-on-dark-heading mb-1">
									If you're overwhelmed, start here.
								</h4>
								<p className="font-body text-sm text-sd-on-dark-dim">
									You don't have to decide everything today. Book the free Vibe
									Check, and we'll find the next tiny step together—without
									pressure.
								</p>
							</div>
						</div>

						<Link
							to="https://calendar.app.google/DzX2xMDgSeyRDGhU7"
							target="_blank"
							className="group inline-flex items-center justify-center gap-2 px-7 py-3 bg-sd-gold text-sd-on-dark-bg rounded-full font-body font-bold hover:scale-105 transition-transform duration-200 ease-out w-full md:w-auto"
						>
							Book Vibe Check
							<ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
						</Link>
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-cream" />

			{/* ═══════════════════════════════════════════
			    FOUNDING CLIENT OPPORTUNITIES — cream background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-cream" id={tierPricingId}>
				<SparkleCluster className="absolute top-16 left-8 w-10 h-10 twinkle-2" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
							Founding Client Opportunities
						</h2>
						<ScribblyUnderline colorVar="--sd-gold" className="w-56 md:w-72 mb-4" />
						<p className="font-handwritten text-sd-gold text-2xl" style={{ transform: "rotate(-1deg)" }}>
							transparent pricing, pinky promise
						</p>
					</div>

					<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2] text-center max-w-3xl mx-auto mb-4">
						My fees are out in the open. Nothing I hate more than hidden fees.
						This framework has been my lifeline, and I'm inviting a small
						group to partner with me as I refine it.
					</p>
					<div className="text-center mb-14">
						<span className="font-body text-sm font-semibold text-sd-emerald bg-sd-linen inline-block px-4 py-2 rounded-full">
							Applications are reviewed in the order they are received.
						</span>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto items-start">
						{/* Founder's Tier — featured */}
						<DoodleCard className="md:-translate-y-4 z-10 border-2 border-sd-gold">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
								<span className="bg-sd-gold text-white px-6 py-1.5 rounded-full text-sm font-body font-bold shadow-md tracking-wide whitespace-nowrap">
									Current Tier
								</span>
							</div>
							<div className="text-center pb-6 border-b border-sd-sage/20 mb-6">
								<h3 className="font-heading text-2xl font-semibold text-sd-heading mb-2">
									Founder's
								</h3>

								<div className="flex items-baseline justify-center gap-1 mb-1">
									<span className="font-heading text-4xl font-bold text-sd-text">
										{formatUSD(tiers.founders.payInFull)}
									</span>
									<span className="font-body text-sm text-sd-dim-text">/ pay in full</span>
								</div>

								<p className="font-body text-sm text-sd-dim-text">
									or 3 payments of{" "}
									<span className="font-semibold text-sd-text">
										{formatUSD(tiers.founders.installment)}
									</span>{" "}
									(total{" "}
									<span className="font-semibold text-sd-text">
										{formatUSD(installmentTotal(tiers.founders.installment))}
									</span>
									)
								</p>

								<p className="font-body text-sm font-semibold text-sd-emerald mt-3">
									5 Spots Left
								</p>
								<p className="font-body text-sm text-sd-dim-text line-through mt-1">
									Full Value: {formatUSD(tiers.standard.payInFull)}
								</p>
							</div>

							<p className="font-body text-[17px] text-sd-dim-text text-center leading-[2]">
								A founding rate for early clients partnering with me
								as the framework is refined. Best value exchange.
							</p>
						</DoodleCard>

						{/* Standard Investment */}
						<DoodleCard>
							<div className="text-center pb-6 border-b border-sd-sage/20 mb-6">
								<h3 className="font-heading text-2xl font-semibold text-sd-heading mb-2">
									Standard
								</h3>

								<div className="flex items-baseline justify-center gap-1 mb-1">
									<span className="font-heading text-4xl font-bold text-sd-dim-text">
										{formatUSD(tiers.standard.payInFull)}
									</span>
									<span className="font-body text-sm text-sd-dim-text">/ pay in full</span>
								</div>

								<p className="font-body text-sm text-sd-dim-text">
									or 3 payments of{" "}
									<span className="font-semibold text-sd-text">
										{formatUSD(tiers.standard.installment)}
									</span>{" "}
									(total{" "}
									<span className="font-semibold text-sd-text">
										{formatUSD(installmentTotal(tiers.standard.installment))}
									</span>
									)
								</p>

								<p className="font-body text-sm text-sd-dim-text mt-3">
									Future Pricing
								</p>
							</div>

							<p className="font-body text-[17px] text-sd-dim-text text-center leading-[2]">
								The established program rate after all founding spots are
								filled.
							</p>
						</DoodleCard>
					</div>

					{/* Payment explanation */}
					<div className="mt-10 max-w-4xl mx-auto bg-sd-linen/60 border-2 border-dashed border-sd-sage/25 rounded-2xl p-8 flex gap-4 items-start text-left">
						<Shield className="w-6 h-6 text-sd-emerald flex-shrink-0 mt-0.5" />
						<div>
							<h4 className="font-heading text-lg font-semibold text-sd-heading mb-2">
								About payment options
							</h4>
							<p className="font-body text-lg text-sd-dim-text leading-[2]">
								<strong className="text-sd-text">Pay-in-full is discounted.</strong> Payment plans include
								a small continuity buffer because I reserve a limited number of
								client spots and protect that capacity over four months.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-linen" />

			{/* ═══════════════════════════════════════════
			    FOR YOU / NOT FOR YOU — linen background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-linen">
				<SparkleCluster className="absolute top-12 left-12 w-10 h-10 twinkle-1" />
				<BigDoodleStar className="absolute top-20 right-[12%] w-12 h-12 twinkle-3" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* For You */}
						<DoodleCard className="border-2 border-sd-emerald/20">
							<div className="flex items-center gap-3 mb-8">
								<div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-sd-sage/15 text-sd-emerald">
									<CheckCircle2 className="w-6 h-6" />
								</div>
								<h3 className="font-heading text-2xl font-semibold text-sd-heading m-0">
									This Journey is For You If:
								</h3>
							</div>
							<ul className="space-y-4">
								{forYouItems.map((item, i) => (
									<li key={i} className="flex gap-4 items-start">
										<div className="w-1.5 h-1.5 rounded-full bg-sd-emerald mt-3 flex-shrink-0" />
										<span className="font-body text-lg text-sd-dim-text leading-[2]">
											{item}
										</span>
									</li>
								))}
							</ul>
						</DoodleCard>

						{/* Not For You */}
						<DoodleCard className="border-2 border-sd-sage/20">
							<div className="flex items-center gap-3 mb-8">
								<div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-sd-sage/10 text-sd-dim-text">
									<XCircle className="w-6 h-6" />
								</div>
								<h3 className="font-heading text-2xl font-semibold text-sd-dim-text m-0">
									This is NOT The Right Path If:
								</h3>
							</div>
							<ul className="space-y-4">
								{notForYouItems.map((item, i) => (
									<li key={i} className="flex gap-4 items-start">
										<div className="w-1.5 h-1.5 rounded-full bg-sd-sage mt-3 flex-shrink-0" />
										<span className="font-body text-lg text-sd-dim-text leading-[2]">
											{item}
										</span>
									</li>
								))}
							</ul>
						</DoodleCard>
					</div>

					{/* Coaching work note */}
					<DoodleCard className="mt-12 max-w-4xl mx-auto border-l-4 border-sd-emerald">
						<h4 className="font-heading text-lg font-semibold text-sd-heading mb-2">
							This Journey is Coaching Work
						</h4>
						<p className="font-body text-lg text-sd-dim-text leading-[2] mb-2">
							<strong className="text-sd-text">What I will validate:</strong> Your emotions and
							experience, always.
						</p>
						<p className="font-body text-lg text-sd-dim-text leading-[2]">
							<strong className="text-sd-text">What I will question:</strong> Your reactions and the
							stories these emotions come from. Not to judge, but for the sake
							of curious exploration. It <strong className="text-sd-text">will</strong> be annoying
							sometimes.
						</p>
					</DoodleCard>

					{/* Mid-page CTA */}
					<div className="mt-12 text-center">
						<Link
							to="https://calendar.app.google/DzX2xMDgSeyRDGhU7"
							target="_blank"
							className="group inline-flex items-center gap-2 px-8 py-4 bg-sd-deep-green text-white rounded-full font-body font-bold text-lg transition-transform duration-200 ease-out hover:-translate-y-2 hover:scale-105 shadow-[0_12px_35px_var(--sd-deep-green)/0.3]"
						>
							Book Your Vibe Check
							<ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
						</Link>
					</div>

					<div className="mt-12 text-center">
						<p className="font-body text-lg text-sd-dim-text leading-[2] max-w-3xl mx-auto">
							From my Substack,{" "}
							<Link
								to="https://dabii.substack.com/"
								target="_blank"
								className="text-sd-emerald font-semibold hover:underline underline-offset-4 decoration-2"
							>
								"But you don't look autistic"
							</Link>
							, to this program, my mission is the same: to help us feel seen,
							understood, and empowered.
						</p>
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-cream" />

			{/* ═══════════════════════════════════════════
			    HOW TO GET STARTED — cream background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-cream">
				<SparkleCluster className="absolute top-16 right-12 w-10 h-10 twinkle-2" />
				<SunburstSVG className="absolute bottom-12 left-[8%] w-16 h-16 spin-lazy" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
							How to Get Started
						</h2>
						<ScribblyUnderline colorVar="--sd-emerald" className="w-48 md:w-64 mb-4" />
						<p className="font-handwritten text-sd-emerald text-2xl" style={{ transform: "rotate(1deg)" }}>
							three gentle steps
						</p>
					</div>

					<div className="space-y-10 max-w-4xl mx-auto">
						{/* Step 1 */}
						<DoodleCard>
							<div className="flex flex-col md:flex-row gap-8">
								<div className="flex-shrink-0 w-16 h-16 bg-sd-sage/15 border-2 border-dashed border-sd-emerald/30 rounded-full flex items-center justify-center font-heading text-2xl font-bold text-sd-emerald mx-auto md:mx-0">
									1
								</div>
								<div className="flex-1">
									<div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
										<h3 className="font-heading text-xl font-semibold text-sd-heading m-0">
											The Vibe Check
										</h3>
										<span className="inline-block px-3 py-1 bg-sd-sage/15 text-sd-emerald text-xs font-body font-bold uppercase tracking-wider rounded-full w-fit">
											Free &bull; 30-40 min
										</span>
									</div>

									<p className="font-body text-lg text-sd-dim-text leading-[2] mb-4">
										Before anything else, let's simply meet as humans. No pitch,
										no pressure. Just space to feel it out together.
									</p>

									{/* Mini agenda */}
									<div className="bg-sd-linen/60 border-2 border-dashed border-sd-sage/20 rounded-xl p-4 mb-4">
										<p className="font-body text-sm font-semibold text-sd-dim-text mb-3">
											What we'll do:
										</p>
										<ul className="space-y-2">
											{[
												"Quick capacity check + what's bringing you here",
												"Map the stuck loop (burnout / masking / EF / relationships)",
												"Identify what kind of support would feel safe + workable",
												"Decide next step (trial session or not)",
											].map((item, i) => (
												<li key={i} className="flex gap-3 items-start">
													<div className="w-1.5 h-1.5 rounded-full bg-sd-emerald mt-2.5 flex-shrink-0" />
													<span className="font-body text-sm text-sd-dim-text leading-relaxed">
														{item}
													</span>
												</li>
											))}
										</ul>
									</div>

									<p className="font-body text-sm text-sd-dim-text">
										<strong className="text-sd-text">Goal:</strong> mutual clarity and comfort. You'll
										leave with at least one small next step—no matter what you
										decide.
									</p>
								</div>
							</div>
						</DoodleCard>

						{/* Step 2 */}
						<DoodleCard>
							<div className="flex flex-col md:flex-row gap-8">
								<div className="flex-shrink-0 w-16 h-16 bg-sd-sage/10 border-2 border-dashed border-sd-sage/30 rounded-full flex items-center justify-center font-heading text-2xl font-bold text-sd-dim-text mx-auto md:mx-0">
									2
								</div>
								<div className="flex-1">
									<div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
										<h3 className="font-heading text-xl font-semibold text-sd-heading m-0">
											Trial Coaching Session
										</h3>
										<span className="inline-block px-3 py-1 bg-sd-linen text-sd-dim-text text-xs font-body font-bold uppercase tracking-wider rounded-full w-fit">
											$90 &bull; Up to 90 min
										</span>
									</div>
									<p className="font-body text-lg text-sd-dim-text leading-[2] mb-4">
										Experience what it's like to be coached in this space. A
										deep, practical taste of the work. If we continue, this fee
										is subtracted from the total.
									</p>
									<p className="font-body text-sm text-sd-dim-text">
										<strong className="text-sd-text">Goal:</strong> experience the process, not just the
										promise.
									</p>
								</div>
							</div>
						</DoodleCard>

						{/* Step 3 */}
						<DoodleCard>
							<div className="flex flex-col md:flex-row gap-8">
								<div className="flex-shrink-0 w-16 h-16 bg-sd-sage/10 border-2 border-dashed border-sd-sage/30 rounded-full flex items-center justify-center font-heading text-2xl font-bold text-sd-dim-text mx-auto md:mx-0">
									3
								</div>
								<div className="flex-1">
									<div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
										<h3 className="font-heading text-xl font-semibold text-sd-heading m-0">
											The Re-Architect's Journey
										</h3>
										<span className="inline-block px-3 py-1 bg-sd-linen text-sd-dim-text text-xs font-body font-bold uppercase tracking-wider rounded-full w-fit">
											4 Month Container
										</span>
									</div>
									<p className="font-body text-lg text-sd-dim-text leading-[2] mb-4">
										We begin. A steady, flexibly structured space for real
										change: less chaos, more clarity, and the freedom to move at
										your own rhythm.
									</p>
									<p className="font-body text-sm text-sd-dim-text">
										<strong className="text-sd-text">Goal:</strong> long-term integration and
										transformation.
									</p>
								</div>
							</div>
						</DoodleCard>
					</div>

					{/* Why this flow */}
					<DoodleCard className="mt-14 max-w-4xl mx-auto">
						<div className="text-center">
							<h4 className="font-heading text-lg font-semibold text-sd-heading mb-3">
								Why This Flow?
							</h4>
							<p className="font-body text-lg text-sd-dim-text leading-[2] max-w-3xl mx-auto">
								Because most of us—especially those with AuDHD—need safety before
								structure, clarity before commitment, and experience before
								investment.
							</p>
						</div>
					</DoodleCard>

					{/* CTA Area */}
					<div className="mt-16 text-center space-y-8">
						<div>
							<p className="font-handwritten text-sd-gold text-2xl mb-4" style={{ transform: "rotate(-1deg)" }}>
								ready? let's go!
							</p>
							<p className="font-body text-lg font-semibold text-sd-text mb-4">
								Ready to start with Step 1?
							</p>
							<Link
								to="https://calendar.app.google/DzX2xMDgSeyRDGhU7"
								target="_blank"
								className="group inline-flex items-center gap-3 px-10 py-5 bg-sd-deep-green text-white rounded-full font-body font-bold text-xl transition-transform duration-200 ease-out hover:-translate-y-2 hover:scale-105 shadow-[0_12px_35px_var(--sd-deep-green)/0.3]"
							>
								Book Your Vibe Check Call
								<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
							</Link>
						</div>

						<div className="pt-8 border-t border-sd-sage/20 w-full max-w-md mx-auto">
							<p className="font-body text-sm text-sd-dim-text mb-4">
								Already trust the vibe and want to start working?
							</p>
							<Link
								to="https://buy.stripe.com/14A7sK1IH4K8bY56OMgrS00"
								target="_blank"
								className="inline-flex items-center px-6 py-3 bg-sd-cream border-2 border-dashed border-sd-sage/30 text-sd-emerald rounded-full font-body font-semibold hover:bg-sd-linen transition-colors"
							>
								Book Your 90min First Session
							</Link>
						</div>

						<div className="pt-4">
							<Link
								to="/faq"
								className="font-body text-sm text-sd-dim-text hover:text-sd-emerald transition-colors underline underline-offset-4"
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
