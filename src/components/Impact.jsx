import { impactStats } from "@/data/impact";
import { SectionHeading } from "./SectionHeading";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";

export function Impact() {
  return (
    <SectionShell id="impact" variant="muted">
      <SectionHeading
        eyebrow="Impact"
        title="Numbers I can point to."
        description="I care about outcomes you can show in a deck or a dashboard: traffic, rankings, stable systems, and handoffs that do not need me in every standup."
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
    </SectionShell>
  );
}
