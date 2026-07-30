// src/layout/Layout.jsx — wraps Nav + children + Footer for every page.
//
// Nav is sticky (in flow), so no top spacer is needed.
//
// A "skip to main content" link is rendered first to satisfy WCAG 2.4.1
// (Bypass Blocks) — keyboard users can press Tab once on a fresh page
// to jump over the nav and start reading the actual content. The link
// is visually hidden until focused (see `.skip-link` in globals.css).
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-paper text-ink-soft font-body flex flex-col">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Nav />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}