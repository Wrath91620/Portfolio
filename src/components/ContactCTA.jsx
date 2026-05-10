import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

function whatsappLink(phone) {
  if (!phone) return "";
  const digits = phone.replace(/[^\d+]/g, "");
  return digits ? `https://wa.me/${digits.replace("+", "")}` : "";
}

export function ContactCTA() {
  const emailHref = site.email ? `mailto:${site.email}` : "";
  const whatsappHref = whatsappLink(site.phone);

  return (
    <SectionShell id="contact" variant="muted" className="border-b-0">
      <Reveal>
        <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 shadow-[0_20px_60px_-40px_color-mix(in_oklch,var(--color-accent)_55%,transparent)] sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">Contact</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            Need someone who can own the build and the delivery?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
            I can help plan, build, review, and ship production web systems across frontend, backend, CMS, APIs,
            integrations, performance, and technical SEO.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {emailHref ? (
              <a
                href={emailHref}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-bg)] transition-colors hover:bg-[var(--color-accent-hover)]"
              >
                Email Me
              </a>
            ) : null}
            {site.linkedin ? (
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
              >
                LinkedIn
              </a>
            ) : null}
            {site.cvPath ? (
              <Link
                href={site.cvPath}
                download
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
              >
                Download CV
              </Link>
            ) : null}
            {whatsappHref ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
              >
                WhatsApp
              </a>
            ) : null}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
