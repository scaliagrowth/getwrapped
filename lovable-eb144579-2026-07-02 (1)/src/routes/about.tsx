import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { home } from "@/data/images";

const values = ["Premium Quality","Certified Installers","Fully Licensed and Insured","Custom Designs and Prints","Comprehensive Services","Collaborative Relationships"];

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — Get Wrapped" },
    { name: "description", content: "At Get Wrapped, we believe a vehicle is more than just a way to get from point A to point B — it's a statement." },
    { property: "og:title", content: "About — Get Wrapped" },
    { property: "og:image", content: home[5] },
  ]}),
  component: () => (
    <Layout>
      <section className="border-b border-white/10">
        <div className="container-lux py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Who we are</div>
            <h1 className="font-display text-5xl md:text-7xl text-white leading-[0.95]">Your vision. <br/><span className="italic">Our craft.</span> <br/>Unmatched results.</h1>
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <img src={home[5]} alt="Get Wrapped studio" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-lux max-w-3xl space-y-6 text-white/80 leading-relaxed text-lg">
          <p>At Get Wrapped, we believe a vehicle is more than just a way to get from point A to point B — it's a statement. A reflection of who you are, what you stand for, and how you want the world to see you.</p>
          <p>Our journey began with a passion for cars and a deep respect for craftsmanship. What started as a love for clean lines, bold designs, and flawless finishes has grown into a mission: to transform vehicles into rolling works of art while delivering quality you can see and feel.</p>
          <p>We specialize in premium car wraps that combine creativity, precision, and durability. Whether you're looking to turn heads with a custom color change, protect your paint with a high-quality wrap, or elevate your brand with a commercial fleet design, we approach every project with the same level of care and attention to detail.</p>
          <p>What sets us apart is our commitment to excellence. We use only trusted materials, proven techniques, and take the time to ensure every edge, curve, and contour is wrapped to perfection. No shortcuts. No compromises.</p>
          <p>But beyond the vinyl and tools, our business is built on relationships. We listen. We collaborate. We make sure your vision comes to life exactly the way you imagined — or better.</p>
          <p className="font-display text-2xl text-white pt-4">At Get Wrapped, we don't just wrap cars. We protect them. We personalize them. We elevate them.</p>
        </div>
      </section>

      <section className="py-20 border-t border-white/10 bg-[oklch(0.09_0_0)]">
        <div className="container-lux">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v} className="border border-white/10 p-8 text-center hover:border-accent transition-colors">
                <div className="text-accent mb-3">⋅</div>
                <div className="font-display text-2xl text-white">{v}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-colors">
              Work with us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  ),
});