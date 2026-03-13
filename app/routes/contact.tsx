import { Link } from "react-router";
import { ArrowRight, Mail } from "lucide-react";
import { AmbientBlob, GentleCard, PillDivider } from "~/components/doodles";
import { SessionEmailLink } from "~/components/ui/EmailLink";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Contact Francois Dab - Let's Connect on Your Terms" },
		{
			name: "description",
			content:
				"Reach out for AuDHD coaching support. No perfect prose required - just reach out however feels manageable today.",
		},
	];
}

const conversationStarters = [
	{
		text: "Hi Francois, I just got diagnosed and I have no idea what to do next.",
		subject: "Just diagnosed",
		body: "Hi Francois,%0D%0A%0D%0AI just got diagnosed and I have no idea what to do next.%0D%0A%0D%0A",
	},
	{
		text: "I think I might be AuDHD but I'm drowning in imposter syndrome.",
		subject: "Might be AuDHD",
		body: "Hi Francois,%0D%0A%0D%0AI think I might be AuDHD but I'm drowning in imposter syndrome.%0D%0A%0D%0A",
	},
	{
		text: "I need help with [specific thing] and traditional advice isn't working.",
		subject: "Need help",
		body: "Hi Francois,%0D%0A%0D%0AI need help with [specific thing] and traditional advice isn't working.%0D%0A%0D%0A",
	},
	{
		text: "Your website made me cry (in a good way). When can we talk?",
		subject: "When can we talk?",
		body: "Hi Francois,%0D%0A%0D%0AYour website made me cry (in a good way). When can we talk?%0D%0A%0D%0A",
	},
];

export default function Contact() {
	return (
		<>
			{/* ═══ HERO ═══ */}
			<section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[-10%] right-[-10%]" size="45vw" />
				<AmbientBlob color="mist" position="bottom-[-15%] left-[-10%]" size="35vw" />

				<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
					<p className="font-hand text-gs-ink text-3xl mb-6 rotate-[-2deg]">
						no perfect prose required
					</p>

					<h1 className="font-serif text-4xl md:text-6xl mb-8 font-semibold leading-[1.2] text-gs-heading tracking-[-0.01em]">
						Let's Connect{" "}
						<br />
						<span className="text-gs-ink">(On Your Terms)</span>
					</h1>

					<PillDivider className="mb-8" />

					<p className="font-sans text-xl md:text-2xl max-w-xl mx-auto text-gs-body leading-relaxed">
						Taking the first step is hard. Let's make it easier.
					</p>
				</div>
			</section>

			{/* ═══ INTRO + OPTIONS ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="mist" position="top-[5%] right-[-15%]" size="30vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							Reaching Out Is Hard (I Get It)
						</h2>
						<p className="font-hand text-gs-ink text-2xl">
							just start wherever you are
						</p>
					</div>

					<div className="max-w-3xl mx-auto space-y-5 mb-16">
						<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
							I know reaching out can feel overwhelming. The executive function
							required to write an email, the vulnerability of asking for help,
							the fear of being "too much" or "not autistic enough"—I get it.
						</p>
						<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
							So let's keep this simple. No need for perfect prose or explaining
							your entire life story. Just reach out however feels manageable today.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Option 1: Email */}
						<div>
							<h3 className="font-serif text-2xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
								Option 1: Send an Email
							</h3>
							<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed mb-6">
								Click the button and your email app opens with everything
								pre-filled. Just hit send — or edit it first, up to you.
							</p>

							<GentleCard>
								<div className="flex items-start gap-4 mb-6">
									<div className="w-12 h-12 rounded-2xl bg-gs-gold/60 text-gs-ink flex items-center justify-center flex-shrink-0">
										<Mail className="w-6 h-6" />
									</div>
									<div>
										<p className="font-sans text-lg font-medium text-gs-heading mb-1">
											hello@frandab.com
										</p>
										<p className="font-sans text-sm text-gs-body">
											Subject and body are pre-written — one less thing
											for your executive function to deal with
										</p>
									</div>
								</div>

								<a
									href="mailto:hello@frandab.com?subject=Hi%20Francois&body=Hi%20Francois%2C%0D%0A%0D%0AI%20found%20your%20website%20and%20I%E2%80%99d%20like%20to%20learn%20more%20about%20coaching.%0D%0A%0D%0AHere%E2%80%99s%20a%20little%20about%20what%E2%80%99s%20bringing%20me%20here%3A%0D%0A%0D%0A%5BFeel%20free%20to%20write%20as%20much%20or%20as%20little%20as%20you%20want%20%E2%80%94%20even%20%22Help.%20AuDHD.%20Drowning.%22%20works.%5D%0D%0A%0D%0AThanks!"
									className="group w-full inline-flex items-center justify-center gap-3 bg-gs-ink text-white rounded-2xl px-8 py-4 font-sans font-medium text-lg shadow-[0_4px_12px_rgba(67,91,114,0.15)] hover:-translate-y-0.5 hover:bg-gs-ink-hover hover:shadow-[0_6px_16px_rgba(67,91,114,0.2)] transition-all duration-200 gs-press"
								>
									Open Pre-Filled Email
									<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</a>

								<p className="font-hand text-gs-ink text-lg mt-4 text-center rotate-[-1deg]">
									the email practically writes itself
								</p>
							</GentleCard>
						</div>

						{/* Option 2: Book a Vibe Check */}
						<div>
							<h3 className="font-serif text-2xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
								Option 2: Book a Vibe Check
							</h3>
							<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed mb-6">
								Skip the email anxiety and jump straight to a conversation.
							</p>

							<GentleCard>
								<h4 className="font-serif text-xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
									Free 40 Minute Vibe Check
								</h4>
								<ul className="space-y-3 mb-6">
									{[
										"No pressure, no sales pitch",
										"Camera optional, pajamas encouraged",
										"Stimming welcome",
										"Just two brains figuring out if we're a good match",
									].map((item, i) => (
										<li key={i} className="flex items-start gap-3">
											<div className="w-1.5 h-1.5 rounded-full bg-gs-ink mt-3 flex-shrink-0" />
											<p className="font-sans text-base text-gs-body leading-relaxed">{item}</p>
										</li>
									))}
								</ul>
								<p className="font-hand text-gs-ink text-xl mb-6 rotate-[-2deg]">
									pajamas strongly encouraged
								</p>
								<Link
									to="/book-call"
									className="group w-full inline-flex items-center justify-center gap-3 bg-gs-ink text-white rounded-2xl px-8 py-4 font-sans font-medium text-lg shadow-[0_4px_12px_rgba(67,91,114,0.15)] hover:-translate-y-0.5 hover:bg-gs-ink-hover hover:shadow-[0_6px_16px_rgba(67,91,114,0.2)] transition-all duration-200 gs-press"
								>
									Book Your Vibe Check Call
									<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</Link>
							</GentleCard>
						</div>
					</div>
				</div>
			</section>

			{/* ═══ WHAT HAPPENS NEXT ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[-5%] left-[-10%]" size="35vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							What Happens Next?
						</h2>
						<p className="font-hand text-gs-ink text-2xl">
							spoiler: nothing scary
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<GentleCard>
							<h4 className="font-serif text-xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
								If you email:
							</h4>
							<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
								I'll respond within 48 hours (unless I'm in executive
								dysfunction jail, in which case I'll respond as soon as I
								escape). We'll figure out next steps together.
							</p>
						</GentleCard>
						<GentleCard>
							<h4 className="font-serif text-xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
								If you book a call:
							</h4>
							<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
								You'll get a confirmation email with our meeting link. Camera
								optional. Pajamas encouraged. Stimming welcome.
							</p>
						</GentleCard>
					</div>
				</div>
			</section>

			{/* ═══ STILL OVERTHINKING ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="mist" position="top-[-10%] right-[-10%]" size="40vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							Still Overthinking It?
						</h2>
						<p className="font-hand text-gs-ink text-2xl">
							tap one and hit send — done
						</p>
					</div>

					<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed text-center mb-12 max-w-3xl mx-auto">
						Pick a conversation starter. It opens your email app with the message
						already written. Just hit send.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
						{conversationStarters.map((starter, i) => (
							<a
								key={i}
								href={`mailto:hello@frandab.com?subject=${encodeURIComponent(starter.subject)}&body=${starter.body}`}
								className="block group"
							>
								<GentleCard className="h-full flex items-center gap-4 !p-6">
									<p className="font-sans text-[17px] text-gs-body leading-relaxed flex-1">
										"{starter.text}"
									</p>
									<Mail className="w-5 h-5 text-gs-ink/40 group-hover:text-gs-ink flex-shrink-0 transition-colors duration-200" />
								</GentleCard>
							</a>
						))}
					</div>
				</div>
			</section>

			{/* ═══ MY PROMISE ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[-5%] left-[-10%]" size="35vw" />

				<div className="max-w-3xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							My Promise to You
						</h2>
						<p className="font-hand text-gs-ink text-2xl rotate-[-1deg]">
							pinky promise
						</p>
					</div>

					<GentleCard className="max-w-2xl mx-auto">
						<ul className="space-y-5">
							{[
								"No judgment about how long it took you to reach out",
								"No shame about what you're struggling with",
								'No neurotypical "solutions" that don\'t actually work',
								"Complete confidentiality",
								"Genuine understanding from someone who's been there",
							].map((item, i) => (
								<li key={i} className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-gs-ink mt-3 flex-shrink-0" />
									<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">{item}</p>
								</li>
							))}
						</ul>
					</GentleCard>
				</div>
			</section>

			{/* ═══ FINAL CTA ═══ */}
			<section className="py-28 md:py-36 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="mist" position="top-[-10%] left-[-10%]" size="40vw" />
				<AmbientBlob color="gold" position="bottom-[-10%] right-[-5%]" size="30vw" />

				<div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
					<h2 className="font-serif text-4xl md:text-5xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
						Ready? Take a Deep Breath.
					</h2>
					<PillDivider className="mb-8" />

					<p className="font-sans text-lg md:text-xl mb-4 text-gs-body leading-relaxed">
						The email is pre-filled — just hit send.
					</p>

					<p className="font-hand text-gs-ink text-3xl mb-12 rotate-[-1deg]">
						you've got this
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
						<a
							href="mailto:hello@frandab.com?subject=Hi%20Francois&body=Hi%20Francois%2C%0D%0A%0D%0AI%20found%20your%20website%20and%20I%E2%80%99d%20like%20to%20learn%20more%20about%20coaching.%0D%0A%0D%0A"
							className="group inline-flex items-center justify-center gap-3 border-2 border-gs-ink text-gs-ink rounded-2xl px-10 py-5 font-sans font-medium text-xl hover:-translate-y-0.5 hover:bg-gs-ink hover:text-white dark:hover:bg-gs-ink/15 dark:hover:text-gs-heading transition-all duration-200"
						>
							Send an Email
							<Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</a>
						<Link
							to="/book-call"
							className="group inline-flex items-center justify-center gap-3 bg-gs-ink text-white rounded-2xl px-10 py-5 font-sans font-medium text-xl shadow-[0_4px_12px_rgba(67,91,114,0.15)] hover:-translate-y-0.5 hover:bg-gs-ink-hover hover:shadow-[0_6px_16px_rgba(67,91,114,0.2)] transition-all duration-200 gs-press"
						>
							Book Your Vibe Check Call
							<ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
						</Link>
					</div>

					<p className="font-sans text-base text-gs-body/70">
						<em>
							Remember: Asking for help isn't weakness. It's the first step
							toward building a life that actually fits your brain.
						</em>
					</p>
				</div>
			</section>
		</>
	);
}
