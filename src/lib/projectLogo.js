/**
 * Project card logos for a permanently dark UI.
 *
 * Treatments:
 * - darkChip: opaque dark PNG, always on a dark chip
 * - darkArtwork: dark SVG forced to invert for visibility
 * - lightArtwork: white-filled SVG shown as-is
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
        wrap: "bg-zinc-900",
        img: `${base} brightness-0 invert`,
      };
    case LOGO_TREATMENT.lightArtwork:
      return {
        wrap: "bg-[var(--color-bg)]",
        img: `${base} brightness-100`,
      };
    default:
      return {
        wrap: "bg-[var(--color-bg)]",
        img: base,
      };
  }
}
