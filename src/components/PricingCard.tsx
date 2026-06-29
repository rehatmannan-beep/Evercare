import Link from "next/link";

interface PricingCardProps {
  name: string;
  price: number;
  interval: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  highlighted?: boolean;
  perUnit?: boolean;
}

export function PricingCard({
  name,
  price,
  interval,
  features,
  ctaText,
  ctaHref,
  highlighted = false,
  perUnit = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-200 ${
        highlighted
          ? "border-amber bg-paper shadow-lg shadow-amber/10 ring-2 ring-amber"
          : "border-line bg-paper card-shadow"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber px-4 py-1 text-xs font-bold text-white">
          Most popular
        </span>
      )}

      {/* Plan name */}
      <h3 className="mb-4 font-display text-xl font-bold text-ink">{name}</h3>

      {/* Price */}
      <div className="mb-6">
        <span className="font-display text-4xl font-bold text-pine">
          ${price}
        </span>
        <span className="ml-1 text-sm text-stone">
          /{interval}
          {perUnit && " per unit"}
        </span>
      </div>

      {/* Features */}
      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-stone">
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
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={ctaHref}
        className={`btn w-full text-center ${
          highlighted ? "btn-primary" : "btn-ghost"
        }`}
      >
        {ctaText}
      </Link>
    </div>
  );
}
