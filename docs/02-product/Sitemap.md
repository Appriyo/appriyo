# 🗺️ APPRIYO WEBSITE — SITEMAP & INFORMATION ARCHITECTURE (v1.0)

> **Purpose:**
> Defines every page, route, and section of the Appriyo website.
> Prevents random page creation, messy routing, and structural drift.
> All development and content work MUST follow this map.

---

# 1. 📐 FULL SITE STRUCTURE

```
appriyo.com/
│
├── /                          → Homepage (single-page scroll)
│
├── /services                  → Services overview page
│
├── /solutions                 → Problem-focused solution page
│
├── /products                  → Products overview page
│   ├── /products/amar-repair  → Amar Repair product page
│   ├── /products/amar-batch   → Amar Batch product page
│   └── /products/amar-card    → Amar Card product page
│
├── /about                     → About + Team page
│
├── /contact                   → Contact + Consultation form
│
├── /blog                      → [FUTURE — Phase 2]
│   └── /blog/[slug]           → [FUTURE — individual article]
│
├── /privacy                   → Privacy Policy (legal)
├── /terms                     → Terms of Service (legal)
└── /security                  → Security Policy (legal)
```

---

# 2. 📄 PAGE-BY-PAGE BREAKDOWN

---

## 2.1 Homepage — `/`

**Type:** Single-page scroll (SPA)
**Priority:** P0 — Most critical
**Route:** `/`

**Purpose:**
Primary landing experience. Most visitors start here.
Designed to answer 3 questions fast:
1. What does Appriyo do?
2. Is this for me?
3. How do I reach them?

**Sections (in strict order):**

| Order | Section ID     | Section Name | Purpose                             |
|-------|----------------|--------------|-------------------------------------|
| 1     | `#hero`        | Hero         | First impression, problem hook, CTA |
| 2     | `#services`    | Services     | 4 core services overview            |
| 3     | `#solutions`   | Solutions    | Real business problems → outcomes   |
| 4     | `#products`    | Products     | Amar Repair, Amar Batch, Amar Card  |
| 5     | `#why-appriyo` | Why Appriyo  | Trust signals and differentiators   |
| 6     | `#approach`    | Our Approach | How Appriyo works with clients      |
| 7     | `#about`       | About & Team | Brief company + team intro          |
| 8     | `#contact`     | Contact      | Form + contact info                 |

**Navbar links** (anchor scroll on homepage):
- Services → `#services`
- Solutions → `#solutions`
- Products → `#products`
- About → `#about`
- Contact → `#contact` (styled as primary CTA button)

**Footer:**
- All page links
- Legal links (Privacy, Terms, Security)
- Social: LinkedIn, GitHub
- Company info (email, phone, hours)

---

## 2.2 Services Page — `/services`

**Type:** Static content page
**Priority:** P1 — High
**Route:** `/services`

**Purpose:**
Deep-dive into each of the 4 core services.
Targets visitors who scroll past the homepage services section and want more detail.

**Page Structure:**

```
/services
├── Page Header (title + short intro)
├── Service 1: Business Process Automation
│   ├── What it is
│   ├── What problems it solves (bullet examples)
│   ├── What you get
│   └── CTA → Contact
├── Service 2: Custom Business Software
│   └── (same structure)
├── Service 3: AI Integration & Smart Systems
│   └── (same structure)
├── Service 4: Digital Transformation Consulting
│   └── (same structure)
└── Section: "Not sure which service you need?"
    └── CTA → Contact for free consultation
```

**What this page will NOT include:**
- ❌ Pricing lists
- ❌ Generic "We use React and Node.js" tech stack lists
- ❌ Services not in the core 4

---

## 2.3 Solutions Page — `/solutions`

**Type:** Problem-driven content page
**Priority:** P1 — High
**Route:** `/solutions`

**Purpose:**
Let business owners self-identify their problem.
Bridges "I have this problem" → "Appriyo solves this."

**Page Structure:**

```
/solutions
├── Page Header: "Do you recognize your business here?"
├── Solution Card 1: Repair Shop Chaos
│   ├── Problem: "Managing repair orders on paper or WhatsApp"
│   ├── Solution: Automated tracking, customer notifications, history
│   └── Link → Amar Repair
├── Solution Card 2: Manual Student/Batch Management
│   ├── Problem: "Tracking attendance, fees, and batches in notebooks"
│   ├── Solution: Digital batch, fee, and student management
│   └── Link → Amar Batch
├── Solution Card 3: Lost Business Connections
│   ├── Problem: "Paper cards get lost, contacts don't save properly"
│   ├── Solution: NFC digital contact card
│   └── Link → Amar Card
├── Solution Card 4: Repetitive Manual Tasks
│   ├── Problem: "Staff spending hours on things a system can do"
│   ├── Solution: Business process automation
│   └── Link → /services#automation
├── Solution Card 5: No Digital System Yet
│   ├── Problem: "Running entirely on WhatsApp, Excel, or memory"
│   ├── Solution: Custom business software
│   └── Link → /services#custom-software
└── Section: "Don't see your problem here?"
    └── CTA → Contact — "Tell us your problem"
```

---

## 2.4 Products Overview Page — `/products`

**Type:** Products hub page
**Priority:** P1 — High
**Route:** `/products`

**Purpose:**
Showcase all 3 Appriyo products as real, tangible solutions.
Acts as a hub linking to each product's dedicated page.

**Page Structure:**

```
/products
├── Page Header: "Real software. Built for real businesses."
├── Product Card: Amar Repair → /products/amar-repair
├── Product Card: Amar Batch → /products/amar-batch
├── Product Card: Amar Card → /products/amar-card
└── Footer note: "Have a problem that needs its own product? Let's talk."
    └── CTA → /contact
```

---

## 2.5 Amar Repair Product Page — `/products/amar-repair`

**Type:** Product detail page
**Priority:** P2 — Medium (build after core pages)
**Route:** `/products/amar-repair`

**Purpose:**
Convince repair shop owners that this product solves their exact problem.

**Page Structure:**

```
/products/amar-repair
├── Hero: Product name + one-line value statement
├── Section: "The problem" (before state)
├── Section: "What Amar Repair does" (feature list — simple language)
├── Section: Who it's for
├── Section: Screenshots / UI mockup (if available)
├── Section: How to get it
└── CTA: "Interested? Let's talk" → /contact
```

---

## 2.6 Amar Batch Product Page — `/products/amar-batch`

**Type:** Product detail page
**Priority:** P2 — Medium
**Route:** `/products/amar-batch`

**Structure:** Same pattern as Amar Repair, adapted for coaching centers / teachers.

---

## 2.7 Amar Card Product Page — `/products/amar-card`

**Type:** Product detail page
**Priority:** P2 — Medium
**Route:** `/products/amar-card`

**Structure:** Same pattern as above, adapted for NFC digital contact cards.

---

## 2.8 About Page — `/about`

**Type:** Trust / credibility page
**Priority:** P1 — High
**Route:** `/about`

**Purpose:**
Build human trust. Show who is behind Appriyo.

**Page Structure:**

```
/about
├── Section: Who we are (2–3 sentences — from constitution §1.1)
├── Section: What we believe (core philosophy — from constitution §1.3)
├── Section: How we work (working model — from constitution §7)
├── Section: The Team
│   ├── Shahajalal Mahmud — Development & Architecture
│   ├── Preota Saha — UI & Design
│   ├── Md Munna Sardar — Testing & QA
│   └── Hazera Islam Mim — Marketing & Social Media
└── CTA: "Want to work with us?" → /contact
```

---

## 2.9 Contact Page — `/contact`

**Type:** Lead generation page (PRIMARY CONVERSION DESTINATION)
**Priority:** P0 — Most critical (alongside homepage)
**Route:** `/contact`

**Purpose:**
Convert visitors into consultation requests with minimum friction.

**Page Structure:**

```
/contact
├── Page Header: "Let's talk about your business problem"
├── Sub-header: "No tech jargon. No pressure. Just a real conversation."
│
├── LEFT COLUMN: Contact Form
│   ├── Name (text)
│   ├── Business Type (dropdown)
│   ├── Describe your problem (textarea)
│   ├── WhatsApp / Phone Number (text)
│   ├── Preferred contact method (radio: WhatsApp / Email / Call)
│   └── Submit Button: "Send Message"
│
├── RIGHT COLUMN: Direct Contact
│   ├── Email: contact@appriyo.com
│   ├── WhatsApp: +880 1410394038 (direct link)
│   ├── Office Hours: Sun–Thu, 9 AM – 6 PM (GMT+6)
│   └── Response time: "We respond within 1 business day"
│
└── Note (optional): "Not ready to talk? Follow us on LinkedIn"
```

---

## 2.10 Legal Pages

**Priority:** P3 — Required but not featured

| Page             | Route       | Source        |
|------------------|-------------|---------------|
| Privacy Policy   | `/privacy`  | `PRIVACY.md`  |
| Terms of Service | `/terms`    | `TERMS.md`    |
| Security Policy  | `/security` | `SECURITY.md` |

**Design rule:** Plain, readable layout. No sidebar. No navbar cluttering. Link from footer only.

---

## 2.11 Blog — `/blog` [FUTURE — Phase 2]

**Route:** `/blog` + `/blog/[slug]`
**Launch condition:** After core site is live AND 3+ articles are ready.

**Topics (planned):**
- How repair shops can stop using WhatsApp for job tracking
- What is business automation? A plain-language guide for small businesses
- Why NFC cards are replacing paper business cards

**Rules:**
- No placeholder "Coming Soon" blog section at launch
- Either it exists with real content, or it doesn't exist at all

---

# 3. 🧭 NAVIGATION ARCHITECTURE

## Primary Navbar

| Item      | Behavior              | Desktop                | Mobile                 |
|-----------|-----------------------|------------------------|------------------------|
| Logo      | Links to `/`          | Always visible         | Always visible         |
| Services  | Links to `/services`  | Visible                | In hamburger menu      |
| Solutions | Links to `/solutions` | Visible                | In hamburger menu      |
| Products  | Links to `/products`  | Visible                | In hamburger menu      |
| About     | Links to `/about`     | Visible                | In hamburger menu      |
| Contact   | Links to `/contact`   | **Button (CTA style)** | **Button (CTA style)** |

**Navbar behavior:**
- Sticky on scroll (stays at top)
- Background: transparent → opaque on scroll
- Mobile: hamburger menu collapses all items except Contact button

## Footer Navigation

```
Footer
├── Column 1: Appriyo (logo + one-line tagline)
├── Column 2: Pages
│   ├── Services
│   ├── Solutions
│   ├── Products
│   ├── About
│   └── Contact
├── Column 3: Products
│   ├── Amar Repair
│   ├── Amar Batch
│   └── Amar Card
├── Column 4: Legal & Connect
│   ├── Privacy Policy
│   ├── Terms of Service
│   ├── Security
│   ├── LinkedIn
│   └── GitHub
└── Bottom bar: © 2026 Appriyo Technologies. All rights reserved.
```

---

# 4. 🔀 ROUTING RULES

## Technology: React Router v6

```
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/services" element={<Services />} />
  <Route path="/solutions" element={<Solutions />} />
  <Route path="/products" element={<Products />} />
  <Route path="/products/amar-repair" element={<AmarRepair />} />
  <Route path="/products/amar-batch" element={<AmarBatch />} />
  <Route path="/products/amar-card" element={<AmarCard />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/privacy" element={<Privacy />} />
  <Route path="/terms" element={<Terms />} />
  <Route path="/security" element={<Security />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

## 404 Page (`*`)

- Must exist
- Simple design: Logo + "Page not found" + Link back to homepage
- No complex error styling

---

# 5. 📱 PAGE PRIORITY & BUILD ORDER

Build in this strict order. Do not skip ahead.

| Phase      | Page              | Route                             | Reason                          |
|------------|-------------------|-----------------------------------|---------------------------------|
| **P0**     | Homepage          | `/`                               | Highest traffic, highest impact |
| **P0**     | Contact           | `/contact`                        | Primary conversion destination  |
| **P1**     | About             | `/about`                          | Trust building — needed early   |
| **P1**     | Services          | `/services`                       | Core business communication     |
| **P1**     | Solutions         | `/solutions`                      | Problem-first positioning       |
| **P1**     | Products Overview | `/products`                       | Product credibility             |
| **P2**     | Amar Repair       | `/products/amar-repair`           | First product — most concrete   |
| **P2**     | Amar Batch        | `/products/amar-batch`            | Second product                  |
| **P2**     | Amar Card         | `/products/amar-card`             | Third product                   |
| **P3**     | Legal pages       | `/privacy`, `/terms`, `/security` | Required but low traffic        |
| **Future** | Blog              | `/blog`                           | Phase 2 only                    |

---

# 6. 🔗 INTERNAL LINKING RULES

- Every page must have at least one CTA linking to `/contact`
- Product pages must link back to `/products`
- Services section must link to `/services` for deeper reading
- Solutions cards must link to the relevant product page
- Footer must contain all primary pages
- Legal pages link only from footer — never from navbar

---

# 7. 🚫 PAGES THAT WILL NOT EXIST

| Rejected Page                | Reason                                                         |
|------------------------------|----------------------------------------------------------------|
| `/portfolio`                 | No client work to show yet — add as `/case-studies` in Phase 2 |
| `/pricing`                   | Pricing is consultation-based, not fixed                       |
| `/careers`                   | Team is set — not hiring publicly yet                          |
| `/testimonials` (standalone) | No verified testimonials yet — do not fake social proof        |
| `/faq`                       | Not needed at launch — fold into relevant pages                |
| `/dashboard` or `/login`     | Product-level feature, not website                             |

---

# 8. 🌐 URL & SEO RULES

- All URLs: lowercase, hyphen-separated (no underscores, no camelCase)
- Max URL depth: 2 levels (e.g., `/products/amar-repair`) — never 3+
- Each page must have:
    - Unique `<title>` tag
    - Unique `<meta description>` (120–155 characters)
    - Proper `<h1>` (one per page)
    - Canonical URL

**Title format:**
```
[Page Name] | Appriyo — AI-Powered Digital Transformation
```

Examples:
- `Home | Appriyo — AI-Powered Digital Transformation`
- `Services | Appriyo — Business Automation & Custom Software`
- `Amar Repair | Appriyo Products`

---

# 9. 📊 SITEMAP.XML (FOR SEARCH ENGINES)

To be auto-generated at build time. Must include:

```xml
<urlset>
  <url><loc>https://appriyo.com/</loc><priority>1.0</priority></url>
  <url><loc>https://appriyo.com/services</loc><priority>0.9</priority></url>
  <url><loc>https://appriyo.com/solutions</loc><priority>0.9</priority></url>
  <url><loc>https://appriyo.com/products</loc><priority>0.8</priority></url>
  <url><loc>https://appriyo.com/products/amar-repair</loc><priority>0.7</priority></url>
  <url><loc>https://appriyo.com/products/amar-batch</loc><priority>0.7</priority></url>
  <url><loc>https://appriyo.com/products/amar-card</loc><priority>0.7</priority></url>
  <url><loc>https://appriyo.com/about</loc><priority>0.8</priority></url>
  <url><loc>https://appriyo.com/contact</loc><priority>0.9</priority></url>
</urlset>
```

Legal pages (`/privacy`, `/terms`, `/security`) — excluded from sitemap (low SEO value).

---

# 🔚 FINAL PRINCIPLE

> **This sitemap is a product decision, not a technical one.**
> **Every page must earn its place by serving a user and driving a business outcome.**
> **When in doubt → remove the page, not add it.**

---

*Document version: 1.0*
*Owner: Shahajalal Mahmud (Development & Architecture)*
*Aligned with: appriyo_constitution.md v1.0, design.md v1.0, product.md v1.0*