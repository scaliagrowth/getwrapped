import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Instagram } from "lucide-react";
import { Layout, Gallery } from "@/components/site/Layout";
import { Reveal, Stagger, Item } from "@/components/site/Motion";
import { hero, home, colorChange, printedWraps, windowTint } from "@/data/images";
import { site } from "@/data/site";
import { sqs, sqsSrcSet } from "@/lib/img";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      {
        rel: "preload",
        as: "image",
        href: sqs(hero, 1600),
        imageSrcSet: sqsSrcSet(hero, [750, 1200, 1600, 2000]),
        imageSizes: "100vw",
        fetchpriority: "high",
      },
    ],
  }),
  component: Index,
});

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
  const heroRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-end overflow-hidden">
        <motion.img
          src={sqs(hero, 1600)}
          srcSet={sqsSrcSet(hero, [750, 1200, 1600, 2000])}
          sizes="100vw"
          fetchPriority="high"
          decoding="async"
          alt="Get Wrapped signature installation"
          style={reduce ? undefined : { y: heroY, scale: heroScale, opacity: heroOpacity }}
          initial={reduce ? false : { scale: 1.15, opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
        <div className="relative container-lux pb-24 md:pb-32">
          <motion.div
            initial={reduce ? false : "hidden"}
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
              className="text-xs uppercase tracking-[0.4em] text-accent mb-6"
            >
              Get Wrapped
            </motion.div>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } } }}
              className="font-display text-5xl md:text-8xl leading-[0.95] text-white max-w-4xl"
            >
              Bringing visions <br /> <span className="italic text-white/90">to life.</span>
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }}
              className="mt-6 font-script text-3xl md:text-4xl text-accent"
            >
              It's all in the details.
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Link to="/contact" className="group inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm uppercase tracking-widest font-medium hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_oklch(0.58_0.22_25_/_0.6)]">
                Start a Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/gallery" className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 text-sm uppercase tracking-widest font-medium hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-0.5">
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
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
      </section>

      {/* Services */}
      <section className="py-24 md:py-32">
        <div className="container-lux">
          <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Our Services</div>
              <h2 className="font-display text-4xl md:text-6xl text-white max-w-2xl">A complete studio for anything vinyl.</h2>
            </div>
            <Link to="/gallery" className="text-sm uppercase tracking-widest text-white/70 hover:text-accent">Full Gallery →</Link>
          </Reveal>
          <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" delay={0.08}>
            {services.map((s) => (
              <Item key={s.to}>
                <Link to={s.to} className="group relative block aspect-[3/4] overflow-hidden bg-white/5">
                  <img
                    src={sqs(s.img, 700)}
                    srcSet={sqsSrcSet(s.img, [400, 700, 1000])}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    width={700}
                    height={933}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/95" />
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-display text-2xl text-white">{s.title}</h3>
                    <div className="mt-2 text-xs uppercase tracking-widest text-accent inline-flex items-center gap-1 opacity-80 group-hover:opacity-100">
                      Explore <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 md:py-32 border-t border-white/10 bg-[oklch(0.09_0_0)]">
        <div className="container-lux grid gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Why Choose Us</div>
            <h2 className="font-display text-4xl md:text-6xl text-white leading-tight">No shortcuts.<br/><span className="italic">No compromises.</span></h2>
            <p className="mt-6 text-white/70 max-w-lg leading-relaxed">
              We only use the finest materials from trusted brands to ensure every edge, seam and contour will stand the test of time. Our highly trained team ensures precision and excellence, making sure the job is done right the first time.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-6" delay={0.1}>
            {[
              { t: "Premium Quality", d: "Only the finest materials from trusted brands." },
              { t: "Certified Installers", d: "Precision and excellence, first time, every time." },
              { t: "Licensed & Insured", d: "Full peace of mind while your vehicle is in our care." },
              { t: "Comprehensive Services", d: "A one-stop shop for customization and repair." },
            ].map((c) => (
              <Item key={c.t} className="border border-white/10 p-6 hover:border-accent transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.02]">
                <div className="text-accent font-display text-3xl mb-2">✳︎</div>
                <div className="font-display text-xl text-white">{c.t}</div>
                <div className="mt-2 text-sm text-white/60 leading-relaxed">{c.d}</div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Recent work */}
      <section className="py-24 md:py-32">
        <div className="container-lux">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Recent Work</div>
            <h2 className="font-display text-4xl md:text-6xl text-white mb-14">Rolling works of art.</h2>
          </Reveal>
          <Gallery images={home.slice(0, 12)} />
          <Reveal className="mt-10 text-center">
            <Link to="/gallery" className="group inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-0.5">
              See the full gallery <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 border-t border-white/10 bg-[oklch(0.09_0_0)]">
        <div className="container-lux">
          <Reveal className="text-xs uppercase tracking-[0.3em] text-accent mb-3 text-center">What clients say</Reveal>
          <Stagger className="grid md:grid-cols-3 gap-10 mt-12" delay={0.12}>
            {testimonials.map((t, i) => (
              <Item key={i} className="border-t border-accent pt-6">
                <blockquote className="font-display text-xl md:text-2xl text-white leading-snug italic">&ldquo;{t.q}&rdquo;</blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-widest text-white/60">— {t.a}</figcaption>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-24 border-t border-white/10">
        <Reveal className="container-lux text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Follow along</div>
          <h2 className="font-display text-4xl md:text-5xl text-white">See every build in real time.</h2>
          <a href={site.instagram} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_oklch(0.58_0.22_25_/_0.6)]">
            <Instagram className="h-4 w-4" /> @getwrapped
          </a>
        </Reveal>
      </section>
    </Layout>
  );
}
