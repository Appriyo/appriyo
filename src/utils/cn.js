// Lightweight class merge — no extra deps needed at this scale
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}