import { Link } from "react-router";
import {
	Battery,
	Brain,
	CheckCircle2,
	Cloud,
	CloudRain,
	Compass,
	FileText,
	Fingerprint,
	Heart,
	HelpCircle,
	Lightbulb,
	Sparkles,
	Sun,
	Users,
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
	return (
		<>
			{/* Hero Section */}
			<section className="relative pt-18 pb-20 md:pt-28 md:pb-32 bg-primary-soft/30 overflow-hidden">
				{/* Abstract background shape */}
				<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-soft to-transparent opacity-60 -z-10" />

				<Container size="base">
					<div className="text-center max-w-4xl mx-auto">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-primary/20 text-primary text-sm font-medium mb-6 shadow-sm">
							<Fingerprint className="w-4 h-4" />
							<span>The Late-Diagnosed Experience</span>
						</div>
						<H1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-8 leading-tight">
							You've Been Playing Life on Expert Mode Without the Manual
						</H1>
						<p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl mx-auto font-medium">
							And you just found out everyone else got cheat codes.
						</p>
					</div>
				</Container>
			</section>

			{/* The "Invisible Struggle" Context */}
			<Section className="py-20">
				<Container>
					<div className="max-w-3xl mx-auto space-y-8 text-lg text-text-secondary leading-relaxed bg-surface border border-border p-8 md:p-12 rounded-2xl shadow-sm">
						<p>
							For forty-something years, you've been navigating life with an
							invisible disability in a world that told you that you were just
							"not trying hard enough." You learned to smile when the lights
							were too bright, to pretend you understood social rules that made
							no sense, to push through exhaustion that went bone-deep.
						</p>
						<p className="font-medium text-primary">
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
							<span className="inline-block px-6 py-3 bg-primary/10 rounded-xl text-primary font-bold text-xl tracking-wide">
								Autistic. ADHD. AuDHD.
							</span>
						</div>
					</div>
				</Container>
			</Section>

			{/* The Late Diagnosis Rollercoaster */}
			<Section background="alt" className="py-20">
				<Container>
					<div className="text-center max-w-3xl mx-auto mb-16">
						<H2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
							The Late Diagnosis Rollercoaster
						</H2>
						<BodyLarge className="text-text-secondary">
							Now you're on the wildest ride of your life, and nobody prepared
							you for these loops.
						</BodyLarge>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{
								title: "The Relief",
								text: "\"Oh my god, I'm not broken. I'm not lazy. I'm not a failure. I'm just autistic.\"",
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
						].map((item, i) => (
							<div
								key={i}
								className="bg-surface border border-border p-8 rounded-2xl h-full flex flex-col"
							>
								<div
									className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-6 ${item.color}`}
								>
									<item.icon className="w-6 h-6" />
								</div>
								<H4 className="text-xl font-bold text-text-primary mb-3">
									{item.title}
								</H4>
								<BodyBase className="text-text-secondary leading-relaxed italic">
									{item.text}
								</BodyBase>
							</div>
						))}
					</div>
				</Container>
			</Section>

			{/* AuDHD Beautiful Chaos */}
			<Section className="py-20">
				<Container>
					<div className="text-center max-w-3xl mx-auto mb-16">
						<H2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
							If You're AuDHD, Welcome to the Beautiful Chaos
						</H2>
						<BodyLarge className="text-text-secondary mb-8">
							Your brain is a special kind of complicated. You live in the space
							between spaces, where autism and ADHD dance a complex tango.
						</BodyLarge>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
						{[
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
						].map((item, i) => (
							<div
								key={i}
								className="flex gap-4 items-start p-6 bg-surface border border-border rounded-xl"
							>
								<div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center text-primary mt-1">
									<item.icon className="w-5 h-5" />
								</div>
								<BodyBase className="text-text-secondary">{item.text}</BodyBase>
							</div>
						))}
					</div>

					<div className="text-center max-w-2xl mx-auto bg-primary-soft/30 p-6 rounded-xl border border-primary/10">
						<p className="text-lg font-medium text-primary">
							This isn't indecisiveness. This isn't being "difficult." This is
							your brain trying to balance two competing operating systems, and
							it's exhausting.
						</p>
					</div>
				</Container>
			</Section>

			{/* What You're Really Looking For */}
			<Section background="alt" className="py-20">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						<div>
							<H2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
								What You're Really Looking For
							</H2>
							<div className="space-y-6 text-lg text-text-secondary leading-relaxed mb-8">
								<p>
									You don't need someone to fix you. You're not broken. You
									don't need someone to teach you to be more neurotypical.
									You've mastered that performance, and it nearly killed you.
								</p>
								<p className="font-bold text-text-primary">
									What you need is someone who:
								</p>
							</div>

							<ul className="space-y-4">
								{[
									"Understands the specific exhaustion of late diagnosis.",
									"Gets the AuDHD paradox from lived experience.",
									"Can help you untangle authentic self from survival strategies.",
									"Knows that 'just be yourself' is useless advice when you're not sure who that is.",
									"Can translate between your internal experience and the external world.",
									"Won't judge you for having seventeen unfinished projects and no clean socks.",
								].map((item, i) => (
									<li key={i} className="flex gap-4 items-start">
										<div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
										<BodySmall className="text-base text-text-secondary">
											{item}
										</BodySmall>
									</li>
								))}
							</ul>
						</div>
						<div className="relative">
							<div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3" />
							<div className="relative bg-surface border border-primary/20 rounded-3xl p-10 shadow-lg">
								<Lightbulb className="w-12 h-12 text-primary mb-6" />
								<H3 className="text-2xl font-bold text-primary mb-4">
									The Path Forward
								</H3>
								<p className="text-lg text-text-secondary leading-relaxed">
									You need someone who's walked this path and can shine a light
									on the way forward. Someone who doesn't just see the struggle,
									but sees the incredible potential waiting on the other side of
									burnout.
								</p>
							</div>
						</div>
					</div>
				</Container>
			</Section>

			{/* Why This Matters Now */}
			<Section className="py-20">
				<Container size="narrow">
					<div className="text-center mb-12">
						<H2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
							Why This Matters Now
						</H2>
					</div>
					<div className="space-y-6 text-lg text-text-secondary leading-relaxed">
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
						<p className="font-medium text-text-primary">
							And maybe, just maybe, you're ready to stop apologizing for your
							brain and start building a life that actually fits.
						</p>
					</div>
				</Container>
			</Section>

			{/* Permission Slip */}
			<Section background="alt" className="py-20">
				<Container>
					<div className="max-w-2xl mx-auto">
						<div className="bg-surface border-2 border-dashed border-primary/30 p-8 md:p-12 rounded-xl relative shadow-sm text-center">
							{/* decorative corner accents */}
							<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-xl -mt-2 -ml-2" />
							<div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-xl -mt-2 -mr-2" />
							<div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-xl -mb-2 -ml-2" />
							<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-xl -mb-2 -mr-2" />

							<H2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
								This Is Your Permission Slip
							</H2>

							<ul className="space-y-4 text-left inline-block max-w-lg mx-auto">
								{[
									"To stop forcing yourself into neurotypical shapes",
									"To say 'no' without a dissertation on why",
									"To stim, to withdraw, to need what you need",
									"To build systems that look weird but work",
									"To unmask at your own pace",
								].map((item, i) => (
									<li key={i} className="flex gap-3 items-center">
										<CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
										<span className="text-lg text-text-secondary">{item}</span>
									</li>
								))}
							</ul>

							<div className="mt-8 pt-8 border-t border-border">
								<p className="text-xl font-bold text-primary">
									To be brilliantly, chaotically, authentically you.
								</p>
							</div>
						</div>
					</div>
				</Container>
			</Section>

			{/* CTA */}
			<Section className="py-20">
				<Container size="narrow">
					<div className="text-center">
						<H2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
							Ready to Stop Fighting Alone?
						</H2>
						<p className="text-lg leading-relaxed text-text-secondary mb-8">
							If you're exhausted from playing neurotypical, if you're ready to
							work WITH your brain instead of against it, if you want someone
							who gets the late-diagnosed AuDHD experience from the inside...
						</p>
						<p className="text-xl font-medium text-text-primary mb-10">
							Let's talk.
						</p>
						<Link
							to="/services"
							className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 hover:-translate-y-1 mb-8"
						>
							Learn about the Re-Architect's Journey
						</Link>
						<p className="text-sm text-text-tertiary">
							<em>
								Because forty years of masking is enough. It's time to discover
								who you are underneath.
							</em>
						</p>
					</div>
				</Container>
			</Section>
		</>
	);
}