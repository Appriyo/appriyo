# Appriyo Website Design System (v1.0)

> **Purpose:**
> Define a consistent, scalable, and identity-aligned design system for Appriyo.
> All UI/UX decisions MUST follow this document.

---

# 1. 🎯 DESIGN PRINCIPLES (NON-NEGOTIABLE)

These come directly from your core identity.

### 1.1 Problem-First Design

- Design must **explain value clearly**, not decorate
- Every section answers: _“What problem do we solve?”_

---

### 1.2 Simplicity Over Visual Noise

- Avoid:
  - Over-animations
  - Fancy gradients everywhere
  - Complex layouts

- Prefer:
  - Clean spacing
  - Clear hierarchy
  - Minimal elements

---

### 1.3 Practical > Trendy

- No trend-chasing UI (glassmorphism abuse, random 3D, etc.)
- UI should feel:
  - Stable
  - Trustworthy
  - Professional

---

### 1.4 Speed = Design

- Performance is part of design
- Avoid heavy assets
- Optimize for:
  - Fast load
  - Instant interaction

---

### 1.5 Clarity Over Creativity

- User should understand within **3 seconds**
- No confusing layouts
- No abstract messaging

---

# 2. 🎨 COLOR SYSTEM

### 2.1 Brand Philosophy for Colors

Appriyo is:

- Reliable → Blue
- Smart → Subtle Purple/Indigo
- Practical → Neutral base
- Efficient → High contrast, readable

---

### 2.2 Primary Colors

```css
--color-primary: #2563eb; /* Blue 600 */
--color-primary-dark: #1e40af; /* Blue 800 */
--color-primary-light: #3b82f6; /* Blue 500 */
```

👉 Use for:

- Buttons
- Links
- Highlights

---

### 2.3 Secondary Accent (AI Feel — Controlled Use)

```css
--color-accent: #7c3aed; /* Violet 600 */
--color-accent-light: #a78bfa;
```

👉 Use ONLY for:

- AI-related sections
- Highlights (sparingly)

❌ Do NOT overuse

---

### 2.4 Neutral Colors (Core UI)

```css
--color-bg: #0b0f19; /* Dark background */
--color-surface: #111827;
--color-border: #1f2937;

--color-text-primary: #f9fafb;
--color-text-secondary: #9ca3af;
--color-text-muted: #6b7280;
```

---

### 2.5 Light Mode (Optional but supported)

```css
--color-bg: #ffffff;
--color-surface: #f9fafb;
--color-text-primary: #111827;
--color-text-secondary: #4b5563;
```

---

### 2.6 Color Rules

✅ Do:

- Use 90% neutral colors
- Use primary color for action

❌ Don’t:

- Use random colors
- Mix too many accents
- Use bright flashy gradients

---

# 3. 🔤 TYPOGRAPHY SYSTEM

### 3.1 Font Selection

Primary Font:

- **Inter** (clean, modern, highly readable)

Fallback:

- system-ui, sans-serif

---

### 3.2 Font Scale

```css
h1: 48px / 56px  (Bold)
h2: 36px / 44px
h3: 28px / 36px
h4: 22px / 30px

body-lg: 18px
body: 16px
body-sm: 14px

caption: 12px
```

---

### 3.3 Font Weight

```css
400 → body
500 → labels
600 → section headings
700 → main headings
```

---

### 3.4 Typography Rules

✅ Use:

- Clear hierarchy
- Short paragraphs
- Strong headings

❌ Avoid:

- Long text blocks
- Fancy fonts
- Center-align large paragraphs

---

# 4. 🧱 LAYOUT SYSTEM

### 4.1 Grid

- Max width: `1200px`
- Padding: `16px – 24px`
- Section spacing: `80px – 120px`

---

### 4.2 Section Structure

Each section MUST follow:

1. Small label (optional)
2. Strong heading
3. Short description
4. Content (cards/list/visual)

---

### 4.3 Spacing Scale

```css
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
```

👉 Never use random spacing

---

# 5. 🧩 COMPONENT DESIGN

### 5.1 Buttons

Primary Button:

- Background: Primary color
- Text: White
- Radius: 8px
- Padding: 12px 20px

Secondary Button:

- Border only
- Neutral text

Hover:

- Slight darken (no crazy animation)

---

### 5.2 Cards

- Background: surface color
- Border: subtle
- Radius: 12px
- Padding: 20–24px

👉 Cards must feel:

- Clean
- Structured
- Readable

---

### 5.3 Icons

- Style: Outline or minimal filled
- No random icon packs
- Consistent stroke width

---

# 6. ✨ MOTION & INTERACTION

### 6.1 Animation Philosophy

- Subtle
- Fast
- Purposeful

---

### 6.2 Allowed Animations

- Fade-in (0.3s)
- Slight translate (y: 10px → 0)
- Hover scale (1.02 max)

---

### 6.3 NOT Allowed

❌ Parallax heavy effects
❌ Long animations
❌ Distracting motion

---

# 7. 🌗 THEME

### Default: DARK FIRST

Why:

- Feels modern
- Fits tech/AI identity
- Reduces visual noise

Light mode:

- Supported but secondary

---

# 8. 🧠 CONTENT + DESIGN CONNECTION

Design must support messaging:

| Section     | Design Focus               |
|-------------|----------------------------|
| Hero        | Clarity + strong statement |
| Services    | Structured cards           |
| Solutions   | Problem → Outcome          |
| Why Appriyo | Trust + simplicity         |
| Products    | Real use-case feel         |
| Contact     | Minimal friction           |

---

# 9. 📱 RESPONSIVENESS

Breakpoints:

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

Rules:

- Mobile-first
- No horizontal scroll
- Stack content vertically

---

# 10. ⚡ PERFORMANCE RULES

- No heavy images (>200kb preferred)
- Lazy load images
- Avoid unnecessary libraries
- Keep Lighthouse score high

---

# 11. 🧭 VISUAL IDENTITY SUMMARY

Appriyo design should feel:

- Clean
- Calm
- Professional
- Smart
- Practical
- Reliable

NOT:

- Flashy
- Over-designed
- Trendy
- Playful
- Noisy

---

# 12. 🚫 DESIGN REJECTION RULE

Reject any design if:

- It looks like a generic agency site
- It prioritizes visuals over clarity
- It adds complexity without value
- It does not reflect “problem-first”

---

# 13. 🧱 FUTURE SCALABILITY

This system must support:

- SaaS dashboards
- Product pages
- Admin panels
- Mobile apps

👉 So keep everything:

- Reusable
- Consistent
- Predictable

---

# 🔚 FINAL PRINCIPLE

> **Design is not decoration.
> Design is how Appriyo communicates clarity, trust, and simplicity.**

---
