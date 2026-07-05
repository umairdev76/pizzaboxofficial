import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import hero from "@/assets/hero-rooftop.jpg";
import interior from "@/assets/interior.jpg";
import playland from "@/assets/playland.jpg";
import delivery from "@/assets/delivery.jpg";
import doner from "@/assets/pizza-doner-malai.jpg";
import supreme from "@/assets/pizza-supreme.jpg";
import broast from "@/assets/broast.jpg";
import burger from "@/assets/burger.jpg";
import wings from "@/assets/wings.jpg";
import shake from "@/assets/shake.jpg";
import brownie from "@/assets/brownie.jpg";
import karahi from "@/assets/karahi.jpg";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Pizza Box Rooftop, Food & Family Moments" },
      { name: "description", content: "See the rooftop that made us famous, our food up close, and the families that call Pizza Box home." },
      { property: "og:title", content: "Gallery — Pizza Box" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const tabs = ["Rooftop & Ambiance", "Food & Drinks", "Family Moments"] as const;

const media = {
  "Rooftop & Ambiance": [hero, interior, hero, interior],
  "Food & Drinks": [doner, burger, broast, wings, supreme, shake, brownie, karahi],
  "Family Moments": [playland, interior, delivery, playland],
};

function GalleryPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Rooftop & Ambiance");
  const [zoom, setZoom] = useState<string | null>(null);
  const items = media[tab];

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-6">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">The Vibe</div>
        <h1 className="mt-2 font-display text-6xl md:text-7xl">Step Inside</h1>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-4 flex gap-2 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
              tab === t
                ? "border-primary bg-primary text-primary-foreground"
                : "border-white/10 text-muted-foreground hover:border-white/30 hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {items.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setZoom(src)}
              className="mb-4 block w-full overflow-hidden rounded-lg border border-white/5 group"
            >
              <img
                src={src}
                alt="Pizza Box gallery"
                loading="lazy"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </section>

      {zoom && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setZoom(null)}
        >
          <button className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
          <img src={zoom} alt="" className="max-h-[90vh] max-w-full rounded-lg object-contain" />
        </div>
      )}
    </SiteShell>
  );
}
