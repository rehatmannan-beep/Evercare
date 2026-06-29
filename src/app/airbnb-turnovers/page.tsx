import type { Metadata } from "next";
import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { FAQ } from "@/components/FAQ";
import { CTABand } from "@/components/CTABand";
import { QuoteForm } from "@/components/QuoteForm";
import { airbnbFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Airbnb & STR Turnovers",
  description:
    "Same-day turnovers your guests will five-star. Photo-verified checklists, linen handling, amenity restock, and calendar-synced scheduling for Airbnb & VRBO hosts.",
};

const included = [
  "Same-day turnover windows (as tight as 3 hours)",
  "Standardized photo-verified checklist",
  "Linen handling & swap",
  "Damage & low-inventory reporting",
  "Amenity restock built in",
];

const pricing = [
  { unit: "1 BR", range: "$120 – $180" },
  { unit: "2 BR", range: "$160 – $250" },
  { unit: "3 BR+", range: "$220 – $350" },
  { unit: "+ Amenity pack", range: "$12 – $25" },
];

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-pine"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-pine"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export default function AirbnbTurnoversPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <p className="eyebrow mb-4">For Airbnb &amp; short-term rental hosts</p>
            <h1 className="mb-6 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.1] text-ink">
              Turnovers your guests will five-star.
            </h1>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-stone md:text-xl">
              Reliable, consistent turnovers that protect your reviews and keep
              your calendar fully booked. Same-day cleans, photo-verified
              checklists, linen swaps, and amenity restocking &mdash; all
              handled.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Pain → Promise ── */}
      <section className="bg-ink py-16 text-white md:py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold">
                A missed turnover is a cancelled booking.
              </h2>
              <p className="font-body text-lg leading-relaxed text-white/80">
                Late crews, inconsistent cleans, forgotten supplies &mdash; they
                all show up in your reviews. We don&apos;t miss. Our
                calendar-synced scheduling and standardized process means every
                guest walks into a spotless, fully stocked property, every time.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="py-16 md:py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <p className="eyebrow mb-4">What&apos;s included</p>
            <h2 className="mb-10 font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold text-ink">
              Everything your turnover needs.
            </h2>
          </RevealOnScroll>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <RevealOnScroll key={item}>
                <div className="flex items-start gap-3 rounded-xl border border-line bg-paper p-5 card-shadow">
                  <CheckIcon />
                  <span className="font-body text-base text-ink">{item}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Auto-restock tie-in ── */}
      <section className="bg-mist py-16 md:py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="eyebrow mb-4">Never run out</p>
                <h2 className="mb-4 font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold text-ink">
                  Auto-restock with Host Box.
                </h2>
                <p className="mb-6 font-body text-base leading-relaxed text-stone">
                  Pair your turnovers with a{" "}
                  <Link href="/subscriptions" className="font-semibold text-pine underline underline-offset-2 hover:text-pine-2">
                    Host Box subscription
                  </Link>{" "}
                  and premium soaps, scents, and paper goods arrive monthly
                  &mdash; ready for your next guest. Or add a per-turnover
                  amenity pack for a la carte restocking.
                </p>
                <Link href="/subscriptions" className="btn btn-primary">
                  View subscription plans
                </Link>
              </div>
              <div className="rounded-2xl border border-line bg-paper p-8 card-shadow">
                <h3 className="mb-4 font-display text-lg font-bold text-ink">
                  Two ways to restock
                </h3>
                <ul className="space-y-3 font-body text-sm text-stone">
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span>
                      <strong className="text-ink">Host Box subscription</strong>{" "}
                      &mdash; monthly delivery of curated essentials
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span>
                      <strong className="text-ink">Per-turnover amenity pack</strong>{" "}
                      &mdash; $12&ndash;$25 added to each clean
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Scheduling ── */}
      <section className="py-16 md:py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow mb-4">Automated scheduling</p>
              <h2 className="mb-4 font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold text-ink">
                Connect your calendar, we handle the rest.
              </h2>
              <p className="font-body text-lg leading-relaxed text-stone">
                Share your Airbnb or VRBO booking calendar (iCal link) and
                turnovers are auto-scheduled between every checkout and
                check-in. No texts, no back-and-forth &mdash; just clean
                properties, on time.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="bg-sand py-16 md:py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <p className="eyebrow mb-4">Turnover pricing</p>
            <h2 className="mb-10 font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold text-ink">
              Transparent, per-turnover pricing.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-line bg-paper card-shadow">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-line bg-mist">
                    <th className="px-6 py-4 font-display text-sm font-bold text-ink">
                      Unit size
                    </th>
                    <th className="px-6 py-4 text-right font-display text-sm font-bold text-ink">
                      Price range
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((row) => (
                    <tr key={row.unit} className="border-b border-line last:border-0">
                      <td className="px-6 py-4 font-body text-base text-ink">
                        {row.unit}
                      </td>
                      <td className="px-6 py-4 text-right font-display text-base font-semibold text-pine">
                        {row.range}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mx-auto mt-4 max-w-xl text-center font-body text-sm text-stone">
              Final pricing depends on property size, condition, and add-ons.
              Volume discounts available for 5+ units.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Trust ── */}
      <section className="py-16 md:py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <p className="eyebrow mb-4">Peace of mind</p>
            <h2 className="mb-10 font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold text-ink">
              Your property is protected.
            </h2>
          </RevealOnScroll>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Fully insured",
                description:
                  "General liability and workers' compensation coverage on every visit.",
              },
              {
                title: "Care & custody coverage",
                description:
                  "Your furnishings and finishes are covered while our team is on-site.",
              },
              {
                title: "Written agreements",
                description:
                  "Clear scope, pricing, and cancellation terms in every service agreement.",
              },
            ].map((item) => (
              <RevealOnScroll key={item.title}>
                <div className="flex items-start gap-3 rounded-2xl border border-line bg-paper p-6 card-shadow">
                  <ShieldIcon />
                  <div>
                    <h3 className="mb-1 font-display text-base font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-stone">
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-sand py-16 md:py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <p className="eyebrow mb-4">Common questions</p>
            <h2 className="mb-10 font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold text-ink">
              Frequently asked questions
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl">
              <FAQ items={airbnbFaqs} />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <CTABand
        headline="Get turnover pricing for your properties"
        description="Tell us about your units and we'll send a custom quote within 24 hours."
        ctaText="Get turnover pricing"
        ctaHref="/contact"
      />

      {/* ── Quote Form ── */}
      <section className="py-16 md:py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <div className="mx-auto max-w-xl">
            <RevealOnScroll>
              <h2 className="mb-2 text-center font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold text-ink">
                Request a quote
              </h2>
              <p className="mb-8 text-center font-body text-base text-stone">
                Fill in your details and we&apos;ll get back to you within one
                business day.
              </p>
            </RevealOnScroll>
            <RevealOnScroll>
              <QuoteForm variant="str" />
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
