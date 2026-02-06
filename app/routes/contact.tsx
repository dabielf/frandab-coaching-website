import { useEffect, useRef } from "react";
import { Link, useFetcher } from "react-router";
import { ArrowRight } from "lucide-react";
import {
	BigDoodleLeaf,
	DoodleCard,
	ScribblyUnderline,
	SparkleCluster,
	SunburstSVG,
	WavyDivider,
} from "~/components/doodles";
import { ContactEmailLink, SessionEmailLink } from "~/components/ui/EmailLink";
import { sendContactEmail } from "~/lib/email";
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

export async function action({ request, context }: Route.ActionArgs) {
	const formData = await request.formData();
	const name = String(formData.get("name") || "").trim();
	const email = String(formData.get("email") || "").trim();
	const message = String(formData.get("message") || "").trim();

	// Validation
	const errors: Record<string, string> = {};
	if (!name) errors.name = "Name is required";
	if (!email) {
		errors.email = "Email is required";
	} else if (!email.includes("@") || !email.includes(".")) {
		errors.email = "Please enter a valid email address";
	}
	if (!message) errors.message = "Message is required";

	if (Object.keys(errors).length > 0) {
		return { success: false, errors };
	}

	try {
		// Send email using Resend API
		await sendContactEmail({ name, email, message }, context.cloudflare.env);

		return {
			success: true,
			message:
				"Thank you for reaching out! I'll get back to you within 48 hours (unless I'm in executive dysfunction jail, in which case I'll respond as soon as I escape).",
		};
	} catch (error) {
		console.error("Error sending contact form:", error);
		return {
			success: false,
			error: "Something went wrong sending your message",
		};
	}
}

function ContactForm() {
	const fetcher = useFetcher();
	const formRef = useRef<HTMLFormElement>(null);
	const isSubmitting = fetcher.state === "submitting";
	const isSuccess = fetcher.data?.success;
	const errors = fetcher.data?.errors;
	const errorMessage = fetcher.data?.error;
	const successMessage = fetcher.data?.message;
	const isFormDisabled = isSubmitting || isSuccess;

	// Reset form after successful submission
	useEffect(() => {
		if (isSuccess && formRef.current) {
			formRef.current.reset();
		}
	}, [isSuccess]);

	return (
		<div>
			<h3 className="font-heading text-2xl mb-4 font-semibold text-sd-heading">
				Option 1: Send a Message
			</h3>
			<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2] mb-6">
				Use the form below or email me directly at{" "}
				<ContactEmailLink className="text-sd-emerald hover:underline text-lg" />
			</p>

			{/* Success Message */}
			{isSuccess && (
				<div className="mb-6 p-4 bg-sd-sage/15 border border-sd-sage/30 rounded-lg">
					<div className="flex items-start space-x-3">
						<div className="flex-shrink-0">
							<svg
								className="w-5 h-5 text-sd-emerald mt-0.5"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<div>
							<p className="font-body text-lg text-sd-emerald leading-[2]">{successMessage}</p>
						</div>
					</div>
				</div>
			)}

			{/* Error Message */}
			{errorMessage && (
				<div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
					<div className="flex items-start space-x-3">
						<div className="flex-shrink-0">
							<svg
								className="w-5 h-5 text-red-600 mt-0.5"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<div>
							<p className="font-body text-lg text-red-800 leading-[2]">
								{errorMessage}{" "}
								<span>
									Please try again or email me directly at <ContactEmailLink />
								</span>
							</p>
						</div>
					</div>
				</div>
			)}

			<fetcher.Form
				ref={formRef}
				method="post"
				action="/contact"
				className="space-y-6"
			>
				<div>
					<label
						htmlFor="name"
						className="block mb-2 font-body text-base font-medium text-sd-dim-text"
					>
						Name (whatever you want me to call you)
					</label>
					<input
						type="text"
						id="name"
						name="name"
						disabled={isFormDisabled}
						className={`w-full px-4 py-3 bg-sd-cream border rounded-lg font-body text-lg text-sd-text transition-colors duration-200 placeholder:text-sd-dim-text/50 focus:outline-none focus:ring-4 focus:ring-sd-emerald/20 focus:border-sd-emerald disabled:opacity-50 disabled:cursor-not-allowed ${
							errors?.name
								? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
								: "border-sd-sage/30"
						}`}
						placeholder="Your name"
					/>
					{errors?.name && (
						<p className="mt-1 text-sm font-body text-red-600">{errors.name}</p>
					)}
				</div>

				<div>
					<label
						htmlFor="email"
						className="block mb-2 font-body text-base font-medium text-sd-dim-text"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						disabled={isFormDisabled}
						className={`w-full px-4 py-3 bg-sd-cream border rounded-lg font-body text-lg text-sd-text transition-colors duration-200 placeholder:text-sd-dim-text/50 focus:outline-none focus:ring-4 focus:ring-sd-emerald/20 focus:border-sd-emerald disabled:opacity-50 disabled:cursor-not-allowed ${
							errors?.email
								? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
								: "border-sd-sage/30"
						}`}
						placeholder="your.email@example.com"
					/>
					{errors?.email && (
						<p className="mt-1 text-sm font-body text-red-600">{errors.email}</p>
					)}
				</div>

				<div>
					<label
						htmlFor="message"
						className="block mb-2 font-body text-base font-medium text-sd-dim-text"
					>
						Message (Can be as short as "Help. AuDHD. Drowning." I'll
						understand.)
					</label>
					<textarea
						id="message"
						name="message"
						rows={6}
						disabled={isFormDisabled}
						className={`w-full px-4 py-3 bg-sd-cream border rounded-lg font-body text-lg text-sd-text transition-colors duration-200 placeholder:text-sd-dim-text/50 focus:outline-none focus:ring-4 focus:ring-sd-emerald/20 focus:border-sd-emerald disabled:opacity-50 disabled:cursor-not-allowed ${
							errors?.message
								? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
								: "border-sd-sage/30"
						}`}
						placeholder="Tell me what's bringing you here..."
					></textarea>
					{errors?.message && (
						<p className="mt-1 text-sm font-body text-red-600">{errors.message}</p>
					)}
				</div>

				<button
					type="submit"
					disabled={isFormDisabled}
					className="w-full inline-flex items-center justify-center px-6 py-4 bg-sd-deep-green text-white rounded-full font-body font-bold text-xl transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-sd-emerald/20 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_8px_25px_var(--sd-deep-green)/0.2]"
				>
					{isSubmitting ? (
						<>
							<svg
								className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
							Sending...
						</>
					) : isSuccess ? (
						<>
							<svg
								className="w-4 h-4 mr-2"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								/>
							</svg>
							Message Sent!
						</>
					) : (
						"Send Message"
					)}
				</button>

				{isSuccess && (
					<p className="text-center font-body text-base text-sd-dim-text mt-3">
						Want to send another message?{" "}
						<button
							type="button"
							onClick={() => window.location.reload()}
							className="text-sd-emerald hover:underline font-medium"
						>
							Refresh the page
						</button>
					</p>
				)}
			</fetcher.Form>
		</div>
	);
}

export default function Contact() {
	return (
		<>
			{/* ═══════════════════════════════════════════
			    HERO — cream background
			    ═══════════════════════════════════════════ */}
			<section className="relative pt-18 pb-20 md:pt-28 md:pb-32 overflow-hidden bg-sd-cream">
				<SparkleCluster className="absolute top-12 right-12 w-10 h-10 twinkle-1" />
				<BigDoodleLeaf className="absolute top-8 left-4 w-16 h-24 float-b1" />

				<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
					<p className="font-handwritten text-sd-gold text-3xl mb-6" style={{ transform: "rotate(-3deg)" }}>
						no perfect prose required
					</p>

					<h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 font-semibold leading-[1.25] text-sd-heading">
						Let's Connect{" "}
						<br />
						<em className="text-sd-emerald">
							(On Your Terms)
						</em>
					</h1>

					<ScribblyUnderline colorVar="--sd-gold" className="w-48 md:w-64 mb-8" />

					<p className="font-body text-xl md:text-2xl max-w-xl mx-auto text-sd-dim-text leading-[2]">
						Taking the first step is hard. Let's make it easier.
					</p>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-linen" />

			{/* ═══════════════════════════════════════════
			    INTRO + FORM — linen background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-linen">
				<SparkleCluster className="absolute top-16 left-8 w-10 h-10 twinkle-2" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
							Reaching Out Is Hard (I Get It)
						</h2>
						<ScribblyUnderline colorVar="--sd-emerald" className="w-56 md:w-72 mb-4" />
						<p className="font-handwritten text-sd-emerald text-2xl">
							just start wherever you are
						</p>
					</div>

					<div className="max-w-3xl mx-auto space-y-5 mb-14">
						<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
							I know reaching out can feel overwhelming. The executive function
							required to write an email, the vulnerability of asking for help,
							the fear of being "too much" or "not autistic enough"---I get it.
						</p>
						<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
							So let's keep this simple. No need for perfect prose or explaining
							your entire life story. Just reach out however feels manageable
							today.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Option 1: Send a Message */}
						<ContactForm />

						{/* Option 2: Book a Call */}
						<div>
							<h3 className="font-heading text-2xl mb-4 font-semibold text-sd-heading">
								Option 2: Book a Vibe Check
							</h3>
							<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2] mb-6">
								Skip the email anxiety and jump straight to a conversation.
							</p>

							<DoodleCard>
								<h4 className="font-heading text-xl mb-4 font-semibold text-sd-heading">
									Free 40 Minute Vibe Check
								</h4>
								<ul className="space-y-3 mb-6">
									<li className="flex items-start space-x-3">
										<span className="text-sd-emerald mt-1 text-lg">*</span>
										<p className="font-body text-base text-sd-dim-text leading-[2]">
											No pressure, no sales pitch
										</p>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-sd-emerald mt-1 text-lg">*</span>
										<p className="font-body text-base text-sd-dim-text leading-[2]">
											Camera optional, pajamas encouraged
										</p>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-sd-emerald mt-1 text-lg">*</span>
										<p className="font-body text-base text-sd-dim-text leading-[2]">
											Stimming welcome
										</p>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-sd-emerald mt-1 text-lg">*</span>
										<p className="font-body text-base text-sd-dim-text leading-[2]">
											Just two brains figuring out if we're a good match
										</p>
									</li>
								</ul>
								<p className="font-handwritten text-sd-gold text-xl mb-4" style={{ transform: "rotate(-2deg)" }}>
									pajamas strongly encouraged
								</p>
								<Link
									to="/book-call"
									className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-body font-bold text-lg transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-[1.02] bg-sd-deep-green shadow-[0_8px_25px_var(--sd-deep-green)/0.2]"
								>
									Book Your Vibe Check
									<ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
								</Link>
							</DoodleCard>
						</div>
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-cream" />

			{/* ═══════════════════════════════════════════
			    WHAT HAPPENS NEXT — cream background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-cream">
				<SparkleCluster className="absolute top-12 right-16 w-10 h-10 twinkle-1" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
							What Happens Next?
						</h2>
						<ScribblyUnderline colorVar="--sd-sage" className="w-48 md:w-64 mb-4" />
						<p className="font-handwritten text-sd-emerald text-2xl">
							spoiler: nothing scary
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<DoodleCard>
							<h4 className="font-heading text-xl mb-4 font-semibold text-sd-heading">
								If you message:
							</h4>
							<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
								I'll respond within 48 hours (unless I'm in executive
								dysfunction jail, in which case I'll respond as soon as I
								escape). We'll figure out next steps together.
							</p>
						</DoodleCard>
						<DoodleCard>
							<h4 className="font-heading text-xl mb-4 font-semibold text-sd-heading">
								If you book a call:
							</h4>
							<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
								You'll get a confirmation email with our meeting link. Camera
								optional. Pajamas encouraged. Stimming welcome.
							</p>
						</DoodleCard>
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-on-dark-bg" />

			{/* ═══════════════════════════════════════════
			    STILL OVERTHINKING — dark section
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-on-dark-bg">
				<SparkleCluster className="absolute top-12 right-16 w-10 h-10 twinkle-1" />

				<div className="max-w-5xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-on-dark-heading">
							Still Overthinking It?
						</h2>
						<ScribblyUnderline colorVar="--sd-gold" className="w-48 md:w-64 mb-4" />
						<p className="font-handwritten text-sd-on-dark-dim text-2xl">
							copy-paste is a valid life strategy
						</p>
					</div>

					<p className="font-body text-lg md:text-xl text-sd-on-dark-text/80 leading-[2] text-center mb-10 max-w-3xl mx-auto">
						Here are some conversation starters you can copy/paste:
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
						<div className="doodle-hover rounded-2xl border-2 border-dashed border-sd-on-dark-dim/15 bg-sd-on-dark-text/5 p-6">
							<p className="font-body text-[17px] text-sd-on-dark-text/75 leading-[2] font-mono">
								"Hi Francois, I just got diagnosed and I have no idea what to do
								next."
							</p>
						</div>
						<div className="doodle-hover rounded-2xl border-2 border-dashed border-sd-on-dark-dim/15 bg-sd-on-dark-text/5 p-6">
							<p className="font-body text-[17px] text-sd-on-dark-text/75 leading-[2] font-mono">
								"I think I might be AuDHD but I'm drowning in imposter
								syndrome."
							</p>
						</div>
						<div className="doodle-hover rounded-2xl border-2 border-dashed border-sd-on-dark-dim/15 bg-sd-on-dark-text/5 p-6">
							<p className="font-body text-[17px] text-sd-on-dark-text/75 leading-[2] font-mono">
								"I need help with [specific thing] and traditional advice isn't
								working."
							</p>
						</div>
						<div className="doodle-hover rounded-2xl border-2 border-dashed border-sd-on-dark-dim/15 bg-sd-on-dark-text/5 p-6">
							<p className="font-body text-[17px] text-sd-on-dark-text/75 leading-[2] font-mono">
								"Your website made me cry (in a good way). When can we talk?"
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-linen" />

			{/* ═══════════════════════════════════════════
			    MY PROMISE — linen background
			    ═══════════════════════════════════════════ */}
			<section className="py-20 md:py-28 relative overflow-hidden bg-sd-linen">
				<SparkleCluster className="absolute top-10 left-12 w-10 h-10 twinkle-1" />

				<div className="max-w-3xl mx-auto px-6 relative z-10">
					<div className="text-center mb-14">
						<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
							My Promise to You
						</h2>
						<ScribblyUnderline colorVar="--sd-gold" className="w-48 md:w-64 mb-4" />
						<p className="font-handwritten text-sd-gold text-2xl" style={{ transform: "rotate(-1deg)" }}>
							pinky promise
						</p>
					</div>

					<DoodleCard className="max-w-2xl mx-auto">
						<ul className="space-y-5">
							<li className="flex items-start space-x-3">
								<span className="text-sd-emerald mt-1 text-lg">*</span>
								<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
									No judgment about how long it took you to reach out
								</p>
							</li>
							<li className="flex items-start space-x-3">
								<span className="text-sd-emerald mt-1 text-lg">*</span>
								<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
									No shame about what you're struggling with
								</p>
							</li>
							<li className="flex items-start space-x-3">
								<span className="text-sd-emerald mt-1 text-lg">*</span>
								<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
									No neurotypical "solutions" that don't actually work
								</p>
							</li>
							<li className="flex items-start space-x-3">
								<span className="text-sd-emerald mt-1 text-lg">*</span>
								<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
									Complete confidentiality
								</p>
							</li>
							<li className="flex items-start space-x-3">
								<span className="text-sd-emerald mt-1 text-lg">*</span>
								<p className="font-body text-lg md:text-xl text-sd-dim-text leading-[2]">
									Genuine understanding from someone who's been there
								</p>
							</li>
						</ul>
					</DoodleCard>
				</div>
			</section>

			{/* ═══ Divider ═══ */}
			<WavyDivider bgClass="bg-sd-cream" />

			{/* ═══════════════════════════════════════════
			    FINAL CTA — cream background
			    ═══════════════════════════════════════════ */}
			<section className="py-24 md:py-32 relative overflow-hidden bg-sd-cream">
				<SparkleCluster className="absolute top-12 right-16 w-10 h-10 twinkle-2" />
				<SunburstSVG className="absolute bottom-12 right-[8%] w-16 h-16 spin-lazy" />

				<div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
					<h2 className="font-heading text-3xl md:text-4xl mb-4 font-normal text-sd-heading">
						Ready? Take a Deep Breath.
					</h2>
					<ScribblyUnderline colorVar="--sd-gold" className="w-56 md:w-72 mb-6" />

					<p className="font-body text-lg md:text-xl mb-4 text-sd-dim-text leading-[2]">
						Choose your path:
					</p>

					<p className="font-handwritten text-sd-emerald text-2xl mb-10" style={{ transform: "rotate(-1deg)" }}>
						you've got this
					</p>

					<div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
						<SessionEmailLink className="group inline-flex items-center gap-2 font-body font-bold text-lg hover:gap-3 transition-all text-sd-emerald">
							Send an Email
							<ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
						</SessionEmailLink>
						<Link
							to="/services"
							className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-body font-bold text-xl transition-transform duration-200 ease-out hover:-translate-y-2 hover:scale-105 bg-sd-deep-green shadow-[0_12px_35px_var(--sd-deep-green)/0.3]"
						>
							Learn about the Re-Architect's Journey
							<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
						</Link>
					</div>

					<p className="font-body text-base text-sd-dim-text/70">
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
