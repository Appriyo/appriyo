# Appriyo Website Design System (v2.0)
### *"Precision That Moves"*

> **Purpose:**
> Define a living, identity-driven design system for Appriyo that commands attention,
> communicates intelligence, and leaves every visitor with a clear emotion:
> *"This company knows exactly what they're doing."*

---

# 0. ⚡ THE BIG IDEA

Appriyo's design language is built around one concept:

## **Structured Energy**

Most tech companies choose between:
- Boring-but-trustworthy *(enterprise blues, static grids)*
- Exciting-but-chaotic *(rainbow gradients, endless animations)*

Appriyo chooses neither. We choose **controlled intensity** —
a design that feels **alive inside strict order**.

Think: a precision instrument. A heartbeat monitor. Circuit traces.
**Everything calculated. Everything intentional. Nothing wasted.**

---

# 1. 🎯 DESIGN PHILOSOPHY

### 1.1 The 3-Second Test

Every page, section, and component must pass this:

> A visitor reads the headline in 3 seconds and knows exactly what Appriyo does and why it matters.

If they can't — the design failed. No exceptions.

---

### 1.2 Alive, Not Loud

Animation and motion exist to **guide attention**, not entertain.

- Motion reveals structure
- Motion rewards curiosity
- Motion communicates intelligence

**One perfectly timed reveal > twenty random animations**

---

### 1.3 Density Done Right

Appriyo is a smart company. Smart companies don't over-explain.

- Show depth through **visual layering**, not word count
- Pack meaning into **small spaces** without crowding
- Every pixel has a job

---

### 1.4 Dark Canvas, Bright Signal

The dark background is not a trend. It is a **deliberate choice**:

- Makes primary blue luminous, not flat
- Makes white text crisp, not washed
- Signals: *focus here, this matters*

---

### 1.5 Rejection Criteria

Reject any design that:

❌ Looks like a template you've seen before
❌ Could belong to a different company
❌ Has motion that doesn't serve content
❌ Makes the user work to understand the value
❌ Prioritizes "cool" over "clear"

---

# 2. 🎨 COLOR SYSTEM

### 2.1 Brand Philosophy

| Attribute | Color Signal |
|-----------|-------------|
| Reliable  | Deep Blue |
| Intelligent | Electric Cyan accent |
| Grounded | Near-black surface |
| Alive | Bright signal moments |

The palette is built on **contrast math** — every combination meets WCAG AA minimum.

---

### 2.2 Core Palette

```css
/* === FOUNDATION === */
--color-void:       #060912;   /* Deepest background — almost black-blue */
--color-bg:         #0b0f1a;   /* Primary background */
--color-surface:    #111827;   /* Card surfaces */
--color-surface-2:  #1a2233;   /* Elevated surfaces */
--color-border:     #1e2d45;   /* Subtle borders */
--color-border-glow:#2a4a7f40; /* Glowing border (with alpha) */

/* === PRIMARY — Electric Blue === */
--color-primary:       #2563eb;  /* Core brand blue */
--color-primary-bright:#3b82f6;  /* Hover / highlight */
--color-primary-glow:  #2563eb30;/* Glow layer (alpha) */

/* === SIGNAL — Cyan === */
/* Use ONLY for AI sections, live moments, highlights */
--color-signal:        #06b6d4;  /* Cyan 500 */
--color-signal-dim:    #0891b2;  /* Cyan 600 */
--color-signal-glow:   #06b6d420;/* Glow (alpha) */

/* === TEXT === */
--color-text-primary:   #f0f4ff;  /* Near-white with blue tint */
--color-text-secondary: #8fa3c0;  /* Cool grey */
--color-text-muted:     #4d6480;  /* Subdued */
--color-text-inverse:   #0b0f1a;  /* On light backgrounds */

/* === UTILITY === */
--color-success:  #10b981;
--color-warning:  #f59e0b;
--color-error:    #ef4444;
```

---

### 2.3 Glow System

Appriyo uses **controlled glow effects** — not decoration, but emphasis.

```css
/* Use these as box-shadow or filter:drop-shadow values */

--glow-primary: 0 0 24px #2563eb40, 0 0 48px #2563eb18;
--glow-signal:  0 0 20px #06b6d430, 0 0 40px #06b6d415;
--glow-text:    0 0 12px #3b82f660;

/* Applied ONLY on:
   - Hero headline
   - Active CTA button
   - AI-section highlights
   - Interactive hover moments
*/
```

---

### 2.4 Gradient Language

Gradients are **directional and purposeful**, not decorative.

```css
/* Hero mesh — background layer, very subtle */
--gradient-hero: radial-gradient(
  ellipse 80% 60% at 50% -10%,
  #1e3a6e22 0%,
  transparent 70%
);

/* Section accent — top edge glow */
--gradient-section-edge: linear-gradient(
  90deg,
  transparent 0%,
  #2563eb20 30%,
  #06b6d415 70%,
  transparent 100%
);

/* Card depth */
--gradient-card: linear-gradient(
  145deg,
  #1a223380 0%,
  #111827 100%
);

/* CTA button */
--gradient-cta: linear-gradient(
  135deg,
  #2563eb 0%,
  #1d4ed8 50%,
  #1e3a8a 100%
);
```

---

### 2.5 Color Usage Rules

| Context | Color |
|---------|-------|
| Page backgrounds | `--color-void` / `--color-bg` |
| Cards, panels | `--color-surface` |
| Primary actions | `--color-primary` |
| AI/live features | `--color-signal` (sparingly) |
| Body text | `--color-text-primary` |
| Meta labels | `--color-text-muted` |
| Borders | `--color-border` |

✅ 80% of the UI is dark neutrals
✅ 15% is primary blue
✅ 5% is signal cyan — saved for maximum impact

---

# 3. 🔤 TYPOGRAPHY SYSTEM

### 3.1 Font Stack

| Role | Font | Why |
|------|------|-----|
| Display / Hero | **Syne** | Geometric, architectural, memorable — feels engineered |
| Headings | **DM Sans** | Clean, confident, modern — professional without being cold |
| Body | **IBM Plex Sans** | Technical clarity, high readability, a quiet nod to precision |
| Mono / Code | **JetBrains Mono** | For code snippets, terminal UI, data — instantly credible |

```html
<!-- Import via Google Fonts -->
<link href="https://fonts.googleapis.com/css2?
  family=Syne:wght@700;800&
  family=DM+Sans:wght@400;500;600&
  family=IBM+Plex+Sans:wght@400;500&
  family=JetBrains+Mono:wght@400;500&
  display=swap" rel="stylesheet">
```

---

### 3.2 Type Scale

```css
/* === DISPLAY === */
--text-display-xl: clamp(52px, 7vw, 88px);  /* Hero headline */
--text-display-lg: clamp(40px, 5vw, 64px);  /* Section hero */

/* === HEADINGS === */
--text-h1: clamp(36px, 4vw, 52px);
--text-h2: clamp(28px, 3.5vw, 40px);
--text-h3: clamp(22px, 2.5vw, 30px);
--text-h4: 20px;

/* === BODY === */
--text-body-lg: 18px;
--text-body:    16px;
--text-body-sm: 14px;

/* === UTILITY === */
--text-label:   12px;  /* Uppercase tracking labels */
--text-mono:    14px;  /* Code / terminal */
```

---

### 3.3 Font Weights

```css
--weight-regular:   400;
--weight-medium:    500;
--weight-semibold:  600;
--weight-bold:      700;
--weight-black:     800;  /* Display only */
```

---

### 3.4 Special Typography Rules

**Hero Headlines:**
- Font: `Syne`, weight `800`
- Letter-spacing: `-0.02em`
- Line-height: `1.05`
- Effect: Subtle `--glow-text` on hover or animated in

**Section Labels (above headings):**
```css
font-family: 'JetBrains Mono';
font-size: 12px;
letter-spacing: 0.15em;
text-transform: uppercase;
color: var(--color-signal);
```
These small mono labels create an **engineering cadence** — precise, systematic.

**Never:**
- Center-align paragraphs longer than 2 lines on desktop
- Use Syne for body text
- Mix more than 2 font families in one section

---

# 4. 🧱 LAYOUT SYSTEM

### 4.1 Grid

```css
--grid-max:      1200px;
--grid-padding:  clamp(16px, 4vw, 40px);
--grid-gap:      24px;

/* Sections */
--section-gap:   clamp(80px, 12vw, 140px);
```

---

### 4.2 The Asymmetry Principle

Not every section is centered. Appriyo uses **intentional asymmetry**:

- Hero: Large left text, right-side visual artifact
- Services: Offset grid — 5-col text, 7-col card grid
- Why Appriyo: Left-pinned stat numbers, right flowing text
- Products: Full-bleed dark card with pinned left label

This creates **visual rhythm** — the page breathes.

---

### 4.3 Section Anatomy

Every section follows this skeleton:

```
[SECTION]
  ├── [EDGE GLOW LINE] — 1px top border with gradient glow
  ├── [LABEL] — Mono, cyan, ALL CAPS
  ├── [HEADING] — Syne, bold, large
  ├── [SUBTEXT] — DM Sans, muted, max 2 lines
  └── [CONTENT BLOCK]
        ├── Cards / Grid / Visual
        └── Optional CTA
```

---

### 4.4 Spacing Scale

```css
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-5:   24px
--space-6:   32px
--space-7:   48px
--space-8:   64px
--space-9:   96px
--space-10:  128px
```

Spacing is **never arbitrary**. Every gap is a step on this scale.

---

# 5. 🧩 COMPONENT DESIGN

### 5.1 Buttons

**Primary CTA:**
```css
background: var(--gradient-cta);
color: white;
border-radius: 8px;
padding: 13px 24px;
font: 500 15px 'DM Sans';
letter-spacing: 0.01em;
border: 1px solid #3b82f630;
box-shadow: var(--glow-primary);
transition: all 0.2s ease;

/* Hover: */
transform: translateY(-1px);
box-shadow: 0 0 32px #2563eb50, 0 8px 24px #00000040;
```

**Ghost / Secondary:**
```css
background: transparent;
border: 1px solid var(--color-border);
color: var(--color-text-secondary);
border-radius: 8px;
padding: 12px 22px;

/* Hover: */
border-color: var(--color-primary);
color: var(--color-text-primary);
```

**Text Link:**
```css
color: var(--color-primary-bright);
text-decoration: none;
position: relative;

/* Underline slides in on hover — CSS only */
::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0;
  width: 0; height: 1px;
  background: var(--color-primary-bright);
  transition: width 0.3s ease;
}
:hover::after { width: 100%; }
```

---

### 5.2 Cards

**Standard Card:**
```css
background: var(--gradient-card);
border: 1px solid var(--color-border);
border-radius: 14px;
padding: 28px;
position: relative;
overflow: hidden;
transition: border-color 0.3s ease, transform 0.3s ease;

/* Top edge light line — signature Appriyo detail */
::before {
  content: '';
  position: absolute;
  top: 0; left: 10%; right: 10%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #2563eb60, transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Hover: */
border-color: #2563eb50;
transform: translateY(-3px);
::before { opacity: 1; }
```

**Feature / Hero Card:**
- Larger padding: `36px 40px`
- Optional: faint dot-grid pattern background (`background-image: radial-gradient`)
- Icon: 40×40px, outlined, primary-colored
- Stat number: Display font, large, glowing

---

### 5.3 The Dot Grid Texture

This is Appriyo's signature background texture — subtle, technical, alive.

```css
/* Applied to hero and select sections */
background-image: radial-gradient(
  circle,
  #1e3a6e18 1px,
  transparent 1px
);
background-size: 28px 28px;
```

Layered under the main content. Creates **depth without noise**.

---

### 5.4 The Edge Line

Every section break has a 1px glowing line:

```css
.section-edge {
  width: 100%;
  height: 1px;
  background: var(--gradient-section-edge);
  margin-bottom: var(--space-9);
}
```

This creates a **circuit board aesthetic** — sections feel connected and ordered.

---

### 5.5 Icons

- Library: **Phosphor Icons** (outline style, consistent stroke)
- Size: 20–24px in cards, 32–40px in feature sections
- Color: `var(--color-primary-bright)` default; `var(--color-signal)` for AI features
- Never: Colored icon backgrounds unless it's a hero feature card

---

### 5.6 Data / Stats Display

When showing numbers that prove value:

```css
.stat-number {
  font-family: 'Syne';
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 800;
  color: var(--color-text-primary);
  text-shadow: var(--glow-text);
  letter-spacing: -0.03em;
}

.stat-label {
  font-family: 'JetBrains Mono';
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-top: 4px;
}
```

---

# 6. ✨ MOTION SYSTEM

### 6.1 Motion Philosophy

> Motion is **information design**. It shows relationships, reveals structure, and confirms actions.

Every animation has a reason. If you cannot explain why it moves — remove it.

---

### 6.2 Timing Tokens

```css
--duration-instant:  80ms;   /* State changes (toggle, check) */
--duration-fast:     160ms;  /* Hover, micro interactions */
--duration-normal:   280ms;  /* Card reveals, button states */
--duration-slow:     480ms;  /* Section entries */
--duration-dramatic: 700ms;  /* Hero entrance only */

--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
--ease-enter:    cubic-bezier(0, 0, 0.2, 1);
--ease-exit:     cubic-bezier(0.4, 0, 1, 1);
--ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1); /* Slight overshoot */
```

---

### 6.3 Scroll-Triggered Entries

Elements enter as they scroll into view:

```css
/* Initial state (set via JS IntersectionObserver) */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity var(--duration-slow) var(--ease-enter),
              transform var(--duration-slow) var(--ease-enter);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Stagger:** Cards in a grid get `transition-delay` increments of `60ms`.
This creates a **cascade effect** — the grid assembles before your eyes.

---

### 6.4 Hero Entrance Sequence

The hero section runs a **choreographed entrance**:

```
0ms    → Label fades in (opacity 0→1, translateY 10px→0)
120ms  → Headline word 1
200ms  → Headline word 2
280ms  → Subheadline
420ms  → CTA buttons
600ms  → Hero visual / artifact
800ms  → Background dot-grid fades in
```

One sequence. One moment. Maximum impact.

---

### 6.5 Hover States — The Appriyo Signature

**Card hover:** `translateY(-3px)` + border glow + top edge line reveals
**Button hover:** `translateY(-1px)` + glow intensifies
**Nav link hover:** Color shift + sliding underline
**Stat hover:** Number glows brighter

All transitions: `var(--duration-normal)` with `var(--ease-standard)`

---

### 6.6 The Cursor Pulse (Optional Enhancement)

For the hero section, a subtle glowing ring follows the cursor:

```css
.cursor-glow {
  width: 300px; height: 300px;
  background: radial-gradient(circle, #2563eb08 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  position: fixed;
  transform: translate(-50%, -50%);
  transition: top 0.1s, left 0.1s;
  z-index: 0;
}
```

This makes the **page feel alive** — it responds to presence.

---

### 6.7 Forbidden Motion

❌ Parallax scrolling (performance + distraction)
❌ Auto-playing carousels
❌ Spin/bounce animations on content elements
❌ Transitions longer than `700ms` (except page load)
❌ Animation that repeats without user trigger
❌ Hover effects on mobile (use `:focus-visible` instead)

---

# 7. 🌐 PAGE STRUCTURE

### 7.1 Section Map & Design Intent

| Section | Design Approach | Feel |
|---------|----------------|------|
| **Nav** | Blurred backdrop, edge-bottom line, logo + links + CTA | Precise |
| **Hero** | Full viewport, dot grid, asymmetric layout, large headline | Striking |
| **Problem Statement** | Dark panel, single bold question, minimal | Provocative |
| **Services** | Offset 2-col grid, icon cards with top-edge glow | Structured |
| **Solutions** | Problem → Arrow → Outcome, horizontal flow cards | Clear |
| **Why Appriyo** | Large stat numbers left, text right, thin dividers | Confident |
| **Products** | Full-width dark card, product name large, use-case list | Substantive |
| **Testimonials** | Minimal quote cards, no stars (we're not a consumer app) | Credible |
| **Contact** | Dark, minimal, one strong line + form | Frictionless |
| **Footer** | Simple, no clutter, mono text, subtle links | Clean |

---

### 7.2 Navigation

```
[LOGO]                    [Links]             [CTA Button]
Appriyo                   Services  Products   Get Started →
                          Solutions  About
```

```css
.nav {
  position: fixed; top: 0; width: 100%;
  backdrop-filter: blur(16px) saturate(180%);
  background: #0b0f1a90;
  border-bottom: 1px solid var(--color-border);
  z-index: 100;
}
```

On scroll: `border-bottom` transitions to glow variant.

---

### 7.3 Hero Section Blueprint

```
[dot grid bg]
[cursor glow]
[hero content]
  ├── [LABEL] ── "// software solutions" in mono cyan
  ├── [H1] ── "We Build Software
               That Solves Real Problems"
  ├── [SUBTEXT] ── 1–2 lines, muted, max 60 chars
  ├── [BUTTONS] ── Primary + Ghost
  └── [VISUAL] ── Abstract circuit / dashboard preview / code artifact
                  (right-side, 40% width, subtle animation)
```

The visual is **not a hero image**. It's a **live UI artifact** — a dark panel showing a component preview, animated stats, or a minimal dashboard mockup. This signals: *we build actual products.*

---

# 8. 📱 RESPONSIVENESS

### 8.1 Breakpoints

```css
--bp-sm:  640px;
--bp-md:  768px;
--bp-lg:  1024px;
--bp-xl:  1280px;
```

### 8.2 Mobile Adaptations

- Hero: Stacks vertically; visual artifact hidden below fold or replaced with stat grid
- Asymmetric layouts: Collapse to single column
- Dot grid: Reduce opacity (20% → 10%) for performance
- Glow effects: Reduce intensity by 50% (less powerful on mobile displays)
- Cursor glow: Disabled entirely
- Section gap: `clamp(60px, 10vw, 120px)`

### 8.3 Mobile-First Rules

- Build mobile → scale up
- No horizontal scroll
- Touch targets minimum 44×44px
- `font-size` minimum `16px` for inputs (prevents iOS zoom)

---

# 9. 📐 VISUAL IDENTITY ELEMENTS

### 9.1 The Appriyo Mark

The logo should feel: **geometric, grid-aligned, modern.**

In dark mode: White wordmark + primary blue symbol
In light mode: Dark wordmark + primary blue symbol
Never: Colorful logos, drop shadows, outlines on symbol

---

### 9.2 Signature Visual Language

These elements define Appriyo's visual fingerprint:

| Element | Description |
|---------|-------------|
| **Dot Grid** | Subtle repeating grid on hero/dark sections |
| **Top Edge Line** | 1px gradient glow on card tops |
| **Mono Labels** | Small caps, cyan, above every heading |
| **Stat Numbers** | Syne 800, large, with text-glow |
| **Circuit Lines** | Thin SVG lines connecting sections (decorative, optional) |
| **Section Edge** | Gradient glowing 1px dividers between sections |

These are the **recurring motifs** that make the site feel **designed**, not assembled.

---

### 9.3 Illustration / Visuals Approach

No stock photos. No people photos. No abstract blobs.

✅ Use:
- **UI mockups** — real interface previews
- **Data visualizations** — simple charts in brand colors
- **Abstract geometric** — circuit-like, grid-aligned SVGs
- **Terminal / code snippets** — styled in JetBrains Mono
- **Icon compositions** — arranged to tell a story

All visuals should feel like they came from **inside the product**, not from a stock library.

---

# 10. 🎭 SECTION-BY-SECTION DESIGN NOTES

### Hero
- **Emotion target:** "I trust this company immediately"
- Background: Dot grid + radial blue glow from top
- Headline: Syne 800, `clamp(52px, 7vw, 88px)`, near-white
- One strong subline: What Appriyo actually does
- Right artifact: Dark panel UI mockup (subtle float animation)

### Problem Statement
- **Emotion target:** "They understand my pain"
- Full-width dark panel (`--color-void`)
- Single large question: `"Still patching broken tools instead of building?"` — Syne, 40px+
- No icons. No bullets. Just the question and a breath of space.

### Services
- **Emotion target:** "They cover everything I need"
- Grid of 4–6 cards
- Each card: Icon + Service name + 1-line description
- Cards stagger-animate in on scroll

### Why Appriyo
- **Emotion target:** "These numbers prove it"
- 3 large stats on left (clients, delivery rate, years)
- Short proof paragraph on right
- Thin vertical divider between columns

### Products / Solutions
- **Emotion target:** "This is built for real use"
- Product name large (Syne)
- Real use-case listed as mono-text bullet points
- Dark card with signal-color accent

### Contact
- **Emotion target:** "This is easy and safe"
- One line: `"Let's talk about what you're building"`
- Minimal form: Name, Email, Message
- Primary CTA button with glow
- No excess fields

---

# 11. ⚡ PERFORMANCE STANDARDS

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| LCP (Largest Contentful Paint) | ≤ 2.5s |
| CLS (Cumulative Layout Shift) | ≤ 0.1 |
| FID / INP | ≤ 200ms |
| Image size | ≤ 150KB (WebP/AVIF) |
| Font load | Preconnect + `display=swap` |
| Animation | GPU-composited (`transform`, `opacity`) only |

**Rules:**
- All images: lazy-loaded, WebP format, `srcset` for responsive
- No CSS libraries beyond what's needed
- Animations: use `transform` and `opacity` ONLY (GPU-composited)
- No layout-triggering properties in animation (`width`, `height`, `top`, `left`)

---

# 12. 🌗 THEME SYSTEM

### Default: Dark

This is Appriyo's primary and canonical experience.

### Light Mode (Supported)

```css
[data-theme="light"] {
  --color-bg:              #f8fafc;
  --color-surface:         #ffffff;
  --color-surface-2:       #f1f5f9;
  --color-border:          #e2e8f0;
  --color-text-primary:    #0f172a;
  --color-text-secondary:  #475569;
  --color-text-muted:      #94a3b8;

  /* Glows become shadows in light mode */
  --glow-primary: 0 4px 20px #2563eb25;
  --glow-signal:  0 4px 16px #06b6d420;
}
```

In light mode: dot grid is faint grey, no cyan glows, cards use soft drop shadows.

---

# 13. ✅ DESIGN QA CHECKLIST

Before any page ships, verify:

**Identity**
- [ ] Feels unmistakably Appriyo (not a template)
- [ ] Dark with precise accents (not randomly colorful)
- [ ] Every section has mono label + Syne heading

**Clarity**
- [ ] Hero message passes 3-second test
- [ ] No section requires re-reading to understand

**Motion**
- [ ] All animations serve content
- [ ] No animation exceeds 700ms
- [ ] Scroll reveals are staggered, not simultaneous

**Performance**
- [ ] No images > 150KB
- [ ] Animations use only `transform` / `opacity`
- [ ] Fonts are preloaded

**Responsiveness**
- [ ] Mobile layout tested at 375px
- [ ] No horizontal scroll
- [ ] Touch targets ≥ 44px

**Consistency**
- [ ] Spacing uses only scale tokens
- [ ] Colors use only CSS variables (no hardcoded hex in components)
- [ ] Border radius: 8px (buttons), 12–14px (cards), never random

---

# 🔚 FINAL STATEMENT

> Appriyo's design is not decoration.
> It is not trend-following.
> It is not safe.
>
> It is **structured energy** — a system that feels alive inside strict order.
> It makes clients feel that they have found something
> precise, trustworthy, and genuinely capable.
>
> Every pixel, every millisecond of animation, every word of copy
> answers the same question: *"Why Appriyo?"*
>
> The design should answer it before the visitor even reads the headline.

---

*Appriyo Design System v2.0 — "Precision That Moves"*