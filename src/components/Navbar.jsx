"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/data/nav";
import { site } from "@/data/site";
import { IconLinkedIn } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-md dark:bg-[var(--color-bg)]/80"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 font-display text-base font-medium tracking-tight text-[var(--color-text)] sm:text-lg"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-[var(--color-surface)] text-[var(--color-text)]"
                    : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {site.cvPath ? (
            <a
              href={site.cvPath}
              download
              className="hidden rounded-[var(--radius-md)] border border-[var(--color-border)] px-3 py-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] sm:inline-flex"
            >
              CV
            </a>
          ) : null}
          {site.linkedin ? (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent)] px-3 py-2 text-[var(--color-bg)] transition-colors hover:bg-[var(--color-accent-hover)] sm:inline-flex"
            >
              <IconLinkedIn className="h-[1.125rem] w-[1.125rem]" />
            </a>
          ) : null}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[var(--radius-sm)] px-3 py-3 text-base font-medium text-[var(--color-text)]"
              >
                {item.label}
              </Link>
            ))}
            {site.linkedin ? (
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="mt-2 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent)] px-3 py-3 text-[var(--color-bg)]"
              >
                <IconLinkedIn className="h-6 w-6" />
              </a>
            ) : null}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
