# Appriyo Design System (v4.0)

### _"The Ledger, After Hours" — Paper-World Trust, Told in the Dark_

> **Purpose:**
> Move Appriyo from v3.0's daylight paper-ledger aesthetic to a confident,
> motion-forward dark studio aesthetic — the register of a design studio
> that builds serious software — while keeping the parts of the ledger
> story that make Appriyo *Appriyo* and not a reskinned template.

---

# 0. WHY WE'RE REPLACING v3.0

v3.0 ("The Ledger System") was a deliberate rejection of dark-glow SaaS —
warm paper backgrounds, ink-navy text, a rubber-stamp red accent, ruled
ledger sections. It was built on the belief that the buyer (a repair-shop
or coaching-center owner) needed to see something that looked like *their*
world, not Silicon Valley's.

**This version is an intentional reversal of that call**, made after
reviewing a reference site (the "uwwa" studio site) whose dark,
gradient-lit, motion-heavy aesthetic is what we now want Appriyo's site to
feel like. Worth stating plainly, once, for the record: this is the exact
look v3.0's own rejection criteria (§2.5) warned against. We're doing it
anyway, deliberately, because the direction has changed — not because we
forgot why v3.0 existed.

**What survives the switch:** Appriyo's brand story (paper ledgers, ink
stamps of verification, "evidence over adjectives," the 3-second test,
the repair-shop-owner-to-technical-evaluator audience span) is a
positioning idea, not a color palette. It travels fine into a dark canvas.
The **stamp** and **receipt-edge** motifs are kept and re-lit for dark
surfaces, because they're ownable and specific to Appriyo — everything
else in the surface language (motion, layout, card structure, framing)
is rebuilt from the reference site.

---

# 1. THE BIG IDEA

## The Ledger, Lit From Within

Appriyo still turns a shop owner's paper world — ledgers, receipt books,
ink stamps — into precise software. What changes is the register: instead
of "an organized person's desk in daylight," the site now reads as
**"the studio, after the shop has closed and the real work — the
architecture, the systems — happens."** Confident, considered, a little
theatrical. Proof still matters (the stamp motif stays), but it's now
delivered with motion, scale, and contrast instead of paper warmth.

This also happens to match the reference site's own thesis: big
type, generous dark space, and staged reveals do the persuading, not
decoration.

---

# 2. DESIGN PHILOSOPHY

### 2.1 The 3-Second Test (kept)

A visitor reads the headline and knows exactly what Appriyo does, in
language they'd use themselves — "we build the system that replaces your
notebook," not "digital transformation solutions."

### 2.2 Evidence Over Adjectives (kept)

Never say "innovative," "cutting-edge," "revolutionary." Every claim is
backed by something checkable: a real screenshot, a real number, a named
product, a named team member. The **stamp** component (§6.1) is the
direct visual expression of this rule and does not change meaning in
v4.0 — only its rendering (glow instead of ink) changes.

### 2.3 Confident, Not Cold

Dark backgrounds and bold type risk reading as generic-VC-SaaS if left
undifferentiated. Appriyo's warmth now lives in: (a) the muted, dusty
accent-block colors (not neon/cyan), (b) the illustrated line-art scenes
per section instead of stock photography or abstract 3D renders, and (c)
real names, real photos, real screenshots wherever proof is shown. Dark
does not mean anonymous.

### 2.4 Legible to Everyone in the Room (kept)

Every section must still work for both the non-technical shop owner and a
technical evaluator. Motion and scale should never substitute for a
plain-language sentence. No section should require IT vocabulary.

### 2.5 Rejection Criteria (updated)

Reject any design that:

- Is dark for its own sake — every accent block, illustration, and card
  still needs a specific reason tied to content, not decoration
- Uses cyan/neon glow (the exact v2.0 problem) — this system's glow is
  warm and desaturated, sourced from the accent palette below, never
  electric blue
- Makes a claim with no visible evidence next to it
- Needs jargon to make sense
- Drops the stamp/receipt motifs in favor of generic glass cards —
  those two elements are Appriyo's, not the template's

---

# 3. COLOR SYSTEM

### 3.1 Palette Logic

Base is a warm near-black (ink taken to its dark extreme, not a cold
blue-black or true `#000`). Text on dark reuses the old paper tone —
literally, the site's dark mode "paper" is the old light mode's
background color, inverted in role. Accent blocks (case studies, team
cards) use **desaturated, dusty** tints — never saturated neon — pulled
from the v3.0 accent family so the studio still feels like Appriyo's and
not an unmodified clone of the reference site's lavender/olive/blush.
Stamp red remains the *only* fully saturated color, reserved for proof.

```css
/* === INK (Backgrounds, dark-first now) === */
--color-ink-950: #17140f; /* Primary background — warm near-black, not cold blue-black */
--color-ink-900: #1e1a14; /* Card / panel surface on dark */
--color-ink-800: #2a251d; /* Raised surface, hover states */
--color-line-dark: #3a3327; /* Borders/rules on dark surfaces */

/* === PAPER (Light sections + text-on-dark) === */
--color-paper: #f5f1e8; /* Primary text on dark; light-section background */
--color-paper-dim: #efebe1; /* Light-section alt background (rare — see §12) */
--color-paper-muted: #a89f8d; /* Secondary text on dark — muted warm grey */
--color-paper-faint: #6f6a5c; /* Tertiary/meta text on dark */

/* === STAMP (Proof accent — unchanged role, re-lit) === */
--color-stamp: #d6503e; /* Brighter than v3.0's ink-red so it reads on dark */
--color-stamp-glow: #d6503e33; /* Soft glow ring behind stamp elements */
--color-stamp-soft: #d6503e14; /* Faint tint for proof-callout backgrounds */

/* === LEDGER GREEN (secondary accent — confirmed/live states) === */
--color-ledger: #7fa088;
--color-ledger-soft: #7fa08822;

/* === ACCENT BLOCKS (case studies, team cards — dusty, not neon) === */
--color-accent-mauve: #b9a8ae; /* on dark bg becomes a muted tinted panel, see 3.3 */
--color-accent-olive: #a3a583;
--color-accent-clay: #c08a6e;
--color-accent-brass: #a9812e; /* rare — certificate/founding-team moments only */

/* === UTILITY === */
--color-warning: #d68a3e;
--color-error: #d6503e; /* reuses stamp red */
```

### 3.2 Usage Rules

| Context                                  | Color                                                |
| ----------------------------------------- | ----------------------------------------------------- |
| Page background (default)                | `--color-ink-950`                                      |
| Card / panel surfaces                     | `--color-ink-900`                                      |
| Raised / hover surfaces                   | `--color-ink-800`                                       |
| Primary text on dark                      | `--color-paper`                                        |
| Secondary / body text on dark             | `--color-paper-muted`                                  |
| Meta labels, timestamps, step counters    | `--color-paper-faint`, mono                            |
| Verified proof points, stamps, key stats  | `--color-stamp` — nowhere else                         |
| Confirmed / "it works" moments            | `--color-ledger`                                        |
| Case-study / team accent blocks           | one of the accent-block colors, tinted per §3.3         |
| Borders, dividers on dark                 | `--color-line-dark`                                     |

✅ 80% of the UI is ink-dark neutrals and paper text
✅ 12% is the rotating accent-block palette (mauve/olive/clay), used for
full-bleed section backgrounds behind case studies and team cards
✅ 5% is ledger green
✅ 3% is stamp red — reserved for real proof, so it never feels decorative

**Hard rule (kept from v3.0):** if stamp red appears on something that
isn't a verifiable claim, it's being misused — remove it.

### 3.3 Accent Blocks Are Tinted Panels, Not Backgrounds-of-the-Page

Unlike v3.0's flat paper background, v4.0's accent colors (mauve, olive,
clay) are used the way the reference site uses lavender/sage/blush: as
**full-bleed rounded panels that interrupt the dark canvas** for a single
section (a case study, a team grid), then hand back to `--color-ink-950`
immediately after. They should never become the persistent page
background — that job stays with ink-950. This is what keeps the accent
palette feeling like punctuation instead of a theme change.

### 3.4 Glow Replaces Ink-Shadow

v3.0 explicitly banned glow. v4.0 explicitly reinstates it, with limits:
glow is warm (sourced from stamp/brass/accent hues, never blue/cyan),
low-opacity, and reserved for (a) the hero's background treatment, (b)
the stamp component's ring, and (c) primary-button hover states. It is
never used as a permanent decorative background pattern (no perpetual
pulse, no roaming cursor-follow light).

```css
--shadow-card: 0 1px 2px #0000004d, 0 8px 24px #00000040;
--shadow-card-hover: 0 2px 6px #00000059, 0 16px 40px #00000052;
--glow-stamp: 0 0 0 6px var(--color-stamp-glow);
--glow-hero: radial-gradient(
  60% 50% at 50% 20%,
  #d6503e14 0%,
  transparent 70%
);
```

---

# 4. TYPOGRAPHY SYSTEM

### 4.1 Font Stack

| Role                 | Font                         | Why                                                                                                                     |
| --------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Display / Headlines   | **General Sans** (Semibold/Bold) | The reference site's headline register: confident, geometric, a little rounded — reads as *studio*, not *stamped document* anymore. Replaces Bitter as the lead voice. |
| Body                  | **Inter**                       | Unchanged from v3.0 — neutral, legible at any age or device.                                                            |
| Meta / Labels / Data / Step counters | **IBM Plex Mono**  | Unchanged from v3.0 — and it's also exactly what the reference site uses for its `/01/ /02/ /03/` step labels and progress counters. This is the one throughline between v3.0 and v4.0. |
| Logo wordmark         | **General Sans** (Bold, tight tracking) | Matches the reference site's soft, rounded lowercase logotype treatment. |

```html
<link
  href="https://fonts.googleapis.com/css2?
  family=Inter:wght@400;500;600&
  family=IBM+Plex+Mono:wght@400;500&
  display=swap"
  rel="stylesheet"
/>
<!-- General Sans is not on Google Fonts — self-host from Fontshare (fontshare.com/fonts/general-sans), weights 500/600/700 -->
```

**Why drop Bitter?** Bitter's slab-serif, stamped-document character was
correct for a paper-daylight system. Against a dark, motion-led canvas it
reads as a mismatched, "trying too hard" contrast. General Sans keeps
enough geometric personality to avoid feeling like default Inter-on-Inter,
without fighting the dark aesthetic.

### 4.2 Type Scale

```css
--text-display-xl: clamp(48px, 7vw, 92px); /* Hero headline — larger than v3.0, matches reference scale */
--text-display-lg: clamp(36px, 4.5vw, 56px);

--text-h1: clamp(32px, 3.5vw, 44px);
--text-h2: clamp(26px, 3vw, 34px);
--text-h3: clamp(20px, 2.2vw, 26px);
--text-h4: 18px;

--text-body-lg: 18px;
--text-body: 16px;
--text-body-sm: 14px;

--text-label: 12px; /* Mono, ledger/step labels */
--text-mono: 14px;
```

Note the larger hero size than v3.0 (92px vs 68px max) — the reference
site's headline dominates the first screen; Appriyo's should too. This
is a deliberate re-embrace of the "shout a little" register v3.0 avoided.

### 4.3 Special Typography Rules

**Headlines:** General Sans, weight 600–700, `letter-spacing: -0.02em`,
`line-height: 1.05`. Sentence case, not Title Case — still plain speech,
not marketing copy; this rule survives from v3.0 unchanged.

**Meta / Step Labels (mono, unchanged from v3.0):**

```css
font-family: "IBM Plex Mono";
font-size: 12px;
letter-spacing: 0.04em;
color: var(--color-paper-faint);
/* e.g. "/ 01 /", "STEP /02/", "PROGRESS 65%" — matches the reference
   site's numbering style directly; this is the clearest visual bridge
   between v3.0's ledger numbering and v4.0's dark canvas. */
```

**Never:**

- Center-align paragraphs longer than 2 lines
- Mix in a fourth typeface anywhere
- Use ALL CAPS for anything longer than 3 words (mono labels are the one
  exception, and only when short — "SERVICES", "NEW FEATURE")

---

# 5. LAYOUT SYSTEM

### 5.1 The Framed Canvas (new — signature structural device)

The reference site frames its entire scrolling page inside a persistent
dark border with large rounded corners, like a card holding the whole
site. Appriyo adopts this:

```css
body {
  background: #0e0c09; /* outer frame color, darker than --color-ink-950 */
  padding: 12px;
}
.site-frame {
  background: var(--color-ink-950);
  border-radius: 28px;
  overflow: hidden; /* clip section corners to the frame */
  min-height: calc(100vh - 24px);
}
```

On mobile, collapse the outer padding to 6px and the radius to 16px —
never remove the frame entirely, it's part of the identity, but don't let
it eat meaningful width on a 375px screen.

### 5.2 Grid

```css
--grid-max: 1200px; /* Slightly wider than v3.0 — the bigger type needs more room to breathe */
--grid-padding: clamp(24px, 5vw, 56px);
--grid-gap: 24px;
--section-gap: clamp(64px, 9vw, 110px);
```

### 5.3 Layout Principle: Staged, Not Ruled

v3.0 borrowed ledger-book rules — visible top rule, running left-hand
label. v4.0 replaces this with **staged reveal**: each section's content
enters via scroll-triggered animation (see §8), and section boundaries
are marked by full-bleed color changes (dark → accent block → dark)
rather than thin rule lines. The mono step-label convention survives as
the connective tissue between the two systems.

```
[SECTION]
  ├── [LEDGER LABEL] — mono, e.g. "/ 02 — Services /" (kept from v3.0)
  ├── [HEADING] — General Sans, sentence case
  ├── [SUBTEXT] — Inter, --color-paper-muted, max 2 lines
  └── [CONTENT] — enters via scroll reveal, see §8
```

### 5.4 Spacing Scale (unchanged from v3.0)

```css
--space-1: 4px --space-5: 24px --space-9: 96px --space-2: 8px --space-6: 32px
  --space-10: 128px --space-3: 12px --space-7: 48px --space-4: 16px
  --space-8: 64px;
```

---

# 6. SIGNATURE ELEMENTS

Three elements now carry the identity: two survive from v3.0 (re-lit for
dark), one is new from the reference site.

### 6.1 The Verified Stamp (kept, re-lit)

Same rule as v3.0: used **only** next to something genuinely provable.
Never decorative. On dark surfaces it gets a soft glow ring instead of a
flat ink border, but the rotation and meaning are unchanged.

```css
.stamp {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1.5px solid var(--color-stamp);
  color: var(--color-stamp);
  border-radius: 999px;
  padding: 4px 12px;
  font: 500 12px "IBM Plex Mono";
  transform: rotate(-2deg);
  background: var(--color-stamp-soft);
  box-shadow: var(--glow-stamp);
}
```

Use for: "Verified client result," "Live product," "Real metric," dates
of delivery — identical usage rules to v3.0.

### 6.2 Receipt-Edge Cards (kept, re-lit)

Same perforated-top-edge treatment, now drawn in dark tones. Reserved,
as before, for cards carrying real evidence (screenshots, testimonials,
case studies) — generic content still uses the plain card style below.

```css
.receipt-card {
  background: var(--color-ink-900);
  border: 1px solid var(--color-line-dark);
  border-radius: 8px;
  box-shadow: var(--shadow-card);
  position: relative;
  padding: 28px;
}
.receipt-card::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 8px;
  background-image: radial-gradient(
    circle,
    var(--color-ink-950) 2px,
    transparent 2.2px
  );
  background-size: 14px 14px;
  background-position: 0 -4px;
}
```

### 6.3 Accent-Block Sections (new — from the reference site)

Full-bleed, large-radius panels in a rotating accent color (mauve,
olive, clay — never the same one twice in a row) that briefly interrupt
the dark canvas to hold one case study or the team grid. This is the
reference site's most load-bearing structural idea and Appriyo's most
direct adoption from it.

```css
.accent-block {
  background: var(--color-accent-mauve); /* rotate per section */
  border-radius: 32px 32px 0 0;
  padding: clamp(32px, 6vw, 64px);
  color: var(--color-ink-950); /* dark text on the light accent panel */
}
.accent-block + .accent-block {
  border-radius: 0; /* consecutive blocks join seamlessly if stacked */
}
```

**Rule:** an accent block always contains a real product name, a real
screenshot or portrait, and (if a case study) a "See live" link. Never
use an accent block purely for visual rhythm with no content payoff.

### 6.4 Plain Card (services, non-evidence content)

```css
.plain-card {
  background: var(--color-ink-900);
  border: 1px solid var(--color-line-dark);
  border-radius: 10px;
  padding: 24px;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}
.plain-card:hover {
  border-color: var(--color-paper-faint);
  transform: translateY(-2px);
}
```

### 6.5 Floating Bottom Nav Pill (new)

The reference site keeps a persistent pill-shaped nav docked at the
bottom-center of the viewport (Home / Services / Process / Cases) rather
than a top navbar for section links. Appriyo adopts this as a secondary,
always-visible wayfinding element; the top bar keeps the logo and the
primary CTA only.

```css
.bottom-nav {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 4px;
  padding: 6px;
  background: var(--color-ink-900);
  border: 1px solid var(--color-line-dark);
  border-radius: 999px;
  z-index: 40;
}
.bottom-nav .active {
  background: var(--color-paper);
  color: var(--color-ink-950);
  border-radius: 999px;
}
```

---

# 7. COMPONENTS

### 7.1 Buttons

**Primary CTA:**

```css
background: var(--color-paper);
color: var(--color-ink-950);
border-radius: 999px; /* pill, matching reference site — was 4px in v3.0 */
padding: 13px 24px;
font: 600 15px "Inter";
border: none;
box-shadow: var(--shadow-card);
transition:
  transform 0.15s ease,
  box-shadow 0.15s ease;

/* Hover */
transform: translateY(-1px);
box-shadow: var(--shadow-card-hover);
```

**Secondary / Ghost:**

```css
background: transparent;
border: 1.5px solid var(--color-line-dark);
color: var(--color-paper);
border-radius: 999px;
padding: 11.5px 22px;

/* Hover */
border-color: var(--color-paper-muted);
background: var(--color-ink-900);
```

**Text Link:** kept from v3.0 — underline always visible at low opacity,
solidifies on hover.

```css
color: var(--color-paper);
text-decoration: underline;
text-decoration-color: var(--color-line-dark);
text-underline-offset: 3px;
transition: text-decoration-color 0.2s ease;
:hover {
  text-decoration-color: var(--color-paper);
}
```

### 7.2 Stat / Proof Display

```css
.stat-number {
  font-family: "General Sans";
  font-weight: 700;
  font-size: clamp(32px, 4vw, 52px);
  color: var(--color-paper);
}
.stat-label {
  font-family: "IBM Plex Mono";
  font-size: 12px;
  color: var(--color-paper-faint);
  margin-top: 4px;
}
/* A stamp badge sits beside verified stats — see 6.1 */
```

### 7.3 Step Progress Bar (new — from reference site process section)

```css
.step-track {
  height: 6px;
  background: var(--color-line-dark);
  border-radius: 999px;
  overflow: hidden;
}
.step-fill {
  height: 100%;
  background: var(--color-paper);
  border-radius: 999px;
  transition: width 0.4s var(--ease-standard);
}
.step-labels {
  font: 500 12px "IBM Plex Mono";
  color: var(--color-paper-faint);
  display: flex;
  justify-content: space-between;
}
.step-labels .active {
  color: var(--color-paper);
  font-weight: 600;
}
```

### 7.4 Marquee Ticker (new — from reference site hero)

A single-row, infinite-scroll ticker of plain-language capability words
(not jargon), separated by a small icon glyph. Used once, directly under
the hero headline.

```css
.ticker {
  display: flex;
  gap: 32px;
  white-space: nowrap;
  animation: scroll-left 28s linear infinite;
  color: var(--color-paper-faint);
  font: 500 13px "IBM Plex Mono";
  letter-spacing: 0.04em;
}
@keyframes scroll-left {
  to {
    transform: translateX(-50%);
  }
}
/* prefers-reduced-motion: pause the animation, keep the list visible statically */
```

### 7.5 Icons

- Library: **Phosphor Icons**, `regular` weight on dark (thin reads fine
  against dark backgrounds, unlike v3.0's paper background) — `duotone`
  reserved for the illustrated hero/section scenes only (§7.6)
- Size: 20–24px inline, 32px in feature moments
- Color: `--color-paper` default, `--color-stamp` only on proof elements

### 7.6 Illustrated Line-Art Scenes (new — from reference site)

Each major section gets one custom, hand-drawn-feeling line illustration
(not a stock photo, not an abstract 3D render, not a generic icon set) set
against a muted accent-color background — directly inspired by the
reference site's industrial/editorial illustration style. For Appriyo,
illustrate scenes from **each client's actual world**: a repair-shop
counter, a coaching-center desk, a receipt printer, a ledger book — kept
in the same restrained black-line-on-tint style throughout, so it reads
as one coherent visual system rather than stock clip-art.

**Rule:** if we don't have a real illustration budget for a section yet,
that section uses a real product screenshot in a receipt-card (§6.2)
instead of a placeholder illustration — never a generic stock photo.

---

# 8. MOTION SYSTEM

### 8.1 Philosophy (reversed from v3.0, deliberately)

v3.0 made motion do less, on the theory that restraint signals
trustworthiness. v4.0 makes motion do more, on the theory (matching the
reference site) that staged reveals and confident animation signal
craft. The guardrail that survives: motion must never block reading —
it delays, it doesn't hide.

```css
--duration-fast: 150ms;
--duration-normal: 240ms;
--duration-slow: 500ms; /* hero + section reveals */
--duration-hero: 900ms; /* headline word-reveal sequence, once, on load only */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
```

### 8.2 What Moves

- **Hero headline reveal (new):** on first load only, the headline
  animates in as a horizontal wipe/reveal per word (matching the
  reference site's split-color text-scroll effect), total duration
  ≤ 900ms, then never repeats on scroll-back
- **Marquee ticker:** continuous slow scroll, §7.4
- **Scroll reveal:** fade + 16px rise, `--duration-slow`, staggered 60ms
  per item, max 5 items staggered before falling back to simultaneous
- **Step progress (Process section):** width transition on the progress
  bar when a step tab is selected, plus a crossfade of the paired
  illustration — mirrors the reference site's numbered-step interaction
  exactly, since it's a strong, clear pattern worth keeping intact
- **Button/card hover:** as specified in §7
- **Accent-block entrance:** the block's border-radius and color reveal
  as the user scrolls into it (simple clip/scale, not parallax)

### 8.3 Forbidden Motion (kept, one line changed)

❌ Parallax scrolling
❌ Auto-playing carousels
❌ Cursor-follow spotlight/glow (the reference site's most "generic dark
SaaS" tic — we deliberately leave this one out even though we're
otherwise embracing the dark aesthetic)
❌ Anything that delays reading the headline by more than ~900ms (the one
exception, for the hero reveal itself, is intentional and time-boxed)
❌ Motion on mobile beyond simple opacity/transform fades (respect
`prefers-reduced-motion`)

---

# 9. PAGE STRUCTURE & SECTION INTENT

| Section          | Approach                                                                                          | Feel                     |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------- |
| **Frame + Nav**   | Rounded dark frame (§5.1); logo pill top-left, "Book a call" text link + primary pill CTA top-right | Contained, considered      |
| **Bottom Nav**    | Floating pill nav, always visible (§6.5)                                                             | Oriented                  |
| **Hero**          | Giant staged-reveal headline in the owner's own words, marquee ticker below, illustrated line-art scene (real product framed in it, not abstract) | Confident, immediately clear |
| **Services**      | Numbered accordion (01–08), one open at a time, icon + description on expand                        | Explorable                |
| **Process**       | Numbered steps with progress bar + tabs, split text/illustration per step                            | Transparent, staged       |
| **Case Studies**  | Accent-block full-bleed panels, one per product, real screenshot + "See live"                        | Substantive, provable      |
| **Team**          | Accent-tinted photo cards, real names/photos, LinkedIn links                                          | Personally accountable     |
| **Contact / CTA** | Full dark panel, oversized headline, minimal underline-style form + direct contact info               | Frictionless               |
| **Footer**        | Plain columns, socials, back-to-top circle, real address/hours                                        | Grounded                   |

### 9.1 Hero Blueprint

```
[FRAME] rounded dark canvas, faint warm radial glow behind headline only
[TOP BAR]  logo pill · "Book a call" · primary pill CTA
[H1]  Staged-reveal headline in the client's language:
      "We build the system that replaces your notebook."
[SUBTEXT]  One sentence, concrete, right-aligned column, no buzzwords
[TICKER]  plain-language capability marquee, mono, one row
[SCENE]   illustrated real-product scene, line-art on accent tint,
          full-width below the fold trigger
[BOTTOM NAV]  floating pill, Home active
```

---

# 10. RESPONSIVENESS

```css
--bp-sm: 640px --bp-md: 768px --bp-lg: 1024px --bp-xl: 1280px;
```

- Frame padding collapses to 6px / radius to 16px below `--bp-sm`
- Hero stacks vertically; illustrated scene moves below the fold text,
  never removed — it's the proof, matching v3.0's rule
- Accordion services collapse to full-width rows, numbering stays
- Bottom nav pill shrinks to icon-only below `--bp-sm` if space is tight,
  but never disappears — it's the primary in-page navigation on mobile
- Touch targets ≥ 44×44px, body text never below 16px, inputs never
  below 16px (prevents iOS zoom)
- No horizontal scroll, no hover-dependent information anywhere

---

# 11. PERFORMANCE STANDARDS

| Metric                 | Target                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------- |
| Lighthouse Performance   | ≥ 88 (slightly relaxed from v3.0's 90 — the motion budget costs a little, spend it here) |
| LCP                      | ≤ 2.8s                                                                                  |
| CLS                      | ≤ 0.1                                                                                   |
| Image size                | ≤ 150KB (WebP/AVIF); illustrations exported as optimized SVG where possible              |
| Fonts                    | Preconnect, `display=swap`, only 3 families total (General Sans self-hosted)             |
| Animation                | `transform`/`opacity`/`clip-path` only, GPU-composited; no animated box-shadow loops     |

The Bangladesh mid-range-Android reality from v3.0 still applies. Dark
backgrounds actually help battery life on OLED screens, which is a small
genuine upside of this switch — worth mentioning if anyone questions the
performance trade-off of the added motion.

---

# 12. THEME SYSTEM

**Default: Dark.** This reverses v3.0's stance. Dark is now the primary
and only fully-designed marketing-site experience. If a light "print" or
"paper" mode is ever wanted (e.g., an actual printable one-pager for a
shop owner with no reliable internet), that is a separate, minimal
export — not a toggle on the main site, and not a design priority right
now.

---

# 13. DESIGN QA CHECKLIST

**Identity**

- [ ] Reads as Appriyo, not an unmodified copy of the reference site —
      stamp, receipt-edge, and mono ledger-numbering are all present
- [ ] No cyan/electric glow anywhere — only warm, desaturated glow
- [ ] Every stamp is next to a genuinely checkable claim
- [ ] Accent-block colors rotate; the same tint never repeats back-to-back

**Clarity**

- [ ] A non-technical reader understands each section without re-reading
- [ ] No section requires IT vocabulary to follow the main point

**Evidence**

- [ ] Every stat is real — no invented percentages
- [ ] At least one real product screenshot or illustrated real-scene
      appears above the fold

**Motion & Performance**

- [ ] Hero reveal never exceeds ~900ms and never replays on scroll-back
- [ ] No cursor-follow glow anywhere
- [ ] Works cleanly on a mid-range Android phone on 3G/4G

**Consistency**

- [ ] Colors only from tokens in §3 — no hardcoded hex in components
- [ ] Only 3 typefaces, used per their assigned roles

---

# 🔚 FINAL STATEMENT

> v3.0 said Appriyo shouldn't look like a funded startup. v4.0 makes a
> different bet: that the right amount of studio confidence — big type,
> staged motion, a dark room — can sit next to real screenshots, real
> names, and a rubber-stamp red that only ever means "this is true,"
> without losing what made the ledger story work in the first place.
>
> The paper story didn't go away. The lights just went down.

---

_Appriyo Design System v4.0 — "The Ledger, After Hours"_