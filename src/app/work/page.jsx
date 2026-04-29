import { Projects } from "@/components/Projects";
import { InnerPage } from "@/components/InnerPage";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/work",
  title: "Work",
  description: `Portfolio case studies by ${site.name}: production web and mobile systems, integration-heavy builds, and measurable business outcomes.`,
});

export default function WorkPage() {
  return (
    <InnerPage>
      <Projects />
    </InnerPage>
  );
}
