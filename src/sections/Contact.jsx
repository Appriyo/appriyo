// src/sections/Contact.jsx — CONTENT_STRATEGY.md §3.9 + TECH_SPEC.md §6
//
// Form submission is wired to Web3Forms (free, no signup limits as
// strict per TECH_SPEC.md §6). Web3Forms POSTs the form fields straight
// to their endpoint and forwards them to the email address associated
// with the access key below — no backend code needed.
//
// The access key below is a placeholder for the user to swap in before
// launch. The endpoint URL is exposed via VITE_WEB3FORMS_ACCESS_KEY so
// the real key isn't checked into source control if a build env is
// later preferred. The fallback "or reach us directly" block below
// keeps the plain-text email visible regardless of form status.
import { useState } from "react";
import { contact } from "../data/homepage";
import SectionHeader from "../components/SectionHeader";
import LedgerLabel from "../components/LedgerLabel";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "WEB3FORMS_ACCESS_KEY";

const fields = [
  { name: "name",     label: "Name",                 type: "text",  required: true,  multiline: false, autocomplete: "name" },
  { name: "business", label: "Business name",        type: "text",  required: false, multiline: false, autocomplete: "organization" },
  { name: "email",    label: "Email",                type: "email", required: true,  multiline: false, autocomplete: "email" },
  { name: "problem",  label: "What are you trying to solve?", type: "text", required: true, multiline: true  },
];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    fd.append("access_key", WEB3FORMS_ACCESS_KEY);
    fd.append("subject", "New inquiry from appriyo.com");
    fd.append("from_name", "Appriyo Website");
    // Honeypot field — Web3Forms rejects bots that fill it.
    fd.append("botcheck", "");

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("sent");
        e.currentTarget.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again or email us directly.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please try again or email us directly.");
    }
  };

  return (
    <section className="bg-paper" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
        <Reveal>
          <SectionHeader heading={contact.heading} subtext={contact.intro} />
        </Reveal>

        <Reveal>
          <form
            onSubmit={onSubmit}
            noValidate
            aria-label="Contact form"
            className="mt-12 flex flex-col gap-5"
          >
            {fields.map((f) => {
              const inputId = `contact-${f.name}`;
              return (
                <div key={f.name} className="flex flex-col gap-2">
                  <label
                    htmlFor={inputId}
                    className="font-mono text-xs text-ink-muted tracking-[0.04em]"
                  >
                    {f.label}
                    {f.required ? " *" : ""}
                  </label>
                  {f.multiline ? (
                    <textarea
                      id={inputId}
                      name={f.name}
                      required={f.required}
                      rows={5}
                      aria-required={f.required || undefined}
                      disabled={status === "sending"}
                      className="font-body text-base text-ink bg-paper-card border border-line rounded-card px-4 py-3 min-h-[120px] focus-visible:outline-none focus-visible:border-ink focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:opacity-60"
                    />
                  ) : (
                    <input
                      id={inputId}
                      type={f.type}
                      name={f.name}
                      required={f.required}
                      autoComplete={f.autocomplete}
                      aria-required={f.required || undefined}
                      disabled={status === "sending"}
                      className="font-body text-base text-ink bg-paper-card border border-line rounded-card px-4 py-3 h-[44px] focus-visible:outline-none focus-visible:border-ink focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:opacity-60"
                    />
                  )}
                </div>
              );
            })}

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button type="submit" variant="primary" disabled={status === "sending"}>
                {status === "sending"
                  ? "Sending…"
                  : status === "sent"
                    ? "Thanks — we'll be in touch."
                    : "Send"}
              </Button>
              {status === "error" && (
                <span
                  role="alert"
                  className="font-mono text-xs text-error tracking-[0.04em]"
                >
                  {errorMsg}
                </span>
              )}
            </div>
          </form>
        </Reveal>

        <Reveal>
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
        </Reveal>
      </div>
    </section>
  );
}