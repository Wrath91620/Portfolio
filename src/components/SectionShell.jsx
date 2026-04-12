export function SectionShell({ id, children, className = "", variant = "default" }) {
  const bg =
    variant === "muted"
      ? "bg-[var(--color-surface)]/80 dark:bg-[var(--color-surface)]/50"
      : "";

  return (
    <section
      id={id}
      className={`scroll-mt-[calc(6rem+env(safe-area-inset-top,0px))] border-b border-[var(--color-border)] ${bg} ${className}`}
    >
      <div className="container-px mx-auto max-w-6xl py-20 sm:py-24">{children}</div>
    </section>
  );
}
