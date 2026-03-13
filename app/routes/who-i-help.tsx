import { Link } from "react-router";
import {
	ArrowRight,
	Battery,
	Brain,
	CheckCircle2,
	Cloud,
	Compass,
	FileText,
	HelpCircle,
	Lightbulb,
	Sparkles,
	Sun,
	Zap,
} from "lucide-react";
import { AmbientBlob, GentleCard, PillDivider } from "~/components/doodles";
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
		},
		{
			title: "The Grief",
			text: '"What would my life have been if I\'d known? How much pain could I have avoided? Who would I be if I hadn\'t spent 40 years trying to be someone else?"',
			icon: Cloud,
		},
		{
			title: "The Anger",
			text: '"Why did nobody see this? Why was I blamed for struggles that were neurological? Why did I have to break myself to fit their world?"',
			icon: Zap,
		},
		{
			title: "The Confusion",
			text: '"Who am I without the mask? What\'s authentic and what\'s performance? How do I even begin to untangle four decades of compensatory strategies?"',
			icon: HelpCircle,
		},
		{
			title: "The Hope",
			text: '"Maybe I can finally stop fighting myself. Maybe there\'s a way to live that doesn\'t require constant exhaustion. Maybe I can actually thrive."',
			icon: Sparkles,
		},
	];

	const chaosItems = [
		{ text: "You desperately need routine... but your ADHD brain stages a revolt after day three.", icon: Brain },
		{ text: "You crave predictability... while simultaneously dying of boredom.", icon: Compass },
		{ text: "You want deep, meaningful connections... but socializing drains your battery in minutes.", icon: Battery },
		{ text: "You can hyperfocus for 14 hours on organizing your spreadsheets... but can't remember to eat lunch.", icon: Zap },
		{ text: "You need complete silence to think... except when you need death metal to concentrate.", icon: Cloud },
		{ text: "You make detailed plans with color-coded schedules... then immediately ignore them.", icon: FileText },
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
			{/* ═══ HERO ═══ */}
			<section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[-10%] right-[-10%]" size="50vw" />
				<AmbientBlob color="mist" position="bottom-[-15%] left-[-10%]" size="35vw" />

				<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
					<p className="font-hand text-gs-ink text-3xl mb-6 rotate-[-2deg]">
						the late-diagnosed experience
					</p>

					<h1 className="font-serif text-4xl md:text-6xl font-semibold leading-[1.2] text-gs-heading mb-8 tracking-[-0.01em]">
						You've Been Playing Life on Expert Mode Without the Manual
					</h1>

					<PillDivider className="mb-8" />

					<p className="font-sans text-xl md:text-2xl text-gs-body leading-relaxed max-w-2xl mx-auto font-medium">
						And you just found out everyone else got cheat codes.
					</p>
				</div>
			</section>

			{/* ═══ THE INVISIBLE STRUGGLE ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="mist" position="top-[5%] left-[-15%]" size="30vw" />

				<div className="max-w-3xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							The Invisible Struggle
						</h2>
						<p className="font-hand text-gs-ink text-2xl">
							it was never about "trying harder"
						</p>
					</div>

					<GentleCard className="max-w-3xl mx-auto">
						<div className="space-y-6 font-sans text-lg md:text-xl text-gs-body leading-relaxed">
							<p>
								For forty-something years, you've been navigating life with an
								invisible disability in a world that told you that you were just
								"not trying hard enough." You learned to smile when the lights
								were too bright, to pretend you understood social rules that made
								no sense, to push through exhaustion that went bone-deep.
							</p>
							<p className="font-medium text-gs-ink">
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
								<span className="inline-block px-8 py-4 bg-gs-gold/40 rounded-full text-gs-heading font-sans font-semibold text-3xl tracking-wide">
									Autistic. ADHD. AuDHD.
								</span>
							</div>
						</div>
					</GentleCard>
				</div>
			</section>

			{/* ═══ THE LATE DIAGNOSIS ROLLERCOASTER ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[-10%] right-[-10%]" size="40vw" />
				<AmbientBlob color="mist" position="bottom-[-10%] left-[-15%]" size="35vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							The Late Diagnosis Rollercoaster
						</h2>
						<p className="font-hand text-gs-ink text-2xl">
							buckle up, it's a wild ride
						</p>
					</div>

					<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed text-center max-w-3xl mx-auto mb-16">
						Now you're on the wildest ride of your life, and nobody prepared
						you for these loops.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{emotionCards.map((item, i) => (
							<GentleCard key={i}>
								<div className="w-12 h-12 bg-gs-gold/60 rounded-2xl flex items-center justify-center mb-6 text-gs-ink">
									<item.icon className="w-6 h-6" />
								</div>
								<h4 className="font-serif text-xl font-semibold text-gs-heading mb-3 tracking-[-0.01em]">
									{item.title}
								</h4>
								<p className="font-sans text-lg text-gs-body leading-relaxed italic">
									{item.text}
								</p>
							</GentleCard>
						))}
					</div>
				</div>
			</section>

			{/* ═══ AUDHD BEAUTIFUL CHAOS ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="mist" position="top-[-5%] left-[-10%]" size="35vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							If You're AuDHD, Welcome to the Beautiful Chaos
						</h2>
						<p className="font-hand text-gs-ink text-2xl">
							two operating systems, one beautiful brain
						</p>
					</div>

					<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed text-center max-w-3xl mx-auto mb-16">
						Your brain is a special kind of complicated. You live in the space
						between spaces, where autism and ADHD dance a complex tango.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
						{chaosItems.map((item, i) => (
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

					<div className="max-w-3xl mx-auto text-center space-y-4">
						<p className="font-serif text-2xl md:text-3xl font-semibold text-gs-heading leading-snug tracking-[-0.01em]">
							This isn't indecisiveness. This isn't being "difficult." This is
							your brain trying to balance two competing operating systems, and
							it's exhausting.
						</p>
						<p className="font-hand text-gs-ink text-3xl rotate-[2deg]">
							(and it's also kind of amazing)
						</p>
					</div>
				</div>
			</section>

			{/* ═══ WHAT YOU'RE REALLY LOOKING FOR ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[-5%] right-[-15%]" size="35vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							What You're Really Looking For
						</h2>
						<p className="font-hand text-gs-ink text-2xl">
							spoiler: it's not someone to "fix" you
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
						<div>
							<div className="space-y-6 font-sans text-lg md:text-xl text-gs-body leading-relaxed mb-10">
								<p>
									You don't need someone to fix you. You're not broken. You
									don't need someone to teach you to be more neurotypical.
									You've mastered that performance, and it nearly killed you.
								</p>
								<p className="font-medium text-gs-heading">
									What you need is someone who:
								</p>
							</div>

							<ul className="space-y-5">
								{lookingForItems.map((item, i) => (
									<li key={i} className="flex gap-4 items-start">
										<div className="w-2 h-2 rounded-full bg-gs-ink mt-3 flex-shrink-0" />
										<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
											{item}
										</p>
									</li>
								))}
							</ul>
						</div>

						<div className="relative">
							<GentleCard>
								<Lightbulb className="w-12 h-12 text-gs-ink mb-6 opacity-60" />
								<h3 className="font-serif text-2xl font-semibold text-gs-heading mb-4 tracking-[-0.01em]">
									The Path Forward
								</h3>
								<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
									You need someone who's walked this path and can shine a light
									on the way forward. Someone who doesn't just see the struggle,
									but sees the incredible potential waiting on the other side of
									burnout.
								</p>
								<p className="font-hand text-gs-ink text-xl mt-4 rotate-[-2deg]">
									there's so much on the other side
								</p>
							</GentleCard>
						</div>
					</div>
				</div>
			</section>

			{/* ═══ WHY THIS MATTERS NOW ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="mist" position="top-[-10%] left-[-10%]" size="40vw" />

				<div className="max-w-3xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							Why This Matters Now
						</h2>
						<p className="font-hand text-gs-ink text-2xl">
							because you've waited long enough
						</p>
					</div>

					<div className="space-y-6 font-sans text-lg md:text-xl text-gs-body leading-relaxed">
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
						<p className="font-medium text-gs-heading">
							And maybe, just maybe, you're ready to stop apologizing for your
							brain and start building a life that actually fits.
						</p>
					</div>
				</div>
			</section>

			{/* ═══ PERMISSION SLIP ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[-5%] right-[-10%]" size="35vw" />

				<div className="max-w-2xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-4xl md:text-5xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							This Is Your Permission Slip
						</h2>
						<p className="font-hand text-gs-ink text-3xl">
							tear along the dotted line
						</p>
					</div>

					<GentleCard className="border-2 border-gs-gold">
						<ul className="space-y-5 text-left max-w-lg mx-auto mb-8">
							{permissionItems.map((item, i) => (
								<li key={i} className="flex gap-3 items-center">
									<CheckCircle2 className="w-6 h-6 text-gs-ink flex-shrink-0" />
									<span className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
										{item}
									</span>
								</li>
							))}
						</ul>

						<div className="pt-6 border-t border-gs-mist/50 text-center">
							<p className="font-sans text-xl md:text-2xl font-semibold text-gs-heading">
								To be brilliantly, chaotically, authentically you.
							</p>
							<p className="font-hand text-gs-ink text-4xl mt-4 rotate-[2deg]">
								signed: the universe
							</p>
						</div>
					</GentleCard>
				</div>
			</section>

			{/* ═══ FINAL CTA ═══ */}
			<section className="py-28 md:py-36 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="mist" position="top-[-10%] left-[-10%]" size="40vw" />
				<AmbientBlob color="gold" position="bottom-[-10%] right-[-5%]" size="30vw" />

				<div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
					<h2 className="font-serif text-4xl md:text-5xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
						Ready to Stop Fighting Alone?
					</h2>
					<PillDivider className="mb-8" />

					<p className="font-sans text-lg md:text-xl mb-4 text-gs-body leading-relaxed">
						If you're exhausted from playing neurotypical, if you're ready to
						work WITH your brain instead of against it, if you want someone
						who gets the late-diagnosed AuDHD experience from the inside...
					</p>

					<p className="font-sans text-xl md:text-2xl font-medium text-gs-heading mb-4">
						Let's talk.
					</p>

					<p className="font-hand text-gs-ink text-3xl mb-12 rotate-[-1deg]">
						forty years of masking is enough
					</p>

					<Link
						to="/services"
						className="group inline-flex items-center gap-3 bg-gs-ink text-white rounded-2xl px-10 py-5 font-sans font-medium text-xl shadow-[0_4px_12px_rgba(67,91,114,0.15)] hover:-translate-y-0.5 hover:bg-gs-ink-hover hover:shadow-[0_6px_16px_rgba(67,91,114,0.2)] transition-all duration-300 gs-press"
					>
						Explore the Coaching Program
						<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
					</Link>

					<p className="font-sans text-base text-gs-body mt-10 italic">
						Because forty years of masking is enough. It's time to discover
						who you are underneath.
					</p>
				</div>
			</section>
		</>
	);
}
