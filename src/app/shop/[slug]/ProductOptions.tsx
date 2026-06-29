"use client";

import { useState } from "react";

interface ProductOptionsProps {
  scents?: string[];
  subscribable: boolean;
  price: number;
}

const FREQUENCIES = [
  { label: "Monthly", value: "1" },
  { label: "Every 2 months", value: "2" },
  { label: "Every 3 months", value: "3" },
] as const;

function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

export function ProductOptions({
  scents,
  subscribable,
  price,
}: ProductOptionsProps) {
  const [selectedScent, setSelectedScent] = useState(scents?.[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [frequency, setFrequency] = useState<string>(FREQUENCIES[0].value);

  return (
    <div className="space-y-6">
      {/* Scent Selector */}
      {scents && scents.length > 0 && (
        <div>
          <label className="mb-2 block text-sm font-semibold text-ink">
            Scent
          </label>
          <div className="flex flex-wrap gap-2">
            {scents.map((scent) => (
              <button
                key={scent}
                type="button"
                onClick={() => setSelectedScent(scent)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  selectedScent === scent
                    ? "border-pine bg-pine text-white"
                    : "border-line bg-paper text-stone hover:border-pine hover:text-pine"
                }`}
              >
                {scent}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity Selector */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-ink">
          Quantity
        </label>
        <div className="inline-flex items-center rounded-lg border border-line">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-4 py-2 text-lg text-stone transition-colors hover:text-ink"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="min-w-[3rem] text-center font-body text-base font-semibold text-ink">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="px-4 py-2 text-lg text-stone transition-colors hover:text-ink"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Buy Options */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="btn btn-primary flex-1"
        >
          Buy once &mdash; {formatPrice(price * quantity)}
        </button>
      </div>

      {subscribable && (
        <div className="rounded-xl border border-pine/20 bg-pine/5 p-5">
          <div className="mb-3 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-pine"
              aria-hidden="true"
            >
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
            <span className="text-sm font-semibold text-pine">
              Subscribe &amp; save 10%
            </span>
          </div>
          <div className="mb-3">
            <label
              htmlFor="frequency"
              className="mb-1 block text-xs font-medium text-stone"
            >
              Delivery frequency
            </label>
            <select
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value as typeof frequency)}
              className="w-full rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine"
            >
              {FREQUENCIES.map((f) => (
                <option key={f.value} value={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            className="btn btn-ghost w-full border-pine text-pine hover:bg-pine hover:text-white"
          >
            Subscribe &mdash; {formatPrice(Math.round(price * quantity * 0.9))}
            /delivery
          </button>
        </div>
      )}
    </div>
  );
}
