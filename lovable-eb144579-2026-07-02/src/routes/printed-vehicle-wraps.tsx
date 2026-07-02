import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { printedWraps } from "@/data/images";

export const Route = createFileRoute("/printed-vehicle-wraps")({
  head: () => ({ meta: [
    { title: "Printed Vehicle Wraps — Get Wrapped" },
    { name: "description", content: "Full-print vehicle wraps and lettering that turn your fleet into a mobile billboard." },
    { property: "og:title", content: "Printed Vehicle Wraps — Get Wrapped" },
    { property: "og:image", content: printedWraps[0] },
  ]}),
  component: () => (
    <ServicePage
      eyebrow="Commercial Marketing Wraps"
      title="Printed Vehicle Wraps"
      intro="Full-print wraps and precision lettering that turn every vehicle into a moving statement for your brand."
      images={printedWraps}
      bullets={["Full-color printed graphics", "Custom lettering & logos", "Fleet-consistent finishes", "Durable outdoor-grade vinyl"]}
    />
  ),
});