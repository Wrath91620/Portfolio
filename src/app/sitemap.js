import { site } from "@/data/site";

/** Multi-page sitemap. Update `site.url` when you deploy. */
export const dynamic = "force-static";

export default function sitemap() {
  const base = site.url.replace(/\/$/, "");
  const paths = ["", "/about", "/impact", "/skills", "/work", "/experience", "/services"];
  const now = new Date();
  return paths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
