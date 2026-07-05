import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { branches, waLink } from "@/lib/site-data";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "Our Branches — Pizza Box (Sambrial, Adamkay, Daska, Sialkot)" },
      { name: "description", content: "Visit Pizza Box at our four branches across Sialkot district. Addresses, phone numbers, opening hours & maps." },
      { property: "og:title", content: "Our Branches — Pizza Box" },
      { property: "og:url", content: "/branches" },
    ],
    links: [{ rel: "canonical", href: "/branches" }],
  }),
  component: BranchesPage,
});

function BranchesPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-8">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Find Your Pizza Box</div>
        <h1 className="mt-2 font-display text-6xl md:text-7xl">Four Locations. One Family.</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Every branch has its own personality. All of them serve happiness.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 space-y-16">
        {branches.map((b, idx) => (
          <article key={b.slug} className={`grid gap-8 md:grid-cols-2 items-stretch ${idx % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="card-surface overflow-hidden aspect-[4/3] md:aspect-auto">
              <iframe
                title={`Map ${b.name}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(b.mapsQuery)}&z=14&output=embed`}
                className="h-full w-full border-0 grayscale contrast-125"
                loading="lazy"
              />
            </div>
            <div className="card-surface p-8 md:p-10 flex flex-col">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Branch {String(idx + 1).padStart(2, "0")}</div>
              <h2 className="mt-2 font-display text-4xl md:text-5xl">{b.name}</h2>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span className="text-muted-foreground">{b.address}</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <a href={`tel:${b.phone.replace(/[^\d+]/g, "")}`} className="hover:text-primary">{b.phone}</a>
                </div>
                <div className="flex gap-3">
                  <Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span className="text-muted-foreground">{b.hours}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {b.features.map((f) => (
                  <span key={f} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">{f}</span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <a
                  href={waLink(b.whatsapp, `Hi! I'd like to order from Pizza Box ${b.name}.`)}
                  target="_blank" rel="noreferrer"
                  className="rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground glow-primary hover:brightness-110"
                >
                  WhatsApp Order
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.mapsQuery)}`}
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-white/5"
                >
                  Directions <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
