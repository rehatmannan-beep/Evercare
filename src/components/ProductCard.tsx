import Link from "next/link";

interface ProductCardProps {
  name: string;
  slug: string;
  price: number;
  category: string;
  subscribable: boolean;
  image?: string;
}

function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

export function ProductCard({
  name,
  slug,
  price,
  category,
  subscribable,
  image,
}: ProductCardProps) {
  return (
    <Link
      href={`/shop/${slug}`}
      className="group block overflow-hidden rounded-2xl border border-line bg-paper card-shadow transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image / placeholder */}
      <div className="relative flex h-48 items-center justify-center bg-mist">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-stone/40"
            aria-hidden="true"
          >
            <path d="M3 9l9-5 9 5-9 5-9-5z" />
            <path d="M3 9v6l9 5 9-5V9" />
            <path d="M12 14v6" />
          </svg>
        )}
        {subscribable && (
          <span className="absolute right-3 top-3 rounded-full bg-pine px-3 py-1 text-xs font-semibold text-white">
            Subscribe &amp; save
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-stone">
          {category}
        </p>
        <h3 className="mb-2 font-display text-base font-semibold text-ink">{name}</h3>
        <p className="font-body text-lg font-bold text-pine">{formatPrice(price)}</p>
      </div>
    </Link>
  );
}
