import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { menuCategories, menuItems, branches, waLink } from "@/lib/site-data";
import { Flame } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Pizza Box Sambrial" },
      { name: "description", content: "Pizzas, burgers, injected broast, wings, desi food, shakes and desserts. Full menu with prices, order via WhatsApp." },
      { property: "og:title", content: "Menu — Pizza Box" },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState("All");
  const main = branches[0];
  const items = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-8">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">The Full Menu</div>
        <h1 className="mt-2 font-display text-6xl md:text-7xl">
          Taste The <span className="text-gradient-fire">Happiness</span>
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Every item is made-to-order in our kitchen. Prices in PKR. Tap Order to WhatsApp your nearest branch.
        </p>
      </section>

      {/* Filters */}
      <section className="sticky top-[62px] z-40 border-y border-white/5 bg-background/85 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex gap-2 overflow-x-auto">
          {menuCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                active === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-white/10 text-muted-foreground hover:border-white/30 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.name + item.category} className="card-surface hover-glow overflow-hidden flex flex-col group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.badge && (
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                    <Flame className="h-3 w-3" /> {item.badge}
                  </span>
                )}
                <span className="absolute right-3 top-3 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest text-gold">
                  {item.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-2xl tracking-wide">{item.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{item.description}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xl font-bold text-gold">{item.price}</span>
                  <a
                    href={waLink(main.whatsapp, `Hi! I'd like to order ${item.name} from Pizza Box.`)}
                    target="_blank" rel="noreferrer"
                    className="rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground hover:brightness-110"
                  >
                    Order
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {items.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No items in this category yet.</p>
        )}
      </section>
    </SiteShell>
  );
}
