// src/layout/Layout.jsx — wraps Nav + children + Footer for every page.
// Nav is sticky (in flow), so no top spacer is needed.
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-paper text-ink-soft font-body flex flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
