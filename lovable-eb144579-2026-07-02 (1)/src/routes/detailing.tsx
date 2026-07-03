import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/detailing")({
  head: () => ({ meta: [
    { title: "Detailing — Get Wrapped" },
    { name: "description", content: "Detailing services to complement every wrap and tint project." },
    { property: "og:title", content: "Detailing — Get Wrapped" },
  ]}),
  component: () => (
    <Layout>
      <PageHeader
        eyebrow="Other Services"
        title="Detailing"
        subtitle="A properly prepped surface is the foundation of every install we do. Our detailing service ensures your vehicle looks — and stays — its best."
      />
      <section className="py-20">
        <div className="container-lux max-w-3xl text-center text-white/70 leading-relaxed">
          <p className="mb-6">
            We work hand in hand with local shops in the area to provide any services required for your vehicle, project or business — from custom powder coating and rim repair to back-up camera and stereo installations.
          </p>
          <p className="text-sm italic text-white/50">
            Detailing service details aren't listed on our current site. Reach out for a quote tailored to your vehicle.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-colors">
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  ),
});