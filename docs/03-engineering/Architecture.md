# 🏗️ APPRIYO WEBSITE — FRONTEND ARCHITECTURE DOCUMENT (v1.0)

> **Purpose:**
> Defines how the Appriyo website codebase is structured, how components are built,
> how state is managed, how routing works, and how styling is applied.
> Every developer on the team works from this document.
> No structural decision should be made that contradicts this document.

> **Aligned with:** `appriyo_constitution.md` · `design.md` · `sitemap.md` · `pages.md`

---

# 1. TECH STACK (FINALIZED)

| Layer             | Technology           | Version | Reason                                               |
|-------------------|----------------------|---------|------------------------------------------------------|
| UI Library        | React                | 18.x    | Component-based, team familiarity, ecosystem         |
| Build Tool        | Vite                 | 5.x     | Fast HMR, lean production builds, native ESM         |
| Styling           | Tailwind CSS         | 3.x     | Utility-first, design system alignment, no CSS bloat |
| Component Library | shadcn/ui            | Latest  | Headless, unstyled base — we control the look        |
| Routing           | React Router         | v6      | Industry standard, nested routes, clean API          |
| Icons             | Lucide React         | Latest  | Consistent stroke width, tree-shakable               |
| Fonts             | Inter (Google Fonts) | —       | As defined in `design.md`                            |
| Form Handling     | React Hook Form      | 7.x     | Lightweight, no re-renders on input                  |
| Form Validation   | Zod                  | 3.x     | Schema-based, pairs with React Hook Form             |
| Animation         | Framer Motion        | 10.x    | Purposeful, controlled — no CSS animation chaos      |
| SEO               | React Helmet Async   | Latest  | Per-page meta tags, title management                 |
| Email / Contact   | EmailJS or Formspree | —       | No backend needed at launch                          |
| Deployment        | Vercel               | —       | Zero-config, auto-deploy from GitHub                 |

**[NOTE]** No Redux. No Context API for global state. No unnecessary dependencies.
If a library isn't in this list, it requires team approval before being added.

---

# 2. FOLDER STRUCTURE (CANONICAL)

This is the exact folder structure. Every file has a defined home.

```
appriyo-website/
│
├── public/
│   ├── favicon.ico
│   ├── og-image.png                  # Open Graph image (1200x630)
│   └── robots.txt
│
├── src/
│   │
│   ├── assets/                       # Static files imported in JS
│   │   ├── images/                   # Product screenshots, team photos
│   │   ├── icons/                    # Custom SVG icons (if any beyond Lucide)
│   │   └── fonts/                    # Only if self-hosting Inter
│   │
│   ├── components/                   # REUSABLE components (used in 2+ places)
│   │   ├── ui/                       # Primitive UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Divider.jsx
│   │   │   └── index.js              # Barrel export
│   │   │
│   │   ├── layout/                   # Structural layout components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── PageWrapper.jsx       # Applies consistent page padding/max-width
│   │   │   ├── Section.jsx           # Consistent section spacing wrapper
│   │   │   └── index.js
│   │   │
│   │   └── common/                   # Shared domain-aware components
│   │       ├── SectionLabel.jsx      # Small accent label above headings
│   │       ├── SectionHeading.jsx    # H2 + optional description combo
│   │       ├── CTABlock.jsx          # Reusable CTA section (heading + button)
│   │       ├── TeamCard.jsx          # Used in About + Homepage
│   │       ├── ProductCard.jsx       # Used in Products + Homepage
│   │       ├── ServiceCard.jsx       # Used in Services + Homepage
│   │       └── index.js
│   │
│   ├── sections/                     # Page sections (used in ONE page only)
│   │   ├── home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── SolutionsSection.jsx
│   │   │   ├── ProductsSection.jsx
│   │   │   ├── WhyAppriyoSection.jsx
│   │   │   ├── ApproachSection.jsx
│   │   │   ├── AboutPreviewSection.jsx
│   │   │   └── ContactSection.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── ServicesHeader.jsx
│   │   │   ├── ServiceDetail.jsx     # Reused 4x per service
│   │   │   └── ServicesNotIncluded.jsx
│   │   │
│   │   ├── solutions/
│   │   │   ├── SolutionsHeader.jsx
│   │   │   └── SolutionCard.jsx      # Reused per solution entry
│   │   │
│   │   ├── products/
│   │   │   ├── ProductsHeader.jsx
│   │   │   └── ProductOverviewCard.jsx
│   │   │
│   │   ├── product-detail/           # Shared structure for all 3 product pages
│   │   │   ├── ProductHero.jsx
│   │   │   ├── ProductProblem.jsx
│   │   │   ├── ProductFeatures.jsx
│   │   │   ├── ProductAudience.jsx
│   │   │   └── ProductCTA.jsx
│   │   │
│   │   ├── about/
│   │   │   ├── AboutHeader.jsx
│   │   │   ├── WhoWeAre.jsx
│   │   │   ├── Philosophy.jsx
│   │   │   ├── TeamGrid.jsx
│   │   │   └── HowWeWork.jsx
│   │   │
│   │   └── contact/
│   │       ├── ContactHeader.jsx
│   │       ├── ContactForm.jsx
│   │       └── ContactDetails.jsx
│   │
│   ├── pages/                        # Route-level components (thin wrappers)
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Solutions.jsx
│   │   ├── Products.jsx
│   │   ├── ProductAmarRepair.jsx
│   │   ├── ProductAmarBatch.jsx
│   │   ├── ProductAmarCard.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Privacy.jsx
│   │   ├── Terms.jsx
│   │   ├── Security.jsx
│   │   └── NotFound.jsx
│   │
│   ├── data/                         # Static content — all copy lives here
│   │   ├── services.js               # Services array with title, description, icon, cta
│   │   ├── solutions.js              # Solutions array with problem, answer, link
│   │   ├── products.js               # Products array with name, tagline, features, href
│   │   ├── team.js                   # Team member array with name, role, bio, photo
│   │   ├── navigation.js             # Navbar and footer link arrays
│   │   └── approach.js               # Approach steps array
│   │
│   ├── styles/
│   │   └── globals.css               # Tailwind directives + CSS custom properties
│   │
│   ├── utils/
│   │   ├── cn.js                     # Class name merge utility (clsx + tailwind-merge)
│   │   └── seo.js                    # SEO helper for page titles and meta
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useScrolled.js            # Tracks scroll position (for navbar background)
│   │   └── useFormSubmit.js          # Handles form submission state + errors
│   │
│   ├── App.jsx                       # Router setup only — no logic here
│   └── main.jsx                      # React root mount
│
├── docs/                             # All documentation (outside src)
│   └── [all .md files live here]
│
├── .github/
│   └── [workflows, templates]
│
├── index.html                        # Vite entry point
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.js
├── .prettierrc
└── package.json
```

---

# 3. COMPONENT STRATEGY

## 3.1 Three-Layer Component Model

Every UI element belongs to exactly one of these three layers:

```
Layer 1: UI Components (src/components/ui/)
  └── Primitive, stateless, no business logic
  └── Examples: Button, Card, Badge, Divider
  └── Rule: Accepts only style/content props. No data fetching. No routing.

Layer 2: Common Components (src/components/common/)
  └── Domain-aware, reusable across 2+ pages
  └── Examples: ProductCard, ServiceCard, TeamCard, CTABlock
  └── Rule: Receives structured data as props. No hardcoded strings.

Layer 3: Sections (src/sections/)
  └── Page-specific. Used in ONE page only.
  └── Examples: HeroSection, ContactForm, TeamGrid
  └── Rule: Imports from data/ files. Composes Layer 1 + 2 components.
```

**Pages** (`src/pages/`) are the thinnest layer — they import sections and assemble them. Pages contain almost zero JSX of their own.

---

## 3.2 Component Rules

| Rule                           | Detail                                                         |
|--------------------------------|----------------------------------------------------------------|
| One component per file         | No co-located multi-component files                            |
| Named exports for components   | `export function Button()` not `export default` (except pages) |
| Default export for pages       | Pages use `export default` for React Router compatibility      |
| No inline styles               | Use Tailwind classes only. Zero `style={{}}` props.            |
| No hardcoded copy in JSX       | All text content comes from `data/` files or props             |
| PropTypes or JSDoc             | All components must document their expected props              |
| Max 150 lines per component    | If longer → split it                                           |
| Composition over configuration | Build small, focused components and compose them               |

---

## 3.3 Component Naming Convention

| Type       | Convention                  | Example           |
|------------|-----------------------------|-------------------|
| Components | PascalCase                  | `ServiceCard.jsx` |
| Hooks      | camelCase with `use` prefix | `useScrolled.js`  |
| Utilities  | camelCase                   | `cn.js`, `seo.js` |
| Data files | camelCase                   | `services.js`     |
| CSS files  | kebab-case                  | `globals.css`     |

---

## 3.4 Component Template

Every new component follows this structure:

```jsx
// src/components/common/ServiceCard.jsx

/**
 * ServiceCard
 * Displays a single service with icon, title, description, and optional CTA link.
 *
 * @param {string} title - Service name
 * @param {string} description - Short service description
 * @param {React.ElementType} icon - Lucide icon component
 * @param {string} [ctaLabel] - Optional CTA link text
 * @param {string} [ctaHref] - Optional CTA link destination
 */

import { cn } from '@/utils/cn';

export function ServiceCard({ title, description, icon: Icon, ctaLabel, ctaHref }) {
  return (
    <div className={cn(
      'rounded-xl border border-border bg-surface p-6',
      'transition-colors hover:border-primary/30'
    )}>
      {Icon && <Icon className="mb-4 h-6 w-6 text-primary" strokeWidth={1.5} />}
      <h3 className="mb-2 text-lg font-semibold text-text-primary">{title}</h3>
      <p className="text-sm text-text-secondary">{description}</p>
      {ctaLabel && ctaHref && (
        <a href={ctaHref} className="mt-4 inline-block text-sm text-primary hover:underline">
          {ctaLabel} →
        </a>
      )}
    </div>
  );
}
```

---

# 4. ROUTING SYSTEM

## 4.1 Router Setup (App.jsx)

```jsx
// src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Solutions from '@/pages/Solutions';
import Products from '@/pages/Products';
import ProductAmarRepair from '@/pages/ProductAmarRepair';
import ProductAmarBatch from '@/pages/ProductAmarBatch';
import ProductAmarCard from '@/pages/ProductAmarCard';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import Security from '@/pages/Security';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/amar-repair" element={<ProductAmarRepair />} />
          <Route path="/products/amar-batch" element={<ProductAmarBatch />} />
          <Route path="/products/amar-card" element={<ProductAmarCard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/security" element={<Security />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
```

## 4.2 Page Component Template

```jsx
// src/pages/Services.jsx

import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ServicesHeader } from '@/sections/services/ServicesHeader';
import { ServiceDetail } from '@/sections/services/ServiceDetail';
import { ServicesNotIncluded } from '@/sections/services/ServicesNotIncluded';
import { CTABlock } from '@/components/common/CTABlock';
import { services } from '@/data/services';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Appriyo — Business Automation & Custom Software</title>
        <meta name="description" content="Appriyo offers business process automation, custom software, AI integration, and digital transformation consulting for small businesses." />
      </Helmet>

      <ServicesHeader />
      {services.map((service) => (
        <ServiceDetail key={service.id} {...service} />
      ))}
      <ServicesNotIncluded />
      <CTABlock
        heading="Not Sure Which Service You Need?"
        body="Tell us what's slowing your business down — we'll figure out the right approach together."
        ctaLabel="Get a Free Consultation"
        ctaHref="/contact"
      />
    </>
  );
}
```

## 4.3 Path Alias

Configure Vite and jsconfig for clean imports:

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  }
});
```

Usage: `import { Button } from '@/components/ui/Button'`
Never use relative paths beyond one level: `../../components/` is forbidden.

---

# 5. STATE MANAGEMENT

## 5.1 State Philosophy

**Appriyo website has almost no global state.** It is a content site with one interactive feature (contact form). Keep state local and simple.

| State Type         | Solution               | Examples                              |
|--------------------|------------------------|---------------------------------------|
| Local UI state     | `useState`             | Navbar open/closed, form field values |
| Scroll-based state | `useScrolled` hook     | Navbar background on scroll           |
| Form state         | React Hook Form        | Contact form, validation              |
| Form submission    | `useFormSubmit` hook   | Loading, success, error states        |
| Global state       | ❌ NOT NEEDED           | —                                     |
| Server state       | ❌ NOT NEEDED at launch | —                                     |

**No Redux. No Zustand. No Context API.** If a future feature genuinely requires global state, the team decides together before adding a library.

## 5.2 Form State Pattern

```jsx
// ContactForm.jsx — simplified state pattern

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  businessType: z.string().min(1, 'Please select a business type'),
  problem: z.string().min(10, 'Please describe your problem briefly'),
  phone: z.string().min(7, 'Please enter a valid number'),
  contactMethod: z.enum(['whatsapp', 'email', 'call']),
});

export function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data) => {
    // Send via EmailJS or Formspree
  };

  if (isSubmitSuccessful) return <SuccessMessage />;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* fields */}
    </form>
  );
}
```

---

# 6. STYLING RULES (TAILWIND USAGE)

## 6.1 Tailwind Configuration

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // From design.md — CSS custom properties mapped to Tailwind
        primary:        '#2563eb',
        'primary-dark': '#1e40af',
        'primary-light':'#3b82f6',
        accent:         '#7c3aed',
        'accent-light': '#a78bfa',
        bg:             '#0b0f19',
        surface:        '#111827',
        border:         '#1f2937',
        'text-primary': '#f9fafb',
        'text-secondary':'#9ca3af',
        'text-muted':   '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
};
```

## 6.2 CSS Custom Properties (globals.css)

```css
/* src/styles/globals.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-primary:        #2563eb;
    --color-primary-dark:   #1e40af;
    --color-primary-light:  #3b82f6;
    --color-accent:         #7c3aed;
    --color-accent-light:   #a78bfa;
    --color-bg:             #0b0f19;
    --color-surface:        #111827;
    --color-border:         #1f2937;
    --color-text-primary:   #f9fafb;
    --color-text-secondary: #9ca3af;
    --color-text-muted:     #6b7280;
  }

  html { @apply bg-bg text-text-primary font-sans antialiased; }
  body { @apply min-h-screen; }

  h1 { @apply text-5xl font-bold leading-tight; }
  h2 { @apply text-4xl font-semibold leading-snug; }
  h3 { @apply text-2xl font-semibold leading-snug; }
  h4 { @apply text-xl font-medium; }
}

@layer utilities {
  .site-container {
    @apply mx-auto w-full max-w-site px-6 lg:px-8;
  }
  .section-spacing {
    @apply py-20 lg:py-28;
  }
}
```

## 6.3 Tailwind Usage Rules

| Rule                                      | Detail                                             |
|-------------------------------------------|----------------------------------------------------|
| No inline styles                          | `style={{}}` is forbidden                          |
| No arbitrary values without justification | `w-[347px]` is a smell — use the scale             |
| Colors from theme only                    | Never use `text-blue-600` — use `text-primary`     |
| Spacing from scale only                   | Use `p-4`, `p-6`, `p-8` — not `p-[13px]`           |
| No `!important` / `!` modifier            | Fix the specificity issue properly                 |
| Responsive: mobile-first                  | `md:flex` not `flex md:block`                      |
| Dark mode: class-based                    | `dark:bg-surface` applied from HTML class          |
| Group hover/focus allowed                 | `group-hover:` and `focus-visible:` are encouraged |
| Max 8 Tailwind classes per element in JSX | If more → extract to a component or use `cn()`     |

## 6.4 The `cn()` Utility

```js
// src/utils/cn.js
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

Use this for all conditional class logic:
```jsx
// CORRECT
className={cn('rounded-xl border', isActive && 'border-primary', className)}

// WRONG
className={`rounded-xl border ${isActive ? 'border-primary' : ''}`}
```

---

# 7. ANIMATION RULES

Using Framer Motion. Rules are strict — this is a professional, calm site.

## 7.1 Allowed Animations

```jsx
// Standard fade-in + slide-up (used on section entry)
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

// Card hover
const cardHover = {
  whileHover: { scale: 1.02, transition: { duration: 0.2 } }
};
```

## 7.2 Animation Rules

| Rule             | Detail                                                |
|------------------|-------------------------------------------------------|
| Max duration     | 0.4s for entry animations                             |
| Max translate    | 16px — never more                                     |
| Max scale        | 1.02 on hover                                         |
| Stagger children | Allowed — max 0.1s stagger between items              |
| Scroll-triggered | Use `whileInView` — not scroll listeners              |
| Parallax         | ❌ Forbidden                                           |
| Loop animations  | ❌ Forbidden (no spinning, pulsing, bouncing elements) |
| Reduce motion    | Always respect `prefers-reduced-motion`               |

```jsx
// Respect reduced motion
import { useReducedMotion } from 'framer-motion';

function AnimatedSection({ children }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
```

---

# 8. DATA LAYER (src/data/)

All page content lives in data files — NOT hardcoded in JSX.

## 8.1 services.js (example)

```js
// src/data/services.js
import { Cog, Code2, Brain, Compass } from 'lucide-react';

export const services = [
  {
    id: 'automation',
    icon: Cog,
    title: 'Business Process Automation',
    tagline: 'Replace repetitive manual tasks with systems that run themselves.',
    description: 'If your team does the same task every day...',
    examples: ['Customer follow-up reminders', 'Job and order status updates'],
    outcomes: ['Fewer manual errors', 'Hours returned to your team weekly'],
    ctaLabel: 'Talk to us about automating your workflow',
    ctaHref: '/contact',
  },
  // ... 3 more
];
```

## 8.2 Data File Rules

| Rule                                 | Detail                                       |
|--------------------------------------|----------------------------------------------|
| No JSX in data files                 | Data files export plain JS objects/arrays    |
| Lucide icons referenced by component | `icon: Cog` — not a string                   |
| All CTAs defined in data             | No hardcoded button text in components       |
| IDs required                         | Every item has a unique `id` for keying      |
| Sorted by priority                   | Items appear in the order they should render |

---

# 9. SEO ARCHITECTURE

## 9.1 Per-Page SEO

Every page uses React Helmet Async for meta tags. Format defined in `sitemap.md`.

```jsx
<Helmet>
  <title>Services | Appriyo — Business Automation & Custom Software</title>
  <meta name="description" content="..." />
  <meta property="og:title" content="..." />
  <meta property="og:description" content="..." />
  <meta property="og:image" content="/og-image.png" />
  <meta property="og:url" content="https://appriyo.com/services" />
  <link rel="canonical" href="https://appriyo.com/services" />
</Helmet>
```

## 9.2 Performance Rules

| Rule           | Target                     | Method                                  |
|----------------|----------------------------|-----------------------------------------|
| Images         | WebP format, max 200kb     | Convert before importing                |
| Lazy loading   | All images below fold      | `loading="lazy"` attribute              |
| Fonts          | Preconnect to Google Fonts | `<link rel="preconnect">` in index.html |
| Code splitting | Per route                  | React Router lazy + Suspense            |
| Bundle size    | < 300kb gzipped at launch  | Vite build analysis                     |

---

# 10. CODE QUALITY RULES

## 10.1 ESLint Configuration

```js
// .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'react/prop-types': 'warn',
    'no-console': 'warn',
    'no-unused-vars': 'error',
    'react/react-in-jsx-scope': 'off',
  },
};
```

## 10.2 Prettier Configuration

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSameLine": false
}
```

## 10.3 Git Rules

| Rule             | Detail                                                           |
|------------------|------------------------------------------------------------------|
| Branch naming    | `feature/section-name`, `fix/bug-description`, `chore/task-name` |
| Commit format    | `feat: add hero section`, `fix: navbar mobile overflow`          |
| PR requirement   | All changes go through PR — no direct pushes to `main`           |
| PR checklist     | Lighthouse score, mobile test, copy matches `pages.md`           |
| Protected branch | `main` is protected — requires 1 approval                        |

---

# 11. ACCESSIBILITY RULES

| Rule                | Detail                                                                |
|---------------------|-----------------------------------------------------------------------|
| WCAG target         | 2.1 AA compliance                                                     |
| Semantic HTML       | Use `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` correctly |
| Alt text            | Every `<img>` has descriptive alt. Decorative images: `alt=""`        |
| Focus visible       | All interactive elements have visible focus rings                     |
| Color contrast      | Text contrast ratio ≥ 4.5:1 (body), ≥ 3:1 (large text)                |
| Form labels         | Every input has an associated `<label>`                               |
| Keyboard navigation | Full keyboard navigation on navbar, forms, and CTAs                   |
| Screen reader       | Test with VoiceOver (Mac) before each release                         |

---

# 12. WHAT IS FORBIDDEN

| Forbidden                                | Reason                                              |
|------------------------------------------|-----------------------------------------------------|
| `style={{}}` inline styles               | Breaks design system consistency                    |
| Hardcoded copy in JSX                    | Copy must be changeable without touching components |
| Relative imports beyond 1 level          | Use `@/` alias                                      |
| `console.log` in production              | Lint rule will catch this                           |
| Adding a library without team discussion | Keeps bundle lean                                   |
| Arbitrary Tailwind values (`w-[347px]`)  | Use the spacing scale                               |
| Long animations (> 0.5s)                 | Violates design.md animation rules                  |
| `!important`                             | Fix specificity properly                            |
| Skipping the `pages.md` spec             | Every section must match its spec                   |

---

# 13. ARCHITECTURE DECISION LOG

Decisions that were considered and finalized:

| Decision          | Choice                | Rejected Alternative           | Reason                                         |
|-------------------|-----------------------|--------------------------------|------------------------------------------------|
| State management  | useState only         | Redux, Zustand                 | No complex state at launch                     |
| Styling           | Tailwind CSS          | CSS Modules, Styled Components | Speed, consistency, design.md alignment        |
| Component library | shadcn/ui             | MUI, Chakra UI                 | Headless — we control 100% of visual output    |
| Animation         | Framer Motion         | CSS animations, GSAP           | Controlled, declarative, React-native          |
| Form              | React Hook Form + Zod | Formik                         | Performance, smaller bundle, schema validation |
| Contact backend   | EmailJS or Formspree  | Custom Express API             | No backend complexity at launch                |
| Deployment        | Vercel                | Netlify, cPanel                | Zero-config React, GitHub integration          |
| Icons             | Lucide React          | Font Awesome, HeroIcons        | Tree-shakable, consistent stroke, open source  |

---

*Document version: 1.0*
*Owner: Shahajalal Mahmud (Development & Architecture)*
*Aligned with: design.md v1.0 · sitemap.md v1.0 · pages.md v1.0*