import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Honeypot check
  if (body.website) {
    return NextResponse.json({ success: true });
  }

  // Validate required fields
  const { name, phone, email, service } = body;
  if (!name?.trim())
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  if (!phone || phone.replace(/\D/g, "").length < 10)
    return NextResponse.json(
      { error: "Valid phone is required" },
      { status: 400 },
    );
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
    return NextResponse.json(
      { error: "Valid email is required" },
      { status: 400 },
    );
  if (!service)
    return NextResponse.json(
      { error: "Service selection is required" },
      { status: 400 },
    );

  // Send to configured email via Resend (when API key is set)
  const resendKey = process.env.RESEND_API_KEY;
  const leadEmail = process.env.LEAD_EMAIL || "leads@evercareps.com";

  if (resendKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Evercare Website <noreply@evercareps.com>",
          to: leadEmail,
          subject: `New Lead: ${service} — ${name}`,
          html: `<h2>New Quote Request</h2><p><strong>Name:</strong> ${name}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Email:</strong> ${email}</p><p><strong>Property Type:</strong> ${body.propertyType || "N/A"}</p><p><strong>Service:</strong> ${service}</p><p><strong>Notes:</strong> ${body.notes || "None"}</p>${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ""}${body.numProperties ? `<p><strong>Properties:</strong> ${body.numProperties}</p>` : ""}`,
        }),
      });
    } catch (e) {
      console.error("Failed to send email:", e);
    }
  }

  // Optional CRM webhook
  const crmWebhook = process.env.CRM_WEBHOOK_URL;
  if (crmWebhook) {
    try {
      await fetch(crmWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (e) {
      console.error("CRM webhook failed:", e);
    }
  }

  return NextResponse.json({ success: true });
}
