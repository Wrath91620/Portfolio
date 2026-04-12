import { About } from "@/components/About";
import { InnerPage } from "@/components/InnerPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/about",
  title: "About",
  description:
    "Background, leadership style, and how Karim Alrajjal works with engineering teams, stakeholders, and product owners.",
});

export default function AboutPage() {
  return (
    <InnerPage>
      <About />
    </InnerPage>
  );
}
