import { Impact } from "@/components/Impact";
import { InnerPage } from "@/components/InnerPage";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/impact",
  title: "Impact",
  description: `Measurable outcomes: SEO, traffic, production systems, and documentation. ${site.name}.`,
});

export default function ImpactPage() {
  return (
    <InnerPage>
      <Impact />
    </InnerPage>
  );
}
