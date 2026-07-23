# Appriyo Content Strategy & Sitemap (v1.0)

### Companion to Design System v3.0 — "The Ledger System"

> **Purpose:** Define the site's information architecture and the actual
> words that go on the page — written for a local business owner first,
> a technical evaluator second. No section requires jargon to understand.

---

# 1. WRITING RULES (read before writing any page copy)

1. **No unproven adjectives.** Banned words unless followed immediately by
   proof: "innovative," "cutting-edge," "world-class," "best-in-class,"
   "revolutionary," "seamless," "robust." If you can't point at evidence,
   cut the claim.
2. **Say what the software does, not what it "leverages."** "Sends your
   customer a text when their repair is ready" — not "leverages automated
   notification infrastructure."
3. **Name real things.** Real product names (Amar Repair, Amar Batch), real
   team names, real numbers. Never an anonymous "our team of experts."
4. **One idea per sentence.** Business owners skim. Long compound sentences
   lose them.
5. **Address the reader as "you," running their business** — not "clients,"
   not "users," not "stakeholders."
6. **If a number can't be verified, don't use it.** No "99.9% uptime," no
   "10x faster," no invented stats. Use real, specific, smaller numbers
   instead ("2 products live," "built for 1 repair shop's real daily
   workflow") — smaller and true beats big and vague.

---

# 2. SITEMAP

```
/                       Home
/services               Services (detail)
/products               Products — Amar Repair, Amar Batch, future products
/products/amar-repair   Product detail page
/products/amar-batch    Product detail page
/about                  Team, philosophy, why we exist
/work                   Case studies / portfolio (grows over time)
/contact                Contact
```

For launch, `/services`, `/products`, `/about`, and `/contact` can be
sections on the homepage with anchor links rather than separate pages —
recommended for now, since you don't yet have enough case-study content to
justify a full multi-page site. Split into real subpages once `/work` has
3+ entries. `/products/amar-repair` and `/products/amar-batch` should become
real standalone pages as soon as possible, since they are your strongest
proof and deserve to be linkable/shareable on their own.

---

# 3. HOMEPAGE — SECTION BY SECTION

## 3.1 Nav

```
Appriyo          Services   Products   About   Work          [Talk to us →]
```

Keep it to 4 links max. "Work" only appears once you have at least one real
case study — until then, omit it and don't link to an empty page.

## 3.2 Hero

**Ledger label:** `// what we do`

**Headline (pick one, or A/B once live):**

- "We build the system that replaces your notebook."
- "Your business, off paper and under control."
- "We turn your daily workarounds into working software."

**Subtext:**

> Appriyo builds practical software for repair shops, coaching centers, and
> small businesses still running on notebooks and memory — built by a team
> you can actually call.

**Buttons:** `See our work →` (primary) · `Talk to us` (secondary)

**Visual:** Real screenshot of Amar Repair's dashboard, in a receipt-card
frame. Not a mockup, not stock UI — the actual product.

_Why this headline direction:_ it names the reader's actual current state
(notebook, memory) instead of an abstract "operational inefficiency." A shop
owner reads it and thinks "that's literally my situation," which is the
entire job of a hero.

## 3.3 Problem Statement

**Ledger label:** `// 01 — the problem`

Full-width `--color-paper-dim` panel, one line, large:

> "Still tracking repairs, students, or orders in a notebook — and hoping
> nothing gets lost?"

No bullets, no icons. One breath of space around it, per the design system.

## 3.4 Services

**Ledger label:** `// 02 — what we build`
**Heading:** "Software built around how your business actually runs"

Five ledger-cards, plain language (not the "AI Integration & AI-Assisted
Systems" phrasing from the old docs — reword for this audience):

1. **Custom Software** — "A system built specifically for how you work — not
   a generic template you have to bend your business around."
2. **Websites & Apps** — "A website or app that actually gets you customers
   or makes your day-to-day easier — not just a digital business card."
3. **Automation** — "Automatic reminders, follow-ups, and tracking, so
   nothing depends on someone remembering."
4. **AI Where It Helps** — "We use AI only where it saves you real time —
   never added just to sound modern."
5. **Products You Can Try Today** — "See Amar Repair and Amar Batch — real
   software already built, not a pitch." → links to Products

## 3.5 Products

**Ledger label:** `// 03 — proof, not promises`
**Heading:** "Two real products. Try them before you take our word for it."

This is your strongest section — treat it as the emotional core of the
page, not a features list. For each product:

**Amar Repair — Repair Store Management System**

> Tracks every repair job from drop-off to pickup, so nothing gets lost and
> no customer is left wondering where their device is.
> [Receipt-card screenshot] [Stamp: "Live product"] `See Amar Repair →`

**Amar Batch — Teacher & Batch Management System**

> Manages student batches, attendance, and payments in one place, built for
> how coaching centers in Bangladesh actually operate.
> [Receipt-card screenshot] [Stamp: "Live product"] `See Amar Batch →`

_Only use the "Live product" stamp if the product is genuinely in active use
somewhere — if it's still in development, the stamp should say "In
development" instead. Never stamp something that isn't true yet; this
section is where trust is won or lost._

## 3.6 Why Appriyo

**Ledger label:** `// 04 — why us`
**Heading:** "Small team. Direct access. No middlemen."

Left column: verified-stamp stats (**only include numbers you can currently
back up** — do not launch with placeholder stats):

- Real founding date / years building
- Number of live products
- Number of real client engagements (once you have any — omit until then)

Right column, short paragraph:

> You talk directly to the person building your system — not a account
> manager relaying messages to a developer you'll never meet. We're a small
> team of four, and we intend to still be answering your calls after you've
> forgotten you ever used a notebook.

Below: 4 team member cards (photo, name, role, one line — pull from
TEAMS.md, don't invent titles beyond what's already documented).

## 3.7 Process

**Ledger label:** `// 05 — how we work`
**Heading:** "How a project actually goes"

Numbered ledger steps (numbering earned — this is a real sequence):

1. **We understand your business first** — before any code, a real
   conversation about how you currently work.
2. **We build the smallest version that solves the real problem** — not
   every feature you can imagine, the one that matters first.
3. **You use it, we improve it** — real feedback from real use, not
   guesswork.
4. **We stay reachable after launch** — this is a long-term relationship,
   not a handoff.

## 3.8 Testimonials

**Ledger label:** `// 06 — what clients say`

Receipt-cards with full name + business name. **Do not launch this section
with fabricated or placeholder testimonials** — an empty or omitted section
is more trustworthy than a fake one, and directly contradicts your whole
positioning if discovered. Leave this section out entirely until you have
your first real quote, even if that means launching without it.

## 3.9 Contact

**Ledger label:** `// 07 — let's talk`
**Heading:** "Tell us what you're dealing with"

> One line, no sales pitch: describe the problem, and we'll tell you
> honestly whether we're the right fit — even if the answer is no.

Minimal form: Name, Business name, Email, What are you trying to solve
(short text). Below the form, show the direct email/phone from TEAMS.md in
plain text — a non-technical visitor should never feel forced through a
form to reach a human.

## 3.10 Footer

Plain, mono meta text:

```
Appriyo Technologies
Khulna, Bangladesh · Remote, worldwide
contact@appriyo.com

Services   Products   About   Contact
© 2026 Appriyo Technologies. All rights reserved.
```

---

# 4. PRODUCT DETAIL PAGE TEMPLATE (Amar Repair / Amar Batch)

```
[LEDGER LABEL]  // Product
[H1]  Amar Repair
[SUBTEXT]  One-sentence plain description of who it's for and what it replaces
[STAMP]  Live product / In development
[HERO SCREENSHOT]  Real dashboard, receipt-card frame

[SECTION] The problem it solves
  Plain paragraph: what the shop owner was doing before (notebook, memory,
  scattered messages), what breaks about that.

[SECTION] What it actually does
  3–5 concrete capabilities, each one sentence, no feature-speak.
  e.g. "Logs every device dropped off with photos and notes."
       "Sends the customer a text the moment their repair is ready."
       "Shows the shop owner what's overdue at a glance."

[SECTION] Built with (optional, technical readers only, small/muted)
  Tech stack, kept brief — this is for the rare technical evaluator, not
  the main narrative.

[CTA]  Want something like this for your business? → Contact
```

---

# 5. ABOUT PAGE

Pull directly from TEAMS.md and the Identity doc — these are already
well-written and honest. Key structural note: **lead with the team, not the
mission statement.** A local business owner trusts people, not philosophy
paragraphs. Suggested order:

1. One-line positioning (from Identity doc §12)
2. Team member cards (from TEAMS.md — keep photos, real names, real roles)
3. "Why we started this" — condensed from Identity §1.2, 2–3 sentences max,
   not the full essay. Link to a longer "our story" if they want more.
4. Office hours / contact, plainly stated

---

# 6. WHAT NOT TO PUT ON THE SITE YET

Being explicit about this protects the "we don't over-exaggerate" promise:

- ❌ Testimonials until you have real ones
- ❌ Client logos until you have real, permission-granted clients
- ❌ Uptime/performance stats you haven't measured
- ❌ A "Work" / case studies page until it has at least one real entry
- ❌ Team bios with skills nobody on the team actually has yet
- ❌ Pricing, unless you're ready to honor it publicly

A shorter, honest site beats a padded, impressive-looking one — especially
because your stated differentiator _is_ honesty.

---

# 7. TONE REFERENCE (quick checks while writing any new copy)

| Instead of…                         | Write…                                                                    |
| ----------------------------------- | ------------------------------------------------------------------------- |
| "Leverage AI-powered automation"    | "We use AI where it saves you real time"                                  |
| "End-to-end digital transformation" | "We replace your notebook with software that actually works for you"      |
| "Our team of experts"               | "Shahajalal, Preota, Munna, and Mim"                                      |
| "Seamless user experience"          | "Easy enough that you won't need a manual"                                |
| "Scalable enterprise solutions"     | "Built to grow with your shop, not force you into a big system too early" |

---

_Appriyo Content Strategy v1.0 — pairs with Design System v3.0_
