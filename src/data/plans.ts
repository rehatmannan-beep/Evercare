export interface Plan {
  id: string;
  name: string;
  price: number;
  interval: "month";
  features: string[];
  stripePriceId: string;
  perUnit?: boolean;
}

export const plans: Plan[] = [
  {
    id: "plan_host_box_studio_1br",
    name: "Host Box Studio/1BR",
    price: 3900,
    interval: "month",
    features: [
      "Foaming hand soap (1)",
      "Bar soap (2)",
      "Shampoo/Conditioner/Body Wash amenity set (1)",
      "Hand & body lotion (1)",
      "Room & linen scent spray (1)",
      "Paper-goods restock bundle (studio/1BR size)",
      "Multi-surface cleaner (1)",
      "Free shipping every month",
      "Swap scents anytime",
    ],
    stripePriceId: "price_placeholder_host_box_studio_1br",
  },
  {
    id: "plan_host_box_2br",
    name: "Host Box 2BR",
    price: 5900,
    interval: "month",
    features: [
      "Foaming hand soap (2)",
      "Bar soap (3)",
      "Shampoo/Conditioner/Body Wash amenity set (2)",
      "Hand & body lotion (2)",
      "Room & linen scent spray (1)",
      "Paper-goods restock bundle (2BR size)",
      "Multi-surface cleaner (1)",
      "Free shipping every month",
      "Swap scents anytime",
    ],
    stripePriceId: "price_placeholder_host_box_2br",
  },
  {
    id: "plan_host_box_3br_plus",
    name: "Host Box 3BR+",
    price: 8900,
    interval: "month",
    features: [
      "Foaming hand soap (3)",
      "Bar soap (4)",
      "Shampoo/Conditioner/Body Wash amenity set (3)",
      "Hand & body lotion (3)",
      "Room & linen scent spray (2)",
      "Reed diffuser (1)",
      "Paper-goods restock bundle (3BR+ size)",
      "Multi-surface cleaner (2)",
      "Free shipping every month",
      "Swap scents anytime",
      "Priority support",
    ],
    stripePriceId: "price_placeholder_host_box_3br_plus",
  },
  {
    id: "plan_commercial_restroom_restock",
    name: "Commercial Restroom Restock",
    price: 4500,
    interval: "month",
    features: [
      "Foaming hand soap (2)",
      "Hand sanitizer (1)",
      "Paper-goods restock (commercial restroom quantity)",
      "Multi-surface cleaner (1)",
      "Trash liners (1 roll)",
      "Monthly delivery per restroom",
      "Flexible quantities — scales with your restroom count",
      "Net-30 invoicing available for 5+ restrooms",
    ],
    stripePriceId: "price_placeholder_commercial_restroom",
    perUnit: true,
  },
];
