import type { Metadata } from "next";
import { areas } from "@/data/areas";
import { CTABand } from "@/components/CTABand";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Service Areas — NY & NJ",
  description:
    "Evercare Property Services proudly serves communities across New York and New Jersey. Check if your area is covered.",
};

export default function AreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sand py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px] text-center">
          <RevealOnScroll>
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-widest text-pine">
              Service area
            </p>
            <h1 className="mx-auto mb-6 max-w-3xl font-display text-4xl font-bold text-ink md:text-5xl">
              Proudly serving New York &amp; New Jersey
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-stone">
              Not sure if you&rsquo;re in our zone? Give us a call &mdash;
              we&rsquo;re always expanding.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <div className="grid gap-12 md:grid-cols-2">
              {/* New Jersey */}
              <div>
                <h2 className="mb-2 font-display text-2xl font-bold text-ink">
                  {areas.nj.state}
                </h2>
                <p className="mb-6 font-body text-stone">Counties we serve</p>
                <div className="flex flex-wrap gap-3">
                  {areas.nj.counties?.map((county) => (
                    <span
                      key={county}
                      className="rounded-full border border-line bg-mist px-4 py-2 font-body text-sm font-medium text-ink"
                    >
                      {county} County
                    </span>
                  ))}
                </div>
              </div>

              {/* New York */}
              <div>
                <h2 className="mb-2 font-display text-2xl font-bold text-ink">
                  {areas.ny.state}
                </h2>
                <p className="mb-6 font-body text-stone">Areas we serve</p>
                <div className="flex flex-wrap gap-3">
                  {areas.ny.areas?.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-line bg-mist px-4 py-2 font-body text-sm font-medium text-ink"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        headline="Don't see your area?"
        description="We're growing fast. Reach out and we'll let you know if we can service your property."
        ctaText="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
