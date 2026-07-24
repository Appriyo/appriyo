# Appriyo Website — Implementation Roadmap

### For phased development with puku-cli

> **How to use this doc:** Run one phase at a time. Give puku-cli this file
> plus the "Context to load" files listed for that phase — not the whole
> docs folder at once. Each phase has a done-when checklist; don't start the
> next phase until the current one passes it. This keeps each CLI session
> focused and reviewable instead of one unreviewable mega-build.

**Reference docs this roadmap depends on:**

- `DESIGN_SYSTEM.md` (v3.0 — "The Ledger System")
- `CONTENT_STRATEGY.md` (sitemap + page copy)
- `TECH_SPEC.md` (conventions, folder structure, config)
- `COMPONENT_INVENTORY.md` (every component, spec'd)
- `ASSET_CHECKLIST.md` (real assets needed, and by when)

---

## Phase 0 — Project Setup & Design Foundation

**Goal:** An empty running site with the correct fonts, colors, and spacing
system wired in — nothing visible yet except proof the foundation is right.

**Context to load:** `DESIGN_SYSTEM.md` §3 (Color), §4 (Type), §5 (Layout),
`TECH_SPEC.md` (all)

**Tasks:**

1. Scaffold the project per `TECH_SPEC.md` §1–2 (Vite + React + Tailwind)
2. Add font imports (Bitter, Inter, IBM Plex Mono) with `preconnect` + `display=swap`
3. Build `tailwind.config.js` with every color, font, spacing, and radius
   token from `DESIGN_SYSTEM.md` §3–5 — no hardcoded hex anywhere after this
4. Add global CSS reset + base typography styles
5. Add favicon placeholder (real logo comes in Phase 6 / see `ASSET_CHECKLIST.md`)

**Done when:**

- [ ] `npm run dev` renders a blank paper-colored (`#F7F5F0`) page
- [ ] A test heading renders in Bitter 900, body text in Inter
- [ ] No DaisyUI default theme colors are visible anywhere (see `TECH_SPEC.md` §3 for the DaisyUI decision)
- [ ] Zero hardcoded hex values in any file — grep for `#` outside `tailwind.config.js` should return nothing in `src/`

---

## Phase 1 — Design Primitives

**Goal:** Every reusable visual building block exists and is visibly correct
in isolation, before any real page is assembled from them.

**Context to load:** `DESIGN_SYSTEM.md` §6 (Signature Elements), §7 (Components),
`COMPONENT_INVENTORY.md` § Primitives

**Tasks:** Build each of these as a standalone component, per spec in
`COMPONENT_INVENTORY.md`:

1. `Button` (primary / secondary / text variants)
2. `LedgerLabel` (the small mono "// 02 — Services" style label)
3. `Stamp` (the verified-claim badge, §6.1)
4. `ReceiptCard` (perforated-edge card, §6.2 — for evidence only)
5. `LedgerCard` (plain card, §6.3 — for non-evidence content)
6. `SectionHeader` (rule + ledger label + heading + subtext, per §5.2 pattern)

**Temporary scaffold page:** create `/dev/components` (excluded from nav,
deleted before launch) rendering one of each primitive with sample content,
so they can be checked visually before being used anywhere real.

**Done when:**

- [ ] All 6 primitives render correctly on `/dev/components`
- [ ] Stamp shows the -2° rotation and stamp-red border
- [ ] ReceiptCard shows the perforated top edge
- [ ] Buttons show correct hover states (translateY + shadow, per spec)
- [ ] Everything is keyboard-focusable with a visible focus ring

---

## Phase 2 — Layout Shell (Nav + Footer)

**Goal:** The parts of the site that appear on every page.

**Context to load:** `DESIGN_SYSTEM.md` §9 (Page Structure), `CONTENT_STRATEGY.md` §3.1, §3.10

**Tasks:**

1. Build `Nav` — logo, links (Services / Products / About — omit "Work" per
   `CONTENT_STRATEGY.md` §2 until a real case study exists), primary CTA button
2. Mobile nav: hamburger menu, full-screen or slide-down panel, 44px+ touch targets
3. Build `Footer` — company info, link columns, copyright, per `CONTENT_STRATEGY.md` §3.10
4. Wire both into a shared `Layout` wrapper

**Done when:**

- [ ] Nav is sticky, shows a bottom rule (not a shadow/glow) on scroll
- [ ] Mobile menu opens/closes correctly, no layout shift
- [ ] Footer content matches `CONTENT_STRATEGY.md` §3.10 exactly
- [ ] Tested at 375px, 768px, 1024px, 1440px

---

## Phase 3 — Homepage Sections (static structure, placeholder media)

**Goal:** The full homepage exists and scrolls correctly, using the real
written copy from `CONTENT_STRATEGY.md` but placeholder images where real
screenshots aren't ready yet (see `ASSET_CHECKLIST.md`).

**Context to load:** `CONTENT_STRATEGY.md` §3 (all), `DESIGN_SYSTEM.md` §9.1 (Hero Blueprint)

**Build in this order** (each is independently reviewable):

1. Hero (§3.2) — use a labeled grey placeholder box in the ReceiptCard frame
   if the real Amar Repair screenshot isn't ready; label it clearly
   `[PLACEHOLDER — replace before launch]` in a code comment
2. Problem statement (§3.3)
3. Services (§3.4) — 5 LedgerCards
4. Products (§3.5) — 2 ReceiptCards; **do not** apply the "Live product"
   Stamp until confirmed true — default to no stamp until Phase 5 asset check
5. Why Appriyo (§3.6) — leave stat numbers as clearly-marked placeholders;
   never invent a number here even temporarily in a way that could ship
6. Process (§3.7) — 4 numbered ledger steps
7. Contact (§3.9) — form UI only, no submission logic yet (that's Phase 5)

**Skip entirely for now:** Testimonials (§3.8) — per `CONTENT_STRATEGY.md`
§6, do not build a placeholder testimonials section at all; it's easy to
forget to remove a "Lorem client" quote before launch, so the safer move is
not building the section until Phase 5 confirms real quotes exist.

**Done when:**

- [ ] Full page scrolls top to bottom in the order above
- [ ] Every placeholder is visibly and unambiguously marked as a placeholder
      (not just visually similar to real content)
- [ ] No invented stats, testimonials, or stamps anywhere
- [ ] Responsive at all 4 breakpoints, no horizontal scroll

---

## Phase 4 — Product Detail Pages

**Goal:** `/products/amar-repair` and `/products/amar-batch` as real,
linkable pages.

**Context to load:** `CONTENT_STRATEGY.md` §4 (template)

**Tasks:**

1. Build the product page template exactly per §4 structure
2. Populate both pages with real copy (screenshots still placeholder if not ready)
3. Link Products section cards on homepage to these pages
4. Add basic meta tags (title, description, OG image placeholder) per page

**Done when:**

- [ ] Both pages exist and are reachable from the homepage
- [ ] Structure matches the template order exactly
- [ ] Each has a working "back to homepage" and a Contact CTA at the end

---

## Phase 5 — Real Assets, Real Claims

**Goal:** Replace every placeholder with the real thing. This phase cannot
be "mostly done" — it's a hard gate before launch.

**Context to load:** `ASSET_CHECKLIST.md` (all), `DESIGN_SYSTEM.md` §2.5, §6.1

**Tasks:**

1. Swap in real Amar Repair / Amar Batch screenshots
2. Add real team photos to Why Appriyo section (or explicitly-designed
   initials avatars if photos aren't available — see `ASSET_CHECKLIST.md`)
3. Fill in real, currently-true stat numbers (or remove the stat entirely
   if nothing verifiable exists yet — an empty stats row is fine, a fake one is not)
4. Apply "Live product" Stamp only where genuinely true; otherwise use
   "In development" per `CONTENT_STRATEGY.md` §3.5
5. If any real testimonial exists by this point, build the Testimonials
   section now (§3.8) using the real quote — otherwise leave it out
6. Wire the Contact form to a real destination (see `TECH_SPEC.md` §6 for
   the no-backend-budget approach)

**Done when:**

- [ ] Zero `[PLACEHOLDER]` comments remain anywhere in the codebase (grep to confirm)
- [ ] Every Stamp on the page is next to something a visitor could actually verify
- [ ] Contact form successfully delivers a test message end to end

---

## Phase 6 — Motion & Accessibility Pass

**Goal:** The restrained motion system from the spec, and a genuinely
accessible site — not an afterthought pass.

**Context to load:** `DESIGN_SYSTEM.md` §8 (Motion), §13 (QA Checklist)

**Tasks:**

1. Add scroll-reveal (fade + 12px rise) to section entries, staggered per §8.2
2. Respect `prefers-reduced-motion` — verify with OS setting toggled on
3. Full keyboard-navigation pass: tab through the entire site, confirm every
   interactive element is reachable and has a visible focus state
4. Alt text on every image, correct heading hierarchy (one `h1` per page),
   form labels properly associated with inputs
5. Run an automated accessibility check (axe or Lighthouse) and fix findings

**Done when:**

- [ ] Lighthouse Accessibility score ≥ 95
- [ ] Site is fully usable with keyboard only, no mouse
- [ ] No animation exceeds 360ms or delays the headline

---

## Phase 7 — Performance Pass

**Goal:** Meets `DESIGN_SYSTEM.md` §11 targets, tested realistically —
this matters more than usual given the target audience's typical connection.

**Context to load:** `DESIGN_SYSTEM.md` §11

**Tasks:**

1. Compress and convert all images to WebP, confirm ≤150KB each without losing text legibility on screenshots
2. Lazy-load below-the-fold images
3. Confirm font loading doesn't block first paint (`display=swap` in effect)
4. Run Lighthouse with mobile + throttled "Slow 4G" preset

**Done when:**

- [ ] Lighthouse Performance ≥ 90 on the throttled mobile preset, not just desktop
- [ ] LCP ≤ 2.5s, CLS ≤ 0.1 on that same test

---

## Phase 8 — Final QA & Launch

**Goal:** Ship it.

**Context to load:** `DESIGN_SYSTEM.md` §13 (Design QA Checklist),
`CONTENT_STRATEGY.md` §6 (What Not to Put on the Site Yet)

**Tasks:**

1. Run the full Design QA Checklist (`DESIGN_SYSTEM.md` §13) line by line
2. Run the "What Not to Put on the Site Yet" audit (`CONTENT_STRATEGY.md` §6)
   line by line — confirm none of those things snuck in
3. Cross-browser check: Chrome, Safari (iOS), Samsung Internet (common on
   the target audience's phones), Firefox
4. Deploy to hosting (see `TECH_SPEC.md` §7)
5. Point `appriyo.com` DNS at the deployment
6. All 4 team members do a final read-through on their own phones before announcing publicly

**Done when:**

- [ ] Both checklists pass with no unchecked items
- [ ] Live at `appriyo.com` over HTTPS
- [ ] Confirmed working on at least one real Android phone, not just desktop dev tools

---

## After Launch (not a phase — ongoing)

- Add real case studies to `/work` as they happen; only create the page once there's ≥1 entry (per `CONTENT_STRATEGY.md` §2)
- Add real testimonials as they come in
- Revisit stats section as real numbers accumulate
- Treat this roadmap as reusable: same phase structure applies to future product pages or major sections
