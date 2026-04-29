import { Services } from "@/components/Services";
import { InnerPage } from "@/components/InnerPage";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/services",
  title: "Services",
  description: `Services by ${site.name}: full stack builds, SaaS architecture, API integrations, WordPress systems, and technical SEO performance work.`,
});

export default function ServicesPage() {
  return (
    <InnerPage>
      <Services />
    </InnerPage>
  );
}
