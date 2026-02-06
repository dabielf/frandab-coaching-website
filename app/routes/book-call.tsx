import { useId } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import {
	BigDoodleLeaf,
	DoodleCard,
	ScribblyUnderline,
	SparkleCluster,
	SunburstSVG,
	WavyDivider,
} from "~/components/doodles";
import { SessionEmailLink } from "~/components/ui/EmailLink";
import type { Route } from "./+types/book-call";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Book Your Free Blueprint Call - AuDHD Coaching | Francois Dab" },
		{
			name: "description",
			content:
				"Schedule your free 30-minute blueprint call. No pressure, no sales pitch - just two AuDHD brains figuring out if we're a good match.",
		},
	];
}

export default function BookCall() {
	const bookingDetailsId = useId();

	const concerns = [
		{
			q: "“What if I forget?”",
			a: "You’ll get reminders. And if you still forget, we’ll reschedule. It happens to me too.",
		},
		{
			q: "“What if I can’t articulate what I need?”",
			a: "That’s okay. Sometimes “I don’t know, I just know something needs to change” is enough to start.",
		},
		{
			q: "“What if I word vomit my entire life story?”",
			a: "Honestly? I’ll probably relate and share my own oversharing moments. We can be verbose together.",
		},
	];


	return (
		<>
			{/* ═══════════════════════════════════════════
			    HERO — cream background
			    ═══════════════════════════════════════════ */}
			<section className="relative pt-18 pb-20 md:pt-28 md:pb-32 overflow-hidden bg-sd-cream">
				{/* Background decorations */}
				<BigDoodleLeaf className="absolute top-12 left-4 w-20 h-28 float-b1" />
				<SparkleCluster className="absolute top-16 right-12 w-10 h-10 twinkle-1" />

				<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
					{/* Handwritten welcome */}
					<p
						className="font-handwritten text-sd-gold text-3xl mb-6"
						style={{ transform: "rotate(-3deg)" }}
					>
						let's do this!
					</p>

					<h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 font-semibold leading-[1.25] text-sd-heading">
						Book Your Free{" "}
						<br />
						<em className="text-sd-emerald">Connection Call</em>
					</h1>

					<ScribblyUnderline colorVar="--sd-gold" className="w-48 md:w-64 mb-8" />

					<p className="font-body text-xl md:text-2xl max-w-xl mx-auto mb-4 text-sd-dim-text leading-[2]">
						<strong>
							Up to 40 Minutes. No Pressure. Just Two Brains Figuring Out If We
							are a Good Fit.
						</strong>
					</p>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-linen" />

			{/* ═══════════════════════════════════════════
			    WHAT TO EXPECT — linen background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-linen">
				<SparkleCluster className="absolute top-12 right-12 w-10 h-10 twinkle-2" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
							What to Expect:
						</h2>
						<ScribblyUnderline colorVar="--sd-emerald" className="w-56 md:w-72 mb-4" />
						<p className="font-handwritten text-sd-emerald text-2xl">
							no scripts, just real talk
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
						<DoodleCard>
							<h3 className="font-heading text-2xl mb-4 font-semibold text-sd-heading">
								A Real Conversation
							</h3>
							<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
								Not a sales pitch. Not an interrogation. Just two humans talking
								about what brought you here and whether I might be able to help.
							</p>
						</DoodleCard>

						<DoodleCard>
							<h3 className="font-heading text-2xl mb-4 font-semibold text-sd-heading">
								Come As You Are
							</h3>
							<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
								Camera off? Perfect. In your pajamas? Ideal. Need to pace while
								we talk? Do it. This is a masked-free zone.
							</p>
						</DoodleCard>

						<DoodleCard>
							<h3 className="font-heading text-2xl mb-4 font-semibold text-sd-heading">
								My Promise
							</h3>
							<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
								I'll be honest about whether I think I can help. If I'm not the
								right fit, I'll do my best to point you toward someone who might
								be.
							</p>
						</DoodleCard>
					</div>

					<div id={bookingDetailsId} />
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-on-dark-bg" />

			{/* ═══════════════════════════════════════════
			    BOOKING DETAILS — deepGreen dark section
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-on-dark-bg">
				<SparkleCluster className="absolute top-12 right-16 w-10 h-10 twinkle-1" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-on-dark-heading">
							Booking Details:
						</h2>
						<ScribblyUnderline colorVar="--sd-gold" className="w-48 md:w-64 mb-4" />
						<p className="font-handwritten text-sd-on-dark-dim text-2xl">
							the practical stuff
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
						<div>
							<ul className="space-y-6">
								<li className="flex items-start space-x-4">
									<span className="text-sd-gold mt-1 font-semibold text-xl">&bull;</span>
									<div>
										<span className="font-body font-semibold text-lg text-sd-on-dark-heading">
											Duration:
										</span>
										<span className="font-body text-lg text-sd-on-dark-text/80 ml-2 leading-[2]">
											Up to 40 minutes (with a buffer because AuDHD time
											blindness is real)
										</span>
									</div>
								</li>
								<li className="flex items-start space-x-4">
									<span className="text-sd-gold mt-1 font-semibold text-xl">&bull;</span>
									<div>
										<span className="font-body font-semibold text-lg text-sd-on-dark-heading">
											Format:
										</span>
										<span className="font-body text-lg text-sd-on-dark-text/80 ml-2 leading-[2]">
											Video call (camera optional) via Google Meet, Zoom, or any
											other video platform you prefer. Camera on or off, it's up
											to you.
										</span>
									</div>
								</li>
								<li className="flex items-start space-x-4">
									<span className="text-sd-gold mt-1 font-semibold text-xl">&bull;</span>
									<div>
										<span className="font-body font-semibold text-lg text-sd-on-dark-heading">
											Prep:
										</span>
										<span className="font-body text-lg text-sd-on-dark-text/80 ml-2 leading-[2]">
											None required. Just show up as you are
										</span>
									</div>
								</li>
								<li className="flex items-start space-x-4">
									<span className="text-sd-gold mt-1 font-semibold text-xl">&bull;</span>
									<div>
										<span className="font-body font-semibold text-lg text-sd-on-dark-heading">
											What to bring:
										</span>
										<span className="font-body text-lg text-sd-on-dark-text/80 ml-2 leading-[2]">
											Your questions, your concerns, your authentic self
										</span>
									</div>
								</li>
							</ul>
						</div>

						<div className="flex flex-col gap-4 justify-center items-center md:items-end">
							<Link
								to="https://calendar.app.google/DzX2xMDgSeyRDGhU7"
								target="_blank"
								className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-body font-bold text-xl transition-transform duration-200 ease-out hover:-translate-y-2 hover:scale-105 bg-sd-gold shadow-[0_12px_35px_rgba(201,168,76,0.3)]"
							>
								Book Your (up to) 40 min Blueprint Session HERE
								<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-cream" />

			{/* ═══════════════════════════════════════════
			    CAN'T FIND A TIME — cream background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-cream">
				<SparkleCluster className="absolute top-16 left-8 w-10 h-10 twinkle-2" />

				<div className="max-w-3xl mx-auto px-6 relative z-10">
					<DoodleCard className="max-w-3xl mx-auto">
						<div className="space-y-5">
							<h3 className="font-heading text-2xl md:text-3xl mb-4 font-semibold text-sd-heading">
								Can't Find a Time That Works?
							</h3>
							<p
								className="font-handwritten text-sd-gold text-xl"
								style={{ transform: "rotate(-1deg)" }}
							>
								we'll figure it out together
							</p>
							<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
								Executive dysfunction making it hard to book? Timezone issues?
								Need a different format?
							</p>
							<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
								Email me at <SessionEmailLink /> and we'll figure something out.
								I'm flexible because I know brains can be inflexible.
							</p>
						</div>
					</DoodleCard>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-linen" />

			{/* ═══════════════════════════════════════════
			    AFTER YOU BOOK — linen background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-linen">
				<SparkleCluster className="absolute top-12 right-12 w-10 h-10 twinkle-1" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
							After You Book:
						</h2>
						<ScribblyUnderline colorVar="--sd-sage" className="w-48 md:w-64 mb-4" />
						<p className="font-handwritten text-sd-emerald text-2xl">
							three easy steps
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						<div className="text-center">
							<div className="w-14 h-14 bg-sd-gold text-white rounded-full flex items-center justify-center text-2xl font-heading font-bold mx-auto mb-5">
								1
							</div>
							<h3 className="font-heading text-2xl mb-3 font-semibold text-sd-heading">
								Confirmation
							</h3>
							<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
								You'll get a confirmation email (check spam if you don't see it)
							</p>
						</div>
						<div className="text-center">
							<div className="w-14 h-14 bg-sd-gold text-white rounded-full flex items-center justify-center text-2xl font-heading font-bold mx-auto mb-5">
								2
							</div>
							<h3 className="font-heading text-2xl mb-3 font-semibold text-sd-heading">
								Reminder
							</h3>
							<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
								Add it to your calendar with whatever reminders your brain needs
							</p>
						</div>
						<div className="text-center">
							<div className="w-14 h-14 bg-sd-gold text-white rounded-full flex items-center justify-center text-2xl font-heading font-bold mx-auto mb-5">
								3
							</div>
							<h3 className="font-heading text-2xl mb-3 font-semibold text-sd-heading">
								Show Up
							</h3>
							<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
								Show up (or reschedule if needed—no judgment)
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-cream" />

			{/* ═══════════════════════════════════════════
			    COMMON CONCERNS — cream background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-cream">
				<SparkleCluster className="absolute top-16 left-8 w-10 h-10 twinkle-2" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
							Common Concerns:
						</h2>
						<ScribblyUnderline colorVar="--sd-gold" className="w-48 md:w-64 mb-4" />
						<p className="font-handwritten text-sd-emerald text-2xl">
							your brain is probably saying...
						</p>
					</div>

					<div className="space-y-8 max-w-3xl mx-auto">
						{concerns.map((c, i) => (
							<DoodleCard key={i}>
								<h3 className="font-heading text-2xl mb-3 font-semibold text-sd-heading">
									{c.q}
								</h3>
								<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
									{c.a}
								</p>
							</DoodleCard>
						))}
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-linen" />

			{/* ═══════════════════════════════════════════
			    FINAL CTA — linen background
			    ═══════════════════════════════════════════ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-sd-linen">
				<SparkleCluster className="absolute top-12 right-16 w-10 h-10 twinkle-2" />
				<SunburstSVG className="absolute bottom-12 right-[8%] w-16 h-16 spin-lazy" />

				<div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
					<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
						Ready? Choose your time and let's start this journey:
					</h2>
					<ScribblyUnderline colorVar="--sd-gold" className="w-56 md:w-72 mb-6" />

					<p
						className="font-handwritten text-sd-emerald text-2xl mb-10"
						style={{ transform: "rotate(-1deg)" }}
					>
						just a conversation, no commitments
					</p>

					<Link
						to={`#${bookingDetailsId}`}
						className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-body font-bold text-xl transition-transform duration-200 ease-out hover:-translate-y-2 hover:scale-105 bg-sd-deep-green shadow-[0_12px_35px_var(--sd-deep-green)/0.3]"
					>
						Let's work together
						<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
					</Link>
				</div>
			</section>
		</>
	);
}
