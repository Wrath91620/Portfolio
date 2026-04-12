import { experience } from "@/data/experience";
import { EmployerLogo } from "./EmployerLogo";
import { SectionHeading } from "./SectionHeading";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <SectionShell id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Professional experience."
        description="Grouped by company so you can see the arc: today at TGMENA, then several years at SarrdehTech from WordPress and Flutter into team lead and full stack work."
      />

      <div className="flex flex-col gap-8 lg:gap-10">
        {experience.map((employer) => (
          <Reveal key={employer.company}>
            <article
              className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 sm:p-8"
              aria-labelledby={`employer-${employer.company.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <header className="border-b border-[var(--color-border)] pb-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <h3
                      id={`employer-${employer.company.replace(/\s+/g, "-").toLowerCase()}`}
                      className="font-display text-xl font-medium tracking-tight text-[var(--color-text)] sm:text-2xl"
                    >
                      {employer.company}
                    </h3>
                    {employer.location ? (
                      <p className="mt-2 text-sm font-normal leading-relaxed text-[var(--color-text-muted)]">
                        {employer.location}
                      </p>
                    ) : null}
                    {employer.roles.length > 1 ? (
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                        {employer.roles.length} roles
                      </p>
                    ) : null}
                  </div>
                  {employer.websiteUrl && (employer.localLogoUrl || employer.logoUrl) ? (
                    <EmployerLogo
                      company={employer.company}
                      websiteUrl={employer.websiteUrl}
                      localLogoUrl={employer.localLogoUrl}
                      logoUrl={employer.logoUrl}
                      logoTreatment={employer.logoTreatment}
                    />
                  ) : null}
                </div>
              </header>

              <div className="mt-6 space-y-10">
                {employer.roles.map((role, ri) => (
                  <div
                    key={`${employer.company}-${role.period}-${role.title}`}
                    className={ri > 0 ? "border-t border-[var(--color-border)] pt-10" : ""}
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                      <h4 className="max-w-xl font-display text-lg font-medium leading-snug tracking-tight text-[var(--color-text)]">
                        {role.title}
                      </h4>
                      <p className="shrink-0 text-sm font-normal tabular-nums leading-snug text-[var(--color-text-muted)] sm:text-right">
                        {role.period}
                      </p>
                    </div>
                    <ul
                      className="mt-4 space-y-3 text-sm font-normal leading-relaxed text-[var(--color-text-muted)]"
                      aria-label={`${role.title} responsibilities`}
                    >
                      {role.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5">
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]"
                            aria-hidden
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
