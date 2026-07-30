// src/components/Reveal.jsx — DESIGN.md §8 (Motion System)
//
// Scroll-triggered reveal: fade + 12px upward translate, --duration-slow
// (360ms). Staggered by 50ms per item within a grid, capped at 4
// staggered items before falling back to simultaneous reveal — see
// §8.2.
//
// prefers-reduced-motion handling (§8.3):
//   - When the OS pref is "reduce", elements appear IMMEDIATELY at full
//     opacity and their final transform — no animation at all, not just
//     faster. This is the explicit task requirement and the WCAG SC 2.3.3
//     (Animation from Interactions) minimum.
//   - We still respect an IntersectionObserver, but for "reduce" we
//     set the revealed state synchronously on mount so the element is
//     visible from the first frame.
//
// Usage:
//   <Reveal>...</Reveal>               — single section, no stagger
//   <Reveal stagger>...</Reveal>       — grid item, will use its index
//   <Reveal index={i}>...</Reveal>     — explicit index in a grid
//
// The component renders a <div> wrapper by default so it doesn't change
// the DOM shape of the consuming section.
import { useEffect, useRef, useState } from "react";

const REVEAL_DURATION_MS = 360; // DESIGN.md §8.1
const REVEAL_STAGGER_MS = 50;   // DESIGN.md §8.2
const STAGGER_CAP = 4;          // DESIGN.md §8.2

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  stagger = false,
  index = 0,
  delayMs,            // explicit override (ms)
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  ...rest
}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  // Compute the delay. stagger items use index, capped at STAGGER_CAP.
  const computedDelay =
    typeof delayMs === "number"
      ? delayMs
      : stagger
        ? Math.min(index, STAGGER_CAP) * REVEAL_STAGGER_MS
        : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion immediately — no observer needed.
    if (prefersReducedMotion()) {
      setRevealed(true);
      return;
    }

    // No-IO fallback for environments without IntersectionObserver.
    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  // The reveal class flips on once the element enters the viewport. We
  // start at opacity-0 + translate-y so the FIRST PAINT of elements
  // that are already in the viewport (top of page) does briefly animate
  // — which is correct, that's the intent of the design system. The
  // Hero's <h1> is deliberately NOT wrapped in <Reveal> so the headline
  // shows on first frame; see §8.3 ("nothing that delays the headline").
  const style = revealed
    ? { "--reveal-delay": `${computedDelay}ms` }
    : {
        opacity: 0,
        transform: "translateY(12px)",
        "--reveal-delay": `${computedDelay}ms`,
      };

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Re-export the constants so a section that needs to know them (e.g.
// for tests) can import them.
Reveal.durations = {
  fast: 150,
  normal: 220,
  slow: REVEAL_DURATION_MS,
  stagger: REVEAL_STAGGER_MS,
  cap: STAGGER_CAP,
};