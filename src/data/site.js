/**
 * CUSTOMIZE: Name, role, URLs, metrics. Single source of truth.
 */
const assetBase = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const site = {
  name: "Karim Alrajjal",
  title: "Full-Stack Developer & Technical Lead",
  tagline:
    "Production-focused full-stack development, technical leadership, and delivery ownership from architecture to launch.",
  email: "",
  phone: "",
  url: "https://wrath91620.github.io/Portfolio",
  /** Primary meta description (~155 characters) for search and sharing */
  description:
    "Karim Alrajjal is a production-focused full-stack developer and technical lead building web systems, APIs, CMS platforms, SEO improvements, and reliable delivery workflows.",
  ogImage: `${assetBase}/logos/Personal-logo.png`,
  keywords: [
    "Karim Alrajjal",
    "full stack engineer",
    "development team lead",
    "tech lead",
    "SaaS development",
    "technical SEO",
    "web performance",
    "API development",
    "React",
    "Node.js",
    "software architecture",
    "portfolio",
  ],
  linkedin: "https://www.linkedin.com/in/karim-alrajjal/",
  github: "",
  twitter: "",
  bookCallUrl: "",
  cvPath: "",
  locale: "en_US",
  metrics: [
    { value: "3+", label: "Years in production delivery" },
    { value: "Lead", label: "Architecture, reviews, releases" },
    { value: "Full stack", label: "Frontend, backend, CMS, APIs" },
  ],
};
