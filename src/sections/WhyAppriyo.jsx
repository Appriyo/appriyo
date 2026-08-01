// src/sections/WhyAppriyo.jsx — CONTENT_STRATEGY.md §3.6
//
// The "stats" array is intentionally empty at launch (see
// docs/Asset_Checklist.md — only real numbers, no invented figures).
// The stats panel therefore renders a labelled placeholder ruled by
// the LedgerLabel primitive, not a number.
//
// Team photos use the real files under /public/img/team_img/, with
// the original "profile pic.jpg" filename URL-encoded because it
// contains a space. If a photo is missing, the initials avatar
// (consistent style per DESIGN.md) renders in its place.
import SectionHeader from "../components/SectionHeader";
import LedgerLabel from "../components/LedgerLabel";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/hooks";

function getInitials(name) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TeamMemberAvatar({ member }) {
  const { t } = useLanguage("home");
  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={t(member.photoAltKey, { name: member.name, role: member.role })}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    );
  }
  // Initials avatar fallback — consistent style across all 4 cards.
  return (
    <span
      className="font-display font-black text-3xl text-ink-soft leading-none"
      aria-hidden="true"
    >
      {getInitials(member.name)}
    </span>
  );
}

export default function WhyAppriyo() {
  const { t } = useLanguage("home");
  // Stats array is empty at launch — only real numbers will be shown
  // (see docs/Asset_Checklist.md). The team photo paths live in
  // src/data/team.js because they're URLs, not user-facing strings.
  const stats = [];
  const team = t("home.whyAppriyo.team", { returnObjects: true });
  // Photo URLs are not translation data — attach them by index from the
  // hardcoded array below. If a future move adds a translation file for
  // team data this can be replaced by a single t() call.
  const teamPhotos = [
    "/img/team_img/profile%20pic.webp",
    "/img/team_img/preota%20profile.webp",
    "/img/team_img/munna%20profile.webp",
    "/img/team_img/mim%20profile.webp",
  ];

  const teamWithPhotos = team.map((member, i) => ({
    ...member,
    photo: teamPhotos[i],
    photoAltKey: `home.whyAppriyo.team.${i}.photoAlt`,
  }));

  return (
    <section className="bg-paper" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal>
          <SectionHeader heading={t("home.whyAppriyo.heading")} subtext={null} />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left column — paragraph + stats panel (md: 7 cols) */}
          <Reveal className="md:col-span-7 flex flex-col gap-8">
            <p className="text-ink-soft text-base leading-[1.6] max-w-2xl">
              {t("home.whyAppriyo.paragraph")}
            </p>

            <div className="border border-line rounded-card-lg bg-paper-card p-6">
              <LedgerLabel>{t("home.whyAppriyo.statsLabel")}</LedgerLabel>
              <p className="font-mono text-xs text-ink-muted mt-3 leading-[1.6]">
                {stats.length === 0
                  ? t("home.whyAppriyo.statsEmpty")
                  : t(
                      stats.length === 1
                        ? "home.whyAppriyo.statsCountSingular"
                        : "home.whyAppriyo.statsCountPlural",
                      { count: stats.length },
                    )}
              </p>
            </div>
          </Reveal>

          {/* Right column — team grid (md: 5 cols) */}
          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-5">
              {teamWithPhotos.map((m, i) => (
                <Reveal key={m.name} stagger index={i}>
                  <figure className="flex flex-col gap-3">
                    <div className="aspect-square w-full overflow-hidden rounded-card-lg border border-line bg-paper-dim flex items-center justify-center">
                      <TeamMemberAvatar member={m} />
                    </div>
                    <figcaption className="flex flex-col gap-1">
                      <span className="font-display text-[15px] text-ink leading-tight">
                        {m.name}
                      </span>
                      <span className="font-mono text-[11px] text-ink-muted tracking-[0.04em] leading-snug">
                        {m.role}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
