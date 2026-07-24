// src/sections/Contact.jsx — CONTENT_STRATEGY.md §3.9
//
// UI only. The submit handler is a no-op in Phase 3 — Phase 5 will
// wire it to Formspree / Web3Forms / a real endpoint. The form
// keeps noValidate so the browser doesn't interfere with the
// placeholder submit behaviour before that wiring is done.
import { useState } from "react";
import { contact } from "../data/homepage";
import SectionHeader from "../components/SectionHeader";
import LedgerLabel from "../components/LedgerLabel";
import Button from "../components/Button";

const fields = [
  { name: "name",     label: "Name",           type: "text",  required: true,  multiline: false },
  { name: "business", label: "Business name",  type: "text",  required: false, multiline: false },
  { name: "email",    label: "Email",          type: "email", required: true,  multiline: false },
  { name: "problem",  label: "What's the problem?", type: "text", required: true, multiline: true  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // PLACEHOLDER: wire to Formspree / Web3Forms in Phase 5.
    // For now just flip the local "submitted" state so the user sees
    // a confirmation while the real submit handler is missing.
    setSubmitted(true);
  };

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
        <SectionHeader heading={contact.heading} subtext={contact.intro} />

        <form
          noValidate
          onSubmit={onSubmit}
          className="mt-12 flex flex-col gap-5"
        >
          {fields.map((f) => (
            <label key={f.name} className="flex flex-col gap-2">
              <span className="font-mono text-xs text-ink-muted tracking-[0.04em]">
                {f.label}
                {f.required ? " *" : ""}
              </span>
              {f.multiline ? (
                <textarea
                  name={f.name}
                  required={f.required}
                  rows={5}
                  className="font-body text-base text-ink bg-paper-card border border-line rounded-card px-4 py-3 min-h-[120px] focus-visible:outline-none focus-visible:border-ink focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                />
              ) : (
                <input
                  type={f.type}
                  name={f.name}
                  required={f.required}
                  className="font-body text-base text-ink bg-paper-card border border-line rounded-card px-4 py-3 h-[44px] focus-visible:outline-none focus-visible:border-ink focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                />
              )}
            </label>
          ))}

          <div className="pt-2">
            <Button type="submit" variant="primary">
              {submitted ? "Thanks — we'll be in touch." : "Send"}
            </Button>
          </div>
        </form>

        <div className="mt-12 border-t border-line pt-6 flex flex-col gap-2">
          <LedgerLabel>// or reach us directly</LedgerLabel>
          <a
            href={`mailto:${contact.email}`}
            className="font-mono text-[15px] text-ink hover:text-ink-soft"
          >
            {contact.email}
          </a>
          <span className="font-mono text-xs text-ink-muted tracking-[0.04em]">
            {contact.officeHours}
          </span>
        </div>
      </div>
    </section>
  );
}
