import { SectionHeading } from "./SectionHeading";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <SectionShell id="about">
      <SectionHeading
        eyebrow="About"
        title="Engineer → team lead → system owner."
        description="The through-line is ownership: I do not disappear after the first merge. I set the bar, ship with it, and leave systems other people can run."
      />
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7">
          <div className="space-y-5 text-base leading-relaxed text-[var(--color-text-muted)]">
            <p className="text-[var(--color-text)]">
              I’m Karim Alrajjal, a development team lead and full stack developer with 3+ years delivering production web
              and mobile systems end-to-end. I started as the person who ships features; I operate now as the person who
              also guards architecture, pace, and engineering standards.
            </p>
            <p>
              That means owning decisions around APIs, data shape, auth, and deployment, not as theory, but as tradeoffs
              with business risk. I lead teams through code review and delivery rhythm, and I stay hands-on when a
              mistake would be expensive or when velocity matters most.
            </p>
            <p>
              I care about outcomes recruiters and founders recognize: traffic, rankings, reliability, and handoffs that
              do not need me in the room. AI assisted workflows are part of how I work. They accelerate execution, not
              replace judgment, review, or accountability.
            </p>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-5">
          <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Where I add leverage
            </h3>
            <ul className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" aria-hidden />
                <span>
                  <strong className="font-medium text-[var(--color-text)]">Architecture &amp; standards</strong>:
                  patterns, boundaries, and reviews that keep a codebase honest as headcount grows.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" aria-hidden />
                <span>
                  <strong className="font-medium text-[var(--color-text)]">Delivery responsibility</strong>:
                  scoping, sequencing, and communication so stakeholders see progress without chaos.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" aria-hidden />
                <span>
                  <strong className="font-medium text-[var(--color-text)]">Business facing engineering</strong>:
                  technical SEO, performance, and integrations that map to revenue and acquisition, not vanity metrics.
                </span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
