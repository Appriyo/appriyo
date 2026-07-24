// src/App.jsx — Foundation phase placeholder.
// Renders a minimal page proving the design system foundation is wired up:
//   - bg-paper (paper token) page background
//   - h1 in Bitter (font-display) at weight 900, display-xl size
//   - body paragraph in Inter (font-body)
//
// Components, sections, and pages are NOT built yet — this is foundation only.
export default function App() {
  return (
    <main className="min-h-screen bg-paper text-ink font-body">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
        <h1 className="font-display text-display-xl font-black text-ink">
          Appriyo
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          The ledger system for clear, dependable business operations.
        </p>
      </div>
    </main>
  );
}
