import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { products } from "@/data/products";

const BASE = "https://evercareps.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/services",
    "/property-management",
    "/airbnb-turnovers",
    "/commercial",
    "/shop",
    "/subscriptions",
    "/areas",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/shipping-returns",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const servicePages = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const productPages = products.map((p) => ({
    url: `${BASE}/shop/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...productPages];
}
