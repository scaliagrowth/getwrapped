import { Link } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav, site } from "@/data/site";

export function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const closeOpen = useCallback(() => {
    setOpen((cur) => (cur === null ? cur : null));
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-white/10"
    >
      <div className="container-lux flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-[1.03] duration-300">
          <img src={site.logo} alt="Get Wrapped" className="h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpen(item.label)}
              onMouseLeave={closeOpen}
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
              <AnimatePresence>
                {item.children && open === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="min-w-[280px] bg-black border border-white/10 shadow-2xl py-2">
                      {item.children.map((c, i) => (
                        <motion.div
                          key={c.to}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: i * 0.03 }}
                        >
                          <Link
                            to={c.to}
                            className="block px-4 py-3 text-sm text-white/85 hover:bg-white/5 hover:text-accent hover:pl-6 transition-all duration-200"
                          >
                            {c.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <button className="lg:hidden text-white" onClick={() => setMobile(!mobile)} aria-label="Menu">
          {mobile ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden border-t border-white/10 bg-black overflow-hidden"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}