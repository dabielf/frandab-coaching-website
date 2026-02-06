import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { ContactEmailLink } from "~/components/ui/EmailLink";
import {
	BigDoodleLeaf,
	BigDoodleStar,
	DoodleCard,
	ScribblyUnderline,
	SparkleCluster,
	SunburstSVG,
	WavyDivider,
} from "~/components/doodles";
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
	const faqs = [
		{
			question:
				"“What’s the difference between coaching and therapy?”",
			answer: (
				<div className="space-y-5 font-body text-sd-dim-text text-lg md:text-xl leading-[2]">
					<p>Great question! Here's my take:</p>
					<p>
						Therapy typically focuses on healing past wounds, processing trauma,
						and treating clinical conditions like anxiety or depression.
						It's usually backward-looking and healing-focused.
					</p>
					<p>
						Coaching is forward-focused and action-oriented. We'll
						acknowledge the past (because holy shit, late diagnosis brings up
						STUFF), but our main focus is building practical strategies for your
						future.
					</p>
					<p>
						That said, I don't follow the traditional coaching model of
						“you have all the answers inside you.” Sometimes those
						“answers” are just 40 years of masking strategies.
						Sometimes you need someone to say, “Hey, that's an
						executive function thing, here's what actually helps.”
					</p>
					<p>
						I'm not a therapist, and coaching isn't therapy. Many of
						my clients see both a therapist and me, and it's a powerful
						combination.
					</p>
				</div>
			),
		},
		{
			question: "“Do I need an official diagnosis?”",
			answer: (
				<div className="space-y-5 font-body text-sd-dim-text text-lg md:text-xl leading-[2]">
					<p className="font-semibold">Absolutely not.</p>
					<p>
						The path to formal diagnosis is a maze of waitlists, expenses, and
						professionals who don't understand adult presentations
						(especially in women and high-maskers). Self-diagnosis is valid in
						the autistic community, and it's valid here.
					</p>
					<p>
						If you relate to the AuDHD experience, you're welcome here.
						Period.
					</p>
				</div>
			),
		},
		{
			question:
				"“What if I’m not sure I’m autistic/ADHD/AuDHD?”",
			answer: (
				<div className="space-y-5 font-body text-sd-dim-text text-lg md:text-xl leading-[2]">
					<p>That's okay! Questioning is part of the journey.</p>
					<p>
						If you're here, something resonates. Maybe you're not
						ready to claim the label. Maybe you're in the “but
						I'm not autistic enough” phase (spoiler: that's
						often internalized ableism talking). Maybe you're just starting
						to peek behind your mask.
					</p>
					<p>
						We can explore this together. I won't push labels on you, but
						I also won't gatekeep support.
					</p>
				</div>
			),
		},
		{
			question:
				"“How is your coaching different from neurotypical coaching?”",
			answer: (
				<div className="space-y-5 font-body text-sd-dim-text text-lg md:text-xl leading-[2]">
					<p>Where do I start?</p>
					<ul className="space-y-3">
						<li className="flex items-start space-x-3">
							<span className="text-sd-emerald mt-1 flex-shrink-0">
								&bull;
							</span>
							<span>
								I won't tell you to “just trust the
								process” when the process wasn't built for your
								brain
							</span>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-sd-emerald mt-1 flex-shrink-0">
								&bull;
							</span>
							<span>
								I understand that sometimes you need scripts, not
								“intuition”
							</span>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-sd-emerald mt-1 flex-shrink-0">
								&bull;
							</span>
							<span>
								I know that “just do it” isn't helpful when
								executive dysfunction has you stuck
							</span>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-sd-emerald mt-1 flex-shrink-0">
								&bull;
							</span>
							<span>
								I get that some days, showering IS the achievement
							</span>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-sd-emerald mt-1 flex-shrink-0">
								&bull;
							</span>
							<span>
								I won't shame you for your coping mechanisms (yes, even
								the “weird” ones)
							</span>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-sd-emerald mt-1 flex-shrink-0">
								&bull;
							</span>
							<span>
								I understand the both/and of AuDHD, not just autism OR ADHD
							</span>
						</li>
					</ul>
					<p>
						Plus, I share my own struggles. You won't get toxic positivity
						from someone who's “figured it all out.”
						You'll get real support from someone still figuring it out too.
					</p>
				</div>
			),
		},
		{
			question:
				"“What happens in the free blueprint call?”",
			answer: (
				<div className="space-y-5 font-body text-sd-dim-text text-lg md:text-xl leading-[2]">
					<p>
						It's 30 or 90 minutes (depending on your preferences) of
						checking if we're a good match—hence why I also call it
						a “blueprint call.” No pressure, no sales pitch.
					</p>
					<p>
						You'll share what's bringing you to coaching. I'll
						probably overshare about my own journey (occupational hazard of being
						AuDHD). We'll discuss how I work and what support might look
						like.
					</p>
					<p>
						You can ask me anything. Turn your camera off if you want. Take
						notes. Stim freely. This is a judgment-free zone.
					</p>
					<p>
						By the end, we'll both know if working together feels right.
						<br />
						If not, no hard feelings: fit matters.
					</p>
				</div>
			),
		},
		{
			question: "“What if I need to cancel last minute?”",
			answer: (
				<div className="space-y-5 font-body text-sd-dim-text text-lg md:text-xl leading-[2]">
					<p>Life happens. Especially AuDHD life.</p>
					<p>
						Sometimes you wake up and the thought of human interaction makes you
						want to hide under your weighted blanket. Sometimes executive
						dysfunction wins. Sometimes you're in burnout.
					</p>
					<p>
						I get it. I've been there. We'll reschedule without
						judgment.
					</p>
					<p>
						Just please send me a message, even if it's very last minute.
						I struugle with waiting and uncertainty too.
					</p>
				</div>
			),
		},
		{
			question:
				"“Can you help with workplace accommodations?”",
			answer: (
				<div className="space-y-5 font-body text-sd-dim-text text-lg md:text-xl leading-[2]">
					<p>Yes! This is a common focus area. We can work on:</p>
					<ul className="space-y-3">
						<li className="flex items-start space-x-3">
							<span className="text-sd-emerald mt-1 flex-shrink-0">
								&bull;
							</span>
							<span>
								Figuring out what accommodations you actually need
							</span>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-sd-emerald mt-1 flex-shrink-0">
								&bull;
							</span>
							<span>Scripts for talking to HR or your manager</span>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-sd-emerald mt-1 flex-shrink-0">
								&bull;
							</span>
							<span>
								Strategies for when formal accommodations aren't possible
							</span>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-sd-emerald mt-1 flex-shrink-0">
								&bull;
							</span>
							<span>
								Building sustainable work habits that honor your neurotype
							</span>
						</li>
					</ul>
					<p>
						I can't provide legal advice, but I can help you advocate for
						yourself effectively.
					</p>
				</div>
			),
		},
		{
			question:
				"“Do you work with family members or partners?”",
			answer: (
				<div className="space-y-5 font-body text-sd-dim-text text-lg md:text-xl leading-[2]">
					<p>
						I primarily work with AuDHD individuals, but I do offer limited
						sessions for partners who want to better understand and support their
						neurodivergent person.
					</p>
					<p>These sessions focus on:</p>
					<ul className="space-y-3">
						<li className="flex items-start space-x-3">
							<span className="text-sd-emerald mt-1 flex-shrink-0">
								&bull;
							</span>
							<span>
								Understanding neurodivergent communication styles
							</span>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-sd-emerald mt-1 flex-shrink-0">
								&bull;
							</span>
							<span>
								Learning how to support without enabling masking
							</span>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-sd-emerald mt-1 flex-shrink-0">
								&bull;
							</span>
							<span>
								Building a relationship that works for both neurotypes
							</span>
						</li>
					</ul>
				</div>
			),
		},
		{
			question: "“What’s your cancellation policy?”",
			answer: (
				<div className="space-y-5 font-body text-sd-dim-text text-lg md:text-xl leading-[2]">
					<p>
						Life happens, especially in neurospicy brains. I ask for 24 hours
						notice when possible, but I understand that's not always
						feasible. We'll work together to find a rhythm that honors
						both your needs and mine.
					</p>
				</div>
			),
		},
		{
			question:
				"“What if I’m too overwhelmed to even start?”",
			answer: (
				<div className="space-y-5 font-body text-sd-dim-text text-lg md:text-xl leading-[2]">
					<p>That's exactly when you need support most.</p>
					<p>
						We can start tiny. Like, ridiculously tiny. Sometimes the first win
						is just “I showed up to the call.” We'll build
						from there, at whatever pace works for your current capacity.
					</p>
					<p>
						Remember: I specialize in decomplexification. I can break
						“starting” down into the less spoon-consuming possible
						steps. Because it's not about how big or small a task is,
						it's about how much it costs you.
					</p>
				</div>
			),
		},
	];


	return (
		<>
			{/* ── Hero Section ── */}
			<section className="relative pt-18 pb-20 md:pt-28 md:pb-32 overflow-hidden bg-sd-cream">
				{/* Decorations */}
				<SparkleCluster className="absolute top-10 right-12 w-14 h-14 twinkle-1" />
				<BigDoodleLeaf className="absolute -bottom-4 right-6 w-20 h-28 float-b2 opacity-50" />

				<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
					{/* Handwritten annotation */}
					<p className="font-handwritten text-sd-gold text-3xl mb-6" style={{ transform: "rotate(-3deg)" }}>
						we love a thorough question around here
					</p>

					<h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-sd-heading mb-6 leading-[1.25]">
						Questions from Fellow{" "}
						<em className="text-sd-emerald">Overthinkers</em>
					</h1>

					<ScribblyUnderline
						colorVar="--sd-gold"
						className="w-48 md:w-64 mb-8"
					/>

					<p className="font-body text-xl md:text-2xl leading-[2] text-sd-dim-text max-w-xl mx-auto">
						Because we're neurodivergent—of course we have detailed
						questions about everything.
					</p>
				</div>
			</section>

			<WavyDivider bgClass="bg-sd-linen" />

			{/* ── FAQ Cards Section ── */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-linen">
				{/* Decorations */}
				<SparkleCluster className="absolute top-20 right-10 w-12 h-12 twinkle-2" />
				<BigDoodleStar className="absolute top-32 left-6 w-14 h-14 twinkle-1 opacity-40" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl font-normal text-sd-heading mb-4">
							The Big Ones
						</h2>
						<ScribblyUnderline
							colorVar="--sd-emerald"
							className="w-36 md:w-48 mb-4"
						/>
						<p className="font-handwritten text-sd-emerald text-2xl rotate-1">
							(the questions everyone asks first)
						</p>
					</div>

					<div className="space-y-10">
						{faqs.slice(0, 5).map((faq, i) => (
							<DoodleCard
								key={i}
								className="max-w-4xl mx-auto"
							>
								<h3 className="font-heading text-xl md:text-2xl font-semibold text-sd-heading mb-5">
									{faq.question}
								</h3>
								{faq.answer}
							</DoodleCard>
						))}
					</div>
				</div>
			</section>

			<WavyDivider bgClass="bg-sd-cream" />

			{/* ── More Questions Section ── */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-cream">
				{/* Decorations */}
				<SunburstSVG className="absolute bottom-10 right-8 w-20 h-20 spin-lazy opacity-30" />
				<SparkleCluster className="absolute top-16 left-12 w-10 h-10 twinkle-3" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl font-normal text-sd-heading mb-4">
							The Practical Stuff
						</h2>
						<ScribblyUnderline
							colorVar="--sd-sage"
							className="w-40 md:w-56 mb-4"
						/>
						<p className="font-handwritten text-sd-gold text-2xl -rotate-2">
							equally important, just different vibes
						</p>
					</div>

					<div className="space-y-10">
						{faqs.slice(5).map((faq, i) => (
							<DoodleCard
								key={i + 5}
								className="max-w-4xl mx-auto"
							>
								<h3 className="font-heading text-xl md:text-2xl font-semibold text-sd-heading mb-5">
									{faq.question}
								</h3>
								{faq.answer}
							</DoodleCard>
						))}
					</div>
				</div>
			</section>

			<WavyDivider bgClass="bg-sd-on-dark-bg" showDot={false} />

			{/* ── Still Have Questions? (Dark Section) ── */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-on-dark-bg">
				{/* Decorations */}
				<SparkleCluster className="absolute top-12 right-16 w-12 h-12 twinkle-1" />

				<div className="max-w-2xl mx-auto px-6 text-center relative z-10">
					<h2 className="font-heading text-3xl md:text-4xl font-normal text-sd-on-dark-heading mb-4">
						Still Have Questions?
					</h2>
					<ScribblyUnderline
						colorVar="--sd-gold"
						className="w-44 md:w-60 mb-6"
					/>

					<p className="font-handwritten text-sd-on-dark-dim text-2xl -rotate-1 mb-6">
						my inbox loves a good info-dump
					</p>

					<p className="font-body text-lg md:text-xl leading-[2] text-sd-on-dark-text mb-10">
						My inbox is always open. Send me your wonderings, your concerns,
						your overthinking spirals. I'll respond with the same verbose
						enthusiasm I bring to everything.
					</p>

					<div className="flex flex-col sm:flex-row gap-5 justify-center">
						<ContactEmailLink className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-sd-gold text-sd-on-dark-bg font-body font-bold text-lg md:text-xl transition-transform duration-200 ease-out hover:-translate-y-2 hover:scale-105">
							Email me at hello@frandab.com
						</ContactEmailLink>
						<Link
							to="/services"
							className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-sd-deep-green text-white font-body font-bold text-lg md:text-xl transition-transform duration-200 ease-out hover:-translate-y-2 hover:scale-105 border-2 border-sd-sage/30"
						>
							Learn about the Re-Architect's Journey
							<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
