import Link from "next/link";
import { services } from "@/data/services";
import { SectionHeading } from "./SectionHeading";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <SectionShell id="services" variant="muted">
      <SectionHeading
        eyebrow="Services"
        title="Engagements built for serious operators."
        description="If you need a senior IC who can also steer delivery, or a lead who still writes production code, start here. Clear scope, documented handoff, no theater."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.title} className={i % 2 === 1 ? "delay-75" : ""}>
            <article className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-colors hover:border-[var(--color-accent)]/45 sm:p-7">
              <h3 className="font-display text-lg font-medium text-[var(--color-text)]">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">{s.description}</p>
              <Link
                href="/contact"
                className="mt-6 inline-flex text-sm font-semibold text-[var(--color-accent)] underline-offset-4 group-hover:underline"
              >
                Discuss this engagement →
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
