import type { Metadata } from "next";
import Link from "next/link";
import { plans } from "@/data/plans";
import { PricingCard } from "@/components/PricingCard";
import { CTABand } from "@/components/CTABand";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Subscriptions — Never Run Out Again",
  description:
    "Auto-replenish your property essentials on a schedule. Host Box subscriptions for STRs, per-turnover restock add-ons, and commercial restroom plans.",
};

const HOST_BOX_FAQ = [
  {
    q: "Can I customize what's in the box?",
    a: "Yes. After subscribing you can swap products, adjust scents, and change quantities from your account dashboard before each shipment.",
  },
  {
    q: "When does my box ship?",
    a: "Boxes ship on the 1st of each month. Your first box ships within 2-3 business days of subscribing.",
  },
  {
    q: "Can I pause or cancel anytime?",
    a: "Absolutely. Pause, skip a month, or cancel from your account page with no fees or penalties.",
  },
  {
    q: "Do you offer bulk or multi-property discounts?",
    a: "Yes. Contact us for custom pricing on 3+ properties or commercial accounts.",
  },
  {
    q: "What if a product arrives damaged?",
    a: "We'll replace it free of charge. Just reach out within 7 days of delivery.",
  },
];

export default function SubscriptionsPage() {
  const hostBoxPlans = plans.filter((p) => p.id.startsWith("plan_host_box"));
  const commercialPlan = plans.find(
    (p) => p.id === "plan_commercial_restroom_restock"
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-sand py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px] text-center">
          <RevealOnScroll>
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-widest text-pine">
              Subscribe &amp; save
            </p>
            <h1 className="mx-auto mb-6 max-w-3xl font-display text-4xl font-bold text-ink md:text-5xl">
              Never run out again.
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-stone">
              Auto-replenish every essential your property needs. Pick a plan,
              choose your scents, and let us handle the rest. Adjust, pause, or
              cancel anytime from your account.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Host Box Plans */}
      <section className="py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <div className="mb-12 text-center">
              <h2 className="mb-3 font-display text-3xl font-bold text-ink">
                Host Box
              </h2>
              <p className="mx-auto max-w-xl font-body text-base text-stone">
                Everything your short-term rental or home needs, delivered
                monthly. Sized to your property so nothing runs out and nothing
                goes to waste.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid gap-8 md:grid-cols-3">
              {hostBoxPlans.map((plan, i) => (
                <PricingCard
                  key={plan.id}
                  name={plan.name.replace("Host Box ", "")}
                  price={plan.price / 100}
                  interval={plan.interval}
                  features={plan.features}
                  ctaText="Subscribe now"
                  ctaHref="/contact"
                  highlighted={i === 1}
                />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* What's in the box */}
      <section className="border-t border-line bg-mist py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <div className="mb-12 text-center">
              <h2 className="mb-3 font-display text-3xl font-bold text-ink">
                What&apos;s in the box?
              </h2>
              <p className="mx-auto max-w-xl font-body text-base text-stone">
                Every Host Box is packed with our full line of Evercare
                Essentials, scaled to your property size.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  label: "Bath & Body",
                  items:
                    "Foaming hand soap, bar soap, shampoo/conditioner/body wash set, hand & body lotion",
                },
                {
                  label: "Scents",
                  items:
                    "Room & linen scent spray, reed diffuser (3BR+ only), five signature scents to choose from",
                },
                {
                  label: "Paper & Cleaning",
                  items:
                    "Paper-goods restock bundle sized to your unit, multi-surface cleaner",
                },
                {
                  label: "Flexibility",
                  items:
                    "Swap products or scents anytime, skip a month, cancel with one click",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-line bg-paper p-6 card-shadow"
                >
                  <h3 className="mb-2 font-display text-base font-bold text-ink">
                    {item.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone">
                    {item.items}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Per-Turnover Restock */}
      <section className="py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <div className="overflow-hidden rounded-2xl border border-line bg-paper card-shadow lg:grid lg:grid-cols-2 lg:gap-0">
              <div className="flex items-center justify-center bg-mist p-12">
                <div className="text-center">
                  <p className="mb-1 font-display text-5xl font-bold text-pine">
                    $12&ndash;25
                  </p>
                  <p className="text-sm text-stone">/turnover add-on</p>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <h2 className="mb-3 font-display text-2xl font-bold text-ink">
                  Per-Turnover Restock
                </h2>
                <p className="mb-4 font-body text-base leading-relaxed text-stone">
                  Already use Evercare for turnovers? Add a restock to every
                  clean. We&apos;ll drop off exactly the supplies your cleaners
                  need so your property is guest-ready from the moment they walk
                  in.
                </p>
                <ul className="mb-6 space-y-2">
                  {[
                    "Supplies delivered with every turnover",
                    "Scaled to property size and guest count",
                    "Pairs with any Host Box subscription",
                    "No minimum commitment",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-stone"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0 text-pine"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/airbnb-turnovers" className="btn btn-primary">
                  Learn about turnovers
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Commercial Restroom Restock */}
      {commercialPlan && (
        <section className="border-t border-line bg-mist py-[90px]">
          <div className="mx-auto max-w-[1140px] px-[26px]">
            <RevealOnScroll>
              <div className="mb-12 text-center">
                <h2 className="mb-3 font-display text-3xl font-bold text-ink">
                  Commercial Restroom Restock
                </h2>
                <p className="mx-auto max-w-xl font-body text-base text-stone">
                  Keep every restroom stocked without lifting a finger. One
                  monthly delivery per restroom, scaled to your traffic.
                </p>
              </div>

              <div className="mx-auto max-w-md">
                <PricingCard
                  name={commercialPlan.name}
                  price={commercialPlan.price / 100}
                  interval={commercialPlan.interval}
                  features={commercialPlan.features}
                  ctaText="Get started"
                  ctaHref="/contact"
                  perUnit
                />
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* Manage Subscription */}
      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-[1140px] px-[26px] text-center">
          <RevealOnScroll>
            <p className="mb-3 font-body text-sm text-stone">
              Already subscribed?
            </p>
            <Link href="/account" className="btn btn-ghost">
              Manage your subscription
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <h2 className="mb-10 text-center font-display text-3xl font-bold text-ink">
              Frequently asked questions
            </h2>
            <div className="mx-auto max-w-2xl divide-y divide-line">
              {HOST_BOX_FAQ.map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary className="flex cursor-pointer items-center justify-between font-display text-base font-semibold text-ink">
                    {faq.q}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 transition-transform group-open:rotate-180"
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-stone">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        headline="Ready to simplify your property supplies?"
        description="Pick a plan or build a custom package. We'll handle the rest."
        ctaText="Get Started"
        ctaHref="/contact"
      />
    </>
  );
}
