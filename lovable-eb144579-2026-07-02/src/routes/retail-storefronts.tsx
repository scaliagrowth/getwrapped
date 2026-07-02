import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { retail } from "@/data/images";

export const Route = createFileRoute("/retail-storefronts")({
  head: () => ({ meta: [
    { title: "Retail Businesses & Storefronts — Get Wrapped" },
    { name: "description", content: "Storefront graphics, window signage and interior branding for retail businesses." },
    { property: "og:title", content: "Retail Businesses & Storefronts — Get Wrapped" },
    { property: "og:image", content: retail[0] },
  ]}),
  component: () => (
    <ServicePage
      eyebrow="Commercial Marketing Wraps"
      title="Retail Businesses & Storefronts"
      intro="From window graphics to full storefront installs — signage that elevates the physical presence of your brand."
      images={retail}
      bullets={["Window & door graphics", "Wall murals", "Point-of-sale signage", "Cut vinyl & printed decals"]}
    />
  ),
});