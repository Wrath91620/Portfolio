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

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b pt-[env(safe-area-inset-top,0px)] transition-colors ${
        scrolled
          ? "border-[var(--color-border)] bg-[var(--color-bg)]/92 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-16 max-w-6xl min-h-16 items-center justify-between gap-3">
        <Link
          href="/"
          className="min-w-0 flex-1 truncate font-display text-base font-semibold tracking-tight text-[var(--color-text)] sm:flex-none sm:text-lg"
        >
          {site.name}
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/90 p-1 md:flex"
          aria-label="Primary"
        >
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-[var(--color-text)] text-[var(--color-bg)]"
                    : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          {site.cvPath ? (
            <a
              href={site.cvPath}
              download
              className="hidden min-h-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] sm:inline-flex"
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
              className="hidden min-h-11 min-w-11 items-center justify-center rounded-full bg-[var(--color-accent)] px-3 text-[var(--color-bg)] transition-colors hover:bg-[var(--color-accent-hover)] sm:inline-flex"
            >
              <IconLinkedIn className="h-[1.125rem] w-[1.125rem]" />
            </a>
          ) : null}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] md:hidden"
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
          className="container-px max-h-[min(70vh,calc(100dvh-env(safe-area-inset-top,0px)-4rem))] overflow-y-auto overscroll-y-contain border-t border-[var(--color-border)] bg-[var(--color-bg)] py-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))] md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="min-h-12 rounded-[var(--radius-md)] border border-transparent bg-[var(--color-bg-elevated)] px-3 py-3 text-base font-medium leading-snug text-[var(--color-text)] transition-colors hover:border-[var(--color-border)]"
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
                className="mt-2 inline-flex min-h-12 min-w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent)] px-3 py-3 text-[var(--color-bg)]"
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
