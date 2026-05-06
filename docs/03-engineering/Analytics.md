# 📊 APPRIYO WEBSITE — ANALYTICS DOCUMENT (v1.0)

> **Purpose:**
> Defines what Appriyo tracks, why it tracks it, and what decisions each metric informs.
> Analytics without purpose generates noise, not insight.
> Every tracked event exists because it answers a specific business question.

> **Aligned with:** `product.md` · `user_flow.md` · `roadmap.md`
> **Owner:** Hazera Islam Mim (Marketing) + Shahajalal Mahmud (Implementation)

---

# 1. ANALYTICS PHILOSOPHY

## 1.1 The One Rule

> **Every metric must answer a question. If you can't name the question, don't track the metric.**

The Appriyo website has one job: convert business owners with manual workflow problems into consultation requests. Analytics tells us whether it's doing that job — and where it's failing.

## 1.2 What Analytics Is For at Appriyo

| Use                    | Example question                                                 |
| ---------------------- | ---------------------------------------------------------------- |
| Conversion measurement | "How many people reach the contact form and actually submit it?" |
| Flow identification    | "Where do people drop off before contacting us?"                 |
| Content effectiveness  | "Which solution card gets the most clicks?"                      |
| Traffic source quality | "Which channel sends visitors who actually convert?"             |
| Page performance       | "Which pages make people leave immediately?"                     |

## 1.3 What Analytics Is NOT For

- Vanity metrics (total visits with no conversion context)
- Real-time dashboards nobody checks
- Tracking individual users personally (privacy violation)
- Making decisions before there is enough data to act on

---

# 2. ANALYTICS TOOL

## 2.1 Tool: Plausible Analytics (Recommended)

**Why Plausible over Google Analytics:**

| Criteria                     | Plausible                    | Google Analytics 4                |
| ---------------------------- | ---------------------------- | --------------------------------- |
| Privacy-friendly             | ✅ GDPR compliant by default | ⚠️ Requires cookie consent banner |
| Cookie consent banner needed | ❌ No                        | ✅ Yes                            |
| Data ownership               | ✅ Your data                 | ❌ Google's servers               |
| Setup complexity             | Simple 1-script install      | Complex event schema              |
| Performance impact           | ~1kb script                  | ~45kb script                      |
| Price                        | ~$9/month                    | Free                              |
| Bangladesh accessibility     | ✅                           | Sometimes blocked                 |

**Decision:** Use Plausible. The cookie banner alone is worth the cost — it removes friction from the first impression of the site, which directly impacts conversion.

**Alternative:** If budget is a constraint in Phase 1 — use Google Analytics 4 with minimal configuration and add the cookie banner. Migrate to Plausible in Phase 4.

The `tagged-events` version enables custom event tracking.

---

# 3. WHAT WE TRACK

All tracked items are organized by the business question they answer.

---

## 3.1 CONVERSION EVENTS (Most Important)

These directly measure the site's primary job.

### Event: `contact_form_submit`

**Question answered:** Is the contact form converting?

**When tracked:** User successfully submits the contact form (after server confirms)

**Properties:**

| Property        | Values                                                  | Why                                   |
| --------------- | ------------------------------------------------------- | ------------------------------------- |
| `businessType`  | `repair_shop`, `coaching`, `retail`, `startup`, `other` | Which customer type converts most     |
| `contactMethod` | `whatsapp`, `email`, `call`                             | Preferred contact method distribution |
| `source_page`   | `homepage`, `contact_page`                              | Which form instance converts more     |

---

### Event: `whatsapp_click`

**Question answered:** How many people prefer WhatsApp over the form?

**When tracked:** Click on any WhatsApp direct link

**Properties:**

| Property   | Values                                             | Why                         |
| ---------- | -------------------------------------------------- | --------------------------- |
| `location` | `contact_page`, `contact_section`, `error_message` | Where WhatsApp is used most |

---

### Event: `email_click`

**Question answered:** How many people click the email link directly?

**When tracked:** Click on `mailto:contact@appriyo.com`

**Properties:** `location` — where the email link was clicked

---

## 3.2 ENGAGEMENT EVENTS

These measure whether the site content is working.

### Event: `hero_cta_click`

**Question answered:** Is the hero section driving action?

**When tracked:** Click on either hero CTA button

**Properties:**

| Property      | Values                 | Why                    |
| ------------- | ---------------------- | ---------------------- |
| `cta_type`    | `primary`, `secondary` | Which CTA is used more |
| `destination` | `contact`, `products`  | Validates CTA mapping  |

---

### Event: `solution_card_click`

**Question answered:** Which customer problem resonates most?

**When tracked:** Click on any solution card CTA link

**Properties:**

| Property      | Values                                                               | Why                               |
| ------------- | -------------------------------------------------------------------- | --------------------------------- |
| `solution`    | `amar_repair`, `amar_batch`, `amar_card`, `automation`, `consulting` | Which problem is most common      |
| `source_page` | `homepage`, `solutions_page`                                         | Which placement is more effective |

---

### Event: `product_card_click`

**Question answered:** Which product generates the most interest?

**When tracked:** Click on any product card CTA

**Properties:**

| Property      | Values                                   | Why                            |
| ------------- | ---------------------------------------- | ------------------------------ |
| `product`     | `amar_repair`, `amar_batch`, `amar_card` | Product interest ranking       |
| `source_page` | `homepage`, `products_page`              | Where product clicks come from |

---

### Event: `service_detail_click`

**Question answered:** Which service do visitors want to learn more about?

**When tracked:** Click on "See full service details →" or individual service CTAs

**Properties:**

| Property  | Values                                                          | Why                      |
| --------- | --------------------------------------------------------------- | ------------------------ |
| `service` | `automation`, `custom_software`, `ai_integration`, `consulting` | Service interest ranking |

---

### Event: `navbar_contact_click`

**Question answered:** Is the persistent Contact button in the navbar driving traffic to the form?

**When tracked:** Click on the Contact button in the navbar

**Properties:**

| Property      | Values                | Why                                        |
| ------------- | --------------------- | ------------------------------------------ |
| `source_page` | The current page path | Where navbar contact clicks come from most |

---

## 3.3 FORM BEHAVIOR EVENTS

These diagnose why the form is or isn't converting.

### Event: `contact_form_start`

**Question answered:** What percentage of visitors who reach the contact form actually start filling it?

**When tracked:** User focuses on the first form field (Name)

---

### Event: `contact_form_error`

**Question answered:** Are form validation errors causing abandonment?

**When tracked:** Form submission attempt fails validation

**Properties:**

| Property      | Values                                                      | Why                                         |
| ------------- | ----------------------------------------------------------- | ------------------------------------------- |
| `error_field` | `name`, `businessType`, `problem`, `phone`, `contactMethod` | Which field causes most validation failures |

---

### Event: `contact_form_submission_error`

**Question answered:** Is the form infrastructure failing?

**When tracked:** Form submits but server/EmailJS/Formspree returns an error

---

## 3.4 PAGE AND CONTENT EVENTS

### Event: `scroll_depth`

**Question answered:** How far do visitors actually read on the homepage?

**When tracked:** User scrolls past key section thresholds

**Properties:**

| Property        | Values                                                        | Why                              |
| --------------- | ------------------------------------------------------------- | -------------------------------- |
| `section`       | `services`, `solutions`, `products`, `why_appriyo`, `contact` | Which sections are actually seen |
| `depth_percent` | `25`, `50`, `75`, `100`                                       | Overall scroll depth             |

---

### Event: `404_reached`

**Question answered:** Are there broken links we need to fix?

**When tracked:** User lands on the 404 page

**Properties:**

| Property        | Values                          | Why                     |
| --------------- | ------------------------------- | ----------------------- |
| `attempted_url` | The URL the user tried to visit | Identifies broken links |

---

# 4. AUTOMATIC TRACKING (No Code Required)

Plausible automatically tracks these without custom events:

| Metric               | What It Shows                       |
| -------------------- | ----------------------------------- |
| **Page views**       | Which pages get traffic             |
| **Unique visitors**  | Real people, not repeat hits        |
| **Session duration** | How long people stay                |
| **Bounce rate**      | Percentage who leave after one page |
| **Traffic sources**  | Google, LinkedIn, direct, referral  |
| **Countries**        | Where visitors are from             |
| **Devices**          | Mobile vs desktop split             |
| **Browsers**         | Chrome vs Safari vs Firefox         |
| **Entry pages**      | Where most people start             |
| **Exit pages**       | Where most people leave             |

---

# 5. THE METRICS THAT MATTER

Not all data is equally important. This is the prioritized list.

## Tier 1 — Primary Metrics (Check Weekly)

| Metric                   | How to Find It                    | Target                |
| ------------------------ | --------------------------------- | --------------------- |
| Contact form submissions | `contact_form_submit` event count | 3–5/month (Month 1–3) |
| Form conversion rate     | submissions ÷ form starts         | > 40% of starts       |
| WhatsApp clicks          | `whatsapp_click` event count      | Track, no target yet  |
| Contact page visitors    | Page views → /contact             | —                     |

## Tier 2 — Flow Metrics (Check Monthly)

| Metric                                    | How to Find It                           | What Action to Take                          |
| ----------------------------------------- | ---------------------------------------- | -------------------------------------------- |
| Homepage bounce rate                      | Plausible → bounce rate on `/`           | If > 70%, review hero copy                   |
| Session duration on homepage              | Plausible → duration                     | If < 90s, content isn't engaging             |
| Scroll depth: does anyone reach #contact? | `scroll_depth` event → `contact` section | If < 40%, shorten page or improve flow       |
| Most clicked solution card                | `solution_card_click` → by solution      | Double down on this problem in content       |
| Most clicked product card                 | `product_card_click` → by product        | Prioritize this product's page and marketing |

## Tier 3 — Traffic Metrics (Check Monthly)

| Metric                   | What It Tells You                                  |
| ------------------------ | -------------------------------------------------- |
| Traffic source breakdown | Which channels to invest in                        |
| Mobile vs desktop split  | Layout priority                                    |
| Country breakdown        | Confirm Bangladesh is primary, check for surprises |
| Top entry pages          | What Google is sending traffic to                  |
| Top exit pages           | Where the site is losing people                    |

## Tier 4 — Diagnostic Metrics (Check When Something Seems Off)

| Metric                          | When to Look                                   |
| ------------------------------- | ---------------------------------------------- |
| `contact_form_error` by field   | If conversion suddenly drops                   |
| `contact_form_submission_error` | If email delivery stops                        |
| `404_reached` + `attempted_url` | After any route change or deployment           |
| Specific page bounce rates      | If a page isn't driving the expected next step |

---

# 6. REPORTING CADENCE

## Weekly Check (10 minutes — Hazera Islam Mim)

- [ ] How many contact form submissions this week?
- [ ] How many WhatsApp clicks?
- [ ] Any 404_reached events? What URLs?
- [ ] Any contact_form_submission_error events?
- [ ] Top traffic sources this week

## Monthly Review (30 minutes — Full team)

- [ ] Total consultations generated this month
- [ ] Form start → submission conversion rate
- [ ] Which solution/product generated the most clicks
- [ ] Homepage: bounce rate and session duration trends
- [ ] Traffic source quality (are LinkedIn visitors more likely to submit than Google visitors?)
- [ ] Lighthouse scores — any degradation?
- [ ] Any patterns in contact_form_error by field?
- [ ] Which pages have the highest exit rates?
- [ ] Action items based on data

## Quarterly Review (60 minutes — Shahajalal Mahmud leads)

- [ ] Review against product.md success metrics §6
- [ ] Are we hitting Month 1–3 targets? Month 4–6 targets?
- [ ] What content or page changes are supported by the data?
- [ ] Should any roadmap.md Phase 4 items be accelerated?
- [ ] Any dead pages (< 5 visitors/month) that should be removed?

---

# 7. DASHBOARD SETUP (PLAUSIBLE)

Set up this custom dashboard view in Plausible:

**Goals to configure:**

1. `contact_form_submit` → primary conversion goal
2. `whatsapp_click` → secondary conversion goal
3. `contact_form_start` → micro-conversion
4. `hero_cta_click` → engagement goal

**Filters to save:**

- "Mobile visitors only" — to monitor mobile conversion separately
- "Bangladesh visitors only" — primary market check
- "From LinkedIn" — referral quality check

---

# 8. PRIVACY RULES

## 8.1 What We Never Track

| Never Track                   | Reason                                            |
| ----------------------------- | ------------------------------------------------- |
| Individual user identity      | Privacy — we're not building profiles             |
| Form field content            | Never log what someone typed in the problem field |
| Precise location (city-level) | Country only — respect user privacy               |
| Cross-site tracking           | Plausible doesn't do this                         |
| IP addresses stored           | Plausible hashes and discards these               |

## 8.2 Data Retention

Plausible retains anonymized aggregate data indefinitely. No personal data is stored.

## 8.3 Privacy Policy Statement

The privacy policy must include:

> We use Plausible Analytics, a privacy-friendly analytics service.
> Plausible does not use cookies and does not collect or store any personally
> identifiable information. No data is shared with third parties.

---

# 9. WHAT THE DATA SHOULD LOOK LIKE (BENCHMARKS)

Expected patterns for a healthy site in Month 2–3:

| Metric                                           | Healthy                           | Needs Attention |
| ------------------------------------------------ | --------------------------------- | --------------- |
| Homepage bounce rate                             | 40–60%                            | > 70%           |
| Session duration                                 | 2–4 minutes                       | < 90 seconds    |
| Pages per session                                | 2–3                               | < 1.5           |
| Contact page from homepage                       | 20–35% of sessions reach /contact | < 10%           |
| Form start rate (reached contact → started form) | > 60%                             | < 40%           |
| Form completion rate (started → submitted)       | > 50%                             | < 30%           |
| Mobile traffic share                             | 60–75% (Bangladesh)               | Monitor         |

**[NOTE]** These are estimates. After 60 days of data, replace with actuals and update targets.

---

# 10. ANALYTICS IMPLEMENTATION CHECKLIST

Before launch and after any major change:

**PRE-LAUNCH**

- [ ] Plausible script added to index.html
- [ ] Plausible domain configured to appriyo.com
- [ ] trackEvent() utility function added to src/utils/analytics.js
- [ ] contact_form_submit event fires on successful form submission
- [ ] Test: submit form → verify event appears in Plausible dashboard
- [ ] contact_form_start event fires on first field focus
- [ ] whatsapp_click event fires on WhatsApp link click
- [ ] hero_cta_click fires on both hero buttons
- [ ] Plausible Goal configured: contact_form_submit
- [ ] Privacy policy updated to mention Plausible

**POST-LAUNCH (Week 1)**

- [ ] Verify real data is appearing in Plausible
- [ ] Verify all configured Goals are counting
- [ ] Check 404_reached — any unexpected URLs?
- [ ] First data check: any obvious issues?

**MONTH 1**

- [ ] Review all Tier 1 metrics
- [ ] Set Plausible email digest (weekly summary to team)
- [ ] Confirm form submissions are matching actual email arrivals

---

# 11. DECISIONS ANALYTICS WILL DRIVE

This table connects data to actions. Review it during monthly meetings.

| If this data shows...                     | Then do this                                         |
| ----------------------------------------- | ---------------------------------------------------- |
| Homepage bounce rate > 70%                | Test a different hero headline (A/B in Phase 4)      |
| < 10% of homepage visitors reach /contact | Add a mid-page CTA (after Why Appriyo section)       |
| Form start rate < 40%                     | Reduce friction — check if form is visible on mobile |
| Form completion < 30%                     | Reduce form fields or rewrite placeholder copy       |
| Amar Repair solution card clicks dominate | Prioritize Amar Repair product page and marketing    |
| Most traffic from mobile                  | Prioritize mobile UX improvements                    |
| Most traffic from LinkedIn                | Post more on LinkedIn — it's working                 |
| High 404 rate on a specific URL           | Check what's linking to it and fix the link          |
| Form submission errors spike              | Check EmailJS/Formspree config immediately           |

---

_Document version: 1.0_
_Owner: Hazera Islam Mim (Marketing & Social Media)_
_Implementation: Shahajalal Mahmud (Development & Architecture)_
_Aligned with: product.md v1.0 · user_flow.md v1.0 · roadmap.md v1.0_
