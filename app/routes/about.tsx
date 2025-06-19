import type { Route } from "./+types/about";
import { Link } from "react-router";
import { Hero } from "../components/Hero";
import { Section, Container, H2, H3, H4, BodyBase, BodyLarge } from "~/components/ui";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Francois Dab - Late AuDHD Diagnosis & Coaching Journey" },
    { name: "description", content: "Discover Francois's journey from 40 years of unknowing masking to AuDHD diagnosis and becoming a coach who truly gets the neurodivergent experience." },
  ];
}

export default function About() {
  return (
    <>
      <Hero 
        title="From 'What's Wrong With Me?' to 'Oh, That Explains Everything'"
        subtitle="My journey through 40 years of unknowing masking to finally understanding my AuDHD brain—and how it shaped everything about who I am as a coach."
        variant="large"
      />

      {/* My Late Diagnosis Story */}
      <Section>
        <Container>
          <H2 className="mb-12">My Late Diagnosis Story</H2>
          <div className="space-y-6">
            <BodyBase>
              For 40 years, I lived with an invisible question mark hovering over my life. Why could I instinctively understand the most complex human dynamics but melt down over choosing what to wear? Why did I attract clients who seemed to vibrate at the same frequency as me—people who were "too much" and "not enough" all at once?
            </BodyBase>
            <BodyBase>
              At 40, I finally got my answer: I'm AuDHD.
            </BodyBase>
            <BodyBase>
              The diagnosis didn't change who I am. It gave me the language to understand who I'd always been. Suddenly, a lifetime of contradictions made sense:
            </BodyBase>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <BodyBase>Why I could mediate complex conflicts but couldn't handle grocery stores</BodyBase>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <BodyBase>Why my clients kept saying "you just GET it" when I'd never quite gotten myself</BodyBase>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <BodyBase>Why I'd built an entire career around making the complex simple—because my brain literally couldn't handle unnecessary complexity</BodyBase>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <BodyBase>Why I'd always felt like a translator between worlds, never quite belonging to either</BodyBase>
              </li>
            </ul>
            <BodyBase>
              Before my diagnosis, I was already a life coach. But I was coaching with one hand tied behind my back, using neurotypical frameworks that felt like wearing shoes on the wrong feet. My instincts were good—I naturally attracted neurodivergent clients and intuitively adapted my approach—but I didn't understand why traditional coaching methods felt so wrong for so many of us.
            </BodyBase>
          </div>
        </Container>
      </Section>

      {/* The Plot Twist */}
      <Section background="alt">
        <Container>
          <H2 className="mb-12">The Plot Twist That Changed Everything</H2>
          <div className="space-y-6">
            <BodyBase>
              Here's what I learned: Most coaching is built on neurotypical assumptions. "Just follow your inner wisdom!" they say. But what if your inner wisdom was shaped by 40 years of masking? "Trust the process!" they insist. But what if the process was never designed for brains like ours?
            </BodyBase>
            <BodyBase>
              This is why I walked away from pursuing ICF certification. Not because I don't value professional development, but because their approach assumes a neurotypical baseline. For those of us diagnosed late, we need more than someone who asks good questions. We need someone who understands that our "inner wisdom" might be buried under decades of compensatory strategies.
            </BodyBase>
            <BodyBase>
              Sometimes you need a guide who's walked this path. Sometimes you need someone to teach you what you never had the chance to learn. Sometimes you need validation that your struggles aren't moral failings—they're the natural result of living in a world that wasn't built for your brain.
            </BodyBase>
          </div>
        </Container>
      </Section>

      {/* What I Bring */}
      <Section>
        <Container>
          <H2 className="mb-12">What I Bring to Our Work</H2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
              <H4 className="mb-4">Lived Experience</H4>
              <BodyBase className="text-text-secondary">
                Two years post-diagnosis, I'm still learning what it means to live authentically AuDHD. I bring both the fresh perspective of recent discovery and the wisdom of four decades of unknowing adaptation.
              </BodyBase>
            </div>

            <div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
              <H4 className="mb-4">The Translator Brain</H4>
              <BodyBase className="text-text-secondary">
                As a high-masking, gifted AuDHDer with a special interest in psychology, I became fluent in both autistic and non-autistic communication styles. I can help you navigate between worlds without losing yourself in translation.
              </BodyBase>
            </div>

            <div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
              <H4 className="mb-4">Decomplexification Special Power</H4>
              <BodyBase className="text-text-secondary">
                My brain physically cannot handle unnecessary complexity. This limitation became my greatest strength—I instinctively break down overwhelming situations into their simplest, most manageable components. Often, I help problems disappear entirely by targeting their essence or revealing they weren't aligned with what truly matters. (Yes, I'm still learning to apply this to my own life. We teach what we most need to learn, right?)
              </BodyBase>
            </div>

            <div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
              <H4 className="mb-4">ACT Training</H4>
              <BodyBase className="text-text-secondary">
                My certification in Acceptance and Commitment Therapy gives me concrete tools for working with the anxiety, perfectionism, and identity challenges that come with late diagnosis.
              </BodyBase>
            </div>

            <div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
              <H4 className="mb-4">The Tech Brain</H4>
              <BodyBase className="text-text-secondary">
                As a professional software engineer with a side passion for building tools that make AuDHD life simpler, I bring a unique systems-thinking approach to coaching. I see patterns, connections, and elegant solutions where others see chaos.
              </BodyBase>
            </div>

            <div className="bg-surface rounded-xl p-6 md:p-8 border border-border transition-shadow duration-200 hover:shadow-sm">
              <H4 className="mb-4">Pre-Diagnosis Wisdom</H4>
              <BodyBase className="text-text-secondary">
                Those years of coaching before my diagnosis? They taught me that neurodivergent clients need something different. I was adapting my approach intuitively then. Now I do it intentionally.
              </BodyBase>
            </div>
          </div>
        </Container>
      </Section>

      {/* My Approach */}
      <Section background="primary-soft">
        <Container>
          <H2 className="mb-12">My Approach</H2>
          <div className="text-left space-y-6">
            <BodyLarge className="font-semibold">
              I'm not here to help you become a better neurotypical. I'm here to help you become a more sustainable version of yourself.
            </BodyLarge>
            <BodyBase>This means:</BodyBase>
            <ul className="text-left space-y-3">
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <BodyBase>Honoring both your need for structure AND your need for chaos</BodyBase>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <BodyBase>Translating between your internal experience and the external world</BodyBase>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <BodyBase>Breaking down overwhelming problems into manageable pieces</BodyBase>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <BodyBase>Validating your struggles while building practical solutions</BodyBase>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <BodyBase>Creating systems that work with your brain, not against it</BodyBase>
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* Beyond the Coaching */}
      <Section>
        <Container>
          <H2 className="mb-12">Beyond the Coaching</H2>
          <div className="space-y-6">
            <BodyBase>
              When I'm not coaching or untangling my own executive dysfunction, you'll find me deep in a rabbit hole about the interactions between autism and ADHD, building software tools for neurodivergent minds, or having marathon video calls with my partner Olivia. She's AuDHD and gifted too, does autism testing in the US, and is simply the best human I know. We can spend hours dissecting theory of mind, neurodivergence intersections, and loving every minute of our nerdy deep dives.
            </BodyBase>
            <BodyBase>
              I live in Mexico City, where the chaos somehow makes sense to my AuDHD brain, and I maintain an embarrassing number of half-finished coding projects that I'll definitely get back to someday.
            </BodyBase>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="alt">
        <Container>
          <div className="text-center">
            <H2 className="mb-6">Ready to Connect?</H2>
            <BodyLarge className="text-text-secondary mb-8">
              If you're tired of trying to fit your octagonal brain into square holes, let's talk. I can't promise to fix your executive dysfunction (still working on my own), but I can promise to see you, understand you, and help you build a life that actually fits.
            </BodyLarge>
            <Link to="/book-call" className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-medium text-lg transition-colors duration-200 hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/20">
              Book Your Free Discovery Call →
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}