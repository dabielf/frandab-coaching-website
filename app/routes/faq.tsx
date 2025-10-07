import { Link } from "react-router";
import { ContactEmailLink } from "~/components/ui/EmailLink";
import type { Route } from "./+types/faq";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "FAQ - Questions from Fellow Overthinkers | Francois Dab" },
		{
			name: "description",
			content:
				"Common questions about AuDHD coaching, diagnosis requirements, and what makes neurodivergent coaching different from traditional approaches.",
		},
	];
}

export default function FAQ() {
	return (
		<>
			{/* Hero Section */}
			<section className="py-20 md:py-32 bg-primary-soft">
				<div className="max-w-7xl mx-auto px-6 text-center">
					<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-6">
						Questions from Fellow Overthinkers
					</h1>
					<p className="text-lg leading-relaxed text-text-secondary">
						Because we're neurodivergent—of course we have detailed questions
						about everything.
					</p>
				</div>
			</section>

			{/* FAQ Content */}
			<section className="py-16 md:py-24">
				<div className="max-w-5xl mx-auto px-6">
					<div className="space-y-8">
						{/* Question 1 */}
						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-4">
								"What's the difference between coaching and therapy?"
							</h2>
							<div className="space-y-4 text-text-secondary">
								<p className="text-base leading-relaxed">
									Great question! Here's my take:
								</p>
								<p className="text-base leading-relaxed">
									Therapy typically focuses on healing past wounds, processing
									trauma, and treating clinical conditions like anxiety or
									depression. It's usually backward-looking and healing-focused.
								</p>
								<p className="text-base leading-relaxed">
									Coaching is forward-focused and action-oriented. We'll
									acknowledge the past (because holy shit, late diagnosis brings
									up STUFF), but our main focus is building practical strategies
									for your future.
								</p>
								<p className="text-base leading-relaxed">
									That said, I don't follow the traditional coaching model of
									"you have all the answers inside you." Sometimes those
									"answers" are just 40 years of masking strategies. Sometimes
									you need someone to say, "Hey, that's an executive function
									thing, here's what actually helps."
								</p>
								<p className="text-base leading-relaxed">
									I'm not a therapist, and coaching isn't therapy. Many of my
									clients see both a therapist and me, and it's a powerful
									combination.
								</p>
							</div>
						</div>

						{/* Question 2 */}
						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-4">
								"Do I need an official diagnosis?"
							</h2>
							<div className="space-y-4 text-text-secondary">
								<p className="text-base leading-relaxed font-semibold">
									Absolutely not.
								</p>
								<p className="text-base leading-relaxed">
									The path to formal diagnosis is a maze of waitlists, expenses,
									and professionals who don't understand adult presentations
									(especially in women and high-maskers). Self-diagnosis is
									valid in the autistic community, and it's valid here.
								</p>
								<p className="text-base leading-relaxed">
									If you relate to the AuDHD experience, you're welcome here.
									Period.
								</p>
							</div>
						</div>

						{/* Question 3 */}
						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-4">
								"What if I'm not sure I'm autistic/ADHD/AuDHD?"
							</h2>
							<div className="space-y-4 text-text-secondary">
								<p className="text-base leading-relaxed">
									That's okay! Questioning is part of the journey.
								</p>
								<p className="text-base leading-relaxed">
									If you're here, something resonates. Maybe you're not ready to
									claim the label. Maybe you're in the "but I'm not autistic
									enough" phase (spoiler: that's often internalized ableism
									talking). Maybe you're just starting to peek behind your mask.
								</p>
								<p className="text-base leading-relaxed">
									We can explore this together. I won't push labels on you, but
									I also won't gatekeep support.
								</p>
							</div>
						</div>

						{/* Question 4 */}
						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-4">
								"How is your coaching different from neurotypical coaching?"
							</h2>
							<div className="space-y-4 text-text-secondary">
								<p className="text-base leading-relaxed">Where do I start?</p>
								<ul className="space-y-2">
									<li className="flex items-start space-x-3">
										<span className="text-primary mt-1">•</span>
										<span className="text-base leading-relaxed">
											I won't tell you to "just trust the process" when the
											process wasn't built for your brain
										</span>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-primary mt-1">•</span>
										<span className="text-base leading-relaxed">
											I understand that sometimes you need scripts, not
											"intuition"
										</span>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-primary mt-1">•</span>
										<span className="text-base leading-relaxed">
											I know that "just do it" isn't helpful when executive
											dysfunction has you stuck
										</span>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-primary mt-1">•</span>
										<span className="text-base leading-relaxed">
											I get that some days, showering IS the achievement
										</span>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-primary mt-1">•</span>
										<span className="text-base leading-relaxed">
											I won't shame you for your coping mechanisms (yes, even
											the "weird" ones)
										</span>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-primary mt-1">•</span>
										<span className="text-base leading-relaxed">
											I understand the both/and of AuDHD, not just autism OR
											ADHD
										</span>
									</li>
								</ul>
								<p className="text-base leading-relaxed">
									Plus, I share my own struggles. You won't get toxic positivity
									from someone who's "figured it all out." You'll get real
									support from someone still figuring it out too.
								</p>
							</div>
						</div>

						{/* Question 5 */}
						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-4">
								"What happens in the free blueprint call?"
							</h2>
							<div className="space-y-4 text-text-secondary">
								<p className="text-base leading-relaxed">
									It's 30 or 90 minutes (depending on your preferences) of
									checking if we're a good match—hence why I also call it a
									"blueprint call." No pressure, no sales pitch.
								</p>
								<p className="text-base leading-relaxed">
									You'll share what's bringing you to coaching. I'll probably
									overshare about my own journey (occupational hazard of being
									AuDHD). We'll discuss how I work and what support might look
									like.
								</p>
								<p className="text-base leading-relaxed">
									You can ask me anything. Turn your camera off if you want.
									Take notes. Stim freely. This is a judgment-free zone.
								</p>
								<p className="text-base leading-relaxed">
									By the end, we'll both know if working together feels right.
									<br />
									If not, no hard feelings: fit matters.
								</p>
							</div>
						</div>

						{/* Question 6 */}
						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-4">
								"What if I need to cancel last minute?"
							</h2>
							<div className="space-y-4 text-text-secondary">
								<p className="text-base leading-relaxed">
									Life happens. Especially AuDHD life.
								</p>
								<p className="text-base leading-relaxed">
									Sometimes you wake up and the thought of human interaction
									makes you want to hide under your weighted blanket. Sometimes
									executive dysfunction wins. Sometimes you're in burnout.
								</p>
								<p className="text-base leading-relaxed">
									I get it. I've been there. We'll reschedule without judgment.
								</p>

								<p className="text-base leading-relaxed">
									Just please send me a message, even if it's very last minute.
									I struugle with waiting and uncertainty too.
								</p>
							</div>
						</div>

						{/* Question 7 */}
						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-4">
								"Can you help with workplace accommodations?"
							</h2>
							<div className="space-y-4 text-text-secondary">
								<p className="text-base leading-relaxed">
									Yes! This is a common focus area. We can work on:
								</p>
								<ul className="space-y-2">
									<li className="flex items-start space-x-3">
										<span className="text-primary mt-1">•</span>
										<span className="text-base leading-relaxed">
											Figuring out what accommodations you actually need
										</span>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-primary mt-1">•</span>
										<span className="text-base leading-relaxed">
											Scripts for talking to HR or your manager
										</span>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-primary mt-1">•</span>
										<span className="text-base leading-relaxed">
											Strategies for when formal accommodations aren't possible
										</span>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-primary mt-1">•</span>
										<span className="text-base leading-relaxed">
											Building sustainable work habits that honor your neurotype
										</span>
									</li>
								</ul>
								<p className="text-base leading-relaxed">
									I can't provide legal advice, but I can help you advocate for
									yourself effectively.
								</p>
							</div>
						</div>

						{/* Question 8 */}
						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-4">
								"Do you work with family members or partners?"
							</h2>
							<div className="space-y-4 text-text-secondary">
								<p className="text-base leading-relaxed">
									I primarily work with AuDHD individuals, but I do offer
									limited sessions for partners who want to better understand
									and support their neurodivergent person.
								</p>
								<p className="text-base leading-relaxed">
									These sessions focus on:
								</p>
								<ul className="space-y-2">
									<li className="flex items-start space-x-3">
										<span className="text-primary mt-1">•</span>
										<span className="text-base leading-relaxed">
											Understanding neurodivergent communication styles
										</span>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-primary mt-1">•</span>
										<span className="text-base leading-relaxed">
											Learning how to support without enabling masking
										</span>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-primary mt-1">•</span>
										<span className="text-base leading-relaxed">
											Building a relationship that works for both neurotypes
										</span>
									</li>
								</ul>
							</div>
						</div>

						{/* Question 9 */}
						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-4">
								"What's your cancellation policy?"
							</h2>
							<div className="space-y-4 text-text-secondary">
								<p className="text-base leading-relaxed">
									Life happens, especially in neurospicy brains. I ask for 24
									hours notice when possible, but I understand that's not always
									feasible. We'll work together to find a rhythm that honors
									both your needs and mine.
								</p>
							</div>
						</div>

						{/* Question 10 */}
						{/* <div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-4">
								"How long do people typically work with you?"
							</h2>
							<div className="space-y-4 text-text-secondary">
								<p className="text-base leading-relaxed">
									It varies wildly (because AuDHD brains are beautifully
									inconsistent).
								</p>
								<p className="text-base leading-relaxed">
									Some people do a 3 to 6 month support to tackle specific
									challenges. Others check in monthly for ongoing support. Some
									work with me intensively post-diagnosis, take a break, then
									come back when life throws new challenges.
								</p>
								<p className="text-base leading-relaxed">
									There's no "right" timeline. We'll go at the pace your brain
									needs.
								</p>
							</div>
						</div> */}

						{/* Question 11 */}
						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-4">
								"What if I'm too overwhelmed to even start?"
							</h2>
							<div className="space-y-4 text-text-secondary">
								<p className="text-base leading-relaxed">
									That's exactly when you need support most.
								</p>
								<p className="text-base leading-relaxed">
									We can start tiny. Like, ridiculously tiny. Sometimes the
									first win is just "I showed up to the call." We'll build from
									there, at whatever pace works for your current capacity.
								</p>
								<p className="text-base leading-relaxed">
									Remember: I specialize in decomplexification. I can break
									"starting" down into the less spoon-consuming possible steps.
									Because it's not about how big or small a task is, it's about
									how much it costs you.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Still Have Questions */}
			<section className="py-16 md:py-24 bg-surface-alt">
				<div className="max-w-5xl mx-auto px-6 text-center">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-6">
						Still Have Questions?
					</h2>
					<p className="text-lg leading-relaxed text-text-secondary mb-8">
						My inbox is always open. Send me your wonderings, your concerns,
						your overthinking spirals. I'll respond with the same verbose
						enthusiasm I bring to everything.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<ContactEmailLink className="inline-flex items-center px-6 py-3 bg-secondary-soft text-secondary rounded-lg font-medium transition-colors duration-200 hover:bg-secondary/10 focus:outline-none focus:ring-4 focus:ring-secondary/20 text-base">
							Email me at hello@frandab.com
						</ContactEmailLink>
						<Link
							to="/services"
							className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium transition-colors duration-200 hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/20"
						>
							Learn about the Re-Architect's Journey →
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
