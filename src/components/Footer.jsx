import Link from "next/link";
import Image from "next/image";
import { footerNav } from "@/data/nav";
import { site } from "@/data/site";
import { IconLinkedIn } from "./icons";

export function Footer() {
  const assetBase = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="container-px mx-auto max-w-6xl py-8 pb-[max(2rem,env(safe-area-inset-bottom,0px))]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-evenly">
            <Link href="/" aria-label={`${site.name} home`} className="inline-flex">
              <Image
                src={`${assetBase}/logos/karim-exact-logo.svg`}
                alt={`${site.name} logo`}
                width={240}
                height={56}
                className="h-[200px] w-auto object-contain"
              />
            </Link>
            <nav className="flex flex-col self-center items-start gap-2 sm:items-center sm:gap-5" aria-label="Footer">
              <Link
                href="/"
                className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                Home
              </Link>
              {footerNav.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center justify-between border-t border-[var(--color-border)] pt-5">
            <p className="text-xs uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
              © {year} {site.name}. All rights reserved.
            </p>
            {site.linkedin ? (
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
              >
                <IconLinkedIn className="h-5 w-5" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
