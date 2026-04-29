import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { HomeExplore } from "@/components/HomeExplore";
import { ContactCTA } from "@/components/ContactCTA";
import { site } from "@/data/site";

const homeTitle = `${site.name} | ${site.title}`;

export const metadata = {
  title: { absolute: homeTitle },
  description: site.description,
  keywords: site.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    title: homeTitle,
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
    title: homeTitle,
    description: site.description,
    images: site.ogImage ? [site.ogImage] : undefined,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Impact compact />
      <HomeExplore />
      <ContactCTA />
    </>
  );
}
