import { Contact } from "@/components/Contact";
import { InnerPage } from "@/components/InnerPage";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/contact",
  title: "Contact",
  description: `Work with ${site.name}: tech lead and full stack engineer for SaaS, systems, and serious builds.`,
});

export default function ContactPage() {
  return (
    <InnerPage>
      <Contact />
    </InnerPage>
  );
}
