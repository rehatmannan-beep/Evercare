export const serviceIcons: Record<string, string> = {
  clean:
    '<path d="M19 11l-7-7-2 2 1.5 1.5L4 16v4h4l7.5-7.5L17 14l2-2z"/><path d="M14 7l3 3"/>',
  snow:
    '<path d="M12 2v20M4.9 5l14.2 14M19.1 5L4.9 19"/><path d="M9 3l3 2 3-2M9 21l3-2 3 2M3 9l2 3-2 3M21 9l-2 3 2 3"/>',
  whitebox:
    '<path d="M3 9l9-5 9 5-9 5-9-5z"/><path d="M3 9v6l9 5 9-5V9"/><path d="M12 14v6"/>',
  pressure:
    '<path d="M3 21h6l1-4h4M14 3h2v4h-2z"/><path d="M16 5h3a2 2 0 0 1 2 2v3M14 7l-7 6"/><path d="M5 13l-1 4"/>',
  landscape:
    '<path d="M12 22V12M12 12c0-3 2-5 5-5 0 3-2 5-5 5zM12 14c0-3-2-5-5-5 0 3 2 5 5 5z"/><path d="M5 22h14"/>',
  grass:
    '<path d="M4 22v-4M8 22v-7M12 22v-9M16 22v-7M20 22v-4"/><path d="M4 18c0-3 1-5 1-5M12 13c0-3 1-5 1-5M20 18c0-3-1-5-1-5"/>',
  pool:
    '<path d="M2 18c2 0 2 1.5 4 1.5S8 18 10 18s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5M2 14c2 0 2 1.5 4 1.5S8 14 10 14"/><path d="M7 14V5a2 2 0 0 1 4 0M14 14V5a2 2 0 0 1 4 0"/>',
  hvac:
    '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M7 20h2M11 20h2M15 20h2M7 8v4M12 8v4M17 8v4"/>',
  gutter:
    '<path d="M3 7h18l-1 4H4z"/><path d="M5 11v3a2 2 0 0 0 2 2M19 11v6"/><path d="M9 18v2M13 18v2"/>',
  window:
    '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M12 3v18M4 12h16"/>',
  sun:
    '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/>',
  leaf:
    '<path d="M11 20A7 7 0 0 1 4 13c0-6 6-9 16-9 0 8-3 14-9 14z"/><path d="M11 20c0-5 2-8 6-11"/>',
};

/** Human-readable names for service icon keys */
export const serviceNames: Record<string, string> = {
  clean: "Cleaning",
  snow: "Snow Removal",
  whitebox: "White-Box Turns",
  pressure: "Pressure Washing",
  landscape: "Landscaping",
  grass: "Lawn Care",
  pool: "Pool Maintenance",
  hvac: "HVAC Service",
  gutter: "Gutter Cleaning",
  window: "Window Washing",
  sun: "Solar Panel Care",
  leaf: "Leaf Removal",
};
