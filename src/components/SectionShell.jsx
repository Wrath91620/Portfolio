export function SectionShell({ id, children, className = "", variant = "default" }) {
  const bg =
    variant === "muted"
      ? "bg-[var(--color-surface)]/80 dark:bg-[var(--color-surface)]/50"
      : "";

  return (
    <section
      id={id}
      className={`scroll-mt-24 border-b border-[var(--color-border)] ${bg} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">{children}</div>
    </section>
  );
}
