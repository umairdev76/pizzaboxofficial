import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { branches, waLink } from "@/lib/site-data";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/branches", label: "Branches" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [branch, setBranch] = useState(branches[0]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/85 backdrop-blur-md">
      {/* Top strip */}
      <div className="hidden md:block border-b border-white/5 bg-black/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span>Open Now · {branch.hours}</span>
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <span className="uppercase tracking-widest text-[10px] text-muted-foreground">Branch</span>
              <select
                value={branch.slug}
                onChange={(e) =>
                  setBranch(branches.find((b) => b.slug === e.target.value) ?? branches[0])
                }
                className="rounded-md border border-white/10 bg-surface px-2 py-1 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {branches.map((b) => (
                  <option key={b.slug} value={b.slug}>{b.name}</option>
                ))}
              </select>
            </label>
            <a href={`tel:${branch.phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-1 hover:text-primary">
              <Phone className="h-3 w-3" /> {branch.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary font-display text-xl text-primary-foreground glow-primary">
            P
          </span>
          <div className="leading-tight">
            <div className="font-display text-2xl tracking-wide">PIZZA BOX</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold">We Serve Happiness</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink(branch.whatsapp, `Hi! I'd like to order from Pizza Box ${branch.name}.`)}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:brightness-110 glow-primary"
          >
            Order Now
          </a>
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-white/5 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={waLink(branch.whatsapp)}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Order on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
