import Link from "next/link";
import { SvgIcon } from "./SvgIcon";

interface ServiceCardProps {
  name: string;
  slug: string;
  icon: string;
  tag?: string;
  blurb: string;
}

export function ServiceCard({ name, slug, icon, tag, blurb }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group block rounded-2xl border border-line bg-paper p-6 card-shadow transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Icon well */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-mist transition-colors duration-200 group-hover:bg-pine">
        <SvgIcon
          icon={icon}
          className="h-6 w-6 text-pine transition-colors duration-200 group-hover:text-white"
        />
      </div>

      {/* Name + optional tag */}
      <div className="mb-1 flex items-center gap-2">
        <h3 className="font-display text-lg font-semibold text-ink">{name}</h3>
        {tag && (
          <span className="inline-block rounded-full bg-amber/10 px-2.5 py-0.5 text-xs font-semibold text-amber">
            {tag}
          </span>
        )}
      </div>

      {/* Blurb */}
      <p className="font-body text-sm leading-relaxed text-stone">{blurb}</p>
    </Link>
  );
}
