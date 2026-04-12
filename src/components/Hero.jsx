import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] pt-24 pb-16 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-[0.22]" aria-hidden>
        <div className="absolute -left-1/4 top-0 h-[min(420px,50vw)] w-[min(420px,50vw)] rounded-full bg-[var(--color-accent)] blur-[120px]" />
        <div className="absolute -right-1/4 bottom-0 h-[min(360px,45vw)] w-[min(360px,45vw)] rounded-full bg-[var(--color-accent)] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="mb-4 inline-flex max-w-xl flex-wrap items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-muted)]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" aria-hidden />
            <span>Tech lead · SaaS and data · Shipping with care</span>
          </p>
        </Reveal>

        <Reveal className="delay-75">
          <h1 className="max-w-4xl font-display text-4xl font-medium leading-[1.06] tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
            I build and lead web systems that{" "}
            <span className="text-[var(--color-text-muted)]">earn their place in production.</span>
          </h1>
        </Reveal>

        <Reveal className="delay-100">
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)] sm:text-xl">
            Full stack engineer and team lead, with several years shipping web and mobile work end to end. I stay close to
            architecture and standards, and I still write code when the risk is high or the timeline is tight: SaaS
            surfaces, APIs, data, integrations, and technical SEO that you can see in search.
          </p>
        </Reveal>

        <Reveal className="delay-150">
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent)] px-6 py-3.5 text-center text-base font-semibold text-[var(--color-bg)] transition-colors hover:bg-[var(--color-accent-hover)]"
            >
              Get in touch
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-6 py-3.5 text-center text-base font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
            >
              See selected work
            </Link>
            {site.cvPath ? (
              <Link
                href={site.cvPath}
                download
                className="inline-flex items-center justify-center text-sm font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline sm:ml-1"
              >
                Download CV
              </Link>
            ) : null}
          </div>
        </Reveal>

        <Reveal className="delay-200">
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)]">
            One recent win: +60% site traffic and a #2 rank for primary keywords after SEO and performance work, plus
            several production launches documented so teams were not stuck waiting on me for basics.
          </p>
        </Reveal>

        {site.metrics.length > 0 ? (
          <Reveal className="delay-[250ms]">
            <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-[var(--color-border)] pt-10 sm:grid-cols-3">
              {site.metrics.map((m) => (
                <div key={m.label}>
                  <dt className="text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]">{m.label}</dt>
                  <dd className="mt-1 font-display text-2xl font-medium text-[var(--color-text)]">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
