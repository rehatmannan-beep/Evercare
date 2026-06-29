import Link from "next/link";

interface CTABandProps {
  headline: string;
  description?: string;
  ctaText: string;
  ctaHref: string;
  variant?: "pine" | "dark";
}

export function CTABand({
  headline,
  description,
  ctaText,
  ctaHref,
  variant = "pine",
}: CTABandProps) {
  const bg =
    variant === "dark"
      ? "bg-gradient-to-r from-ink to-pine"
      : "bg-gradient-to-r from-pine to-pine-2";

  return (
    <section className={`${bg} py-16`}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
          {headline}
        </h2>
        {description && (
          <p className="mx-auto mb-8 max-w-2xl font-body text-lg text-white/80">
            {description}
          </p>
        )}
        <Link href={ctaHref} className="btn btn-light">
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
