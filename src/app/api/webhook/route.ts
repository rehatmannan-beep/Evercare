import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature");

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeKey || !webhookSecret || !sig) {
    return NextResponse.json({ error: "Not configured" }, { status: 400 });
  }

  try {
    const stripe = require("stripe")(stripeKey);
    const event = stripe.webhooks.constructEvent(body, sig, webhookSecret);

    switch (event.type) {
      case "checkout.session.completed":
        console.log("Order completed:", event.data.object.id);
        // TODO: Send confirmation email via Resend
        break;
      case "invoice.paid":
        console.log("Invoice paid:", event.data.object.id);
        break;
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted":
        console.log(
          "Subscription event:",
          event.type,
          event.data.object.id,
        );
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
