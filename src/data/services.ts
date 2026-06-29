export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  tag?: string;
  icon: string;
  heroTitle: string;
  heroDescription: string;
  blurb: string;
  included: string[];
  forWho: string[];
  seasons: string[];
  pricingNote: string;
  faqs: ServiceFAQ[];
}

export const services: Service[] = [
  {
    slug: "house-office-cleaning",
    name: "House & Office Cleaning",
    tag: "Most Popular",
    icon: "clean",
    heroTitle: "Walk Into a Spotless Space Every Single Time",
    heroDescription:
      "Recurring or one-time deep cleans for homes, offices, and rental properties. We bring our own supplies, follow a detailed checklist, and leave every surface gleaming.",
    blurb:
      "Professional cleaning tailored to your space — whether it's a 1-bedroom apartment or a 10,000 sq ft office. Recurring plans, move-in/move-out cleans, and Airbnb turnovers available.",
    included: [
      "Kitchen deep clean (appliances, counters, backsplash)",
      "Bathroom sanitization and grout scrubbing",
      "Dusting all surfaces, baseboards, and ceiling fans",
      "Vacuuming and mopping all floors",
      "Trash removal and liner replacement",
      "Interior window sill and track cleaning",
      "Bed making and linen change (if provided)",
      "Fridge and oven interior (deep clean add-on)",
    ],
    forWho: [
      "Homeowners wanting recurring weekly or biweekly service",
      "Airbnb and short-term rental hosts needing turnover cleans",
      "Landlords preparing units for new tenants",
      "Offices and commercial spaces",
      "Property managers overseeing multiple units",
    ],
    seasons: ["spring", "summer", "fall", "winter"],
    pricingNote:
      "Pricing starts at $120 for a standard 1BR apartment clean. Custom quotes for larger spaces and recurring plans.",
    faqs: [
      {
        q: "Do you bring your own cleaning supplies?",
        a: "Yes. We arrive fully equipped with professional-grade, eco-friendly products. If you have preferred products, just let us know.",
      },
      {
        q: "How long does a typical cleaning take?",
        a: "A standard 2-bedroom home takes about 2–3 hours. Larger properties or deep cleans may take longer — we'll confirm timing when you book.",
      },
      {
        q: "Can I schedule recurring service?",
        a: "Absolutely. We offer weekly, biweekly, and monthly plans at discounted rates compared to one-time bookings.",
      },
      {
        q: "Do you handle Airbnb turnover cleans?",
        a: "Yes — turnover cleans are one of our specialties. We can coordinate with your checkout/check-in schedule and restock Evercare Essentials products.",
      },
    ],
  },
  {
    slug: "snow-removal",
    name: "Snow Removal",
    tag: "Seasonal",
    icon: "snow",
    heroTitle: "Wake Up to Clear Driveways, Walkways, and Lots",
    heroDescription:
      "Reliable snow plowing, shoveling, and ice management for residential and commercial properties. 24/7 response during winter storms.",
    blurb:
      "Don't let snow shut down your property. Our crews monitor weather forecasts and deploy proactively so your driveways, sidewalks, and parking lots stay safe and accessible.",
    included: [
      "Driveway and parking lot plowing",
      "Sidewalk and walkway shoveling",
      "Rock salt and ice melt application",
      "Steps and entryway clearing",
      "Post-storm cleanup passes",
      "Seasonal contracts with priority response",
      "24/7 emergency dispatch during active storms",
      "Photo documentation of completed work",
    ],
    forWho: [
      "Homeowners with driveways and walkways",
      "Commercial properties and office parks",
      "Landlords responsible for tenant safety",
      "Property managers with multi-site portfolios",
      "Retail storefronts needing ADA-compliant access",
    ],
    seasons: ["winter"],
    pricingNote:
      "Seasonal contracts start at $299/month (Nov–Mar). Per-event pricing also available for one-off storms.",
    faqs: [
      {
        q: "What triggers a snow removal visit?",
        a: "We deploy when accumulation reaches 2 inches or more. Seasonal contract clients get priority dispatch within 2 hours of trigger.",
      },
      {
        q: "Do you offer ice-only treatments?",
        a: "Yes. Pre-storm brine applications and post-storm salt/ice melt treatments are available as standalone services or add-ons.",
      },
      {
        q: "Are seasonal contracts worth it?",
        a: "For most properties in our area, yes. Seasonal contracts lock in a flat monthly rate and guarantee priority response — no scrambling during a storm.",
      },
    ],
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    icon: "pressure",
    heroTitle: "Restore Your Property's Curb Appeal in One Visit",
    heroDescription:
      "High-pressure and soft-wash cleaning for driveways, siding, decks, patios, fences, and commercial exteriors. Instant results, no harsh chemicals on delicate surfaces.",
    blurb:
      "Years of grime, mildew, and weather stains disappear in a single session. We match PSI and technique to every surface — from vinyl siding to stamped concrete.",
    included: [
      "Driveway and sidewalk pressure washing",
      "Vinyl, brick, and stucco siding soft wash",
      "Deck and patio surface cleaning",
      "Fence cleaning and brightening",
      "Garage floor degreasing",
      "Exterior stairway and entryway cleaning",
      "Pre-treatment for mold, mildew, and algae",
      "Post-wash inspection and spot treatment",
    ],
    forWho: [
      "Homeowners preparing for sale or entertaining",
      "Landlords refreshing units between tenants",
      "Commercial properties maintaining professional appearance",
      "HOA communities requiring exterior standards",
      "Restaurants and retail with outdoor seating areas",
    ],
    seasons: ["spring", "summer", "fall"],
    pricingNote:
      "Driveways start at $150. Full-home exterior wash packages from $350. Free estimates for commercial properties.",
    faqs: [
      {
        q: "Will pressure washing damage my siding?",
        a: "No — we use soft-wash techniques with lower PSI and specialized detergents on delicate surfaces like vinyl, stucco, and painted wood.",
      },
      {
        q: "How often should I pressure wash my property?",
        a: "Most homes benefit from an annual wash in spring. High-traffic commercial areas may need quarterly service.",
      },
      {
        q: "Can you remove oil stains from my driveway?",
        a: "Yes. We use commercial-grade degreasers combined with high-pressure washing to lift oil, rust, and grease stains from concrete and asphalt.",
      },
    ],
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    icon: "landscape",
    heroTitle: "Transform Your Outdoor Space Into Something You Love",
    heroDescription:
      "Design, installation, and seasonal maintenance for gardens, beds, hardscaping, and outdoor living spaces. From concept to completion, we handle every detail.",
    blurb:
      "Whether you need a full landscape redesign or seasonal bed maintenance, our team creates outdoor spaces that look great year-round and increase property value.",
    included: [
      "Landscape design and consultation",
      "Shrub, tree, and flower bed installation",
      "Mulch, rock, and ground cover application",
      "Retaining wall and border installation",
      "Seasonal flower rotations (spring/fall)",
      "Shrub trimming and hedge shaping",
      "Drainage grading and French drain installation",
      "Landscape lighting design and installation",
    ],
    forWho: [
      "Homeowners investing in curb appeal",
      "New construction needing full landscape plans",
      "Property managers maintaining common areas",
      "Commercial properties enhancing tenant experience",
      "Real estate investors increasing property value",
    ],
    seasons: ["spring", "summer", "fall"],
    pricingNote:
      "Design consultations start at $150. Installation projects quoted per scope. Seasonal maintenance plans from $199/month.",
    faqs: [
      {
        q: "Do you provide landscape design services?",
        a: "Yes. We offer full design consultations including 3D renderings, plant selection, and phased installation plans to fit your budget.",
      },
      {
        q: "What's included in seasonal maintenance?",
        a: "Seasonal plans cover mulch refresh, bed weeding, shrub trimming, flower rotations, leaf cleanup, and winterization of plantings.",
      },
      {
        q: "Can you work with my existing landscaping?",
        a: "Absolutely. We can enhance, maintain, or selectively redesign portions of your existing landscape without starting from scratch.",
      },
      {
        q: "Do you handle hardscaping like patios and walkways?",
        a: "Yes. We install pavers, natural stone patios, walkways, retaining walls, and decorative borders as part of our landscaping services.",
      },
    ],
  },
  {
    slug: "lawn-grass-cutting",
    name: "Lawn & Grass Cutting",
    icon: "grass",
    heroTitle: "A Perfectly Maintained Lawn Without Lifting a Finger",
    heroDescription:
      "Weekly and biweekly lawn mowing, edging, and trimming to keep your yard looking its best all season. Reliable scheduling, professional results.",
    blurb:
      "Consistent, professional lawn care that keeps your yard healthy and sharp. Our crews follow best practices for mowing height, pattern rotation, and clipping management.",
    included: [
      "Lawn mowing with pattern rotation",
      "Edging along driveways, sidewalks, and beds",
      "String trimming around obstacles and fences",
      "Grass clipping cleanup and blowing",
      "Seasonal mowing height adjustment",
      "Basic weed spot-treatment in lawn areas",
      "Spring dethatching and aeration (add-on)",
      "Fall overseeding and fertilization (add-on)",
    ],
    forWho: [
      "Homeowners wanting hassle-free lawn care",
      "Landlords maintaining rental property exteriors",
      "Property managers with multi-unit communities",
      "Commercial campuses and office parks",
      "Vacation homeowners needing remote lawn care",
    ],
    seasons: ["spring", "summer", "fall"],
    pricingNote:
      "Weekly mowing starts at $40/visit for standard residential lots. Seasonal contracts available with spring/fall add-ons bundled.",
    faqs: [
      {
        q: "How often should my lawn be mowed?",
        a: "During peak growing season (May–September), we recommend weekly mowing. Biweekly works well for slower-growth periods in spring and fall.",
      },
      {
        q: "Do you adjust mowing height seasonally?",
        a: "Yes. We raise the cutting height in summer to reduce heat stress and lower it in fall to prepare for winter dormancy.",
      },
      {
        q: "What happens if it rains on my scheduled day?",
        a: "We'll reschedule to the next available dry day, typically within 24–48 hours. Seasonal contract clients always get priority rescheduling.",
      },
    ],
  },
  {
    slug: "pool-servicing",
    name: "Pool Servicing",
    icon: "pool",
    heroTitle: "Crystal-Clear Pool Water, Zero Hassle",
    heroDescription:
      "Complete pool maintenance including chemical balancing, cleaning, equipment checks, and seasonal opening/closing. Enjoy your pool without the chemistry homework.",
    blurb:
      "From weekly skimming and chemical testing to full seasonal openings and closings, we keep your pool swim-ready and equipment running smoothly.",
    included: [
      "Weekly water testing and chemical balancing",
      "Surface skimming and debris removal",
      "Brushing walls, tiles, and waterline",
      "Vacuuming pool floor",
      "Filter cleaning and backwashing",
      "Pump and skimmer basket cleaning",
      "Seasonal pool opening (uncovering, startup, first treatment)",
      "Seasonal pool closing (winterization, cover installation)",
    ],
    forWho: [
      "Homeowners with in-ground or above-ground pools",
      "Airbnb hosts offering pool amenities to guests",
      "Community pools and HOA common areas",
      "Commercial properties with pool facilities",
      "Vacation property owners needing remote pool care",
    ],
    seasons: ["spring", "summer", "fall"],
    pricingNote:
      "Weekly maintenance plans from $175/month. Seasonal opening/closing packages from $350 each. Chemical costs included in all plans.",
    faqs: [
      {
        q: "What chemicals do you use?",
        a: "We use professional-grade chlorine, pH balancers, algaecides, and stabilizers. All chemicals are included in our maintenance plans — no surprise costs.",
      },
      {
        q: "How early should I schedule my pool opening?",
        a: "We recommend booking your opening by mid-March to secure a slot in April or early May, before temperatures consistently hit 70°F.",
      },
      {
        q: "Do you service above-ground pools?",
        a: "Yes. We service both in-ground and above-ground pools of all sizes, including seasonal setup and teardown for soft-sided pools.",
      },
    ],
  },
  {
    slug: "hvac-servicing",
    name: "HVAC Servicing",
    icon: "hvac",
    heroTitle: "Stay Comfortable Year-Round With Properly Maintained Systems",
    heroDescription:
      "Professional HVAC tune-ups, filter changes, and preventive maintenance to keep your heating and cooling systems running efficiently and reliably.",
    blurb:
      "Regular HVAC maintenance extends equipment life, reduces energy bills, and prevents costly breakdowns. We service all major brands of furnaces, air conditioners, and heat pumps.",
    included: [
      "Seasonal tune-up (heating in fall, cooling in spring)",
      "Air filter replacement",
      "Thermostat calibration and testing",
      "Refrigerant level check and top-off",
      "Condensate drain line clearing",
      "Electrical connection inspection and tightening",
      "Blower motor and fan inspection",
      "System efficiency report and recommendations",
    ],
    forWho: [
      "Homeowners wanting to extend HVAC system life",
      "Landlords responsible for tenant heating and cooling",
      "Property managers maintaining multiple HVAC units",
      "Commercial buildings with rooftop or split systems",
      "Airbnb hosts ensuring guest comfort",
    ],
    seasons: ["spring", "fall"],
    pricingNote:
      "Single tune-up from $129. Annual maintenance plans (2 visits) from $219. Multi-unit discounts available for landlords and property managers.",
    faqs: [
      {
        q: "How often should HVAC systems be serviced?",
        a: "Twice a year — once in spring before cooling season and once in fall before heating season. This catches issues early and keeps efficiency high.",
      },
      {
        q: "Do you service all HVAC brands?",
        a: "Yes. Our technicians are trained on all major brands including Carrier, Trane, Lennox, Rheem, Goodman, and Mitsubishi mini-splits.",
      },
      {
        q: "Will maintenance really lower my energy bills?",
        a: "A well-maintained system runs 15–25% more efficiently than a neglected one. Most homeowners see the tune-up pay for itself within a few months.",
      },
    ],
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    icon: "gutter",
    heroTitle: "Protect Your Property From Water Damage Before It Starts",
    heroDescription:
      "Thorough gutter and downspout cleaning to prevent clogs, overflow, foundation damage, and ice dams. Includes inspection and minor repairs.",
    blurb:
      "Clogged gutters cause thousands in water damage every year. Our crews remove debris, flush downspouts, and inspect for damage — so water flows where it should.",
    included: [
      "Removal of leaves, twigs, and debris from all gutters",
      "Downspout flushing and clog clearing",
      "Gutter bracket and hanger inspection",
      "Minor resealing of leaking joints",
      "Roof edge debris clearing",
      "Ground-level cleanup of all removed debris",
      "Before/after photo documentation",
      "Gutter guard assessment and recommendations",
    ],
    forWho: [
      "Homeowners with mature trees near the roofline",
      "Landlords maintaining multi-family properties",
      "Property managers overseeing seasonal maintenance",
      "Commercial buildings with large gutter systems",
      "Homeowners looking to prevent ice dams in winter",
    ],
    seasons: ["spring", "fall"],
    pricingNote:
      "Standard residential gutter cleaning from $150. Twice-yearly plans (spring + fall) from $250. Multi-story and commercial properties quoted on-site.",
    faqs: [
      {
        q: "How often should gutters be cleaned?",
        a: "At minimum twice a year — in late spring after pollen/seed season and in late fall after leaves drop. Properties with heavy tree cover may need quarterly service.",
      },
      {
        q: "Do you install gutter guards?",
        a: "Yes. We install and maintain several types of gutter guards. We'll recommend the best option based on your tree coverage and roof type during our cleaning visit.",
      },
      {
        q: "What happens if you find gutter damage?",
        a: "We document any damage with photos and provide a repair estimate on the spot. Minor resealing is included in the cleaning; larger repairs are quoted separately.",
      },
    ],
  },
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    icon: "window",
    heroTitle: "Let the Light In With Streak-Free, Sparkling Windows",
    heroDescription:
      "Interior and exterior window cleaning for homes and commercial buildings. Professional squeegee technique, no streaks, no drips, no ladders for you to climb.",
    blurb:
      "Clean windows transform how a space looks and feels. Our technicians use professional-grade tools and purified water systems for a spotless, streak-free finish inside and out.",
    included: [
      "Interior and exterior glass cleaning",
      "Screen removal, washing, and reinstallation",
      "Sill, track, and frame wiping",
      "Hard water stain removal",
      "Skylight cleaning (where accessible)",
      "Storm window cleaning",
      "French door and glass door cleaning",
      "Post-construction window cleaning (add-on)",
    ],
    forWho: [
      "Homeowners wanting seasonal or annual window cleaning",
      "Real estate agents preparing homes for showing",
      "Commercial storefronts maintaining visibility",
      "Office buildings with interior glass partitions",
      "Airbnb hosts enhancing guest experience",
    ],
    seasons: ["spring", "summer", "fall"],
    pricingNote:
      "Residential window cleaning from $8/window (interior + exterior). Whole-home packages from $250. Commercial storefronts quoted per square footage.",
    faqs: [
      {
        q: "Do you clean both interior and exterior?",
        a: "Yes. Our standard service includes both sides of every window. Exterior-only service is also available at a reduced rate.",
      },
      {
        q: "Can you reach high or hard-to-access windows?",
        a: "Yes. We use water-fed pole systems for windows up to 4 stories, eliminating the need for ladders against your building in most cases.",
      },
      {
        q: "How often should windows be professionally cleaned?",
        a: "Most homes benefit from twice-yearly cleaning (spring and fall). Commercial properties with street-facing glass may need monthly service.",
      },
    ],
  },
  {
    slug: "white-boxing",
    name: "White Boxing",
    icon: "whitebox",
    heroTitle: "Get Your Property Rent-Ready or Sale-Ready Fast",
    heroDescription:
      "Complete unit turnover preparation — patching, painting, deep cleaning, and minor repairs to return a space to move-in condition quickly and affordably.",
    blurb:
      "White boxing transforms a lived-in unit into a blank canvas for the next tenant or buyer. We handle everything from spackle and paint to deep cleaning and fixture swaps — all coordinated as one project.",
    included: [
      "Wall patching, sanding, and hole repair",
      "Full interior painting (walls, ceilings, trim)",
      "Deep cleaning of all rooms (kitchen, baths, living areas)",
      "Carpet cleaning or replacement coordination",
      "Light fixture and hardware swap-outs",
      "Appliance cleaning and testing",
      "Minor plumbing and electrical fixes",
      "Final walkthrough inspection with photo report",
    ],
    forWho: [
      "Landlords turning over rental units",
      "Property managers handling tenant transitions",
      "Real estate investors flipping or repositioning units",
      "Airbnb hosts refreshing their space between seasons",
      "Commercial tenants vacating office or retail space",
    ],
    seasons: ["spring", "summer", "fall", "winter"],
    pricingNote:
      "Studio/1BR white boxing from $1,200. 2BR from $1,800. 3BR+ from $2,500. Timeline typically 3–5 business days depending on scope.",
    faqs: [
      {
        q: "What's included in a standard white box?",
        a: "Patching and painting all walls/ceilings, deep cleaning every room, appliance cleaning, light fixture and hardware updates, and a final walkthrough report.",
      },
      {
        q: "How fast can you turn a unit?",
        a: "A standard 1BR unit can be white-boxed in 3 business days. Larger units or those needing flooring or fixture work may take 5–7 days.",
      },
      {
        q: "Can I choose paint colors?",
        a: "Yes. Standard white boxing uses a neutral white/off-white, but we can match any color you specify at no additional cost for standard wall paint.",
      },
      {
        q: "Do you coordinate with flooring and appliance vendors?",
        a: "Yes. We can manage subcontractors for carpet, LVP, and appliance installation as part of the white boxing project so you have a single point of contact.",
      },
    ],
  },
];
