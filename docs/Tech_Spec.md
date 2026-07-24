# Appriyo Website — Technical Specification

### For puku-cli development

> Purpose: remove ambiguity. An AI coding tool working phase-by-phase across
> multiple sessions needs fixed conventions it can't drift from — this doc
> is that fixed reference. When in doubt, puku-cli should follow this file
> over improvising.

---

## 1. Stack

| Layer      | Choice                                                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Framework  | React 18                                                                                                                       |
| Build tool | Vite                                                                                                                           |
| Styling    | Tailwind CSS (see §3 on DaisyUI)                                                                                               |
| Routing    | React Router (only once Phase 4 needs real product pages — homepage-only phases don't need it yet)                             |
| Language   | JavaScript (ES6+) — no TypeScript, to keep this buildable/maintainable by all 4 team members regardless of prior TS experience |
| Hosting    | Vercel or Netlify free tier (see §7)                                                                                           |
| Forms      | See §6 — no paid backend                                                                                                       |

---

## 2. Setup Commands

```bash
npm create vite@latest appriyo-website -- --template react
cd appriyo-website
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Dev server: `npm run dev` → `http://localhost:5173`
Production build: `npm run build && npm run preview`

---

## 3. Decision: Drop DaisyUI for user-facing components

The original README listed DaisyUI as part of the stack. **Recommendation:
don't use DaisyUI's component classes** (`btn`, `card`, `input`, etc.) for
anything the visitor sees. DaisyUI ships its own default look (rounded,
generic) that actively fights the receipt-card / stamp / ledger-rule
identity in `DESIGN_SYSTEM.md` — every DaisyUI component would need to be
overridden anyway, which is more work than writing plain Tailwind utility
classes or small custom components from the primitives in
`COMPONENT_INVENTORY.md`.

Keep Tailwind CSS itself — the token system in `DESIGN_SYSTEM.md` maps onto
`tailwind.config.js` cleanly. If DaisyUI is still wanted for some internal
non-visible tooling later, that's a separate call — just don't use it in
`src/components` or `src/sections`.

---

## 4. Tailwind Config — Design Tokens

`tailwind.config.js` should extend the theme with every token from
`DESIGN_SYSTEM.md` §3–5. This is the single source of truth — components
should reference `bg-paper`, `text-ink`, `font-display`, etc., never raw hex
or px values.

```js
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F5F0",
        "paper-dim": "#EFEBE1",
        "paper-card": "#FFFFFF",
        line: "#DAD3C2",
        "line-strong": "#B8AF98",
        ink: "#1B2A3A",
        "ink-soft": "#4C5C6E",
        "ink-muted": "#7C8896",
        stamp: "#A6392B",
        "stamp-soft": "#A6392B14",
        ledger: "#3F6B4F",
        "ledger-soft": "#3F6B4F14",
        brass: "#A9812E",
        warning: "#B5651D",
        error: "#A6392B",
      },
      fontFamily: {
        display: ["Bitter", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      fontSize: {
        "display-xl": "clamp(40px, 6vw, 68px)",
        "display-lg": "clamp(32px, 4vw, 48px)",
      },
      spacing: {
        // extend only if the default Tailwind scale doesn't already cover
        // the --space-1 through --space-10 tokens at their values (it does
        // for most; confirm before adding duplicates)
      },
      boxShadow: {
        card: "0 1px 2px rgba(27,42,58,0.04), 0 4px 12px rgba(27,42,58,0.06)",
        "card-hover":
          "0 2px 4px rgba(27,42,58,0.06), 0 12px 28px rgba(27,42,58,0.09)",
        stamp: "0 1px 1px rgba(166,57,43,0.19)",
      },
      borderRadius: {
        card: "4px",
        "card-lg": "6px",
      },
    },
  },
  plugins: [],
};
```

---

## 5. Folder Structure

```
src/
├── components/          # Reusable primitives (Phase 1) — Button, Stamp,
│                         # ReceiptCard, LedgerCard, LedgerLabel, SectionHeader
├── sections/             # One file per homepage section (Phase 3) —
│                         # Hero.jsx, Problem.jsx, Services.jsx, etc.
│                         # Sections COMPOSE components; they don't define
│                         # new visual primitives inline.
├── pages/                # Route-level pages (Phase 4+) — Home.jsx,
│                         # ProductAmarRepair.jsx, ProductAmarBatch.jsx
├── data/                 # Copy and content as plain JS/JSON, separate
│                         # from components — see §5.1
├── layout/               # Nav.jsx, Footer.jsx, Layout.jsx (Phase 2)
├── styles/                # index.css (font imports, base reset)
├── assets/                # Images — see ASSET_CHECKLIST.md for what
│                         # belongs here and naming convention (§5.2)
└── App.jsx
```

### 5.1 Content Lives in `src/data`, Not Hardcoded in Components

Every section's copy should be imported from a data file, not typed
directly into JSX. This matters specifically because `CONTENT_STRATEGY.md`
is the approved source of truth for wording — keeping content in one place
makes it possible to update copy without touching component logic, and
makes it obvious at a glance if someone has drifted from the approved copy.

```js
// src/data/homepage.js
export const hero = {
  label: "// what we do",
  headline: "We build the system that replaces your notebook.",
  subtext:
    "Appriyo builds practical software for repair shops, coaching centers, and small businesses still running on notebooks and memory — built by a team you can actually call.",
  primaryCta: { label: "See our work", href: "#products" },
  secondaryCta: { label: "Talk to us", href: "#contact" },
};
```

### 5.2 Asset Naming Convention

```
src/assets/
├── screenshots/
│   ├── amar-repair-dashboard.webp
│   └── amar-batch-dashboard.webp
├── team/
│   ├── shahajalal-mahmud.webp
│   ├── preota-saha.webp
│   ├── munna-sardar.webp
│   └── hazera-islam-mim.webp
└── logo/
    ├── appriyo-logo.svg
    └── favicon.ico
```

lowercase-kebab-case, always. No `IMG_2024.jpg`-style filenames in the repo.

---

## 6. Contact Form Without a Paid Backend

Since there's no budget yet, use a free form-handling service rather than
building a backend:

- **Formspree** (free tier: 50 submissions/month) or **Web3Forms** (free,
  no signup limits as strict) — both work by POSTing the form directly from
  the frontend to their endpoint, no server code needed
- Fallback: a plain `mailto:contact@appriyo.com` link always visible near
  the form, so the form isn't the _only_ way to reach you (per
  `CONTENT_STRATEGY.md` §3.9 — non-technical visitors shouldn't feel forced
  through a form)

Pick one service in Phase 5, not earlier — the form UI can be built in
Phase 3 without a working submit action yet.

---

## 7. Deployment

- **Recommended:** Vercel or Netlify free tier — both auto-deploy from a
  GitHub push, both handle a custom domain and free HTTPS certificate
- Connect `appriyo.com` DNS (A/CNAME records per the host's instructions)
  once Phase 8 is reached — don't point the live domain at a work-in-progress
  build before then; use the auto-generated preview URL for internal review
  during earlier phases

---

## 8. Coding Conventions

- Functional components only, no class components
- One component per file, file name matches component name (`Stamp.jsx` exports `Stamp`)
- Props destructured in the function signature, not accessed via `props.x`
- No inline styles — everything through Tailwind classes or the token-based
  config in §4; if something needs a value not in the token system, add it
  to `tailwind.config.js` rather than writing a one-off inline style
- Comment placeholders exactly as `{/* PLACEHOLDER: replace before launch — [what] */}` so they're grep-able (`grep -r "PLACEHOLDER" src/`) before Phase 8

---

## 9. What NOT to Build Yet

Don't build these until the roadmap explicitly calls for them, even if they
seem quick to add:

- A CMS or admin panel (no need — content is a handful of static pages)
- User accounts / login (not relevant to a marketing site)
- A blog (README lists it under "Planned Improvements" — future, not launch)
- Multi-language support (English-only for launch; revisit later)
