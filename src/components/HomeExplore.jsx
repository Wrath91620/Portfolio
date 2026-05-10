import Link from "next/link";
import { mainNav } from "@/data/nav";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { IconChevronRight } from "./icons";

const blurbs = {
  "/work": "Production projects with context, constraints, implementation choices, and shipped outcomes.",
  "/about": "How I work as a developer, technical lead, and delivery owner.",
  "/impact": "SEO, performance, traffic, rankings, and operational improvements.",
  "/skills": "The stack, practices, and engineering standards I use in production.",
  "/experience": "Roles, responsibilities, and ownership across teams and releases.",
  "/services": "Ways I can support builds, integrations, optimization, and delivery.",
};

export function HomeExplore() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="container-px mx-auto max-w-6xl py-20 sm:py-24">
        <SectionHeading
          eyebrow="Explore"
          title="Proof of delivery across the stack."
          description="Explore the work, experience, technical capabilities, and outcomes behind my production-focused full-stack and leadership work."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {mainNav.map((item, i) => (
            <Reveal key={item.href} className={i % 3 === 1 ? "delay-75" : i % 3 === 2 ? "delay-100" : ""}>
              <Link
                href={item.href}
                className="group flex h-full min-h-[9.5rem] flex-col rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-colors hover:border-[var(--color-accent)]/45"
              >
                <span className="inline-flex items-center gap-1.5 font-display text-lg font-semibold tracking-tight text-[var(--color-accent)]">
                  {item.label}
                  <IconChevronRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {blurbs[item.href] ?? ""}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
