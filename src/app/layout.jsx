import { DM_Sans, Fraunces } from "next/font/google";
import { site } from "@/data/site";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const rootTitle = `${site.name} | ${site.title}`;

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
  },
  twitter: {
    card: "summary_large_image",
    title: rootTitle,
    description: site.description,
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
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen font-sans">
        <Providers>
          <SkipLink />
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
