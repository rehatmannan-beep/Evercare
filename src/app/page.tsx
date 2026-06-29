import Link from "next/link";
import { services } from "@/data/services";
import { segments } from "@/data/segments";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import { areas } from "@/data/areas";
import { siteConfig } from "@/data/site";
import { ServiceCard } from "@/components/ServiceCard";
import { ProductCard } from "@/components/ProductCard";
import { SeasonalPanel } from "@/components/SeasonalPanel";
import { CTABand } from "@/components/CTABand";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-sand overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(120%_95%_at_100%_0%,rgba(28,93,76,.10),transparent_55%)] pointer-events-none" />
        <div className="max-w-[1140px] mx-auto px-[26px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[52px] items-center py-20 lg:py-[80px]">
            <div>
              <span className="eyebrow">Property management &amp; care · NY &amp; NJ</span>
              <h1 className="font-display font-extrabold text-ink mt-5" style={{ fontSize: "clamp(2.5rem, 5.4vw, 4.2rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                One call.{" "}
                <span className="relative whitespace-nowrap text-pine">
                  Every season.
                  <span className="absolute left-0 right-0 bottom-[0.05em] h-[0.16em] bg-amber opacity-50 rounded-sm -z-10" />
                </span>{" "}
                Your property, handled.
              </h1>
              <p className="text-stone text-lg mt-6 mb-8 max-w-[34ch]">
                Full-service property management plus the crews to back it up — for homeowners, Airbnb hosts, and commercial properties. One dependable team, one number, all year.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact" className="btn btn-primary">Get my free quote</Link>
                <a href={siteConfig.phoneHref} className="btn btn-ghost">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[17px] h-[17px]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  Call now
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mt-9">
                <span className="inline-flex items-center gap-2 bg-white border border-line px-3.5 py-2 rounded-full text-sm font-medium text-ink">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] text-pine"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  Licensed &amp; insured
                </span>
                <span className="inline-flex items-center gap-2 bg-white border border-line px-3.5 py-2 rounded-full text-sm font-medium text-ink">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] text-pine"><path d="M20 6L9 17l-5-5" /></svg>
                  Free estimates
                </span>
                <span className="inline-flex items-center gap-2 bg-white border border-line px-3.5 py-2 rounded-full text-sm font-medium text-ink">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] text-pine"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                  Fast response
                </span>
                <span className="inline-flex items-center gap-2 bg-white border border-line px-3.5 py-2 rounded-full text-sm font-medium text-ink">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] text-pine"><path d="M12 21s-6-5.5-6-10a6 6 0 0 1 12 0c0 4.5-6 10-6 10z" /><circle cx="12" cy="11" r="2" /></svg>
                  NY &amp; NJ
                </span>
              </div>
            </div>
            <div>
              <SeasonalPanel />
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-[90px] max-md:py-16">
        <div className="max-w-[1140px] mx-auto px-[26px]">
          <RevealOnScroll>
            <div className="max-w-[660px] mb-12">
              <span className="eyebrow">Who we serve</span>
              <h2 className="font-display font-bold text-ink mt-3 mb-2.5" style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.85rem)" }}>
                Every type of property, one trusted partner
              </h2>
              <p className="text-stone text-lg">From your family home to a 50-unit portfolio — we handle the work so you don&apos;t have to.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {segments.map((seg) => (
                <Link key={seg.slug} href={seg.href} className="group bg-white border border-line rounded-[14px] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(15,31,27,.04),0_14px_34px_-16px_rgba(15,31,27,.18)] hover:border-transparent">
                  <div className="w-12 h-12 rounded-xl bg-mist group-hover:bg-pine flex items-center justify-center mb-4 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-pine group-hover:text-white transition-colors">
                      {seg.icon === "home" && <><path d="M3 12l9-8 9 8" /><path d="M5 10v9h14v-9" /><path d="M10 19v-5h4v5" /></>}
                      {seg.icon === "building" && <><rect x="4" y="2" width="16" height="20" rx="1" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" /></>}
                      {seg.icon === "star" && <><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></>}
                      {seg.icon === "office" && <><path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-6h6v6" /></>}
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-1">{seg.title}</h3>
                  <p className="text-stone text-sm leading-relaxed">{seg.description}</p>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-[90px] max-md:py-16 bg-sand">
        <div className="max-w-[1140px] mx-auto px-[26px]">
          <RevealOnScroll>
            <div className="max-w-[660px] mb-12">
              <span className="eyebrow">What we do</span>
              <h2 className="font-display font-bold text-ink mt-3 mb-2.5" style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.85rem)" }}>
                Ten services. One vendor you can trust.
              </h2>
              <p className="text-stone text-lg">Stop juggling five companies and five invoices. Everything your property needs — handled by one accountable team, or fully managed for you.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-3.5">
              {services.map((svc) => (
                <ServiceCard key={svc.slug} name={svc.name} slug={svc.slug} icon={svc.icon} tag={svc.tag} blurb={svc.blurb} />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* PROPERTY MANAGEMENT FLAGSHIP */}
      <section className="py-[90px] max-md:py-16 bg-ink text-white">
        <div className="max-w-[1140px] mx-auto px-[26px]">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[52px] items-center">
              <div>
                <span className="eyebrow">Flagship service</span>
                <h2 className="font-display font-bold text-white mt-3 mb-3" style={{ fontSize: "clamp(1.95rem, 3.6vw, 2.8rem)" }}>
                  Full-service property management
                </h2>
                <p className="text-white/70 text-lg max-w-[46ch]">
                  Own a home, a rental, or a whole portfolio? Hand us the keys. We keep your property rent-ready, maintained, and turnover-ready — with one point of contact and one monthly invoice instead of a dozen vendors.
                </p>
                <div className="flex gap-[30px] my-7">
                  <div><div className="font-display font-extrabold text-3xl text-white">1</div><div className="text-sm text-white/60 mt-1.5">Point of contact</div></div>
                  <div><div className="font-display font-extrabold text-3xl text-white">24/7</div><div className="text-sm text-white/60 mt-1.5">Emergency response</div></div>
                  <div><div className="font-display font-extrabold text-3xl text-white">10+</div><div className="text-sm text-white/60 mt-1.5">Trades in-house</div></div>
                </div>
                <Link href="/property-management" className="btn btn-light">Talk to us about your property</Link>
              </div>
              <div className="bg-white rounded-[18px] p-[30px] shadow-[0_30px_60px_-30px_rgba(0,0,0,.6)]">
                <h3 className="font-display font-bold text-xl text-ink mb-1.5">Every property, fully handled</h3>
                <p className="text-stone text-sm mb-5">For homeowners, landlords, and commercial property managers.</p>
                <ul className="space-y-0.5">
                  {["Rent-ready turnovers & white boxing", "Recurring grounds, janitorial & upkeep", "Seasonal snow & ice contracts", "Routine inspections & reporting", "Vendor coordination & repairs", "One monthly invoice, one point of contact"].map((item) => (
                    <li key={item} className="flex items-start gap-3 py-3 border-t border-line first:border-t-0 text-ink font-medium">
                      <span className="w-[22px] h-[22px] rounded-md bg-mist flex items-center justify-center flex-none mt-0.5">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-pine"><path d="M20 6L9 17l-5-5" /></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* IN SEASON */}
      <section className="py-[90px] max-md:py-16 bg-sand">
        <div className="max-w-[1140px] mx-auto px-[26px]">
          <RevealOnScroll>
            <div className="max-w-[660px] mb-12">
              <span className="eyebrow">Right service, right time</span>
              <h2 className="font-display font-bold text-ink mt-3 mb-2.5" style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.85rem)" }}>
                What your property needs this season
              </h2>
              <p className="text-stone text-lg">Tap a season to see what we&apos;re handling for clients right now — and what to plan ahead for.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <SeasonalPanel />
          </RevealOnScroll>
        </div>
      </section>

      {/* ESSENTIALS PRODUCT STRIP */}
      <section className="py-[90px] max-md:py-16">
        <div className="max-w-[1140px] mx-auto px-[26px]">
          <RevealOnScroll>
            <div className="max-w-[660px] mx-auto text-center mb-12">
              <span className="eyebrow justify-center after:content-[''] after:w-6 after:h-0.5 after:bg-current after:rounded-sm">Evercare Essentials</span>
              <h2 className="font-display font-bold text-ink mt-3 mb-2.5" style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.85rem)" }}>
                Restock made effortless
              </h2>
              <p className="text-stone text-lg">Premium soaps, scents, and supplies — delivered on your schedule or bundled with every clean.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} name={product.name} slug={product.slug} price={product.price} category={product.category} subscribable={product.subscribable} />
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-10">
              <Link href="/shop" className="btn btn-primary">Shop Essentials</Link>
              <Link href="/subscriptions" className="btn btn-ghost">Subscribe &amp; save</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-[90px] max-md:py-16 bg-sand">
        <div className="max-w-[1140px] mx-auto px-[26px]">
          <RevealOnScroll>
            <div className="max-w-[660px] mx-auto text-center mb-12">
              <span className="eyebrow justify-center after:content-[''] after:w-6 after:h-0.5 after:bg-current after:rounded-sm">Why Evercare</span>
              <h2 className="font-display font-bold text-ink mt-3" style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.85rem)" }}>
                Built to make property upkeep effortless
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: <><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>, title: "One number, all year", desc: "Snow, lawns, pools, gutters — schedule it all through a single point of contact." },
                { icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></>, title: "Licensed & insured", desc: "Properly covered crews on every job, so you're never exposed to the risk." },
                { icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>, title: "Fast & on-time", desc: "Quick quotes, clear windows, and crews that show up when they say they will." },
                { icon: <><path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-6h6v6" /></>, title: "Home & commercial", desc: "Houses, offices, retail, and managed portfolios — recurring contracts welcome." },
              ].map((v) => (
                <div key={v.title}>
                  <div className="w-[46px] h-[46px] rounded-xl bg-pine flex items-center justify-center mb-3.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] text-white">{v.icon}</svg>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-1">{v.title}</h3>
                  <p className="text-stone text-[.95rem]">{v.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-[90px] max-md:py-16">
        <div className="max-w-[1140px] mx-auto px-[26px]">
          <RevealOnScroll>
            <div className="max-w-[660px] mb-12">
              <span className="eyebrow">How it works</span>
              <h2 className="font-display font-bold text-ink mt-3" style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.85rem)" }}>
                From request to done in three steps
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { title: "Tell us what you need", desc: "Call or send the quick form. Pick one service, bundle several, or hand off full management." },
                { title: "Get a fast, free quote", desc: "We come back quickly with clear, upfront pricing and a time window that works for you." },
                { title: "We handle it", desc: "Our crew shows up, does it right, and you approve the work. Set it to recur if you'd like." },
              ].map((step, i) => (
                <div key={step.title} className="relative p-[30px_28px] bg-white border border-line rounded-[14px]">
                  <div className="font-display font-extrabold text-4xl text-mist leading-none mb-3">0{i + 1}</div>
                  <h3 className="font-display font-bold text-lg mb-1.5">{step.title}</h3>
                  <p className="text-stone text-[.97rem]">{step.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[90px] max-md:py-16 bg-sand">
        <div className="max-w-[1140px] mx-auto px-[26px]">
          <RevealOnScroll>
            <div className="max-w-[660px] mx-auto text-center mb-12">
              <span className="eyebrow justify-center after:content-[''] after:w-6 after:h-0.5 after:bg-current after:rounded-sm">What clients say</span>
              <h2 className="font-display font-bold text-ink mt-3" style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.85rem)" }}>
                Trusted by property owners across NY &amp; NJ
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.slice(0, 3).map((t) => (
                <div key={t.name} className="bg-white border border-line rounded-[14px] p-7">
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-amber/30 mb-4"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor" /></svg>
                  <p className="text-ink text-[.97rem] leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <div className="font-semibold text-ink text-sm">{t.name}</div>
                    <div className="text-stone text-xs">{t.role}</div>
                    <div className="text-stone/50 text-xs italic mt-1">{t.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-[90px] max-md:py-16">
        <div className="max-w-[1140px] mx-auto px-[26px]">
          <RevealOnScroll>
            <div className="max-w-[660px] mb-12">
              <span className="eyebrow">Service area</span>
              <h2 className="font-display font-bold text-ink mt-3 mb-2.5" style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.85rem)" }}>
                Proudly serving New York &amp; New Jersey
              </h2>
              <p className="text-stone text-lg">Not sure if you&apos;re in our zone? Give us a call — we&apos;re always expanding.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
              <div>
                <h4 className="text-xs font-semibold tracking-[.12em] uppercase text-amber mb-3.5">New Jersey</h4>
                <div className="flex flex-wrap gap-2">
                  {areas.nj.counties?.map((c) => (
                    <span key={c} className="text-sm text-stone bg-white border border-line px-3 py-1.5 rounded-lg">{c}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-[.12em] uppercase text-amber mb-3.5">New York</h4>
                <div className="flex flex-wrap gap-2">
                  {areas.ny.areas?.map((a) => (
                    <span key={a} className="text-sm text-stone bg-white border border-line px-3 py-1.5 rounded-lg">{a}</span>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTABand
        headline="Ready to simplify your property care?"
        description="Get a free, no-obligation quote for any service — or hand off full management."
        ctaText="Get my free quote"
        ctaHref="/contact"
      />
    </>
  );
}
