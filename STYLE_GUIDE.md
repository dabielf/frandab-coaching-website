# Sunshine & Doodles — Complete Style Guide

> A comprehensive design system and philosophical guide for Francois Dab's AuDHD coaching website.
> Written for an agent or developer who will refactor / extend the full website while preserving the exact look, feel, and spirit of the original design.

---

## Table of Contents

1. [Design Philosophy & Spirit](#1-design-philosophy--spirit)
2. [Target Audience](#2-target-audience)
3. [The Three Values (Design Pillars)](#3-the-three-values-design-pillars)
4. [Color Palette](#4-color-palette)
5. [Typography System](#5-typography-system)
6. [Readability Rules (Non-Negotiable)](#6-readability-rules-non-negotiable)
7. [Component Library](#7-component-library)
8. [CSS Animation System](#8-css-animation-system)
9. [Hover & Interaction Patterns](#9-hover--interaction-patterns)
10. [Layout & Section Structure](#10-layout--section-structure)
11. [Decorative Element Strategy](#11-decorative-element-strategy)
12. [Handwritten Annotations (Caveat)](#12-handwritten-annotations-caveat)
13. [Emoji Usage](#13-emoji-usage)
14. [Icon System](#14-icon-system)
15. [Spacing & Rhythm](#15-spacing--rhythm)
16. [Section Dividers](#16-section-dividers)
17. [Buttons & CTAs](#17-buttons--ctas)
18. [Dark Section Treatment](#18-dark-section-treatment)
19. [Navigation](#19-navigation)
20. [Footer](#20-footer)
21. [Responsive Behavior](#21-responsive-behavior)
22. [Tech Stack](#22-tech-stack)
23. [Common Pitfalls to Avoid](#23-common-pitfalls-to-avoid)
24. [The Vibe Check](#24-the-vibe-check)

---

## 1. Design Philosophy & Spirit

### The Thinking Behind It

This design is called **"Sunshine & Doodles"** and it evolved through multiple iterations to find the sweet spot between **warmth and groundedness** without sacrificing personality. The core insight is:

> **Warm and grounded.** When designing for AuDHD adults who experience sensory sensitivities and visual overwhelm, the design should feel personal and hand-crafted without creating visual instability. Calm abundance reads as authentic. Visual chaos reads as overwhelming.

The vibe is **"a thoughtful friend who decorated their space with care."** Not a corporate wellness site. Not a generic SaaS landing page. It's personal, warm, hand-crafted, and gently playful — inviting without being overstimulating.

### The Train of Thought

1. **Start from botanical warmth** — earth tones, greens, golds, cream backgrounds. Nature is calming without being sterile.
2. **Layer in hand-drawn touches** — doodle borders on cards, scribbly underlines under headings, a few scattered sparkles and leaves. Enough to feel hand-crafted, not so much it overwhelms. Quality over quantity.
3. **Animate gently but sparingly** — things float, twinkle, and slowly spin. The page feels *alive* without being distracting. Animations are slow and easing-based (ease-in-out), never jarring. Use smooth `ease-out` for hover transitions.
4. **Keep cards grounded** — cards sit straight and stable. The hand-drawn dashed doodle borders already communicate "this isn't corporate" without needing rotation. Visual stability is calming for a sensory-sensitive audience.
5. **Write like you talk** — handwritten annotations in Caveat font act as margin notes, asides, and gentle commentary. They break the fourth wall between the page and the reader. They're conversational, lowercase, and often include emoji.
6. **Make text BIG** — the target audience has executive dysfunction. Reading small text is a barrier. Body text starts at 18px minimum and goes to 20px+. Line height is generous (2.0). Paragraphs have breathing room between them.

### The Emotional Goal

When someone lands on this page, they should feel:
- **Seen** — "This person understands my brain"
- **Safe** — "I'm not going to be judged here"
- **Curious** — "I want to know more"
- **Delighted** — "This is... fun? A website that's actually fun?"

The design creates safety through warmth and playfulness. It's the opposite of the cold, clinical websites most coaching sites use. It says: "I'm a real person who made this with care, and I'm a little quirky too."

---

## 2. Target Audience

- **Late-diagnosed AuDHD adults**, typically ages 30-50
- People who've spent decades masking and compensating
- Likely experiencing executive dysfunction, decision fatigue, and overwhelm
- Often highly capable professionally but struggling with "simple" daily tasks
- Hungry for someone who "gets it" without explanation
- Skeptical of generic self-help and neurotypical productivity advice

### Design Implications

| Audience trait | Design response |
|---|---|
| Executive dysfunction | Large text, generous spacing, chunked content, visual hierarchy |
| Decision fatigue | Clear CTAs, limited choices, obvious next steps |
| Pattern recognition (autism) | Consistent section structure, predictable rhythms |
| Need for stimulation (ADHD) | Subtle animations, hand-drawn touches, visual variety — without overwhelming |
| Masking exhaustion | Warm, authentic tone — nothing corporate or performative |
| Skepticism of advice | Testimonials, self-deprecating humor, "I've been there" energy |

---

## 3. The Three Values (Design Pillars)

Every design choice should trace back to one of these three values:

### Kindness
- **In design:** Soft colors, generous spacing, gentle animations. Nothing aggressive or overwhelming.
- **In copy:** "No judgment" language. Normalizing struggle. "You're not broken."
- **In interaction:** Hover effects that feel inviting, not demanding. No pressure tactics.

### Curiosity
- **In design:** Visual variety — no two sections look identical. Decorative elements that reward attention.
- **In copy:** "What if?" framing. Exploration over prescription. Questions, not commands.
- **In interaction:** Subtle animations that draw the eye. Arrows pointing to things. "Start here!" notes.

### Playfulness
- **In design:** Hand-drawn doodle borders, scribbly underlines, a few well-placed sparkles and leaves. Enough to feel personal, not overwhelming.
- **In copy:** Lowercase handwritten asides. Emoji. Self-aware humor. "(Still working on this myself.)"
- **In interaction:** Smooth hover effects with gentle lift. Cards that float up when hovered. Subtle ambient animations.

---

## 4. Color Palette

```
deepGreen:  #1B4332  — Primary brand color. Used for headings, dark sections, CTAs.
emerald:    #2D6A4F  — Secondary green. Used for subheadings, links, accents.
sage:       #95B8A0  — Soft green. Decorative borders, icon backgrounds, underlines.
cream:      #FDFAF5  — Primary background. Warm white.
linen:      #F5F0E8  — Alternate background. Slightly warmer/tan.
gold:       #C9A84C  — Accent color. Sparkles, underlines, star decorations, handwritten text.
warmBrown:  #6B4D3A  — Earthy accent. Used sparingly.
text:       #3A3A3A  — Primary body text. Soft black, never pure black.
dimText:    #6B6B6B  — Secondary text. Descriptions, body paragraphs.
```

### Color Usage Rules

- **NEVER use pure black (#000000)** for text. Always `#3A3A3A` or `#6B6B6B`.
- **NEVER use pure white (#FFFFFF)** for backgrounds. Always `cream` (#FDFAF5) or `linen` (#F5F0E8).
- **Backgrounds alternate:** cream → linen → cream → linen → deepGreen (one dark section) → cream → linen → cream.
- **Gold is the sparkle color.** It appears on decorative elements (stars, sparkles, sunbursts, scribbly underlines) and on Caveat handwritten text.
- **Emerald is the link/action color** on light backgrounds. Gold takes this role on dark backgrounds.
- **Opacity is used liberally** on decorative elements: `opacity: 0.3-0.5` for SVG decorations. They should feel like watermarks, not focal points.
- When using colors with transparency, use hex-alpha notation: `${color}20` for very transparent, `${color}70` for semi-transparent.

### Dark Section Palette

When a section has `backgroundColor: deepGreen`:
- Headings → `linen` (#F5F0E8)
- Body text → `${linen}bb` (linen with transparency)
- Subtitles → `sage` (#95B8A0)
- Accent color → `gold` (#C9A84C)
- Card backgrounds → `${cream}10` (nearly transparent cream)
- Borders → `${sage}25` (very subtle dashed)
- Icons → `gold` fill, `${sage}20` background

---

## 5. Typography System

### Font Stack

```css
--font-heading:    'Playfair Display', serif     /* Headings, section titles, testimonial quotes */
--font-body:       'DM Sans', sans-serif          /* Body text, descriptions, navigation */
--font-handwritten: 'Caveat', cursive             /* Annotations, asides, margin notes */
```

Load from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
```

### Typography Scale

| Element | Font | Size | Weight | Line-height | Color |
|---|---|---|---|---|---|
| Page hero headline (H1) | Playfair Display | `text-4xl md:text-5xl lg:text-6xl` (36→48→60px) | 600 | tight (1.25) | deepGreen or emerald (italic) |
| Section heading (H2) | Playfair Display | `text-3xl md:text-4xl` (30→36px) | 400 (regular) | default | deepGreen |
| Card heading (H3) | Playfair Display | `text-2xl` (24px) | 600 | default | deepGreen |
| Tagline (uppercase) | DM Sans | `text-sm` (14px) | 500 | default, tracking `0.35em` | emerald |
| Hero subtitle | DM Sans | `text-xl md:text-2xl` (20→24px) | 400 | 2.0 | dimText |
| Body/paragraph text | DM Sans | `text-lg md:text-xl` (18→20px) | 400 | 2.0 | dimText |
| Pain point text | DM Sans | `text-lg md:text-xl` (18→20px) | 400 | 2.0 | dimText |
| Value descriptions | DM Sans | `text-[17px] md:text-lg` (17→18px) | 400 | 2.0 | dimText |
| Service subtitles | DM Sans | `text-base` (16px) | 600 | relaxed (1.625) | sage (dark bg) |
| Service descriptions | DM Sans | `text-[17px]` (17px) | 400 | 2.0 | linen with opacity (dark bg) |
| Testimonial quotes | Playfair Display | `text-lg md:text-xl` (18→20px) | 400, italic | 2.0 | text |
| Handwritten accents | Caveat | 1.3rem – 2.0rem (varies) | 400 | default | gold, emerald, or emerald with opacity |
| Footer text | Caveat | 1.3rem | 400 | default | dimText with opacity |
| Nav brand name | Caveat | 1.4rem | 400 | default | deepGreen |
| CTA button text | DM Sans | `text-xl` (20px) | 700 | default | white |

### Key Typography Decisions

- **Playfair Display** is used for anything that needs to feel *important* and *warm* — main headings, emotional statements, testimonial quotes. It often appears in italic for the second line of a two-line heading.
- **DM Sans** is the workhorse. All body text, descriptions, navigation. Clean and readable at large sizes.
- **Caveat** is the secret weapon. It appears as margin notes, playful asides, and conversational interjections. It's ALWAYS lowercase (even if the sentence would normally be capitalized). It often has a slight rotation (`transform: rotate(±1-5deg)`).

---

## 6. Readability Rules (Non-Negotiable)

These were hard-won through user feedback. Do not compromise on them.

| Rule | Minimum | Preferred |
|---|---|---|
| Body/paragraph text | 18px | 20px |
| Pain point text | 18px | 20px |
| Value descriptions | 17px | 18px |
| Service subtitles | 16px | 16px |
| Service descriptions | 17px | 17px |
| Testimonial quotes | 18px | 20px |
| Line-height for body text | 1.8 | **2.0** |
| Caveat handwritten accents | 1.3rem | 1.5-1.7rem |
| Paragraph spacing | `space-y-5` (20px) | `space-y-6` (24px) |
| Section padding | `py-20` (80px) | `py-20 md:py-28` (80→112px) |
| Max content width | 768px (text) | 1024px (cards grid) |

### Why These Matter

The target audience experiences executive dysfunction. Small text creates a cognitive barrier — not because they can't see it, but because the effort of reading dense text triggers avoidance. Large, well-spaced text with clear visual hierarchy reduces the "activation energy" needed to engage with the content.

---

## 7. Component Library

### 7.1 Sparkles

A cluster of one 4-point star and four tiny dots. The "confetti" of the design system.

```
SVG viewBox: 0 0 60 60
- Center: 4-point star path, fill: gold, opacity: 0.5
- Corners: 4 circles (r: 1.5-2), fill: gold, opacity: 0.3-0.4
```

**When to use:** Scattered in section backgrounds (2-3 per section), before headings, inside cards for emphasis. Apply twinkle animation classes.

**Sizes:** `w-6 h-6` (tiny, inline) → `w-10 h-10` (small) → `w-14 h-14` (standard section decoration)

### 7.2 Sunburst

A circle with 12 radiating lines (alternating long/short).

```
SVG viewBox: 0 0 80 80
- Center circle: r=12, fill: gold+20 (transparent), stroke: gold, strokeWidth: 2, opacity: 0.4
- 12 lines: alternating length 32/24 from center, stroke: gold, strokeWidth: 2, opacity: 0.35
```

**When to use:** 1-2 per page maximum. Apply `spin-lazy` animation (25s full rotation). Positioned at section edges. Conveys warmth and energy.

**Sizes:** `w-16 h-16` → `w-20 h-20`

### 7.3 DoodleCard

The primary card component. A cream-colored box with a wobbly dashed SVG border overlay.

```
Structure:
- Outer div: relative, doodle-hover class
- SVG overlay: absolute inset, dashed rect (strokeDasharray: "8 4"), sage stroke, opacity 0.35
- Inner div: p-8 md:p-10, rounded-2xl, backgroundColor: cream
```

**When to use:** Pain point cards, value cards, testimonial cards, the "you're not broken" callout. Any content that needs to feel like a hand-drawn frame.

**Rotation:** Cards sit straight (no rotation). The hand-drawn dashed SVG border already provides the "not-corporate" personality without the visual instability of tilted cards. This is intentional: a sensory-sensitive audience finds tilted cards unbalancing rather than charming.

**Hover behavior:** On hover, the card lifts gently (`translateY(-4px)`) and gains a soft shadow. The transition uses smooth `ease-out` timing — satisfying without being bouncy or jarring.

### 7.4 ScribblyUnderline

A wavy hand-drawn line used under headings.

```
SVG viewBox: 0 0 200 12, height: h-3
- Wavy path with S-curves, stroke: configurable color, strokeWidth: 3, opacity: 0.5
- Centered: mx-auto
```

**When to use:** Under every section heading (H2). Color matches the section's accent:
- Light sections: gold or emerald or sage underline
- Dark sections: gold underline

**Width classes:** `w-36` → `w-48` → `w-56 md:w-72` → `w-64 md:w-80` (varies by heading length)

### 7.5 DoodleArrow

A curved hand-drawn arrow that points at things.

```
SVG viewBox: 0 0 60 40
- Curved path + arrowhead
- stroke: emerald, strokeWidth: 2.5, opacity: 0.4
- Supports `flip` prop (scaleX(-1)) for pointing left
```

**When to use:** Used sparingly — only where a clear visual pointer genuinely aids navigation (e.g., pointing at a primary CTA). Always paired with a Caveat text label. Apply `wiggle` animation. Usually `hidden lg:block` (desktop only). Most sections don't need arrows — the content hierarchy should guide the eye naturally.

### 7.6 BigDoodleLeaf

A large hand-drawn botanical leaf with center vein and two side veins.

```
SVG viewBox: 0 0 80 110
- Leaf outline: fill sage+18 (very transparent), stroke: emerald, strokeWidth: 2.5
- Center vein + 2 branching veins at lower opacity
```

**When to use:** 1-2 per page as background decoration. Positioned at section edges (`absolute`, partially off-screen). Apply float-bounce animation. Can be flipped with `scaleX(-1)`.

**Sizes:** `w-14 h-20` (small) → `w-20 h-28` (medium) → `w-24 h-36` (large)

### 7.7 BigDoodleStar

A large 5-point star outline.

```
SVG viewBox: 0 0 70 70
- Star path: fill gold+18, stroke: gold, strokeWidth: 2.5, opacity: 0.5
```

**When to use:** Background decoration, 1-2 per page. Apply twinkle animation.

**Sizes:** `w-12 h-12` → `w-16 h-16`

---

## 8. CSS Animation System

All animations are defined in a `<style>` block at the top of the component JSX. They are **CSS-only** (no JavaScript animation libraries needed).

### Keyframes

```css
/* Sparkle/star twinkling — fade and slight scale+rotate */
@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
  50%      { opacity: 0.8; transform: scale(1.2) rotate(15deg); }
}

/* Floating bounce — gentle up-down with configurable rotation via CSS var */
@keyframes float-bounce {
  0%, 100% { transform: translateY(0) rotate(var(--r, 0deg)); }
  30%      { transform: translateY(-14px) rotate(var(--r, 0deg)); }
  60%      { transform: translateY(-6px) rotate(var(--r, 0deg)); }
}

/* Vigorous wiggle — playful rotation oscillation */
@keyframes wiggle-lots {
  0%, 100% { transform: rotate(-5deg); }
  25%      { transform: rotate(5deg); }
  50%      { transform: rotate(-3deg); }
  75%      { transform: rotate(4deg); }
}

/* Slow lazy spin — full 360 rotation over 25 seconds */
@keyframes spin-lazy {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Line drawing reveal (available for future use) */
@keyframes draw-in {
  0%   { stroke-dashoffset: 200; }
  100% { stroke-dashoffset: 0; }
}
```

### Animation Classes

```css
/* Twinkle variants — staggered delays for natural feel */
.twinkle-1 { animation: twinkle 3s ease-in-out infinite; }
.twinkle-2 { animation: twinkle 3.5s ease-in-out infinite 0.5s; }
.twinkle-3 { animation: twinkle 4s ease-in-out infinite 1s; }

/* Float-bounce variants — different speeds/rotations via --r CSS variable */
.float-b1 { animation: float-bounce 4s ease-in-out infinite; --r: 8deg; }
.float-b2 { animation: float-bounce 4.5s ease-in-out infinite 0.4s; --r: -5deg; }
.float-b3 { animation: float-bounce 5s ease-in-out infinite 0.8s; --r: 12deg; }

/* Single wiggle and spin classes */
.wiggle    { animation: wiggle-lots 3s ease-in-out infinite; }
.spin-lazy { animation: spin-lazy 25s linear infinite; }
```

### Animation Design Principles

1. **Always `ease-in-out`** — except `spin-lazy` which is `linear` for continuous rotation.
2. **Always `infinite`** — these are ambient animations, not one-shots.
3. **Stagger delays** — when multiple elements use the same animation, give them different duration/delay combos (0.3-1s offsets). This prevents the "synchronized swimming" effect and creates a more natural, organic feel.
4. **Slow is better** — 3-5 second cycles for twinkle/float, 25s for spin. Fast animation triggers ADHD distraction; slow animation creates ambiance.
5. **Use CSS variables for parameterization** — `float-bounce` uses `--r` to set rotation angle, allowing variants without duplicating keyframes.

---

## 9. Hover & Interaction Patterns

### The Doodle Hover Effect

This is the signature interaction of the design. Applied to all DoodleCards and service cards.

```css
.doodle-hover {
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}
.doodle-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(27, 67, 50, 0.08);
}
```

**Smooth `ease-out` is the right choice here.** The transition should feel gentle and natural — a calm lift, not a bouncy overshoot. Bouncy cubic-bezier curves with overshoot values (like `1.56`) create micro-jitter that can be visually unsettling for a sensory-sensitive audience. The `ease-out` timing creates a satisfying, predictable hover that feels warm without being jarring.

**Cards stay grounded** — since cards don't have rotation, the hover simply lifts them up. The subtle shadow increase creates depth without drama.

### Link Hover Effects

```
- Text links: color shift + gap increase (hover:gap-3) + arrow translateX
- Nav link: opacity 0.6 → 1.0
- CTA buttons: translateY(-2px) + scale(1.05) + existing box-shadow
```

### Button Hover

Primary CTA buttons use:
```
hover:-translate-y-2 hover:scale-105
```
Combined with a deepGreen box-shadow (`0 12px 35px ${deepGreen}30`).

---

## 10. Layout & Section Structure

### Page Flow

The page follows a deliberate emotional arc:

```
1. HERO          — "I see you" (emotional hook, aspiration)
2. PAIN POINTS   — "I understand you" (validation, recognition)
3. VALUES        — "Here's how I work" (trust, safety)
4. ABOUT         — "Here's who I am" (personal connection)
5. SERVICES      — "Here's what I offer" (practical, options)
6. TESTIMONIALS  — "Others trust me too" (social proof)
7. FINAL CTA     — "Ready?" (invitation, not pressure)
8. FOOTER        — (warm goodbye)
```

### Section Backgrounds (Alternating Pattern)

```
Hero        → cream (#FDFAF5)
Pain Points → linen (#F5F0E8)
Values      → cream (#FDFAF5)
About       → linen (#F5F0E8)
Services    → deepGreen (#1B4332)  ← ONE dark section for contrast
Testimonials→ cream (#FDFAF5)
Final CTA   → linen (#F5F0E8)
Footer      → cream (#FDFAF5)
```

The alternation creates visual rhythm. The single deepGreen section (Services) breaks the pattern intentionally — it marks the "what I actually do" section as distinct and important.

### Section Anatomy

Every section follows this pattern:

```
<section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: ... }}>
  {/* Background decorations — 1-2 absolute-positioned SVG elements */}
  <Sparkles className="absolute top-... right-... twinkle-N" />

  <div className="max-w-Xyl mx-auto px-6 relative z-10">
    {/* Section heading */}
    <h2>...</h2>
    <ScribblyUnderline />
    <p style={{ fontFamily: Caveat }}>handwritten aside</p>

    {/* Section content */}
    ...
  </div>
</section>

{/* Wavy line divider between sections */}
<div className="flex justify-center py-4" style={{ backgroundColor: nextSectionBg }}>
  <svg viewBox="0 0 400 20" className="w-80 h-5">...</svg>
</div>
```

### Content Width Constraints

| Content type | Max width | Tailwind class |
|---|---|---|
| Text-heavy content (hero, about, CTA, testimonials) | 768px | `max-w-3xl` |
| Mixed content (about with photo) | 896px | `max-w-4xl` |
| Card grids (pain points, values, services) | 1024px | `max-w-5xl` |
| Hero heading text | 768px | `max-w-3xl` |
| Hero subtitle | 576px | `max-w-xl` |
| Final CTA | 672px | `max-w-2xl` |

---

## 11. Decorative Element Strategy

### Density Rules

This is the "Sunshine & Doodles" design. Decorative density is **moderate and intentional** — enough to feel personal and hand-crafted, sparse enough to stay calm. The thinking: a few well-placed doodles create warmth; too many create visual noise that overwhelms a sensory-sensitive audience.

**Per section (light background):**
- 1-2 decorative elements total (mix of Sparkle clusters, BigDoodleLeaf, or Sunburst)
- Keep decorations asymmetric and at section edges

**Per section (dark background):**
- 1 Sparkle cluster (keep it clean on dark)

**Hero section gets slightly more density (but still restrained):**
- 1 BigDoodleLeaf
- 2 Sparkle clusters
- That's it — let the content breathe

### Placement Rules

1. **Decorations go at the EDGES** — absolute positioned at top/bottom + left/right of sections
2. **Never obscure content** — decorations have low opacity (0.3-0.5) and sit behind `z-10` content
3. **Balance asymmetrically** — if there's a leaf top-right, put sparkles bottom-left. Don't mirror.
4. **Use `overflow-hidden`** on sections where decorations bleed off the edge. This creates the feeling that the page extends beyond the viewport.
5. **Responsive hiding** — DoodleArrows and their labels are `hidden lg:block` (desktop only). All other decorations are visible at all sizes.

---

## 12. Handwritten Annotations (Caveat)

This is the single most important design element for establishing the "playful" personality. These are the margin notes that break the fourth wall.

### Usage Pattern

Every section gets exactly ONE handwritten annotation after the heading. It's conversational, lowercase, and slightly rotated.

```jsx
<p style={{
  fontFamily: "'Caveat', cursive",
  color: b.emerald,          // or b.gold, or `${b.emerald}70`
  fontSize: "1.6rem",        // typically 1.3rem–1.7rem
  transform: "rotate(-1deg)" // slight tilt, varies ±1-5deg
}}>
  pinky promise 🤙
</p>
```

### Catalogue of Annotation Styles

| Location | Text | Color | Size | Rotation |
|---|---|---|---|---|
| Hero welcome | "✨ oh hello there! ✨" | gold | 2rem | -3deg |
| Hero CTA label | "start here!" | emerald+70 | 1.3rem | 5deg |
| Pain points heading | "what if none of these are flaws? 🌟" | emerald | 1.7rem | 0 |
| Pain points callout | "(yes, YOU. the one reading this right now) ✨" | gold | 1.5rem | 2deg |
| Values heading | "pinky promise 🤙" | gold | 1.6rem | -1deg |
| Value card: Kindness | "you deserve gentleness" | emerald | 1.5rem | 0 |
| Value card: Curiosity | "what if we explored that?" | emerald | 1.5rem | 0 |
| Value card: Playfulness | "growth can be fun, actually" | emerald | 1.5rem | 0 |
| About photo label | "that's me!" | emerald+70 | 1.3rem | 5deg |
| Services heading | "pick your adventure! 🗺️" | sage | 1.6rem | 0 |
| Testimonials heading | "in their own words 💛" | emerald | 1.7rem | 0 |
| Final CTA | "with kindness, curiosity, and a little bit of play ✨🌿" | emerald | 1.7rem | -1deg |
| Footer | "Built with kindness, curiosity & playfulness..." | dimText+90 | 1.3rem | 0 |

### Tone Rules for Annotations

- **Always lowercase** — even at the start of a sentence
- **Conversational** — write like you're texting a friend
- **Brief** — 3-8 words maximum
- **Include 1-2 emoji** when appropriate (see Emoji section)
- **Never sarcastic or ironic** — always genuinely warm
- **The author is speaking directly to the reader** — "you," "we," "that's me!"

---

## 13. Emoji Usage

Emoji are used sparingly but intentionally. They appear ONLY in Caveat handwritten text, never in body copy or headings.

### Approved Emoji

| Emoji | Meaning | Used in |
|---|---|---|
| ✨ | Magic, sparkle, delight | Hero, pain points callout, final CTA |
| 🌟 | Emphasis, wonder | Pain points heading |
| 💚 | Kindness value | Value card doodle |
| 🔍 | Curiosity value | Value card doodle |
| 🎨 | Playfulness value | Value card doodle |
| 🤙 | Casual, "promise" | Values heading |
| 🗺️ | Adventure, exploration | Services heading |
| 💛 | Warmth, heart | Testimonials heading |
| 🌿 | Nature, growth | Final CTA |

### Rules

- **Max 2 emoji per annotation** — more than that feels like spam
- **Emoji are decorative, not functional** — they add personality, they don't replace words
- **Value card doodles** (💚🔍🎨) are larger, displayed as standalone with `float-b1` animation and staggered delays

---

## 14. Icon System

All icons come from **lucide-react**. Chosen for their clean, rounded, friendly aesthetic.

### Icons Used

| Icon | Context | Size |
|---|---|---|
| `Puzzle` | Pain point: solving others' problems | w-7 h-7 |
| `Zap` | Pain point: organized + chaotic | w-7 h-7 |
| `Brain` | Pain point: complex systems vs. dinner | w-7 h-7 |
| `Battery` | Pain point: appearing together | w-7 h-7 |
| `Heart` | Pain point: craving connection | w-7 h-7 |
| `Timer` | Pain point: hyperfocus vs. bills | w-7 h-7 |
| `Lightbulb` | Service: 1-on-1 coaching | w-7 h-7 |
| `MessageCircle` | Service: relationships | w-7 h-7 |
| `Calendar` | Service: productivity | w-7 h-7 |
| `ArrowRight` | CTAs, navigation, links | w-5 h-5 or w-6 h-6 |
| `Sprout` | Nav brand, footer | w-5 h-5 or w-6 h-6 |

### Icon Container Style

```jsx
<div
  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
  style={{ backgroundColor: `${sage}25`, color: emerald }}
>
  <Icon className="w-7 h-7" />
</div>
```

On dark backgrounds, swap: `backgroundColor: ${sage}20`, `color: gold`.

---

## 15. Spacing & Rhythm

### Vertical Rhythm

```
Section padding:        py-20 md:py-28   (80px → 112px)
Hero section:           min-h-screen + pt-16 (full viewport)
Final CTA section:      py-24 md:py-32   (96px → 128px, slightly more)
Between heading + content: mb-14          (56px)
Between cards in grid:  gap-8            (32px) for 2-col, gap-10 (40px) for 3-col
Paragraph spacing:      space-y-5 or space-y-6  (20-24px)
Card internal padding:  p-8 md:p-10     (32px → 40px)
```

### Horizontal Rhythm

```
Page padding:           px-6             (24px each side)
Card grid gap:          gap-8 or gap-10  (32-40px)
Icon-to-text gap:       gap-5            (20px)
Inline button padding:  px-10 py-5       (40px × 20px)
```

### Content "Breathing Room"

The spacing is deliberately generous. When in doubt, add more space, not less. The target audience benefits from visual breathing room — it reduces cognitive load and makes scanning easier.

---

## 16. Section Dividers

Between every section, there's a hand-drawn wavy line divider:

```jsx
<div className="flex justify-center py-4" style={{ backgroundColor: nextSectionBg }}>
  <svg viewBox="0 0 400 20" className="w-80 h-5" fill="none">
    <path
      d="M0 10 C50 5 100 15 150 10 C200 5 250 15 300 10 C350 5 380 12 400 10"
      stroke={color}    // sage, gold, or emerald — varies
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.3"
    />
    {/* Optional: center decoration (circle or star) */}
    <circle cx="200" cy="10" r="4" fill={gold} opacity="0.4" />
  </svg>
</div>
```

The wave path is a sine-like curve using cubic bezier control points. The divider's background color matches the **next** section's background. Some have a small gold circle or star at the center.

---

## 17. Buttons & CTAs

### Primary CTA (Full Button)

```jsx
<Link
  to="/services"
  className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-bold text-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
  style={{
    backgroundColor: deepGreen,
    boxShadow: `0 12px 35px ${deepGreen}30`
  }}
>
  Learn about the Re-Architect's Journey
  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
</Link>
```

Properties: `rounded-full`, deepGreen background, white text, bold, `text-xl`, generous padding (`px-10 py-5`), soft shadow, lift+scale on hover, arrow slides right on hover.

### Secondary CTA (Text Link)

```jsx
<Link
  to="/about"
  className="group inline-flex items-center gap-2 font-bold text-lg hover:gap-3 transition-all"
  style={{ color: emerald }}
>
  More About My Journey
  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
</Link>
```

Properties: emerald text, bold, `text-lg`, arrow icon, gap grows on hover, arrow slides right.

### CTA Decoration

Primary CTAs are often accompanied by a DoodleArrow + Caveat label ("start here!") positioned absolutely nearby. This draws the eye without making the button itself busier.

---

## 18. Dark Section Treatment

The Services section is the only dark section (`backgroundColor: deepGreen`). It needs special handling:

### What Changes

- **Text colors flip:** headings → linen, body → linen with opacity
- **Card backgrounds:** nearly transparent cream (`${cream}10`)
- **Card borders:** dashed, `${sage}25`, `border-2 border-dashed`
- **Icons:** gold fill instead of emerald
- **Underlines:** gold (stands out best on dark green)
- **Caveat text:** sage (good contrast on dark green)
- **Decorations:** only Sparkles (simpler on dark bg)

### What Stays the Same

- Cards sit straight (same as light sections — no rotation anywhere)
- Doodle-hover still works (gentle lift on hover)
- Animation classes still apply
- Section padding unchanged

---

## 19. Navigation

Fixed top nav with blur backdrop:

```jsx
<nav
  className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
  style={{ backgroundColor: `${cream}ee`, backdropFilter: "blur(8px)" }}
>
  <div className="max-w-5xl mx-auto flex items-center justify-between">
    {/* Left: Back link */}
    <Link to="/" className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity flex items-center gap-1" style={{ color: emerald }}>
      <ArrowRight className="w-3 h-3 rotate-180" /> Back to designs
    </Link>
    {/* Right: Brand */}
    <div className="flex items-center gap-2" style={{ color: deepGreen }}>
      <Sprout className="w-5 h-5 wiggle" style={{ color: emerald }} />
      <span className="font-semibold" style={{ fontFamily: "'Caveat', cursive", fontSize: "1.4rem" }}>Francois Dab</span>
    </div>
  </div>
</nav>
```

Note: The "Back to designs" link is for the prototype phase. In production, replace with proper site navigation. The brand name in Caveat + wiggling Sprout icon is the final design.

---

## 20. Footer

Minimal, warm, uses both Sprout icon (wiggling) and Sparkles (twinkling):

```jsx
<footer className="py-10 text-center" style={{ backgroundColor: cream }}>
  <div className="flex justify-center gap-2 mb-3">
    <Sprout className="w-6 h-6 wiggle" style={{ color: `${sage}60` }} />
    <Sparkles className="w-6 h-6 twinkle-2" />
  </div>
  <p style={{ fontFamily: "'Caveat', cursive", color: `${dimText}90`, fontSize: "1.3rem" }}>
    Built with kindness, curiosity & playfulness for brains that work differently.
  </p>
</footer>
```

---

## 21. Responsive Behavior

### Breakpoint Strategy

Uses Tailwind's default breakpoints:
- **Mobile-first** — base styles are mobile
- **`md:` (768px)** — tablet/laptop adjustments
- **`lg:` (1024px)** — desktop-specific elements

### What Changes Per Breakpoint

| Element | Mobile | md: (768px+) | lg: (1024px+) |
|---|---|---|---|
| Hero heading | text-4xl | text-5xl | text-6xl |
| Body text | text-lg (18px) | text-xl (20px) | — |
| Card padding | p-8 | p-10 | — |
| Pain point grid | 1 column | 2 columns | — |
| Values grid | 1 column | 3 columns | — |
| Services grid | 1 column | 3 columns | — |
| About layout | stacked | stacked | side-by-side (flex-row) |
| DoodleArrows | hidden | hidden | visible |
| Arrow labels | hidden | hidden | visible |
| Section padding | py-20 | py-28 | — |

### Key Rule

**Decorative SVG elements are always visible on mobile** (except DoodleArrows and their labels). The warm, grounded aesthetic carries across all screen sizes with 1-2 decorations per section.

---

## 22. Tech Stack

```
Framework:    React 19 (with TypeScript)
Bundler:      Vite
CSS:          Tailwind CSS v4 (using @import "tailwindcss" in index.css)
Router:       react-router-dom (v6+)
Icons:        lucide-react
Fonts:        Google Fonts (loaded in index.html)
Runtime:      Bun
Animations:   CSS-only (keyframes in <style> block)
```

### Important Notes

- **No animation libraries required** — all motion is CSS keyframes + transitions
- **No external UI component libraries** — everything is custom
- **Each page is a single file** — all components (Sparkles, DoodleCard, etc.) are defined within the page file. For a production refactor, extract these into a shared component library.
- **Colors are defined as a JS object** (`const b = {...}`) — for production, consider moving to CSS custom properties or Tailwind theme config.
- **Styles use a mix of Tailwind classes and inline `style` props** — this is intentional. Inline styles are used for dynamic colors from the palette object. Tailwind handles layout, spacing, and responsive behavior.

---

## 23. Common Pitfalls to Avoid

### DON'T: Make it sterile or corporate

The design should feel personal and hand-crafted. But "warm and grounded" doesn't mean "maximum decorative density." Use 1-2 decorations per section — enough to feel alive, not so many it overwhelms. Every decoration should earn its place.

### DON'T: Use small text

If any text is under 17px, it's too small. When in doubt, go bigger. The audience has executive dysfunction — readability is accessibility.

### DON'T: Tilt or rotate cards

Cards should sit straight and stable. The hand-drawn dashed doodle borders already communicate "this isn't corporate" without the visual instability of tilted cards. Rotation can feel unbalancing and unnerving for a sensory-sensitive audience.

### DON'T: Use fast animations

Animations should be SLOW (3-5s cycles). Fast animation triggers distraction. Slow animation creates ambient warmth.

### DON'T: Use pure black or pure white

Always use the palette's soft alternatives (text: #3A3A3A, cream: #FDFAF5).

### DON'T: Make it look like a generic SaaS landing page

No gradient hero banners. No stock photography. No "Get Started Free" CTAs. No purple-on-white color schemes. This is a personal coaching practice, and the design should feel handmade and personal.

### DON'T: Over-formalize the tone

The Caveat annotations are intentionally casual and lowercase. Don't capitalize them. Don't make them longer. Don't remove the emoji.

### DON'T: Use `Inter`, `Roboto`, `Arial`, or system fonts

The typography (Playfair Display + DM Sans + Caveat) is integral to the design's personality.

### DON'T: Forget the ScribblyUnderline

Every H2 section heading gets one. It's a consistent rhythmic element that ties the whole page together.

### DON'T: Use bouncy or overshooting hover animations

Avoid `cubic-bezier` curves with overshoot values (like `1.56`). These create micro-jitter that can be visually unsettling for a sensory-sensitive audience. Use smooth `ease-out` transitions instead — they feel warm and natural without the bounce.

---

## 24. The Vibe Check

When you're done building a page or component, ask yourself:

1. **Does it feel personal and hand-crafted?** If it looks too corporate, add a doodle border or scribbly underline. If it looks too chaotic, remove some decorations.
2. **Can I read the text without squinting?** If not, make it bigger.
3. **Does something move gently?** Every viewport should have at least one subtly animated element — but not too many competing for attention.
4. **Is there a handwritten note somewhere?** Every section needs its Caveat moment.
5. **Do the cards feel stable and grounded?** Cards should sit straight. The doodle borders provide personality without visual instability.
6. **Does hovering a card feel smooth?** A gentle lift with ease-out timing. No bounce, no jitter.
7. **Would the reader feel judged?** If yes, soften the language and warm up the colors.
8. **Does it feel calming but not boring?** Warm, not chaotic. Personal, not clinical. That's the sweet spot.

The ultimate test: would a 40-year-old who just discovered they're AuDHD feel **seen**, **safe**, and maybe even **delighted** when they land on this page — without feeling visually overwhelmed?

If yes, you nailed it. ✨
