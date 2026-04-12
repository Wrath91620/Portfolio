import { Projects } from "@/components/Projects";
import { InnerPage } from "@/components/InnerPage";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/work",
  title: "Work",
  description: `Case studies and production systems: SaaS, web, mobile, and integrations. ${site.name}.`,
});

export default function WorkPage() {
  return (
    <InnerPage>
      <Projects />
    </InnerPage>
  );
}
