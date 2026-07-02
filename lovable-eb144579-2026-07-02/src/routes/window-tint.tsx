import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { windowTint } from "@/data/images";

export const Route = createFileRoute("/window-tint")({
  head: () => ({ meta: [
    { title: "Window Tint — Get Wrapped" },
    { name: "description", content: "Premium automotive window tint for comfort, privacy and UV protection." },
    { property: "og:title", content: "Window Tint — Get Wrapped" },
    { property: "og:image", content: windowTint[0] },
  ]}),
  component: () => (
    <ServicePage
      eyebrow="Other Services"
      title="Window Tint"
      intro="Precision-cut, heat-shrunk automotive tint — for the comfort, privacy and finish your vehicle deserves."
      images={windowTint}
      bullets={["UV & heat rejection", "Privacy & security", "Multiple shade options", "Clean, bubble-free installs"]}
    />
  ),
});