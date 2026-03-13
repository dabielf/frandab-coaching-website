import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { ContactEmailLink } from "~/components/ui/EmailLink";
import { AmbientBlob, GentleCard, PillDivider } from "~/components/doodles";
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
			question: "\u201CWhat\u2019s the difference between coaching and therapy?\u201D",
			answer: (
				<div className="space-y-5 font-sans text-gs-body text-lg md:text-xl leading-relaxed">
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
						"you have all the answers inside you." Sometimes those
						"answers" are just 40 years of masking strategies.
						Sometimes you need someone to say, "Hey, that's an
						executive function thing, here's what actually helps."
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
			question: "\u201CDo I need an official diagnosis?\u201D",
			answer: (
				<div className="space-y-5 font-sans text-gs-body text-lg md:text-xl leading-relaxed">
					<p className="font-medium text-gs-heading">Absolutely not.</p>
					<p>
						The path to formal diagnosis is a maze of waitlists, expenses, and
						professionals who don't understand adult presentations
						(especially in women and high-maskers). Self-diagnosis is valid in
						the autistic community, and it's valid here.
					</p>
					<p>
						If you relate to the AuDHD experience, you're welcome here. Period.
					</p>
				</div>
			),
		},
		{
			question: "\u201CWhat if I\u2019m not sure I\u2019m autistic/ADHD/AuDHD?\u201D",
			answer: (
				<div className="space-y-5 font-sans text-gs-body text-lg md:text-xl leading-relaxed">
					<p>That's okay! Questioning is part of the journey.</p>
					<p>
						If you're here, something resonates. Maybe you're not
						ready to claim the label. Maybe you're in the "but
						I'm not autistic enough" phase (spoiler: that's
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
			question: "\u201CHow is your coaching different from neurotypical coaching?\u201D",
			answer: (
				<div className="space-y-5 font-sans text-gs-body text-lg md:text-xl leading-relaxed">
					<p>Where do I start?</p>
					<ul className="space-y-3">
						{[
							"I won't tell you to \"just trust the process\" when the process wasn't built for your brain",
							"I understand that sometimes you need scripts, not \"intuition\"",
							"I know that \"just do it\" isn't helpful when executive dysfunction has you stuck",
							"I get that some days, showering IS the achievement",
							"I won't shame you for your coping mechanisms (yes, even the \"weird\" ones)",
							"I understand the both/and of AuDHD, not just autism OR ADHD",
						].map((item, i) => (
							<li key={i} className="flex items-start gap-3">
								<div className="w-1.5 h-1.5 rounded-full bg-gs-ink mt-3 flex-shrink-0" />
								<span>{item}</span>
							</li>
						))}
					</ul>
					<p>
						Plus, I share my own struggles. You won't get toxic positivity
						from someone who's "figured it all out."
						You'll get real support from someone still figuring it out too.
					</p>
				</div>
			),
		},
		{
			question: "\u201CWhat happens in the free Vibe Check call?\u201D",
			answer: (
				<div className="space-y-5 font-sans text-gs-body text-lg md:text-xl leading-relaxed">
					<p>
						It's up to 40 minutes of checking if we're a good
						match—a Vibe Check. No pressure, no sales pitch.
					</p>
					<p>
						You'll share what's bringing you to coaching. I'll
						probably overshare about my own journey (occupational hazard of being
						AuDHD). We'll discuss how I work and what support might look like.
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
			question: "\u201CWhat if I need to cancel last minute?\u201D",
			answer: (
				<div className="space-y-5 font-sans text-gs-body text-lg md:text-xl leading-relaxed">
					<p>Life happens. Especially AuDHD life.</p>
					<p>
						Sometimes you wake up and the thought of human interaction makes you
						want to hide under your weighted blanket. Sometimes executive
						dysfunction wins. Sometimes you're in burnout.
					</p>
					<p>
						I get it. I've been there. We'll reschedule without judgment.
					</p>
					<p>
						Just please send me a message, even if it's very last minute.
						I struggle with waiting and uncertainty too.
					</p>
				</div>
			),
		},
		{
			question: "\u201CCan you help with workplace accommodations?\u201D",
			answer: (
				<div className="space-y-5 font-sans text-gs-body text-lg md:text-xl leading-relaxed">
					<p>Yes! This is a common focus area. We can work on:</p>
					<ul className="space-y-3">
						{[
							"Figuring out what accommodations you actually need",
							"Scripts for talking to HR or your manager",
							"Strategies for when formal accommodations aren't possible",
							"Building sustainable work habits that honor your neurotype",
						].map((item, i) => (
							<li key={i} className="flex items-start gap-3">
								<div className="w-1.5 h-1.5 rounded-full bg-gs-ink mt-3 flex-shrink-0" />
								<span>{item}</span>
							</li>
						))}
					</ul>
					<p>
						I can't provide legal advice, but I can help you advocate for yourself effectively.
					</p>
				</div>
			),
		},
		{
			question: "\u201CDo you work with family members or partners?\u201D",
			answer: (
				<div className="space-y-5 font-sans text-gs-body text-lg md:text-xl leading-relaxed">
					<p>
						I primarily work with AuDHD individuals, but I do offer limited
						sessions for partners who want to better understand and support their
						neurodivergent person.
					</p>
					<p>These sessions focus on:</p>
					<ul className="space-y-3">
						{[
							"Understanding neurodivergent communication styles",
							"Learning how to support without enabling masking",
							"Building a relationship that works for both neurotypes",
						].map((item, i) => (
							<li key={i} className="flex items-start gap-3">
								<div className="w-1.5 h-1.5 rounded-full bg-gs-ink mt-3 flex-shrink-0" />
								<span>{item}</span>
							</li>
						))}
					</ul>
				</div>
			),
		},
		{
			question: "\u201CWhat\u2019s your cancellation policy?\u201D",
			answer: (
				<div className="space-y-5 font-sans text-gs-body text-lg md:text-xl leading-relaxed">
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
			question: "\u201CWhat if I\u2019m too overwhelmed to even start?\u201D",
			answer: (
				<div className="space-y-5 font-sans text-gs-body text-lg md:text-xl leading-relaxed">
					<p>That's exactly when you need support most.</p>
					<p>
						We can start tiny. Like, ridiculously tiny. Sometimes the first win
						is just "I showed up to the call." We'll build
						from there, at whatever pace works for your current capacity.
					</p>
					<p>
						Remember: I specialize in decomplexification. I can break
						"starting" down into the less spoon-consuming possible
						steps. Because it's not about how big or small a task is,
						it's about how much it costs you.
					</p>
				</div>
			),
		},
	];


	return (
		<>
			{/* ═══ HERO ═══ */}
			<section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[-10%] right-[-10%]" size="45vw" />
				<AmbientBlob color="mist" position="bottom-[-15%] left-[-10%]" size="35vw" />

				<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
					<p className="font-hand text-gs-ink text-2xl mb-6 rotate-[-2deg]">
						we love a thorough question around here
					</p>

					<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-gs-heading mb-8 leading-[1.2] tracking-[-0.01em]">
						Questions from Fellow{" "}
						<span className="text-gs-ink">Overthinkers</span>
					</h1>

					<PillDivider className="mb-8" />

					<p className="font-sans text-xl md:text-2xl leading-relaxed text-gs-body max-w-xl mx-auto">
						Because we're neurodivergent—of course we have detailed
						questions about everything.
					</p>
				</div>
			</section>

			{/* ═══ FAQ Cards — The Big Ones ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="mist" position="top-[5%] right-[-15%]" size="30vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl font-semibold text-gs-heading mb-4 tracking-[-0.01em]">
							The Big Ones
						</h2>
						<PillDivider className="mb-6" />
						<p className="font-hand text-gs-ink text-2xl rotate-[1deg]">
							(the questions everyone asks first)
						</p>
					</div>

					<div className="space-y-10">
						{faqs.slice(0, 5).map((faq, i) => (
							<GentleCard key={i} className="max-w-4xl mx-auto">
								<h3 className="font-serif text-xl md:text-2xl font-semibold text-gs-heading mb-5 tracking-[-0.01em]">
									{faq.question}
								</h3>
								{faq.answer}
							</GentleCard>
						))}
					</div>
				</div>
			</section>

			{/* ═══ More Questions — The Practical Stuff ═══ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="gold" position="top-[-5%] left-[-10%]" size="35vw" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="font-serif text-3xl md:text-4xl font-semibold text-gs-heading mb-4 tracking-[-0.01em]">
							The Practical Stuff
						</h2>
						<PillDivider className="mb-6" />
						<p className="font-hand text-gs-ink text-2xl rotate-[-2deg]">
							equally important, just different vibes
						</p>
					</div>

					<div className="space-y-10">
						{faqs.slice(5).map((faq, i) => (
							<GentleCard key={i + 5} className="max-w-4xl mx-auto">
								<h3 className="font-serif text-xl md:text-2xl font-semibold text-gs-heading mb-5 tracking-[-0.01em]">
									{faq.question}
								</h3>
								{faq.answer}
							</GentleCard>
						))}
					</div>
				</div>
			</section>

			{/* ═══ Still Have Questions? ═══ */}
			<section className="py-28 md:py-36 relative overflow-hidden bg-gs-cream">
				<AmbientBlob color="mist" position="top-[-10%] left-[-10%]" size="40vw" />
				<AmbientBlob color="gold" position="bottom-[-10%] right-[-5%]" size="30vw" />

				<div className="max-w-2xl mx-auto px-6 text-center relative z-10">
					<h2 className="font-serif text-3xl md:text-4xl font-semibold text-gs-heading mb-4 tracking-[-0.01em]">
						Still Have Questions?
					</h2>
					<PillDivider className="mb-8" />

					<p className="font-hand text-gs-ink text-2xl rotate-[-1deg] mb-6">
						my inbox loves a good info-dump
					</p>

					<p className="font-sans text-lg md:text-xl leading-relaxed text-gs-body mb-12">
						My inbox is always open. Send me your wonderings, your concerns,
						your overthinking spirals. I'll respond with the same verbose
						enthusiasm I bring to everything.
					</p>

					<div className="flex flex-col sm:flex-row gap-5 justify-center">
						<ContactEmailLink className="group inline-flex items-center gap-3 bg-gs-ink text-white rounded-2xl px-10 py-5 font-sans font-medium text-lg md:text-xl shadow-[0_4px_12px_rgba(67,91,114,0.15)] hover:-translate-y-0.5 hover:bg-gs-ink-hover hover:shadow-[0_6px_16px_rgba(67,91,114,0.2)] transition-all duration-300 gs-press">
							Email me at hello@frandab.com
						</ContactEmailLink>
						<Link
							to="/services"
							className="group inline-flex items-center gap-3 bg-gs-surface border border-gs-mist text-gs-ink rounded-2xl px-10 py-5 font-sans font-medium text-lg md:text-xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-all duration-300"
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
