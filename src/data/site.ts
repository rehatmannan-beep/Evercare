export interface SiteConfig {
  name: string;
  shortName: string;
  productLine: string;
  phone: string;
  phoneHref: string;
  email: string;
  leadEmail: string;
  hours: string;
  emergencyHours: string;
  tagline: string;
  description: string;
  url: string;
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Evercare Property Services",
  shortName: "Evercare",
  productLine: "Evercare Essentials",
  phone: "(201) 555-0142",
  phoneHref: "tel:+12015550142",
  email: "hello@evercareps.com",
  leadEmail: "leads@evercareps.com",
  hours: "Mon–Sat, 7am–7pm",
  emergencyHours: "24/7 snow & emergencies",
  tagline: "One call. Every season. Your property, handled.",
  description:
    "Full-service property management plus cleaning, snow removal, pressure washing, landscaping, lawn care, pool & HVAC servicing, gutter and window cleaning, and white boxing. One trusted vendor for homes and properties across New York & New Jersey.",
  url: "https://evercareps.com",
  social: { facebook: "", instagram: "", linkedin: "" },
};
