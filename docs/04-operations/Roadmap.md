# 🗓️ APPRIYO WEBSITE — BUILD ROADMAP (v1.0)

> **Purpose:**
> Defines what gets built, in what order, and by when.
> Prevents overbuilding, feature creep, and loss of focus.
> Every development decision — what to start, what to defer, what to skip — is made by comparing it to this document first.

> **Core Principle:** Ship something real. Improve it with evidence. Never build speculatively.

> **Aligned with:** `product.md` · `sitemap.md` · `pages.md` · `architecture.md`

---

# 1. ROADMAP OVERVIEW

```
PHASE 0: FOUNDATION     [Week 1]      → Dev environment, design tokens, base components
PHASE 1: CORE LAUNCH    [Weeks 2–4]   → Homepage + Contact + About (minimum viable site)
PHASE 2: FULL SITE      [Weeks 5–7]   → All primary pages live
PHASE 3: PRODUCTS       [Weeks 8–10]  → Individual product pages
PHASE 4: GROWTH         [Month 3–4]   → Blog, analytics, testimonials, case studies
PHASE 5: SCALE          [Month 5–6+]  → SaaS integrations, demo system, product landing pages
```

**Rule:** Phase N must be complete before Phase N+1 begins.
No exceptions. No "we'll finish it later while building the next thing."

---

# 2. PHASE 0 — FOUNDATION

**Duration:** Week 1 (before any page is built)
**Goal:** Everything that every page depends on is ready before a single page is built.
**Owner:** Shahajalal Mahmud + Preota Saha

---

## Deliverables

### 2.1 Development Environment

| Task                            | Detail                                          | Done When                         |
|---------------------------------|-------------------------------------------------|-----------------------------------|
| Initialize Vite + React project | `npm create vite@latest`                        | Dev server runs at localhost:5173 |
| Configure Tailwind CSS          | Install + configure tailwind.config.js          | Classes apply correctly           |
| Configure path aliases          | `@/` points to `src/` in vite.config.js         | `import '@/components/...'` works |
| Set up ESLint + Prettier        | Config files committed                          | Auto-format on save works         |
| Initialize React Router v6      | Basic `<BrowserRouter>` with placeholder routes | All routes render without error   |
| Connect to GitHub repo          | Main branch protected                           | PR workflow confirmed             |
| Configure Vercel deployment     | Auto-deploy on push to `main`                   | Preview URLs working              |

---

### 2.2 Design Token Implementation

| Task                                   | Detail                                         | Done When                               |
|----------------------------------------|------------------------------------------------|-----------------------------------------|
| Implement CSS custom properties        | All colors from `design.md` in `globals.css`   | Tokens accessible site-wide             |
| Configure Tailwind theme               | Colors, fonts, spacing mapped from `design.md` | Custom classes like `text-primary` work |
| Import Inter font                      | Via Google Fonts preconnect in `index.html`    | Font renders correctly on all pages     |
| Define `site-container` utility class  | `mx-auto max-w-[1200px] px-6`                  | Consistent page width everywhere        |
| Define `section-spacing` utility class | `py-20 lg:py-28`                               | Consistent vertical rhythm              |

---

### 2.3 Base Component Library

Build these before building any page. All page components depend on them.

| Component                                     | Location                                   | Done When                                         |
|-----------------------------------------------|--------------------------------------------|---------------------------------------------------|
| `Button` (primary, secondary, ghost variants) | `src/components/ui/Button.jsx`             | All 3 variants render + hover states work         |
| `Card` (base container)                       | `src/components/ui/Card.jsx`               | Correct surface color, border, radius             |
| `Badge` (small label)                         | `src/components/ui/Badge.jsx`              | Renders with accent color                         |
| `Navbar`                                      | `src/components/layout/Navbar.jsx`         | All links correct, sticky, mobile hamburger works |
| `Footer`                                      | `src/components/layout/Footer.jsx`         | All 4 columns, copyright line                     |
| `PageWrapper`                                 | `src/components/layout/PageWrapper.jsx`    | Wraps all pages with consistent padding           |
| `Section`                                     | `src/components/layout/Section.jsx`        | Applies section spacing                           |
| `SectionLabel`                                | `src/components/common/SectionLabel.jsx`   | Small accent label above headings                 |
| `SectionHeading`                              | `src/components/common/SectionHeading.jsx` | H2 + optional description                         |
| `CTABlock`                                    | `src/components/common/CTABlock.jsx`       | Reusable end-of-section CTA                       |
| `cn()` utility                                | `src/utils/cn.js`                          | clsx + tailwind-merge working                     |

---

### 2.4 Data Files

Populate before any section is built. Sections pull from these — no hardcoded copy.

| File                     | Content                                                              |
|--------------------------|----------------------------------------------------------------------|
| `src/data/services.js`   | 4 services with id, icon, title, tagline, description, examples, cta |
| `src/data/navigation.js` | Navbar links array + footer links by column                          |
| `src/data/team.js`       | 4 team members with name, role, description                          |

**Phase 0 exit criteria:** A developer can open `localhost:5173`, see a blank page with a working Navbar and Footer, and import any base component without errors.

---

# 3. PHASE 1 — CORE LAUNCH (MINIMUM VIABLE SITE)

**Duration:** Weeks 2–4 (3 weeks)
**Goal:** A real, live website that can receive leads immediately.
**Live by:** End of Week 4.
**Owner:** Full team

> **Why these 3 pages first:**
> Homepage converts. Contact receives leads. About builds trust for everyone who wonders "are these real people?"
> These 3 pages alone can generate the first consultation request.
> Everything else is additive.

---

## 3.1 Homepage — `/`

**Priority:** P0 — Built first.
**Owner:** Preota Saha (design) + Shahajalal Mahmud (implementation)

| Section       | Component                 | Done When                                                                                           |
|---------------|---------------------------|-----------------------------------------------------------------------------------------------------|
| Hero          | `HeroSection.jsx`         | Headline, subheadline, 2 CTAs, renders on mobile + desktop                                          |
| Services      | `ServicesSection.jsx`     | 4 service cards from `services.js` data                                                             |
| Solutions     | `SolutionsSection.jsx`    | 4–5 solution entries with links                                                                     |
| Products      | `ProductsSection.jsx`     | 3 product cards with links to product pages (can link to `/products` until product pages are built) |
| Why Appriyo   | `WhyAppriyoSection.jsx`   | 4 differentiator points                                                                             |
| Our Approach  | `ApproachSection.jsx`     | 4 numbered steps                                                                                    |
| About Preview | `AboutPreviewSection.jsx` | Company description + team avatars grid                                                             |
| Contact       | `ContactSection.jsx`      | Full form + contact details column                                                                  |

**Acceptance criteria:**
- [ ] All 8 sections render correctly on mobile, tablet, desktop
- [ ] Contact form submits successfully (test with real email)
- [ ] Form success state shows after submission
- [ ] All internal links work (no 404s)
- [ ] Lighthouse performance score ≥ 85
- [ ] Lighthouse accessibility score ≥ 85
- [ ] Copy matches `pages.md` exactly

---

## 3.2 Contact Page — `/contact`

**Priority:** P0 — Built alongside Homepage.
**Owner:** Shahajalal Mahmud

| Section         | Component            | Done When                                           |
|-----------------|----------------------|-----------------------------------------------------|
| Page header     | `ContactHeader.jsx`  | Heading + description render                        |
| Contact form    | `ContactForm.jsx`    | 5 fields, validation, submit, success + error state |
| Contact details | `ContactDetails.jsx` | Email, WhatsApp link, hours                         |

**Acceptance criteria:**
- [ ] Form submits and sends a real email (EmailJS or Formspree configured)
- [ ] WhatsApp link opens WhatsApp with pre-filled number
- [ ] Validation works on all 5 fields before submit
- [ ] Error state shows if submission fails
- [ ] Mobile keyboard doesn't break layout when form fields are focused

---

## 3.3 About Page — `/about`

**Priority:** P1 — Built in Week 3.
**Owner:** Preota Saha (design) + Hazera Islam Mim (content)

| Section     | Component               | Done When                             |
|-------------|-------------------------|---------------------------------------|
| Page header | `AboutHeader.jsx`       | Heading + description                 |
| Who we are  | `WhoWeAre.jsx`          | Company description prose             |
| Philosophy  | `Philosophy.jsx`        | 5 belief points in table/grid         |
| Team grid   | `TeamGrid.jsx`          | 4 team cards with photo + name + role |
| How we work | `HowWeWork.jsx`         | Prose description                     |
| CTA         | `CTABlock.jsx` (shared) | "Get in Touch" → `/contact`           |

**Acceptance criteria:**
- [ ] Team photos are real (not stock) — or consistent illustrated avatars if photos aren't ready
- [ ] Copy matches `pages.md` §8 exactly
- [ ] Page links back to `/contact` via CTA

---

## Phase 1 Completion Gate

Before moving to Phase 2, confirm:
```
[ ] appriyo.com is live (not localhost)
[ ] All 3 pages (/, /about, /contact) are accessible
[ ] Contact form receives emails (test with 3 real submissions)
[ ] No broken links on any page
[ ] Mobile layout is correct on iPhone SE (375px) and standard Android (360px)
[ ] Lighthouse scores ≥ 85 on all 3 pages
[ ] Team reviews content against pages.md checklist
[ ] At least 1 person outside the team has used the site and given feedback
```

---

# 4. PHASE 2 — FULL SITE

**Duration:** Weeks 5–7 (3 weeks)
**Goal:** All primary pages live. Appriyo's full service and solution story is accessible.
**Owner:** Full team

---

## 4.1 Services Page — `/services`

**Week 5 — Owner:** Shahajalal Mahmud + Preota Saha

| Task                                                | Done When                                                        |
|-----------------------------------------------------|------------------------------------------------------------------|
| Build `ServicesHeader.jsx`                          | Page header renders                                              |
| Build `ServiceDetail.jsx` (reusable for 4 services) | Each service section renders with all content from `pages.md` §2 |
| Build `ServicesNotIncluded.jsx`                     | "What we don't do" section renders                               |
| Add `CTABlock` at bottom                            | Links to `/contact`                                              |
| Populate `services.js` data fully                   | All 4 services with examples and outcomes                        |

---

## 4.2 Solutions Page — `/solutions`

**Week 5 — Owner:** Hazera Islam Mim (copy) + Preota Saha (design)

| Task                                              | Done When                                                            |
|---------------------------------------------------|----------------------------------------------------------------------|
| Build `SolutionsHeader.jsx`                       | Header renders                                                       |
| Build `SolutionCard.jsx` (reusable for 5 entries) | All 5 solution cards render with problem → solution → link structure |
| Add `CTABlock` at bottom                          | "Don't see your problem? Tell us." → `/contact`                      |
| Populate `solutions.js` data                      | All 5 solutions with problem text, answer text, links                |

---

## 4.3 Products Overview Page — `/products`

**Week 6 — Owner:** Preota Saha

| Task                                                      | Done When                                                 |
|-----------------------------------------------------------|-----------------------------------------------------------|
| Build `ProductsHeader.jsx`                                | Header renders                                            |
| Build `ProductOverviewCard.jsx` (reusable for 3 products) | 3 product cards render with name, tagline, features, CTA  |
| Add custom product CTA block                              | "Have a problem that needs its own product?" → `/contact` |
| Populate `products.js` data                               | All 3 products with name, tagline, features, href         |

**[NOTE]** Product cards link to `/products/amar-repair` etc. These pages are built in Phase 3. Until then, links go to `/contact`. This is acceptable — never leave a broken link.

---

## 4.4 Legal Pages

**Week 6 — Owner:** Shahajalal Mahmud (implementation only)

| Task                                          | Done When                              |
|-----------------------------------------------|----------------------------------------|
| Build `LegalPage.jsx` shared layout           | Single-column, max 720px, prose format |
| Render `/privacy` from `PRIVACY.md` content   | Page accessible, readable              |
| Render `/terms` from `TERMS.md` content       | Page accessible, readable              |
| Render `/security` from `SECURITY.md` content | Page accessible, readable              |
| Add links in footer                           | All 3 legal pages linked from footer   |

---

## 4.5 404 Page

**Week 7 — Owner:** Preota Saha

| Task                    | Done When                                       |
|-------------------------|-------------------------------------------------|
| Build `NotFound.jsx`    | "This page doesn't exist" message + link to `/` |
| Test with `/random-url` | 404 page renders — not a browser error          |

---

## Phase 2 Completion Gate

```
[ ] All 7 routes are live: /, /services, /solutions, /products, /about, /contact, /privacy, /terms, /security
[ ] No broken internal links anywhere on the site
[ ] All copy matches pages.md exactly
[ ] Footer links all work
[ ] Legal pages are accessible and readable
[ ] 404 page works
[ ] Lighthouse scores ≥ 88 across all pages
```

---

# 5. PHASE 3 — PRODUCT PAGES

**Duration:** Weeks 8–10 (3 weeks)
**Goal:** Each product has its own dedicated page. Visitors who heard about a specific product can evaluate it fully.
**Owner:** Preota Saha (design) + Shahajalal Mahmud (implementation)

---

## 5.1 Shared Product Page Structure

All 3 product pages use the same section components with different data.

| Section Component     | Purpose                                               |
|-----------------------|-------------------------------------------------------|
| `ProductHero.jsx`     | Product name + value statement + CTA                  |
| `ProductProblem.jsx`  | "Sound familiar?" — customer's problem in their words |
| `ProductFeatures.jsx` | Feature table / list                                  |
| `ProductAudience.jsx` | "Who it's for" prose                                  |
| `ProductCTA.jsx`      | Final "Interested? Let's talk" block → `/contact`     |

Build the components once (Week 8). Apply to all 3 products (Week 9).

---

## 5.2 Amar Repair — `/products/amar-repair`

**Week 8–9**

| Task                                                              | Done When                                                                 |
|-------------------------------------------------------------------|---------------------------------------------------------------------------|
| Product data in `products.js` — Amar Repair entry fully populated | All fields: title, tagline, problem points, features table, audience, cta |
| All 5 sections render using shared product components             | Page matches `pages.md` §5 exactly                                        |
| Screenshots or UI mockup added (if available)                     | Image renders, WebP format, <200kb                                        |
| Links from `/products`, `/solutions`, and homepage updated        | All link to `/products/amar-repair` (not `/contact` placeholder)          |

---

## 5.3 Amar Batch — `/products/amar-batch`

**Week 9**

Same process as Amar Repair. Content from `pages.md` §6.

---

## 5.4 Amar Card — `/products/amar-card`

**Week 9–10**

Same process. Content from `pages.md` §7.

---

## Phase 3 Completion Gate

```
[ ] All 3 product pages live and linked from /products, /solutions, and homepage
[ ] No product page still redirecting to /contact as a placeholder
[ ] Product screenshots or mockups in place (or intentional placeholder with note)
[ ] Copy matches pages.md for all 3 product pages
[ ] Lighthouse scores maintained ≥ 88
```

---

# 6. PHASE 4 — GROWTH LAYER

**Duration:** Month 3–4
**Goal:** Add credibility signals, improve conversion, begin content marketing.
**Condition for starting:** Phase 3 complete AND at least 2 real consultation leads received.

**Owner:** Full team (content by Hazera Islam Mim, implementation by Shahajalal Mahmud)

---

## 6.1 Testimonials (when real clients exist)

| Task                                      | Condition                                                             |
|-------------------------------------------|-----------------------------------------------------------------------|
| Add testimonials section to Homepage      | Only after receiving 2+ real written testimonials from actual clients |
| Add client name, business type, and quote | Photo optional — never use stock images of people                     |

**[CRITICAL NOTE]** Do NOT add fake or placeholder testimonials. An empty testimonials section is better than a fabricated one. Trust once broken cannot be rebuilt.

---

## 6.2 Blog — `/blog` and `/blog/[slug]`

| Task                                             | Condition                                         |
|--------------------------------------------------|---------------------------------------------------|
| Add Blog to navbar and footer                    | Only after 3+ real articles are written and ready |
| Build `BlogList.jsx` — article index page        | After nav addition                                |
| Build `BlogPost.jsx` — individual article layout | After nav addition                                |
| Publish first 3 articles                         | Must be real, useful content — not SEO filler     |

**First 3 article topics (pre-decided):**
1. "Why repair shops lose money tracking jobs on paper — and how to fix it"
2. "What is business automation? A plain-language guide for small business owners"
3. "Why paper business cards still fail you — and what NFC cards actually change"

**Rule:** Blog goes live as a complete section with 3 articles — not a "Coming Soon" page.

---

## 6.3 SEO Improvements

| Task                                           | Detail                                         |
|------------------------------------------------|------------------------------------------------|
| Add `sitemap.xml` auto-generation              | Vite plugin or manual generation at build time |
| Add structured data (JSON-LD)                  | Organization schema on homepage                |
| Add Open Graph images per page                 | Custom OG image for each primary page          |
| Register with Google Search Console            | Verify domain, submit sitemap                  |
| Run first Ahrefs / Google Search Console audit | Identify early keyword opportunities           |

---

## 6.4 Analytics

| Task                                               | Detail                                                 |
|----------------------------------------------------|--------------------------------------------------------|
| Add privacy-friendly analytics                     | Plausible Analytics (preferred) or Google Analytics 4  |
| Configure analytics events from `user_flow.md §11` | Track 11 defined events                                |
| Review first month data                            | Which pages are working? Where are users dropping off? |

---

# 7. PHASE 5 — SCALE

**Duration:** Month 5–6+
**Condition:** Consistent lead flow established. At least 1 product (Amar Repair or Amar Batch) has paying users.
**Goal:** Begin treating the website as a scalable SaaS acquisition channel.

---

## 7.1 Product Demo System

| Task                            | Detail                                               |
|---------------------------------|------------------------------------------------------|
| Add "Request a Demo" form       | Separate from general contact — specific to products |
| Build demo booking flow         | Link to Calendly or similar scheduling tool          |
| Add demo video to product pages | Screen-recorded walkthrough of real product          |

---

## 7.2 Dedicated Product Landing Pages (SEO)

Create standalone landing pages optimized for search — separate from the main product pages:

| Landing Page                           | Target Keyword                        |
|----------------------------------------|---------------------------------------|
| `/repair-shop-management-software`     | "repair shop software Bangladesh"     |
| `/coaching-center-management-software` | "coaching center software Bangladesh" |
| `/nfc-business-card-bangladesh`        | "NFC card Bangladesh"                 |

---

## 7.3 Case Studies — `/case-studies`

| Task                              | Condition                                                 |
|-----------------------------------|-----------------------------------------------------------|
| Build case study template         | After completing 2+ real client projects                  |
| Write first case study            | Real client, real problem, real outcome — with permission |
| Add `/case-studies` to navigation | Only after at least 1 case study is live                  |

---

## 7.4 Pricing Page — `/pricing` (conditional)

| Condition                              | Action                                   |
|----------------------------------------|------------------------------------------|
| If products move to fixed SaaS pricing | Build `/pricing` page with product tiers |
| If pricing remains consultation-based  | Do NOT build this page                   |

---

# 8. WHAT WILL NEVER BE BUILT (PERMANENTLY DEFERRED)

These are decisions — not items waiting for a future phase. They will not be built.

| Feature                            | Reason                                                                 |
|------------------------------------|------------------------------------------------------------------------|
| Client portal / login dashboard    | Product-level feature, not website                                     |
| Live chat widget                   | Performance cost + conflicts with brand identity (direct, not instant) |
| Careers / hiring page              | Team is set. Not hiring publicly.                                      |
| Ecommerce / payment processing     | Not part of core business model                                        |
| Complex animations / parallax      | Violates design.md — performance and identity                          |
| Testimonials before they are real  | Trust cannot be faked                                                  |
| Blog before 3 articles are written | "Coming Soon" destroys credibility                                     |
| Portfolio page without real work   | Same as above                                                          |

---

# 9. WEEKLY SPRINT STRUCTURE

Each week follows this structure:

```
MONDAY
  ├── Review previous week's completion gate
  ├── Confirm current week's deliverables
  └── Assign owners

TUESDAY – THURSDAY
  └── Build + review

FRIDAY
  ├── Internal review (copy vs pages.md, design vs design.md)
  ├── Mobile test
  └── Lighthouse check

SATURDAY (if needed)
  └── Fix only — no new features
```

---

# 10. DECISION GATE BEFORE ANY ADDITION

Before adding ANY new feature, page, or section to the website — not already in this roadmap — the team must answer:

1. Which phase does this belong to?
2. Is the current phase already complete?
3. Does this serve a defined user persona from `product.md`?
4. Does this move a visitor closer to `/contact`?
5. Is there evidence (data or client feedback) that this is needed?

**If answers to 3, 4, or 5 are NO → Do not build it.**
Document the decision and the reason in the Architecture Decision Log (`architecture.md §13`).

---

# 11. ROADMAP SUMMARY TABLE

| Phase             | What Gets Built                                       | Duration   | Exit Condition                                                |
|-------------------|-------------------------------------------------------|------------|---------------------------------------------------------------|
| 0 — Foundation    | Dev env, design tokens, base components, data files   | Week 1     | Dev server runs, components render, design tokens work        |
| 1 — Core Launch   | Homepage, Contact, About                              | Weeks 2–4  | Site is live, contact form sends real emails, Lighthouse ≥ 85 |
| 2 — Full Site     | Services, Solutions, Products Overview, Legal, 404    | Weeks 5–7  | All 7+ routes live, no broken links, Lighthouse ≥ 88          |
| 3 — Product Pages | Amar Repair, Amar Batch, Amar Card                    | Weeks 8–10 | All 3 product pages live and linked, Lighthouse maintained    |
| 4 — Growth        | Blog (3+ articles), Testimonials, SEO, Analytics      | Month 3–4  | After 2+ real leads received                                  |
| 5 — Scale         | Demo system, case studies, SEO landing pages, pricing | Month 5–6+ | After consistent lead flow + paying product users             |

---

*Document version: 1.0*
*Owner: Shahajalal Mahmud (Development & Architecture)*
*Aligned with: appriyo_constitution.md v1.0 · product.md v1.0 · sitemap.md v1.0 · pages.md v1.0 · architecture.md v1.0*