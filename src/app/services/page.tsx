import type { Metadata } from "next";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABand } from "@/components/CTABand";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Ten property services, one trusted vendor. Cleaning, snow removal, pressure washing, landscaping, lawn care, pool & HVAC servicing, gutter and window cleaning, and white boxing across NY & NJ.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sand py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px] text-center">
          <RevealOnScroll>
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-widest text-pine">
              What we do
            </p>
            <h1 className="mx-auto mb-6 max-w-3xl font-display text-4xl font-bold text-ink md:text-5xl">
              Ten services. One vendor you can trust.
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-stone">
              Bundle the services your property needs or hand us the keys for full
              management. Either way, you get one team, one invoice, and one
              number to call.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {services.map((service) => (
                <ServiceCard
                  key={service.slug}
                  name={service.name}
                  slug={service.slug}
                  icon={service.icon}
                  tag={service.tag}
                  blurb={service.blurb}
                />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        headline="Not sure which services you need?"
        description="Tell us about your property and we'll recommend the right package — no obligation."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
      />
    </>
  );
}
