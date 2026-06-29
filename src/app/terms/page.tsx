import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <section className="py-[90px]">
      <div className="mx-auto max-w-[1140px] px-[26px]">
        <div className="prose prose-lg mx-auto max-w-3xl font-body text-ink prose-headings:font-display prose-headings:text-ink prose-p:text-stone prose-a:text-pine prose-li:text-stone">
          <h1>Terms of Service</h1>
          <p>
            <strong>Effective date:</strong> January 1, 2025
          </p>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the{" "}
            {siteConfig.name} website and your purchase of services and products
            from us. By using our website or engaging our services, you agree to
            these Terms.
          </p>

          <h2>1. Service Agreements</h2>
          <p>
            All property services provided by {siteConfig.name} are subject to a
            service agreement that outlines the scope of work, schedule, and
            pricing. Recurring service plans may be adjusted with 30 days&rsquo;
            written notice. We reserve the right to decline or discontinue
            service at our discretion.
          </p>
          <p>
            Service estimates are valid for 30 days from the date of issue
            unless otherwise noted. Final pricing may vary based on actual
            property conditions observed at the time of service.
          </p>

          <h2>2. Product Purchases</h2>
          <p>
            Products sold through our online shop are subject to availability.
            Prices are listed in US dollars and do not include applicable taxes
            or shipping unless stated otherwise. We reserve the right to update
            pricing at any time without prior notice.
          </p>
          <p>
            By placing an order, you represent that all information provided is
            accurate and that you are authorized to use the payment method
            submitted. Orders are subject to acceptance and confirmation by us.
          </p>

          <h2>3. Subscriptions</h2>
          <p>
            Subscription products are billed on a recurring basis (monthly or as
            indicated at checkout). You may pause, skip, or cancel your
            subscription at any time through your customer portal. Cancellations
            take effect at the end of the current billing period. No refunds are
            issued for partial billing periods.
          </p>

          <h2>4. Payment Terms</h2>
          <p>
            Payment for services is due upon completion unless a recurring
            billing arrangement has been established. Product purchases are
            charged at the time of order. All payments are processed securely
            through Stripe.
          </p>
          <p>
            Late payments on service invoices may be subject to a late fee of
            1.5% per month on the outstanding balance.
          </p>

          <h2>5. Cancellations &amp; Rescheduling</h2>
          <p>
            Service appointments may be cancelled or rescheduled with at least
            24 hours&rsquo; notice at no charge. Cancellations made with less
            than 24 hours&rsquo; notice may be subject to a cancellation fee
            equal to 50% of the scheduled service cost.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            {siteConfig.name} shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages arising from the use of
            our services, products, or website. Our total liability for any
            claim arising from our services shall not exceed the amount paid by
            you for the specific service giving rise to the claim.
          </p>
          <p>
            We are not liable for delays or failure to perform due to causes
            beyond our reasonable control, including but not limited to severe
            weather, natural disasters, or government actions.
          </p>

          <h2>7. Property Access &amp; Liability</h2>
          <p>
            By engaging our services, you grant our crews reasonable access to
            the service areas of your property. You are responsible for
            informing us of any hazards, security codes, pet considerations, or
            access restrictions. {siteConfig.name} is not responsible for
            pre-existing property damage or conditions not caused by our crews.
          </p>

          <h2>8. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and
            images, is the property of {siteConfig.name} and is protected by
            applicable intellectual property laws. You may not reproduce,
            distribute, or create derivative works without our written consent.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of the States of New York and New Jersey, without regard to
            conflict of law principles. Any disputes arising from these Terms
            shall be resolved in the state or federal courts located in Bergen
            County, New Jersey or New York County, New York.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Changes will be posted
            on this page with an updated effective date. Continued use of our
            website or services after changes are posted constitutes acceptance
            of the revised Terms.
          </p>

          <h2>11. Contact</h2>
          <p>
            If you have questions about these Terms, please contact us:
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
          </ul>
        </div>
      </div>
    </section>
  );
}
