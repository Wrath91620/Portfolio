import Link from "next/link";
import { services } from "@/data/services";
import { SectionHeading } from "./SectionHeading";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import { IconChevronRight } from "./icons";

export function Services() {
  return (
    <SectionShell id="services" variant="muted">
      <SectionHeading
        eyebrow="Services"
        title="Work with me on something that matters."
        description="If you need a senior engineer who can still steer delivery, or a lead who writes real code when it counts, we can start with a clear scope and a handoff you can trust."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
        {services.map((s, i) => (
          <Reveal key={s.title} className={i % 2 === 1 ? "delay-75" : ""}>
            <article className="group flex h-full min-h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-colors hover:border-[var(--color-accent)]/45 sm:p-7">
              <h3 className="font-display text-lg font-medium text-[var(--color-text)]">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">{s.description}</p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline"
              >
                Talk about this
                <IconChevronRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
