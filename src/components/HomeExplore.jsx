import Link from "next/link";
import { mainNav } from "@/data/nav";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const blurbs = {
  "/work": "Case studies: context, constraints, solution, impact.",
  "/about": "Engineer → lead → system owner.",
  "/impact": "Traffic, rankings, documentation-first delivery.",
  "/skills": "Architecture, stack, automation, grouped strategically.",
  "/experience": "Timeline of ownership and technical depth.",
  "/services": "What I deliver for teams and clients.",
  "/contact": "Briefs, roles, timelines, serious inquiries only.",
};

export function HomeExplore() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Explore"
          title="Everything else lives on its own page."
          description="No endless scroll. Jump straight to what you care about. Same content, clearer structure for recruiters and clients."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mainNav.map((item, i) => (
            <Reveal key={item.href} className={i % 3 === 1 ? "delay-75" : i % 3 === 2 ? "delay-100" : ""}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-colors hover:border-[var(--color-accent)]/50"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  {item.label}
                </span>
                <span className="mt-2 font-display text-lg font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)]">
                  Open →
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
