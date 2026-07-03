import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white/70">
      <div className="container-lux py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={site.logo} alt="Get Wrapped" className="h-14 w-auto mb-4" />
          <p className="max-w-sm text-sm leading-relaxed">
            {site.tagline} Premium vehicle wraps, window tint and custom work.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-white mb-4">Services</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/printed-vehicle-wraps" className="hover:text-accent">Printed Vehicle Wraps</Link></li>
            <li><Link to="/color-change-wraps" className="hover:text-accent">Color Change Wraps</Link></li>
            <li><Link to="/window-tint" className="hover:text-accent">Window Tint</Link></li>
            <li><Link to="/specialty-services" className="hover:text-accent">Specialty Services</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-white mb-4">Studio</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            <li>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
                <Instagram className="h-4 w-4" /> @getwrapped
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-lux py-6 text-xs text-white/50 flex flex-wrap justify-between gap-2">
          <div>© {new Date().getFullYear()} Get Wrapped. All rights reserved.</div>
          <div>Premium Quality · Certified Installers · Fully Licensed & Insured</div>
        </div>
      </div>
    </footer>
  );
}