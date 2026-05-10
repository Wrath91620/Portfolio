import Link from "next/link";
import { site } from "@/data/site";
import { IconChevronRight } from "./icons";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] pt-[calc(6rem+env(safe-area-inset-top,0px))] pb-16 sm:pt-[calc(7rem+env(safe-area-inset-top,0px))] sm:pb-24 lg:pt-[calc(8rem+env(safe-area-inset-top,0px))] lg:pb-28">
      <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden>
        <div className="absolute -left-1/4 top-0 h-[min(420px,50vw)] w-[min(420px,50vw)] rounded-full bg-[var(--color-accent)] blur-[120px]" />
        <div className="absolute -right-1/4 bottom-0 h-[min(360px,45vw)] w-[min(360px,45vw)] rounded-full bg-[var(--color-accent)] blur-[100px]" />
      </div>
      <div className="grid-overlay pointer-events-none absolute inset-x-0 top-0 h-[min(62vh,560px)] opacity-20" aria-hidden />

      <div className="container-px relative mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-6 inline-flex max-w-xl flex-wrap items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" aria-hidden />
            <span>Full Stack . Technical Lead . Production Delivery</span>
          </p>
        </Reveal>

        <Reveal className="delay-75">
          <h1 className="max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-[3.5rem]">
            I lead and build production web systems from architecture
            <span className="text-[var(--color-text-muted)]"> to launch.</span>
          </h1>
        </Reveal>

        <Reveal className="delay-100">
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg lg:text-xl">
            I am Karim Alrajjal, a full-stack developer and team lead working across frontend, backend, CMS platforms,
            APIs, SEO, and performance. I help turn business goals into stable releases with clear architecture, practical
            execution, and systems the next team can maintain.
          </p>
        </Reveal>

        <Reveal className="delay-150">
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
            <Link
              href="/work"
              className="group inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-center text-base font-semibold text-[var(--color-bg)] transition-colors hover:bg-[var(--color-accent-hover)] sm:w-auto"
            >
              View Projects
              <IconChevronRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex w-full min-h-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-6 py-3.5 text-center text-base font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] sm:w-auto"
            >
              Contact Me
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
          <div className="mt-8 max-w-3xl rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/80 p-4 sm:p-5">
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
              Recent work includes a +60% traffic lift, a #2 primary keyword ranking, and production launches across
              healthcare, ecommerce, sports, interiors, and community platforms.
            </p>
          </div>
        </Reveal>

        {site.metrics.length > 0 ? (
          <Reveal className="delay-[250ms]">
            <dl className="mt-12 grid grid-cols-2 gap-4 border-t border-[var(--color-border)] pt-8 sm:grid-cols-3 sm:gap-5 sm:pt-10">
              {site.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-4"
                >
                  <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                    {m.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-medium text-[var(--color-text)]">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ) : null}
        <Reveal className="delay-[300ms]">
          <ul className="mt-7 flex flex-wrap gap-2">
            <li className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-1.5 text-xs text-[var(--color-text-muted)]">
              React
            </li>
            <li className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-1.5 text-xs text-[var(--color-text-muted)]">
              Next.js
            </li>
            <li className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-1.5 text-xs text-[var(--color-text-muted)]">
              Node.js
            </li>
            <li className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-1.5 text-xs text-[var(--color-text-muted)]">
              Laravel
            </li>
            <li className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-1.5 text-xs text-[var(--color-text-muted)]">
              Technical SEO
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
