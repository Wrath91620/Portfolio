import { Experience } from "@/components/Experience";
import { InnerPage } from "@/components/InnerPage";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/experience",
  title: "Experience",
  description: `Engineering timeline: team lead, full stack delivery, architecture ownership. ${site.name}.`,
});

export default function ExperiencePage() {
  return (
    <InnerPage>
      <Experience />
    </InnerPage>
  );
}
