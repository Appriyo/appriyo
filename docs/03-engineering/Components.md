# 🧩 APPRIYO WEBSITE — COMPONENT LIBRARY DOCUMENT (v1.0)

> **Purpose:**
> Defines every reusable UI component on the Appriyo website.
> For each component: what it is, what props it accepts, when to use it, when NOT to use it, and the exact implementation.
> Prevents inconsistent UI, duplicated code, and components invented on the fly during development.

> **Aligned with:** `architecture.md` · `design.md` · `coding_guidelines.md`
> **Component locations:** `src/components/ui/`, `src/components/layout/`, `src/components/common/`

---

# HOW TO READ THIS DOCUMENT

Each component entry contains:

- **Purpose** — what problem this component solves
- **Location** — exact file path
- **Props** — name, type, required/optional, default, description
- **Variants** — visual variations supported
- **Usage** — when to use it
- **Do Not Use When** — prevents misuse
- **Implementation** — full working code

---

---

# LAYER 1: UI COMPONENTS (`src/components/ui/`)

Primitive, stateless, no business logic. These are the atoms of the design system.

---

## 1.1 Button

**Purpose:** The primary interaction element. Every CTA, form submit, and navigation action uses this component.

**Location:** `src/components/ui/Button.jsx`

**Props:**

| Prop           | Type                                      | Required | Default        | Description                                         |
| -------------- | ----------------------------------------- | -------- | -------------- | --------------------------------------------------- |
| `label`        | string                                    | ✅ Yes   | —              | Button text                                         |
| `variant`      | `'primary'` \| `'secondary'` \| `'ghost'` | No       | `'primary'`    | Visual style                                        |
| `size`         | `'sm'` \| `'md'` \| `'lg'`                | No       | `'md'`         | Button size                                         |
| `href`         | string                                    | No       | `null`         | If provided, renders as `<a>` instead of `<button>` |
| `onClick`      | function                                  | No       | `null`         | Click handler (only when no `href`)                 |
| `type`         | `'button'` \| `'submit'`                  | No       | `'button'`     | HTML button type                                    |
| `isLoading`    | boolean                                   | No       | `false`        | Shows "loading" state — disables interaction        |
| `loadingLabel` | string                                    | No       | `'Sending...'` | Text shown while loading                            |
| `className`    | string                                    | No       | `''`           | Override/extend classes                             |
| `external`     | boolean                                   | No       | `false`        | If `href` is external — adds `target="_blank"`      |

**Variants:**

- `primary` — Blue background, white text. Used for main CTAs.
- `secondary` — Transparent with border. Used for secondary actions.
- `ghost` — No border, no background. Used for text-style links that look like buttons.

**Usage:** Every button and CTA on the site. Form submit buttons. Navbar Contact button.

**Do Not Use When:** Pure navigation within a sentence (use `<a>` with Tailwind classes). Link text inside paragraphs.
// src/components/ui/Button.jsx

import { cn } from '@/utils/cn';

const variants = {
primary: 'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary',
secondary: 'border border-border text-text-primary hover:border-primary hover:text-primary bg-transparent',
ghost: 'text-primary hover:underline bg-transparent border-none',
};

const sizes = {
sm: 'px-4 py-2 text-sm',
md: 'px-5 py-2.5 text-sm',
lg: 'px-6 py-3 text-base',
};

/\*\*

- Button
- The primary interaction element for all CTAs and actions.
-
- @param {string} label - Button text
- @param {'primary'|'secondary'|'ghost'} [variant='primary'] - Visual style
- @param {'sm'|'md'|'lg'} [size='md'] - Button size
- @param {string} [href] - If provided, renders as anchor tag
- @param {function} [onClick] - Click handler
- @param {'button'|'submit'} [type='button'] - HTML type
- @param {boolean} [isLoading=false] - Loading state
- @param {string} [loadingLabel='Sending...'] - Text during loading
- @param {string} [className] - Additional classes
- @param {boolean} [external=false] - Opens in new tab
  \*/
  export function Button({
  label,
  variant = 'primary',
  size = 'md',
  href = null,
  onClick = null,
  type = 'button',
  isLoading = false,
  loadingLabel = 'Sending...',
  className = '',
  external = false,
  }) {
  const baseClasses = cn(
  'inline-flex items-center justify-center rounded-lg font-medium',
  'transition-colors duration-200',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
  'disabled:opacity-50 disabled:pointer-events-none',
  variants[variant],
  sizes[size],
  className
  );

if (href) {
return (
<a
href={href}
className={baseClasses}
{...(external && { target: '\_blank', rel: 'noopener noreferrer' })} >
{label}
</a>
);
}

return (
<button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={baseClasses}
    >
{isLoading ? loadingLabel : label}
</button>
);
}

```

---

## 1.2 Card

**Purpose:** Container for grouped content. Used for service cards, product cards, team cards, solution cards.

**Location:** `src/components/ui/Card.jsx`

**Props:**

| Prop        | Type                       | Required | Default | Description                                        |
|-------------|----------------------------|----------|---------|----------------------------------------------------|
| `children`  | ReactNode                  | ✅ Yes    | —       | Card content                                       |
| `hover`     | boolean                    | No       | `false` | Adds hover effect (border highlight + subtle lift) |
| `padding`   | `'sm'` \| `'md'` \| `'lg'` | No       | `'md'`  | Internal padding                                   |
| `className` | string                     | No       | `''`    | Override/extend classes                            |

**Usage:** Wrapping any discrete block of content that needs visual grouping.

**Do Not Use When:** Full-width sections. Section containers (use `Section` component instead).

---

## 1.3 Badge

**Purpose:** Small label for section type identification. Used as "What We Do", "Our Products" labels above section headings.

**Location:** `src/components/ui/Badge.jsx`

**Props:**

| Prop        | Type                      | Required | Default     | Description      |
|-------------|---------------------------|----------|-------------|------------------|
| `label`     | string                    | ✅ Yes    | —           | Badge text       |
| `variant`   | `'default'` \| `'accent'` | No       | `'default'` | Color scheme     |
| `className` | string                    | No       | `''`        | Override classes |

// src/components/ui/Badge.jsx

import { cn } from '@/utils/cn';

const variants = {
  default: 'bg-primary/10 text-primary border border-primary/20',
  accent: 'bg-accent/10 text-accent-light border border-accent/20',
};

/**
 * Badge
 * Small label for section identification, used above section headings.
 *
 * @param {string} label - Badge text
 * @param {'default'|'accent'} [variant='default'] - Color variant
 * @param {string} [className] - Additional classes
 */
export function Badge({ label, variant = 'default', className = '' }) {
  return (
    <span
      className={cn(
        'inline-block rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase',
        variants[variant],
        className
      )}
    >
      {label}
    </span>
  );
}
```

---

## 1.4 Divider

**Purpose:** Horizontal rule for visual separation between sections or content blocks.

**Location:** `src/components/ui/Divider.jsx`

**Props:**

| Prop        | Type   | Required | Default | Description      |
| ----------- | ------ | -------- | ------- | ---------------- |
| `className` | string | No       | `''`    | Override classes |

---

---

# LAYER 2: LAYOUT COMPONENTS (`src/components/layout/`)

Structural components that wrap content and define page layout.

---

## 2.1 Navbar

**Purpose:** Primary navigation — sticky, present on all pages.

**Location:** `src/components/layout/Navbar.jsx`

**Behavior:**

- Transparent background on page load
- Solid `bg-surface/95` with `backdrop-blur-sm` after scrolling 10px
- Hamburger on mobile (< 768px) — collapses all links
- Contact button remains visible on mobile at all times (outside hamburger)
- Uses `useScrolled` hook for scroll detection

**Navigation items** (from `navigation.js`):

- Services → `/services`
- Solutions → `/solutions`
- Products → `/products`
- About → `/about`
- Contact → `/contact` (Button, primary variant)
  // src/components/layout/Navbar.jsx

---

## 2.2 Footer

**Purpose:** Global footer — 4-column layout on desktop, stacked on mobile. Links to all pages, products, company info, and legal.

**Location:** `src/components/layout/Footer.jsx`

**Structure:**

- Column 1: Logo + tagline + social links
- Column 2: Pages (Services, Solutions, Products, About, Contact)
- Column 3: Products (Amar Repair, Amar Batch, Amar Card)
- Column 4: Company / Legal (Privacy, Terms, Security, LinkedIn, GitHub)
- Bottom bar: Copyright + location
  // src/components/layout/Footer.jsx

---

## 2.3 Section

**Purpose:** Consistent vertical spacing wrapper for every page section. Ensures uniform rhythm across the entire site.

**Location:** `src/components/layout/Section.jsx`

**Props:**

| Prop        | Type      | Required | Default     | Description                                      |
| ----------- | --------- | -------- | ----------- | ------------------------------------------------ |
| `children`  | ReactNode | ✅ Yes   | —           | Section content                                  |
| `id`        | string    | No       | —           | For anchor scroll links (e.g., `id="contact"`)   |
| `as`        | string    | No       | `'section'` | HTML element (`'section'`, `'div'`, `'article'`) |
| `contained` | boolean   | No       | `true`      | Wraps content in `site-container`                |
| `className` | string    | No       | `''`        | Override/extend outer classes                    |

---

## 2.4 PageWrapper

**Purpose:** Adds top padding to account for the fixed Navbar height. Wraps all page content.

**Location:** `src/components/layout/PageWrapper.jsx`

**[NOTE]** This is applied at the App level — it wraps `<main>` in App.jsx so individual pages don't need to handle Navbar offset themselves.

---

---

# LAYER 3: COMMON COMPONENTS (`src/components/common/`)

Domain-aware, reusable across 2+ pages. Composed from Layer 1 UI components.

---

## 3.1 SectionLabel

**Purpose:** Small accent label that appears above section headings. Example: "What We Do", "Our Products".

**Location:** `src/components/common/SectionLabel.jsx`

**Props:**

| Prop        | Type   | Required | Default | Description      |
| ----------- | ------ | -------- | ------- | ---------------- |
| `label`     | string | ✅ Yes   | —       | Label text       |
| `className` | string | No       | `''`    | Override classes |

---

## 3.2 SectionHeading

**Purpose:** Consistent H2 + optional description combo used in every section.

**Location:** `src/components/common/SectionHeading.jsx`

**Props:**

| Prop          | Type                   | Required | Default  | Description                            |
| ------------- | ---------------------- | -------- | -------- | -------------------------------------- |
| `heading`     | string                 | ✅ Yes   | —        | Main heading (H2)                      |
| `description` | string                 | No       | —        | Optional supporting text below heading |
| `align`       | `'left'` \| `'center'` | No       | `'left'` | Text alignment                         |
| `className`   | string                 | No       | `''`     | Override classes                       |

---

## 3.3 CTABlock

**Purpose:** Reusable end-of-section call-to-action block. Every page ends with one. Used in ~10 locations across the site.

**Location:** `src/components/common/CTABlock.jsx`

**Props:**

| Prop        | Type                      | Required | Default     | Description            |
| ----------- | ------------------------- | -------- | ----------- | ---------------------- |
| `heading`   | string                    | ✅ Yes   | —           | CTA heading            |
| `body`      | string                    | No       | —           | Supporting description |
| `ctaLabel`  | string                    | ✅ Yes   | —           | Button text            |
| `ctaHref`   | string                    | ✅ Yes   | —           | Button destination     |
| `variant`   | `'default'` \| `'subtle'` | No       | `'default'` | Background style       |
| `className` | string                    | No       | `''`        | Override classes       |

**Variants:**

- `default` — Surface background with border. Used mid-page.
- `subtle` — No background. Used at bottom of pages.

---

## 3.4 ServiceCard

**Purpose:** Displays a single service with icon, title, description. Used in homepage Services section and `/services` page.

**Location:** `src/components/common/ServiceCard.jsx`

**Props:**

| Prop          | Type              | Required | Default | Description            |
| ------------- | ----------------- | -------- | ------- | ---------------------- |
| `title`       | string            | ✅ Yes   | —       | Service name           |
| `description` | string            | ✅ Yes   | —       | 2-line max description |
| `icon`        | React.ElementType | ✅ Yes   | —       | Lucide icon component  |
| `ctaLabel`    | string            | No       | —       | Link text              |
| `ctaHref`     | string            | No       | —       | Link destination       |
| `className`   | string            | No       | `''`    | Override classes       |

---

## 3.5 ProductCard

**Purpose:** Displays a single product with name, tagline, feature list, and CTA. Used in `/products` and homepage.

**Location:** `src/components/common/ProductCard.jsx`

**Props:**

| Prop        | Type     | Required | Default | Description              |
| ----------- | -------- | -------- | ------- | ------------------------ |
| `name`      | string   | ✅ Yes   | —       | Product name             |
| `tagline`   | string   | ✅ Yes   | —       | One-line value statement |
| `features`  | string[] | ✅ Yes   | —       | 3-item feature list      |
| `ctaLabel`  | string   | ✅ Yes   | —       | CTA button text          |
| `ctaHref`   | string   | ✅ Yes   | —       | CTA destination          |
| `className` | string   | No       | `''`    | Override classes         |

---

## 3.6 TeamCard

**Purpose:** Displays a single team member. Used in `/about` and homepage About preview section.

**Location:** `src/components/common/TeamCard.jsx`

**Props:**

| Prop        | Type   | Required | Default | Description                                   |
| ----------- | ------ | -------- | ------- | --------------------------------------------- |
| `name`      | string | ✅ Yes   | —       | Team member name                              |
| `role`      | string | ✅ Yes   | —       | Job title                                     |
| `focus`     | string | No       | —       | 1-sentence focus description                  |
| `photo`     | string | No       | —       | Image URL. If absent, renders initials avatar |
| `className` | string | No       | `''`    | Override classes                              |

---

## 3.7 SolutionCard

**Purpose:** Displays a problem → solution → result card. Used in `/solutions` and homepage Solutions section.

**Location:** `src/components/common/SolutionCard.jsx`

**Props:**

| Prop        | Type   | Required | Default | Description                           |
| ----------- | ------ | -------- | ------- | ------------------------------------- |
| `problem`   | string | ✅ Yes   | —       | Customer's problem in their own words |
| `solution`  | string | ✅ Yes   | —       | What Appriyo does                     |
| `result`    | string | ✅ Yes   | —       | The outcome                           |
| `ctaLabel`  | string | ✅ Yes   | —       | Link text                             |
| `ctaHref`   | string | ✅ Yes   | —       | Link destination                      |
| `className` | string | No       | `''`    | Override classes                      |

---

## 3.8 StepCard

**Purpose:** Numbered step in the "Our Approach" section.

**Location:** `src/components/common/StepCard.jsx`

**Props:**

| Prop          | Type   | Required | Default | Description                        |
| ------------- | ------ | -------- | ------- | ---------------------------------- |
| `number`      | string | ✅ Yes   | —       | Step number (`'01'`, `'02'`, etc.) |
| `title`       | string | ✅ Yes   | —       | Step name                          |
| `description` | string | ✅ Yes   | —       | Step description                   |
| `className`   | string | No       | `''`    | Override classes                   |

---

# COMPONENT INDEX (QUICK REFERENCE)

| Component        | Location                    | Used In                                |
| ---------------- | --------------------------- | -------------------------------------- |
| `Button`         | `ui/Button.jsx`             | Everywhere                             |
| `Card`           | `ui/Card.jsx`               | Service, Product, Team, Solution cards |
| `Badge`          | `ui/Badge.jsx`              | SectionLabel                           |
| `Divider`        | `ui/Divider.jsx`            | Footer, sections                       |
| `Navbar`         | `layout/Navbar.jsx`         | All pages (App.jsx)                    |
| `Footer`         | `layout/Footer.jsx`         | All pages (App.jsx)                    |
| `Section`        | `layout/Section.jsx`        | All page sections                      |
| `PageWrapper`    | `layout/PageWrapper.jsx`    | App.jsx wrapper                        |
| `SectionLabel`   | `common/SectionLabel.jsx`   | All sections with a label              |
| `SectionHeading` | `common/SectionHeading.jsx` | All sections                           |
| `CTABlock`       | `common/CTABlock.jsx`       | End of every page/section              |
| `ServiceCard`    | `common/ServiceCard.jsx`    | Homepage, /services                    |
| `ProductCard`    | `common/ProductCard.jsx`    | Homepage, /products                    |
| `TeamCard`       | `common/TeamCard.jsx`       | Homepage About preview, /about         |
| `SolutionCard`   | `common/SolutionCard.jsx`   | Homepage Solutions, /solutions         |
| `StepCard`       | `common/StepCard.jsx`       | Homepage Approach, /about              |

---

# COMPONENT CREATION RULES

Before creating any new component, ask:

1. Is this used in 2+ places? If YES → `src/components/common/`. If NO → `src/sections/[page]/`.
2. Is this a pure visual primitive with no domain knowledge? → `src/components/ui/`
3. Does a component already exist that does 80% of this? → Extend it with props. Don't duplicate.
4. Is this over 150 lines? → Split it before committing.

**Never create a new component for something used in only one place.**
Build it directly in the section file. Only extract to `common/` when reuse is confirmed.

---

_Document version: 1.0_
_Owner: Preota Saha (UI & Design)_
_Aligned with: architecture.md v1.0 · design.md v1.0 · coding_guidelines.md v1.0_
