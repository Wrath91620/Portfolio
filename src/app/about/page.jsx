import { About } from "@/components/About";
import { InnerPage } from "@/components/InnerPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/about",
  title: "About",
  description:
    "Karim Alrajjal's background, leadership style, and approach to architecture, delivery rhythm, and cross-functional engineering collaboration.",
});

export default function AboutPage() {
  return (
    <InnerPage>
      <About />
    </InnerPage>
  );
}
