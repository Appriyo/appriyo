### Appriyo Website: Navbar Implementation Guide

This document defines the functional, structural, and visual requirements for the Appriyo website navbar. It is the single source of truth for implementation, aligned with the Appriyo Core Identity, Design System, and Content & Messaging Document. Every decision prioritizes clarity, purpose, and effortless usability.

---

### 1. 🎯 Purpose & Role

The navbar is the primary navigation anchor and brand anchor. Its job is to provide structural clarity, not to impress.

- **Navigation Clarity:** To allow a busy, non-technical business owner to instantly understand the site's structure and find key information (Services, Solutions, Products, About, Contact) without thought or friction.
- **Brand Presence:** To anchor every page with the Appriyo logo, reinforcing a calm, professional, and reliable identity without being distracting.
- **Quick Access to CTA:** To make the primary conversion path—contacting Appriyo—visible and accessible from any point on the website without searching.

- **What the User Should Do from the Navbar:**
  1.  Recognize they are on the official Appriyo website.
  2.  Understand the main sections of the site at a single glance.
  3.  Effortlessly navigate to the information they seek.
  4.  Immediately see and access the primary call-to-action: "Contact Us".

👉 **Functional, not decorative.** The navbar's value is in its structure and utility, not its visual embellishment.

### 2. 🧱 Structure & Elements

The layout follows a standard, predictable, and functional desktop pattern. For mobile, this pattern collapses into a hamburger menu.

- **Logo (Left):** The Appriyo logo is positioned at the far left of the navbar. It serves as a persistent link back to the homepage (`/`).

- **Navigation Links (Center/Right):** A maximum of 5 high-priority links.
  - **Link Labels (Simple, non-technical):** `Services`, `Solutions`, `Products`, `About`
  - **Rule:** These labels match the page `/` route names exactly for clarity. No dropdowns. No secondary links.

- **CTA Button (Right):** The primary action is visually distinct.
  - **Label:** `Contact` (Links to `/contact`)

❌ **No clutter, no dropdown overload.** A dropdown on "Services" or "Products" introduces choice and cognitive load, violating the "effortless to use" rule. All secondary information belongs on the respective landing pages.

### 3. 💬 Content Rules

All text within the navbar must adhere strictly to the Appriyo Content & Messaging Document.

- **Link Naming Style:** Simple, direct, non-technical labels as defined above (`Services`, `Solutions`, `Products`, `About`, `Contact`).
- **CTA Text:** `Contact`
  - **Rule:** This is specific and action-oriented. It tells the user the exact destination. It avoids vague labels like "Get Started", which is less direct for a consulting-focused company, or "Solutions+", which is non-standard and confusing.
- **Logo Text (if present as text):** `Appriyo` (no tagline, no strapline).

**Final Rule:** All text must be easily readable at a glance by a non-technical business owner who is skeptical and busy. No jargon, no internal labels.

### 4. 🎨 Visual Design Rules (from Appriyo Design System)

The navbar’s visual design is strictly governed by the Appriyo Design System to feel clean, calm, and professional.

- **Background:**
  - **On Load (Top of Page):** Transparent.
  - **On Scroll (Sticky State):** Solid background (`--color-surface: #111827`) with a subtle 12px blur backdrop. This provides text contrast over any content while scrolling.
- **Height:** `64px` on desktop. (Consistent with `64–72px` rule).
- **Typography:**
  - **Font:** Inter.
  - **Weight:** 500 for nav links.
  - **Size:** `16px` (body).
- **Active Link Style:** The link for the current page is visually distinguished from inactive links using a simple, clean indicator.
  - **Style:** `--color-primary: #2563eb` (blue) applied to the link text.
  - **No heavy underlines or background pills.**
- **CTA Button Style:**
  - **Type:** Primary Button.
  - **Background:** `--color-primary: #2563eb`.
  - **Text:** White, `16px`, weight 500.
  - **Radius:** `8px`.
  - **Padding:** `8px 16px` (slightly smaller than a standard button to fit the navbar, but visually consistent).
- **Sticky Behavior:** **Sticky.** The navbar is fixed to the top of the viewport (`position: sticky; top: 0;`). This provides constant access to navigation and the primary CTA.
- **Border or Shadow on Scroll:**
  - **State:** When sticky background is applied, a `1px` bottom border is added.
  - **Style:** `border-bottom: 1px solid var(--color-border, #1f2937);`. This provides a clean, subtle visual separation from the page content.

### 5. ⚙️ Behavior & Interaction

Interactions must feel fast, minimal, and purposeful, aligning with the "practical over theoretical" design principle.

- **Sticky Behavior:** The navbar becomes sticky immediately upon any vertical scroll. The transition (transparent → solid background + border) should be instant (no fade animation) to avoid visual delay and feel responsive.
- **Hover States (Nav Links):** A simple, fast visual change to indicate interactivity.
  - **Style:** Change text color to `--color-primary: #2563eb`.
  - **Animation:** Instant color transition. No underlines that slide in, no background changes.
- **Hover States (CTA Button):** Slight darkening of the background color.
  - **Style:** Background changes to `--color-primary-dark: #1e40af`.
  - **Animation:** Instant. No scale or transform effects.
- **Active State (Current Page Highlight):** The nav link matching the current page route has its text color set to `--color-primary: #2563eb`. This state persists as long as the user is on that page.
- **Mobile Menu Behavior (`< 768px`):**
  - **Default State:** Standard hamburger icon (☰) replaces the nav links. The logo remains on the left, and the "Contact" CTA button remains visible on the right.
  - **Open State (Drawer):** Clicking the hamburger icon opens a slide-in drawer from the right side of the screen.
  - **Content:** The drawer contains the full nav links (`Services`, `Solutions`, `Products`, `About`, `Contact`) stacked vertically. The "Contact" button may be restyled as a primary button within the drawer for consistency.
  - **Dismissal:** The drawer closes when the user clicks a link, clicks the hamburger icon again, or taps the overlay backdrop.

👉 **Keep: Fast, minimal animation.** The drawer slides in over `0.2s` (fast, purposeful). No complex entry animations for nav links. The goal is speed and utility.

### 6. 📱 Responsiveness

The navbar adapts cleanly to all screen sizes, prioritizing the mobile user experience without compromising the desktop clarity.

- **Desktop (`>= 768px`):** Full navbar with logo, center/right-aligned navigation links (`Services`, `Solutions`, `Products`, `About`), and the "Contact" CTA button.
  - **Constraint:** The nav links and CTA button must fit within the `1200px` max-width container without wrapping or overflowing.

- **Mobile (`< 768px`):** The navigation links (`Services`, `Solutions`, `Products`, `About`) collapse into a hamburger menu. The logo and the CTA button (`Contact`) remain visible at all times.
  - **Rule:** The "Contact" button is **never** hidden inside the hamburger menu. It remains as a persistent, tappable element in the navbar for direct access to conversion.

- **Mobile Menu Rules (Drawer):**
  - **Type:** Slide-in drawer from the right.
  - **Spacing:** Menu items have generous vertical padding (e.g., `py-4`) for easy tapping.
  - **Clarity:** The "Contact" link/button inside the menu is clearly visible, using the same primary button styling or a prominent text link.
  - **Backdrop:** The drawer has a semi-transparent dark overlay behind it to focus attention on the menu.

### 7. 🚫 Rejection Criteria (Code Review Checklist)

A pull request for the navbar implementation will be **rejected** if it meets any of the following criteria. This ensures alignment and prevents deviation from the specification.

- **Too many links:** Includes more than the 5 defined links (`Services`, `Solutions`, `Products`, `About`, `Contact`).
- **Looks crowded:** The visual layout on any viewport (desktop or mobile) is cramped, items wrap to a second line, or padding is inconsistent.
- **Confusing labels:** Any link label is changed from the defined text (e.g., "Our Services", "What We Do", "Solutions+").
- **Heavy animations:** The sticky transition, hover states, or mobile menu involve long fade times, bounce effects, parallax, or any animation that feels slow or distracting.
- **Looks like a template SaaS site:** The design uses generic stock photos in the background, unnecessary gradients, or visual elements that prioritize trendiness over clean, calm, professional utility.

---

### 🧠 Final Rule

The Appriyo navbar should feel invisible — not because it’s weak or hidden, but because it is so structured, clear, and predictable that the user never has to think about it. It is a tool that facilitates action, not an object of decoration. Its success is measured by how quickly a user finds what they need and leaves the navbar behind.
