# Appriyo Design System (v3.0)

### _"The Ledger System" — Paper-World Trust, Digital Precision_

> **Purpose:**
> Replace the v2.0 dark-glow-SaaS aesthetic with a design language that a repair-shop
> owner or coaching-center manager trusts on sight — because it speaks their
> visual language, not Silicon Valley's.

---

# 0. WHY WE'RE REPLACING v2.0

v2.0 was a dark background, cyan glow, dot-grid, glass cards, "Syne" display font.
That combination is not distinctive anymore — it's the single most common look
AI design tools default to for "modern tech startup." It also aims at the wrong
audience: it reads _flashy VC-backed SaaS_, when your actual buyer is a local
business owner who wants to know **can I trust these people with my shop's
records for the next five years.**

We're not toning it down. We're pointing it at a completely different idea.

---

# 1. THE BIG IDEA

## Paper, Made Precise

Your clients' entire world runs on paper: ledgers, receipt books, hand-written
registers, rubber ink stamps on invoices. Appriyo's job is to take that world
and rebuild it as something clean and structured — without pretending the
paper world was primitive or that you're selling them magic.

**The design embodies the exact transformation you sell.** Every recurring
visual motif on the site is drawn from paper business records — ruled ledger
lines, receipt-card edges, ink stamps of verification — but executed with the
restraint and precision of good software. Familiar material, elevated
execution. That is the whole pitch, visually, before anyone reads a word.

This also solves your "not just for Gen Z" requirement for free: ledgers and
stamps are legible metaphors to a 55-year-old shop owner and a 20-year-old
client's daughter scrolling on her phone alike.

---

# 2. DESIGN PHILOSOPHY

### 2.1 The 3-Second Test (kept from v2.0 — still correct)

A visitor reads the headline and knows exactly what Appriyo does, in language
they'd use themselves — not "digital transformation solutions," but "we build
the system that replaces your notebook."

### 2.2 Evidence Over Adjectives

Never say "innovative," "cutting-edge," "revolutionary." Every claim is backed
by something checkable: a real screenshot, a real number, a named product, a
named team member. If we can't show proof, we don't make the claim. This is
the visual/verbal expression of "we don't over-exaggerate."

### 2.3 Calm, Not Cold

Warm paper tones and generous whitespace, not sterile corporate blue-on-white.
The feeling is "an organized person's desk," not "an empty enterprise
brochure."

### 2.4 Legible to Everyone in the Room

Every section must work for both the non-technical shop owner and a technical
evaluator. No section should require IT vocabulary to understand its point.
Technical depth (stack, architecture) is available but never load-bearing for
the main narrative.

### 2.5 Rejection Criteria

Reject any design that:

- Could be mistaken for a generic dark SaaS template (the exact thing v2.0 was)
- Uses a metaphor a first-year business owner wouldn't recognize
- Makes a claim with no visible evidence next to it
- Needs jargon to make sense
- Adds a paper/stamp motif somewhere it doesn't earn its place

---

# 3. COLOR SYSTEM

### 3.1 Palette Logic

Paper backgrounds (grey-warm, not golden-cream — deliberately cooler than the
"cream + terracotta" look that's become its own AI cliché). Ink-navy does the
work primary blue used to do. A rubber-stamp red is the _only_ saturated
color on the site, reserved entirely for verification/proof moments — so it
carries real meaning instead of being decoration.

```css
/* === PAPER (Backgrounds) === */
--color-paper: #f7f5f0; /* Primary background — uncoated paper, warm-grey not golden */
--color-paper-dim: #efebe1; /* Alternate section background */
--color-paper-card: #ffffff; /* Card surfaces — slightly lifted off the paper */
--color-line: #dad3c2; /* Ledger rule lines, borders */
--color-line-strong: #b8af98; /* Emphasis rules, table borders */

/* === INK (Text & primary brand) === */
--color-ink: #1b2a3a; /* Primary text, headlines — fountain-pen navy, not black */
--color-ink-soft: #4c5c6e; /* Body text */
--color-ink-muted: #7c8896; /* Captions, meta labels */
--color-ink-on-dark: #f7f5f0; /* Text on ink-colored surfaces */

/* === STAMP (Proof accent — use sparingly, ~5% of UI) === */
--color-stamp: #a6392b; /* Rubber-stamp ink red — verification marks, key proof numbers only */
--color-stamp-soft: #a6392b14; /* Faint stamp tint for backgrounds behind proof callouts */

/* === LEDGER GREEN (secondary accent — "balanced," confirmed states) === */
--color-ledger: #3f6b4f;
--color-ledger-soft: #3f6b4f14;

/* === BRASS (rare — certificate/founding-team moments only, not for buttons) === */
--color-brass: #a9812e;

/* === UTILITY === */
--color-warning: #b5651d;
--color-error: #a6392b; /* reuses stamp red — errors and "attention" share one language */
```

### 3.2 Usage Rules

| Context                                  | Color                                   |
| ---------------------------------------- | --------------------------------------- |
| Page backgrounds                         | `--color-paper`                         |
| Alternating sections                     | `--color-paper-dim`                     |
| Cards, panels                            | `--color-paper-card` on `--color-paper` |
| Primary actions / links                  | `--color-ink`                           |
| Verified proof points, stamps, key stats | `--color-stamp` — nowhere else          |
| Confirmed / "it works" moments           | `--color-ledger`                        |
| Body text                                | `--color-ink-soft`                      |
| Meta labels, timestamps                  | `--color-ink-muted`                     |
| Borders, dividers                        | `--color-line`                          |

✅ 85% of the UI is paper neutrals and ink
✅ 10% is ledger green (secondary confirmations, checkmarks)
✅ 5% is stamp red — reserved for real proof, so it never feels decorative

**Hard rule:** if stamp red appears on something that isn't a verifiable
claim (a client name, a real number, a named result), it's being misused —
remove it.

### 3.3 No Glow, No Gradients-as-Decoration

This system explicitly drops glow effects and mesh gradients. Depth comes
from paper-like layering (subtle shadow, not light-emission) and from the
receipt-edge motif below — not from anything that looks like it's lit from
within. One exception: a very faint 1–2% radial vignette behind the hero
headline is allowed, used once, to add depth without reading as "SaaS glow."

```css
--shadow-card: 0 1px 2px #1b2a3a0a, 0 4px 12px #1b2a3a0f;
--shadow-card-hover: 0 2px 4px #1b2a3a10, 0 12px 28px #1b2a3a16;
--shadow-stamp: 0 1px 1px #a6392b30; /* used only on stamp elements */
```

---

# 4. TYPOGRAPHY SYSTEM

### 4.1 Font Stack

| Role                 | Font                    | Why                                                                                                                                                               |
| -------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Display / Headlines  | **Bitter** (Black/Bold) | A slab serif with the weight and squareness of an official stamped document — sturdy and readable to a non-technical owner, not decorative or "trendy editorial." |
| Body                 | **Inter**               | Neutral, highly legible at any age or device, disappears in service of the content — exactly what body text should do.                                            |
| Meta / Labels / Data | **IBM Plex Mono**       | Receipt-printer, ledger-column character. Used for numbers, dates, small labels — never for prose.                                                                |

```html
<link
  href="https://fonts.googleapis.com/css2?
  family=Bitter:wght@700;900&
  family=Inter:wght@400;500;600&
  family=IBM+Plex+Mono:wght@400;500&
  display=swap"
  rel="stylesheet"
/>
```

**Why not a high-contrast editorial serif (Playfair/Fraunces)?** That pairing
with a warm background is its own overused AI look right now. Bitter reads
as _document_, not _magazine_ — closer to the register you want (reliable
firm, not lifestyle brand).

### 4.2 Type Scale

```css
--text-display-xl: clamp(40px, 6vw, 68px); /* Hero headline */
--text-display-lg: clamp(32px, 4vw, 48px); /* Section hero */

--text-h1: clamp(30px, 3.5vw, 42px);
--text-h2: clamp(24px, 3vw, 32px);
--text-h3: clamp(20px, 2.2vw, 26px);
--text-h4: 18px;

--text-body-lg: 18px;
--text-body: 16px;
--text-body-sm: 14px;

--text-label: 12px; /* Uppercase-free ledger labels, mono */
--text-mono: 14px;
```

Note the smaller display size than v2.0 (68px vs 88px max). Confidence
doesn't require shouting — a business owner reading on a mid-range Android
phone should never feel like the type is performing for them.

### 4.3 Special Typography Rules

**Headlines:** Bitter, weight 800–900, `letter-spacing: -0.01em`,
`line-height: 1.1`. Sentence case, not Title Case — reads as plain speech,
not marketing copy.

**Meta / Ledger Labels (above headings):**

```css
font-family: "IBM Plex Mono";
font-size: 12px;
letter-spacing: 0.04em;
color: var(--color-ink-muted);
/* No uppercase transform by default — a ledger label like "Service 03 of 05"
   reads more like a real record than "SERVICE" in caps */
```

**Never:**

- Use Bitter below 18px (it was drawn for display, not body copy)
- Center-align paragraphs longer than 2 lines
- Mix in a third typeface anywhere
- Use ALL CAPS for anything longer than 3 words

---

# 5. LAYOUT SYSTEM

### 5.1 Grid

```css
--grid-max: 1140px; /* Slightly narrower than v2.0 — easier reading for non-technical visitors */
--grid-padding: clamp(20px, 5vw, 48px);
--grid-gap: 24px;
--section-gap: clamp(72px, 10vw, 120px);
```

### 5.2 Layout Principle: Ruled, Not Floating

v2.0 used asymmetric "floating card" layouts typical of dark SaaS sites. This
system instead borrows from ledger books: content sits on **ruled sections**
with a visible top rule and a running left-hand label (like a ledger's date
column), giving structure without needing glow or shadow to feel organized.

```
[SECTION]
  ├── [RULE] — thin horizontal line, full width, --color-line
  ├── [LEDGER LABEL] — mono, e.g. "02 — Services" (numbering justified: these
  │                     ARE sequential sections of one page, so numbering
  │                     carries real information here)
  ├── [HEADING] — Bitter, sentence case
  ├── [SUBTEXT] — Inter, --color-ink-soft, max 2 lines
  └── [CONTENT]
```

### 5.3 Spacing Scale

```css
--space-1: 4px --space-5: 24px --space-9: 96px --space-2: 8px --space-6: 32px
  --space-10: 128px --space-3: 12px --space-7: 48px --space-4: 16px
  --space-8: 64px;
```

---

# 6. SIGNATURE ELEMENTS

This is the one place we spend real design boldness. Everything else in the
system stays quiet so these two motifs carry the identity.

### 6.1 The Verified Stamp

A circular ink-stamp mark, hand-set at a very slight rotation (2–4°), used
**only** next to something genuinely provable: a real client result, a real
product metric, a completed project. Never decorative, never on marketing
copy.

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
}
/* Slightly irregular border via a subtle SVG filter/noise texture is
   optional — the rotation alone is usually enough to read as "stamped,"
   not printed. */
```

Use for: "Verified client result," "Live product," "Real metric," dates of
delivery. This is the direct visual answer to "we don't exaggerate" — every
stamp is a promise that what's next to it is checkable.

### 6.2 Receipt-Edge Cards

Cards that hold real evidence (screenshots, testimonials, case studies) get
a subtle perforated/torn top edge — like tearing a receipt off a pad —
instead of a glowing top border. This is the load-bearing "unmistakably
Appriyo" visual signature.

```css
.receipt-card {
  background: var(--color-paper-card);
  border: 1px solid var(--color-line);
  border-radius: 4px; /* sharp-ish, document-like — not the soft 14px of v2.0 */
  box-shadow: var(--shadow-card);
  position: relative;
  padding: 28px;
}

/* Perforated top edge, drawn once as a repeating background, not per-card SVG */
.receipt-card::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 8px;
  background-image: radial-gradient(
    circle,
    var(--color-paper) 2px,
    transparent 2.2px
  );
  background-size: 14px 14px;
  background-position: 0 -4px;
}
```

**Rule:** this treatment is reserved for cards showing _real evidence_
(testimonials, product screenshots, stats). Generic service-list cards use a
plain rule-bordered style (below) so the receipt motif keeps its meaning.

### 6.3 Plain Ledger Card (for services, non-evidence content)

```css
.ledger-card {
  background: var(--color-paper-card);
  border: 1px solid var(--color-line);
  border-radius: 6px;
  padding: 24px;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}
.ledger-card:hover {
  border-color: var(--color-line-strong);
  transform: translateY(-2px);
}
```

---

# 7. COMPONENTS

### 7.1 Buttons

**Primary CTA:**

```css
background: var(--color-ink);
color: var(--color-paper);
border-radius: 4px;
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
border: 1.5px solid var(--color-line-strong);
color: var(--color-ink);
border-radius: 4px;
padding: 11.5px 22px;

/* Hover */
border-color: var(--color-ink);
background: var(--color-paper-dim);
```

**Text Link:** underline always visible (not hover-only) at low opacity,
solidifies on hover — reads as "this is clickable" instantly to
non-technical visitors, who don't always hunt for hover states.

```css
color: var(--color-ink);
text-decoration: underline;
text-decoration-color: var(--color-line-strong);
text-underline-offset: 3px;
transition: text-decoration-color 0.2s ease;
:hover {
  text-decoration-color: var(--color-ink);
}
```

### 7.2 Stat / Proof Display

```css
.stat-number {
  font-family: "Bitter";
  font-weight: 900;
  font-size: clamp(32px, 4vw, 48px);
  color: var(--color-ink);
}
.stat-label {
  font-family: "IBM Plex Mono";
  font-size: 12px;
  color: var(--color-ink-muted);
  margin-top: 4px;
}
/* A stamp badge sits beside verified stats — see 6.1 */
```

### 7.3 Icons

- Library: **Phosphor Icons**, `duotone` or `regular` weight (not thin outline —
  thin lines read as "delicate SaaS," we want something a bit sturdier)
- Size: 20–24px inline, 32px in feature moments
- Color: `--color-ink` default. Never colored icon backgrounds/badges.

---

# 8. MOTION SYSTEM

### 8.1 Philosophy

Motion here does less than v2.0, on purpose. A shop owner on a three-year-old
Android phone should never wait on an animation, and restraint itself signals
"we don't need tricks to make our case."

```css
--duration-fast: 150ms;
--duration-normal: 220ms;
--duration-slow: 360ms; /* section reveals only */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
```

### 8.2 What Moves

- Scroll reveal: simple fade + 12px rise, `--duration-slow`, staggered 50ms
  per item in a grid — no more than 4 items staggered before falling back to
  simultaneous (avoid a long cascade that reads as show-off)
- Button/card hover: as specified in Section 7
- **No** hero choreography sequence, no cursor-follow glow, no auto-playing
  anything

### 8.3 Forbidden Motion (kept from v2.0, extended)

❌ Parallax scrolling
❌ Auto-playing carousels
❌ Any glow/light-pulse animation
❌ Anything that delays reading the headline by more than ~300ms
❌ Motion on mobile beyond simple opacity fades (respect `prefers-reduced-motion`)

---

# 9. PAGE STRUCTURE & SECTION INTENT

| Section          | Approach                                                                                                       | Feel                   |
| ---------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------- |
| **Nav**          | Paper background, thin bottom rule, logo + plain-language links                                                | Steady                 |
| **Hero**         | Plain headline in owner's own words + one real product screenshot in a receipt-card, not an abstract graphic   | Immediately clear      |
| **Problem**      | One direct question about their actual daily friction (notebook, missed follow-ups)                            | Recognizable           |
| **Services**     | Ledger-card grid, plain descriptions, no jargon                                                                | Straightforward        |
| **Products**     | Full case-style section per product, real screenshots, receipt-card treatment                                  | Substantive, provable  |
| **Why Appriyo**  | Verified-stamp stats (real numbers only — no invented "99.9% uptime") + team photos/names, not anonymous icons | Personally accountable |
| **Process**      | Numbered ledger steps (numbering justified — it's a real sequence)                                             | Transparent            |
| **Testimonials** | Receipt-card quotes, full name + business name + stamp if verifiable                                           | Credible               |
| **Contact**      | One plain line, minimal form, direct email/phone visible without a form at all                                 | Frictionless           |
| **Footer**       | Plain, mono meta text, real address/hours                                                                      | Grounded               |

### 9.1 Hero Blueprint

```
[very faint radial vignette behind headline only — no dot grid]
[LEDGER LABEL]  "// what we do"
[H1]  Plain sentence in the client's language:
      "We build the system that replaces your notebook."
[SUBTEXT]  One sentence, concrete, no buzzwords
[BUTTONS]  Primary ("See our work") + Secondary ("Talk to us")
[RECEIPT-CARD VISUAL]  An actual screenshot of Amar Repair or Amar Batch,
                        framed in a receipt-card, right-aligned or below on
                        mobile — real product, not a mockup of a fake one
```

---

# 10. RESPONSIVENESS

```css
--bp-sm: 640px --bp-md: 768px --bp-lg: 1024px --bp-xl: 1280px;
```

- Hero stacks vertically; the real product screenshot moves below the fold text, never removed (it's the proof, don't cut it on mobile)
- Ledger-numbered sections collapse to single column, numbering stays (it's information, not decoration)
- Touch targets ≥ 44×44px, body text never below 16px, inputs never below 16px (prevents iOS zoom)
- No horizontal scroll, no hover-dependent information anywhere

---

# 11. PERFORMANCE STANDARDS

| Metric                 | Target                                                                           |
| ---------------------- | -------------------------------------------------------------------------------- |
| Lighthouse Performance | ≥ 90                                                                             |
| LCP                    | ≤ 2.5s                                                                           |
| CLS                    | ≤ 0.1                                                                            |
| Image size             | ≤ 150KB (WebP/AVIF), real screenshots compressed carefully so text stays legible |
| Fonts                  | Preconnect, `display=swap`, only 3 families total                                |
| Animation              | `transform`/`opacity` only, GPU-composited                                       |

This matters more than usual here: a meaningful share of real visitors will
be on mid-range phones over average mobile data in Bangladesh, not fast
office wifi. A slow site directly contradicts "we're the reliable, careful
option."

---

# 12. THEME SYSTEM

**Default: Light (paper).** This is the primary and only fully-designed
experience — unlike v2.0, we are not building a dark mode as a co-equal
theme, because the paper metaphor is the point. If a dark mode is wanted
later for the products themselves (Amar Repair/Amar Batch dashboards), that
is a separate, product-specific decision — not the marketing site.

---

# 13. DESIGN QA CHECKLIST

**Identity**

- [ ] Could not be mistaken for a dark SaaS template or a cream/terracotta AI-default template
- [ ] Every stamp is next to a genuinely checkable claim
- [ ] Ledger numbering only appears where content is a real sequence

**Clarity**

- [ ] A non-technical reader understands each section without re-reading
- [ ] No section requires IT vocabulary to follow the main point

**Evidence**

- [ ] Every stat is real — no invented percentages
- [ ] At least one real product screenshot appears above the fold

**Motion & Performance**

- [ ] No animation delays the headline
- [ ] Works cleanly on a mid-range Android phone on 3G/4G

**Consistency**

- [ ] Colors only from tokens above — no hardcoded hex in components
- [ ] Only 3 typefaces, used per their assigned roles

---

# 🔚 FINAL STATEMENT

> Appriyo's design isn't trying to look like a funded startup.
> It's trying to look like the team that will still answer the phone
> in three years.
>
> Paper, made precise. That's the whole idea — and it's the one thing
> a template can't accidentally produce, because it comes from actually
> knowing who you're building for.

---

_Appriyo Design System v3.0 — "The Ledger System"_
