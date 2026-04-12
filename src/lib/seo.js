import { site } from "@/data/site";

function baseUrl() {
  return site.url.replace(/\/$/, "");
}

/**
 * Page level metadata aligned with common SEO patterns: canonical URL, Open Graph, Twitter.
 * @param {{ path: string; title: string; description: string }} opts
 */
export function pageMetadata({ path, title, description }) {
  const canonicalPath = path === "/" || !path ? "/" : path.startsWith("/") ? path : `/${path}`;
  const url = `${baseUrl()}${canonicalPath === "/" ? "/" : canonicalPath}`;
  const ogTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;

  return {
    title,
    description,
    keywords: site.keywords,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: site.name,
      locale: site.locale.replace("_", "-"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}
