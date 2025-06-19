import type { Route } from "./+types/services";
import { Link } from "react-router";
import { Section, Container, H1, H2, H3, H4, BodyBase, BodyLarge, BodySmall } from "~/components/ui";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services - AuDHD Coaching Programs | Francois Dab" },
    { name: "description", content: "1-on-1 coaching, relationship navigation, and productivity systems designed specifically for AuDHD brains. Work with your unique operating system, not against it." },
  ];
}

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-primary-soft">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <H1 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-6">
            Working Together: Three Paths to Your Authentic Life
          </H1>
          <BodyLarge className="text-lg leading-relaxed text-text-secondary">
            Because your AuDHD brain deserves coaching that actually gets how you work—not how you're "supposed" to work.
          </BodyLarge>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <H2 className="mb-8 text-center">Before We Begin: My Coaching Philosophy</H2>
          <div className="max-w-prose mx-auto space-y-6">
            <BodyBase className="text-base leading-relaxed">
              Traditional coaching assumes you already have all the answers inside you. But what if those "answers" are just forty years of masking strategies? What if your "inner wisdom" is buried under decades of being told your natural responses were wrong?
            </BodyBase>
            <BodyBase className="text-base leading-relaxed">
              This is why my approach blends coaching with mentoring and teaching. Sometimes you need someone to help you excavate your authentic self. Sometimes you need to learn skills you were never taught because nobody recognized your neurodivergence. Sometimes you just need someone to say, "Oh yeah, that's an AuDHD thing, here's what helps."
            </BodyBase>
          </div>
          
          <div className="bg-surface border border-border rounded-xl p-6 mt-8">
            <H3 className="text-lg md:text-xl font-semibold text-text-primary mb-4">All services include:</H3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-base leading-relaxed">Video sessions with camera-optional flexibility</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-base leading-relaxed">Session recordings (because AuDHD memory is... special)</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-base leading-relaxed">Between-session voice message support</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-base leading-relaxed">My personal guarantee that I'll never judge you for canceling last minute due to overwhelm</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 1-on-1 Coaching */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-5xl mx-auto px-6">
            <H2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-8">1-on-1 Coaching: Your Brain, Decomplexified</H2>
            <BodyLarge className="text-lg leading-relaxed text-text-secondary mb-8 font-semibold">For Deep, Personalized Work on Your Terms</BodyLarge>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <H3 className="text-xl md:text-2xl font-semibold text-text-primary mb-6">This is for you if:</H3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-base leading-relaxed">You're drowning in the complexity of daily life while simultaneously solving complex problems for everyone else</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-base leading-relaxed">You need strategies that work with your unique flavor of AuDHD, not generic advice</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-base leading-relaxed">You want someone who understands the chaos/order paradox from the inside</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-base leading-relaxed">You're ready to stop fighting your brain and start working with it</span>
                  </li>
                </ul>
              </div>

              <div>
                <H3 className="text-xl md:text-2xl font-semibold text-text-primary mb-6">What We'll Explore:</H3>
                <div className="space-y-4">
                  <div>
                    <H4 className="font-semibold text-primary mb-2">The Post-Diagnosis Landscape</H4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Processing the grief, relief, and "oh shit, now what?" of late diagnosis</li>
                      <li>• Reframing your past through a neurodivergent lens</li>
                      <li>• Deciding what to unmask, what to keep, and what to reimagine</li>
                    </ul>
                  </div>
                  
                  <div>
                    <H4 className="font-semibold text-primary mb-2">Executive Function Reality Check</H4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Creating systems that honor both your planning brain and your chaos brain</li>
                      <li>• Breaking down overwhelming tasks—or better yet, making them disappear by finding their essence</li>
                      <li>• Building routines that flex when you need them to</li>
                    </ul>
                  </div>
                  
                  <div>
                    <H4 className="font-semibold text-primary mb-2">The Energy Management Game</H4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Mapping your unique sensory needs and limits</li>
                      <li>• Understanding your social battery and how to recharge it</li>
                      <li>• Navigating the push-pull of needing routine AND novelty</li>
                    </ul>
                  </div>
                  
                  <div>
                    <H4 className="font-semibold text-primary mb-2">Communication & Self-Advocacy</H4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Scripts for explaining your needs without over-explaining</li>
                      <li>• Setting boundaries that don't require a PhD defense</li>
                      <li>• Translating between your internal experience and what others need to know</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-xl p-6">
              <H3 className="text-xl md:text-2xl font-semibold text-text-primary mb-6">How It Works:</H3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <H4 className="font-semibold text-primary mb-2">1. Free Discovery Call</H4>
                  <p className="body-small text-text-secondary">(45 minutes) We chat, you share what's bringing you here, I overshare about my own AuDHD journey, we see if we vibe</p>
                </div>
                <div>
                  <H4 className="font-semibold text-primary mb-2">2. Deep Dive Intake</H4>
                  <p className="body-small text-text-secondary">(90 minutes) We map out your unique brain, your specific challenges, and what "better" actually looks like for you</p>
                </div>
                <div>
                  <H4 className="font-semibold text-primary mb-2">3. Regular Sessions</H4>
                  <p className="body-small text-text-secondary">(60 minutes, weekly or biweekly) Where the magic happens: part strategy session, part validation station, part practical problem-solving</p>
                </div>
                <div>
                  <H4 className="font-semibold text-primary mb-2">4. Between Sessions</H4>
                  <p className="body-small text-text-secondary">Voice message support for when your brain gets stuck. Because sometimes you need help RIGHT NOW, not next Tuesday</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-primary-soft rounded-lg">
                <p className="text-base leading-relaxed font-semibold mb-2">Investment:</p>
                <p className="text-sm leading-relaxed">We work in 3-month or 6-month periods (or single sessions as needed). Let's discuss what works for you during our discovery call. I offer sliding scale options because financial accessibility matters.</p>
              </div>
            </div>
        </div>
      </section>

      {/* Relationship Navigation */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
            <H2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-8">Relationship Navigation: Lost in Translation No More</H2>
            <BodyLarge className="text-lg leading-relaxed text-text-secondary mb-8 font-semibold">For AuDHDers Who Want Connection Without Exhaustion</BodyLarge>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <H3 className="text-xl md:text-2xl font-semibold text-text-primary mb-6">This is for you if:</H3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-base leading-relaxed">You're tired of relationships feeling like advanced calculus</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-base leading-relaxed">You want to stop pretending to be neurotypical in your intimate relationships</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-base leading-relaxed">You need practical scripts for those "I need to tell you something about my brain" conversations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-base leading-relaxed">You're ready to find and nurture connections that actually energize you</span>
                  </li>
                </ul>
              </div>

              <div>
                <H3 className="text-xl md:text-2xl font-semibold text-text-primary mb-6">What We'll Cover:</H3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">The Communication Bridge</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Understanding the autistic vs. non-autistic communication gap</li>
                      <li>• Learning to translate without losing yourself</li>
                      <li>• Scripts for common relationship landmines</li>
                    </ul>
                  </div>
                  
                  <div>
                    <H4 className="font-semibold text-primary mb-2">Unmasking in Relationships</H4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• How to gradually show your authentic self</li>
                      <li>• Navigating the vulnerability of being seen</li>
                      <li>• Building relationships that don't require performance</li>
                    </ul>
                  </div>
                  
                  <div>
                    <H4 className="font-semibold text-primary mb-2">Boundaries That Actually Work</H4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Setting boundaries like a French person would (we're world champions at saying "no")</li>
                      <li>• Moving beyond "just say no" to boundaries that stick</li>
                      <li>• Handling rejection sensitive dysphoria in relationships</li>
                      <li>• Protecting your energy without shutting people out</li>
                    </ul>
                  </div>
                  
                  <div>
                    <H4 className="font-semibold text-primary mb-2">Finding Your People</H4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Identifying relationships that drain vs. energize</li>
                      <li>• Building a support network that gets it</li>
                      <li>• Quality over quantity: the AuDHD way</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-xl p-6">
              <H3 className="text-xl md:text-2xl font-semibold text-text-primary mb-6">Format Options:</H3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <H4 className="font-semibold text-primary mb-2">3-Month Journey</H4>
                  <p className="body-small text-text-secondary">For focused work on specific relationship challenges</p>
                </div>
                <div>
                  <H4 className="font-semibold text-primary mb-2">6-Month Deep Dive</H4>
                  <p className="body-small text-text-secondary">For those navigating complex relationship dynamics who want sustained support</p>
                </div>
                <div>
                  <H4 className="font-semibold text-primary mb-2">Single Sessions</H4>
                  <p className="body-small text-text-secondary">When you need targeted help with a specific situation</p>
                </div>
                <div>
                  <H4 className="font-semibold text-primary mb-2">Couples Sessions</H4>
                  <p className="body-small text-text-secondary">When both partners want to bridge the communication gap (yes, I work with neurotypical partners too)</p>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Productivity Decomplexified */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-5xl mx-auto px-6">
            <H2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-8">Productivity Decomplexified: Systems for Chaotic Brains</H2>
            <BodyLarge className="text-lg leading-relaxed text-text-secondary mb-8 font-semibold">Because "Just Use a Planner" Is Not Helpful Advice</BodyLarge>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <H3 className="text-xl md:text-2xl font-semibold text-text-primary mb-6">This is for you if:</H3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-base leading-relaxed">You've tried every productivity system and they all failed you</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-base leading-relaxed">You can organize everyone else's life but not your own</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-base leading-relaxed">You need systems that work with executive dysfunction, not against it</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-base leading-relaxed">You're tired of feeling like you're failing at basic adulting</span>
                  </li>
                </ul>
              </div>

              <div>
                <H3 className="text-xl md:text-2xl font-semibold text-text-primary mb-6">The Decomplexification Method:</H3>
                <div className="space-y-4">
                  <div>
                    <H4 className="font-semibold text-primary mb-2">Step 1: Brain Mapping</H4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Identifying your unique productivity patterns</li>
                      <li>• Understanding your executive function profile</li>
                      <li>• Recognizing what actually works (even if it's weird)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <H4 className="font-semibold text-primary mb-2">Step 2: System Building</H4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Creating the world's most ADHD-friendly, autism-respecting systems</li>
                      <li>• Building in flexibility for your chaos days</li>
                      <li>• Making peace with "good enough"</li>
                    </ul>
                  </div>
                  
                  <div>
                    <H4 className="font-semibold text-primary mb-2">Step 3: Implementation Without Shame</H4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Starting where you are (sometimes that's the couch, and that's okay)</li>
                      <li>• Finding the essence of what actually needs doing (spoiler: it's usually way less than you think)</li>
                      <li>• Building momentum without burning out</li>
                      <li>• Celebrating progress, not perfection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-xl p-6 mb-8">
              <H3 className="text-xl md:text-2xl font-semibold text-text-primary mb-6">What Makes This Different:</H3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm leading-relaxed">No neurotypical productivity shame</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm leading-relaxed">Systems built for inconsistent energy and focus</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm leading-relaxed">Emphasis on sustainability over optimization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm leading-relaxed">Recognition that some days, surviving is productive</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-xl p-6">
              <H3 className="text-xl md:text-2xl font-semibold text-text-primary mb-6">Working Together Options:</H3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <H4 className="font-semibold text-primary mb-2">Quick Wins</H4>
                  <BodySmall className="text-text-secondary">3 sessions to revolutionize one area of your life</BodySmall>
                </div>
                <div>
                  <H4 className="font-semibold text-primary mb-2">3-Month Transformation</H4>
                  <BodySmall className="text-text-secondary">Co-create a complete rebuild of your approach to getting things done</BodySmall>
                </div>
                <div>
                  <H4 className="font-semibold text-primary mb-2">6-Month Partnership</H4>
                  <BodySmall className="text-text-secondary">For when life is complex and you want sustained support while we tackle multiple systems</BodySmall>
                </div>
                <div>
                  <H4 className="font-semibold text-primary mb-2">Maintenance Mode</H4>
                  <BodySmall className="text-text-secondary">Ongoing single sessions for when life inevitably breaks your systems</BodySmall>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mb-6">Ready to Work With Your Brain Instead of Against It?</h2>
          <BodyLarge className="text-lg leading-relaxed text-text-secondary mb-8">
            All my services are built on one fundamental belief: Your AuDHD brain isn't broken. It just needs different strategies than the ones the world taught you.
          </BodyLarge>
          <Link to="/book-call" className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-medium text-lg transition-colors duration-200 hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/20 mb-4">
            Book Your Free Discovery Call →
          </Link>
          <BodySmall className="text-text-tertiary">
            <em>Still unsure? That's the smart part of your brain being cautious. Check out my <Link to="/faq" className="text-primary hover:underline">FAQ</Link> for answers to common concerns.</em>
          </BodySmall>
        </div>
      </section>
    </>
  );
}