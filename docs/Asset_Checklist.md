# Appriyo Website — Asset Checklist

> The design system runs on real evidence (`DESIGN_SYSTEM.md` §2.2, §6.1).
> That means the site's honesty is gated on actually having these assets —
> not just on writing the right code. Collect these in parallel with
> development, ideally starting before Phase 3 so Phase 5 isn't a bottleneck.

---

## Required Before Phase 3 (placeholders acceptable until then)

- [ ] **Appriyo logo** — SVG, works on light background (the site has no dark
      mode), simple enough to read at 24px in the nav
- [ ] **Favicon** — derived from the logo

## Required Before Phase 5 (hard gate — cannot launch without these)

### Product screenshots

- [ ] **Amar Repair** — a real dashboard screenshot, not a mockup. Clean
      test data (no real customer names/phone numbers visible — use placeholder
      demo data in the product itself if needed, but the _interface_ must be real)
- [ ] **Amar Batch** — same requirement

### Team photos

- [ ] Shahajalal Mahmud
- [ ] Preota Saha
- [ ] Md Munna Sardar
- [ ] Hazera Islam Mim

If real photos aren't available in time, use consistent, simple initials
avatars (same style/color treatment for all 4, per `DESIGN_SYSTEM.md` — no
stock headshots, no AI-generated faces; either real photos or honest
initials, nothing in between that could look like a fabricated person)

### Verifiable stats (Why Appriyo section)

Only include numbers you can currently stand behind if someone asked "how
do you know that." Candidates, fill in only what's true right now:

- [ ] Number of live products: \_\_\_
- [ ] Founding date / months building: \_\_\_
- [ ] Number of real client projects completed: \_\_\_ (omit this stat entirely
      if the answer is currently 0 — don't round up)

### Product status (drives the Stamp text — see `COMPONENT_INVENTORY.md`)

- [ ] Amar Repair status: `live` or `in-development` — confirm which is
      actually true before Phase 5, don't default to "live"
- [ ] Amar Batch status: same

---

## Nice to Have, Not a Launch Blocker

- [ ] First real client testimonial (build the Testimonials section only once this exists — see roadmap Phase 5 and `CONTENT_STRATEGY.md` §3.8)
- [ ] First real case study (for a future `/work` page — see `CONTENT_STRATEGY.md` §2)
- [ ] OG image for social link previews (can reuse the hero screenshot at launch, refine later)

---

## Explicitly Do Not Fabricate

Per `DESIGN_SYSTEM.md` §2.5 and `CONTENT_STRATEGY.md` §6, none of the
following should appear on the launched site under any circumstance, even
temporarily "until we get real ones":

- Fake or composite testimonials
- Invented percentages or metrics
- Stock photos presented as if they were the team or a real client
- A "Live product" stamp on something not actually in use anywhere

If a section has nothing real to show yet, the correct move is to leave the
section out of the launch build entirely (per roadmap Phase 3/5), not to
fill it with something plausible-looking.
