export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  price: number;
  images: string[];
  scents?: string[];
  isCosmetic: boolean;
  subscribable: boolean;
  stripePriceOneTime: string;
  stripePriceSubscription: string;
}

export const SCENT_OPTIONS = [
  "Cedar & Sage",
  "Linen & Lily",
  "Coastal Citrus",
  "Amber Oud",
  "Fresh Cotton",
] as const;

export type Scent = (typeof SCENT_OPTIONS)[number];

export const products: Product[] = [
  // ─── Soaps & Sanitizer ──────────────────────────────────────────────
  {
    id: "prod_foaming_hand_soap",
    slug: "foaming-hand-soap",
    name: "Foaming Hand Soap",
    category: "Soaps & Sanitizer",
    description:
      "Rich, plant-derived foaming hand soap that cleans without drying. Formulated with aloe and vitamin E for a gentle, moisturizing wash. Available in five signature Evercare scents.",
    price: 1200,
    images: ["/images/products/foaming-hand-soap.jpg"],
    scents: [...SCENT_OPTIONS],
    isCosmetic: false,
    subscribable: true,
    stripePriceOneTime: "price_placeholder_foaming_hand_soap_once",
    stripePriceSubscription: "price_placeholder_foaming_hand_soap_sub",
  },
  {
    id: "prod_bar_soap",
    slug: "bar-soap",
    name: "Bar Soap",
    category: "Soaps & Sanitizer",
    description:
      "True soap made from saponified plant oils — no synthetic detergents, no sulfates. A dense, long-lasting bar with a clean lather and subtle natural fragrance. Cold-processed in small batches.",
    price: 800,
    images: ["/images/products/bar-soap.jpg"],
    scents: [...SCENT_OPTIONS],
    isCosmetic: false,
    subscribable: true,
    stripePriceOneTime: "price_placeholder_bar_soap_once",
    stripePriceSubscription: "price_placeholder_bar_soap_sub",
  },
  {
    id: "prod_dish_soap",
    slug: "dish-soap",
    name: "Dish Soap",
    category: "Soaps & Sanitizer",
    description:
      "Concentrated, grease-cutting dish soap that powers through stuck-on food while staying gentle on hands. A little goes a long way — one bottle handles weeks of dishes.",
    price: 1000,
    images: ["/images/products/dish-soap.jpg"],
    scents: ["Coastal Citrus", "Fresh Cotton"],
    isCosmetic: false,
    subscribable: true,
    stripePriceOneTime: "price_placeholder_dish_soap_once",
    stripePriceSubscription: "price_placeholder_dish_soap_sub",
  },
  {
    id: "prod_hand_sanitizer",
    slug: "hand-sanitizer",
    name: "Hand Sanitizer",
    category: "Soaps & Sanitizer",
    description:
      "70% ethanol gel hand sanitizer with aloe vera to prevent drying. Fast-absorbing, non-sticky formula in a sleek pump bottle that fits on any counter or nightstand.",
    price: 900,
    images: ["/images/products/hand-sanitizer.jpg"],
    scents: ["Fresh Cotton", "Coastal Citrus"],
    isCosmetic: false,
    subscribable: true,
    stripePriceOneTime: "price_placeholder_hand_sanitizer_once",
    stripePriceSubscription: "price_placeholder_hand_sanitizer_sub",
  },

  // ─── Lotions & Body ─────────────────────────────────────────────────
  {
    id: "prod_hand_body_lotion",
    slug: "hand-body-lotion",
    name: "Hand & Body Lotion",
    category: "Lotions & Body",
    description:
      "Lightweight, fast-absorbing lotion enriched with shea butter, jojoba oil, and vitamin E. Hydrates without greasy residue — perfect for guest bathrooms, bedside tables, and daily use.",
    price: 1400,
    images: ["/images/products/hand-body-lotion.jpg"],
    scents: [...SCENT_OPTIONS],
    isCosmetic: true,
    subscribable: true,
    stripePriceOneTime: "price_placeholder_hand_body_lotion_once",
    stripePriceSubscription: "price_placeholder_hand_body_lotion_sub",
  },
  {
    id: "prod_amenity_set",
    slug: "shampoo-conditioner-body-wash-set",
    name: "Shampoo/Conditioner/Body Wash Amenity Set",
    category: "Lotions & Body",
    description:
      "A matching trio of shampoo, conditioner, and body wash in coordinating Evercare scents. Sulfate-free, paraben-free formulas in elegant pump bottles designed for guest bathrooms and rental properties.",
    price: 2800,
    images: ["/images/products/amenity-set.jpg"],
    scents: [...SCENT_OPTIONS],
    isCosmetic: true,
    subscribable: true,
    stripePriceOneTime: "price_placeholder_amenity_set_once",
    stripePriceSubscription: "price_placeholder_amenity_set_sub",
  },

  // ─── Scents & Home ──────────────────────────────────────────────────
  {
    id: "prod_room_linen_spray",
    slug: "room-linen-scent-spray",
    name: "Room & Linen Scent Spray",
    category: "Scents & Home",
    description:
      "A fine-mist spray that refreshes rooms, linens, and upholstery instantly. Light enough for daily use, long-lasting enough to greet guests with a signature scent when they walk through the door.",
    price: 1500,
    images: ["/images/products/room-linen-spray.jpg"],
    scents: [...SCENT_OPTIONS],
    isCosmetic: true,
    subscribable: true,
    stripePriceOneTime: "price_placeholder_room_linen_spray_once",
    stripePriceSubscription: "price_placeholder_room_linen_spray_sub",
  },
  {
    id: "prod_reed_diffuser",
    slug: "reed-diffuser",
    name: "Reed Diffuser",
    category: "Scents & Home",
    description:
      "Elegant glass-vessel reed diffuser that fills a room with subtle, continuous fragrance for up to 90 days. No flame, no electricity — just set it and enjoy. Ideal for entryways, bathrooms, and common areas.",
    price: 2400,
    images: ["/images/products/reed-diffuser.jpg"],
    scents: [...SCENT_OPTIONS],
    isCosmetic: true,
    subscribable: true,
    stripePriceOneTime: "price_placeholder_reed_diffuser_once",
    stripePriceSubscription: "price_placeholder_reed_diffuser_sub",
  },
  {
    id: "prod_soy_candle",
    slug: "soy-candle",
    name: "Soy Candle",
    category: "Scents & Home",
    description:
      "Hand-poured 100% soy wax candle with a cotton wick and 45+ hour burn time. Clean-burning with no soot or synthetic fragrance — just warm, room-filling scent in a reusable glass jar.",
    price: 2600,
    images: ["/images/products/soy-candle.jpg"],
    scents: [...SCENT_OPTIONS],
    isCosmetic: true,
    subscribable: true,
    stripePriceOneTime: "price_placeholder_soy_candle_once",
    stripePriceSubscription: "price_placeholder_soy_candle_sub",
  },

  // ─── Paper & Cleaning ───────────────────────────────────────────────
  {
    id: "prod_paper_goods_bundle",
    slug: "paper-goods-restock-bundle",
    name: "Paper-Goods Restock Bundle",
    category: "Paper & Cleaning",
    description:
      "Everything your property needs between guest stays or office restocks: premium toilet paper, facial tissues, and paper towels. Bundled in the right quantities for studio, 1BR, 2BR, or 3BR+ units.",
    price: 2200,
    images: ["/images/products/paper-goods-bundle.jpg"],
    isCosmetic: false,
    subscribable: true,
    stripePriceOneTime: "price_placeholder_paper_goods_once",
    stripePriceSubscription: "price_placeholder_paper_goods_sub",
  },
  {
    id: "prod_multi_surface_cleaner",
    slug: "multi-surface-cleaner",
    name: "Multi-Surface Cleaner",
    category: "Paper & Cleaning",
    description:
      "Versatile, plant-based cleaner that works on countertops, glass, stainless steel, tile, and sealed wood. Cuts grease and grime without harsh fumes. Ready-to-use spray bottle.",
    price: 1100,
    images: ["/images/products/multi-surface-cleaner.jpg"],
    scents: ["Fresh Cotton", "Coastal Citrus"],
    isCosmetic: false,
    subscribable: true,
    stripePriceOneTime: "price_placeholder_multi_surface_cleaner_once",
    stripePriceSubscription: "price_placeholder_multi_surface_cleaner_sub",
  },

  // ─── Welcome Kits ───────────────────────────────────────────────────
  {
    id: "prod_host_welcome_kit",
    slug: "host-welcome-kit",
    name: "Host Welcome Kit",
    category: "Welcome Kits",
    description:
      "The complete first-impression package for Airbnb hosts and property managers. Includes foaming hand soap, hand & body lotion, room spray, a soy candle, multi-surface cleaner, and a curated paper-goods set — all in matching Evercare Essentials branding.",
    price: 6500,
    images: ["/images/products/host-welcome-kit.jpg"],
    scents: [...SCENT_OPTIONS],
    isCosmetic: false,
    subscribable: true,
    stripePriceOneTime: "price_placeholder_host_welcome_kit_once",
    stripePriceSubscription: "price_placeholder_host_welcome_kit_sub",
  },
  {
    id: "prod_guest_essentials_mini_kit",
    slug: "guest-essentials-mini-kit",
    name: "Guest Essentials Mini-Kit",
    category: "Welcome Kits",
    description:
      "A compact, guest-ready set with travel-size shampoo, conditioner, body wash, lotion, and a bar soap. Perfect for guest rooms, Airbnb nightstands, or hospitality welcome trays. Beautifully packaged and ready to set out.",
    price: 1800,
    images: ["/images/products/guest-essentials-mini-kit.jpg"],
    scents: [...SCENT_OPTIONS],
    isCosmetic: false,
    subscribable: true,
    stripePriceOneTime: "price_placeholder_guest_mini_kit_once",
    stripePriceSubscription: "price_placeholder_guest_mini_kit_sub",
  },
];
