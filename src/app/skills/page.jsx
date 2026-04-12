import { SkillsSection } from "@/components/SkillsSection";
import { InnerPage } from "@/components/InnerPage";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/skills",
  title: "Skills",
  description: `System architecture, frontend, backend, data, CMS, and automation. ${site.name}.`,
});

export default function SkillsPage() {
  return (
    <InnerPage>
      <SkillsSection />
    </InnerPage>
  );
}
