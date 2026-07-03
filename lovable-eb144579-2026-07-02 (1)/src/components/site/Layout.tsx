import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Reveal } from "./Motion";
import { sqs, sqsSrcSet } from "@/lib/img";

export function Layout({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Nav />
      <motion.main
        className="flex-1"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="border-b border-white/10">
      <div className="container-lux py-20 md:py-28 text-center">
        {eyebrow && (
          <Reveal y={12}>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">{eyebrow}</div>
          </Reveal>
        )}
        <Reveal delay={0.08}>
          <h1 className="font-display text-5xl md:text-7xl text-white">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl mx-auto text-white/70 text-lg">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function Gallery({ images }: { images: string[] }) {
  const reduce = useReducedMotion();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {images.map((src, i) => (
        <motion.figure
          key={src + i}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (i % 6) * 0.05 }}
          className="group relative aspect-[4/5] overflow-hidden bg-white/5"
        >
          <img
            src={sqs(src, 800)}
            srcSet={sqsSrcSet(src, [400, 800, 1200])}
            sizes="(min-width: 768px) 33vw, 50vw"
            alt=""
            loading="lazy"
            decoding="async"
            width={800}
            height={1000}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
        </motion.figure>
      ))}
    </div>
  );
}