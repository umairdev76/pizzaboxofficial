import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { branches, waLink } from "@/lib/site-data";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Order — Pizza Box" },
      { name: "description", content: "Order via WhatsApp, call your nearest Pizza Box branch, or send us a message. We reply fast." },
      { property: "og:title", content: "Contact Pizza Box" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [selected, setSelected] = useState(branches[0].slug);
  const branch = branches.find((b) => b.slug === selected) ?? branches[0];
  const [sent, setSent] = useState(false);

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-8">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Get In Touch</div>
        <h1 className="mt-2 font-display text-6xl md:text-7xl">
          Let's Feed You <span className="text-gradient-fire">Tonight.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        {/* Branch selector + info */}
        <div className="card-surface p-6 md:p-10">
          <label className="text-xs uppercase tracking-widest text-muted-foreground">Choose your branch</label>
          <div className="mt-3 flex flex-wrap gap-2">
            {branches.map((b) => (
              <button
                key={b.slug}
                onClick={() => setSelected(b.slug)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest ${
                  selected === b.slug
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-white/10 text-muted-foreground hover:border-white/30 hover:text-foreground"
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>

          <div className="mt-8 space-y-4 text-sm">
            <div className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span className="text-muted-foreground">{branch.address}</span></div>
            <div className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /><a href={`tel:${branch.phone.replace(/[^\d+]/g, "")}`} className="hover:text-primary">{branch.phone}</a></div>
            <div className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span className="text-muted-foreground">{branch.hours}</span></div>
          </div>

          <a
            href={waLink(branch.whatsapp, `Hi! I'd like to order from Pizza Box ${branch.name}.`)}
            target="_blank" rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground glow-primary hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp {branch.name}
          </a>

          <div className="mt-8 overflow-hidden rounded-lg border border-white/5 aspect-video">
            <iframe
              title={`Map ${branch.name}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(branch.mapsQuery)}&z=14&output=embed`}
              className="h-full w-full border-0 grayscale contrast-125"
              loading="lazy"
            />
          </div>
        </div>

        {/* Contact form */}
        <div className="card-surface p-6 md:p-10">
          <h2 className="font-display text-3xl">Send Us a Message</h2>
          <p className="mt-2 text-sm text-muted-foreground">Feedback, event bookings, catering — we reply within a day.</p>

          {sent ? (
            <div className="mt-8 rounded-lg border border-primary/30 bg-primary/10 p-5 text-sm">
              🍕 Thanks! We got your message and will reach out shortly.
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="mt-6 space-y-4"
            >
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <input required className="mt-1 w-full rounded-md border border-white/10 bg-background/60 px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                <input required type="tel" className="mt-1 w-full rounded-md border border-white/10 bg-background/60 px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Branch</label>
                <select className="mt-1 w-full rounded-md border border-white/10 bg-background/60 px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                  {branches.map((b) => <option key={b.slug} value={b.slug}>{b.name}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea required rows={5} className="mt-1 w-full rounded-md border border-white/10 bg-background/60 px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <button className="w-full rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground glow-primary hover:brightness-110">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
