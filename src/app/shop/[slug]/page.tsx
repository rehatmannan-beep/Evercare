import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ProductOptions } from "./ProductOptions";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} — Evercare Essentials`,
    description: product.description,
  };
}

function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    offers: {
      "@type": "Offer",
      price: (product.price / 100).toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-[1140px] px-[26px] py-4">
          <nav className="flex items-center gap-2 text-sm text-stone" aria-label="Breadcrumb">
            <Link href="/shop" className="hover:text-pine transition-colors">
              Shop
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left — Image placeholder */}
            <RevealOnScroll>
              <div className="flex aspect-square items-center justify-center rounded-2xl bg-mist">
                {product.images[0] ? (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full w-full rounded-2xl object-cover"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={64}
                    height={64}
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
              </div>
            </RevealOnScroll>

            {/* Right — Product info */}
            <RevealOnScroll>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pine">
                  {product.category}
                </p>
                <h1 className="mb-4 font-display text-3xl font-bold text-ink md:text-4xl">
                  {product.name}
                </h1>
                <p className="mb-6 font-display text-3xl font-bold text-pine">
                  {formatPrice(product.price)}
                </p>
                <p className="mb-8 font-body text-base leading-relaxed text-stone">
                  {product.description}
                </p>

                {/* Interactive options (client component) */}
                <ProductOptions
                  scents={product.scents}
                  subscribable={product.subscribable}
                  price={product.price}
                />

                {/* Cosmetic details */}
                {product.isCosmetic && (
                  <div className="mt-8 border-t border-line pt-6">
                    <details className="group">
                      <summary className="flex cursor-pointer items-center justify-between font-display text-sm font-semibold text-ink">
                        Ingredients (INCI)
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
                          className="transition-transform group-open:rotate-180"
                          aria-hidden="true"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-stone">
                        Ingredients list provided by manufacturer — replace
                        before launch.
                      </p>
                      <p className="mt-2 text-xs text-stone/60">
                        Net Wt.: [placeholder]
                      </p>
                    </details>
                  </div>
                )}

                {/* Shipping note */}
                <div className="mt-6 flex items-start gap-3 rounded-xl bg-mist p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0 text-pine"
                    aria-hidden="true"
                  >
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                  <p className="text-sm text-stone">
                    Free shipping on orders over $50. Ships within 2-3 business
                    days.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="border-t border-line py-[90px]">
          <div className="mx-auto max-w-[1140px] px-[26px]">
            <RevealOnScroll>
              <h2 className="mb-8 font-display text-2xl font-bold text-ink">
                More in {product.category}
              </h2>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                {related.map((p) => (
                  <ProductCard
                    key={p.id}
                    name={p.name}
                    slug={p.slug}
                    price={p.price}
                    category={p.category}
                    subscribable={p.subscribable}
                    image={p.images[0]}
                  />
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}
    </>
  );
}
