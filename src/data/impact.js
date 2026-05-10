/**
 * Impact page: headline stats, focus areas, and narrative. Tune numbers to match your real outcomes.
 */

export const impactStats = [
  {
    value: "+60%",
    label: "Website traffic",
    detail: "Lift from technical SEO, performance, and structured content, not vanity tweaks.",
  },
  {
    value: "#2",
    label: "Primary keyword rank",
    detail: "Page one placement for core commercial terms after schema, hreflang, and on page discipline.",
  },
  {
    value: "Production grade",
    label: "Production-ready systems",
    detail: "Multiple launches with full documentation so teams operate without chasing you for basics.",
  },
  {
    value: "Clear",
    label: "Handoffs",
    detail: "Runbooks, API notes, deployment context, and decisions documented so teams can keep moving.",
  },
];

/** Deeper view: where measurable impact tends to show up */
export const impactFocusAreas = [
  {
    title: "Search and content",
    description:
      "Structured data, hreflang, clean IA, and pages that answer intent. I optimize for what people actually search for, not just what looks good in a sitemap export.",
  },
  {
    title: "Performance and UX",
    description:
      "Core Web Vitals, image and asset discipline, and honest performance budgets. Fast sites rank better and convert better, so I treat speed as a product requirement, not a nice to have.",
  },
  {
    title: "Delivery and handoffs",
    description:
      "Readable PRs, API contracts, deployment notes, and decisions documented clearly enough for the next engineer or stakeholder to keep moving.",
  },
];

/** Short signals I track on serious builds */
export const impactSignals = [
  "Organic traffic and keyword visibility (Search Console, rank trackers where relevant)",
  "Core Web Vitals and real user metrics, not just Lighthouse in a cold tab",
  "Error rates, uptime, and incident response when something goes wrong in production",
  "Time to first meaningful review for a new teammate on the codebase",
];
