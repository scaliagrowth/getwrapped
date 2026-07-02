import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { specialty } from "@/data/images";

const packages = [
  { title: "Starlight Headliner", img: specialty[0], note: "Fiber-optic starlight installs — mapped and hand-woven for a one-of-a-kind night sky." },
  { title: "Custom Painted Calipers", img: specialty[1], note: "Brake caliper refinishing in any color to complete your build." },
  { title: "Custom Car-Themed Tables", img: specialty[2], note: "One-off furniture pieces built from real automotive parts." },
];

export const Route = createFileRoute("/specialty-services")({
  head: () => ({ meta: [
    { title: "Specialty Services — Get Wrapped" },
    { name: "description", content: "Starlight headliners, custom painted calipers, car-themed tables and more." },
    { property: "og:title", content: "Specialty Services — Get Wrapped" },
    { property: "og:image", content: specialty[0] },
  ]}),
  component: () => (
    <Layout>
      <PageHeader
        eyebrow="Other Services"
        title="Specialty Services"
        subtitle="Explore our range of services designed to help you move forward with confidence, wherever you're headed next."
      />
      <section className="py-20">
        <div className="container-lux grid gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <div key={p.title} className="border border-white/10 hover:border-accent transition-colors group">
              <div className="aspect-[4/3] overflow-hidden bg-white/5">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{p.note}</p>
                <div className="mt-4 text-xs uppercase tracking-widest text-accent">Quote on request</div>
              </div>
            </div>
          ))}
        </div>
        <div className="container-lux mt-16 text-center">
          <p className="text-white/50 text-sm italic max-w-xl mx-auto mb-6">
            Pricing is quoted per project. Introductory, Essentials, Ultimate and fully custom packages are available.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-colors">
            Discuss your project
          </Link>
        </div>
      </section>
    </Layout>
  ),
});