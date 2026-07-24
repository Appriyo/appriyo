// src/pages/ComponentsShowcase.jsx
//
// ════════════════════════════════════════════════════════════════════
// DEV-ONLY — DELETE BEFORE PHASE 8 LAUNCH
// ════════════════════════════════════════════════════════════════════
// This is the /dev/components visual review page for Phase 1 primitives.
// Per docs/COMPONENT_INVENTORY.md "Dev-Only Scaffold (deleted before
// launch)" this file, the route entry in src/router/AppRouter.jsx, and
// any reference to it must be removed before the public launch. It must
// never ship to production.
//
// One instance of every primitive is rendered below with sample content
// so the design can be reviewed visually without rebuilding pages.
// ════════════════════════════════════════════════════════════════════
import Button from "../components/Button";
import LedgerLabel from "../components/LedgerLabel";
import Stamp from "../components/Stamp";
import ReceiptCard from "../components/ReceiptCard";
import LedgerCard from "../components/LedgerCard";
import SectionHeader from "../components/SectionHeader";

export default function ComponentsShowcase() {
  return (
    <main className="min-h-screen bg-paper text-ink font-body px-6 py-16">
      <div className="mx-auto max-w-5xl flex flex-col gap-16">
        <header>
          <LedgerLabel className="block">// dev-only — phase 1 primitive review</LedgerLabel>
          <h1 className="font-display text-display-lg font-black text-ink mt-2">
            Components
          </h1>
          <p className="text-ink-soft mt-3 max-w-2xl">
            One instance of every primitive. Delete this route before launch.
          </p>
        </header>

        {/* Button — DESIGN.md §7.1 */}
        <section>
          <LedgerLabel>// button — §7.1</LedgerLabel>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Button variant="primary" href="#primary">See our work</Button>
            <Button variant="secondary" href="#secondary">Talk to us</Button>
            <Button variant="text" href="#text">Read the ledger</Button>
            <Button variant="primary" onClick={() => window.alert("primary clicked")}>
              Clickable primary
            </Button>
          </div>
        </section>

        {/* LedgerLabel — DESIGN.md §4.3 */}
        <section>
          <LedgerLabel>// ledgerlabel — §4.3</LedgerLabel>
          <div className="mt-4">
            <LedgerLabel>// 02 — Services</LedgerLabel>
          </div>
        </section>

        {/* Stamp — DESIGN.md §6.1 */}
        <section>
          <LedgerLabel>// stamp — §6.1</LedgerLabel>
          <div className="mt-4 flex items-center gap-3">
            <span className="font-display text-3xl font-black text-ink">2</span>
            <Stamp>Live product</Stamp>
          </div>
        </section>

        {/* ReceiptCard — DESIGN.md §6.2 */}
        <section>
          <LedgerLabel>// receiptcard — §6.2</LedgerLabel>
          <div className="mt-4">
            <ReceiptCard>
              <p className="font-display text-xl text-ink">A real client result.</p>
              <p className="text-ink-soft mt-2">
                This card is for screenshots, testimonials, and other evidence —
                the perforated top edge is the visual signature that means
                "this is checkable."
              </p>
            </ReceiptCard>
          </div>
        </section>

        {/* LedgerCard — DESIGN.md §6.3 */}
        <section>
          <LedgerLabel>// ledgercard — §6.3</LedgerLabel>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <LedgerCard>
              <p className="font-display text-lg text-ink">Custom Software</p>
              <p className="text-ink-soft mt-2">
                Systems tailored to specific business operations — internal
                tools, tracking platforms, workflow systems.
              </p>
            </LedgerCard>
            <LedgerCard>
              <p className="font-display text-lg text-ink">Web & Mobile Apps</p>
              <p className="text-ink-soft mt-2">
                For when the operation calls for a web app, an Android app,
                or both working against the same data.
              </p>
            </LedgerCard>
          </div>
        </section>

        {/* SectionHeader — DESIGN.md §5.2 */}
        <section>
          <LedgerLabel>// sectionheader — §5.2</LedgerLabel>
          <div className="mt-4">
            <SectionHeader
              label="// 02 — Services"
              heading="What we build, in plain terms."
              subtext="Every offering below solves an operational problem our team has actually seen. None of them are about technology for its own sake."
            />
          </div>
        </section>
      </div>
    </main>
  );
}
