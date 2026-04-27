import { SVGProps } from "react";

/**
 * Hand-drawn, slightly imperfect Mediterranean icon set.
 * All icons share the same prop surface as lucide-react for drop-in usage:
 *  <Icon size={20} className="text-foo" strokeWidth={1.6} />
 *
 * Style notes:
 *  - 24x24 viewBox
 *  - currentColor stroke, no fill
 *  - rounded caps + joins
 *  - tiny rotational/scale jitter via wrapper to feel sketched
 */

type IconProps = Omit<SVGProps<SVGSVGElement>, "ref"> & {
  size?: number | string;
  strokeWidth?: number;
  /** small visual jitter so repeated icons don't look mechanical */
  jitter?: boolean;
};

const base = (p: IconProps) => {
  const { size = 24, strokeWidth = 1.6, jitter = true, style, ...rest } = p;
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    style: jitter
      ? { transform: "rotate(-1.2deg)", ...style }
      : style,
    ...rest,
  };
};

/* ---------- Communication ---------- */

export const MessageCircle = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4.2 12.3c0-4.4 3.7-7.9 8.1-7.7 4 .2 7.3 3.4 7.5 7.4.2 4.4-3.4 8.1-7.8 8.1-1 0-2-.2-2.9-.6l-3.6.9a.4.4 0 0 1-.5-.5l.9-3.2a7.6 7.6 0 0 1-1.7-4.4Z" />
  </svg>
);

export const Phone = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 4.5c.2-.7.9-1.2 1.6-1.1l2 .3c.6.1 1 .6 1.1 1.2l.5 2.5c.1.5-.1 1-.5 1.3l-1.4 1c.9 2.2 2.6 4 4.8 5l1-1.4c.3-.4.9-.6 1.4-.5l2.5.6c.6.1 1 .6 1.1 1.2l.2 2c.1.7-.4 1.4-1.1 1.6-7 1.6-13-4.5-13.2-11.7Z" />
  </svg>
);

export const Mail = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3.5 6.8c0-1 .8-1.8 1.8-1.9l13.5-.2c1 0 1.8.8 1.8 1.8v10.7c0 1-.8 1.8-1.8 1.8H5.4c-1 0-1.8-.8-1.9-1.7l-.1-10.5Z" />
    <path d="M3.7 7.2 11.6 13c.4.3.9.3 1.3 0l7.3-5.7" />
  </svg>
);

/* ---------- Navigation ---------- */

export const Menu = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 6.5c4.5-.4 11-.4 16 .1" />
    <path d="M4.2 12.2c4.5-.4 11.2-.4 15.6.2" />
    <path d="M4 17.7c4.5-.3 11.2-.3 16 .1" />
  </svg>
);

export const X = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5.6 5.4c4.3 4.4 8.6 8.7 13 13" />
    <path d="M18.4 5.6c-4.3 4.3-8.7 8.7-13 13" />
  </svg>
);

export const ArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3.5 12.1c4.8-.3 11.2-.3 17 .1" />
    <path d="M14.6 6.5c1.7 2 3.6 4 5.9 5.7-2.2 1.7-4.1 3.6-5.7 5.7" />
  </svg>
);

export const ArrowUpRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6.1 18.2c4-4.1 8.1-8.1 12.2-12" />
    <path d="M9 5.6c3 .1 6 .2 9.1.3-.1 3.1 0 6.2.3 9.3" />
  </svg>
);

/* ---------- Coastal ---------- */

export const Anchor = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="5.6" r="1.8" />
    <path d="M12 7.4v12.5" />
    <path d="M8.2 10.4c2.5-.2 5.1-.2 7.6 0" />
    <path d="M4 13.4c.2 3.3 3.2 6.2 6.6 6.6 1 .1 2 .1 3 0 3.3-.4 6.2-3.3 6.4-6.6" />
    <path d="M4 13.4c.7.5 1.5.9 2.4 1.1" />
    <path d="M20 13.4c-.7.5-1.6.9-2.5 1.1" />
  </svg>
);

export const Sun = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="3.8" />
    <path d="M12 2.6v2.1" />
    <path d="M12 19.3v2.1" />
    <path d="M2.6 12h2.1" />
    <path d="M19.3 12h2.1" />
    <path d="M5.4 5.5l1.5 1.5" />
    <path d="M17.1 17.1l1.5 1.5" />
    <path d="M5.4 18.6l1.5-1.5" />
    <path d="M17.1 6.9l1.5-1.5" />
  </svg>
);

export const Moon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20.3 14.6c-.6 4-4.5 7-8.6 6.4-4-.6-6.9-4.4-6.4-8.4.5-3.6 3.4-6.4 7-6.8-1.4 2.4-1.1 5.6 1 7.7 2 2.1 5.2 2.5 7.6 1.1Z" />
    <path d="M16.5 5.2l.3 1.2 1.2.3-1.2.3-.3 1.2-.3-1.2-1.2-.3 1.2-.3z" />
  </svg>
);

export const MapPin = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21.4c-3.4-3.7-6.5-7.2-6.5-11.1 0-3.7 2.9-6.6 6.5-6.6s6.5 2.9 6.5 6.6c0 3.9-3.1 7.4-6.5 11.1Z" />
    <circle cx="12" cy="10.2" r="2.4" />
  </svg>
);

/* ---------- People & feeling ---------- */

export const Users = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="9.2" cy="8.4" r="3.2" />
    <path d="M3.2 19.4c.3-3.1 2.9-5.5 6-5.5s5.7 2.4 6 5.5" />
    <path d="M16.6 5.4c2 .3 3.4 2 3.3 4-.1 1.7-1.4 3.1-3 3.4" />
    <path d="M17.2 14.2c2.3.3 4 2.2 4.1 4.5" />
  </svg>
);

export const Heart = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 20.5c-2-1.4-7.6-5-8.4-9.2-.6-3 1.7-5.7 4.6-5.5 1.7.1 3.1 1.1 3.8 2.6.7-1.5 2.1-2.5 3.8-2.6 2.9-.2 5.2 2.5 4.6 5.5-.8 4.2-6.4 7.8-8.4 9.2Z" />
  </svg>
);

export const Star = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3.4c.9 2 1.7 3.9 2.6 5.8 2.1.3 4.2.6 6.3 1-1.6 1.5-3.2 2.9-4.7 4.4.4 2.1.8 4.2 1.3 6.3-1.9-1-3.7-2-5.5-3-1.8 1-3.6 2-5.5 3 .4-2.1.8-4.2 1.2-6.3-1.6-1.5-3.1-2.9-4.7-4.4 2.1-.4 4.2-.7 6.3-1 .9-1.9 1.8-3.8 2.7-5.8Z" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4.5 12.8c1.6 1.5 3.1 3 4.6 4.6 3.4-4.4 6.9-8.6 10.7-12.5" />
  </svg>
);

export const Clock = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.4" />
    <path d="M12 7.5v4.7l3 2.1" />
  </svg>
);

export const Calendar = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4.5 7.6c0-1 .8-1.9 1.8-1.9h11.4c1 0 1.8.9 1.8 1.9v10.7c0 1-.8 1.9-1.8 1.9H6.3c-1 0-1.8-.8-1.8-1.8V7.6Z" />
    <path d="M4.6 10.4h14.8" />
    <path d="M8.4 4v3.4" />
    <path d="M15.6 4v3.4" />
  </svg>
);

/* ---------- Social ---------- */

export const Instagram = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="4.8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r=".7" fill="currentColor" stroke="none" />
  </svg>
);

export const Facebook = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14.5 21v-7.6h2.4l.4-2.9h-2.8V8.7c0-.8.3-1.4 1.5-1.4h1.5V4.7c-.7-.1-1.6-.2-2.6-.2-2.6 0-4.3 1.5-4.3 4.3v2.7H8.2v2.9H10V21" />
  </svg>
);
