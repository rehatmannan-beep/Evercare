import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <section className="py-[90px]">
      <div className="mx-auto max-w-[1140px] px-[26px]">
        <div className="prose prose-lg mx-auto max-w-3xl font-body text-ink prose-headings:font-display prose-headings:text-ink prose-p:text-stone prose-a:text-pine prose-li:text-stone">
          <h1>Privacy Policy</h1>
          <p>
            <strong>Effective date:</strong> January 1, 2025
          </p>
          <p>
            {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) operates the website at{" "}
            <a href={siteConfig.url}>{siteConfig.url}</a>. This Privacy Policy
            describes how we collect, use, and protect your personal information
            when you visit our website, request a quote, purchase products, or
            use our services.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Contact information:</strong> name, email address, phone
              number, and mailing address when you request a quote, place an
              order, or contact us.
            </li>
            <li>
              <strong>Property information:</strong> property type, address, and
              service needs provided through our quote request forms.
            </li>
            <li>
              <strong>Payment information:</strong> credit card and billing
              details processed securely through Stripe. We do not store your
              full credit card number on our servers.
            </li>
            <li>
              <strong>Usage data:</strong> pages visited, time spent on site,
              referring URLs, browser type, and device information collected
              automatically through analytics tools.
            </li>
            <li>
              <strong>Cookies and tracking:</strong> we use cookies and similar
              technologies to improve site functionality and analyze traffic.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to quote requests and provide service estimates.</li>
            <li>To process product orders and subscriptions.</li>
            <li>To communicate about your services, orders, and account.</li>
            <li>To send promotional materials (with your consent; you may opt out at any time).</li>
            <li>To improve our website, services, and customer experience.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>We use the following third-party services that may collect data:</p>
          <ul>
            <li>
              <strong>Stripe:</strong> for secure payment processing. Stripe&rsquo;s
              privacy policy is available at{" "}
              <a
                href="https://stripe.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                stripe.com/privacy
              </a>
              .
            </li>
            <li>
              <strong>Analytics:</strong> we may use Google Analytics or similar
              tools to understand site usage. These tools use cookies to collect
              anonymous traffic data.
            </li>
            <li>
              <strong>Email services:</strong> we use third-party email
              providers to send transactional and marketing emails.
            </li>
          </ul>

          <h2>Cookies</h2>
          <p>
            Our website uses cookies to remember preferences, analyze traffic,
            and support core functionality. You can disable cookies in your
            browser settings, but some features of our site may not function
            properly without them.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to
            provide our services, fulfill orders, and comply with legal
            obligations. Quote request data is retained for up to 24 months.
            Transaction records are retained as required by applicable tax and
            business regulations.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            personal information, including SSL encryption, secure payment
            processing through Stripe, and access controls on our systems.
            However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your
            personal information at any time by contacting us. If you are a
            California resident, you may have additional rights under the CCPA.
          </p>

          <h2>Children&rsquo;s Privacy</h2>
          <p>
            Our services are not directed at children under 13. We do not
            knowingly collect personal information from children.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated effective date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us:
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
