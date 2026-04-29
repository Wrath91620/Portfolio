import { site } from "@/data/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";
import "./globals.css";

const rootTitle = `${site.name} | ${site.title}`;
const assetBase = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata = {
  title: {
    default: rootTitle,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  metadataBase: new URL(site.url),
  openGraph: {
    title: rootTitle,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: site.locale.replace("_", "-"),
    type: "website",
    images: site.ogImage
      ? [{ url: site.ogImage, width: 1200, height: 630, alt: `${site.name} portfolio preview` }]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: rootTitle,
    description: site.description,
    images: site.ogImage ? [site.ogImage] : undefined,
  },
  icons: {
    icon: `${assetBase}/logos/karim-exact-logo.svg`,
    shortcut: `${assetBase}/logos/karim-exact-logo.svg`,
    apple: `${assetBase}/logos/Personal-logo.png`,
  },
  robots: { index: true, follow: true },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}#person`,
        name: site.name,
        jobTitle: site.title,
        description: site.description,
        url: site.url,
        sameAs: [site.linkedin, site.github, site.twitter].filter(Boolean),
        knowsAbout: site.keywords,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}#website`,
        name: `${site.name} portfolio`,
        url: site.url,
        description: site.description,
        inLanguage: "en-US",
        publisher: { "@id": `${site.url}#person` },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen font-sans">
        <SkipLink />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
