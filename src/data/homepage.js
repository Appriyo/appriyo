// src/data/homepage.js — verbatim from docs/Content_Strategy.md §3.
//
// One file = single source of truth for every section's copy. Do not
// paraphrase. Phase 5 will revisit the product statuses, the stat
// numbers, and the placeholder screenshot.

export const hero = {
  label: "// what we do",
  headline: "We build the system that replaces your notebook.",
  subtext:
    "Appriyo builds practical software for repair shops, coaching centers, and small businesses still running on notebooks and memory — built by a team you can actually call.",
  primaryCta: { label: "See our work", href: "/products" },
  secondaryCta: { label: "Talk to us", href: "/contact" },
};

export const problem = {
  label: "// 01 — the problem",
  heading:
    "Still tracking repairs, students, or orders in a notebook — and hoping nothing gets lost?",
};

export const services = {
  label: "// 02 — what we build",
  heading: "Software built around how your business actually runs",
  items: [
    {
      title: "Custom Software",
      body:
        "A system built specifically for how you work — not a generic template you have to bend your business around.",
    },
    {
      title: "Websites & Apps",
      body:
        "A website or app that actually gets you customers or makes your day-to-day easier — not just a digital business card.",
    },
    {
      title: "Automation",
      body:
        "Automatic reminders, follow-ups, and tracking, so nothing depends on someone remembering.",
    },
    {
      title: "AI Where It Helps",
      body:
        "We use AI only where it saves you real time — never added just to sound modern.",
    },
    {
      title: "Products You Can Try Today",
      body:
        "See Amar Repair and Amar Batch — real software already built, not a pitch.",
      cta: { label: "See products", href: "/products" },
    },
  ],
};

export const products = {
  label: "// 03 — proof, not promises",
  heading: "Two real products. Try them before you take our word for it.",
  items: [
    {
      name: "Amar Repair",
      tagline: "Repair Store Management System",
      body:
        "Tracks every repair job from drop-off to pickup, so nothing gets lost and no customer is left wondering where their device is.",
      cta: { label: "See Amar Repair", href: "/products/amar-repair" },
      // WebP placeholder until the real screenshot is provided.
      screenshot: "/img/screenshots/amar-repair-dashboard.webp",
      status: "live",
    },
    {
      name: "Amar Batch",
      tagline: "Teacher & Batch Management System",
      body:
        "Manages student batches, attendance, and payments in one place, built for how coaching centers in Bangladesh actually operate.",
      cta: { label: "See Amar Batch", href: "/products/amar-batch" },
      // WebP placeholder until the real screenshot is provided.
      screenshot: "/img/screenshots/amar-batch-dashboard.webp",
      status: "in-development",
    },
  ],
};

export const whyAppriyo = {
  label: "// 04 — why us",
  heading: "Small team. Direct access. No middlemen.",
  paragraph:
    "You talk directly to the person building your system — not a account manager relaying messages to a developer you'll never meet. We're a small team of four, and we intend to still be answering your calls after you've forgotten you ever used a notebook.",
  // Stats array is empty at launch per Content_Strategy.md §3.6 and
  // Asset_Checklist — only real numbers, no placeholders invented.
  stats: [],
  team: [
    {
      name: "Md Shahajalal Mahmud",
      role: "Founder & Technical Project Lead",
      photo: "/img/team_img/profile%20pic.webp",
    },
    {
      name: "Preota Saha",
      role: "Lead Frontend Engineer & UI/UX Lead",
      photo: "/img/team_img/preota%20profile.webp",
    },
    {
      name: "Md Munna Sardar",
      role: "Lead — Testing & Frontend Development",
      photo: "/img/team_img/munna%20profile.webp",
    },
    {
      name: "Hazera Islam Mim",
      role: "Social Media & Creative Lead",
      photo: "/img/team_img/mim%20profile.webp",
    },
  ],
};

export const process = {
  label: "// 05 — how we work",
  heading: "How a project actually goes",
  steps: [
    {
      n: "01",
      title: "We understand your business first",
      body: "before any code, a real conversation about how you currently work.",
    },
    {
      n: "02",
      title: "We build the smallest version that solves the real problem",
      body: "not every feature you can imagine, the one that matters first.",
    },
    {
      n: "03",
      title: "You use it, we improve it",
      body: "real feedback from real use, not guesswork.",
    },
    {
      n: "04",
      title: "We stay reachable after launch",
      body: "this is a long-term relationship, not a handoff.",
    },
  ],
};

export const contact = {
  label: "// 07 — let's talk",
  heading: "Tell us what you're dealing with",
  intro:
    "One line, no sales pitch: describe the problem, and we'll tell you honestly whether we're the right fit — even if the answer is no.",
  email: "contact@appriyo.com",
  officeHours: "Sunday – Thursday, 9:00 AM – 6:00 PM (GMT+6)",
};
