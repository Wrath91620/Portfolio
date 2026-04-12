export function SectionHeading({ eyebrow, title, description }) {
  return (
    <header className="mb-12 max-w-3xl lg:mb-16">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-[var(--color-text)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">{description}</p>
      ) : null}
    </header>
  );
}
