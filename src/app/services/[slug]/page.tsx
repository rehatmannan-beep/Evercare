import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { ServiceCard } from "@/components/ServiceCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { FAQ } from "@/components/FAQ";
import { CTABand } from "@/components/CTABand";

/* ---------- static params ---------- */

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

/* ---------- dynamic metadata ---------- */

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.heroDescription,
  };
}

/* ---------- helpers ---------- */

const seasonLabels: Record<string, string> = {
  spring: "Spring",
  summer: "Summer",
  fall: "Fall",
  winter: "Winter",
};

function getRelated(currentSlug: string) {
  const others = services.filter((s) => s.slug !== currentSlug);
  // Deterministic shuffle seeded by slug length
  const shuffled = [...others].sort(
    (a, b) => a.slug.localeCompare(b.slug)
  );
  return shuffled.slice(0, 3);
}

/* ---------- page ---------- */

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = getRelated(service.slug);
  const isYearRound = service.seasons.length === 4;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    provider: {
      "@type": "LocalBusiness",
      name: "Evercare Property Services",
    },
    areaServed: [
      { "@type": "State", name: "New York" },
      { "@type": "State", name: "New Jersey" },
    ],
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-sand py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-widest text-pine">
              {service.name}
            </p>
            <h1 className="mb-6 max-w-3xl font-display text-4xl font-bold text-ink md:text-5xl">
              {service.heroTitle}
            </h1>
            <p className="mb-8 max-w-2xl font-body text-lg leading-relaxed text-stone">
              {service.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Get a Quote
              </Link>
              <a href={siteConfig.phoneHref} className="btn btn-outline">
                Call {siteConfig.phone}
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <h2 className="mb-8 font-display text-3xl font-bold text-ink">
              What&apos;s included
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0 text-pine"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="font-body text-base text-stone">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-mist py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <h2 className="mb-8 font-display text-3xl font-bold text-ink">
              Who it&apos;s for
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.forWho.map((who) => (
                <span
                  key={who}
                  className="rounded-full border border-line bg-paper px-5 py-2.5 font-body text-sm font-medium text-ink"
                >
                  {who}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Seasonal Note */}
      {!isYearRound && (
        <section className="py-[90px]">
          <div className="mx-auto max-w-[1140px] px-[26px]">
            <RevealOnScroll>
              <div className="rounded-2xl border border-line bg-paper p-8">
                <h2 className="mb-4 font-display text-2xl font-bold text-ink">
                  Seasonal availability
                </h2>
                <p className="mb-4 font-body text-base text-stone">
                  This service is available during the following seasons:
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.seasons.map((season) => (
                    <span
                      key={season}
                      className="rounded-full bg-pine/10 px-4 py-1.5 font-body text-sm font-semibold text-pine"
                    >
                      {seasonLabels[season] ?? season}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* Pricing Guidance */}
      <section className={isYearRound ? "py-[90px]" : "pb-[90px]"}>
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <div className="rounded-2xl border border-line bg-paper p-8 text-center">
              <h2 className="mb-4 font-display text-2xl font-bold text-ink">
                Pricing guidance
              </h2>
              <p className="mx-auto mb-6 max-w-2xl font-body text-base leading-relaxed text-stone">
                {service.pricingNote}
              </p>
              <Link href="/contact" className="btn btn-primary">
                Get a Custom Quote
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="bg-mist py-[90px]">
          <div className="mx-auto max-w-[1140px] px-[26px]">
            <RevealOnScroll>
              <h2 className="mb-8 text-center font-display text-3xl font-bold text-ink">
                Frequently asked questions
              </h2>
              <div className="mx-auto max-w-3xl">
                <FAQ
                  items={service.faqs.map((f) => ({
                    question: f.q,
                    answer: f.a,
                  }))}
                />
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <h2 className="mb-8 text-center font-display text-3xl font-bold text-ink">
              Related services
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {related.map((s) => (
                <ServiceCard
                  key={s.slug}
                  name={s.name}
                  slug={s.slug}
                  icon={s.icon}
                  tag={s.tag}
                  blurb={s.blurb}
                />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        headline="Ready to get started?"
        description="Request a free quote and we'll get back to you within 24 hours."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
      />
    </>
  );
}
