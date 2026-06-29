import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description:
    "Shipping, returns, and subscription policies for Evercare Essentials products.",
};

export default function ShippingReturnsPage() {
  return (
    <section className="py-[90px]">
      <div className="mx-auto max-w-[1140px] px-[26px]">
        <div className="prose prose-lg mx-auto max-w-3xl font-body text-ink prose-headings:font-display prose-headings:text-ink prose-p:text-stone prose-a:text-pine prose-li:text-stone">
          <h1>Shipping &amp; Returns</h1>
          <p>
            Thank you for shopping with {siteConfig.productLine}. Below you will
            find our policies on shipping, returns, and subscriptions.
          </p>

          <h2>Shipping</h2>
          <h3>Processing Time</h3>
          <p>
            Orders are processed within 1&ndash;3 business days after payment is
            confirmed. Orders placed on weekends or holidays will be processed
            the next business day.
          </p>

          <h3>Delivery Time</h3>
          <p>
            Standard shipping within the contiguous United States takes
            3&ndash;7 business days after processing. Expedited shipping options
            may be available at checkout.
          </p>

          <h3>Free Shipping</h3>
          <p>
            Orders over $50 qualify for free standard shipping. This offer
            applies to the contiguous United States only.
          </p>

          <h3>Order Tracking</h3>
          <p>
            You will receive a shipping confirmation email with tracking
            information once your order has shipped. If you do not receive
            tracking within 5 business days, please contact us.
          </p>

          <h2>Returns</h2>
          <h3>30-Day Return Policy</h3>
          <p>
            We accept returns within 30 days of delivery. To be eligible for a
            return, items must be unused, unopened, and in their original
            packaging.
          </p>

          <h3>How to Return</h3>
          <p>
            To initiate a return, please contact us at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or
            call <a href={siteConfig.phoneHref}>{siteConfig.phone}</a> to
            request a Return Merchandise Authorization (RMA) number. Returns
            sent without an RMA number may not be accepted.
          </p>

          <h3>Refunds</h3>
          <p>
            Once we receive and inspect your return, we will process your refund
            to the original payment method within 5&ndash;10 business days.
            Original shipping costs are non-refundable unless the return is due
            to our error.
          </p>

          <h3>Damaged or Defective Items</h3>
          <p>
            If you receive a damaged or defective product, please contact us
            within 7 days of delivery. We will arrange a replacement or full
            refund at no additional cost.
          </p>

          <h2>Subscriptions</h2>
          <h3>Flexibility</h3>
          <p>
            All subscription products can be paused, skipped, or cancelled at
            any time through your customer portal. There are no long-term
            commitments or cancellation fees.
          </p>

          <h3>Billing</h3>
          <p>
            Subscriptions are billed automatically at the start of each billing
            cycle. You will receive an email notification before each charge.
          </p>

          <h3>Changes</h3>
          <p>
            You can update your subscription preferences, shipping address, or
            payment method at any time through your customer portal. Changes
            made before the billing date will apply to the next shipment.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about shipping, returns, or subscriptions,
            please reach out:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              Phone:{" "}
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            </li>
            <li>Hours: {siteConfig.hours}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
