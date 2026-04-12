import Link from "next/link";
import { footerNav } from "@/data/nav";
import { site } from "@/data/site";
import { IconLinkedIn } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
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
                className="inline-flex text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                <IconLinkedIn className="h-4 w-4" />
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
