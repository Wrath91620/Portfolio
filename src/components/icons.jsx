/** Small stroke icons for links and controls (chevrons, not arrow glyphs). */

function cx(base, extra) {
  return [base, extra].filter(Boolean).join(" ");
}

/** Inline with text: ~14px. Pass className for motion or color only; size is preserved. */
export function IconChevronRight({ className }) {
  return (
    <svg
      className={cx("inline-block h-3.5 w-3.5 shrink-0 align-middle", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

/** Accordion / disclosure control: ~16px. */
export function IconChevronDown({ className }) {
  return (
    <svg
      className={cx("inline-block h-4 w-4 shrink-0", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
