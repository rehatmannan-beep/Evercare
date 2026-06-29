import type { Metadata } from "next";
import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { FAQ } from "@/components/FAQ";
import { CTABand } from "@/components/CTABand";
import { QuoteForm } from "@/components/QuoteForm";
import { commercialFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Commercial & CRE Services",
  description:
    "One maintenance partner for your whole commercial portfolio. Recurring janitorial, grounds, snow & ice, pressure washing, white boxing, and inspections with consolidated billing.",
};

const services = [
  {
    title: "Recurring janitorial",
    description:
      "Daily, weekly, or custom-frequency cleaning for lobbies, common areas, restrooms, and offices.",
  },
  {
    title: "Grounds & landscaping",
    description:
      "Mowing, edging, mulching, seasonal plantings, and irrigation management for curb appeal year-round.",
  },
  {
    title: "Seasonal snow & ice contracts",
    description:
      "24/7 snow removal, salting, and ice management with guaranteed response times and per-event or seasonal pricing.",
  },
  {
    title: "Pressure & window washing",
    description:
      "Exterior pressure washing for facades, sidewalks, and parking structures plus interior and exterior window cleaning.",
  },
  {
    title: "White boxing / tenant turnovers",
    description:
      "Full unit restoration between tenants: patching, painting, deep cleaning, fixture swaps, and photo documentation.",
  },
  {
    title: "Inspections & reporting",
    description:
      "Scheduled property walks with timestamped photos, maintenance flags, and monthly summary reports.",
  },
];

const consolidationReasons = [
  {
    title: "One point of contact",
    description:
      "A dedicated account manager who knows every building in your portfolio and coordinates all services.",
  },
  {
    title: "One invoice",
    description:
      "Consolidated monthly billing broken down by property, service type, and cost center. Net-30 available.",
  },
  {
    title: "SLA-backed performance",
    description:
      "Written service-level agreements with response-time guarantees, escalation paths, and satisfaction commitments.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Portfolio review",
    description:
      "We walk every property, document conditions, and identify immediate needs plus ongoing service requirements.",
  },
  {
    number: "02",
    title: "Custom service plan",
    description:
      "You receive a detailed scope, schedule, and pricing proposal. We refine until it fits your budget and standards.",
  },
  {
    number: "03",
    title: "Execution & reporting",
    description:
      "Services begin on schedule. You get photo-verified completion reports and a single monthly invoice across all properties.",
  },
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

export default function CommercialPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <p className="eyebrow mb-4">
              For property managers &amp; commercial real estate
            </p>
            <h1 className="mb-6 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.1] text-ink">
              One maintenance partner for your whole portfolio.
            </h1>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-stone md:text-xl">
              Recurring janitorial, grounds, snow &amp; ice, pressure washing,
              and tenant turnovers &mdash; consolidated under one vendor with
              SLA-backed performance and a single monthly invoice.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Services for CRE ── */}
      <section className="py-16 md:py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <p className="eyebrow mb-4">Services</p>
            <h2 className="mb-10 font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold text-ink">
              Everything your buildings need.
            </h2>
          </RevealOnScroll>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <RevealOnScroll key={service.title}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6 card-shadow">
                  <h3 className="mb-2 font-display text-lg font-bold text-pine">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-stone">
                    {service.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why consolidate ── */}
      <section className="bg-ink py-16 text-white md:py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <p className="eyebrow mb-4">Why Evercare</p>
            <h2 className="mb-10 font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold">
              Why managers consolidate with Evercare.
            </h2>
          </RevealOnScroll>
          <div className="grid gap-6 sm:grid-cols-3">
            {consolidationReasons.map((reason) => (
              <RevealOnScroll key={reason.title}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <CheckIcon />
                    <h3 className="font-display text-lg font-bold text-white">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="font-body text-sm leading-relaxed text-white/70">
                    {reason.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-16 md:py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <p className="eyebrow mb-4">Our process</p>
            <h2 className="mb-10 font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold text-ink">
              From first walk-through to monthly reporting.
            </h2>
          </RevealOnScroll>
          <div className="grid gap-8 sm:grid-cols-3">
            {processSteps.map((step) => (
              <RevealOnScroll key={step.number}>
                <div>
                  <span className="mb-3 inline-block font-display text-5xl font-extrabold text-sand">
                    {step.number}
                  </span>
                  <h3 className="mb-2 font-display text-lg font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-stone">
                    {step.description}
                  </p>
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
              <FAQ items={commercialFaqs} />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <CTABand
        headline="Let's build your service plan"
        description="Tell us about your portfolio and we'll deliver a custom proposal within 48 hours."
        ctaText="Request a proposal"
        ctaHref="/contact"
      />

      {/* ── Quote Form ── */}
      <section className="py-16 md:py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <div className="mx-auto max-w-xl">
            <RevealOnScroll>
              <h2 className="mb-2 text-center font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold text-ink">
                Request a proposal
              </h2>
              <p className="mb-8 text-center font-body text-base text-stone">
                Share your portfolio details and we&apos;ll prepare a custom
                service plan and pricing proposal.
              </p>
            </RevealOnScroll>
            <RevealOnScroll>
              <QuoteForm variant="b2b" />
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
