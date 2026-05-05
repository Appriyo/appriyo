# 🔀 APPRIYO WEBSITE — USER FLOW DOCUMENT (v1.0)

> **Purpose:**
> Defines every meaningful path a visitor can take through the Appriyo website.
> Ensures no user gets lost, no conversion opportunity is missed, and every page
> has a clear "next step" that moves toward the goal.

> **Aligned with:** `product.md` · `sitemap.md` · `pages.md`

---

# 1. CORE PRINCIPLE

> **Every flow must end at `/contact` or move the visitor meaningfully closer to it.**
> If a page has no path to contact — it is architecturally broken.

Every page on the Appriyo website answers three questions:
1. Where did this user come from?
2. What do they need right now?
3. Where should they go next?

---

# 2. ENTRY POINTS (WHERE VISITORS COME FROM)

| Entry Point                                                 | Expected Visitor Type         | Landing Page                   |
|-------------------------------------------------------------|-------------------------------|--------------------------------|
| Google search: "repair shop management software Bangladesh" | Manual Business Owner         | `/products/amar-repair` or `/` |
| Google search: "business automation Khulna"                 | SMB Owner                     | `/`                            |
| Google search: "coaching center software"                   | Educator                      | `/products/amar-batch`         |
| LinkedIn company page                                       | Researcher / Evaluator        | `/` or `/about`                |
| Direct referral (word of mouth)                             | Warm lead                     | `/` or `/contact`              |
| GitHub profile link                                         | Developer / Technical visitor | `/about` or `/`                |
| WhatsApp link shared by someone                             | Warm lead                     | `/contact` or `/`              |
| Social media post                                           | Cold or warm visitor          | `/`                            |
| Old page redirect (non-existent URL)                        | Any                           | `404 → /`                      |

---

# 3. PRIMARY USER FLOWS

---

## FLOW A — THE MANUAL BUSINESS OWNER (Primary Conversion Path)

**Who:** Local repair shop, coaching center, or small business owner.
**Entry:** Google search or word of mouth.
**Goal:** Book a consultation.

```
ENTRY
  │
  ▼
Homepage (/)
  │
  ├── Reads Hero Section
  │     "Still Running Your Business Manually?" → resonates
  │
  ├── Scrolls to #services
  │     Scans 4 service cards → "Business Process Automation" or
  │     "Custom Business Software" feels relevant
  │
  ├── Scrolls to #solutions
  │     Reads problem descriptions → "This is EXACTLY my problem"
  │     [DECISION POINT] → Clicks solution link → Product Page
  │                      OR continues scrolling
  │
  ├── Scrolls to #products
  │     Sees Amar Repair / Amar Batch → Clicks to product page
  │
  ├── Reads product page (/products/amar-repair)
  │     Problem section → "Yes, this is me"
  │     Features → "This is what I need"
  │     CTA → "Interested? Let's Talk"
  │
  ▼
Contact Page (/contact)
  │
  ├── Fills form (5 fields — low friction)
  │
  ▼
LEAD GENERATED ✅
```

**Drop-off risk points:**
- Hero → If headline doesn't resonate: user bounces. (Mitigation: problem-first headline)
- Solutions → If their problem isn't listed: user feels unseen. (Mitigation: "Don't see yours? Tell us.")
- Contact form → If form is too long: user abandons. (Mitigation: 5 fields max)

---

## FLOW B — THE STARTUP / TECHNICAL FOUNDER (Technical Evaluation Path)

**Who:** Early-stage founder or technical decision-maker evaluating Appriyo.
**Entry:** LinkedIn, GitHub, or referral.
**Goal:** Understand Appriyo's capability → initiate a conversation.

```
ENTRY
  │
  ▼
Homepage (/) OR About Page (/about)
  │
  ├── Reads Hero → "AI-powered digital transformation" — scans
  │
  ├── Jumps to About Page (/about)
  │     "Who are these people?" → reads team section
  │     "What's their philosophy?" → reads beliefs section
  │     "How do they work?" → reads working model
  │
  ├── Goes to Services Page (/services)
  │     Reads service detail → evaluates capability
  │     "Can they build what I need?"
  │
  ├── Goes to Products (/products)
  │     "They have real products — this is a real team"
  │
  ▼
Contact Page (/contact)
  │
  ├── Fills form — describes custom software need
  │
  ▼
LEAD GENERATED ✅
```

**Drop-off risk points:**
- About page → If team seems too small or inexperienced: exit. (Mitigation: lead with philosophy, not just names)
- Services page → If too vague: exit. (Mitigation: concrete examples per service)

---

## FLOW C — THE RESEARCHER / EVALUATOR (Passive Path)

**Who:** Potential partner, referrer, journalist, or investor.
**Entry:** LinkedIn or direct link.
**Goal:** Understand what Appriyo does → potentially refer or bookmark.

```
ENTRY (LinkedIn / referral link)
  │
  ▼
Homepage (/)
  │
  ├── Scans all sections quickly (< 2 minutes)
  │
  ├── Goes to About Page (/about)
  │     Reads team and philosophy
  │
  ├── Goes to Products (/products)
  │     Scans product overview
  │
  ├── Checks Footer → LinkedIn link
  │
  ▼
FOLLOWS ON LINKEDIN or SAVES CONTACT ✅
(Indirect conversion — may refer later)
```

---

## FLOW D — THE WARM REFERRAL (Fast Path)

**Who:** Someone who was told about Appriyo by a friend or client.
**Entry:** Direct URL, WhatsApp link, or business card.
**Goal:** Confirm Appriyo is legit → contact immediately.

```
ENTRY (Direct / WhatsApp link)
  │
  ▼
Homepage (/) or Contact Page (/contact)
  │
  ├── Scans Hero → "Yes, this is what they described"
  │
  ├── Optionally checks About → confirms team is real
  │
  ▼
Contact Page (/contact)
  │
  ├── Uses WhatsApp direct link (fastest path) OR fills form
  │
  ▼
LEAD GENERATED ✅ (fastest conversion)
```

---

## FLOW E — THE PRODUCT-SPECIFIC VISITOR (Direct Product Path)

**Who:** Someone who heard about "Amar Repair" or "Amar Batch" specifically.
**Entry:** Search for product name, or direct link.
**Goal:** Understand the product → request it.

```
ENTRY (Search: "Amar Repair software" / direct link)
  │
  ▼
Product Page (/products/amar-repair)
  │
  ├── Reads hero — immediately relevant
  │
  ├── Reads problem section — "this is exactly my situation"
  │
  ├── Reads features — "yes, I need all of this"
  │
  ├── Clicks CTA → "Talk to Us About Amar Repair"
  │
  ▼
Contact Page (/contact)
  │
  └── Mentions Amar Repair in their message
      │
      ▼
LEAD GENERATED ✅
```

---

# 4. PAGE-BY-PAGE NEXT STEP MAP

Every page must have at least one clear "next step." This table defines what that is.

| Current Page            | Primary Next Step     | Secondary Next Step | Escape Hatch   |
|-------------------------|-----------------------|---------------------|----------------|
| `/` (Homepage)          | → `/contact`          | → `/products`       | → `/services`  |
| `/services`             | → `/contact`          | → `/solutions`      | → `/`          |
| `/solutions`            | → `/contact`          | → Product page      | → `/services`  |
| `/products`             | → Product detail page | → `/contact`        | → `/solutions` |
| `/products/amar-repair` | → `/contact`          | → `/products`       | → `/`          |
| `/products/amar-batch`  | → `/contact`          | → `/products`       | → `/`          |
| `/products/amar-card`   | → `/contact`          | → `/products`       | → `/`          |
| `/about`                | → `/contact`          | → `/services`       | → `/`          |
| `/contact`              | → FORM SUBMIT         | → WhatsApp direct   | —              |
| `404`                   | → `/`                 | —                   | —              |

---

# 5. NAVBAR FLOW (GLOBAL)

The navbar is present on all pages. It defines a universal flow map.

```
Any Page
  │
  ├── Logo → /
  ├── Services → /services
  ├── Solutions → /solutions
  ├── Products → /products
  ├── About → /about
  └── [Contact Button] → /contact   ← Always visible
```

**Rule:** The Contact button in the navbar is always styled as a primary CTA button.
It must remain visible on mobile at all times — even when other links are collapsed.

---

# 6. FOOTER FLOW (GLOBAL)

The footer provides a second-chance navigation for users who scroll to the bottom.

```
Footer (reached by scrolling to bottom of any page)
  │
  ├── Pages column → Any primary page
  ├── Products column → Any product detail page
  ├── Legal column → /privacy, /terms, /security
  ├── LinkedIn link → External (opens new tab)
  ├── GitHub link → External (opens new tab)
  └── "Book a Consultation" → /contact
```

---

# 7. MOBILE FLOW CONSIDERATIONS

Mobile visitors behave differently. These rules apply specifically to mobile UX flows.

| Behavior               | Mobile Adjustment                                              |
|------------------------|----------------------------------------------------------------|
| Shorter attention span | Hero CTA must be visible without scrolling (above fold)        |
| One-thumb navigation   | CTA buttons full-width on mobile                               |
| WhatsApp preference    | WhatsApp direct link is the primary contact method on mobile   |
| Hamburger menu         | Contact button stays outside hamburger — always tappable       |
| Form friction          | On mobile, form fields trigger keyboard — keep to 5 fields max |
| Back button usage      | Each page must make sense as a standalone entry point          |

**Mobile-first flow (most common for SMB owners in Bangladesh):**

```
WhatsApp link / Google mobile search
  │
  ▼
Homepage (mobile) — hero visible immediately
  │
  ├── Single scroll to #solutions — reads problem card
  │
  ├── Taps: "Tell Us Your Problem →"
  │
  ▼
Contact Page (mobile)
  │
  ├── Taps WhatsApp direct link (fastest)
  │   OR fills short 5-field form
  │
  ▼
LEAD GENERATED ✅
```

---

# 8. CONVERSION FUNNEL VISUALIZATION

```
AWARENESS
│  Google · LinkedIn · Referral · Social
│
▼
INTEREST
│  Homepage Hero → Services → Solutions
│  (Visitor asks: "Is this for me?")
│
▼
CONSIDERATION
│  Products Pages → Why Appriyo → Approach
│  (Visitor asks: "Can these people actually help me?")
│
▼
INTENT
│  About Page → Team credibility
│  (Visitor asks: "Do I trust these people?")
│
▼
ACTION
│  Contact Page → Form / WhatsApp
│  (Visitor says: "Let me reach out")
│
▼
CONVERSION ✅
│  Consultation Request Received
│  → Appriyo team responds within 1 business day
```

---

# 9. BROKEN FLOW SCENARIOS (WHAT TO AVOID)

These are flows that lose the user. Each has a rule to prevent it.

---

**Broken Flow 1 — Dead End Pages**
```
User reaches /services → reads content → no CTA → hits back button → LOST
```
Rule: Every page must end with a CTA block pointing to `/contact`.

---

**Broken Flow 2 — Navbar Goes Missing on Mobile**
```
User scrolls past fold on mobile → navbar disappears → can't find Contact → LOST
```
Rule: Navbar is sticky. Contact button always visible. Never hidden in hamburger.

---

**Broken Flow 3 — Long Contact Form**
```
User reaches /contact → sees 10 fields → feels overwhelmed → abandons → LOST
```
Rule: Maximum 5 fields. No budget, timeline, or technical questions on the form.

---

**Broken Flow 4 — Product Page With No Problem Frame**
```
User lands on /products/amar-repair directly → immediately sees features → doesn't connect → LOST
```
Rule: Every product page opens with the problem, not the product.

---

**Broken Flow 5 — No 404 Handling**
```
User follows outdated link → gets browser error → no recovery path → LOST
```
Rule: Custom 404 page with a clear link back to homepage.

---

**Broken Flow 6 — Form Fails Silently**
```
User submits form → nothing happens → thinks it worked OR thinks it failed → uncertainty → LOST TRUST
```
Rule: Clear success state shown after form submit. Clear error state if it fails with manual contact details.

---

**Broken Flow 7 — Blog Promised But Empty**
```
User finds "Blog" in nav → page is empty or "Coming Soon" → credibility drops → LOST TRUST
```
Rule: Blog page does not exist in navbar or footer until at least 3 real articles are published.

---

# 10. POST-CONTACT FLOW (WHAT HAPPENS AFTER THE FORM)

This is outside the website — but the website must set the right expectation.

```
User submits form
  │
  ▼
Success message shown:
"Someone from Appriyo will reach out within 1 business day."
  │
  ▼
Appriyo team reviews message
  │
  ├── Via WhatsApp (if preferred)
  ├── Via Email (if preferred)
  └── Via Call (if preferred)
  │
  ▼
First consultation call / chat
  │
  ▼
Discovery → Proposal → Build
```

**[NOTE]** The website's job ends at form submission. The team's job begins there.
The success message must accurately set the expectation — no "instant response" promises.

---

# 11. ANALYTICS EVENTS TO TRACK (FOR FLOW VERIFICATION)

These events confirm the flows are working as designed.

| Event                   | Trigger                          | What It Tells Us                         |
|-------------------------|----------------------------------|------------------------------------------|
| `hero_cta_click`        | Click on hero CTA                | Hero → Contact flow working              |
| `services_link_click`   | Click "See full service details" | Homepage → Services flow working         |
| `solution_card_click`   | Click solution CTA               | Solutions → Product/Contact flow working |
| `product_card_click`    | Click product card               | Products → Detail page flow working      |
| `contact_form_start`    | Focus on first form field        | User reached Contact and began           |
| `contact_form_submit`   | Form submitted                   | Full conversion completed                |
| `whatsapp_click`        | Click WhatsApp link              | Mobile contact preference tracked        |
| `navbar_contact_click`  | Click Contact in navbar          | Navbar CTA effectiveness                 |
| `404_reached`           | User lands on 404                | Broken links identified                  |
| `scroll_depth_50`       | User scrolls 50% of homepage     | Engagement checkpoint                    |
| `scroll_depth_products` | User scrolls to #products        | Product section reach                    |

---

# 12. FLOW RULES SUMMARY

| Rule # | Rule                                                                                  |
|--------|---------------------------------------------------------------------------------------|
| F-01   | Every page must have at least one CTA that leads to `/contact`                        |
| F-02   | The Contact button in the navbar is always visible — never collapsed into hamburger   |
| F-03   | Every product page opens with the customer's problem, not the product's features      |
| F-04   | The contact form has maximum 5 fields — never add more without removing one           |
| F-05   | Form submission must show a clear success or error state — never silent               |
| F-06   | A 404 page must exist with a direct link to the homepage                              |
| F-07   | The blog does not appear in navigation until 3+ real articles are ready               |
| F-08   | WhatsApp direct link is a first-class contact option — not buried                     |
| F-09   | Every section that lists a service, product, or solution must have a "next step" link |
| F-10   | No page should be a dead end — every page has a visible next step                     |

---

*Document version: 1.0*
*Owner: Shahajalal Mahmud (Development & Architecture)*
*Aligned with: appriyo_constitution.md v1.0 · design.md v1.0 · product.md v1.0 · sitemap.md v1.0 · pages.md v1.0*