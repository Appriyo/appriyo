// src/components/StampStatus.jsx
//
// Maps a product's `status` field to human-readable Stamp text and
// renders the Stamp primitive. Centralizing the mapping here means
// the words appear in exactly one place — adding a new status
// (e.g. "beta") is a one-line change in src/i18n/common.json.
//
//   "live"            → "Live product"
//   "in-development"  → "In development"
//
// Anything else throws, so a typo in src/data/products.js is caught
// at render time rather than silently rendering "Live product" on
// something that isn't live.
import Stamp from "./Stamp";
import { useLanguage } from "../i18n/hooks";

// These keys are looked up against src/locales/<lng>/common/common.json.
// Defined here so adding a status is a one-line change in two places
// (this list + the JSON value).
const STATUS_KEYS = {
  live: "common.productStatus.live",
  "in-development": "common.productStatus.inDevelopment",
};

export default function StampStatus({ status, className = "" }) {
  const { t } = useLanguage("common");
  const key = STATUS_KEYS[status];
  if (!key) {
    throw new Error(
      `StampStatus: unknown status "${status}". ` +
        `Valid values: ${Object.keys(STATUS_KEYS).join(", ")}`
    );
  }
  const text = t(key);
  return (
    <Stamp className={className} aria-label={`${t("common.statusLabel")}: ${text}`}>
      {text}
    </Stamp>
  );
}
