### Appriyo Website: Services Page Implementation Guide

This document defines the functional, structural, and visual requirements for the Appriyo Services page (`/services`). It is the single source of truth for implementation, aligned with the Appriyo Core Identity, Design System, Content & Messaging Document, and Pages Definition Document. Every decision prioritizes clarity, practicality, and problem-first communication.

---

### 1. 🎯 Purpose & Role

The Services page is a capability and credibility document. Its job is to demonstrate expertise while managing expectations.

- **Problem-Solution Match:** To convince a technically-curious or solution-seeking visitor that Appriyo has the _specific_ capability to solve their operational problem, not just generic "software development" skills.
- **Build Trust Through Focus:** To differentiate Appriyo from "we build anything" agencies by explicitly defining a narrow, deliberate scope of services. This focus signals expertise, not limitation.
- **Earn the Consultation:** To provide enough concrete detail about _how_ Appriyo works so the visitor self-identifies a fit and takes the next step—requesting a conversation.

- **What the User Should Do from the Services Page:**
  1.  Quickly scan the four services and understand what each one means in plain language.
  2.  Recognize their own business pain point in at least one service description.
  3.  Understand _what they get_ from working with Appriyo, not just _what Appriyo does_.
  4.  Click the primary CTA ("Get a Free Consultation") or a service-specific CTA with confidence.

👉 **Functional, not decorative.** This page exists to answer "Can you help me?" as quickly and honestly as possible.

---

### 2. 🧱 Structure & Elements

The page follows a consistent, predictable vertical structure. Each service section is visually distinct but uses the same layout pattern for clarity.

| Section Order | Element                                      | Purpose                                                  |
| ------------- | -------------------------------------------- | -------------------------------------------------------- |
| 1             | Page Header                                  | Sets context and establishes the "focused" positioning.  |
| 2             | Service 1: Business Process Automation       | Detail-oriented, example-rich capability demonstration.  |
| 3             | Service 2: Custom Business Software          | Highlights bespoke problem-solving vs. generic products. |
| 4             | Service 3: AI Integration & Smart Systems    | Grounded, honest AI messaging (no hype).                 |
| 5             | Service 4: Digital Transformation Consulting | Emphasizes process, partnership, and strategic value.    |
| 6             | What We Don't Do                             | Builds trust through transparency and boundary-setting.  |
| 7             | Final CTA Block                              | Universal conversion point for undecided visitors.       |

**Layout Pattern for Each Service Section:**

```
[Service Name - H2]
[One-liner - body-lg, primary color or subtle emphasis]

[What it is - body text, 2-3 paragraphs max]

[Examples / What we do - bullet list OR small grid]
[What you get - bullet list OR small grid]

[CTA link - text link with arrow icon]
```

- **Number of Service Sections:** Exactly 4. No more, no less.
- **No sidebars.** No secondary navigation. No related articles. The page is linear and focused.

❌ **No clutter, no dropdown overload.** Each service is a complete, self-contained section. Do not nest services within tabs, accordions, or dropdowns. The user should see all four options at a scroll.

---

### 3. 💬 Content Rules

All copy on the Services page must strictly follow the Appriyo Content & Messaging Document. The tone is calm, direct, and honest—never hype-driven.

| Element                        | Rule                                                                                                                                                                                                        |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Page Header H1**             | `Four Services. Focused on One Goal.` — No company name in H1. The context provides that.                                                                                                                   |
| **Service Names (H2)**         | Exactly as written: `Business Process Automation`, `Custom Business Software`, `AI Integration & Smart Systems`, `Digital Transformation Consulting`. No creative variations.                               |
| **One-liner**                  | A single sentence that summarizes the service's core value. Must pass the "So What Test" immediately.                                                                                                       |
| **"What it is"**               | A plain-language explanation of the service. Written for a non-technical business owner. No passive voice. No jargon.                                                                                       |
| **"Examples" / "What we do"**  | Concrete, specific items. Each example must be a real-world scenario a small business owner would recognize. No abstract or enterprise-level examples (e.g., no "supply chain optimization").               |
| **"What you get"**             | Outcome-focused benefits, not feature lists. Use 3-4 bullet points maximum. Start each with a verb or clear outcome (e.g., "Fewer manual errors", not "Error reduction capabilities").                      |
| **Service CTAs**               | Text link with arrow (→). Specific to the service: `"Talk to us about automating your workflow →"`, `"Describe your software need →"`, `"Explore AI for your business →"`, `"Start with a consultation →"`. |
| **"What We Don't Do" Heading** | `To Be Clear — Here's What We Don't Take On` — Honest, direct, not defensive. No exclamation points.                                                                                                        |
| **Final CTA Block Heading**    | `Not Sure Which Service You Need?` — Empathetic, lowers friction.                                                                                                                                           |
| **Final CTA Button**           | `"Get a Free Consultation"` — Matches the primary CTA from the page goal. No "Submit" or "Contact Us Today."                                                                                                |

**Vocabulary Constraints (Specific to this page):**

| Allowed                                           | Forbidden                                              |
| ------------------------------------------------- | ------------------------------------------------------ |
| "manual processes", "paper systems"               | "digital transformation journey" (abstract)            |
| "workflow", "operations"                          | "synergy", "paradigm", "leverage" (jargon)             |
| "simple interface", "your team will actually use" | "robust solution", "scalable ecosystem" (vague)        |
| "AI isn't magic" (grounding language)             | "cutting-edge AI", "revolutionary intelligence" (hype) |

❌ **No vague labels like "Solutions+".** No internal terminology. No performance marketing language like "unlock potential" or "supercharge growth."

---

### 4. 🎨 Visual Design Rules (from Appriyo Design System)

The Services page visual design must feel structured, readable, and calm. Service sections should be easy to scan, not visually overwhelming.

- **Page Layout:**
  - **Max Width:** `1200px` (site-container class).
  - **Section Spacing:** `section-spacing` class (`padding: 80px–120px` between top-level sections). Service sections have consistent spacing between them.
  - **Page Header Spacing:** Top padding of `96px`, bottom padding of `64px` (larger than standard sections for entry impact).

- **Page Header:**
  - **Label (`Our Services`):** Small text, uppercase recommended, `--color-accent` or `--color-text-secondary`, `12px–14px`, tracking-wide.
  - **H1 (`Four Services. Focused on One Goal.`):** `36px / 44px` (h2 scale from design system), centered. No decoration.
  - **Description:** Centered, max width `640px`, `--color-text-secondary`, `18px` (body-lg).

- **Service Section Layout (Alternating or Consistent?):**
  - **Decision:** Consistent layout for all four services (no left/right alternation). Each section is a single column with clear visual separation.
  - **Visual Separation:** A thin divider line (`border-top: 1px solid var(--color-border)`) between service sections OR consistent `margin-bottom` + subtle background card for each service.
  - **Recommendation:** Divider line + consistent spacing. Cards may over-complicate the page. Let the content breathe.

- **Typography Within a Service Section:**
  - **Service Name (H2):** `28px / 36px`, `font-weight: 600`, `--color-text-primary`.
  - **One-liner:** `18px`, `font-weight: 500`, `--color-primary` (blue) for subtle emphasis.
  - **"What it is" paragraph:** `16px`, `--color-text-secondary`. Max 3 lines per paragraph.
  - **Lists ("Examples", "What you get"):** `14px–16px`, `--color-text-secondary`. Use checkmark icon (Lucide `Check`) for "What you get" list items.

- **Service CTA (Text Link):**
  - **Style:** No button background. Inline or block-level text link.
  - **Color:** `--color-primary`.
  - **Hover:** Underline or color shift to `--color-primary-dark`. No scale or heavy animation.
  - **Arrow:** Right arrow icon (Lucide `ArrowRight`) immediately following the text.

- **"What We Don't Do" Section:**
  - **Visual Treatment:** Subtle background (`--color-surface`), border (`--color-border`), border-radius `12px`. Padding `24px`. This section is a "footnote" but visually contained.
  - **Heading:** `20px / 28px`, `font-weight: 500`.
  - **Body text:** `14px`, `--color-text-muted`. The honest, direct language does its own work—no visual shouting.

- **Final CTA Block:**
  - **Visual Treatment:** Centered. Large top/bottom padding (`py-20`). Divider line above.
  - **Heading:** `28px / 36px`, `max-width: 640px`, centered.
  - **Body:** `16px`, `--color-text-secondary`, `max-width: 480px`, centered, `margin-bottom: 32px`.
  - **Button:** Primary button styling (background `--color-primary`, white text, `12px 20px`, `border-radius: 8px`). No icon on button.

- **Background & Borders:**
  - **Page Background:** Standard `--color-bg`.
  - **Dividers:** `1px solid var(--color-border)`.

✅ **Do:** Use clean spacing, clear hierarchy, and consistent section structure.
❌ **Don't:** Use card shadows, background gradients, or floating elements on service sections. Keep it grounded.

---

### 5. ⚙️ Behavior & Interaction

Interactions on the Services page are minimal and purposeful. The page is primarily static content.

- **Scroll Behavior:** Standard page scroll. No parallax. No scroll-triggered animations for service sections (or use only extremely subtle fade-up, once per section).
- **Service CTA Hover:**
  - **Text Link:** Text changes to `--color-primary-dark`. Arrow icon translates right by `4px` over `0.2s` ease. Subtle but satisfying.
- **List Item Interaction:** None. Lists are static.
- **In-Page Anchors:** No anchor links within the Services page. The user scrolls linearly.
- **"What We Don't Do" Section:** No interaction. Static.
- **Final CTA Button Hover:**
  - **Style:** Background changes to `--color-primary-dark`.
  - **Animation:** Instant color transition. No scale, no pulse.
- **Loading State:** None. The page is static content.

👉 **Keep: Fast, minimal animation.** The only allowed animation is the arrow translation on the service CTAs and standard fade-up for section entries. No other motion.

---

### 6. 📱 Responsiveness

The Services page adapts cleanly from desktop to mobile, ensuring readability and usability on all devices.

- **Breakpoints (as defined in design system):**
  - `sm: 640px`
  - `md: 768px`
  - `lg: 1024px`
  - `xl: 1280px`

- **Desktop (`>= 768px`):**
  - Page header: Centered, full width within container.
  - Each service section: Single column, max width `800px` (or less), centered or left-aligned within the `1200px` container. Left-aligned text improves readability.
  - Lists ("Examples", "What you get"): Two-column grid if each list has 4+ items. One column if 3 or fewer items.

- **Mobile (`< 768px`):**
  - **Page Header:** Padding reduced. H1 `32px / 40px`.
  - **Service Section Spacing:** `padding: 48px` between sections (reduced from desktop `80px–120px`).
  - **Service Name (H2):** `24px / 32px`.
  - **One-liner:** `16px`.
  - **Lists:** Single column. Reduce left padding.
  - **"What We Don't Do" Section:** Padding reduced to `16px`. Border radius maintained.
  - **Final CTA Block:** Padding reduced. Button is full-width on mobile (`w-full`).

- **Layout Rules:**
  - **No horizontal scroll** at any breakpoint.
  - **No text truncation** on service names or CTAs.
  - **Touch targets:** CTA links and final button must have minimum `44x44` tappable area on mobile. Increase link padding if necessary.
  - **Line lengths:** Max `75 characters` per line on desktop. Max `45 characters` on mobile. Adjust container width or padding to achieve this.

- **Readability Rules:**
  - **Typography scaling:** Use `rem` units. Do not hardcode `px` for font sizes on mobile.
  - **Contrast:** Maintain `4.5:1` ratio for body text on all backgrounds.

✅ **Do:** Stack content vertically, reduce spacing, preserve hierarchy.
❌ **Don't:** Hide service content behind "Read more" accordions on mobile. The user should see all four services fully expanded.

---

### 7. 🚫 Rejection Criteria (Code Review Checklist)

A pull request for the Services page implementation will be **rejected** if it meets any of the following criteria. This ensures alignment with the specification and prevents deviation.

| Category                    | Rejection Criteria                                                                                                                           |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Structure**               | Missing any of the 4 required service sections. Adding a 5th service. Using tabs, accordions, or dropdowns to display service content.       |
| **Content**                 | Copy does not exactly match the `[COPY]` blocks from the spec. Adding hype language ("cutting-edge", "revolutionary") to AI service section. |
| **Visual Design**           | Service sections use card backgrounds, shadows, or gradients. CTA is a button instead of a text link. Page header H1 is not centered.        |
| **Order**                   | Sections appear in the wrong order (e.g., "What We Don't Do" above a service). Service sections are reordered (e.g., AI before Automation).  |
| **CTA Behavior**            | Service CTA is missing the arrow icon (→). Arrow animation is too slow (> 0.2s) or has bounce. Final CTA button has incorrect label.         |
| **Responsiveness**          | Horizontal scroll appears at any breakpoint. Service sections do not stack properly on mobile. touch targets are smaller than 44x44.         |
| **Design System Violation** | Uses undefined colors, font sizes, or spacing. Navbar or footer is missing or modified. Active link style for `/services` is incorrect.      |
| **Missing Section**         | "What We Don't Do" section is omitted. Page feels like it's selling instead of explaining.                                                   |

---

### 🧠 Final Rule

The Services page should feel like a clear, honest catalog of Appriyo's capabilities—not a sales pitch. Every word and every visual element exists to answer one question: _"Can Appriyo solve my specific business problem?"_

If a visitor leaves the Services page understanding **exactly** what Appriyo does (and importantly, what Appriyo does **not** do), the page has succeeded. The design and content should be so clear that the user never has to re-read a sentence or hunt for information. **It is a tool for decision-making, not a performance.**
