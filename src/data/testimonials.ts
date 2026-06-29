export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  note: string;
}

/**
 * Sample testimonials for layout and design purposes.
 * All names and quotes are illustrative — replace with real customer
 * testimonials before launch.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "We used to have separate companies for lawn care, snow removal, and cleaning. Evercare replaced all three, and our property has never looked better. One invoice, one point of contact — it just works.",
    name: "Sample Reviewer",
    role: "Homeowner",
    note: "Illustrative — replace with real testimonials before launch.",
  },
  {
    quote:
      "I manage 14 rental units across Bergen County. Evercare handles turnovers, seasonal maintenance, and emergency snow removal for all of them. They've cut my vendor management time in half and my tenants notice the difference.",
    name: "Sample Reviewer",
    role: "Landlord",
    note: "Illustrative — replace with real testimonials before launch.",
  },
  {
    quote:
      "My Airbnb ratings went from 4.6 to 4.9 after switching to Evercare for turnovers. The cleaning is spotless, and the Essentials products guests find in the bathroom get compliments in almost every review.",
    name: "Sample Reviewer",
    role: "Airbnb Host",
    note: "Illustrative — replace with real testimonials before launch.",
  },
  {
    quote:
      "Coordinating maintenance across a 200-unit portfolio used to be a nightmare. Evercare gives us a single vendor for cleaning, landscaping, HVAC, and snow — with real reporting and accountability. They've become an extension of our operations team.",
    name: "Sample Reviewer",
    role: "Property Manager",
    note: "Illustrative — replace with real testimonials before launch.",
  },
  {
    quote:
      "Our office building's common areas, restrooms, and exterior have never been this well-maintained. The restroom restock subscription alone saves us hours of ordering every month. Professional, reliable, and easy to work with.",
    name: "Sample Reviewer",
    role: "Commercial Tenant",
    note: "Illustrative — replace with real testimonials before launch.",
  },
];
