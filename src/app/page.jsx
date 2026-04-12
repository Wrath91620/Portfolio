import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { HomeExplore } from "@/components/HomeExplore";
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
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: site.description,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Impact />
      <HomeExplore />
    </>
  );
}
