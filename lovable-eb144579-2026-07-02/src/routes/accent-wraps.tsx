import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { accents } from "@/data/images";

export const Route = createFileRoute("/accent-wraps")({
  head: () => ({ meta: [
    { title: "Accent Wraps & Stripes — Get Wrapped" },
    { name: "description", content: "Chrome deletes, roof wraps, hoods, mirrors, stripes and accent details." },
    { property: "og:title", content: "Accent Wraps & Stripes — Get Wrapped" },
    { property: "og:image", content: accents[0] },
  ]}),
  component: () => (
    <ServicePage
      eyebrow="Colorchange Wraps"
      title="Accent Wraps & Stripes"
      intro="Chrome deletes, roof wraps, mirror caps, hood accents and racing stripes — subtle changes with serious presence."
      images={accents}
      bullets={["Chrome delete", "Roof, hood & mirror accents", "Custom stripes & liveries", "Blacked-out trim packages"]}
    />
  ),
});