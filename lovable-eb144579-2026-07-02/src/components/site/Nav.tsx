import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav, site } from "@/data/site";

export function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-white/10">
      <div className="container-lux flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={site.logo} alt="Get Wrapped" className="h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpen(item.label)}
              onMouseLeave={() => setOpen(null)}
            >
              {item.to ? (
                <Link
                  to={item.to}
                  className="px-4 py-2 text-sm tracking-wide uppercase text-white/90 hover:text-accent transition-colors"
                  activeProps={{ className: "px-4 py-2 text-sm tracking-wide uppercase text-accent" }}
                >
                  {item.label}
                </Link>
              ) : (
                <button className="px-4 py-2 text-sm tracking-wide uppercase text-white/90 hover:text-accent transition-colors inline-flex items-center gap-1">
                  {item.label}
                  <ChevronDown className="h-3 w-3" />
                </button>
              )}
              {item.children && open === item.label && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="min-w-[280px] bg-black border border-white/10 shadow-2xl py-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block px-4 py-3 text-sm text-white/85 hover:bg-white/5 hover:text-accent transition-colors"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <button className="lg:hidden text-white" onClick={() => setMobile(!mobile)} aria-label="Menu">
          {mobile ? <X /> : <Menu />}
        </button>
      </div>

      {mobile && (
        <div className="lg:hidden border-t border-white/10 bg-black">
          <div className="container-lux py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <div key={item.label} className="py-1">
                {item.to ? (
                  <Link to={item.to} onClick={() => setMobile(false)} className="block py-2 text-sm uppercase tracking-wide text-white/90">
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <div className="py-2 text-xs uppercase tracking-widest text-accent">{item.label}</div>
                    <div className="pl-3 flex flex-col">
                      {item.children?.map((c) => (
                        <Link key={c.to} to={c.to} onClick={() => setMobile(false)} className="py-2 text-sm text-white/80">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}