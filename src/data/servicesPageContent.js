// src/data/servicesPageContent.js
// Aligned with: services-guide.md · pages.md v1.0 · content.md v1.0

export const SERVICES_PAGE_CONTENT = {
  header: {
    eyebrow: "Our Services",
    title: "Four Services. Focused on One Goal.",
    description:
      "We don't offer everything. We offer the four things that actually help small businesses stop wasting time on manual processes.",
  },

  services: [
    {
      id: "automation",
      title: "Business Process Automation",
      oneLiner: "Replace repetitive manual tasks with systems that run themselves.",
      whatItIs:
        "If your team does the same task every day — sending reminders, recording entries, following up on orders — that's a candidate for automation. We identify the tasks that are stealing your team's time and replace them with workflows that run automatically.",
      examples: [
        "Customer follow-up reminders (SMS / WhatsApp)",
        "Job and order status updates",
        "Payment tracking and overdue alerts",
        "Daily report generation",
        "Attendance and scheduling notifications",
      ],
      outcomes: [
        "Fewer manual errors",
        "Hours returned to your team every week",
        "Consistent, reliable processes — not dependent on memory",
      ],
      cta: {
        label: "Talk to us about automating your workflow",
        href: "/contact",
      },
    },
    {
      id: "custom-software",
      title: "Custom Business Software",
      oneLiner:
        "Software that fits how your business actually works — not the other way around.",
      whatItIs:
        "Generic software forces you to adapt your process to its design. Custom software is built for exactly how you operate. We build tools that replace paper systems, spreadsheets, or disconnected apps — with a single, simple interface your team will actually use.",
      examples: [
        "Repair shop management systems",
        "Student and batch management for educators",
        "Inventory and order tracking",
        "Internal operational tools",
      ],
      outcomes: [
        "A system built for your specific workflow",
        "Simple enough for non-technical staff",
        "Scalable as your business grows",
      ],
      cta: {
        label: "Describe your software need",
        href: "/contact",
      },
    },
    {
      id: "ai-integration",
      title: "AI Integration & Smart Systems",
      oneLiner: "Add intelligence to your operations — only where it genuinely helps.",
      whatItIs:
        "AI isn't magic, and we don't treat it that way. We identify specific points in your workflow where AI can reduce manual decision-making, speed up responses, or surface useful information. Then we integrate it — practically, not experimentally.",
      examples: [
        "AI-powered customer response assistants",
        "Smart scheduling and routing",
        "Automated report analysis",
        "Intelligent notification systems",
      ],
      outcomes: [
        "Faster response times without hiring more staff",
        "Systems that get better as they process more data",
        "AI that's actually useful — not just impressive",
      ],
      cta: {
        label: "Explore AI for your business",
        href: "/contact",
      },
    },
    {
      id: "consulting",
      title: "Digital Transformation Consulting",
      oneLiner: "Understand what's wrong. Build a plan. Execute it together.",
      whatItIs:
        "Before building anything, you need to know what to build. We spend time inside your operation — mapping workflows, identifying bottlenecks, and understanding what technology can realistically fix. Then we help you execute the plan, step by step.",
      examples: [
        "Operations mapping and workflow audit",
        "Identifying inefficiencies and manual bottlenecks",
        "Technology recommendation (what to build vs. buy)",
        "Phased implementation planning",
        "Ongoing partnership — not a one-time report",
      ],
      outcomes: [
        "A clear picture of what's actually slowing you down",
        "A realistic plan to fix it",
        "A team to execute it with you",
      ],
      cta: {
        label: "Start with a consultation",
        href: "/contact",
      },
    },
  ],

  notIncluded: {
    heading: "To Be Clear — Here's What We Don't Take On",
    body: "Appriyo is focused. That means we turn down work that doesn't fit. We don't do: generic website-only projects with no operational value, one-off freelance tasks with no long-term purpose, projects where the business problem isn't clear, or design-only work with no functionality. This isn't a limitation — it's how we stay good at what we do.",
  },

  finalCta: {
    heading: "Not Sure Which Service You Need?",
    body: "That's exactly what the first conversation is for. Tell us what's slowing your business down — we'll figure out the right approach together.",
    button: "Get a Free Consultation",
    href: "/contact",
  },
};