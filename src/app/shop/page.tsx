import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Shop Evercare Essentials",
  description:
    "Premium amenities and supplies for short-term rentals, commercial properties, and homes. Soaps, lotions, scents, paper goods, and curated welcome kits.",
};

const CATEGORIES = [
  "All",
  "Soaps & Sanitizer",
  "Lotions & Body",
  "Scents & Home",
  "Paper & Cleaning",
  "Welcome Kits",
] as const;

interface ShopPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const { category } = await searchParams;
  const activeCategory = category || "All";

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-sand py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px] text-center">
          <RevealOnScroll>
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-widest text-pine">
              Evercare Essentials
            </p>
            <h1 className="mx-auto mb-6 max-w-3xl font-display text-4xl font-bold text-ink md:text-5xl">
              Premium supplies for every property.
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-stone">
              Quality amenities and supplies your guests will notice and your
              properties deserve. From hand soaps and lotions to welcome kits and
              cleaning essentials — everything ships fast and subscribes for
              effortless restocking.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <nav className="flex gap-2 overflow-x-auto py-4" aria-label="Product categories">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={cat === "All" ? "/shop" : `/shop?category=${encodeURIComponent(cat)}`}
                className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-pine text-white"
                    : "bg-mist text-stone hover:bg-pine/10 hover:text-pine"
                }`}
              >
                {cat}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-[90px]">
        <div className="mx-auto max-w-[1140px] px-[26px]">
          <RevealOnScroll>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  slug={product.slug}
                  price={product.price}
                  category={product.category}
                  subscribable={product.subscribable}
                  image={product.images[0]}
                />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Subscribe & Save Banner */}
      <section className="bg-gradient-to-r from-pine to-pine-2 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <RevealOnScroll>
            <h2 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
              Subscribe &amp; save on every order.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-body text-lg text-white/80">
              Set it and forget it. Choose a subscription plan and never worry
              about running out of essentials again. Cancel or adjust anytime.
            </p>
            <Link href="/subscriptions" className="btn btn-light">
              View Subscription Plans
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
