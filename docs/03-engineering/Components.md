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
|----------------|-------------------------------------------|----------|----------------|-----------------------------------------------------|
| `label`        | string                                    | ✅ Yes    | —              | Button text                                         |
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

**Implementation:**

```jsx
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

/**
 * Button
 * The primary interaction element for all CTAs and actions.
 *
 * @param {string} label - Button text
 * @param {'primary'|'secondary'|'ghost'} [variant='primary'] - Visual style
 * @param {'sm'|'md'|'lg'} [size='md'] - Button size
 * @param {string} [href] - If provided, renders as anchor tag
 * @param {function} [onClick] - Click handler
 * @param {'button'|'submit'} [type='button'] - HTML type
 * @param {boolean} [isLoading=false] - Loading state
 * @param {string} [loadingLabel='Sending...'] - Text during loading
 * @param {string} [className] - Additional classes
 * @param {boolean} [external=false] - Opens in new tab
 */
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
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      >
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

**Implementation:**

```jsx
// src/components/ui/Card.jsx

import { cn } from '@/utils/cn';

const paddings = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

/**
 * Card
 * Container for grouped, visually distinct content blocks.
 *
 * @param {ReactNode} children - Card content
 * @param {boolean} [hover=false] - Adds hover border highlight
 * @param {'sm'|'md'|'lg'} [padding='md'] - Internal spacing
 * @param {string} [className] - Additional classes
 */
export function Card({ children, hover = false, padding = 'md', className = '' }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-surface',
        'transition-colors duration-200',
        hover && 'hover:border-primary/40 hover:bg-surface/80',
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
```

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

**Implementation:**

```jsx
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
|-------------|--------|----------|---------|------------------|
| `className` | string | No       | `''`    | Override classes |

**Implementation:**

```jsx
// src/components/ui/Divider.jsx

import { cn } from '@/utils/cn';

export function Divider({ className = '' }) {
  return <hr className={cn('border-t border-border', className)} />;
}
```

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

**Implementation:**

```jsx
// src/components/layout/Navbar.jsx

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui';
import { useScrolled } from '@/hooks/useScrolled';
import { navLinks } from '@/data/navigation';
import { cn } from '@/utils/cn';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrolled(10);
  const location = useLocation();

  const isActive = (href) => location.pathname === href;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-300',
        isScrolled
          ? 'bg-surface/95 backdrop-blur-sm border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="site-container flex h-16 items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-lg font-bold text-text-primary">
          Appriyo
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'text-sm transition-colors',
                isActive(link.href)
                  ? 'text-text-primary font-medium'
                  : 'text-text-secondary hover:text-text-primary'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button label="Contact Us" href="/contact" size="sm" />
        </nav>

        {/* Mobile: contact button always visible + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <Button label="Contact" href="/contact" size="sm" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="text-text-secondary hover:text-text-primary"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-t border-border">
          <nav className="site-container py-4 flex flex-col gap-4" aria-label="Mobile navigation">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-text-secondary hover:text-text-primary text-sm py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
```

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

**Implementation:**

```jsx
// src/components/layout/Footer.jsx

import { Link } from 'react-router-dom';
import { Linkedin, Github } from 'lucide-react';
import { footerColumns } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="site-container py-16">

        {/* Top: 4 columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Column 1: Brand */}
          <div>
            <p className="text-lg font-bold text-text-primary mb-3">Appriyo</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Helping businesses replace manual work with simple, AI-powered systems.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://linkedin.com/company/appriyo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Appriyo on LinkedIn"
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Appriyo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Appriyo on GitHub"
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Columns 2–4: Links from data */}
          {footerColumns.map(column => (
            <div key={column.heading}>
              <p className="text-sm font-semibold text-text-primary mb-4">{column.heading}</p>
              <ul className="space-y-2">
                {column.links.map(link => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row sm:justify-between gap-2">
          <p className="text-xs text-text-muted">
            © 2026 Appriyo Technologies. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Khulna, Bangladesh. Remote services worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

---

## 2.3 Section

**Purpose:** Consistent vertical spacing wrapper for every page section. Ensures uniform rhythm across the entire site.

**Location:** `src/components/layout/Section.jsx`

**Props:**

| Prop        | Type      | Required | Default     | Description                                      |
|-------------|-----------|----------|-------------|--------------------------------------------------|
| `children`  | ReactNode | ✅ Yes    | —           | Section content                                  |
| `id`        | string    | No       | —           | For anchor scroll links (e.g., `id="contact"`)   |
| `as`        | string    | No       | `'section'` | HTML element (`'section'`, `'div'`, `'article'`) |
| `contained` | boolean   | No       | `true`      | Wraps content in `site-container`                |
| `className` | string    | No       | `''`        | Override/extend outer classes                    |

**Implementation:**

```jsx
// src/components/layout/Section.jsx

import { cn } from '@/utils/cn';

/**
 * Section
 * Consistent spacing and container wrapper for all page sections.
 *
 * @param {ReactNode} children
 * @param {string} [id] - Anchor ID for scroll links
 * @param {string} [as='section'] - HTML element
 * @param {boolean} [contained=true] - Apply site-container
 * @param {string} [className] - Additional classes
 */
export function Section({ children, id, as: Tag = 'section', contained = true, className = '' }) {
  return (
    <Tag id={id} className={cn('section-spacing', className)}>
      {contained ? (
        <div className="site-container">{children}</div>
      ) : children}
    </Tag>
  );
}
```

---

## 2.4 PageWrapper

**Purpose:** Adds top padding to account for the fixed Navbar height. Wraps all page content.

**Location:** `src/components/layout/PageWrapper.jsx`

**[NOTE]** This is applied at the App level — it wraps `<main>` in App.jsx so individual pages don't need to handle Navbar offset themselves.

**Implementation:**

```jsx
// src/components/layout/PageWrapper.jsx

export function PageWrapper({ children }) {
  return (
    <div className="pt-16 min-h-screen">
      {children}
    </div>
  );
}
```

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
|-------------|--------|----------|---------|------------------|
| `label`     | string | ✅ Yes    | —       | Label text       |
| `className` | string | No       | `''`    | Override classes |

**Implementation:**

```jsx
// src/components/common/SectionLabel.jsx

import { Badge } from '@/components/ui';
import { cn } from '@/utils/cn';

/**
 * SectionLabel
 * Accent label displayed above section headings.
 *
 * @param {string} label - Label text
 * @param {string} [className]
 */
export function SectionLabel({ label, className = '' }) {
  return (
    <div className={cn('mb-4', className)}>
      <Badge label={label} />
    </div>
  );
}
```

---

## 3.2 SectionHeading

**Purpose:** Consistent H2 + optional description combo used in every section.

**Location:** `src/components/common/SectionHeading.jsx`

**Props:**

| Prop          | Type                   | Required | Default  | Description                            |
|---------------|------------------------|----------|----------|----------------------------------------|
| `heading`     | string                 | ✅ Yes    | —        | Main heading (H2)                      |
| `description` | string                 | No       | —        | Optional supporting text below heading |
| `align`       | `'left'` \| `'center'` | No       | `'left'` | Text alignment                         |
| `className`   | string                 | No       | `''`     | Override classes                       |

**Implementation:**

```jsx
// src/components/common/SectionHeading.jsx

import { cn } from '@/utils/cn';

/**
 * SectionHeading
 * H2 heading with optional description for all page sections.
 *
 * @param {string} heading - Section heading text
 * @param {string} [description] - Supporting description
 * @param {'left'|'center'} [align='left'] - Text alignment
 * @param {string} [className]
 */
export function SectionHeading({ heading, description, align = 'left', className = '' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';

  return (
    <div className={cn('mb-12', alignClass, className)}>
      <h2 className={cn('text-3xl font-semibold text-text-primary lg:text-4xl', alignClass)}>
        {heading}
      </h2>
      {description && (
        <p className={cn('mt-3 text-text-secondary max-w-2xl', alignClass)}>
          {description}
        </p>
      )}
    </div>
  );
}
```

---

## 3.3 CTABlock

**Purpose:** Reusable end-of-section call-to-action block. Every page ends with one. Used in ~10 locations across the site.

**Location:** `src/components/common/CTABlock.jsx`

**Props:**

| Prop        | Type                      | Required | Default     | Description            |
|-------------|---------------------------|----------|-------------|------------------------|
| `heading`   | string                    | ✅ Yes    | —           | CTA heading            |
| `body`      | string                    | No       | —           | Supporting description |
| `ctaLabel`  | string                    | ✅ Yes    | —           | Button text            |
| `ctaHref`   | string                    | ✅ Yes    | —           | Button destination     |
| `variant`   | `'default'` \| `'subtle'` | No       | `'default'` | Background style       |
| `className` | string                    | No       | `''`        | Override classes       |

**Variants:**
- `default` — Surface background with border. Used mid-page.
- `subtle` — No background. Used at bottom of pages.

**Implementation:**

```jsx
// src/components/common/CTABlock.jsx

import { Button, Card } from '@/components/ui';
import { cn } from '@/utils/cn';

/**
 * CTABlock
 * Reusable end-of-section CTA with heading, optional body, and button.
 *
 * @param {string} heading - CTA heading
 * @param {string} [body] - Supporting description
 * @param {string} ctaLabel - Button text
 * @param {string} ctaHref - Button destination URL
 * @param {'default'|'subtle'} [variant='default'] - Background style
 * @param {string} [className]
 */
export function CTABlock({ heading, body, ctaLabel, ctaHref, variant = 'default', className = '' }) {
  if (variant === 'subtle') {
    return (
      <div className={cn('text-center py-12', className)}>
        <h3 className="text-2xl font-semibold text-text-primary mb-3">{heading}</h3>
        {body && <p className="text-text-secondary mb-6 max-w-xl mx-auto">{body}</p>}
        <Button label={ctaLabel} href={ctaHref} />
      </div>
    );
  }

  return (
    <Card className={cn('text-center', className)} padding="lg">
      <h3 className="text-2xl font-semibold text-text-primary mb-3">{heading}</h3>
      {body && <p className="text-text-secondary mb-6 max-w-xl mx-auto">{body}</p>}
      <Button label={ctaLabel} href={ctaHref} />
    </Card>
  );
}
```

---

## 3.4 ServiceCard

**Purpose:** Displays a single service with icon, title, description. Used in homepage Services section and `/services` page.

**Location:** `src/components/common/ServiceCard.jsx`

**Props:**

| Prop          | Type              | Required | Default | Description            |
|---------------|-------------------|----------|---------|------------------------|
| `title`       | string            | ✅ Yes    | —       | Service name           |
| `description` | string            | ✅ Yes    | —       | 2-line max description |
| `icon`        | React.ElementType | ✅ Yes    | —       | Lucide icon component  |
| `ctaLabel`    | string            | No       | —       | Link text              |
| `ctaHref`     | string            | No       | —       | Link destination       |
| `className`   | string            | No       | `''`    | Override classes       |

**Implementation:**

```jsx
// src/components/common/ServiceCard.jsx

import { Card } from '@/components/ui';
import { cn } from '@/utils/cn';

export function ServiceCard({ title, description, icon: Icon, ctaLabel, ctaHref, className = '' }) {
  return (
    <Card hover padding="md" className={className}>
      <Icon className="mb-4 h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
      <h3 className="mb-2 text-lg font-semibold text-text-primary">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      {ctaLabel && ctaHref && (
        <a
          href={ctaHref}
          className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
        >
          {ctaLabel} →
        </a>
      )}
    </Card>
  );
}
```

---

## 3.5 ProductCard

**Purpose:** Displays a single product with name, tagline, feature list, and CTA. Used in `/products` and homepage.

**Location:** `src/components/common/ProductCard.jsx`

**Props:**

| Prop        | Type     | Required | Default | Description              |
|-------------|----------|----------|---------|--------------------------|
| `name`      | string   | ✅ Yes    | —       | Product name             |
| `tagline`   | string   | ✅ Yes    | —       | One-line value statement |
| `features`  | string[] | ✅ Yes    | —       | 3-item feature list      |
| `ctaLabel`  | string   | ✅ Yes    | —       | CTA button text          |
| `ctaHref`   | string   | ✅ Yes    | —       | CTA destination          |
| `className` | string   | No       | `''`    | Override classes         |

**Implementation:**

```jsx
// src/components/common/ProductCard.jsx

import { CheckCircle } from 'lucide-react';
import { Button, Card } from '@/components/ui';
import { cn } from '@/utils/cn';

export function ProductCard({ name, tagline, features, ctaLabel, ctaHref, className = '' }) {
  return (
    <Card hover padding="lg" className={className}>
      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-accent-light">{name}</p>
      <h3 className="mb-3 text-xl font-semibold text-text-primary">{tagline}</h3>
      <ul className="mb-6 space-y-2">
        {features.map(feature => (
          <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      <Button label={ctaLabel} href={ctaHref} variant="secondary" size="sm" />
    </Card>
  );
}
```

---

## 3.6 TeamCard

**Purpose:** Displays a single team member. Used in `/about` and homepage About preview section.

**Location:** `src/components/common/TeamCard.jsx`

**Props:**

| Prop        | Type   | Required | Default | Description                                   |
|-------------|--------|----------|---------|-----------------------------------------------|
| `name`      | string | ✅ Yes    | —       | Team member name                              |
| `role`      | string | ✅ Yes    | —       | Job title                                     |
| `focus`     | string | No       | —       | 1-sentence focus description                  |
| `photo`     | string | No       | —       | Image URL. If absent, renders initials avatar |
| `className` | string | No       | `''`    | Override classes                              |

**Implementation:**

```jsx
// src/components/common/TeamCard.jsx

import { Card } from '@/components/ui';
import { cn } from '@/utils/cn';

function InitialsAvatar({ name }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div className="h-16 w-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
      <span className="text-lg font-semibold text-primary">{initials}</span>
    </div>
  );
}

export function TeamCard({ name, role, focus, photo, className = '' }) {
  return (
    <Card padding="md" className={className}>
      <div className="flex items-start gap-4">
        {photo ? (
          <img
            src={photo}
            alt={`${name}, ${role} at Appriyo`}
            width={64}
            height={64}
            className="h-16 w-16 rounded-full object-cover"
            loading="lazy"
          />
        ) : (
          <InitialsAvatar name={name} />
        )}
        <div>
          <p className="font-semibold text-text-primary">{name}</p>
          <p className="text-sm text-primary mb-1">{role}</p>
          {focus && <p className="text-sm text-text-secondary">{focus}</p>}
        </div>
      </div>
    </Card>
  );
}
```

---

## 3.7 SolutionCard

**Purpose:** Displays a problem → solution → result card. Used in `/solutions` and homepage Solutions section.

**Location:** `src/components/common/SolutionCard.jsx`

**Props:**

| Prop        | Type   | Required | Default | Description                           |
|-------------|--------|----------|---------|---------------------------------------|
| `problem`   | string | ✅ Yes    | —       | Customer's problem in their own words |
| `solution`  | string | ✅ Yes    | —       | What Appriyo does                     |
| `result`    | string | ✅ Yes    | —       | The outcome                           |
| `ctaLabel`  | string | ✅ Yes    | —       | Link text                             |
| `ctaHref`   | string | ✅ Yes    | —       | Link destination                      |
| `className` | string | No       | `''`    | Override classes                      |

**Implementation:**

```jsx
// src/components/common/SolutionCard.jsx

import { Card } from '@/components/ui';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

export function SolutionCard({ problem, solution, result, ctaLabel, ctaHref, className = '' }) {
  return (
    <Card hover padding="lg" className={className}>
      <blockquote className="mb-4 border-l-2 border-primary/40 pl-4 text-sm italic text-text-secondary">
        "{problem}"
      </blockquote>
      <p className="mb-2 text-sm text-text-primary">{solution}</p>
      <p className="mb-4 text-sm font-medium text-primary">{result}</p>
      <a
        href={ctaHref}
        className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium"
      >
        {ctaLabel} <ArrowRight size={14} aria-hidden="true" />
      </a>
    </Card>
  );
}
```

---

## 3.8 StepCard

**Purpose:** Numbered step in the "Our Approach" section.

**Location:** `src/components/common/StepCard.jsx`

**Props:**

| Prop          | Type   | Required | Default | Description                        |
|---------------|--------|----------|---------|------------------------------------|
| `number`      | string | ✅ Yes    | —       | Step number (`'01'`, `'02'`, etc.) |
| `title`       | string | ✅ Yes    | —       | Step name                          |
| `description` | string | ✅ Yes    | —       | Step description                   |
| `className`   | string | No       | `''`    | Override classes                   |

**Implementation:**

```jsx
// src/components/common/StepCard.jsx

import { cn } from '@/utils/cn';

export function StepCard({ number, title, description, className = '' }) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <span className="text-4xl font-bold text-primary/30 leading-none">{number}</span>
      <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
```

---

# COMPONENT INDEX (QUICK REFERENCE)

| Component        | Location                    | Used In                                |
|------------------|-----------------------------|----------------------------------------|
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

*Document version: 1.0*
*Owner: Preota Saha (UI & Design)*
*Aligned with: architecture.md v1.0 · design.md v1.0 · coding_guidelines.md v1.0*