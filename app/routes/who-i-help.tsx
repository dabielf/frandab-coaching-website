import { Link } from "react-router";
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
			<section className="py-20 md:py-32 bg-primary-soft">
				<div className="max-w-7xl mx-auto px-6 text-center">
					<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-6">
						You've Been Playing Life on Expert Mode Without the Manual
					</h1>
					<p className="text-lg leading-relaxed text-text-secondary">
						And you just found out everyone else got cheat codes.
					</p>
				</div>
			</section>

			{/* Main Content */}
			<section className="py-16 md:py-24">
				<div className="max-w-5xl mx-auto px-6">
					<div className="space-y-8">
						<p className="text-base leading-relaxed">
							For forty-something years, you've been navigating life with an
							invisible disability in a world that told you that you were just
							"not trying hard enough." You learned to smile when the lights
							were too bright, to pretend you understood social rules that made
							no sense, to push through exhaustion that went bone-deep.
						</p>
						<p className="text-base leading-relaxed">
							You got good at it. So good that nobody knew you were drowning.
						</p>
						<p className="text-base leading-relaxed">
							Maybe you built a successful career by channeling your hyperfocus
							and pattern recognition into professional achievement. Maybe you
							became the friend everyone turned to for advice because your
							special interest in psychology made you an accidental therapist.
							Maybe you just got really, really good at looking "normal" while
							dying inside.
						</p>
						<p className="text-base leading-relaxed">
							And then something shifted. A child's diagnosis that looked
							suspiciously familiar. A TikTok that hit too close to home. A
							therapist who finally asked the right questions. Suddenly, you had
							a word for why you've always felt like an alien pretending to be
							human.
						</p>
						<p className="text-lg leading-relaxed font-semibold text-center my-8">
							<strong>Autistic. ADHD. AuDHD.</strong>
						</p>
					</div>
				</div>
			</section>

			{/* The Late Diagnosis Rollercoaster */}
			<section className="py-16 md:py-24 bg-surface-alt">
				<div className="max-w-5xl mx-auto px-6">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-12">
						The Late Diagnosis Rollercoaster
					</h2>
					<p className="text-base leading-relaxed mb-8">
						Now you're on the wildest ride of your life, and nobody prepared you
						for these loops:
					</p>

					<div className="space-y-8">
						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<h3 className="h4 mb-3 text-success">The Relief</h3>
							<p className="text-base leading-relaxed text-text-secondary">
								"Oh my god, I'm not broken. I'm not lazy. I'm not a failure. I'm
								just autistic."
							</p>
						</div>

						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<h3 className="h4 mb-3 text-info">The Grief</h3>
							<p className="text-base leading-relaxed text-text-secondary">
								"What would my life have been if I'd known? How much pain could
								I have avoided? Who would I be if I hadn't spent 40 years trying
								to be someone else?"
							</p>
						</div>

						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<h3 className="h4 mb-3 text-warning">The Anger</h3>
							<p className="text-base leading-relaxed text-text-secondary">
								"Why did nobody see this? Why was I blamed for struggles that
								were neurological? Why did I have to break myself to fit their
								world?"
							</p>
						</div>

						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<h3 className="h4 mb-3 text-text-secondary">The Confusion</h3>
							<p className="text-base leading-relaxed text-text-secondary">
								"Who am I without the mask? What's authentic and what's
								performance? How do I even begin to untangle four decades of
								compensatory strategies?"
							</p>
						</div>

						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<h3 className="h4 mb-3 text-primary">The Hope</h3>
							<p className="text-base leading-relaxed text-text-secondary">
								"Maybe I can finally stop fighting myself. Maybe there's a way
								to live that doesn't require constant exhaustion. Maybe I can
								actually thrive."
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* AuDHD Section */}
			<section className="py-16 md:py-24">
				<div className="max-w-5xl mx-auto px-6">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-12">
						If You're AuDHD, Welcome to the Beautiful Chaos
					</h2>
					<p className="text-base leading-relaxed mb-8">
						Your brain is special kind of complicated. You live in the space
						between spaces, where autism and ADHD dance a complex tango:
					</p>

					<ul className="space-y-4 mb-8">
						<li className="flex items-start space-x-3">
							<span className="text-primary mt-1">•</span>
							<span className="text-base leading-relaxed">
								You desperately need routine... but your ADHD brain stages a
								revolt after day three
							</span>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-primary mt-1">•</span>
							<span className="text-base leading-relaxed">
								You crave predictability... while simultaneously dying of
								boredom
							</span>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-primary mt-1">•</span>
							<span className="text-base leading-relaxed">
								You want deep, meaningful connections... but socializing drains
								your battery in minutes
							</span>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-primary mt-1">•</span>
							<span className="text-base leading-relaxed">
								You can hyperfocus for 14 hours on organizing your
								spreadsheets... but can't remember to eat lunch
							</span>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-primary mt-1">•</span>
							<span className="text-base leading-relaxed">
								You need complete silence to think... except when you need death
								metal to concentrate
							</span>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-primary mt-1">•</span>
							<span className="text-base leading-relaxed">
								You make detailed plans with color-coded schedules... then
								immediately ignore them
							</span>
						</li>
					</ul>

					<p className="text-lg leading-relaxed font-semibold text-center">
						This isn't indecisiveness. This isn't being "difficult." This is
						your brain trying to balance two competing operating systems, and
						it's exhausting.
					</p>
				</div>
			</section>

			{/* What You're Really Looking For */}
			<section className="py-16 md:py-24 bg-primary-soft">
				<div className="max-w-5xl mx-auto px-6">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-12">
						What You're Really Looking For
					</h2>
					<div className="space-y-6">
						<p className="text-base leading-relaxed">
							You don't need someone to fix you. You're not broken. You don't
							need someone to teach you to be more neurotypical. You've mastered
							that performance, and it nearly killed you.
						</p>
						<p className="text-base leading-relaxed font-semibold">
							What you need is someone who:
						</p>
						<ul className="space-y-3">
							<li className="flex items-start space-x-3">
								<span className="text-primary mt-1">•</span>
								<span className="text-base leading-relaxed">
									Understands the specific exhaustion of late diagnosis
								</span>
							</li>
							<li className="flex items-start space-x-3">
								<span className="text-primary mt-1">•</span>
								<span className="text-base leading-relaxed">
									Gets the AuDHD paradox from lived experience
								</span>
							</li>
							<li className="flex items-start space-x-3">
								<span className="text-primary mt-1">•</span>
								<span className="text-base leading-relaxed">
									Can help you untangle authentic self from survival strategies
								</span>
							</li>
							<li className="flex items-start space-x-3">
								<span className="text-primary mt-1">•</span>
								<span className="text-base leading-relaxed">
									Knows that "just be yourself" is useless advice when you're
									not sure who that is
								</span>
							</li>
							<li className="flex items-start space-x-3">
								<span className="text-primary mt-1">•</span>
								<span className="text-base leading-relaxed">
									Can translate between your internal experience and the
									external world
								</span>
							</li>
							<li className="flex items-start space-x-3">
								<span className="text-primary mt-1">•</span>
								<span className="text-base leading-relaxed">
									Won't judge you for having seventeen unfinished projects and
									no clean socks
								</span>
							</li>
						</ul>
						<p className="text-base leading-relaxed">
							You need someone who's walked this path and can shine a light on
							the way forward.
						</p>
					</div>
				</div>
			</section>

			{/* Why This Matters Now */}
			<section className="py-16 md:py-24">
				<div className="max-w-5xl mx-auto px-6">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-12">
						Why This Matters Now
					</h2>
					<div className="space-y-6">
						<p className="text-base leading-relaxed">
							The world is changing, but not fast enough. You're still expected
							to function in systems designed for neurotypical brains. You still
							need to navigate workplaces that drain you, relationships that
							confuse you, and a society that sees your needs as "too much."
						</p>
						<p className="text-base leading-relaxed">
							But here's what's different now: You know why it's hard. You have
							language for your experience. You're not alone in this anymore.
						</p>
						<p className="text-base leading-relaxed">
							And maybe, just maybe, you're ready to stop apologizing for your
							brain and start building a life that actually fits.
						</p>
					</div>
				</div>
			</section>

			{/* Permission Slip */}
			<section className="py-16 md:py-24 bg-surface-alt">
				<div className="max-w-5xl mx-auto px-6 text-center">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-12">
						This Is Your Permission Slip
					</h2>
					<div className=" space-y-6">
						<p className="text-lg leading-relaxed">
							To stop forcing yourself into neurotypical shapes
						</p>
						<p className="text-lg leading-relaxed">
							To say "no" without a dissertation on why
						</p>
						<p className="text-lg leading-relaxed">
							To stim, to withdraw, to need what you need
						</p>
						<p className="text-lg leading-relaxed">
							To build systems that look weird but work
						</p>
						<p className="text-lg leading-relaxed">
							To unmask at your own pace
						</p>
						<p className="text-lg leading-relaxed font-semibold">
							To be brilliantly, chaotically, authentically you
						</p>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-16 md:py-24">
				<div className="max-w-5xl mx-auto px-6 text-center">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-6">
						Ready to Stop Fighting Alone?
					</h2>
					<p className="text-lg leading-relaxed text-text-secondary mb-8">
						If you're exhausted from playing neurotypical, if you're ready to
						work WITH your brain instead of against it, if you want someone who
						gets the late-diagnosed AuDHD experience from the inside...
					</p>
					<p className="text-lg leading-relaxed mb-8">Let's talk.</p>
					<Link
						to="/services"
						className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-medium text-lg transition-colors duration-200 hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/20 mb-4"
					>
						Learn about the Re-Architect's Journey →
					</Link>
					<p className="body-small text-text-tertiary">
						<em>
							Because forty years of masking is enough. It's time to discover
							who you are underneath.
						</em>
					</p>
				</div>
			</section>
		</>
	);
}
