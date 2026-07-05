import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Users, Baby, Bike, MapPin, Phone, ArrowRight, Star, Quote } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { branches, menuItems, testimonials, waLink } from "@/lib/site-data";
import heroImg from "@/assets/hero-rooftop.jpg";
import interior from "@/assets/interior.jpg";
import playland from "@/assets/playland.jpg";
import delivery from "@/assets/delivery.jpg";
import doner from "@/assets/pizza-doner-malai.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pizza Box Sambrial — Rooftop Dining, Fiery Pizza & Family Nights" },
      { name: "description", content: "The rooftop that made Sambrial famous. Dine-in, delivery & family nights across Sambrial, Adamkay, Daska and Sialkot." },
      { property: "og:title", content: "Pizza Box Sambrial — Rooftop Dining & Fiery Pizza" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = menuItems.slice(0, 8);
  const main = branches[0];

  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Pizza Box rooftop at night"
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 py-24">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              Rooftop is open tonight
            </div>
            <h1 className="mt-6 font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.9] tracking-wide">
              We Serve <span className="text-gradient-fire">Happiness</span>
              <span className="ml-2">🍕</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Rooftop dining · Dine-in · Delivery · Family & friends. Born in Sambrial, loved across Sialkot district.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={waLink(main.whatsapp, `Hi! I'd like to place an order from Pizza Box ${main.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground glow-primary hover:brightness-110"
              >
                Order on WhatsApp
              </a>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-white/10"
              >
                View Menu <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1 text-gold">
                {[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <span>Loved by families across Sialkot district</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE STRIP */}
      <section className="border-y border-white/5 bg-black/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { Icon: Building2, label: "Rooftop Dining" },
            { Icon: Users, label: "Family Friendly" },
            { Icon: Baby, label: "Kids Playland" },
            { Icon: Bike, label: "Home Delivery" },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <div className="grid h-14 w-14 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED MENU */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between">
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Straight From The Oven</div>
            <h2 className="mt-2 font-display text-4xl sm:text-6xl">The Favorites</h2>
          </div>
          <Link to="/menu" className="shrink-0 text-sm uppercase tracking-widest text-primary hover:underline">
            Full Menu →
          </Link>
        </div>

        <div className="mt-10 -mx-4 sm:mx-0 overflow-x-auto pb-4 sm:overflow-visible">
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4 sm:px-0">
            {featured.map((item) => (
              <article
                key={item.name}
                className="card-surface hover-glow group min-w-[260px] sm:min-w-0 overflow-hidden flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-2xl tracking-wide">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1">{item.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-semibold text-gold">{item.price}</span>
                    <a
                      href={waLink(main.whatsapp, `Hi! I'd like to order ${item.name} from Pizza Box.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      Order
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DONER SPOTLIGHT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 items-center card-surface overflow-hidden">
          <div className="relative aspect-square md:aspect-auto md:h-full">
            <img src={doner} alt="Doner Malai Pizza" width={1024} height={1024} loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background md:block hidden" />
          </div>
          <div className="p-8 md:p-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-[10px] uppercase tracking-widest text-gold">
              Chef's Special · Fan Favorite
            </div>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">Doner Malai Pizza</h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              The pizza people drive from Sialkot to eat. Creamy malai sauce, tender doner-spiced chicken, blistered crust and stretchy mozzarella that never quits.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink(main.whatsapp, "Hi! I'd like to order Doner Malai Pizza from Pizza Box.")}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground glow-primary hover:brightness-110"
              >
                Order Now
              </a>
              <Link to="/menu" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-white/5">
                See Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Our Story</div>
          <h2 className="mt-2 font-display text-5xl md:text-6xl">Born in Sambrial.<br />Loved across Sialkot.</h2>
          <p className="mt-6 text-muted-foreground">
            What started as a small pizza kitchen on Wazirabad Road turned into the rooftop everyone talks about. Four branches later, we're still the same — fresh dough every morning, injected broast marinated overnight, and a rooftop that turns into magic after sunset.
          </p>
          <p className="mt-4 text-muted-foreground">
            We're not a chain. We're your neighborhood — with better lighting and hotter cheese.
          </p>
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-primary hover:underline">
            Read our story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img src={interior} alt="Interior" width={1600} height={1024} loading="lazy" className="rounded-lg aspect-[4/5] object-cover row-span-2" />
          <img src={playland} alt="Kids playland" width={1024} height={1024} loading="lazy" className="rounded-lg aspect-square object-cover" />
          <img src={delivery} alt="Delivery" width={1024} height={1024} loading="lazy" className="rounded-lg aspect-square object-cover" />
        </div>
      </section>

      {/* BRANCHES */}
      <section className="bg-black/30 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Find Us</div>
          <h2 className="mt-2 font-display text-5xl md:text-6xl">Four Branches. One Vibe.</h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {branches.map((b) => (
              <div key={b.slug} className="card-surface hover-glow p-6 flex flex-col">
                <div className="flex items-center gap-2 text-gold">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-widest">Branch</span>
                </div>
                <h3 className="mt-2 font-display text-3xl">{b.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{b.address}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {b.features.slice(0, 2).map((f) => (
                    <span key={f} className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">{f}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                  <a href={`tel:${b.phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-1.5 text-sm text-foreground hover:text-primary">
                    <Phone className="h-3.5 w-3.5" /> {b.phone}
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.mapsQuery)}`}
                    target="_blank" rel="noreferrer"
                    className="text-xs text-primary hover:underline"
                  >
                    Map ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="text-xs uppercase tracking-[0.3em] text-gold text-center">Real Reviews</div>
        <h2 className="mt-2 font-display text-5xl md:text-6xl text-center">Customer Love</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-surface p-6 flex flex-col">
              <Quote className="h-6 w-6 text-primary/60" />
              <blockquote className="mt-3 text-sm text-foreground/90 flex-1">"{t.quote}"</blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">— {t.name}</figcaption>
              <div className="mt-2 flex text-gold">
                {[0,1,2,3,4].map((i) => <Star key={i} className="h-3 w-3 fill-current" />)}
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-primary/20 via-background to-background p-8 md:p-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -left-16 -bottom-16 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Hungry?</div>
              <h2 className="mt-2 font-display text-4xl md:text-6xl">Order in 30 seconds.</h2>
              <p className="mt-3 text-muted-foreground max-w-lg">
                Skip the wait — WhatsApp your nearest branch and we'll get it moving.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {branches.slice(0, 3).map((b) => (
                <a
                  key={b.slug}
                  href={waLink(b.whatsapp, `Hi! I'd like to order from Pizza Box ${b.name}.`)}
                  target="_blank" rel="noreferrer"
                  className="rounded-full bg-primary/10 border border-primary/30 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {b.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
