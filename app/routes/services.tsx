import { Link } from "react-router";
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
	return (
		<>
			{/* Hero Section - Personal Story */}
			<section className="py-20 md:py-32 bg-primary-soft">
				<div className="max-w-3xl mx-auto px-6">
					<div className="text-center mb-12">
						<H1 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-6">
							The Re-Architect's Journey
						</H1>
						<BodyLarge className="text-xl leading-relaxed text-text-secondary font-medium">
							A Personal Invitation to you
						</BodyLarge>
					</div>

					<div className="max-w-4xl mx-auto space-y-6">
						<BodyBase className="text-lg leading-relaxed">
							My name is François. I'm 42, French, and a few years ago, I was
							given the language for a lifetime of experience: I am Autistic and
							have ADHD.
						</BodyBase>

						<BodyBase className="text-lg leading-relaxed">
							That discovery was followed by a two-year collision with profound
							autistic burnout. The kind that steals your words, drains your
							energy, and makes the world feel unbearably loud. I had to stop
							everything and begin the slow, deliberate process of rebuilding a
							life that didn't lead to collapse. I had to become my own life's
							architect.
						</BodyBase>

						<BodyBase className="text-lg leading-relaxed">
							My special interest has always been understanding what makes
							people tick—our unique blueprints. Coaching is the activity that
							nourishes me, the one thing my burnout couldn't touch. This
							program, "The Re-Architect's Journey," is the culmination of my
							professional training and my personal rebuilding. It's the
							focused, compassionate apprenticeship I wish I'd had.
						</BodyBase>
					</div>
				</div>
			</section>

			{/* Client-Led Journey */}
			<section className="py-16 md:py-24">
				<div className="max-w-3xl mx-auto px-6">
					<H2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-8 text-center">
						A Radically Responsive, Client-Led Journey
					</H2>

					<div className="max-w-4xl mx-auto space-y-6 mb-12">
						<BodyBase className="text-lg leading-relaxed">
							This is not a one-size-fits-all curriculum with pre-set modules.
							It is a deeply collaborative and client-led space. You are the
							architect of your life; my role is to act as your specialist
							consultant, helping you read your unique blueprints and understand
							your materials.
						</BodyBase>

						<BodyBase className="text-lg leading-relaxed">
							Your journey is unique, so our work will be too. We will go where
							you need to go. One month, we might focus on building sustainable,
							neurodivergent-friendly productivity systems. The next, we may
							dive deep into navigating relationships or advocating for your
							needs.
						</BodyBase>
					</div>

					<div className="bg-surface border border-border rounded-xl p-8">
						<H3 className="text-xl font-semibold text-text-primary mb-6">
							We can explore:
						</H3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="space-y-4">
								<div>
									<H4 className="font-semibold text-primary mb-2">
										Self-Acceptance
									</H4>
									<BodySmall className="text-text-secondary">
										Integrating your AuDHD identity and unlearning a lifetime of
										masking.
									</BodySmall>
								</div>
								<div>
									<H4 className="font-semibold text-primary mb-2">
										Burnout Recovery
									</H4>
									<BodySmall className="text-text-secondary">
										Creating practical strategies for managing energy and
										sensory needs.
									</BodySmall>
								</div>
								<div>
									<H4 className="font-semibold text-primary mb-2">
										Productivity & Executive Function
									</H4>
									<BodySmall className="text-text-secondary">
										Designing systems that work with your brain, not against it.
									</BodySmall>
								</div>
							</div>
							<div className="space-y-4">
								<div>
									<H4 className="font-semibold text-primary mb-2">
										Relationships & Communication
									</H4>
									<BodySmall className="text-text-secondary">
										Learning the language to express your needs and connect
										authentically.
									</BodySmall>
								</div>
								<div>
									<H4 className="font-semibold text-primary mb-2">
										Finding Community
									</H4>
									<BodySmall className="text-text-secondary">
										Exploring what it means to feel a sense of belonging.
									</BodySmall>
								</div>
								<div>
									<H4 className="font-semibold text-primary mb-2">
										Pathfinding
									</H4>
									<BodySmall className="text-text-secondary">
										Answering the big questions—"What does a thriving life look
										like for me, and how do I make it happen?"
									</BodySmall>
								</div>
							</div>
						</div>

						<div className="mt-8 p-4 bg-primary-soft rounded-lg">
							<BodyBase className="font-medium leading-loose">
								You set the destination.
								<br />I help you read the map and navigate the terrain.
								<br /> We’ll take your spoon levels into account at each
								session.
								<br /> Not every session has to be a deep dive.
								<br /> Sometimes it's just about recentering, accepting where
								you are and figuring out where to go from there.
							</BodyBase>
						</div>
					</div>
				</div>
			</section>

			{/* Coaching Container */}
			<section className="py-16 md:py-24 bg-surface-alt">
				<div className="max-w-5xl mx-auto px-6">
					<H2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-8 text-center">
						The Coaching Container: Your Scaffolding for Deep Work
					</H2>

					<div className="max-w-3xl mx-auto mb-12">
						<BodyBase className="text-lg leading-relaxed text-center">
							To do this deep, client-led work, we need a container built on
							trust and consistency. This structure is the reliable scaffolding
							that gives our exploratory work a safe place to land.
						</BodyBase>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
						<div className="bg-surface border border-border rounded-xl p-6">
							<H3 className="text-xl font-semibold text-text-primary mb-4">
								Duration
							</H3>
							<BodyBase>
								A 4-month (16-week) deep dive to allow for real, sustainable
								change.
							</BodyBase>
						</div>

						<div className="bg-surface border border-border rounded-xl p-6">
							<H3 className="text-xl font-semibold text-text-primary mb-4">
								Core Sessions
							</H3>
							<BodyBase>
								16 weekly, 60-minute 1-on-1 Re-Architect Sessions. This is our
								dedicated time for the strategic work that matters most to you
								in the moment.
							</BodyBase>
						</div>

						<div className="bg-surface border border-border rounded-xl p-6">
							<H3 className="text-xl font-semibold text-text-primary mb-4">
								Responsive Support
							</H3>
							<BodyBase>
								Up to 2 weekly, 20-minute "Spotlight Sessions" on demand. These
								are for real-time implementation support when you're stuck,
								celebrating a win, or need a sounding board between our main
								sessions.
							</BodyBase>
						</div>
					</div>

					<div className="bg-surface border border-border rounded-xl p-8">
						<H3 className="text-xl font-semibold text-text-primary mb-6">
							A Note on Capacity & Integrity
						</H3>
						<BodyBase className="text-lg leading-relaxed mb-4">
							I am still navigating my own recovery from burnout. Because of
							this, and to protect the depth and integrity of our work, I take
							on a maximum of two to three new clients per month. This isn't a
							marketing tactic; it's me practicing the principles of
							sustainability this entire program is built on.
						</BodyBase>
						<BodyBase className="text-lg leading-relaxed">
							It ensures you get my focused, present, and highest-quality
							engagement.
						</BodyBase>
					</div>
				</div>
			</section>

			{/* Founding Client Opportunities */}
			<section className="py-16 md:py-24">
				<div className="max-w-5xl mx-auto px-6">
					<H2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-8 text-center">
						Founding Client Opportunities: An Invitation to Co-Create
					</H2>

					<div className="max-w-4xl mx-auto space-y-6 mb-12">
						<BodyBase className="text-lg leading-relaxed font-semibold">
							My fees are out in the open. Nothing I hate more than finding
							someone I want to work with to then find myself back to the wall
							with fees I didn't expect. So let me spare you this.
						</BodyBase>
						<BodyBase className="text-lg leading-relaxed">
							This framework has been my lifeline. Now, I'm inviting a small
							group of founding clients to partner with me as I refine it to
							serve our community more deeply. This is a genuine value exchange:
							a significantly reduced investment in exchange for your
							partnership.
						</BodyBase>

						<BodyBase className="text-lg leading-relaxed font-medium text-center">
							Applications are reviewed in the order they are received.
						</BodyBase>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
						{/* Co-Creator Tier */}
						<div className="bg-surface border-2 border-primary rounded-xl p-8 relative">
							<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
								<span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
									Most Value
								</span>
							</div>
							<H3 className="text-xl font-semibold text-text-primary mb-4 text-center">
								Co-Creator Tier
							</H3>
							<div className="text-center mb-6">
								<div className="text-3xl font-bold text-primary mb-2">
									$1,500
								</div>
								<BodySmall className="text-text-secondary">
									Full Program Value: $4,000
								</BodySmall>
								<BodySmall className="text-text-secondary">
									3 Spots Available
								</BodySmall>
							</div>
							<BodySmall className="text-text-secondary mb-6">
								You'll be the very first to experience this coaching container.
								Your detailed feedback throughout our journey will directly
								shape the program's final form. This tier is for you if you find
								the iterative process of building something new energizing, and
								you want to be a part of creating a resource that doesn't yet
								exist in the neurodivergent support landscape.
							</BodySmall>
							<div className="text-center">
								<BodySmall className="text-text-tertiary">
									Payment plan: 3 monthly payments of $550
								</BodySmall>
							</div>
						</div>

						{/* Founder's Tier */}
						<div className="bg-surface border border-border rounded-xl p-8">
							<H3 className="text-xl font-semibold text-text-primary mb-4 text-center">
								Founder's Tier
							</H3>
							<div className="text-center mb-6">
								<div className="text-3xl font-bold text-primary mb-2">
									$2,400
								</div>
								<BodySmall className="text-text-secondary">
									Full Program Value: $4,000
								</BodySmall>
								<BodySmall className="text-text-secondary">
									6 Spots Available
								</BodySmall>
							</div>
							<BodySmall className="text-text-secondary mb-6">
								The core container is set, refined by Co-Creator feedback.
								You'll experience a more established version of the journey
								while still having meaningful opportunities to share input. This
								tier is for you if you value a balance between a proven
								framework and collaborative refinement.
							</BodySmall>
							<div className="text-center">
								<BodySmall className="text-text-tertiary">
									Payment plan: 3 monthly payments of $850
								</BodySmall>
							</div>
						</div>

						{/* Standard Investment */}
						<div className="bg-surface border border-border rounded-xl p-8">
							<H3 className="text-xl font-semibold text-text-primary mb-4 text-center">
								Standard Investment
							</H3>
							<div className="text-center mb-6">
								<div className="text-3xl font-bold text-primary mb-2">
									$4,000
								</div>
								<BodySmall className="text-text-secondary">
									After founding spots are filled
								</BodySmall>
							</div>
							<BodySmall className="text-text-secondary mb-6">
								The established program rate after all founding spots are
								filled.
							</BodySmall>
							<div className="text-center">
								<BodySmall className="text-text-tertiary">
									Payment plan: 3 monthly payments of $1,350
								</BodySmall>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* This Journey is For You If */}
			<section className="py-16 md:py-24 bg-surface-alt">
				<div className="max-w-5xl mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* This is for you if */}
						<div className="bg-surface border border-border rounded-xl p-8">
							<H3 className="text-xl font-semibold text-primary mb-6">
								This Journey is For You If:
							</H3>
							<ul className="space-y-4">
								<li className="flex items-start space-x-3">
									<span className="text-primary mt-1">•</span>
									<BodySmall>
										You're late-diagnosed or self-discovered—we welcome and
										validate all paths to understanding your AuDHD—and are ready
										to move from the chaos of discovery to the clarity of
										intentional design.
									</BodySmall>
								</li>
								<li className="flex items-start space-x-3">
									<span className="text-primary mt-1">•</span>
									<BodySmall>
										You crave a coach who deeply understands the exhaustion of
										high-masking and the internal war between the need for
										structure and the craving for novelty.
									</BodySmall>
								</li>
								<li className="flex items-start space-x-3">
									<span className="text-primary mt-1">•</span>
									<BodySmall>
										You believe, or want to believe, that there is profound joy
										to be found in being autistic, even when it's hard.
									</BodySmall>
								</li>
								<li className="flex items-start space-x-3">
									<span className="text-primary mt-1">•</span>
									<BodySmall>
										You're curious about what's possible beyond quick fixes and
										are open to a process of gradual, meaningful change.
									</BodySmall>
								</li>
								<li className="flex items-start space-x-3">
									<span className="text-primary mt-1">•</span>
									<BodySmall>
										You bring a willingness to show up as you are, honoring your
										capacity while being a partner in your own growth.
									</BodySmall>
								</li>
							</ul>
						</div>

						{/* This is NOT for you if */}
						<div className="bg-surface border border-border rounded-xl p-8">
							<H3 className="text-xl font-semibold text-text-primary mb-6">
								This is NOT The Right Path If:
							</H3>
							<ul className="space-y-4">
								<li className="flex items-start space-x-3">
									<span className="text-text-tertiary mt-1">•</span>
									<BodySmall>
										You need clinical therapy, crisis intervention, or
										diagnostic services. This is forward-focused coaching, not
										mental healthcare.
									</BodySmall>
								</li>
								<li className="flex items-start space-x-3">
									<span className="text-text-tertiary mt-1">•</span>
									<BodySmall>
										You're seeking a magic bullet or a pre-packaged
										"productivity system" to "fix" you.
									</BodySmall>
								</li>
								<li className="flex items-start space-x-3">
									<span className="text-text-tertiary mt-1">•</span>
									<BodySmall>
										You want group support—this is intimate, focused 1-on-1
										work.
									</BodySmall>
								</li>
								<li className="flex items-start space-x-3">
									<span className="text-text-tertiary mt-1">•</span>
									<BodySmall>
										You're not ready to examine your patterns honestly or try
										new approaches.
									</BodySmall>
								</li>
								<li className="flex items-start space-x-3">
									<span className="text-text-tertiary mt-1">•</span>
									<BodySmall>
										You need a fully polished, corporate-style program. This is
										a human-first space, built on authenticity, not perfection.
									</BodySmall>
								</li>
							</ul>
						</div>
					</div>

					<div className="bg-surface border border-border rounded-xl p-8 mt-12">
						<H3 className="text-xl font-semibold text-text-primary mb-6">
							This Journey is Coaching Work
						</H3>
						<BodyBase className="text-lg leading-relaxed mb-4">
							<strong>What i will validate:</strong> Your emotions and
							experience, always.
						</BodyBase>
						<BodyBase className="text-lg leading-relaxed mb-4">
							<strong>What i will question:</strong> Your reactions and the
							stories these emotions come from. Not to judge, but for the sake
							of curious exploration. For your sake. So you can get what you
							expect from our collaboration. So be prepared, it
							<strong> will</strong> be annoying sometimes.
						</BodyBase>
					</div>

					<div className="mt-12 text-center">
						<BodyBase className="text-lg leading-relaxed max-w-4xl mx-auto">
							From my Substack,{" "}
							<Link
								to="https://dabii.substack.com/"
								target="_blank"
								className="underline hover:text-primary"
							>
								"But you don't look autistic,"
							</Link>{" "}
							to this program, my mission is the same: to help us feel seen,
							understood, and empowered to build lives that truly fit. If you're
							ready to start rebuilding, I invite you to have a conversation
							with me.
						</BodyBase>
					</div>
				</div>
			</section>

			{/* Blueprint Session CTA */}
			<section className="py-16 md:py-24">
				<div className="max-w-3xl mx-auto px-6">
					<H2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-8 text-center">
						The Final Step: Our Blueprint Session
					</H2>

					<div className="max-w-4xl mx-auto space-y-6 mb-12">
						<BodyBase className="text-lg leading-relaxed">
							The information on this page is designed to give you everything
							you need to decide if this journey feels right. If it does, our
							final step is a 30-minute or 90-minute Blueprint Session.
						</BodyBase>

						<BodyBase className="text-lg leading-relaxed">
							Those two options are designed to give you the choices that goes
							with your preferences. You're the "straight and to the point" type
							of person? Go for the 30min session. You want this to be a deep
							conversation where we wil mutually overshare? Go for the 90min
							session.
						</BodyBase>

						<BodyBase className="text-lg leading-relaxed">
							<strong>
								This is not a sales call. It is a mutual exploration of fit.
								It's our chance to connect, ask questions, and ensure we're both
								genuinely excited to build together.
							</strong>
						</BodyBase>

						<BodyBase className="text-lg leading-relaxed">
							This work is deep and requires trust, so it's essential that we
							both feel this partnership is a "<strong>HECK YES</strong>" At the
							end of our conversation, either of us can decide it's not the
							right fit, and that's perfectly okay.
						</BodyBase>

						<BodyBase className="text-lg leading-relaxed">
							If we both decide to move forward, I will send you a private link
							to confirm your spot. To honor the commitment and manage my own
							energy and capacity, this link will be active for 24 hours. This
							isn't a pressure tactic; it's a practice in clear boundaries and
							decisive action for both of us. If the link expires, I will
							understand it wasn't the right time, and the spot will be offered
							to the next person.
						</BodyBase>
					</div>

					<div className="text-center">
						<div className="mt-6 mb-4">
							<BodySmall className="text-text-tertiary">
								Ready to see if we're a fit?
							</BodySmall>
						</div>
						<div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center mb-4">
							<Link
								to="https://calendar.app.google/DzX2xMDgSeyRDGhU7"
								target="_blank"
								className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-medium text-lg transition-colors duration-200 hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/20 mb-4"
							>
								Book Your 30min Blueprint Session HERE →
							</Link>
							<Link
								to="https://calendar.app.google/WCB77cGccLVLPp7S9"
								target="_blank"
								className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-medium text-lg transition-colors duration-200 hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/20 mb-4"
							>
								Book Your 90min Blueprint Session HERE →
							</Link>
						</div>
						<div className="mt-6 mb-1 space-y-2">
							<BodySmall className="text-text-tertiary hover:underline">
								<Link to="/book-call">
									Learn more about how booking works →
								</Link>
							</BodySmall>
							<BodySmall className="text-text-tertiary hover:underline">
								<Link to="/faq">Frequently Asked Questions →</Link>
							</BodySmall>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
