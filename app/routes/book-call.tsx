import { useId } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { AmbientBlob, GentleCard, PillDivider } from "~/components/doodles";
import { SessionEmailLink } from "~/components/ui/EmailLink";
import type { Route } from "./+types/book-call";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Book Your Free Vibe Check Call - AuDHD Coaching | Francois Dab" },
		{
			name: "description",
			content:
				"Schedule your free Vibe Check call (up to 40 minutes). No pressure, no sales pitch - just two AuDHD brains figuring out if we're a good match.",
		},
	];
}

export default function BookCall() {
	const bookingDetailsId = useId();

	const concerns = [
		{
			q: "\u201CWhat if I forget?\u201D",
			a: "You'll get reminders. And if you still forget, we'll reschedule. It happens to me too.",
		},
		{
			q: "\u201CWhat if I can't articulate what I need?\u201D",
			a: "That's okay. Sometimes \"I don't know, I just know something needs to change\" is enough to start.",
		},
		{
			q: "\u201CWhat if I word vomit my entire life story?\u201D",
			a: "Honestly? I'll probably relate and share my own oversharing moments. We can be verbose together.",
		},
	];


	return (
		<>
			{/* ═══ HERO ═══ */}
			<section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[-10%] right-[-10%]" size="50vw" />
				<AmbientBlob color="mist" position="bottom-[-15%] left-[-10%]" size="35vw" />

				<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
					<p className="font-hand text-gs-ink text-3xl mb-6 rotate-[-3deg]">
						let's do this!
					</p>

					<h1 className="font-serif text-4xl md:text-6xl mb-8 font-semibold leading-[1.2] text-gs-heading tracking-[-0.01em]">
						Book Your Free{" "}
						<br />
						<span className="text-gs-ink">Vibe Check Call</span>
					</h1>

					<PillDivider className="mb-8" />

					<p className="font-sans text-xl md:text-2xl max-w-xl mx-auto text-gs-body leading-relaxed">
						<strong className="text-gs-heading">
							Up to 40 Minutes. No Pressure. Just Two Brains Figuring Out If We
							are a Good Fit.
						</strong>
					</p>
				</div>
			</section>

			{/* ═══ WHAT TO EXPECT ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="mist" position="top-[5%] right-[-15%]" size="30vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							What to Expect
						</h2>
						<p className="font-hand text-gs-ink text-2xl">
							no scripts, just real talk
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
						<GentleCard>
							<h3 className="font-serif text-2xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
								A Real Conversation
							</h3>
							<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
								Not a sales pitch. Not an interrogation. Just two humans talking
								about what brought you here and whether I might be able to help.
							</p>
						</GentleCard>

						<GentleCard>
							<h3 className="font-serif text-2xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
								Come As You Are
							</h3>
							<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
								Camera off? Perfect. In your pajamas? Ideal. Need to pace while
								we talk? Do it. This is a masked-free zone.
							</p>
						</GentleCard>

						<GentleCard>
							<h3 className="font-serif text-2xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
								My Promise
							</h3>
							<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
								I'll be honest about whether I think I can help. If I'm not the
								right fit, I'll do my best to point you toward someone who might
								be.
							</p>
						</GentleCard>
					</div>

					<div id={bookingDetailsId} />
				</div>
			</section>

			{/* ═══ BOOKING DETAILS ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[-10%] left-[-10%]" size="40vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							Booking Details
						</h2>
						<p className="font-hand text-gs-ink text-2xl">
							the practical stuff
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
						<GentleCard>
							<ul className="space-y-6">
								{[
									{ label: "Duration:", text: "Up to 40 minutes (with a buffer because AuDHD time blindness is real)" },
									{ label: "Format:", text: "Video call (camera optional) via Google Meet, Zoom, or any other video platform you prefer. Camera on or off, it's up to you." },
									{ label: "Prep:", text: "None required. Just show up as you are" },
									{ label: "What to bring:", text: "Your questions, your concerns, your authentic self" },
								].map((item, i) => (
									<li key={i} className="flex items-start gap-4">
										<div className="w-1.5 h-1.5 rounded-full bg-gs-ink mt-3 flex-shrink-0" />
										<div>
											<span className="font-sans font-semibold text-lg text-gs-heading">
												{item.label}
											</span>
											<span className="font-sans text-lg text-gs-body ml-2 leading-relaxed">
												{item.text}
											</span>
										</div>
									</li>
								))}
							</ul>
						</GentleCard>

						<div className="flex flex-col gap-4 justify-center items-center md:items-end">
							<Link
								to="https://calendar.app.google/DzX2xMDgSeyRDGhU7"
								target="_blank"
								className="group inline-flex items-center gap-3 bg-gs-ink text-white rounded-2xl px-10 py-5 font-sans font-medium text-xl shadow-[0_4px_12px_rgba(67,91,114,0.15)] hover:-translate-y-0.5 hover:bg-gs-ink-hover hover:shadow-[0_6px_16px_rgba(67,91,114,0.2)] transition-all duration-300 gs-press"
							>
								Book Your Vibe Check Call
								<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* ═══ CAN'T FIND A TIME ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="mist" position="top-[5%] left-[-15%]" size="30vw" />

				<div className="max-w-3xl mx-auto px-6 relative z-10">
					<GentleCard className="max-w-3xl mx-auto">
						<div className="space-y-5">
							<h3 className="font-serif text-2xl md:text-3xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
								Can't Find a Time That Works?
							</h3>
							<p className="font-hand text-gs-ink text-xl rotate-[-1deg]">
								we'll figure it out together
							</p>
							<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
								Executive dysfunction making it hard to book? Timezone issues?
								Need a different format?
							</p>
							<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
								Email me at <SessionEmailLink className="text-gs-ink hover:underline" /> and we'll figure something out.
								I'm flexible because I know brains can be inflexible.
							</p>
						</div>
					</GentleCard>
				</div>
			</section>

			{/* ═══ AFTER YOU BOOK ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[-5%] right-[-10%]" size="35vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							After You Book
						</h2>
						<p className="font-hand text-gs-ink text-2xl">
							three easy steps
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						{[
							{ step: "1", title: "Confirmation", text: "You'll get a confirmation email (check spam if you don't see it)" },
							{ step: "2", title: "Reminder", text: "Add it to your calendar with whatever reminders your brain needs" },
							{ step: "3", title: "Show Up", text: "Show up (or reschedule if needed—no judgment)" },
						].map((item) => (
							<div key={item.step} className="text-center">
								<div className="w-14 h-14 bg-gs-gold/60 text-gs-ink rounded-full flex items-center justify-center text-2xl font-sans font-semibold mx-auto mb-5">
									{item.step}
								</div>
								<h3 className="font-serif text-2xl mb-3 font-semibold text-gs-heading tracking-[-0.01em]">
									{item.title}
								</h3>
								<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
									{item.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ═══ COMMON CONCERNS ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="mist" position="top-[-5%] left-[-10%]" size="35vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
							Common Concerns
						</h2>
						<p className="font-hand text-gs-ink text-2xl">
							your brain is probably saying...
						</p>
					</div>

					<div className="space-y-8 max-w-3xl mx-auto">
						{concerns.map((c, i) => (
							<GentleCard key={i}>
								<h3 className="font-serif text-2xl mb-3 font-semibold text-gs-heading tracking-[-0.01em]">
									{c.q}
								</h3>
								<p className="font-sans text-lg md:text-xl text-gs-body leading-relaxed">
									{c.a}
								</p>
							</GentleCard>
						))}
					</div>
				</div>
			</section>

			{/* ═══ FINAL CTA ═══ */}
			<section className="py-28 md:py-36 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[-10%] right-[-10%]" size="40vw" />
				<AmbientBlob color="mist" position="bottom-[-10%] left-[-5%]" size="30vw" />

				<div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
					<h2 className="font-serif text-4xl md:text-5xl mb-4 font-semibold text-gs-heading tracking-[-0.01em]">
						Ready? Choose your time and let's start this journey
					</h2>
					<PillDivider className="mb-8" />

					<p className="font-hand text-gs-ink text-3xl mb-12 rotate-[-1deg]">
						just a conversation, no commitments
					</p>

					<Link
						to="https://calendar.app.google/DzX2xMDgSeyRDGhU7"
						target="_blank"
						className="group inline-flex items-center gap-3 bg-gs-ink text-white rounded-2xl px-10 py-5 font-sans font-medium text-xl shadow-[0_4px_12px_rgba(67,91,114,0.15)] hover:-translate-y-0.5 hover:bg-gs-ink-hover hover:shadow-[0_6px_16px_rgba(67,91,114,0.2)] transition-all duration-300 gs-press"
					>
						Book Your Free Vibe Check
						<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
					</Link>
				</div>
			</section>
		</>
	);
}
