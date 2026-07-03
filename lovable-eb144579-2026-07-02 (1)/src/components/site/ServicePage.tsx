import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Layout, PageHeader, Gallery } from "./Layout";
import { Reveal, Stagger, Item } from "./Motion";

export function ServicePage({
  eyebrow,
  title,
  intro,
  images,
  bullets,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  images: string[];
  bullets?: string[];
}) {
  return (
    <Layout>
      <PageHeader eyebrow={eyebrow} title={title} subtitle={intro} />
      {bullets && (
        <section className="border-b border-white/10 py-12">
          <Stagger className="container-lux grid gap-6 sm:grid-cols-2 lg:grid-cols-4" delay={0.06}>
            {bullets.map((b) => (
              <Item key={b} className="flex gap-3 items-start">
                <span className="text-accent">✳︎</span>
                <span className="text-white/80 text-sm">{b}</span>
              </Item>
            ))}
          </Stagger>
        </section>
      )}
      <section className="py-20">
        <div className="container-lux">
          <Gallery images={images} />
          <Reveal className="mt-14 text-center">
            <Link to="/contact" className="group inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_oklch(0.58_0.22_25_/_0.6)]">
              Start a project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}