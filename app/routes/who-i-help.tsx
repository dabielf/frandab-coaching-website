import { Link } from "react-router";
import {
	ArrowRight,
	Battery,
	Brain,
	CheckCircle2,
	Cloud,
	CloudRain,
	Compass,
	FileText,
	HelpCircle,
	Lightbulb,
	Sparkles,
	Sun,
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
import type { Route } from "./+types/who-i-help";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Who I Help - Late-Diagnosed AuDHD Adults | Francois Dab" },
		{
			name: "description",
			content:
				"Support for late-diagnosed AuDHD adults navigating the journey from masking to authenticity. You've been playing life on expert mode without the manual.",
		},
	];
}

export default function WhoIHelp() {
	const emotionCards = [
		{
			title: "The Relief",
			text: '"Oh my god, I\'m not broken. I\'m not lazy. I\'m not a failure. I\'m just autistic."',
			icon: Sun,
			color: "text-amber-500",
			bg: "bg-amber-500/10",
		},
		{
			title: "The Grief",
			text: '"What would my life have been if I\'d known? How much pain could I have avoided? Who would I be if I hadn\'t spent 40 years trying to be someone else?"',
			icon: CloudRain,
			color: "text-blue-500",
			bg: "bg-blue-500/10",
		},
		{
			title: "The Anger",
			text: '"Why did nobody see this? Why was I blamed for struggles that were neurological? Why did I have to break myself to fit their world?"',
			icon: Zap,
			color: "text-red-500",
			bg: "bg-red-500/10",
		},
		{
			title: "The Confusion",
			text: '"Who am I without the mask? What\'s authentic and what\'s performance? How do I even begin to untangle four decades of compensatory strategies?"',
			icon: HelpCircle,
			color: "text-purple-500",
			bg: "bg-purple-500/10",
		},
		{
			title: "The Hope",
			text: '"Maybe I can finally stop fighting myself. Maybe there\'s a way to live that doesn\'t require constant exhaustion. Maybe I can actually thrive."',
			icon: Sparkles,
			color: "text-emerald-500",
			bg: "bg-emerald-500/10",
		},
	];

	const chaosItems = [
		{
			text: "You desperately need routine... but your ADHD brain stages a revolt after day three.",
			icon: Brain,
		},
		{
			text: "You crave predictability... while simultaneously dying of boredom.",
			icon: Compass,
		},
		{
			text: "You want deep, meaningful connections... but socializing drains your battery in minutes.",
			icon: Battery,
		},
		{
			text: "You can hyperfocus for 14 hours on organizing your spreadsheets... but can't remember to eat lunch.",
			icon: Zap,
		},
		{
			text: "You need complete silence to think... except when you need death metal to concentrate.",
			icon: Cloud,
		},
		{
			text: "You make detailed plans with color-coded schedules... then immediately ignore them.",
			icon: FileText,
		},
	];

	const lookingForItems = [
		"Understands the specific exhaustion of late diagnosis.",
		"Gets the AuDHD paradox from lived experience.",
		"Can help you untangle authentic self from survival strategies.",
		"Knows that 'just be yourself' is useless advice when you're not sure who that is.",
		"Can translate between your internal experience and the external world.",
		"Won't judge you for having seventeen unfinished projects and no clean socks.",
	];

	const permissionItems = [
		"To stop forcing yourself into neurotypical shapes",
		"To say 'no' without a dissertation on why",
		"To stim, to withdraw, to need what you need",
		"To build systems that look weird but work",
		"To unmask at your own pace",
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
				<SunburstSVG className="absolute bottom-16 right-[20%] w-20 h-20 spin-lazy" />

				<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
					{/* Handwritten welcome */}
					<p
						className="font-handwritten text-sd-gold text-3xl mb-6"
						style={{ transform: "rotate(-3deg)" }}
					>
						the late-diagnosed experience
					</p>

						{/* Main headline */}
					<h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.25] text-sd-heading mb-6">
						You've Been Playing Life on Expert Mode Without the Manual
					</h1>

					<ScribblyUnderline colorVar="--sd-gold" className="w-48 md:w-64 mb-8" />

					{/* Subtitle */}
					<p className="font-body text-xl md:text-2xl text-sd-dim-text leading-[2] max-w-2xl mx-auto font-medium">
						And you just found out everyone else got cheat codes.
					</p>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-linen" />

			{/* ═══════════════════════════════════════════
			    THE "INVISIBLE STRUGGLE" CONTEXT — linen background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-linen">
				<SparkleCluster className="absolute top-12 right-12 w-10 h-10 twinkle-1" />

				<div className="max-w-3xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
							The Invisible Struggle
						</h2>
						<ScribblyUnderline colorVar="--sd-emerald" className="w-56 md:w-72 mb-4" />
						<p className="font-handwritten text-sd-emerald text-2xl">
							it was never about "trying harder"
						</p>
					</div>

					<DoodleCard className="max-w-3xl mx-auto">
						<div className="space-y-6 font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
							<p>
								For forty-something years, you've been navigating life with an
								invisible disability in a world that told you that you were just
								"not trying hard enough." You learned to smile when the lights
								were too bright, to pretend you understood social rules that made
								no sense, to push through exhaustion that went bone-deep.
							</p>
							<p className="font-semibold text-sd-emerald">
								You got good at it. So good that nobody knew you were drowning.
							</p>
							<p>
								Maybe you built a successful career by channeling your hyperfocus
								and pattern recognition into professional achievement. Maybe you
								became the friend everyone turned to for advice because your
								special interest in psychology made you an accidental therapist.
								Maybe you just got really, really good at looking "normal" while
								dying inside.
							</p>
							<p>
								And then something shifted. A child's diagnosis that looked
								suspiciously familiar. A TikTok that hit too close to home. A
								therapist who finally asked the right questions. Suddenly, you had
								a word for why you've always felt like an alien pretending to be
								human.
							</p>
							<div className="text-center pt-4">
								<span className="inline-block px-8 py-4 bg-sd-emerald/10 rounded-full text-sd-heading font-heading font-bold text-2xl tracking-wide">
									Autistic. ADHD. AuDHD.
								</span>
							</div>
						</div>
					</DoodleCard>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-on-dark-bg" />

			{/* ═══════════════════════════════════════════
			    THE LATE DIAGNOSIS ROLLERCOASTER — deepGreen dark section
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-on-dark-bg">
				<SparkleCluster className="absolute top-12 right-16 w-10 h-10 twinkle-1" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-on-dark-heading">
							The Late Diagnosis Rollercoaster
						</h2>
						<ScribblyUnderline colorVar="--sd-gold" className="w-56 md:w-72 mb-4" />
						<p className="font-handwritten text-sd-on-dark-dim text-2xl">
							buckle up, it's a wild ride
						</p>
					</div>

					<p className="font-body text-lg md:text-xl text-sd-on-dark-text/75 leading-[2] text-center max-w-3xl mx-auto mb-14">
						Now you're on the wildest ride of your life, and nobody prepared
						you for these loops.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{emotionCards.map((item, i) => (
							<div
								key={i}
								className="doodle-hover rounded-2xl flex flex-col h-full border-2 border-dashed border-sd-on-dark-dim/15 bg-sd-on-dark-text/5"
							>
								<div className="p-8 md:p-10 flex flex-col h-full">
									<div
										className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-6 ${item.color}`}
									>
										<item.icon className="w-6 h-6" />
									</div>
									<h4 className="font-heading text-xl font-semibold text-sd-on-dark-heading mb-3">
										{item.title}
									</h4>
									<p className="font-body text-lg text-sd-on-dark-text/75 leading-[2] italic">
										{item.text}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-cream" />

			{/* ═══════════════════════════════════════════
			    AUDHD BEAUTIFUL CHAOS — cream background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-cream">
				<SparkleCluster className="absolute top-16 left-8 w-10 h-10 twinkle-2" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
							If You're AuDHD, Welcome to the Beautiful Chaos
						</h2>
						<ScribblyUnderline colorVar="--sd-sage" className="w-64 md:w-80 mb-4" />
						<p className="font-handwritten text-sd-emerald text-2xl">
							two operating systems, one beautiful brain
						</p>
					</div>

					<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2] text-center max-w-3xl mx-auto mb-14">
						Your brain is a special kind of complicated. You live in the space
						between spaces, where autism and ADHD dance a complex tango.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
						{chaosItems.map((item, i) => (
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
									This isn't indecisiveness. This isn't being "difficult." This is
									your brain trying to balance two competing operating systems, and
									it's exhausting.
								</strong>
							</p>
							<p
								className="font-handwritten text-sd-gold text-2xl"
								style={{ transform: "rotate(2deg)" }}
							>
								(and it's also kind of amazing)
							</p>
						</div>
					</DoodleCard>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-linen" />

			{/* ═══════════════════════════════════════════
			    WHAT YOU'RE REALLY LOOKING FOR — linen background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-linen">
				<SparkleCluster className="absolute top-12 right-12 w-10 h-10 twinkle-1" />
				<BigDoodleStar className="absolute top-20 left-[8%] w-14 h-14 twinkle-2" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
							What You're Really Looking For
						</h2>
						<ScribblyUnderline colorVar="--sd-gold" className="w-56 md:w-72 mb-4" />
						<p className="font-handwritten text-sd-emerald text-2xl">
							spoiler: it's not someone to "fix" you
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
						<div>
							<div className="space-y-6 font-body text-lg md:text-xl text-sd-dim-text leading-[2] mb-10">
								<p>
									You don't need someone to fix you. You're not broken. You
									don't need someone to teach you to be more neurotypical.
									You've mastered that performance, and it nearly killed you.
								</p>
								<p className="font-bold text-sd-text">
									What you need is someone who:
								</p>
							</div>

							<ul className="space-y-5">
								{lookingForItems.map((item, i) => (
									<li key={i} className="flex gap-4 items-start">
										<div className="w-2 h-2 rounded-full bg-sd-emerald mt-3 flex-shrink-0" />
										<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
											{item}
										</p>
									</li>
								))}
							</ul>
						</div>

						<div className="relative">
							<DoodleCard>
								<Lightbulb className="w-12 h-12 text-sd-emerald mb-6" />
								<h3 className="font-heading text-2xl font-semibold text-sd-heading mb-4">
									The Path Forward
								</h3>
								<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
									You need someone who's walked this path and can shine a light
									on the way forward. Someone who doesn't just see the struggle,
									but sees the incredible potential waiting on the other side of
									burnout.
								</p>
								<p
									className="font-handwritten text-sd-gold text-xl mt-4"
									style={{ transform: "rotate(-2deg)" }}
								>
									there's so much on the other side
								</p>
							</DoodleCard>
						</div>
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-cream" />

			{/* ═══════════════════════════════════════════
			    WHY THIS MATTERS NOW — cream background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-cream">
				<SparkleCluster className="absolute top-16 left-8 w-10 h-10 twinkle-2" />

				<div className="max-w-3xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
							Why This Matters Now
						</h2>
						<ScribblyUnderline colorVar="--sd-emerald" className="w-48 md:w-64 mb-4" />
						<p className="font-handwritten text-sd-gold text-2xl">
							because you've waited long enough
						</p>
					</div>

					<div className="space-y-6 font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
						<p>
							The world is changing, but not fast enough. You're still expected
							to function in systems designed for neurotypical brains. You still
							need to navigate workplaces that drain you, relationships that
							confuse you, and a society that sees your needs as "too much."
						</p>
						<p>
							But here's what's different now: You know why it's hard. You have
							language for your experience. You're not alone in this anymore.
						</p>
						<p className="font-medium text-sd-text">
							And maybe, just maybe, you're ready to stop apologizing for your
							brain and start building a life that actually fits.
						</p>
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-linen" />

			{/* ═══════════════════════════════════════════
			    PERMISSION SLIP — linen background, gold border DoodleCard
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-linen">
				<SparkleCluster className="absolute top-12 right-16 w-10 h-10 twinkle-1" />

				<div className="max-w-2xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
							This Is Your Permission Slip
						</h2>
						<ScribblyUnderline colorVar="--sd-gold" className="w-56 md:w-72 mb-4" />
						<p className="font-handwritten text-sd-emerald text-2xl">
							tear along the dotted line
						</p>
					</div>

					{/* Gold-bordered permission card */}
					<div className="relative">
						<div
							className="relative doodle-hover"
						>
							{/* Gold dashed border overlay */}
							<div className="absolute inset-[-3px] rounded-2xl pointer-events-none border-2 border-dashed border-sd-gold/50" />
							{/* Card body */}
							<div className="p-8 md:p-12 rounded-2xl relative bg-sd-cream text-center">
								<ul className="space-y-5 text-left inline-block max-w-lg mx-auto mb-8">
									{permissionItems.map((item, i) => (
										<li key={i} className="flex gap-3 items-center">
											<CheckCircle2 className="w-6 h-6 text-sd-emerald flex-shrink-0" />
											<span className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
												{item}
											</span>
										</li>
									))}
								</ul>

								<div className="pt-6 border-t border-sd-sage/20">
									<p className="font-heading text-xl md:text-2xl font-semibold text-sd-heading">
										To be brilliantly, chaotically, authentically you.
									</p>
									<p
										className="font-handwritten text-sd-gold text-2xl mt-3"
										style={{ transform: "rotate(2deg)" }}
									>
										signed: the universe
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-cream" />

			{/* ═══════════════════════════════════════════
			    FINAL CTA — cream background
			    ═══════════════════════════════════════════ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-sd-cream">
				<SparkleCluster className="absolute top-12 right-16 w-10 h-10 twinkle-2" />

				<div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
					<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
						Ready to Stop Fighting Alone?
					</h2>
					<ScribblyUnderline colorVar="--sd-gold" className="w-56 md:w-72 mb-6" />

					<p className="font-body text-lg md:text-xl mb-4 text-sd-dim-text leading-[2]">
						If you're exhausted from playing neurotypical, if you're ready to
						work WITH your brain instead of against it, if you want someone
						who gets the late-diagnosed AuDHD experience from the inside...
					</p>

					<p className="font-body text-xl md:text-2xl font-medium text-sd-text mb-4">
						Let's talk.
					</p>

					<p
						className="font-handwritten text-sd-emerald text-2xl mb-10"
						style={{ transform: "rotate(-1deg)" }}
					>
						forty years of masking is enough
					</p>

					<Link
						to="/services"
						className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-body font-bold text-xl transition-transform duration-200 ease-out hover:-translate-y-2 hover:scale-105 bg-sd-deep-green shadow-[0_12px_35px_var(--sd-deep-green)/0.3]"
					>
						Learn about the Re-Architect's Journey
						<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
					</Link>

					<p className="font-body text-base text-sd-dim-text mt-8 italic">
						Because forty years of masking is enough. It's time to discover
						who you are underneath.
					</p>
				</div>
			</section>
		</>
	);
}
