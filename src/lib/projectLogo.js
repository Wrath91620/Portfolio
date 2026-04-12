/**
 * Project card logos. `dark:` utilities follow `html.dark` via globals.css @custom-variant.
 *
 * Treatments:
 * - darkChip: opaque dark PNG, always on a dark chip
 * - darkArtwork: dark SVG, natural in light, white in dark
 * - lightArtwork: white-filled SVG, black in light, natural in dark
 */

export const LOGO_TREATMENT = {
  default: "default",
  darkChip: "darkChip",
  darkArtwork: "darkArtwork",
  lightArtwork: "lightArtwork",
};

/** @param {string | undefined} treatment */
export function projectLogoStyles(treatment) {
  const base = "object-contain p-1.5";

  switch (treatment) {
    case LOGO_TREATMENT.darkChip:
      return {
        wrap: "border-zinc-800 bg-zinc-900",
        img: base,
      };
    case LOGO_TREATMENT.darkArtwork:
      return {
        wrap: "bg-[var(--color-bg)] dark:bg-zinc-900",
        img: `${base} dark:brightness-0 dark:invert`,
      };
    case LOGO_TREATMENT.lightArtwork:
      return {
        wrap: "bg-[var(--color-bg)]",
        img: `${base} brightness-0 dark:brightness-100`,
      };
    default:
      return {
        wrap: "bg-[var(--color-bg)]",
        img: base,
      };
  }
}
