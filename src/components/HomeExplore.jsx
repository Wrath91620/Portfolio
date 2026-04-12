import Link from "next/link";
import { mainNav } from "@/data/nav";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { IconChevronRight } from "./icons";

const blurbs = {
  "/work": "Real builds with context, constraints, and what actually shipped.",
  "/about": "Background, how I lead, and what it is like to work with me.",
  "/impact": "Traffic, rankings, and delivery you can measure.",
  "/skills": "Tools and practices I rely on in production, not a laundry list.",
  "/experience": "Teams I have been part of and what I owned.",
  "/services": "Ways I can plug in, from builds to integrations to SEO.",
  "/contact": "Tell me what you are trying to do. I read every thoughtful note.",
};

export function HomeExplore() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Explore"
          title="The rest of the site, page by page."
          description="No endless homepage. Each section has room to breathe, whether you are hiring, buying services, or just curious."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {mainNav.map((item, i) => (
            <Reveal key={item.href} className={i % 3 === 1 ? "delay-75" : i % 3 === 2 ? "delay-100" : ""}>
              <Link
                href={item.href}
                className="group flex h-full min-h-[9.5rem] flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-colors hover:border-[var(--color-accent)]/45"
              >
                <span className="inline-flex items-center gap-1.5 font-display text-lg font-medium tracking-tight text-[var(--color-accent)]">
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
