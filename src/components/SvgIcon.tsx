import { serviceIcons } from "./icons";

interface SvgIconProps {
  icon: string;
  className?: string;
  size?: number;
}

export function SvgIcon({ icon, className = "", size = 24 }: SvgIconProps) {
  const paths = serviceIcons[icon];
  if (!paths) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: paths }}
    />
  );
}
