import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Music2, Ghost } from "lucide-react";
import { branches } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary font-display text-xl text-primary-foreground">P</span>
            <div className="leading-tight">
              <div className="font-display text-2xl">PIZZA BOX</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">We Serve Happiness</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Born in Sambrial. Loved across Sialkot district. Rooftop nights, family days, and food that tastes like home.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="https://instagram.com/theprojectofpizzabox" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 hover:border-primary hover:text-primary" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 hover:border-primary hover:text-primary" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 hover:border-primary hover:text-primary" aria-label="TikTok"><Music2 className="h-4 w-4" /></a>
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 hover:border-primary hover:text-primary" aria-label="Snapchat"><Ghost className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg tracking-widest text-gold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/menu" className="hover:text-foreground">Menu</Link></li>
            <li><Link to="/branches" className="hover:text-foreground">Branches</Link></li>
            <li><Link to="/gallery" className="hover:text-foreground">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-display text-lg tracking-widest text-gold">Our Branches</h4>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm">
            {branches.map((b) => (
              <li key={b.slug} className="rounded-lg border border-white/5 p-3">
                <div className="font-semibold">{b.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{b.address}</div>
                <a href={`tel:${b.phone.replace(/[^\d+]/g, "")}`} className="mt-1 inline-block text-xs text-primary hover:underline">
                  {b.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Pizza Box Sambrial. All rights reserved.</div>
          <div>Crafted with 🔥 in Sambrial, Punjab.</div>
        </div>
      </div>
    </footer>
  );
}
