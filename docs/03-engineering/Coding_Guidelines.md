# 📐 APPRIYO WEBSITE — CODING GUIDELINES (v1.0)

> **Purpose:**
> Defines how code is written, formatted, reviewed, and maintained on the Appriyo website.
> This is not a suggestion document — every developer follows these guidelines without exception.
> Inconsistent code is a debt that compounds. These rules prevent it from accumulating.

> **Aligned with:** `architecture.md` · `design.md`
> **Read alongside:** `components.md` for component-specific rules

---

# 1. CORE CODING PHILOSOPHY

> **Write code for the next person who reads it — not the machine that runs it.**

The Appriyo team is small. Code that is clever but unreadable is a liability.
Code that is simple, explicit, and predictable is an asset.

Three non-negotiable principles:

1. **Explicit over implicit** — Name things clearly. No guessing what a variable does.
2. **Simple over clever** — If it needs a comment to explain what it does, rewrite it.
3. **Consistent over personal** — Follow the team standard, not your preference.

---

# 2. FILE AND FOLDER RULES

## 2.1 Canonical Structure

Follow `architecture.md §2` exactly. No new folders are created without team discussion.

## 2.2 File Naming

| Type              | Convention               | Examples                             |
|-------------------|--------------------------|--------------------------------------|
| React components  | PascalCase               | `ServiceCard.jsx`, `HeroSection.jsx` |
| Hooks             | camelCase, `use` prefix  | `useScrolled.js`, `useFormSubmit.js` |
| Data files        | camelCase                | `services.js`, `navigation.js`       |
| Utility functions | camelCase                | `cn.js`, `seo.js`                    |
| CSS files         | kebab-case               | `globals.css`                        |
| Config files      | kebab-case or dot-prefix | `vite.config.js`, `.eslintrc.js`     |
| Documentation     | kebab-case `.md`         | `coding_guidelines.md`               |

## 2.3 One Component Per File

No exceptions. Never co-locate two exported components in the same file.

```jsx
// ❌ WRONG — two components in one file
export function Card() { ... }
export function CardTitle() { ... }   // ← move this to CardTitle.jsx

// ✅ CORRECT — one component per file
// Card.jsx → export function Card()
// CardTitle.jsx → export function CardTitle()
```

## 2.4 Barrel Exports

Each component folder has an `index.js` that re-exports everything:

```js
// src/components/ui/index.js
export { Button } from './Button';
export { Card } from './Card';
export { Badge } from './Badge';
export { Divider } from './Divider';
```

This allows clean imports: `import { Button, Card } from '@/components/ui'`

---

# 3. IMPORT RULES

## 3.1 Always Use Path Aliases

```jsx
// ✅ CORRECT
import { Button } from '@/components/ui';
import { services } from '@/data/services';
import { cn } from '@/utils/cn';

// ❌ WRONG — relative paths beyond 1 level
import { Button } from '../../components/ui/Button';
import { services } from '../../../data/services';
```

## 3.2 Import Order

Imports are always grouped in this order, with a blank line between groups:

```jsx
// 1. React and React-related
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// 2. External libraries
import { Cog, ArrowRight } from 'lucide-react';

// 3. Internal — components
import { Button, Card } from '@/components/ui';
import { CTABlock } from '@/components/common';

// 4. Internal — data, hooks, utils
import { services } from '@/data/services';
import { useScrolled } from '@/hooks/useScrolled';
import { cn } from '@/utils/cn';
```

## 3.3 No Default Imports from Data Files

```js
// ❌ WRONG
import services from '@/data/services';

// ✅ CORRECT
import { services } from '@/data/services';
```

---

# 4. COMPONENT WRITING RULES

## 4.1 Always Use Named Function Declarations for Components

```jsx
// ✅ CORRECT — named function, named export
export function ServiceCard({ title, description }) {
  return <div>{title}</div>;
}

// ❌ WRONG — arrow function component
export const ServiceCard = ({ title, description }) => {
  return <div>{title}</div>;
};

// Exception: Pages use default export (for React Router)
export default function Services() { ... }
```

## 4.2 Props Must Be Documented

Every component must have JSDoc above the function:

```jsx
/**
 * ServiceCard
 * Displays a single service offering with icon, title, description, and CTA.
 *
 * @param {string} title - Service name
 * @param {string} description - 2-line max service description
 * @param {React.ElementType} icon - Lucide icon component (not a string)
 * @param {string} [ctaLabel] - Optional CTA button text
 * @param {string} [ctaHref] - Optional CTA destination URL
 */
export function ServiceCard({ title, description, icon: Icon, ctaLabel, ctaHref }) {
  ...
}
```

## 4.3 Destructure Props at the Function Signature

```jsx
// ✅ CORRECT — destructured at signature
export function TeamCard({ name, role, focus, photo }) {
  return ...;
}

// ❌ WRONG — using props.x inside
export function TeamCard(props) {
  return <div>{props.name}</div>;
}
```

## 4.4 Default Props Inline

```jsx
// ✅ CORRECT — defaults inline in destructuring
export function Button({ label, variant = 'primary', href = null, onClick = null }) {
  ...
}
```

## 4.5 Component Length Limit

**Max 150 lines per component file.** If a component exceeds this:
- Extract sub-components
- Move logic to a custom hook
- Move static data to `data/` files

## 4.6 No Logic in JSX

```jsx
// ❌ WRONG — logic inline in JSX
return (
  <div>
    {services.filter(s => s.active).map(s => (
      <ServiceCard key={s.id} {...s} />
    ))}
  </div>
);

// ✅ CORRECT — logic before return
const activeServices = services.filter(s => s.active);

return (
  <div>
    {activeServices.map(s => (
      <ServiceCard key={s.id} {...s} />
    ))}
  </div>
);
```

---

# 5. STYLING RULES

## 5.1 Tailwind Only — No Inline Styles

```jsx
// ❌ WRONG — never
<div style={{ backgroundColor: '#111827', padding: '24px' }}>

// ✅ CORRECT
<div className="bg-surface p-6">
```

## 5.2 Use Design Token Classes

```jsx
// ❌ WRONG — using generic Tailwind color
<p className="text-gray-400">Description</p>

// ✅ CORRECT — using design system token
<p className="text-text-secondary">Description</p>
```

## 5.3 Use `cn()` for Conditional Classes

```jsx
import { cn } from '@/utils/cn';

// ✅ CORRECT
<div className={cn(
  'rounded-xl border border-border bg-surface p-6',
  isActive && 'border-primary',
  className
)}>

// ❌ WRONG — string interpolation for conditionals
<div className={`rounded-xl ${isActive ? 'border-primary' : 'border-border'}`}>
```

## 5.4 Accept `className` Prop on All UI Components

```jsx
// All UI components must accept and apply a className prop for external overrides
export function Card({ children, className }) {
  return (
    <div className={cn('rounded-xl border border-border bg-surface p-6', className)}>
      {children}
    </div>
  );
}
```

## 5.5 Mobile-First Responsive Classes

```jsx
// ✅ CORRECT — mobile first, then scale up
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

// ❌ WRONG — desktop first, then undo
<div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
```

## 5.6 No Arbitrary Values Without Justification

```jsx
// ❌ WRONG — arbitrary value with no reason
<div className="w-[347px] mt-[13px]">

// ✅ CORRECT — use the scale
<div className="w-80 mt-3">

// Acceptable exception — document it
<div className="h-[1px]"> {/* Thin divider — no scale equivalent */}
```

---

# 6. JAVASCRIPT RULES

## 6.1 Use `const` by Default

```js
// ✅ CORRECT
const activeServices = services.filter(s => s.active);

// ❌ WRONG — let when const works
let activeServices = services.filter(s => s.active);
```

## 6.2 Avoid Mutation

```js
// ❌ WRONG — mutates original
services.push(newService);

// ✅ CORRECT — returns new array
const updatedServices = [...services, newService];
```

## 6.3 No `var`

`var` is forbidden. Always `const` or `let`.

## 6.4 Arrow Functions for Callbacks, Named for Top-Level

```js
// ✅ Arrow function for callbacks
const active = services.filter(s => s.active);
const names = services.map(s => s.title);

// ✅ Named function for top-level logic
function getActiveServices(services) {
  return services.filter(s => s.active);
}
```

## 6.5 Optional Chaining and Nullish Coalescing

```js
// ✅ CORRECT
const title = service?.title ?? 'Untitled';
const features = product?.features ?? [];

// ❌ WRONG — verbose null checks
const title = service && service.title ? service.title : 'Untitled';
```

## 6.6 No Magic Numbers or Strings

```js
// ❌ WRONG — magic string
if (status === 'active') { ... }

// ✅ CORRECT — named constant
const STATUS = { ACTIVE: 'active', INACTIVE: 'inactive' };
if (status === STATUS.ACTIVE) { ... }
```

---

# 7. REACT-SPECIFIC RULES

## 7.1 Keys Must Be Stable and Unique

```jsx
// ❌ WRONG — index as key (unstable on reorder)
{services.map((service, index) => (
  <ServiceCard key={index} {...service} />
))}

// ✅ CORRECT — stable ID from data
{services.map(service => (
  <ServiceCard key={service.id} {...service} />
))}
```

## 7.2 useEffect Rules

```jsx
// ✅ CORRECT — dependency array always present
useEffect(() => {
  document.title = pageTitle;
}, [pageTitle]);

// ❌ WRONG — missing dependency array (runs every render)
useEffect(() => {
  document.title = pageTitle;
});

// ❌ WRONG — empty array when dependencies exist
useEffect(() => {
  doSomethingWith(value);
}, []); // ← value should be in the array
```

## 7.3 Never Modify State Directly

```jsx
// ❌ WRONG — direct mutation
state.items.push(newItem);

// ✅ CORRECT — immutable update
setItems(prev => [...prev, newItem]);
```

## 7.4 Fragment Over Unnecessary Wrappers

```jsx
// ❌ WRONG — unnecessary div wrapper
return (
  <div>
    <h1>Heading</h1>
    <p>Body</p>
  </div>
);

// ✅ CORRECT
return (
  <>
    <h1>Heading</h1>
    <p>Body</p>
  </>
);
```

## 7.5 Conditional Rendering Patterns

```jsx
// ✅ CORRECT — ternary for true/false render
{isLoading ? <Spinner /> : <Content />}

// ✅ CORRECT — && for single condition
{hasError && <ErrorMessage />}

// ❌ WRONG — 0 renders "0" in JSX
{items.length && <List />}   // Bug if items.length is 0

// ✅ CORRECT — explicit boolean
{items.length > 0 && <List />}
```

---

# 8. NAMING CONVENTIONS (COMPLETE REFERENCE)

| Thing                       | Convention           | Example                             |
|-----------------------------|----------------------|-------------------------------------|
| React component             | PascalCase           | `ServiceCard`, `HeroSection`        |
| Page component              | PascalCase           | `Home`, `Contact`                   |
| Custom hook                 | camelCase + `use`    | `useScrolled`, `useFormSubmit`      |
| Regular function            | camelCase            | `getActiveServices()`               |
| Event handler               | `handle` + event     | `handleSubmit`, `handleClick`       |
| Boolean variable            | `is` / `has` / `can` | `isOpen`, `hasError`, `canSubmit`   |
| Array                       | Plural noun          | `services`, `products`, `steps`     |
| Object/instance             | Singular noun        | `service`, `product`, `step`        |
| Constant                    | SCREAMING_SNAKE      | `MAX_FILE_SIZE`, `API_URL`          |
| CSS class (custom)          | kebab-case           | `site-container`, `section-spacing` |
| Data file                   | camelCase            | `services.js`, `navigation.js`      |
| Prop for children render    | `children`           | Standard React pattern              |
| Prop for className override | `className`          | Standard React pattern              |

---

# 9. COMMENTS AND DOCUMENTATION

## 9.1 When to Comment

```jsx
// ✅ Comment when WHY is non-obvious, not WHAT
// Using aria-hidden here because the icon is decorative — label provides context
<span aria-hidden="true"><Icon /></span>

// ❌ Comment that states the obvious — delete it
// Map over services array
{services.map(service => <ServiceCard key={service.id} {...service} />)}
```

## 9.2 Comment Format

```js
// Single-line comment — for brief notes

/**
 * Multi-line JSDoc — for component and function documentation
 * @param {string} title - Component title
 */
```

## 9.3 TODO Comments

```js
// TODO: [Issue #23] — Replace with real data once API is ready
// FIXME: [Munna] — Investigate safari scroll bug on contact form
// NOTE: This is intentional — see architecture.md §5.1 for reasoning
```

Always include: what, who owns it (if applicable), or issue reference.
No orphan `// TODO` comments without context.

---

# 10. ERROR HANDLING RULES

## 10.1 Form Errors — Always Handled

```jsx
// Every form submission has three states: loading, success, error
const { isSubmitting, isSubmitSuccessful } = useFormState();

// Loading: Show "Sending..." in button
// Success: Replace form with success message
// Error: Show error message with manual contact details
```

## 10.2 No Silent Failures

```js
// ❌ WRONG — swallows error
try {
  await submitForm(data);
} catch (e) {}

// ✅ CORRECT — handles error explicitly
try {
  await submitForm(data);
} catch (error) {
  setSubmitError('Something went wrong. Please contact us directly.');
  console.error('Form submission failed:', error);
}
```

## 10.3 Optional Chaining as Defense

```jsx
// ✅ Always guard data from external sources
<p>{product?.tagline ?? 'No description available'}</p>
```

---

# 11. PERFORMANCE RULES

## 11.1 No Premature Optimization

Don't add `useMemo` or `useCallback` unless there's a measured performance problem.
The Appriyo website is a content site — the first rule is correctness, second is clarity, third is performance.

## 11.2 Image Rules

```jsx
// ✅ CORRECT — lazy loading, explicit dimensions
<img
  src="/assets/images/amar-repair-dashboard.webp"
  alt="Amar Repair dashboard showing active repair jobs"
  width={800}
  height={500}
  loading="lazy"
/>

// ❌ WRONG — no dimensions, no alt, no lazy load
<img src="/assets/images/dashboard.png" />
```

## 11.3 No Anonymous Functions in JSX Render

```jsx
// ❌ WRONG — new function created every render
<Button onClick={() => handleClick(service.id)}>

// ✅ CORRECT — extract handler or use useCallback
const handleServiceClick = () => handleClick(service.id);
<Button onClick={handleServiceClick}>
```

## 11.4 Lazy Load Routes

```jsx
// src/App.jsx
import { lazy, Suspense } from 'react';

const Services = lazy(() => import('@/pages/Services'));
const Products = lazy(() => import('@/pages/Products'));

// Wrap in Suspense with fallback
<Suspense fallback={<PageLoader />}>
  <Routes>
    <Route path="/services" element={<Services />} />
    <Route path="/products" element={<Products />} />
  </Routes>
</Suspense>
```

---

# 12. GIT AND VERSION CONTROL

## 12.1 Branch Naming

```
feature/hero-section          → New feature
feature/contact-form          → New feature
fix/navbar-mobile-overflow    → Bug fix
fix/form-validation-error     → Bug fix
chore/update-dependencies     → Maintenance
chore/add-eslint-rule         → Maintenance
docs/update-readme            → Documentation only
```

## 12.2 Commit Message Format

Format: `type: short description (50 chars max)`

```
feat: add hero section with two CTAs
feat: build contact form with validation
fix: resolve navbar z-index on mobile
fix: correct form success state display
chore: configure eslint and prettier
chore: add lucide-react dependency
docs: update architecture decision log
style: fix inconsistent spacing in ServiceCard
refactor: extract CTABlock from HeroSection
```

Types: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `test`

## 12.3 PR Rules

- Every PR has a title matching the commit format
- Every PR references the relevant doc section it implements (e.g., "Implements pages.md §1.1")
- No PR adds more than 300 lines of new code without team discussion
- PR author runs Lighthouse before requesting review
- PRs must pass ESLint with zero errors before review

## 12.4 What Never Goes in a Commit

- `.env` files or API keys
- `node_modules/`
- Build output (`dist/`)
- Personal editor config files (`.vscode/` if not team-agreed)
- Console.log debugging code

---

# 13. ENVIRONMENT AND SECRETS

## 13.1 Environment Variables

```
# .env.local (local only — never committed)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_FORMSPREE_ENDPOINT=your_formspree_url
```

## 13.2 Accessing Env Variables

```js
// ✅ CORRECT — via import.meta.env (Vite)
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;

// ❌ WRONG — process.env doesn't work in Vite client
const serviceId = process.env.VITE_EMAILJS_SERVICE_ID;
```

## 13.3 Never Hardcode Secrets

```js
// ❌ NEVER — hardcoded API key in source
const key = 'pk_live_abc123xyz789';

// ✅ ALWAYS — from environment
const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

---

# 14. CODE REVIEW CHECKLIST

Before approving any PR, the reviewer checks:

```
STRUCTURE
[ ] File lives in the correct folder per architecture.md
[ ] One component per file
[ ] Imports are aliased (@/) and ordered correctly
[ ] No new dependencies added without discussion

COMPONENT QUALITY
[ ] Named function declaration (not arrow function)
[ ] JSDoc above function with param documentation
[ ] Props destructured at signature
[ ] No logic in JSX — logic extracted before return
[ ] Component is under 150 lines

STYLING
[ ] No inline style={{}} props
[ ] No hardcoded colors — design tokens used
[ ] cn() used for conditional classes
[ ] Mobile-first responsive classes

CODE QUALITY
[ ] No console.log remaining
[ ] No magic numbers or strings
[ ] Error states handled for any async operation
[ ] Keys are stable IDs, not array indexes

CONTENT
[ ] No copy hardcoded in JSX — comes from data/ files or props
[ ] Copy matches pages.md for this section

ACCESSIBILITY
[ ] Images have descriptive alt text
[ ] Interactive elements are keyboard accessible
[ ] Semantic HTML used

PERFORMANCE
[ ] Images are WebP, lazy loaded, with explicit dimensions
[ ] No anonymous functions in JSX event handlers
```

---

# 15. FORBIDDEN PATTERNS (QUICK REFERENCE)

| Pattern                                  | Why Forbidden                   |
|------------------------------------------|---------------------------------|
| `style={{}}` in JSX                      | Breaks design system            |
| `var` declarations                       | Use `const` or `let`            |
| `index` as map key                       | Unstable on reorder             |
| Hardcoded copy in JSX                    | Couples content to code         |
| `../../` relative imports                | Use `@/` alias                  |
| `!important` in CSS                      | Fix specificity properly        |
| Mutation of state                        | Use immutable patterns          |
| `console.log` in committed code          | Use proper error handling       |
| Empty catch blocks                       | Always handle errors explicitly |
| Missing `alt` on images                  | Accessibility violation         |
| Missing dependency arrays in `useEffect` | Bugs and infinite loops         |
| Anonymous functions in JSX render        | Performance regression          |
| API keys in source code                  | Security violation              |

---

*Document version: 1.0*
*Owner: Shahajalal Mahmud (Development & Architecture)*
*Enforced by: ESLint config + PR review checklist*
*Aligned with: architecture.md v1.0 · design.md v1.0*