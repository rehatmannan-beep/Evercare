import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { QuoteForm } from "@/components/QuoteForm";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Contact Us — Free Estimate",
  description:
    "Request a free quote from Evercare Property Services. Call, email, or fill out our form and we'll get back to you within one business day.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sand py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px] text-center">
          <RevealOnScroll>
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-widest text-pine">
              Contact
            </p>
            <h1 className="mx-auto mb-6 max-w-3xl font-display text-4xl font-bold text-ink md:text-5xl">
              Get your free quote today
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-stone">
              Tell us about your property and we&rsquo;ll put together a
              custom plan &mdash; no obligation, no pressure.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Left — Contact Info */}
              <div>
                <h2 className="mb-6 font-display text-2xl font-bold text-ink">
                  Get in touch
                </h2>

                <div className="mb-8 space-y-6">
                  {/* Phone */}
                  <div>
                    <h3 className="mb-1 font-body text-sm font-semibold uppercase tracking-widest text-pine">
                      Phone
                    </h3>
                    <a
                      href={siteConfig.phoneHref}
                      className="font-body text-lg text-ink underline decoration-pine underline-offset-4 hover:text-pine"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <h3 className="mb-1 font-body text-sm font-semibold uppercase tracking-widest text-pine">
                      Email
                    </h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-body text-lg text-ink underline decoration-pine underline-offset-4 hover:text-pine"
                    >
                      {siteConfig.email}
                    </a>
                  </div>

                  {/* Hours */}
                  <div>
                    <h3 className="mb-1 font-body text-sm font-semibold uppercase tracking-widest text-pine">
                      Hours
                    </h3>
                    <p className="font-body text-lg text-ink">
                      {siteConfig.hours}
                    </p>
                    <p className="font-body text-sm text-stone">
                      {siteConfig.emergencyHours}
                    </p>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-mist">
                  <p className="font-body text-stone">Map placeholder</p>
                </div>
              </div>

              {/* Right — Quote Form */}
              <div>
                <h2 className="mb-6 font-display text-2xl font-bold text-ink">
                  Request a quote
                </h2>
                <QuoteForm />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
