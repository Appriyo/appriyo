# Appriyo Website — Phase Prompts for puku-cli

> Copy one prompt at a time into puku-cli. Wait for it to finish and pass
> the "Done when" checklist before pasting the next one. Don't paste all 9
> in one session — that defeats the point of phasing.
>
> Make sure `DESIGN_SYSTEM.md`, `CONTENT_STRATEGY.md`, `TECH_SPEC.md`,
> `COMPONENT_INVENTORY.md`, `ASSET_CHECKLIST.md`, and `IMPLEMENTATION_ROADMAP.md`
> are all present in the project root (or wherever puku-cli reads context
> from) before starting Phase 0.

---

## Phase 0 — Project Setup & Design Foundation

```
Read TECH_SPEC.md in full, and DESIGN_SYSTEM.md sections 3 (Color), 4
(Typography), and 5 (Layout) before doing anything else.

Set up the Appriyo website project:

1. Scaffold a Vite + React project per TECH_SPEC.md §1-2.
2. Install and configure Tailwind CSS. Do NOT install or use DaisyUI
   component classes anywhere — see TECH_SPEC.md §3 for why.
3. Add Google Fonts imports for Bitter, Inter, and IBM Plex Mono, with
   preconnect and display=swap, per DESIGN_SYSTEM.md §4.1.
4. Build tailwind.config.js with every color, font, spacing, shadow, and
   radius token defined in DESIGN_SYSTEM.md §3-5. Use the exact token names
   and hex values given — do not invent your own naming. Reference
   TECH_SPEC.md §4 for the expected config shape.
5. Add a global CSS file with a base reset and default typography (body
   text in Inter, headings default to Bitter).
6. Add a placeholder favicon (a simple placeholder is fine — the real logo
   comes later, per ASSET_CHECKLIST.md).
7. Set up the folder structure exactly as specified in TECH_SPEC.md §5
   (components/, sections/, pages/, data/, layout/, styles/, assets/).

Do not build any components, sections, or pages yet — this phase is
foundation only. When finished, run through this checklist and report the
result of each item:

- [ ] npm run dev renders a blank page with background color #F7F5F0
- [ ] A test heading renders in Bitter at weight 900, body text in Inter
- [ ] No DaisyUI default styling is present anywhere
- [ ] grep -r "#" src/ (excluding tailwind.config.js) returns no hardcoded
      hex colors

Stop after this and report status — do not proceed to building components.
```

---

## Phase 1 — Design Primitives

```
Read DESIGN_SYSTEM.md sections 6 (Signature Elements) and 7 (Components),
and the "Primitives" section of COMPONENT_INVENTORY.md before starting.

Build the following components in src/components/, one file each, matching
the exact specs in COMPONENT_INVENTORY.md and the CSS given in
DESIGN_SYSTEM.md §6-7:

1. Button.jsx — variants: primary, secondary, text (spec: DESIGN_SYSTEM.md §7.1)
2. LedgerLabel.jsx — small mono label, e.g. "// 02 — Services" (spec: §4.3)
3. Stamp.jsx — verified-claim badge, -2deg rotation, stamp-red border
   (spec: §6.1). Add a code comment on this component reminding future
   editors it must only be used next to genuinely verifiable claims.
4. ReceiptCard.jsx — perforated top-edge card for real evidence only
   (spec: §6.2)
5. LedgerCard.jsx — plain bordered card with hover lift, for non-evidence
   content (spec: §6.3)
6. SectionHeader.jsx — the rule + LedgerLabel + heading + subtext pattern
   every section opens with (spec: §5.2)

Use only the Tailwind tokens set up in Phase 0 — no hardcoded values.

Create a temporary route at /dev/components that renders one instance of
each primitive with sample content, so they can be visually reviewed. This
route must not be linked from the nav and must be deleted before launch
(Phase 8) — add a code comment saying so.

When finished, report against this checklist:

- [ ] All 6 primitives render correctly on /dev/components
- [ ] Stamp shows the -2 degree rotation and stamp-red border/background
- [ ] ReceiptCard shows a visible perforated top edge
- [ ] Buttons show the correct hover states (translateY + shadow change)
- [ ] Every interactive primitive (Button) has a visible keyboard focus ring

Stop after this and report status — do not build Nav, Footer, or sections yet.
```

---

## Phase 2 — Layout Shell (Nav + Footer)

```
Read DESIGN_SYSTEM.md section 9 (Page Structure table) and CONTENT_STRATEGY.md
sections 3.1 (Nav) and 3.10 (Footer) before starting.

Using the primitives built in Phase 1, build:

1. Nav.jsx in src/layout/ — logo on the left, links: Services, Products,
   About (do NOT include a "Work" link yet — CONTENT_STRATEGY.md §2 says to
   omit it until a real case study exists), and a primary CTA Button on the
   right using the Button component. Make it sticky, with a thin bottom
   rule that appears on scroll (not a shadow or glow effect).
2. A mobile version of Nav: hamburger icon that opens a full-panel or
   slide-down menu, all touch targets at least 44x44px.
3. Footer.jsx in src/layout/ — content exactly as written in
   CONTENT_STRATEGY.md §3.10 (company name, location, email, link columns,
   copyright line). Use real contact info if available in the project's
   TEAMS.md, otherwise use the placeholders from CONTENT_STRATEGY.md.
4. Layout.jsx — wraps Nav + a children slot + Footer, for use by every page.

When finished, report against this checklist:

- [ ] Nav is sticky and shows the bottom rule correctly on scroll
- [ ] Mobile hamburger menu opens and closes without layout shift
- [ ] Footer content matches CONTENT_STRATEGY.md §3.10 exactly
- [ ] Tested and working at 375px, 768px, 1024px, and 1440px widths

Stop after this and report status — do not build homepage sections yet.
```

---

## Phase 3 — Homepage Sections

```
Read CONTENT_STRATEGY.md section 3 in full, and DESIGN_SYSTEM.md section 9.1
(Hero Blueprint) before starting.

First, create src/data/homepage.js containing the actual copy for every
section below, taken directly from CONTENT_STRATEGY.md §3 — do not
paraphrase or shorten the approved copy.

Then build these section components in src/sections/, in this order, each
composed from the primitives already built (do not invent new visual
styles inline — if something seems to need a new pattern, stop and flag it
instead of improvising):

1. Hero.jsx (CONTENT_STRATEGY.md §3.2, DESIGN_SYSTEM.md §9.1) — if a real
   Amar Repair screenshot isn't available yet, use a clearly labeled grey
   placeholder box inside the ReceiptCard frame, with a visible on-page
   label reading "[PLACEHOLDER — replace before launch]" and a matching
   code comment.
2. Problem.jsx (§3.3) — full-width dim-background panel, one large
   centered question, no icons or bullets.
3. Services.jsx (§3.4) — grid of 5 LedgerCards.
4. Products.jsx (§3.5) — 2 ReceiptCards for Amar Repair and Amar Batch.
   Do NOT add a "Live product" Stamp yet — leave it off entirely until
   Phase 5 confirms status.
5. WhyAppriyo.jsx (§3.6) — stat numbers as clearly labeled placeholders
   (e.g. "[PLACEHOLDER STAT]"), never a plausible-looking invented number.
   Include 4 team member cards using names/roles from TEAMS.md.
6. Process.jsx (§3.7) — 4 numbered ledger steps.
7. Contact.jsx (§3.9) — build the form UI only (Name, Business name, Email,
   message field) with no working submit action yet.

Do NOT build a Testimonials section in this phase — per CONTENT_STRATEGY.md
§6, that section should not exist until real quotes are confirmed in Phase 5.

Assemble all of the above into src/pages/Home.jsx in the listed order,
wrapped in Layout.

When finished, report against this checklist:

- [ ] Full homepage scrolls top to bottom in the section order listed above
- [ ] Every placeholder is visibly and unambiguously marked, both on-page
      and in code comments
- [ ] No invented stats, no testimonials section, no stamps anywhere on
      the Products section
- [ ] Responsive with no horizontal scroll at 375px, 768px, 1024px, 1440px

Stop after this and report status — do not build product detail pages yet.
```

---

## Phase 4 — Product Detail Pages

```
Read CONTENT_STRATEGY.md section 4 (product page template) and
COMPONENT_INVENTORY.md's "Product Pages" section before starting.

1. Install and set up React Router if not already present.
2. Create src/data/products.js with the data shape shown in
   COMPONENT_INVENTORY.md (slug, name, tagline, status, subtext,
   screenshot, problem, capabilities, techStack).
3. Build a shared ProductPageTemplate component that renders the structure
   from CONTENT_STRATEGY.md §4 (label, headline, subtext, status-driven
   Stamp, hero screenshot, problem section, capabilities section, optional
   tech stack section, closing CTA to Contact) using data passed as props —
   do not duplicate this layout twice.
4. Create routes /products/amar-repair and /products/amar-batch, each
   rendering ProductPageTemplate with the appropriate data entry.
5. Populate real copy for both products now (screenshots can remain
   placeholders if not ready — mark clearly per the Phase 3 convention).
6. Link the Products cards on the homepage to these new pages.
7. Add basic per-page meta tags: title, description, and an OG image
   placeholder.

The Stamp on each product page must read its text from the `status` field
in products.js (e.g. "live" -> "Live product", "in-development" -> "In
development") — do not hardcode the Stamp text directly in the template.

When finished, report against this checklist:

- [ ] Both product pages exist and are reachable by clicking through from
      the homepage Products section
- [ ] Page structure matches the CONTENT_STRATEGY.md §4 template order
      exactly
- [ ] Each page has a working link back to the homepage and a Contact CTA
      at the end
- [ ] Stamp text is driven by the status field, not hardcoded

Stop after this and report status — do not source or swap in real final
assets yet, that's Phase 5.
```

---

## Phase 5 — Real Assets, Real Claims

```
Read ASSET_CHECKLIST.md in full, and DESIGN_SYSTEM.md sections 2.5 and 6.1
before starting.

This phase only proceeds once the real assets listed in ASSET_CHECKLIST.md
have been supplied to the project (screenshots, team photos, confirmed
stats, confirmed product status for each product). If any required asset
listed under "Required Before Phase 5" in ASSET_CHECKLIST.md is missing,
stop and report exactly which ones are missing instead of substituting a
placeholder or guessing.

Once assets are available:

1. Replace the Hero and Products placeholder screenshots with the real
   Amar Repair / Amar Batch images (compressed to WebP, under 150KB each,
   per DESIGN_SYSTEM.md §11 — but confirm text in the screenshot stays
   legible before compressing further).
2. Replace the WhyAppriyo team placeholders with real photos, or with
   consistent initials avatars if photos aren't available (see
   ASSET_CHECKLIST.md for the exact rule on this).
3. Replace the stat placeholders with the real, currently-true numbers
   provided. If a stat has no confirmed real value, remove that stat
   entirely rather than leaving a placeholder or guessing a number.
4. Set each product's `status` field in products.js to the confirmed real
   value ("live" or "in-development") so the Stamp text is accurate.
5. If a real testimonial has been supplied, build Testimonials.jsx now per
   CONTENT_STRATEGY.md §3.8 using ReceiptCard, and add it to Home.jsx after
   the Products section. If no real testimonial exists yet, do not build
   this section at all.
6. Set up the contact form submission per TECH_SPEC.md §6 (Formspree or
   Web3Forms), and confirm the plain-text email/phone remains visible next
   to the form.

When finished, report against this checklist:

- [ ] grep -r "PLACEHOLDER" src/ returns zero results
- [ ] Every Stamp on the site is next to something a visitor could actually
      verify right now
- [ ] A test submission through the contact form was sent and received
      successfully

Stop after this and report status.
```

---

## Phase 6 — Motion & Accessibility Pass

```
Read DESIGN_SYSTEM.md section 8 (Motion) and section 13 (Design QA
Checklist) before starting.

1. Add scroll-triggered reveal animation (fade + 12px upward translate,
   duration per DESIGN_SYSTEM.md §8.1) to each homepage section, staggered
   by 50ms per item within a grid, capped at 4 staggered items before
   falling back to simultaneous reveal (per §8.2).
2. Ensure all motion respects prefers-reduced-motion — when that OS setting
   is on, elements should appear without animation, not just faster.
3. Do a full keyboard-only pass through the entire site (tab, shift-tab,
   enter): confirm every link, button, and form field is reachable in a
   logical order and has a visible focus state.
4. Add alt text to every image (descriptive, not just the filename), verify
   there is exactly one h1 per page, and confirm every form input has an
   associated label.
5. Run an automated accessibility audit (axe or Lighthouse) and fix every
   finding it reports.

When finished, report against this checklist:

- [ ] Lighthouse Accessibility score is 95 or above
- [ ] The site is fully usable with keyboard only, confirmed by manual
      tab-through
- [ ] No animation exceeds 360ms and nothing delays the hero headline from
      appearing
- [ ] prefers-reduced-motion was tested and respected

Stop after this and report status.
```

---

## Phase 7 — Performance Pass

```
Read DESIGN_SYSTEM.md section 11 (Performance Standards) before starting.

1. Convert all images to WebP and compress to 150KB or under each, checking
   that screenshot text stays legible after compression.
2. Add lazy loading to every image below the fold.
3. Confirm fonts are using display=swap and preconnect, and that font
   loading is not blocking first paint.
4. Run a Lighthouse audit using the mobile device profile with the "Slow
   4G" network throttling preset, not the default desktop/fast settings.

When finished, report the actual Lighthouse scores and metrics obtained
under that throttled mobile test, and confirm against this checklist:

- [ ] Lighthouse Performance score is 90 or above under throttled mobile
- [ ] LCP is 2.5 seconds or under
- [ ] CLS is 0.1 or under

If any target is missed, report which one and by how much, rather than
adjusting the target.

Stop after this and report status.
```

---

## Phase 8 — Final QA & Launch

```
Read DESIGN_SYSTEM.md section 13 (Design QA Checklist) and
CONTENT_STRATEGY.md section 6 (What Not to Put on the Site Yet) before
starting.

1. Go through every line item in DESIGN_SYSTEM.md §13 and report pass/fail
   for each one individually.
2. Go through every line item in CONTENT_STRATEGY.md §6 and confirm none of
   those things are present anywhere on the site.
3. Delete the /dev/components route and its file (built in Phase 1) — it
   must not ship to production.
4. Confirm the site works correctly in Chrome, Safari (iOS if possible),
   Samsung Internet, and Firefox.
5. Build the production bundle and deploy to Vercel or Netlify per
   TECH_SPEC.md §7.
6. Report the deployment preview URL so the team can review before DNS is
   pointed at appriyo.com.

Do not point the appriyo.com domain at this deployment yourself — report
the preview URL and stop, so the team can do a final read-through first and
handle the DNS change manually.

When finished, report against this checklist:

- [ ] Every item in DESIGN_SYSTEM.md §13 passes
- [ ] Every item in CONTENT_STRATEGY.md §6 is confirmed absent from the site
- [ ] /dev/components route has been removed
- [ ] Site works correctly across all 4 browsers tested
- [ ] Production build deployed, preview URL reported
```

---

## Notes on using these prompts

- If puku-cli reports a "Done when" item as failing, ask it to fix that
  specific item and re-check — don't move to the next phase with known
  failures carried forward.
- If a phase prompt references a file that doesn't exist yet in the
  project (e.g. TEAMS.md), tell puku-cli where to find it or paste the
  relevant content directly into the prompt.
- Phases 0-2 are safe to run in a single sitting if you want to review less
  often. Phases 3 onward are worth reviewing individually — they're where
  wording, honesty rules (no fake stats/testimonials), and real assets
  matter most.
