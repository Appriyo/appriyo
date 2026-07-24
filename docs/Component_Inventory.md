# Appriyo Website — Component Inventory

> Every component that needs to exist, where it lives, what it takes as
> props, and which spec section governs its exact look. Build in the order
> listed — later components depend on earlier ones.

---

## Primitives (`src/components/`) — Phase 1

### `Button`

**Spec:** `DESIGN_SYSTEM.md` §7.1
**Props:** `variant` (`primary` | `secondary` | `text`), `href` or `onClick`, `children`
**Notes:** Primary = solid ink bg. Secondary = outlined ghost. Text = underlined link style. No 4th variant — resist adding one.

### `LedgerLabel`

**Spec:** `DESIGN_SYSTEM.md` §4.3
**Props:** `children` (e.g. `"// 02 — Services"`)
**Notes:** Mono font, no uppercase transform, `--color-ink-muted`.

### `Stamp`

**Spec:** `DESIGN_SYSTEM.md` §6.1
**Props:** `children` (e.g. `"Live product"`, `"Verified"`)
**Notes:** -2° rotation, stamp-red border/text. **Only ever render this component next to content that is currently, verifiably true** — this is a content rule, not just a style rule, so double-check the calling section before use.

### `ReceiptCard`

**Spec:** `DESIGN_SYSTEM.md` §6.2
**Props:** `children`
**Notes:** Perforated top edge. Reserved for real evidence — screenshots, testimonials, product cards. Don't use for generic content; see `LedgerCard` instead.

### `LedgerCard`

**Spec:** `DESIGN_SYSTEM.md` §6.3
**Props:** `children`, optional `icon`
**Notes:** Plain bordered card, hover lift. Used for services list, process steps.

### `SectionHeader`

**Spec:** `DESIGN_SYSTEM.md` §5.2
**Props:** `label`, `heading`, `subtext` (optional)
**Notes:** Renders the rule → LedgerLabel → heading → subtext pattern every section opens with. Every section component below should start with this instead of hand-rolling its own header markup.

---

## Layout (`src/layout/`) — Phase 2

### `Nav`

**Spec:** `DESIGN_SYSTEM.md` §9 table (Nav row); `CONTENT_STRATEGY.md` §3.1
**Props:** none (static content from `src/data/nav.js`)
**Notes:** Sticky, bottom rule appears on scroll. Mobile: hamburger → full panel. Links: Services, Products, About (+ Work once it exists — see `CONTENT_STRATEGY.md` §2). CTA button uses `Button variant="primary"`.

### `Footer`

**Spec:** `CONTENT_STRATEGY.md` §3.10
**Props:** none
**Notes:** Plain mono meta text, real address/hours pulled from `TEAMS.md` contact info.

### `Layout`

**Notes:** Wraps `Nav` + page content + `Footer`. Used by every page in `src/pages/`.

---

## Homepage Sections (`src/sections/`) — Phase 3

Each section = one file, composed from primitives above + content from
`src/data/homepage.js`. None should define new card/button styles inline —
if a section seems to need a new visual pattern, that's a signal to add a
primitive instead, not a one-off.

| Component          | Spec (Design)                                                         | Spec (Content) |
| ------------------ | --------------------------------------------------------------------- | -------------- |
| `Hero.jsx`         | §9.1 (blueprint)                                                      | §3.2           |
| `Problem.jsx`      | §9 table                                                              | §3.3           |
| `Services.jsx`     | §9 table (grid of `LedgerCard`)                                       | §3.4           |
| `Products.jsx`     | §9 table (grid of `ReceiptCard` + `Stamp`)                            | §3.5           |
| `WhyAppriyo.jsx`   | §9 table (stat + team)                                                | §3.6           |
| `Process.jsx`      | §9 table (numbered steps)                                             | §3.7           |
| `Testimonials.jsx` | §9 table — **build only once real quotes exist, see roadmap Phase 5** | §3.8           |
| `Contact.jsx`      | §9 table                                                              | §3.9           |

`Home.jsx` (in `src/pages/`) composes these in order inside `Layout`.

---

## Product Pages (`src/pages/`) — Phase 4

### `ProductAmarRepair.jsx` / `ProductAmarBatch.jsx`

**Spec:** `CONTENT_STRATEGY.md` §4 (template)
**Notes:** Both follow the identical template structure — consider a shared
`ProductPageTemplate` component taking product-specific data as props,
rather than duplicating the layout twice. Data for each lives in
`src/data/products.js`.

```js
// src/data/products.js — shape reference
{
  slug: 'amar-repair',
  name: 'Amar Repair',
  tagline: 'Repair Store Management System',
  status: 'live' | 'in-development',   // drives the Stamp text — never hardcode "Live product" in the component
  subtext: '...',
  screenshot: '/assets/screenshots/amar-repair-dashboard.webp',
  problem: '...',
  capabilities: ['...', '...', '...'],
  techStack: ['...'],  // optional, small/muted per CONTENT_STRATEGY §4
}
```

Driving the Stamp text from a `status` field (rather than typing "Live
product" directly in JSX) makes it much harder to accidentally leave a
false claim on the page — changing a product's status to accurate becomes
a one-line data edit instead of a hunt through markup.

---

## Forms — Phase 5

### `ContactForm.jsx`

**Spec:** `CONTENT_STRATEGY.md` §3.9; `TECH_SPEC.md` §6
**Fields:** Name, Business name, Email, What are you trying to solve (textarea)
**Notes:** Submits to Formspree/Web3Forms endpoint (§6). Always render the
plain-text email/phone alongside the form, never form-only.

---

## Dev-Only Scaffold (deleted before launch)

### `/dev/components` route

**Notes:** Renders one instance of every primitive for visual QA during
Phase 1. Delete this route and its file before Phase 8 launch — it should
never ship to production.

---

## Build Order Summary

```
Phase 1:  Button → LedgerLabel → Stamp → ReceiptCard → LedgerCard → SectionHeader
Phase 2:  Nav → Footer → Layout
Phase 3:  Hero → Problem → Services → Products → WhyAppriyo → Process → Contact(UI only) → Home.jsx
Phase 4:  ProductPageTemplate → ProductAmarRepair → ProductAmarBatch
Phase 5:  ContactForm (wire real submission) → Testimonials (only if real quotes exist)
```
