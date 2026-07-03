import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader, Gallery } from "@/components/site/Layout";
import { gallery } from "@/data/images";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [
    { title: "Gallery — Get Wrapped" },
    { name: "description", content: "A selection of our recent projects — every one bringing someone's vision to reality." },
    { property: "og:title", content: "Gallery — Get Wrapped" },
    { property: "og:image", content: gallery[0] },
  ]}),
  component: () => (
    <Layout>
      <PageHeader
        eyebrow="Portfolio"
        title="Gallery"
        subtitle="Take a look at a selection of our recent projects — every one bringing someone's vision to reality."
      />
      <section className="py-20">
        <div className="container-lux">
          <Gallery images={gallery} />
        </div>
      </section>
    </Layout>
  ),
});