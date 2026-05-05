# 📄 APPRIYO WEBSITE — PAGES DEFINITION DOCUMENT (v1.0)

> **Purpose:**
> Defines the exact content, structure, messaging, and CTA for every page on the Appriyo website.
> This is the UI blueprint. Designers and developers work directly from this document.
> No section should be built that is not defined here. No section defined here should be skipped.

> **Aligned with:** `appriyo_constitution.md` · `design.md` · `product.md` · `sitemap.md`

---

# HOW TO READ THIS DOCUMENT

Each page follows this structure:

```
PAGE NAME
├── Goal           → What this page must achieve
├── Key Message    → The single idea the visitor must leave with
├── Sections       → Ordered list of every section with full content spec
└── Primary CTA    → The one action we want the visitor to take
```

Content marked `[COPY]` is finalized copywriting.
Content marked `[SPEC]` is a structural/design specification.
Content marked `[NOTE]` is a decision or constraint for the team.

---

---

# PAGE 1: HOMEPAGE — `/`

**Goal:** In under 5 seconds, make the visitor understand what Appriyo does, feel that their problem is understood, and know how to take the next step.

**Key Message:** *"Appriyo replaces your manual business processes with simple, automated systems — without the complexity."*

**Primary CTA:** → `/contact` — "Let's Talk About Your Business"

---

## Section 1.1 — HERO

**[SPEC]** Full viewport height on desktop. 80vh on mobile. Dark background. Single centered column. No background image — only subtle animated gradient or geometric pattern (low opacity).

**[COPY] Pre-heading label (small, accent color):**
```
AI-Powered Digital Transformation
```

**[COPY] Main Headline (H1):**
```
Still Running Your Business Manually?
```

**[COPY] Sub-headline (H2 or large body):**
```
Appriyo replaces paper, WhatsApp threads, and spreadsheets
with simple, automated systems built for your business.
```

**[COPY] Supporting description (body text, max 2 lines):**
```
We work with small businesses and local service providers
to eliminate repetitive work — no tech knowledge required.
```

**[SPEC] CTA Buttons (two):**
- Primary: `"Let's Talk About Your Business"` → scrolls to `#contact`
- Secondary (outline): `"See What We Build"` → scrolls to `#products`

**[SPEC] Social proof micro-line (below CTAs):**
```
Real software. Real businesses. No complexity.
```

**[NOTE]** No stock photos of offices, laptops, or generic "business people." Use abstract SVG illustration or simple icon grid representing automation/systems.

---

## Section 1.2 — SERVICES

**[SPEC]** 4-column card grid on desktop. 2-column on tablet. 1-column on mobile. Each card: icon + title + 2-line description.

**[COPY] Section label:**
```
What We Do
```

**[COPY] Section Heading:**
```
Four Ways Appriyo Helps Your Business
```

**[COPY] Section Sub-description:**
```
We focus on four things and do them well.
No generic IT services. No scope creep.
```

**[COPY] Service Cards:**

| # | Icon | Title                             | Description                                                                                                                      |
|---|------|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| 1 | ⚙️   | Business Process Automation       | We identify repetitive tasks in your operations and replace them with automated workflows — so your team can focus on real work. |
| 2 | 💻   | Custom Business Software          | We build simple, practical software tailored to how your business actually runs — not how a generic product assumes it does.     |
| 3 | 🤖   | AI Integration & Smart Systems    | We add AI where it genuinely helps — smart reminders, auto-responses, intelligent tracking — without the buzzwords.              |
| 4 | 🧭   | Digital Transformation Consulting | We analyze your current operations, find what's slowing you down, and build a plan to fix it — then help you execute it.         |

**[SPEC] CTA below cards:**
- Text link: `"See full service details →"` → `/services`

---

## Section 1.3 — SOLUTIONS

**[SPEC]** Alternating layout (text left / visual right, then flip). 3–5 solution entries. Each entry: problem statement → solution summary → link to product or service.

**[COPY] Section label:**
```
Real Problems We Solve
```

**[COPY] Section Heading:**
```
Do Any of These Sound Familiar?
```

**[COPY] Solution Entries:**

**Entry 1:**
- Problem: `"Managing repair jobs on paper or WhatsApp — and losing track of customer orders"`
- Solution: `"Amar Repair gives your shop a digital system for tracking every job, customer, and payment — from intake to delivery."`
- Link: `"See Amar Repair →"` → `/products/amar-repair`

**Entry 2:**
- Problem: `"Tracking students, fees, and batches in notebooks — and spending hours on manual follow-ups"`
- Solution: `"Amar Batch handles attendance, fees, and batch scheduling so you focus on teaching, not administration."`
- Link: `"See Amar Batch →"` → `/products/amar-batch`

**Entry 3:**
- Problem: `"Handing out paper business cards that get lost — and missing connections because of it"`
- Solution: `"Amar Card is a single NFC tap that shares your full contact profile. One card. No reprinting."`
- Link: `"See Amar Card →"` → `/products/amar-card`

**Entry 4:**
- Problem: `"Staff spending hours daily on tasks that a system could handle automatically"`
- Solution: `"We map your workflow, identify what can be automated, and build the system — so your team spends time where it matters."`
- Link: `"Learn about Automation →"` → `/services`

**[SPEC] CTA below section:**
- `"Don't see your problem? Tell us about it."` → `/contact`

---

## Section 1.4 — PRODUCTS

**[SPEC]** 3-card layout. Each card: product name + tagline + 3-bullet feature list + CTA button. Cards have subtle border + dark surface background.

**[COPY] Section label:**
```
Our Products
```

**[COPY] Section Heading:**
```
Built from Real Business Problems
```

**[COPY] Section Sub-description:**
```
These aren't side projects. Every Appriyo product started with
a real business owner who had a real problem.
```

**[COPY] Product Cards:**

**Card 1 — Amar Repair:**
- Name: `Amar Repair`
- Tagline: `Repair store management — simple and complete`
- Features:
    - Job tracking from intake to delivery
    - Customer notifications and service history
    - Payment and status management
- CTA: `"Learn More →"` → `/products/amar-repair`

**Card 2 — Amar Batch:**
- Name: `Amar Batch`
- Tagline: `Batch and student management for educators`
- Features:
    - Student and batch enrollment tracking
    - Attendance and fee management
    - Automated reminders and reports
- CTA: `"Learn More →"` → `/products/amar-batch`

**Card 3 — Amar Card:**
- Name: `Amar Card`
- Tagline: `One tap shares everything about you`
- Features:
    - NFC-powered digital contact card
    - No app needed on the receiver's phone
    - Update your info anytime — same card
- CTA: `"Learn More →"` → `/products/amar-card`

---

## Section 1.5 — WHY APPRIYO

**[SPEC]** 2-column layout: left = heading + description, right = 4 differentiator points (icon + title + 1-line explanation). No generic trust badges.

**[COPY] Section label:**
```
Why Appriyo
```

**[COPY] Section Heading:**
```
We're Not a Generic Software Agency
```

**[COPY] Section Description:**
```
Most agencies build what you ask for and disappear.
Appriyo works differently — we understand your business first,
then build what actually solves your problem.
```

**[COPY] Differentiator Points:**

| # | Title                          | Description                                                                    |
|---|--------------------------------|--------------------------------------------------------------------------------|
| 1 | Problem-First, Always          | We start by understanding your operation — not by pitching technology.         |
| 2 | Built for Non-Technical Owners | No jargon. No complex dashboards. If it isn't simple, we redesign it.          |
| 3 | Small Team, Direct Access      | You work directly with the people building your system — not account managers. |
| 4 | Long-Term, Not One-Off         | We build systems meant to run for years — not just deliver and disappear.      |

**[SPEC] CTA below section:**
- `"See how we work →"` → scrolls to `#approach`

---

## Section 1.6 — OUR APPROACH

**[SPEC]** Horizontal numbered steps (desktop). Vertical timeline (mobile). 4 steps. Clean, minimal.

**[COPY] Section label:**
```
Our Approach
```

**[COPY] Section Heading:**
```
How We Work With You
```

**[COPY] Steps:**

| Step | Title      | Description                                                                                                               |
|------|------------|---------------------------------------------------------------------------------------------------------------------------|
| 01   | Understand | We start with a conversation about your business — your workflow, your problems, your goals. No forms, no questionnaires. |
| 02   | Map        | We document exactly what's happening in your operation and identify what to simplify, automate, or replace.               |
| 03   | Build      | We build a focused solution — only what you need. Fast iteration. Direct feedback. No bloat.                              |
| 04   | Support    | We stay. If something breaks or needs adjustment, we fix it. We're not done when the software launches.                   |

---

## Section 1.7 — ABOUT (Brief)

**[SPEC]** Compact section — not a full About page. 2-column: left = short company description, right = team member avatars (4 people) in a simple grid.

**[COPY] Section label:**
```
About Appriyo
```

**[COPY] Section Heading:**
```
A Small Team Solving Real Business Problems
```

**[COPY] Description:**
```
Appriyo is a focused team of four based in Khulna, Bangladesh.
We don't try to do everything. We do a few things deeply —
automation, custom software, and AI-assisted systems for small businesses.

Our size is a feature, not a limitation. Every client works directly
with the people building their system.
```

**[SPEC] Team grid (4 items):**
- Photo (or illustrated avatar) + Name + Role only
- No bios here — full bios on `/about`

**[SPEC] CTA:**
- `"Meet the full team →"` → `/about`

---

## Section 1.8 — CONTACT

**[SPEC]** 2-column: left = form, right = contact details. This is the primary conversion destination. High contrast. Clear heading.

**[COPY] Section label:**
```
Get In Touch
```

**[COPY] Section Heading:**
```
Tell Us About Your Business Problem
```

**[COPY] Section Sub-description:**
```
No tech jargon. No pressure. Just a real conversation about
what's slowing your business down — and whether we can help.
```

**[SPEC] Form Fields:**
1. Full Name — `text` — placeholder: `"Your name"`
2. Business Type — `select` — options: `Repair Shop / Coaching Center / Retail Business / Startup / Other`
3. Describe your problem — `textarea` — placeholder: `"What's the main thing slowing your business down? (Even a few words helps)"`
4. WhatsApp / Phone — `text` — placeholder: `"+880 XXXXXXXXXX"`
5. Preferred Contact — `radio` — options: `WhatsApp / Email / Phone Call`
6. Submit button — `"Send Message"`

**[COPY] Right column:**
```
📧 contact@appriyo.com
📱 +880 1410394038 (WhatsApp)
🕐 Sunday – Thursday, 9 AM – 6 PM (GMT+6)
⏱ We respond within 1 business day.
```

**[COPY] Success message (after form submit):**
```
"We've received your message. Someone from the Appriyo team
will reach out within 1 business day via your preferred method."
```

---

---

# PAGE 2: SERVICES — `/services`

**Goal:** Convince technically-curious or solution-seeking visitors that Appriyo has the specific capability to solve their problem. Provide enough detail to earn a consultation request.

**Key Message:** *"Appriyo offers four focused services — each one exists because real businesses needed it."*

**Primary CTA:** → `/contact` — "Get a Free Consultation"

---

## Section 2.1 — PAGE HEADER

**[COPY] Label:** `Our Services`
**[COPY] H1:** `Four Services. Focused on One Goal.`
**[COPY] Description:**
```
We don't offer everything. We offer the four things that actually help
small businesses stop wasting time on manual processes.
```

---

## Section 2.2 — SERVICE 1: BUSINESS PROCESS AUTOMATION

**[COPY] Service Name:** `Business Process Automation`
**[COPY] One-liner:** `Replace repetitive manual tasks with systems that run themselves.`

**[COPY] What it is:**
```
If your team does the same task every day — sending reminders,
recording entries, following up on orders — that's a candidate for automation.
We identify the tasks that are stealing your team's time and replace them
with workflows that run automatically.
```

**[COPY] Examples of what we automate:**
- Customer follow-up reminders (SMS / WhatsApp)
- Job and order status updates
- Payment tracking and overdue alerts
- Daily report generation
- Attendance and scheduling notifications

**[COPY] What you get:**
- Fewer manual errors
- Hours returned to your team every week
- Consistent, reliable processes — not dependent on memory

**[SPEC] CTA:** `"Talk to us about automating your workflow →"` → `/contact`

---

## Section 2.3 — SERVICE 2: CUSTOM BUSINESS SOFTWARE

**[COPY] Service Name:** `Custom Business Software`
**[COPY] One-liner:** `Software that fits how your business actually works — not the other way around.`

**[COPY] What it is:**
```
Generic software forces you to adapt your process to its design.
Custom software is built for exactly how you operate.
We build tools that replace paper systems, spreadsheets, or
disconnected apps — with a single, simple interface your team will actually use.
```

**[COPY] Examples:**
- Repair shop management systems
- Student and batch management for educators
- Inventory and order tracking
- Internal operational tools

**[COPY] What you get:**
- A system built for your specific workflow
- Simple enough for non-technical staff
- Scalable as your business grows

**[SPEC] CTA:** `"Describe your software need →"` → `/contact`

---

## Section 2.4 — SERVICE 3: AI INTEGRATION & SMART SYSTEMS

**[COPY] Service Name:** `AI Integration & Smart Systems`
**[COPY] One-liner:** `Add intelligence to your operations — only where it genuinely helps.`

**[COPY] What it is:**
```
AI isn't magic, and we don't treat it that way.
We identify specific points in your workflow where AI can reduce
manual decision-making, speed up responses, or surface useful information.
Then we integrate it — practically, not experimentally.
```

**[COPY] Examples:**
- AI-powered customer response assistants
- Smart scheduling and routing
- Automated report analysis
- Intelligent notification systems

**[COPY] What you get:**
- Faster response times without hiring more staff
- Systems that get better as they process more data
- AI that's actually useful — not just impressive

**[NOTE]** Do NOT over-promise AI outcomes. Language must stay grounded and honest.

**[SPEC] CTA:** `"Explore AI for your business →"` → `/contact`

---

## Section 2.5 — SERVICE 4: DIGITAL TRANSFORMATION CONSULTING

**[COPY] Service Name:** `Digital Transformation Consulting`
**[COPY] One-liner:** `Understand what's wrong. Build a plan. Execute it together.`

**[COPY] What it is:**
```
Before building anything, you need to know what to build.
We spend time inside your operation — mapping workflows, identifying
bottlenecks, and understanding what technology can realistically fix.
Then we help you execute the plan, step by step.
```

**[COPY] What we do:**
- Operations mapping and workflow audit
- Identifying inefficiencies and manual bottlenecks
- Technology recommendation (what to build vs. buy)
- Phased implementation planning
- Ongoing partnership — not a one-time report

**[COPY] What you get:**
- A clear picture of what's actually slowing you down
- A realistic plan to fix it
- A team to execute it with you

**[SPEC] CTA:** `"Start with a consultation →"` → `/contact`

---

## Section 2.6 — WHAT WE DON'T DO

**[SPEC]** Small section, plain text or simple list. Honest and direct. Not defensive.

**[COPY] Heading:** `To Be Clear — Here's What We Don't Take On`

**[COPY] Body:**
```
Appriyo is focused. That means we turn down work that doesn't fit.
We don't do: generic website-only projects with no operational value,
one-off freelance tasks with no long-term purpose, projects where the
business problem isn't clear, or design-only work with no functionality.

This isn't a limitation — it's how we stay good at what we do.
```

---

## Section 2.7 — SERVICES PAGE CTA BLOCK

**[COPY] Heading:** `Not Sure Which Service You Need?`
**[COPY] Body:** `That's exactly what the first conversation is for. Tell us what's slowing your business down — we'll figure out the right approach together.`
**[SPEC] Button:** `"Get a Free Consultation"` → `/contact`

---

---

# PAGE 3: SOLUTIONS — `/solutions`

**Goal:** Let business owners self-identify their problem and see a clear path to Appriyo as the solution. This page is written from the customer's perspective — their language, their frustrations.

**Key Message:** *"Whatever manual process is slowing your business down — Appriyo has probably solved it before."*

**Primary CTA:** → `/contact` — "Tell Us Your Problem"

---

## Section 3.1 — PAGE HEADER

**[COPY] Label:** `Solutions`
**[COPY] H1:** `Find Your Problem Here`
**[COPY] Description:**
```
We built Appriyo's products and services by listening to business owners
talk about what frustrated them every day. See if yours is on this list.
```

---

## Section 3.2 — SOLUTION CARDS

**[SPEC]** Each solution is a card with: Problem (in the customer's own words) → What Appriyo does → Result → Link.

---

**Solution 1:**
- **Problem:** `"I track repair jobs on paper, WhatsApp, and memory. I lose track of orders. Customers call asking for updates and I don't always know where their device is."`
- **What Appriyo does:** Amar Repair gives your shop a single place to log every job — intake, status, technician, customer info, payment, and delivery. Customers get notified automatically.
- **Result:** No lost jobs. No "I'll check and call you back." Full history for every customer.
- **CTA:** `"See Amar Repair →"` → `/products/amar-repair`

---

**Solution 2:**
- **Problem:** `"I run a coaching center. I track students, fees, and attendance in notebooks. I spend hours every month just trying to figure out who hasn't paid."`
- **What Appriyo does:** Amar Batch manages every student, batch, attendance record, and payment — with automated reminders for overdue fees.
- **Result:** No more monthly notebook audits. No missed payments. More time teaching.
- **CTA:** `"See Amar Batch →"` → `/products/amar-batch`

---

**Solution 3:**
- **Problem:** `"I hand out paper business cards at every meeting. Half of them get lost. People rarely save the number. I miss follow-ups constantly."`
- **What Appriyo does:** Amar Card is an NFC card — one tap on any phone opens your full digital profile. Name, phone, WhatsApp, links — everything. No app required.
- **Result:** Every contact saved. No lost cards. Update your details anytime without reprinting.
- **CTA:** `"See Amar Card →"` → `/products/amar-card`

---

**Solution 4:**
- **Problem:** `"My staff does the same thing every day — filling in forms, sending messages, updating spreadsheets. It's slow and they make mistakes."`
- **What Appriyo does:** We map the repetitive parts of your workflow and replace them with automated systems. Your staff does the work that actually needs a human.
- **Result:** Fewer errors, faster operations, lower overhead.
- **CTA:** `"Learn about Automation →"` → `/services`

---

**Solution 5:**
- **Problem:** `"Everything we do is still manual. WhatsApp for orders, Excel for records, paper for receipts. I know we need a system but I don't know where to start."`
- **What Appriyo does:** We start with a consultation — no pitch, just a conversation. We map your current workflow, identify the most painful bottleneck, and recommend what to build first.
- **Result:** A clear starting point. A plan. A partner to execute it.
- **CTA:** `"Start with a Free Call →"` → `/contact`

---

## Section 3.3 — SOLUTIONS PAGE CTA BLOCK

**[COPY] Heading:** `Don't See Your Problem Here?`
**[COPY] Body:** `Every business is different. Tell us what's slowing you down in your own words — we'll tell you honestly whether we can help.`
**[SPEC] Button:** `"Tell Us Your Problem"` → `/contact`

---

---

# PAGE 4: PRODUCTS OVERVIEW — `/products`

**Goal:** Establish credibility by showing Appriyo builds real, working products — not just custom services. Create entry points into each product's detail page.

**Key Message:** *"These products exist because real businesses needed them. They might be exactly what yours needs too."*

**Primary CTA:** → Each product page, then `/contact`

---

## Section 4.1 — PAGE HEADER

**[COPY] Label:** `Our Products`
**[COPY] H1:** `Real Software. Built from Real Problems.`
**[COPY] Description:**
```
Every Appriyo product started with a business owner who had a problem
and no good solution. We built what they needed. Now it's available for
businesses like yours.
```

---

## Section 4.2 — PRODUCT CARDS (3)

**[SPEC]** Full-width cards, stacked vertically. Each: left = text (name + tagline + features + CTA), right = product screenshot or clean illustration.

**Card 1 — Amar Repair:**
See product page spec below (Section 5).
- Card CTA: `"Learn More About Amar Repair →"` → `/products/amar-repair`

**Card 2 — Amar Batch:**
See product page spec below (Section 6).
- Card CTA: `"Learn More About Amar Batch →"` → `/products/amar-batch`

**Card 3 — Amar Card:**
See product page spec below (Section 7).
- Card CTA: `"Learn More About Amar Card →"` → `/products/amar-card`

---

## Section 4.3 — CUSTOM PRODUCT CTA

**[COPY] Heading:** `Have a Problem That Needs Its Own Product?`
**[COPY] Body:** `If your business has a workflow that doesn't fit any of the above — we build custom. Tell us what you need.`
**[SPEC] Button:** `"Let's Build It →"` → `/contact`

---

---

# PAGE 5: AMAR REPAIR — `/products/amar-repair`

**Goal:** Convince repair shop owners that this is exactly the system they need. Be specific, be concrete.

**Key Message:** *"Every repair job tracked. Every customer informed. Nothing lost."*

**Primary CTA:** → `/contact` — "Interested? Let's Talk"

---

## Section 5.1 — PRODUCT HERO

**[COPY] Label:** `Amar Repair`
**[COPY] H1:** `The Repair Shop System You've Been Running Manually`
**[COPY] Description:**
```
Job status on paper. Customer names on WhatsApp. Payments in a notebook.
Amar Repair replaces all of that with one simple system your entire shop can use.
```
**[SPEC] CTA:** `"Let's Talk"` → `/contact`

---

## Section 5.2 — THE PROBLEM

**[COPY] Heading:** `Sound Familiar?`
**[COPY] List:**
- Customer calls asking for an update — you have to check three places to answer
- A job gets lost or forgotten between technicians
- You can't tell how many repairs are pending right now without physically checking
- A customer picks up their device but you have no record of what was done or paid

---

## Section 5.3 — WHAT AMAR REPAIR DOES

**[COPY] Heading:** `What Amar Repair Gives You`

**[COPY] Features:**
| Feature | Description |
|---------|-------------|
| Job Intake | Log every repair job — device, issue, customer, technician assigned |
| Status Tracking | Move jobs through stages: Received → In Progress → Ready → Delivered |
| Customer Notifications | Automatic WhatsApp/SMS when a job is ready |
| Payment Management | Record deposits, balances, and mark jobs as paid |
| Customer History | Full service history for every customer and device |
| Dashboard | See every open job at a glance — no hunting through notebooks |

---

## Section 5.4 — WHO IT'S FOR

**[COPY]:**
```
Amar Repair is built for: mobile repair shops, computer repair centers,
appliance repair businesses, and any service center managing physical jobs
from intake to delivery.

If you have more than 3 active jobs at any time — Amar Repair is for you.
```

---

## Section 5.5 — CTA BLOCK

**[COPY] Heading:** `Ready to Run Your Shop Without the Chaos?`
**[SPEC] Button:** `"Talk to Us About Amar Repair"` → `/contact`

---

---

# PAGE 6: AMAR BATCH — `/products/amar-batch`

**Goal:** Convince educators and coaching center owners that managing students manually is a solved problem.

**Key Message:** *"Focus on teaching. Let Amar Batch handle the administration."*

**Primary CTA:** → `/contact` — "Talk to Us About Amar Batch"

---

## Section 6.1 — PRODUCT HERO

**[COPY] Label:** `Amar Batch`
**[COPY] H1:** `Batch Management for Educators Who Are Done With Notebooks`
**[COPY] Description:**
```
Students, batches, attendance, fees, reminders — all in one place.
Amar Batch was built so educators can spend less time on administration
and more time on what they're actually good at.
```

---

## Section 6.2 — THE PROBLEM

**[COPY] Heading:** `If You Run a Coaching Center, You Know This Problem`
**[COPY] List:**
- You maintain student lists in notebooks or separate Excel files
- Fee collection is tracked manually — and someone always "forgot to pay"
- Checking attendance requires going through physical registers
- You send payment reminders one by one via WhatsApp
- At month end, you spend hours figuring out who owes what

---

## Section 6.3 — WHAT AMAR BATCH DOES

**[COPY] Features:**
| Feature | Description |
|---------|-------------|
| Student Management | Enroll students, track details, manage status |
| Batch Organization | Group students by subject, time, or level |
| Attendance Tracking | Mark daily attendance — view trends over time |
| Fee Management | Set fees per batch, record payments, see outstanding dues |
| Automated Reminders | Send fee reminders without doing it manually |
| Reports | Monthly summaries of attendance, fees, and activity |

---

## Section 6.4 — WHO IT'S FOR

**[COPY]:**
```
Amar Batch is for: private tutors managing multiple batches,
coaching centers with 10–200+ students, and educational institutes
that still manage operations on paper or Excel.
```

---

## Section 6.5 — CTA BLOCK

**[COPY] Heading:** `Ready to Stop Managing on Paper?`
**[SPEC] Button:** `"Talk to Us About Amar Batch"` → `/contact`

---

---

# PAGE 7: AMAR CARD — `/products/amar-card`

**Goal:** Convince professionals and business owners that paper cards are a solved problem and NFC is simpler than they think.

**Key Message:** *"One tap. Your full profile. No app. No reprinting."*

**Primary CTA:** → `/contact` — "Get Your Amar Card"

---

## Section 7.1 — PRODUCT HERO

**[COPY] Label:** `Amar Card`
**[COPY] H1:** `Your Business Card Just Got a Tap`
**[COPY] Description:**
```
Stop handing out cards that get lost.
Amar Card is an NFC-powered digital contact card.
One tap on any modern phone shares your name, number,
WhatsApp, links — everything. No app required on their end.
```

---

## Section 7.2 — THE PROBLEM

**[COPY] Heading:** `Paper Cards Have Always Had These Problems`
**[COPY] List:**
- They get lost or thrown away within days
- People rarely save numbers from paper cards
- Every detail change means reprinting a new batch
- You can't track who you gave them to
- They can't link to your WhatsApp, website, or portfolio

---

## Section 7.3 — WHAT AMAR CARD DOES

**[COPY] Features:**
| Feature | Description |
|---------|-------------|
| NFC Tap | One tap on any NFC-enabled phone opens your profile |
| No App Required | The receiver doesn't need an app — just tap and save |
| Full Digital Profile | Name, phone, WhatsApp, email, links, social media |
| Instant Save | Contact saves directly to their phone with one tap |
| Update Anytime | Change your details online — the same physical card still works |
| One Card, Forever | No reprinting when your details change |

---

## Section 7.4 — WHO IT'S FOR

**[COPY]:**
```
Amar Card is for: business owners, freelancers, consultants, sales professionals,
and anyone who attends meetings, events, or networking sessions
and wants to leave a contact that actually gets saved.
```

---

## Section 7.5 — CTA BLOCK

**[COPY] Heading:** `Replace Your Paper Stack With One Smart Card`
**[SPEC] Button:** `"Get Your Amar Card"` → `/contact`

---

---

# PAGE 8: ABOUT — `/about`

**Goal:** Build human trust by showing who is behind Appriyo and what they genuinely believe. Not a typical "About Us" page with filler content.

**Key Message:** *"Appriyo is four people who believe technology should solve problems — not create new ones."*

**Primary CTA:** → `/contact` — "Work With Us"

---

## Section 8.1 — PAGE HEADER

**[COPY] Label:** `About Appriyo`
**[COPY] H1:** `We're a Small Team. We Like It That Way.`
**[COPY] Description:**
```
Appriyo is not trying to become a large agency.
We're four people who work closely with a small number of businesses,
build systems that actually run, and stay accountable for what we make.
```

---

## Section 8.2 — WHO WE ARE

**[COPY] Heading:** `What Appriyo Is`
**[COPY] Body:**
```
Appriyo is an AI-powered digital transformation and software solutions company
focused on solving real-world business problems through simple, efficient, and
practical technology.

We work with small businesses and local service providers who are still running
on manual processes — and help them replace that friction with systems that work.

We are based in Khulna, Bangladesh. We work remotely with businesses worldwide.
```

---

## Section 8.3 — WHAT WE BELIEVE

**[COPY] Heading:** `Our Philosophy`

**[COPY] Belief points:**
| Belief | What it means in practice |
|--------|--------------------------|
| Problem-first, not technology-first | We understand your business before recommending anything |
| Simplicity over complexity | If we can't explain it simply, we haven't designed it well enough |
| Practical over theoretical | Every system we build is tested against real use, not just demos |
| Long-term value over short-term delivery | We build for how your business will run in two years, not just today |
| Small team, direct access | You always talk to the person building your system — not a project manager |

---

## Section 8.4 — THE TEAM

**[SPEC]** 4 cards in a 2x2 grid (desktop) / stacked (mobile). Each card: photo/avatar + name + role + 1 sentence about what they own.

**[COPY] Team Members:**

**Shahajalal Mahmud**
Role: `Development & Architecture`
Focus: `Technical decisions, code quality, system design, and security.`

**Preota Saha**
Role: `UI & Design`
Focus: `Design systems, frontend architecture, and making every interface feel effortless.`

**Md Munna Sardar**
Role: `Testing & QA`
Focus: `Making sure what we build actually works — before it reaches the client.`

**Hazera Islam Mim**
Role: `Marketing & Social Media`
Focus: `How Appriyo communicates its identity and reaches the businesses that need it.`

---

## Section 8.5 — HOW WE WORK

**[COPY] Heading:** `How a Typical Engagement Works`
**[COPY] Body:**
```
We start every project with a conversation — not a proposal.
We want to understand your business before writing a single line of code.

From there, we move fast. We build in short cycles, show you progress often,
and adjust based on feedback from real use — not assumptions.

We stay involved after launch. If something isn't working, we fix it.
If your business grows and the system needs to grow with it, we're still here.
```

---

## Section 8.6 — ABOUT PAGE CTA

**[COPY] Heading:** `Want to Work With Us?`
**[COPY] Body:** `The first step is just a conversation. No pressure, no pitch — just tell us about your business.`
**[SPEC] Button:** `"Get in Touch"` → `/contact`

---

---

# PAGE 9: CONTACT — `/contact`

**Goal:** Convert visitors into consultation requests. Maximum clarity, minimum friction.

**Key Message:** *"Tell us your problem. We'll respond in one business day."*

**Primary CTA:** Submit the contact form.

---

## Section 9.1 — PAGE HEADER

**[COPY] Label:** `Contact`
**[COPY] H1:** `Let's Talk About Your Business Problem`
**[COPY] Description:**
```
No tech jargon. No commitment required.
Just tell us what's slowing your business down,
and we'll have a real conversation about whether we can help.
```

---

## Section 9.2 — CONTACT FORM (LEFT COLUMN)

**[SPEC] Fields:**
1. Full Name — `text` — required
2. Business Type — `select` — `Repair Shop / Coaching Center / Retail Business / Startup / Other`
3. Describe your problem — `textarea` (4 rows) — `"What's the main thing slowing your business down?"`
4. WhatsApp / Phone Number — `tel` — required
5. Preferred Contact Method — `radio` — `WhatsApp / Email / Phone Call`
6. Submit Button — `"Send Message"` — primary button style

**[COPY] Below form:**
```
We read every message personally. No bots. No auto-responses.
```

---

## Section 9.3 — DIRECT CONTACT (RIGHT COLUMN)

**[COPY]:**
```
Or reach us directly:

📧  contact@appriyo.com
📱  +880 1410394038
💬  WhatsApp (tap to open)

Office Hours:
Sunday – Thursday
9:00 AM – 6:00 PM (GMT+6)

Response time: Within 1 business day
```

---

## Section 9.4 — POST-SUBMIT STATE

**[COPY] Success heading:** `Message Received`
**[COPY] Success body:**
```
Thank you. Someone from the Appriyo team will reach out
within 1 business day via your preferred contact method.
```

**[COPY] Error state:**
```
Something went wrong. Please email us directly at contact@appriyo.com
or reach us on WhatsApp at +880 1410394038.
```

---

---

# PAGE 10: LEGAL PAGES

**[NOTE]** These pages use simple, readable typography. No navbar CTA button. No marketing copy. Footer only.

## Privacy Policy — `/privacy`
Source: `PRIVACY.md`
Layout: Single-column, max 720px wide, prose format.

## Terms of Service — `/terms`
Source: `TERMS.md`
Layout: Same as above.

## Security Policy — `/security`
Source: `SECURITY.md`
Layout: Same as above.

---

---

# PAGE 11: 404 NOT FOUND — `*`

**[COPY] Heading:** `This Page Doesn't Exist`
**[COPY] Body:** `You may have followed an old link or typed something wrong. That's okay.`
**[SPEC] CTA:** `"Back to Homepage"` → `/`

**[NOTE]** Design: Centered, minimal. Logo + message + one button. Nothing else.

---

---

# GLOBAL COMPONENTS (APPEAR ON ALL PAGES)

## Navbar

**[SPEC]** Sticky. Transparent on load → solid background on scroll (12px blur backdrop).

**[COPY] Links:**
- `Services` → `/services`
- `Solutions` → `/solutions`
- `Products` → `/products`
- `About` → `/about`
- `Contact` → `/contact` (styled as primary button)

**[NOTE]** Mobile: hamburger collapses all links. Contact button remains visible at all times.

---

## Footer

**[COPY] Tagline:** `Helping businesses replace manual work with simple, AI-powered systems.`

**[COPY] Column — Pages:**
Services · Solutions · Products · About · Contact

**[COPY] Column — Products:**
Amar Repair · Amar Batch · Amar Card

**[COPY] Column — Company:**
Privacy Policy · Terms of Service · Security · LinkedIn · GitHub

**[COPY] Bottom bar:**
```
© 2026 Appriyo Technologies. All rights reserved.
Khulna, Bangladesh. Remote services worldwide.
```

---

# CONTENT RULES (APPLY TO ALL PAGES)

| Rule                 | Detail                                                                  |
|----------------------|-------------------------------------------------------------------------|
| Max paragraph length | 3 lines on desktop                                                      |
| Sentence length      | Short. One idea per sentence.                                           |
| Jargon               | ❌ Never. Plain language always.                                         |
| Assumed knowledge    | None — write for non-technical business owners                          |
| Tone                 | Calm, direct, confident — never salesy                                  |
| Headlines            | Problem-first or outcome-first — never company-first                    |
| CTA text             | Specific and action-oriented — never "Click Here" or "Learn More" alone |

---

*Document version: 1.0*
*Owner: Shahajalal Mahmud (Development & Architecture) · Preota Saha (UI & Design)*
*Aligned with: appriyo_constitution.md v1.0 · design.md v1.0 · product.md v1.0 · sitemap.md v1.0*