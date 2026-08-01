// src/layout/Layout.jsx — wraps Nav + Outlet + Footer for every page.
//
// Nav is sticky (in flow), so no top spacer is needed.
//
// This component is mounted as a *layout route* in src/router/AppRouter.jsx
// via `<Route element={<Layout />}>`. Layout routes in react-router-dom v6+
// must render the matched child route via `<Outlet />`, not via the
// `children` prop (the `children` prop is only set when Layout is rendered
// inline like `<Layout><Home/></Layout>` — and we don't do that anywhere).
// The previous version of this file passed `children` through here, which
// silently rendered every page with an empty `<main>`; see the layout-route
// docs for the contract.
//
// A "skip to main content" link is rendered first to satisfy WCAG 2.4.1
// (Bypass Blocks) — keyboard users can press Tab once on a fresh page
// to jump over the nav and start reading the actual content. The link
// is visually hidden until focused (see `.skip-link` in globals.css).
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { useLanguage } from "../i18n/hooks";

export default function Layout() {
  const { t } = useLanguage("layout");
  return (
    <div className="min-h-screen bg-paper text-ink-soft font-body flex flex-col">
      <a href="#main-content" className="skip-link">
        {t("layout.skipToContent")}
      </a>
      <Nav />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
