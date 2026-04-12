import { Impact } from "@/components/Impact";
import { InnerPage } from "@/components/InnerPage";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/impact",
  title: "Impact",
  description: `How Karim measures delivery: SEO, traffic, performance, documentation, and handoffs. Metrics, focus areas, and signals tracked on real builds. ${site.name}.`,
});

export default function ImpactPage() {
  return (
    <InnerPage>
      <Impact />
    </InnerPage>
  );
}
