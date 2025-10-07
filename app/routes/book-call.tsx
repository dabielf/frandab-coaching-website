import { useId } from "react";
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
	return (
		<>
			{/* Hero Section */}
			<Section size="lg" background="primary-soft">
				<Container size="wide">
					<div className="text-center">
						<H1 className="mb-6">Book Your Free Connection Call</H1>
						<BodyLarge className="text-text-secondary">
							Up to 40 Minutes. No Pressure. Just Two Brains Figuring Out If We
							are a Good Fit.
						</BodyLarge>
					</div>
				</Container>
			</Section>

			{/* What to Expect */}
			<Section>
				<Container>
					<H2 className="mb-12">What to Expect:</H2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<H4 className="mb-4">A Real Conversation</H4>
							<BodyBase className="text-text-secondary">
								Not a sales pitch. Not an interrogation. Just two humans talking
								about what brought you here and whether I might be able to help.
							</BodyBase>
						</div>

						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<H4 className="mb-4">Come As You Are</H4>
							<BodyBase className="text-text-secondary">
								Camera off? Perfect. In your pajamas? Ideal. Need to pace while
								we talk? Do it. This is a masked-free zone.
							</BodyBase>
						</div>

						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<H4 className="mb-4">My Promise</H4>
							<BodyBase className="text-text-secondary">
								I'll be honest about whether I think I can help. If I'm not the
								right fit, I'll do my best to point you toward someone who might
								be.
							</BodyBase>
						</div>
					</div>
					<div id={bookingDetailsId} />
				</Container>
			</Section>

			{/* Booking Details */}
			<Section background="alt">
				<Container>
					<H2 className="mb-8">Booking Details:</H2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
						<div>
							<ul className="space-y-4">
								<li className="flex items-start space-x-3">
									<span className="text-primary mt-1 font-semibold">•</span>
									<div>
										<span className="font-semibold">Duration:</span>
										<span className="text-text-secondary ml-2">
											Up to 40 minutes (with a buffer because AuDHD time
											blindness is real)
										</span>
									</div>
								</li>
								<li className="flex items-start space-x-3">
									<span className="text-primary mt-1 font-semibold">•</span>
									<div>
										<span className="font-semibold">Format:</span>
										<span className="text-text-secondary ml-2">
											Video call (camera optional) via Google Meet, Zoom, or any
											other video platform you prefer. Camera on or off, it's up
											to you.
										</span>
									</div>
								</li>
								<li className="flex items-start space-x-3">
									<span className="text-primary mt-1 font-semibold">•</span>
									<div>
										<span className="font-semibold">Prep:</span>
										<span className="text-text-secondary ml-2">
											None required. Just show up as you are
										</span>
									</div>
								</li>
								<li className="flex items-start space-x-3">
									<span className="text-primary mt-1 font-semibold">•</span>
									<div>
										<span className="font-semibold">What to bring:</span>
										<span className="text-text-secondary ml-2">
											Your questions, your concerns, your authentic self
										</span>
									</div>
								</li>
							</ul>
						</div>

						<div className="flex flex-col gap-4 justify-start items-end">
							<Link
								to="https://calendar.app.google/DzX2xMDgSeyRDGhU7"
								target="_blank"
								className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-medium text-lg transition-colors duration-200 hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/20 mb-4"
							>
								Book Your (up to) 40 min Blueprint Session HERE →
							</Link>
							{/* <Link
								to="https://calendar.app.google/WCB77cGccLVLPp7S9"
								target="_blank"
								className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-medium text-lg transition-colors duration-200 hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/20 mb-4"
							>
								Book Your 90min Blueprint Session HERE →
							</Link> */}
						</div>
					</div>
				</Container>
			</Section>

			{/* Can't Find Time */}
			<Section>
				<Container>
					<div className="bg-surface-alt rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
						<H3 className="mb-6">Can't Find a Time That Works?</H3>
						<BodyBase className="text-text-secondary mb-6">
							Executive dysfunction making it hard to book? Timezone issues?
							Need a different format?
						</BodyBase>
						<BodyBase className="text-text-secondary mb-6">
							Email me at <SessionEmailLink /> and we'll figure something out.
							I'm flexible because I know brains can be inflexible.
						</BodyBase>
					</div>
				</Container>
			</Section>

			{/* After You Book */}
			<Section background="alt">
				<Container>
					<H2 className="mb-8">After You Book:</H2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="text-center">
							<div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
								1
							</div>
							<H4 className="mb-3">Confirmation</H4>
							<BodySmall className="text-text-secondary">
								You'll get a confirmation email (check spam if you don't see it)
							</BodySmall>
						</div>
						<div className="text-center">
							<div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
								2
							</div>
							<H4 className="mb-3">Reminder</H4>
							<BodySmall className="text-text-secondary">
								Add it to your calendar with whatever reminders your brain needs
							</BodySmall>
						</div>
						<div className="text-center">
							<div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
								3
							</div>
							<H4 className="mb-3">Show Up</H4>
							<BodySmall className="text-text-secondary">
								Show up (or reschedule if needed—no judgment)
							</BodySmall>
						</div>
					</div>
				</Container>
			</Section>

			{/* Common Concerns */}
			<Section>
				<Container>
					<H2 className="mb-12">Common Concerns:</H2>
					<div className="space-y-8">
						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<H4 className="mb-3">"What if I forget?"</H4>
							<BodyBase className="text-text-secondary">
								You'll get reminders. And if you still forget, we'll reschedule.
								It happens to me too.
							</BodyBase>
						</div>

						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<H4 className="mb-3">
								"What if I can't articulate what I need?"
							</H4>
							<BodyBase className="text-text-secondary">
								That's okay. Sometimes "I don't know, I just know something
								needs to change" is enough to start.
							</BodyBase>
						</div>

						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<H4 className="mb-3">
								"What if I word vomit my entire life story?"
							</H4>
							<BodyBase className="text-text-secondary">
								Honestly? I'll probably relate and share my own oversharing
								moments. We can be verbose together.
							</BodyBase>
						</div>
					</div>
				</Container>
			</Section>

			{/* Final CTA */}
			<Section background="primary-soft">
				<Container>
					<div className="text-center">
						<H2 className="mb-6">
							Ready? Choose your time and let's start this journey:
						</H2>
						<Link
							to={`#${bookingDetailsId}`}
							className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-medium text-lg transition-colors duration-200 hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/20 mb-4"
						>
							Let's work together →
						</Link>
						{/* <BodySmall className="text-text-tertiary">
							<em>
								Remember: This call is just a conversation. No commitments, no
								pressure, just possibility.
							</em>
						</BodySmall> */}
					</div>
				</Container>
			</Section>
		</>
	);
}
