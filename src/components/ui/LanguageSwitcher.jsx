// src/components/ui/LanguageSwitcher.jsx
// A self-contained language switcher. Renders a button that toggles a
// dropdown of supported languages. Designed to be dropped into Nav,
// Footer, or any settings menu without changes — it owns its own
// positioning, focus management, and outside-click handling.
//
// Accessibility:
//   * Trigger is a real <button> with aria-haspopup="listbox".
//   * Menu uses role="listbox" with role="option" items.
//   * Esc closes the menu and returns focus to the trigger.
//   * Selected language is announced via aria-selected.
//
// Visual:
//   * Uses Tailwind utility classes consistent with the rest of the
//     app. The paper / ink-* palette is referenced from globals.css
//     in case you want to swap it for your design tokens.
//
// Notes:
//   * The component does NOT translate any UI text — it pulls labels
//     from the `navigation.languageSwitcher` namespace via useLanguage,
//     so the dropdown rows read "English" / "বাংলা" in the user's
//     preferred language.

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "../../i18n/hooks";

/**
 * @param {object}  props
 * @param {string}  [props.className]    — extra classes for the root button.
 * @param {"icon" | "full"} [props.variant="icon"] — "icon" shows a globe;
 *                                           "full" also shows the active language's native label.
 */
export default function LanguageSwitcher({ className = "", variant = "icon" }) {
  const { t, language, languages, setLanguage } = useLanguage("navigation");
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const listboxId = useId();

  const close = useCallback(() => setOpen(false), []);

  // Close on click outside + Esc to dismiss.
  useEffect(() => {
    if (!open) return undefined;

    function handlePointer(event) {
      if (!containerRef.current?.contains(event.target)) close();
    }
    function handleKey(event) {
      if (event.key === "Escape") {
        close();
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("touchstart", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("touchstart", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, close]);

  const active = languages.find((l) => l.code === language);

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={t("navigation.languageSwitcher.label")}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 rounded-md border border-ink-soft/20 bg-paper px-3 py-1.5 text-sm text-ink-soft transition hover:bg-ink-soft/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-soft/40"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        {variant === "full" && active ? (
          <span>{active.nativeLabel}</span>
        ) : null}
      </button>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label={t("navigation.languageSwitcher.label")}
          className="absolute right-0 z-50 mt-2 min-w-[10rem] overflow-hidden rounded-md border border-ink-soft/15 bg-paper py-1 shadow-lg"
        >
          {languages.map((lang) => {
            const selected = lang.code === language;
            return (
              <li key={lang.code} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  lang={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    close();
                    triggerRef.current?.focus();
                  }}
                  className={`flex w-full items-center justify-between gap-3 px-3 py-1.5 text-left text-sm transition ${
                    selected
                      ? "bg-ink-soft/10 font-medium text-ink"
                      : "text-ink-soft hover:bg-ink-soft/5"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {lang.flag ? (
                      <span aria-hidden="true">{lang.flag}</span>
                    ) : null}
                    <span>{lang.nativeLabel}</span>
                  </span>
                  <span className="text-xs text-ink-soft/60">
                    {lang.code.toUpperCase()}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
