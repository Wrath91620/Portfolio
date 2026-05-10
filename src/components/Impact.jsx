import Link from "next/link";
import { impactFocusAreas, impactSignals, impactStats } from "@/data/impact";
import { SectionHeading } from "./SectionHeading";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";

/** `compact`: stats + heading only (homepage). Full narrative on /impact when omitted or false. */
export function Impact({ compact = false }) {
  return (
    <SectionShell id="impact" variant="muted">
      <SectionHeading
        eyebrow="Impact"
        title="Outcomes tied to production work."
        description="I focus on outcomes that survive launch: traffic, rankings, performance, stable systems, and handoffs that teams can operate without guesswork."
      />

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">
        {impactStats.map((stat, i) => (
          <Reveal
            key={stat.label}
            className={i === 1 ? "delay-75" : i === 2 ? "delay-100" : i === 3 ? "delay-150" : ""}
          >
            <article className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-colors hover:border-[var(--color-accent)]/40">
              <p className="font-display text-3xl font-medium tracking-tight text-[var(--color-accent)] sm:text-4xl">
                {stat.value}
              </p>
              <h3 className="mt-3 text-sm font-semibold text-[var(--color-text)]">{stat.label}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">{stat.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>

      {compact ? null : (
        <>
      <Reveal className="delay-100">
        <div className="mt-16 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 sm:p-8 lg:p-10">
          <h2 className="font-display text-xl font-medium tracking-tight text-[var(--color-text)] sm:text-2xl">
            What impact means in practice
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--color-text-muted)]">
            Metrics are only useful if they tie to something a business cares about: revenue, leads, trust, or time saved.
            I start from the outcome, then work backward through the stack: content, SEO, performance, and the operational
            side of shipping and maintaining software.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 lg:mt-16">
        <Reveal>
          <h2 className="font-display text-xl font-medium tracking-tight text-[var(--color-text)] sm:text-2xl">
            Where it usually shows up
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)]">
            Same person, different lenses. Here is how I tend to split the work when we are trying to move something
            measurable.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {impactFocusAreas.map((area, i) => (
            <Reveal key={area.title} className={i === 1 ? "delay-75" : i === 2 ? "delay-100" : ""}>
              <article className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-colors hover:border-[var(--color-accent)]/35">
                <h3 className="font-display text-lg font-medium leading-snug text-[var(--color-text)]">{area.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">{area.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="delay-75">
        <div className="mt-14 border-t border-[var(--color-border)] pt-8 lg:mt-16 lg:pt-10">
          <h2 className="font-display text-xl font-medium tracking-tight text-[var(--color-text)] sm:text-2xl">
            Signals I actually watch
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)]">
            Not every project needs every metric. These are the ones I reach for when we are trying to prove something
            changed or stayed healthy.
          </p>
          <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
            {impactSignals.map((signal) => (
              <li key={signal} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" aria-hidden />
                <span>{signal}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="delay-100">
        <div className="mt-12 flex flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg)] p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-8">
          <p className="max-w-xl text-sm leading-relaxed text-[var(--color-text-muted)]">
            Want the story behind the numbers? Each project write-up on the work page includes context, constraints, and
            what shipped.
          </p>
          <Link
            href="/work"
            className="inline-flex shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-bg)] transition-colors hover:bg-[var(--color-accent-hover)]"
          >
            See case studies
          </Link>
        </div>
      </Reveal>
        </>
      )}
    </SectionShell>
  );
}
