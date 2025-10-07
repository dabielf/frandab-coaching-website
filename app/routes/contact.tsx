import { useEffect, useRef } from "react";
import { Link, useFetcher } from "react-router";
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
			<H2 className="mb-6">Option 1: Send a Message</H2>
			<BodyBase className="text-text-secondary mb-6">
				Use the form below or email me directly at{" "}
				<ContactEmailLink className="text-primary hover:underline text-base" />
			</BodyBase>

			{/* Success Message */}
			{isSuccess && (
				<div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
					<div className="flex items-start space-x-3">
						<div className="flex-shrink-0">
							<svg
								className="w-5 h-5 text-green-600 mt-0.5"
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
							<BodyBase className="text-green-800">{successMessage}</BodyBase>
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
							<BodyBase className="text-red-800">
								{errorMessage}{" "}
								<span>
									Please try again or email me directly at <ContactEmailLink />
								</span>
							</BodyBase>
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
						className="block mb-2 text-sm font-medium text-text-secondary"
					>
						Name (whatever you want me to call you)
					</label>
					<input
						type="text"
						id="name"
						name="name"
						disabled={isFormDisabled}
						className={`w-full px-4 py-3 bg-surface border rounded-lg text-base transition-colors duration-200 placeholder:text-text-tertiary focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed ${
							errors?.name
								? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
								: "border-border"
						}`}
						placeholder="Your name"
					/>
					{errors?.name && (
						<p className="mt-1 text-sm text-red-600">{errors.name}</p>
					)}
				</div>

				<div>
					<label
						htmlFor="email"
						className="block mb-2 text-sm font-medium text-text-secondary"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						disabled={isFormDisabled}
						className={`w-full px-4 py-3 bg-surface border rounded-lg text-base transition-colors duration-200 placeholder:text-text-tertiary focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed ${
							errors?.email
								? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
								: "border-border"
						}`}
						placeholder="your.email@example.com"
					/>
					{errors?.email && (
						<p className="mt-1 text-sm text-red-600">{errors.email}</p>
					)}
				</div>

				<div>
					<label
						htmlFor="message"
						className="block mb-2 text-sm font-medium text-text-secondary"
					>
						Message (Can be as short as "Help. AuDHD. Drowning." I'll
						understand.)
					</label>
					<textarea
						id="message"
						name="message"
						rows={6}
						disabled={isFormDisabled}
						className={`w-full px-4 py-3 bg-surface border rounded-lg text-base transition-colors duration-200 placeholder:text-text-tertiary focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed ${
							errors?.message
								? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
								: "border-border"
						}`}
						placeholder="Tell me what's bringing you here..."
					></textarea>
					{errors?.message && (
						<p className="mt-1 text-sm text-red-600">{errors.message}</p>
					)}
				</div>

				<button
					type="submit"
					disabled={isFormDisabled}
					className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-medium transition-colors duration-200 hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
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
					<BodySmall className="text-center text-text-secondary mt-3">
						Want to send another message?{" "}
						<button
							type="button"
							onClick={() => window.location.reload()}
							className="text-primary hover:underline font-medium"
						>
							Refresh the page
						</button>
					</BodySmall>
				)}
			</fetcher.Form>
		</div>
	);
}

export default function Contact() {
	return (
		<>
			{/* Hero Section */}
			<Section size="lg" background="primary-soft">
				<Container size="wide">
					<div className="text-center">
						<H1 className="mb-6">Let's Connect (On Your Terms)</H1>
						<BodyLarge className="text-text-secondary">
							Taking the first step is hard. Let's make it easier.
						</BodyLarge>
					</div>
				</Container>
			</Section>

			{/* Main Content */}
			<Section>
				<Container>
					<div className="space-y-6 mb-12">
						<BodyBase>
							I know reaching out can feel overwhelming. The executive function
							required to write an email, the vulnerability of asking for help,
							the fear of being "too much" or "not autistic enough"—I get it.
						</BodyBase>
						<BodyBase>
							So let's keep this simple. No need for perfect prose or explaining
							your entire life story. Just reach out however feels manageable
							today.
						</BodyBase>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Option 1: Send a Message */}
						<ContactForm />

						{/* Option 2: Book a Call */}
						<div>
							<H2 className="mb-6">
								Option 2: Look Into Building Together and Book a Blueprint Call
							</H2>
							<BodyBase className="text-text-secondary mb-6">
								Skip the email anxiety and jump straight to a conversation.
							</BodyBase>

							<div className="bg-primary-soft rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
								<H4 className="mb-4">Free 30 or 90 Minute Blueprint Call</H4>
								<ul className="space-y-2 mb-6 text-text-secondary">
									<li className="flex items-start space-x-3">
										<span className="text-primary mt-1">•</span>
										<BodySmall>No pressure, no sales pitch</BodySmall>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-primary mt-1">•</span>
										<BodySmall>Camera optional, pajamas encouraged</BodySmall>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-primary mt-1">•</span>
										<BodySmall>Stimming welcome</BodySmall>
									</li>
									<li className="flex items-start space-x-3">
										<span className="text-primary mt-1">•</span>
										<BodySmall>
											Just two brains figuring out if we're a good match
										</BodySmall>
									</li>
								</ul>
								<Link
									to="/services"
									className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-medium transition-colors duration-200 hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/20"
								>
									Learn More →
								</Link>
							</div>
						</div>
					</div>
				</Container>
			</Section>

			{/* What Happens Next */}
			<Section background="alt">
				<Container>
					<H2 className="mb-12">What Happens Next?</H2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<H4 className="mb-4">If you message:</H4>
							<BodyBase className="text-text-secondary">
								I'll respond within 48 hours (unless I'm in executive
								dysfunction jail, in which case I'll respond as soon as I
								escape). We'll figure out next steps together.
							</BodyBase>
						</div>
						<div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
							<H4 className="mb-4">If you book a call:</H4>
							<BodyBase className="text-text-secondary">
								You'll get a confirmation email with our meeting link. Camera
								optional. Pajamas encouraged. Stimming welcome.
							</BodyBase>
						</div>
					</div>
				</Container>
			</Section>

			{/* Still Overthinking */}
			<Section>
				<Container>
					<H2 className="mb-8">Still Overthinking It?</H2>
					<BodyBase className="mb-6">
						Here are some conversation starters you can copy/paste:
					</BodyBase>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="bg-surface border border-border rounded-lg p-4">
							<BodySmall className="text-text-secondary font-mono">
								"Hi Francois, I just got diagnosed and I have no idea what to do
								next."
							</BodySmall>
						</div>
						<div className="bg-surface border border-border rounded-lg p-4">
							<BodySmall className="text-text-secondary font-mono">
								"I think I might be AuDHD but I'm drowning in imposter
								syndrome."
							</BodySmall>
						</div>
						<div className="bg-surface border border-border rounded-lg p-4">
							<BodySmall className="text-text-secondary font-mono">
								"I need help with [specific thing] and traditional advice isn't
								working."
							</BodySmall>
						</div>
						<div className="bg-surface border border-border rounded-lg p-4">
							<BodySmall className="text-text-secondary font-mono">
								"Your website made me cry (in a good way). When can we talk?"
							</BodySmall>
						</div>
					</div>
				</Container>
			</Section>

			{/* My Promise */}
			<Section background="primary-soft">
				<Container>
					<H2 className="mb-8">My Promise to You</H2>
					<ul className="space-y-4">
						<li className="flex items-start space-x-3">
							<span className="text-primary mt-1">•</span>
							<BodyBase>
								No judgment about how long it took you to reach out
							</BodyBase>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-primary mt-1">•</span>
							<BodyBase>No shame about what you're struggling with</BodyBase>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-primary mt-1">•</span>
							<BodyBase>
								No neurotypical "solutions" that don't actually work
							</BodyBase>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-primary mt-1">•</span>
							<BodyBase>Complete confidentiality</BodyBase>
						</li>
						<li className="flex items-start space-x-3">
							<span className="text-primary mt-1">•</span>
							<BodyBase>
								Genuine understanding from someone who's been there
							</BodyBase>
						</li>
					</ul>
				</Container>
			</Section>

			{/* Final CTA */}
			<Section>
				<Container>
					<div className="text-center">
						<BodyLarge className="text-text-secondary mb-8">
							Ready? Take a deep breath and choose your path:
						</BodyLarge>
						<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
							<SessionEmailLink className="mr-8 hover:underline">
								Send an Email →
							</SessionEmailLink>
							<Link
								to="/services"
								className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium transition-colors duration-200 hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/20"
							>
								Learn about the Re-Architect's Journey →
							</Link>
						</div>
						<BodySmall className="text-text-tertiary">
							<em>
								Remember: Asking for help isn't weakness. It's the first step
								toward building a life that actually fits your brain.
							</em>
						</BodySmall>
					</div>
				</Container>
			</Section>
		</>
	);
}
