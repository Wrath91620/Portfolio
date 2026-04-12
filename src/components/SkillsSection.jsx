import { skillGroups } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";

export function SkillsSection() {
  return (
    <SectionShell id="skills">
      <SectionHeading
        eyebrow="Capabilities"
        title="What I actually use day to day."
        description="Grouped by how I think about the work: leadership and architecture first, then the layers underneath. This is not every tool I have ever touched, it is what I trust in production."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {skillGroups.map((group, i) => (
          <Reveal key={group.id} className={i % 3 === 1 ? "delay-75" : i % 3 === 2 ? "delay-100" : ""}>
            <article className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-colors hover:border-[var(--color-accent)]/35 sm:min-h-[12rem]">
              <h3 className="font-display text-lg font-medium leading-snug text-[var(--color-text)]">{group.title}</h3>
              <ul className="mt-4 space-y-2.5 border-t border-[var(--color-border)] pt-4">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
