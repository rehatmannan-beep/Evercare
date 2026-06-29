import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { priceId, mode = "payment", quantity = 1 } = await request.json();

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    return NextResponse.json(
      { error: "Stripe not configured" },
      { status: 500 },
    );
  }

  try {
    const stripe = require("stripe")(stripeKey);
    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price: priceId, quantity }],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/shop?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/shop?canceled=true`,
      ...(mode === "subscription"
        ? {}
        : { shipping_address_collection: { allowed_countries: ["US"] } }),
      automatic_tax: { enabled: true },
    });
    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
