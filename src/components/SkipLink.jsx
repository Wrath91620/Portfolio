"use client";

/** Skip to main. Focuses #main-content for keyboard and screen reader users. */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      onClick={(e) => {
        e.preventDefault();
        const el = document.getElementById("main-content");
        el?.focus({ preventScroll: true });
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className="fixed z-[100] -translate-y-24 rounded-[var(--radius-md)] bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-bg)] shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-text)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] left-[max(1rem,env(safe-area-inset-left,0px))] top-[max(1rem,env(safe-area-inset-top,0px))]"
    >
      Skip to content
    </a>
  );
}
