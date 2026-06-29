import type { Metadata } from "next";
import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "My Account",
  description:
    "Manage your Evercare subscriptions, update payment methods, and view order history.",
};

export default function AccountPage() {
  return (
    <section className="py-[90px]">
      <div className="mx-auto max-w-[1140px] px-[26px]">
        <RevealOnScroll>
          <div className="mx-auto max-w-xl text-center">
            <h1 className="mb-6 font-display text-4xl font-bold text-ink">
              My Account
            </h1>
            <p className="mb-8 font-body text-lg leading-relaxed text-stone">
              Manage your subscriptions, update payment methods, and view order
              history.
            </p>

            <div className="rounded-2xl border border-line bg-paper p-8 card-shadow">
              <div className="mb-6 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mist">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-pine"
                    aria-hidden="true"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>

              <h2 className="mb-3 font-display text-xl font-bold text-ink">
                Subscription Management
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-stone">
                View active subscriptions, swap products or scents, skip a
                delivery, update your payment method, or download invoices.
              </p>

              <button
                type="button"
                className="btn btn-primary w-full"
                aria-label="Manage Subscription — redirects to Stripe Customer Portal"
              >
                Manage Subscription
              </button>

              <p className="mt-4 text-xs text-stone/60">
                In production, this button redirects to the Stripe Customer
                Portal where you can manage billing, subscriptions, and payment
                methods securely.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/subscriptions"
                className="text-sm font-medium text-pine hover:underline"
              >
                View subscription plans
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
