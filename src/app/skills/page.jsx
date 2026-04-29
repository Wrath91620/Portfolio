import { SkillsSection } from "@/components/SkillsSection";
import { InnerPage } from "@/components/InnerPage";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/skills",
  title: "Skills",
  description: `${site.name} skills across system architecture, frontend and backend engineering, data, CMS platforms, and automation workflows.`,
});

export default function SkillsPage() {
  return (
    <InnerPage>
      <SkillsSection />
    </InnerPage>
  );
}
