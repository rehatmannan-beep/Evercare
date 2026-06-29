"use client";

import { useState } from "react";
import { SvgIcon } from "./SvgIcon";
import { serviceNames } from "./icons";

type Season = "spring" | "summer" | "fall" | "winter";

interface SeasonMeta {
  label: string;
  icon: string;
  services: string[];
  subtext: string;
}

const seasons: Record<Season, SeasonMeta> = {
  spring: {
    label: "Spring",
    icon: "leaf",
    services: ["pressure", "window", "clean", "landscape", "gutter", "pool"],
    subtext: "Wash off winter and get the grounds growing again.",
  },
  summer: {
    label: "Summer",
    icon: "sun",
    services: ["grass", "landscape", "pool", "pressure", "window", "hvac"],
    subtext: "Keep lawns sharp, pools clear, and AC running cool.",
  },
  fall: {
    label: "Fall",
    icon: "leaf",
    services: ["gutter", "landscape", "pressure", "pool", "hvac", "whitebox"],
    subtext: "Clear the leaves and button the property up before the cold.",
  },
  winter: {
    label: "Winter",
    icon: "snow",
    services: ["snow", "hvac", "whitebox", "clean", "gutter"],
    subtext: "Snow, ice, and indoor work — we keep you open and safe.",
  },
};

const seasonOrder: Season[] = ["spring", "summer", "fall", "winter"];

function getCurrentSeason(): Season {
  const month = new Date().getMonth(); // 0-11
  if (month >= 2 && month <= 4) return "spring";
  if (month >= 5 && month <= 7) return "summer";
  if (month >= 8 && month <= 10) return "fall";
  return "winter";
}

export function SeasonalPanel() {
  const [active, setActive] = useState<Season>(getCurrentSeason);

  const current = seasons[active];

  return (
    <div>
      {/* Season tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        {seasonOrder.map((key) => {
          const s = seasons[key];
          const isActive = key === active;
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                isActive
                  ? "bg-amber text-white"
                  : "bg-mist text-stone hover:bg-line"
              }`}
            >
              <SvgIcon icon={s.icon} size={16} className="shrink-0" />
              {s.label}
            </button>
          );
        })}
      </div>

      {/* Subtext */}
      <p className="mb-6 font-body text-stone">{current.subtext}</p>

      {/* Service chips */}
      <div className="flex flex-wrap gap-3">
        {current.services.map((svc) => (
          <span
            key={svc}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink"
          >
            <SvgIcon icon={svc} size={16} className="text-pine" />
            {serviceNames[svc] ?? svc}
          </span>
        ))}
      </div>
    </div>
  );
}
