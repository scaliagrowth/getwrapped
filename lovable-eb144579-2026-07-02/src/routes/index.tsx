import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Instagram } from "lucide-react";
import { Layout, Gallery } from "@/components/site/Layout";
import { hero, home, colorChange, printedWraps, windowTint } from "@/data/images";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({ component: Index });

const marqueeItems = [
  "Premium Quality",
  "Certified Installers",
  "Fully Licensed and Insured",
  "Custom Designs and Prints",
  "Comprehensive Services",
  "Collaborative Relationships",
];

const testimonials = [
  { q: "Every detail was thoughtfully executed. We're thrilled with the outcome.", a: "Former Customer" },
  { q: "Their attention to detail and commitment to quality truly stood out. We've already recommended them to others.", a: "Former Customer" },
  { q: "Communication was top-notch and the final outcome was even better than we imagined. A great experience all around.", a: "Former Customer" },
];

const services = [
  { title: "Color Change Wraps", to: "/color-change-wraps", img: colorChange[0] },
  { title: "Printed Vehicle Wraps", to: "/printed-vehicle-wraps", img: printedWraps[0] },
  { title: "Window Tint", to: "/window-tint", img: windowTint[0] },
  { title: "Custom Wrap Work", to: "/custom-wrap-work", img: home[5] },
];

function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <img src={hero} alt="Get Wrapped signature installation" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
        <div className="relative container-lux pb-24 md:pb-32">
          <div className="text-xs uppercase tracking-[0.4em] text-accent mb-6">Get Wrapped</div>
          <h1 className="font-display text-5xl md:text-8xl leading-[0.95] text-white max-w-4xl">
            Bringing visions <br/> <span className="italic text-white/90">to life.</span>
          </h1>
          <p className="mt-6 font-script text-3xl md:text-4xl text-accent">It's all in the details.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm uppercase tracking-widest font-medium hover:bg-accent hover:text-white transition-colors">
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/gallery" className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 text-sm uppercase tracking-widest font-medium hover:border-accent hover:text-accent transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-white/10 bg-black overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite] py-5">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((t, i) => (
            <div key={i} className="flex items-center gap-6 px-6 font-display text-2xl text-white/90">
              {t} <span className="text-accent">✳︎</span>
            </div>
          ))}
        </div>
        <style>{`@keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-33.333%)} }`}</style>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32">
        <div className="container-lux">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Our Services</div>
              <h2 className="font-display text-4xl md:text-6xl text-white max-w-2xl">A complete studio for anything vinyl.</h2>
            </div>
            <Link to="/gallery" className="text-sm uppercase tracking-widest text-white/70 hover:text-accent">Full Gallery →</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link key={s.to} to={s.to} className="group relative aspect-[3/4] overflow-hidden bg-white/5">
                <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl text-white">{s.title}</h3>
                  <div className="mt-2 text-xs uppercase tracking-widest text-accent inline-flex items-center gap-1 opacity-80 group-hover:opacity-100">
                    Explore <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 md:py-32 border-t border-white/10 bg-[oklch(0.09_0_0)]">
        <div className="container-lux grid gap-16 lg:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Why Choose Us</div>
            <h2 className="font-display text-4xl md:text-6xl text-white leading-tight">No shortcuts.<br/><span className="italic">No compromises.</span></h2>
            <p className="mt-6 text-white/70 max-w-lg leading-relaxed">
              We only use the finest materials from trusted brands to ensure every edge, seam and contour will stand the test of time. Our highly trained team ensures precision and excellence, making sure the job is done right the first time.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { t: "Premium Quality", d: "Only the finest materials from trusted brands." },
              { t: "Certified Installers", d: "Precision and excellence, first time, every time." },
              { t: "Licensed & Insured", d: "Full peace of mind while your vehicle is in our care." },
              { t: "Comprehensive Services", d: "A one-stop shop for customization and repair." },
            ].map((c) => (
              <div key={c.t} className="border border-white/10 p-6 hover:border-accent transition-colors">
                <div className="text-accent font-display text-3xl mb-2">✳︎</div>
                <div className="font-display text-xl text-white">{c.t}</div>
                <div className="mt-2 text-sm text-white/60 leading-relaxed">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent work */}
      <section className="py-24 md:py-32">
        <div className="container-lux">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Recent Work</div>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-14">Rolling works of art.</h2>
          <Gallery images={home.slice(0, 12)} />
          <div className="mt-10 text-center">
            <Link to="/gallery" className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-colors">
              See the full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 border-t border-white/10 bg-[oklch(0.09_0_0)]">
        <div className="container-lux">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3 text-center">What clients say</div>
          <div className="grid md:grid-cols-3 gap-10 mt-12">
            {testimonials.map((t, i) => (
              <figure key={i} className="border-t border-accent pt-6">
                <blockquote className="font-display text-xl md:text-2xl text-white leading-snug italic">"{t.q}"</blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-widest text-white/60">— {t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-24 border-t border-white/10">
        <div className="container-lux text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Follow along</div>
          <h2 className="font-display text-4xl md:text-5xl text-white">See every build in real time.</h2>
          <a href={site.instagram} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-colors">
            <Instagram className="h-4 w-4" /> @getwrapped
          </a>
        </div>
      </section>
    </Layout>
  );
}
