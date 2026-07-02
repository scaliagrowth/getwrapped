import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Layout, PageHeader, Gallery } from "./Layout";

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
          <div className="container-lux grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bullets.map((b) => (
              <div key={b} className="flex gap-3 items-start">
                <span className="text-accent">✳︎</span>
                <span className="text-white/80 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </section>
      )}
      <section className="py-20">
        <div className="container-lux">
          <Gallery images={images} />
          <div className="mt-14 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-colors">
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}