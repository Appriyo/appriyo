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
//   * Each option sets `lang` so screen readers pronounce correctly.
//
// Variants:
//   * "icon"   — globe icon only. Drop into dense UIs (compact cards,
//                small headers, settings menus).
//   * "full"   — globe + active language's native label. Use in
//                footers, settings pages, anywhere with horizontal space.
//   * "navbar" — slim button sized to match the navbar row. No border,
//                no shadow, ink-on-paper, same focus ring as Button.jsx.
//                This is what Nav.jsx uses.
//   * "mobile" — full-width pill that fits the mobile menu's vertical
//                rhythm. Same content as "full" but stretches edge to
//                edge.
//
// Notes:
//   * The component does NOT translate any UI text — it pulls labels
//     from the `navigation.languageSwitcher` namespace via useLanguage,
//     so the dropdown rows read "English" / "বাংলা" in the user's
//     preferred language.
//   * Changing the language calls `setLanguage` from useLanguage, which
//     writes to localStorage synchronously AND calls i18n.changeLanguage.
//     No page reload — React re-renders subscribers immediately.

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "../../i18n/hooks";

/**
 * @param {object}  props
 * @param {string}  [props.className]       — extra classes for the outer wrapper.
 * @param {"icon"|"full"|"navbar"|"mobile"} [props.variant="icon"]
 * @param {() => void} [props.onSelect]     — optional callback fired after the user picks a language
 *                                            (e.g. mobile menu uses it to close the panel).
 */
export default function LanguageSwitcher({
  className = "",
  variant = "icon",
  onSelect,
}) {
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

  // Visual variants.
  //
  // navbar variant deliberately has NO border or background fill — the
  // navbar row is already a single ink-on-paper row, so a button with a
  // border would feel like a separate chip. Hovering paints a soft
  // paper-dim wash instead, matching how the existing nav links behave.
  const triggerClass =
    variant === "navbar"
      ? "inline-flex items-center gap-2 rounded-card px-2 py-1.5 " +
        "text-[15px] text-ink hover:bg-paper-dim " +
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink " +
        "focus-visible:ring-offset-2 focus-visible:ring-offset-paper " +
        "transition-colors"
      : variant === "mobile"
      ? "w-full inline-flex items-center justify-between gap-2 " +
        "rounded-card border border-line bg-paper px-4 py-3 " +
        "text-[15px] text-ink hover:bg-paper-dim " +
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink " +
        "focus-visible:ring-offset-2 focus-visible:ring-offset-paper " +
        "transition-colors"
      : variant === "full"
      ? "inline-flex items-center gap-2 rounded-card border border-line bg-paper " +
        "px-3 py-1.5 text-[15px] text-ink hover:bg-paper-dim " +
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink " +
        "focus-visible:ring-offset-2 focus-visible:ring-offset-paper " +
        "transition-colors"
      : // "icon"
        "inline-flex items-center justify-center gap-2 rounded-card " +
        "border border-line bg-paper w-9 h-9 text-ink hover:bg-paper-dim " +
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink " +
        "focus-visible:ring-offset-2 focus-visible:ring-offset-paper " +
        "transition-colors";

  // Dropdown panel — same look for every variant so the menu always feels
  // like part of the same component.
  const listClass =
    "absolute right-0 z-50 mt-2 min-w-[10rem] overflow-hidden " +
    "rounded-card border border-line bg-paper py-1 shadow-card";

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
        className={triggerClass}
      >
        <Globe
          className={variant === "navbar" ? "h-[18px] w-[18px]" : "h-4 w-4"}
          aria-hidden="true"
        />
        {(variant === "full" || variant === "navbar" || variant === "mobile") && active ? (
          <span lang={active.code}>{active.nativeLabel}</span>
        ) : null}
        {variant === "mobile" && active ? (
          <span className="ml-auto text-xs text-ink-soft">
            {active.code.toUpperCase()}
          </span>
        ) : null}
      </button>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label={t("navigation.languageSwitcher.label")}
          className={listClass}
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
                    if (onSelect) onSelect(lang.code);
                    close();
                    // Return focus to the trigger so keyboard users keep
                    // their place. Skip in mobile mode — the trigger
                    // may be unmounted by the parent closing the menu.
                    if (variant !== "mobile") {
                      triggerRef.current?.focus();
                    }
                  }}
                  className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-[15px] transition-colors ${
                    selected
                      ? "bg-paper-dim font-medium text-ink"
                      : "text-ink-soft hover:bg-paper-dim"
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
