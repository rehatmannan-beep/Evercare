import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { segments } from "@/data/segments";
import { CTABand } from "@/components/CTABand";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "About Evercare",
  description:
    "Learn about Evercare Property Services — licensed, insured, and committed to raising the bar for property care across NY & NJ.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sand py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px] text-center">
          <RevealOnScroll>
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-widest text-pine">
              About us
            </p>
            <h1 className="mx-auto mb-6 max-w-3xl font-display text-4xl font-bold text-ink md:text-5xl">
              Your property deserves better.
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-stone">
              {siteConfig.tagline}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Trust Story */}
      <section className="py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 font-display text-3xl font-bold text-ink">
                  Built on trust, not shortcuts
                </h2>
                <div className="space-y-4 font-body text-lg leading-relaxed text-stone">
                  <p>
                    We started {siteConfig.shortName} because property owners
                    kept telling us the same thing: managing multiple vendors is
                    exhausting. One company for cleaning, another for snow,
                    another for landscaping &mdash; none of them talking to each
                    other, and none of them treating your property like their
                    own.
                  </p>
                  <p>
                    So we built one team that does it all. Every crew member is
                    trained, background-checked, and accountable. We show up on
                    time, communicate proactively, and stand behind every visit.
                  </p>
                  <p>
                    Whether you own one home or manage fifty properties, we bring
                    the same level of care &mdash; because that&rsquo;s what
                    &ldquo;Evercare&rdquo; means.
                  </p>
                </div>
              </div>

              {/* Photo placeholder */}
              <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-mist">
                <p className="font-body text-stone">Photo placeholder</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Licensed & Insured */}
      <section className="bg-sand py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <div className="grid items-center gap-12 md:grid-cols-2">
              {/* Photo placeholder */}
              <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-mist">
                <p className="font-body text-stone">Photo placeholder</p>
              </div>

              <div>
                <h2 className="mb-6 font-display text-3xl font-bold text-ink">
                  Licensed &amp; fully insured
                </h2>
                <div className="space-y-4 font-body text-lg leading-relaxed text-stone">
                  <p>
                    Every property we touch is protected. We carry comprehensive
                    general liability insurance, workers&rsquo; compensation
                    coverage, and all required state and local licenses for New
                    York and New Jersey.
                  </p>
                  <p>
                    We&rsquo;re happy to provide certificates of insurance to
                    property managers, HOAs, and commercial clients upon request.
                    Your peace of mind is non-negotiable.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Segments Served */}
      <section className="py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-display text-3xl font-bold text-ink">
                Who we serve
              </h2>
              <p className="mx-auto max-w-2xl font-body text-lg text-stone">
                From single-family homes to commercial portfolios, we tailor our
                services to fit the way you manage your property.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {segments.map((segment) => (
                <div
                  key={segment.slug}
                  className="rounded-2xl border border-line bg-paper p-6"
                >
                  <h3 className="mb-2 font-display text-lg font-bold text-ink">
                    {segment.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-stone">
                    {segment.description}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Values / Mission */}
      <section className="bg-sand py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-display text-3xl font-bold text-ink">
                What drives us
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Reliability first",
                  body: "We show up when we say we will. Every time. No excuses, no ghosting, no surprise invoices.",
                },
                {
                  title: "One team, one standard",
                  body: "Every crew member is trained to our standard — whether they're cleaning a studio apartment or maintaining a 50-unit complex.",
                },
                {
                  title: "Transparent pricing",
                  body: "You'll always know what you're paying and what you're getting. We quote upfront and never pad invoices.",
                },
                {
                  title: "Proactive communication",
                  body: "We send confirmations, follow-ups, and seasonal reminders so you never have to chase us down.",
                },
                {
                  title: "Local knowledge",
                  body: "We know these neighborhoods, these building types, and these seasons. That local expertise makes a difference.",
                },
                {
                  title: "Continuous improvement",
                  body: "We collect feedback after every visit and use it to get better. Complacency has no place on our team.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-line bg-paper p-6"
                >
                  <h3 className="mb-2 font-display text-lg font-bold text-ink">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-stone">
                    {value.body}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        headline="Ready to raise the bar?"
        description="Get a free, no-obligation quote for your property today."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
      />
    </>
  );
}
