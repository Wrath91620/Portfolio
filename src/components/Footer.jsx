import Link from "next/link";
import { footerNav } from "@/data/nav";
import { site } from "@/data/site";
import { IconLinkedIn } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="container-px mx-auto max-w-6xl pt-10 pb-[max(2.5rem,env(safe-area-inset-bottom,0px))]">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <Link href="/" className="font-display text-lg font-medium text-[var(--color-text)]">
              {site.name}
            </Link>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">{site.title}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            <Link
              href="/"
              className="text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            >
              Home
            </Link>
            {footerNav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              >
                {l.label}
              </Link>
            ))}
            {site.linkedin ? (
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="-m-2 inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-md)] text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
              >
                <IconLinkedIn className="h-5 w-5" />
              </a>
            ) : null}
          </nav>
        </div>
        <p className="mt-8 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-text-muted)]">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
