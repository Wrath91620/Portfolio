import { Services } from "@/components/Services";
import { InnerPage } from "@/components/InnerPage";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/services",
  title: "Services",
  description: `Full stack, SaaS, APIs, WordPress, performance and SEO: client engagements by ${site.name}.`,
});

export default function ServicesPage() {
  return (
    <InnerPage>
      <Services />
    </InnerPage>
  );
}
