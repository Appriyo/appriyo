# 🧪 APPRIYO WEBSITE — TESTING & QA DOCUMENT (v1.0)

> **Purpose:**
> Defines exactly how quality is verified before anything goes live.
> Testing is not optional, not "when there's time," and not just "checking if it looks right."
> A bug that reaches a real business owner costs trust. This document prevents that.

> **Aligned with:** `architecture.md` · `pages.md` · `user_flow.md`
> **QA Owner:** Md Munna Sardar (Testing & QA)

---

# 1. TESTING PHILOSOPHY

> **If it wasn't tested, it isn't done.**

Three non-negotiable principles:

1. **Test before PR** — The developer tests their own work before requesting review
2. **QA before merge** — Munna tests after code review, before anything merges to `main`
3. **Verify after deploy** — A live check happens after every Vercel deployment

Testing at Appriyo is mostly manual. The site is content-driven with one real interactive feature (the contact form). Automated tests are introduced in Phase 4+ when complexity warrants them.

---

# 2. TEST ENVIRONMENTS

| Environment    | URL                               | When Used                |
|----------------|-----------------------------------|--------------------------|
| Local dev      | `localhost:5173`                  | Developer during build   |
| Vercel Preview | `appriyo-git-[branch].vercel.app` | PR review + QA pass      |
| Production     | `appriyo.com`                     | Post-deploy verification |

**Rule:** QA is always done on the Vercel Preview URL — not localhost.
Localhost hides production-specific issues (routing, env variables, CDN).

---

# 3. TESTING LEVELS

## Level 1 — Developer Self-Test (before PR)
Owner: The developer who wrote the code
Timing: Before opening a PR

## Level 2 — QA Pass (before merge)
Owner: Md Munna Sardar
Timing: After code review, before merge to `main`

## Level 3 — Post-Deploy Verification (after merge)
Owner: Md Munna Sardar
Timing: Within 30 minutes of every deployment to production

---

# 4. MASTER QA CHECKLIST

This is the full checklist. Run it on every PR that touches a page.

---

## 4.1 CONTENT ACCURACY

```
[ ] Page heading matches pages.md H1 exactly
[ ] All body copy matches pages.md spec (no placeholder text)
[ ] All CTA button labels match content.md §5.2
[ ] All CTA links point to the correct destination
[ ] No "Lorem ipsum" or placeholder content anywhere
[ ] No hardcoded test data remaining
[ ] Product names spelled correctly: "Amar Repair", "Amar Batch", "Amar Card"
[ ] Company details correct: email, phone, hours, location
[ ] Copyright year is correct (2026)
```

---

## 4.2 FUNCTIONALITY

```
NAVIGATION
[ ] All navbar links go to correct pages
[ ] Logo links to homepage
[ ] Contact button in navbar is visible and links to /contact
[ ] Mobile hamburger opens and closes correctly
[ ] Mobile hamburger: Contact button is visible outside the hamburger
[ ] Clicking a nav link on mobile closes the hamburger
[ ] Active page is visually indicated in navbar

ROUTING
[ ] All 13 routes load without error
[ ] Typing a non-existent URL shows the 404 page
[ ] 404 page has a working "Back to Homepage" link
[ ] Browser back/forward navigation works correctly

CONTACT FORM
[ ] Form renders correctly on mobile and desktop
[ ] All 5 fields are present: Name, Business Type, Problem, Phone, Contact Method
[ ] Name field: empty submission shows validation error
[ ] Phone field: less than 7 chars shows validation error
[ ] Problem field: less than 10 chars shows validation error
[ ] Business Type: unselected shows validation error
[ ] Successful submission: success message replaces form
[ ] Failed submission: error message appears with manual contact details
[ ] During submission: button shows "Sending..." and is disabled
[ ] After success: no double-submit possible
[ ] Real email delivery: test submission arrives in contact@appriyo.com inbox

LINKS
[ ] All internal links use React Router <Link> (no full page reload)
[ ] All external links (LinkedIn, GitHub) open in new tab
[ ] WhatsApp link opens WhatsApp with pre-filled number
[ ] Email link opens email client with correct address
[ ] Footer links all work
[ ] All product cards link to correct product pages
[ ] All solution cards link to correct destination
```

---

## 4.3 RESPONSIVENESS

Test at these exact viewport widths:

| Device Type      | Width  | Test Method     |
|------------------|--------|-----------------|
| Small mobile     | 360px  | Chrome DevTools |
| iPhone SE        | 375px  | Chrome DevTools |
| Standard mobile  | 390px  | Chrome DevTools |
| Large mobile     | 430px  | Chrome DevTools |
| Tablet portrait  | 768px  | Chrome DevTools |
| Tablet landscape | 1024px | Chrome DevTools |
| Desktop          | 1280px | Browser window  |
| Large desktop    | 1440px | Browser window  |

**For each viewport, check:**

```
[ ] No horizontal scroll at any breakpoint
[ ] Text is readable — no overflow or truncation
[ ] Buttons are tappable (min 44x44px touch target)
[ ] Images don't overflow their containers
[ ] Cards stack correctly (4→2→1 for service cards)
[ ] Navbar collapses correctly on mobile
[ ] Hero section fills viewport correctly
[ ] Contact form fields are not too small to type in
[ ] Form labels don't get cut off
[ ] Footer columns stack vertically on mobile
[ ] No content overlaps with the fixed navbar
```

---

## 4.4 VISUAL DESIGN

```
COLORS
[ ] Background color is correct (#0b0f19 dark)
[ ] Surface cards use correct color (#111827)
[ ] Primary text is correct (#f9fafb)
[ ] Secondary text is correct (#9ca3af)
[ ] Primary blue is used only for buttons, links, and highlights
[ ] Accent violet is used only for AI-related labels (Badge, accent variant)
[ ] No colors outside the design system appear

TYPOGRAPHY
[ ] Font is Inter across all pages
[ ] H1 is the largest heading on each page
[ ] Only one H1 per page
[ ] Heading hierarchy is correct (H1 → H2 → H3)
[ ] Body text is readable at small sizes (sm: 14px minimum)
[ ] No all-caps body text
[ ] Paragraphs are max 3 lines before a break

SPACING
[ ] Consistent section spacing (py-20 lg:py-28)
[ ] Cards have consistent internal padding
[ ] No elements touching the viewport edge (padding present)
[ ] Content max-width is respected (1200px)

COMPONENTS
[ ] All cards have consistent border radius
[ ] Hover states work on interactive cards
[ ] Button hover states are visible
[ ] Focus rings visible on Tab key navigation
[ ] No broken icons
[ ] No missing icons (icon renders, not empty space)
```

---

## 4.5 PERFORMANCE

Run Lighthouse on every page before merge. Test in Chrome Incognito (no extensions).

**Targets:**

| Metric                   | Target  | Minimum Acceptable |
|--------------------------|---------|--------------------|
| Performance score        | ≥ 90    | ≥ 85               |
| Accessibility score      | ≥ 90    | ≥ 85               |
| Best Practices score     | ≥ 90    | ≥ 85               |
| SEO score                | ≥ 90    | ≥ 85               |
| First Contentful Paint   | < 1.5s  | < 2.0s             |
| Largest Contentful Paint | < 2.5s  | < 3.5s             |
| Total Blocking Time      | < 200ms | < 300ms            |
| Cumulative Layout Shift  | < 0.1   | < 0.15             |

**How to run Lighthouse:**
1. Open Vercel Preview URL in Chrome Incognito
2. Open DevTools → Lighthouse tab
3. Select: Mobile + All categories
4. Click "Analyze page load"
5. Screenshot the result and attach to the PR

**Performance checklist:**
```
[ ] Lighthouse Performance score ≥ 85 on mobile
[ ] Lighthouse Performance score ≥ 90 on desktop
[ ] No images larger than 200kb
[ ] All images below fold have loading="lazy"
[ ] No console errors or warnings in DevTools
[ ] No failed network requests in the Network tab
[ ] Inter font loads without FOUT (flash of unstyled text)
[ ] No render-blocking resources
```

---

## 4.6 ACCESSIBILITY

```
KEYBOARD NAVIGATION
[ ] Tab key moves through all interactive elements in logical order
[ ] Focus ring is visible on all focusable elements
[ ] Enter/Space activates buttons and links
[ ] Escape closes mobile navbar

SCREEN READER BASICS
[ ] Page has a <title> that describes the page
[ ] Each page has exactly one <h1>
[ ] All images have descriptive alt text
[ ] Decorative images have alt=""
[ ] Navigation has aria-label="Primary navigation"
[ ] Form fields have visible <label> elements
[ ] Error messages are associated with their field (aria-describedby)

COLOR AND CONTRAST
[ ] Body text contrast ratio ≥ 4.5:1 against background
[ ] Large text contrast ratio ≥ 3:1
[ ] Information is never conveyed by color alone

SEMANTIC HTML
[ ] <nav> wraps navigation
[ ] <main> wraps main content
[ ] <footer> wraps footer
[ ] <section> used for page sections
[ ] Heading hierarchy is logical (no skipping h2 → h4)
```

**Tool:** Run axe DevTools Chrome extension on each page. Zero critical or serious violations allowed.

---

## 4.7 SEO

```
[ ] Each page has a unique <title> tag (format: "Page | Appriyo — Subtitle")
[ ] Each page has a unique <meta name="description"> (120–155 chars)
[ ] Each page has a canonical URL
[ ] Open Graph tags present (og:title, og:description, og:image, og:url)
[ ] og:image is 1200x630px
[ ] No duplicate H1s
[ ] All internal links use descriptive text (no "click here")
[ ] robots.txt is accessible at /robots.txt
[ ] sitemap.xml is accessible at /sitemap.xml (Phase 4)
```

---

## 4.8 CROSS-BROWSER

Test on these browsers before any production release:

| Browser           | Version | Priority        |
|-------------------|---------|-----------------|
| Chrome (desktop)  | Latest  | 🔴 Must pass    |
| Chrome (Android)  | Latest  | 🔴 Must pass    |
| Safari (iOS)      | Latest  | 🔴 Must pass    |
| Firefox (desktop) | Latest  | 🟠 Should pass  |
| Safari (macOS)    | Latest  | 🟠 Should pass  |
| Edge (desktop)    | Latest  | 🟡 Nice to pass |

```
[ ] Homepage renders correctly in Chrome desktop
[ ] Homepage renders correctly in Chrome Android
[ ] Homepage renders correctly in Safari iOS
[ ] Contact form submits successfully in Safari iOS
[ ] Navbar sticky behavior works in all tested browsers
[ ] Fonts load correctly in all tested browsers
[ ] No layout shifts or overflow on Safari iOS (known quirks)
```

---

# 5. PAGE-SPECIFIC TEST CASES

---

## 5.1 Homepage (`/`)

```
[ ] Hero CTA "Let's Talk About Your Business" scrolls to #contact
[ ] Hero CTA "See What We Build" scrolls to #products
[ ] All 4 service cards render with correct icon, title, and description
[ ] "See full service details →" links to /services
[ ] All 4 solution entries render with correct problem and solution text
[ ] Solution links go to correct product pages
[ ] All 3 product cards render with name, tagline, 3 features, CTA
[ ] Product card CTAs go to correct /products/[product] pages
[ ] All 4 "Why Appriyo" differentiators render
[ ] "See how we work →" scrolls to #approach
[ ] Approach section shows all 4 steps in correct order
[ ] Team grid shows 4 team members
[ ] "Meet the full team →" links to /about
[ ] Contact form renders and submits correctly (see §4.2 Contact Form)
```

---

## 5.2 Services (`/services`)

```
[ ] Page H1 is "Four Services. Focused on One Goal."
[ ] All 4 services render in correct order
[ ] Each service has: name, one-liner, "What it is", examples list, outcomes list, CTA
[ ] Each service CTA links to /contact
[ ] "What We Don't Do" section renders
[ ] "Get a Free Consultation" button at bottom links to /contact
```

---

## 5.3 Solutions (`/solutions`)

```
[ ] Page H1 is "Find Your Problem Here"
[ ] All 5 solution cards render
[ ] Solution 1: links to /products/amar-repair
[ ] Solution 2: links to /products/amar-batch
[ ] Solution 3: links to /products/amar-card
[ ] Solution 4: links to /services
[ ] Solution 5: links to /contact
[ ] "Tell Us Your Problem" button links to /contact
```

---

## 5.4 Products Overview (`/products`)

```
[ ] Page H1 is "Real Software. Built from Real Problems."
[ ] All 3 product cards render
[ ] Amar Repair card → links to /products/amar-repair
[ ] Amar Batch card → links to /products/amar-batch
[ ] Amar Card card → links to /products/amar-card
[ ] "Let's Build It" CTA → links to /contact
```

---

## 5.5 Product Pages (each of 3)

```
[ ] Product hero renders with label, H1, description, CTA
[ ] "Sound Familiar?" / problem section renders with correct list items
[ ] Features table renders all rows
[ ] "Who it's for" section renders
[ ] Final CTA button links to /contact
[ ] CTA text matches pages.md (e.g., "Talk to Us About Amar Repair")
```

---

## 5.6 About (`/about`)

```
[ ] Page H1 is "We're a Small Team. We Like It That Way."
[ ] "What Appriyo Is" section renders
[ ] Philosophy section renders all 5 belief points
[ ] Team grid shows all 4 members with correct name and role
[ ] "How a Typical Engagement Works" section renders
[ ] "Get in Touch" button links to /contact
```

---

## 5.7 Contact (`/contact`)

```
[ ] Page H1 is "Let's Talk About Your Business Problem"
[ ] All 5 form fields render
[ ] All field labels are visible (not just placeholders)
[ ] Contact details column renders: email, WhatsApp, hours, response time
[ ] "We read every message personally." line renders below form
[ ] Form validation works on all fields (see §4.2)
[ ] Successful submission shows success message
[ ] Failed submission shows error message with contact details
```

---

## 5.8 Legal Pages

```
[ ] /privacy renders and is readable
[ ] /terms renders and is readable
[ ] /security renders and is readable
[ ] All three are linked from footer
[ ] No navbar CTA button on legal pages
```

---

## 5.9 404 Page

```
[ ] Navigating to /random-gibberish shows 404 page
[ ] 404 page shows "This Page Doesn't Exist" heading
[ ] 404 page shows "Back to Homepage" button
[ ] Button correctly links to /
```

---

# 6. CONTACT FORM END-TO-END TEST PROCEDURE

This is the most important functional test. Run it before every production release.

**Test 1 — Happy Path:**
1. Navigate to `/contact` on Vercel Preview
2. Fill all fields with valid test data:
    - Name: `Test Business`
    - Business Type: `Repair Shop`
    - Problem: `We track everything on paper and it's getting too slow`
    - Phone: `+880 1700000000`
    - Contact Method: `WhatsApp`
3. Click "Send Message"
4. Verify: button shows "Sending..." while submitting
5. Verify: success message appears ("Message Received" heading)
6. Verify: email arrives at `contact@appriyo.com` within 2 minutes
7. Verify: email contains all submitted form data

**Test 2 — Validation:**
1. Submit the form completely empty
2. Verify: all required fields show their validation error messages
3. Fill name only → submit → verify other errors still show
4. Fill phone with 3 characters → verify error: "Please enter a valid number"
5. Fill problem with 5 characters → verify error: "Please describe your problem briefly"

**Test 3 — Error State (simulate):**
1. Temporarily break the EmailJS/Formspree config (wrong key)
2. Submit a valid form
3. Verify: error message appears with manual contact details
4. Restore correct config

**Test 4 — Mobile Form:**
1. Open `/contact` on a real phone (not just DevTools)
2. Tap the Name field — verify keyboard opens without breaking layout
3. Complete and submit the form on mobile
4. Verify success message appears correctly on mobile

---

# 7. REGRESSION TEST (RUN AFTER EVERY MERGE)

This is the fastest check — run it after any deployment to confirm nothing broke.

```
CRITICAL PATH (5 minutes)
[ ] Homepage loads at appriyo.com
[ ] Navbar visible and Contact button works
[ ] Hero CTAs both work
[ ] Contact form loads at /contact
[ ] Contact form can be submitted (quick test with valid data)
[ ] Email received in inbox
[ ] 404 page works (visit /xyz)
[ ] Mobile: check homepage on phone
[ ] Check browser console — zero errors
```

If all 9 checks pass → release is healthy.
If any check fails → revert the deployment immediately, investigate, fix, re-deploy.

---

# 8. BUG REPORTING FORMAT

When a bug is found, report it using this format in GitHub Issues:

```
Title: [Page] Short description of the bug

## What happened
Brief description of the unexpected behavior.

## Steps to reproduce
1. Go to /contact
2. Submit empty form
3. ...

## Expected behavior
What should have happened.

## Actual behavior
What actually happened.

## Environment
- Browser: Chrome 122 / Safari 17 / Firefox 123
- Viewport: 375px / 1280px
- Device: iPhone 15 / MacBook / PC
- URL: appriyo.com/contact OR appriyo-git-branch.vercel.app/contact

## Severity
[ ] Critical (site is broken or unusable)
[ ] High (important feature broken)
[ ] Medium (visual issue, minor functional issue)
[ ] Low (cosmetic only)

## Screenshot
[Attach screenshot or screen recording]
```

---

# 9. SEVERITY DEFINITIONS

| Severity    | Definition                                                  | Response Time         |
|-------------|-------------------------------------------------------------|-----------------------|
| 🔴 Critical | Site is down, form doesn't work, broken routing             | Fix before next hour  |
| 🟠 High     | Important page broken, major visual defect, mobile unusable | Fix same day          |
| 🟡 Medium   | Minor functional issue, isolated visual bug                 | Fix in current sprint |
| 🟢 Low      | Cosmetic only, minor text issue                             | Fix next sprint       |

**Critical severity always triggers immediate rollback** if not fixed in 30 minutes.

---

# 10. TESTING BY PHASE

| Phase    | What to Test                                                         | When                      |
|----------|----------------------------------------------------------------------|---------------------------|
| Phase 0  | Base components render, Tailwind works, routing works                | After foundation setup    |
| Phase 1  | Homepage, Contact form end-to-end, About page, mobile responsiveness | Before going live         |
| Phase 2  | All primary pages, footer links, legal pages, 404                    | After each page goes live |
| Phase 3  | All 3 product pages, cross-linking from solutions/products           | After each product page   |
| Phase 4+ | Blog, testimonials, new features                                     | After each addition       |

**For Phase 1 (first launch):** Run the full master checklist (§4) on all 3 pages before the site goes live. No shortcuts.

---

# 11. WHAT TESTING DOES NOT COVER

Be explicit about limitations:

| Not Covered                              | Why                                              | Future Plan                                |
|------------------------------------------|--------------------------------------------------|--------------------------------------------|
| Automated unit tests                     | Site is content-driven; ROI is low at this stage | Add in Phase 4 if complexity warrants      |
| Automated E2E tests (Playwright/Cypress) | Team size doesn't justify tooling overhead yet   | Consider for contact form in Phase 4       |
| Load/stress testing                      | No server infrastructure to stress               | N/A for static site                        |
| Security penetration testing             | No login, no sensitive data handled on site      | Covered by EmailJS/Formspree security      |
| Email delivery in all spam filters       | External service dependency                      | Monitor open rates when analytics is added |

---

*Document version: 1.0*
*Owner: Md Munna Sardar (Testing & QA)*
*Reviewed by: Shahajalal Mahmud (Development & Architecture)*
*Aligned with: pages.md v1.0 · user_flow.md v1.0 · architecture.md v1.0*