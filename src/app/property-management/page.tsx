import type { Metadata } from "next";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { FAQ } from "@/components/FAQ";
import { CTABand } from "@/components/CTABand";
import { propertyManagementFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Full-Service Property Management",
  description:
    "One point of contact for every property in your portfolio. Rent-ready turnovers, recurring maintenance, seasonal services, and consolidated billing.",
};

const checklist = [
  "Rent-ready turnovers & white boxing",
  "Recurring grounds, janitorial & upkeep",
  "Seasonal snow & ice management",
  "Routine inspections & reporting",
  "Vendor coordination & repairs",
  "One monthly invoice",
];

const audiences = [
  {
    label: "Homeowners",
    description:
      "Keep your home in peak condition year-round without juggling multiple contractors.",
  },
  {
    label: "Landlords",
    description:
      "Turnover units faster, maintain tenant satisfaction, and protect your investment.",
  },
  {
    label: "CRE managers",
    description:
      "Consolidate vendors across your portfolio with SLAs, reporting, and a single invoice.",
  },
];

const steps = [
  {
    number: "01",
    title: "Walk-through & scope",
    description:
      "We visit each property, document current condition, and build a service plan tailored to your needs.",
  },
  {
    number: "02",
    title: "Service plan & scheduling",
    description:
      "You approve the plan, and we schedule recurring and one-time services with your dedicated account manager.",
  },
  {
    number: "03",
    title: "Ongoing service & reporting",
    description:
      "Our crews handle every visit. You receive photo-documented reports and one consolidated monthly invoice.",
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

export default function PropertyManagementPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <p className="eyebrow mb-4">Flagship service</p>
            <h1 className="mb-6 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.1] text-ink">
              Full-service property management.
            </h1>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-stone md:text-xl">
              Own a home, a rental, or a whole portfolio? Hand us the keys. We
              keep your property rent-ready, maintained, and turnover-ready
              &mdash; one point of contact, one monthly invoice.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-b border-line py-12">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
              {[
                { stat: "1", label: "point of contact" },
                { stat: "24/7", label: "emergency response" },
                { stat: "10+", label: "trades in-house" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-display text-4xl font-extrabold text-pine">
                    {item.stat}
                  </p>
                  <p className="mt-1 font-body text-sm text-stone">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Checklist ── */}
      <section className="py-16 md:py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <p className="eyebrow mb-4">What&apos;s included</p>
            <h2 className="mb-10 font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold text-ink">
              Every property, fully handled.
            </h2>
          </RevealOnScroll>
          <div className="grid gap-4 sm:grid-cols-2">
            {checklist.map((item) => (
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

      {/* ── Who it's for ── */}
      <section className="bg-mist py-16 md:py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <p className="eyebrow mb-4">Who it&apos;s for</p>
            <h2 className="mb-10 font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold text-ink">
              Built for every type of property owner.
            </h2>
          </RevealOnScroll>
          <div className="grid gap-6 sm:grid-cols-3">
            {audiences.map((a) => (
              <RevealOnScroll key={a.label}>
                <div className="rounded-2xl border border-line bg-paper p-7 card-shadow">
                  <h3 className="mb-2 font-display text-lg font-bold text-pine">
                    {a.label}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-stone">
                    {a.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-16 md:py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <p className="eyebrow mb-4">How it works</p>
            <h2 className="mb-10 font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold text-ink">
              Three steps to hands-off property care.
            </h2>
          </RevealOnScroll>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
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
              <FAQ items={propertyManagementFaqs} />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <CTABand
        headline="Ready to hand off your property?"
        description="Get a free walk-through and custom service plan. One call, every season."
        ctaText="Get a free quote"
        ctaHref="/contact"
      />
    </>
  );
}
