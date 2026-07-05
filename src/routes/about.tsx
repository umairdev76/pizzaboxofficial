import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import interior from "@/assets/interior.jpg";
import hero from "@/assets/hero-rooftop.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Pizza Box, Born in Sambrial" },
      { name: "description", content: "The story of Pizza Box: from one kitchen in Sambrial to four branches across Sialkot district. We serve happiness." },
      { property: "og:title", content: "About Pizza Box" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-24">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Our Story</div>
          <h1 className="mt-2 font-display text-6xl md:text-8xl max-w-3xl">
            We didn't set out to build a chain.<br />
            <span className="text-gradient-fire">We built a rooftop.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          Pizza Box started as one small kitchen on Wazirabad Road in Sambrial. No investors, no marketing team — just fresh dough, a wood-fed oven, and a family that believed food should be an experience.
        </p>
        <p>
          Then we opened the rooftop. Suddenly, families from Sialkot were driving in for dinner. Couples were coming for anniversaries. Cricket teams were celebrating wins under our string lights. Sambrial had a rooftop that felt like a city.
        </p>
        <p>
          Today we're four branches — Sambrial, Adamkay, Daska and Sialkot — but the recipe is the same. Fresh, hot, honest food. Marinated overnight. Made to order. Served with a smile.
        </p>
        <p className="text-foreground font-semibold">
          That's what "We Serve Happiness" means. It's not a tagline. It's the job description.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { n: "4", l: "Branches" },
            { n: "6+", l: "Years Serving" },
            { n: "50k+", l: "Happy Customers" },
            { n: "3", l: "Cities Served" },
          ].map((s) => (
            <div key={s.l} className="card-surface p-6 text-center">
              <div className="font-display text-5xl text-gradient-fire">{s.n}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-10 md:grid-cols-2 items-center">
        <img src={interior} alt="Pizza Box interior" width={1600} height={1024} loading="lazy" className="rounded-lg" />
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold">What We Believe</div>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">Fresh Food. Family Vibes. Local Soul.</h2>
          <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
            <li><span className="text-foreground font-semibold">Fresh, always.</span> Dough kneaded daily. Broast marinated 24 hours. No shortcuts.</li>
            <li><span className="text-foreground font-semibold">Family first.</span> Kids' playland, dedicated family seating, and space for the whole gang.</li>
            <li><span className="text-foreground font-semibold">Community-owned.</span> Local team, local suppliers, local love.</li>
          </ul>
          <Link to="/menu" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground glow-primary hover:brightness-110">
            See the Menu
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
