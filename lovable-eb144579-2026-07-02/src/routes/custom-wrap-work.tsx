import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { custom } from "@/data/images";

export const Route = createFileRoute("/custom-wrap-work")({
  head: () => ({ meta: [
    { title: "Custom Wrap Work — Get Wrapped" },
    { name: "description", content: "One-of-one custom vinyl projects, from concept to install." },
    { property: "og:title", content: "Custom Wrap Work — Get Wrapped" },
    { property: "og:image", content: custom[0] },
  ]}),
  component: () => (
    <ServicePage
      eyebrow="Colorchange Wraps"
      title="Custom Wrap Work"
      intro="Bring us a vision — we handle the rest. Custom designs, prints and installs built collaboratively from the first sketch to the final squeegee."
      images={custom}
      bullets={["Custom design & print", "Bespoke liveries", "Prototype & one-off builds", "Full concept-to-install service"]}
    />
  ),
});