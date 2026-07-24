// src/components/StampStatus.jsx
//
// Maps a product's `status` field to human-readable Stamp text and
// renders the Stamp primitive. Centralizing the mapping here means
// the words appear in exactly one place — adding a new status
// (e.g. "beta") is a one-line change.
//
//   "live"            → "Live product"
//   "in-development"  → "In development"
//
// Anything else throws, so a typo in src/data/products.js is caught
// at render time rather than silently rendering "Live product" on
// something that isn't live.
import Stamp from "./Stamp";

const STATUS_TEXT = {
  live: "Live product",
  "in-development": "In development",
};

export default function StampStatus({ status, className = "" }) {
  const text = STATUS_TEXT[status];
  if (!text) {
    throw new Error(
      `StampStatus: unknown status "${status}". ` +
        `Valid values: ${Object.keys(STATUS_TEXT).join(", ")}`
    );
  }
  return (
    <Stamp className={className} aria-label={`Status: ${text}`}>
      {text}
    </Stamp>
  );
}
