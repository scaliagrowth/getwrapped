import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { colorChange } from "@/data/images";

export const Route = createFileRoute("/color-change-wraps")({
  head: () => ({ meta: [
    { title: "Full Color Change Wraps — Get Wrapped" },
    { name: "description", content: "Full color change vinyl wraps in premium finishes — matte, satin, gloss and specialty." },
    { property: "og:title", content: "Full Color Change Wraps — Get Wrapped" },
    { property: "og:image", content: colorChange[0] },
  ]}),
  component: () => (
    <ServicePage
      eyebrow="Colorchange Wraps"
      title="Full Color Change Wraps"
      intro="Transform your vehicle without a drop of paint. A full color change wrap protects your factory finish and lets you commit to a look you'll actually love."
      images={colorChange}
      bullets={["Matte, satin, gloss & specialty finishes", "Reversible — protects OEM paint", "Every seam wrapped to perfection", "Premium films only"]}
    />
  ),
});