import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="border-b border-white/10">
      <div className="container-lux py-20 md:py-28 text-center">
        {eyebrow && <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">{eyebrow}</div>}
        <h1 className="font-display text-5xl md:text-7xl text-white">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl mx-auto text-white/70 text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}

export function Gallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {images.map((src, i) => (
        <figure key={src + i} className="group relative aspect-[4/5] overflow-hidden bg-white/5">
          <img
            src={src}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
        </figure>
      ))}
    </div>
  );
}