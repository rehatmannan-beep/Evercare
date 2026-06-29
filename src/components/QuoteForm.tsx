"use client";

import { useState, type FormEvent } from "react";

interface QuoteFormProps {
  variant?: "default" | "b2b" | "str";
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  service: string;
  notes: string;
  // B2B fields
  company: string;
  numProperties: string;
  // STR fields
  numUnits: string;
  bedrooms: string;
  turnoverFrequency: string;
  // Honeypot
  website: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
}

const propertyTypes = [
  "Commercial",
  "Residential",
  "Multi-family",
  "HOA / Community",
  "Short-Term Rental",
  "Other",
];

const services = [
  "Cleaning",
  "Snow Removal",
  "Pressure Washing",
  "Landscaping",
  "Lawn Care",
  "Pool Maintenance",
  "HVAC Service",
  "Gutter Cleaning",
  "Window Washing",
  "White-Box Turns",
  "Other",
];

const turnoverOptions = ["Weekly", "Bi-weekly", "Monthly", "Seasonal", "On-demand"];

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  propertyType: "",
  service: "",
  notes: "",
  company: "",
  numProperties: "",
  numUnits: "",
  bedrooms: "",
  turnoverFrequency: "",
  website: "",
};

export function QuoteForm({ variant = "default" }: QuoteFormProps) {
  const [form, setForm] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Clear error on change
    if (field in errors) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FormErrors];
        return next;
      });
    }
  }

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 10) e.phone = "Please enter a valid phone number (at least 10 digits).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.service) e.service = "Please select a service.";
    return e;
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();

    // Honeypot check
    if (form.website) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, variant }),
      });
      if (!res.ok) throw new Error("Submit failed");
      setSubmitted(true);
    } catch {
      setErrors({ name: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-mist p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-pine text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mb-2 font-display text-xl font-bold text-ink">
          Quote request received!
        </h3>
        <p className="font-body text-stone">
          We&apos;ll review your details and get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
          />
        </label>
      </div>

      {/* B2B: Company name */}
      {variant === "b2b" && (
        <div>
          <label className="mb-1 block text-sm font-medium text-ink">Company name</label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Your company"
          />
        </div>
      )}

      {/* Name */}
      <div>
        <label className="mb-1 block text-sm font-medium text-ink">
          Name <span className="text-amber">*</span>
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-amber">{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="mb-1 block text-sm font-medium text-ink">
          Phone <span className="text-amber">*</span>
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          placeholder="(555) 123-4567"
        />
        {errors.phone && <p className="mt-1 text-sm text-amber">{errors.phone}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="mb-1 block text-sm font-medium text-ink">
          Email <span className="text-amber">*</span>
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-amber">{errors.email}</p>}
      </div>

      {/* Property type */}
      <div>
        <label className="mb-1 block text-sm font-medium text-ink">Property type</label>
        <select
          value={form.propertyType}
          onChange={(e) => update("propertyType", e.target.value)}
        >
          <option value="">Select property type</option>
          {propertyTypes.map((pt) => (
            <option key={pt} value={pt}>
              {pt}
            </option>
          ))}
        </select>
      </div>

      {/* Service needed */}
      <div>
        <label className="mb-1 block text-sm font-medium text-ink">
          Service needed <span className="text-amber">*</span>
        </label>
        <select value={form.service} onChange={(e) => update("service", e.target.value)}>
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-sm text-amber">{errors.service}</p>}
      </div>

      {/* B2B extra fields */}
      {variant === "b2b" && (
        <div>
          <label className="mb-1 block text-sm font-medium text-ink">
            Number of properties / units
          </label>
          <input
            type="text"
            value={form.numProperties}
            onChange={(e) => update("numProperties", e.target.value)}
            placeholder="e.g. 12"
          />
        </div>
      )}

      {/* STR extra fields */}
      {variant === "str" && (
        <>
          <div>
            <label className="mb-1 block text-sm font-medium text-ink">Number of units</label>
            <input
              type="text"
              value={form.numUnits}
              onChange={(e) => update("numUnits", e.target.value)}
              placeholder="e.g. 8"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-ink">Bedrooms per unit</label>
            <input
              type="text"
              value={form.bedrooms}
              onChange={(e) => update("bedrooms", e.target.value)}
              placeholder="e.g. 3"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-ink">Turnover frequency</label>
            <select
              value={form.turnoverFrequency}
              onChange={(e) => update("turnoverFrequency", e.target.value)}
            >
              <option value="">Select frequency</option>
              {turnoverOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      {/* Notes */}
      <div>
        <label className="mb-1 block text-sm font-medium text-ink">Notes</label>
        <textarea
          rows={3}
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          placeholder="Anything else we should know?"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending..." : "Get a Free Quote"}
      </button>
    </form>
  );
}
