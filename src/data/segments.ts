export interface Segment {
  slug: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export const segments: Segment[] = [
  {
    slug: "homeowners",
    title: "Homeowners",
    description:
      "Keep your home in top shape year-round with one trusted team handling cleaning, lawn care, snow removal, pressure washing, and seasonal maintenance — so you never have to juggle multiple vendors again.",
    icon: "home",
    href: "/",
  },
  {
    slug: "landlords",
    title: "Landlords & Portfolios",
    description:
      "Streamline property upkeep across your entire portfolio. From tenant turnovers and white boxing to recurring maintenance and emergency snow removal, we act as your single-vendor operations partner.",
    icon: "building",
    href: "/property-management",
  },
  {
    slug: "airbnb",
    title: "Airbnb & Short-Term Rentals",
    description:
      "Five-star turnovers on your schedule. We handle cleaning, restocking Evercare Essentials amenities, linen service, and guest-readiness checks — timed to your check-in and check-out windows.",
    icon: "star",
    href: "/airbnb-turnovers",
  },
  {
    slug: "commercial",
    title: "Commercial & CRE",
    description:
      "Professional property services for offices, retail spaces, and commercial real estate. Recurring cleaning, exterior maintenance, HVAC servicing, and seasonal grounds care — all under one contract.",
    icon: "office",
    href: "/commercial",
  },
];
