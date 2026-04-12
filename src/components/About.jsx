import { SectionHeading } from "./SectionHeading";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <SectionShell id="about">
      <SectionHeading
        eyebrow="About"
        title="From shipping features to owning the system."
        description="I care about work that lasts after I step away: clear boundaries, honest reviews, and systems the next person can run without guessing."
      />
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7">
          <div className="space-y-5 text-base leading-relaxed text-[var(--color-text-muted)]">
            <p className="text-[var(--color-text)]">
              I am Karim Alrajjal. I am a development team lead and full stack developer, and for the last few years I have
              shipped production web and mobile work end to end. I started as the person who closes tickets; today I also
              hold the line on architecture, pace, and standards.
            </p>
            <p>
              That means caring about APIs, data shape, auth, and deployment as real tradeoffs with business risk, not
              slides. I run reviews and rhythm with the team, and I stay close to the keyboard when a mistake would hurt
              or speed really matters.
            </p>
            <p>
              I want outcomes people can point to: traffic, rankings, reliability, handoffs that do not depend on me being
              in every meeting. I use AI assisted tools where they help; they do not replace judgment, review, or owning
              the result.
            </p>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-5">
          <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Where I focus
            </h3>
            <ul className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" aria-hidden />
                <span>
                  <strong className="font-medium text-[var(--color-text)]">Architecture and standards</strong>
                  <br />
                  Patterns and reviews that keep the codebase honest as the team grows.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" aria-hidden />
                <span>
                  <strong className="font-medium text-[var(--color-text)]">Delivery</strong>
                  <br />
                  Scoping and communication so stakeholders see steady progress without noise.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" aria-hidden />
                <span>
                  <strong className="font-medium text-[var(--color-text)]">Engineering that shows up in the business</strong>
                  <br />
                  Technical SEO, performance, integrations that tie to revenue, not vanity charts.
                </span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
