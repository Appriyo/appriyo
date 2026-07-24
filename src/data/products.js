// src/data/products.js — shape per docs/COMPONENT_INVENTORY.md
// "Product Pages" section. Two real products; status drives the Stamp
// text at render time so we never accidentally leave a stale claim on
// the page.
//
// Screenhots stay as labelled placeholders until Phase 5 swaps in the
// real assets (per Asset_Checklist.md).
//
// Status values:
//   "live"             → "Live product"            (renderer maps it)
//   "in-development"   → "In development"          (renderer maps it)
// The mapping lives in components/StampStatus.jsx so the words are
// defined in exactly one place.

export const products = [
  {
    slug: "amar-repair",
    name: "Amar Repair",
    tagline: "Repair Store Management System",
    status: "live",
    subtext:
      "A repair shop system built for the way repair shops actually run — not the way an enterprise POS assumes you do.",
    // PLACEHOLDER — replace before launch. Real screenshot will mount
    // at this path in Phase 5 per docs/Asset_Checklist.md.
    screenshot: "/img/amar-repair-dashboard.png",
    problem:
      "Repair shops track jobs on paper, customer names on WhatsApp, and payments in a notebook. A job gets lost between technicians, a customer calls asking for an update and you check three places to answer, and nobody can see what's actually overdue at a glance.",
    capabilities: [
      "Logs every device dropped off with photos, notes, and the customer's contact details.",
      "Moves each job through a clear status: Received → In progress → Ready → Delivered.",
      "Sends the customer a text the moment their repair is ready, so they stop calling to ask.",
      "Records deposits, balances, and final payments against the job, so nothing gets lost in cash.",
      "Shows the shop owner every open job at a glance, with what is overdue highlighted.",
    ],
    techStack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Twilio (SMS notifications)",
    ],
  },
  {
    slug: "amar-batch",
    name: "Amar Batch",
    tagline: "Teacher & Batch Management System",
    status: "in-development",
    subtext:
      "Built for how coaching centers in Bangladesh actually operate — batches, attendance, fees, and reminders without spreadsheets.",
    // PLACEHOLDER — replace before launch.
    screenshot: "/img/amar-batch-dashboard.png",
    problem:
      "Coaching centers keep student lists in notebooks, attendance in a separate register, and fee collection in someone's head. At the end of the month it takes hours to figure out who owes what, and fee reminders never go out on time because someone always has to remember to send them.",
    capabilities: [
      "Enrolls students into named batches by subject, time slot, and level.",
      "Marks daily attendance per batch and shows trends over the month.",
      "Sets fees per batch, records each payment, and surfaces outstanding dues at a glance.",
      "Sends fee reminders automatically so the coordinator never has to chase them.",
      "Produces a monthly summary of attendance and collections for each batch.",
    ],
    techStack: [
      "React",
      "Node.js",
      "PostgreSQL",
    ],
  },
];

// Look up a product by slug. Returns undefined if not found.
export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}
