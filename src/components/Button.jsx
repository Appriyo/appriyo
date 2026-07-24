// src/components/Button.jsx — DESIGN.md §7.1
//
// Three variants. No fourth — resist adding one.
//   primary   — solid ink background, paper text, drops in shadow on hover
//   secondary — outlined ghost (1.5px line-strong border), flips to ink on hover
//   text      — underlined link style; underline solidifies on hover
//
// All variants have a visible keyboard focus ring (ink, 2px, paper offset).
// Spec is silent on focus state; this is a baseline a11y affordance.
import { forwardRef } from "react";

const base =
  "inline-flex items-center justify-center font-body font-semibold text-[15px] " +
  "rounded-card transition-[transform,box-shadow] duration-150 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

const variants = {
  primary:
    "bg-ink text-paper border border-ink px-6 py-[13px] shadow-card " +
    "hover:-translate-y-px hover:shadow-card-hover",
  secondary:
    "bg-transparent text-ink border-[1.5px] border-line-strong px-[22px] py-[11.5px] " +
    "hover:border-ink hover:bg-paper-dim",
  text:
    "bg-transparent text-ink underline decoration-line-strong " +
    "underline-offset-4 px-0 py-0 rounded-none shadow-none " +
    "hover:decoration-ink",
};

const Button = forwardRef(function Button(
  { variant = "primary", href, onClick, type = "button", className = "", children, ...rest },
  ref
) {
  const cls = `${base} ${variants[variant] ?? variants.primary} ${className}`.trim();

  if (href) {
    return (
      <a ref={ref} href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button ref={ref} type={type} onClick={onClick} className={cls} {...rest}>
      {children}
    </button>
  );
});

export default Button;
