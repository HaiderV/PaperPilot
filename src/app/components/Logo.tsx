interface LogoMarkProps {
  size?: number;
  className?: string;
}

export function LogoMark({ size = 36, className = "" }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="pp-badge" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#006aff" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="pp-wing-top" x1="4" y1="4" x2="36" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00f5ff" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="pp-wing-bot" x1="4" y1="36" x2="36" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00f5ff" stopOpacity="0.6" />
        </linearGradient>
        <filter id="pp-glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Badge */}
      <rect x="0.5" y="0.5" width="39" height="39" rx="10" fill="url(#pp-badge)" />
      <rect x="0.5" y="0.5" width="39" height="39" rx="10" stroke="#00f5ff" strokeOpacity="0.3" strokeWidth="1" />

      {/* Paper plane — top wing (bright) */}
      <path
        d="M5 5 L35 20 L15 20 Z"
        fill="url(#pp-wing-top)"
        filter="url(#pp-glow)"
      />

      {/* Paper plane — bottom wing (dimmer, depth) */}
      <path
        d="M5 35 L35 20 L15 20 Z"
        fill="url(#pp-wing-bot)"
      />

      {/* Paper plane — tail body fold */}
      <path
        d="M5 5 L15 20 L5 35 Z"
        fill="#00f5ff"
        fillOpacity="0.12"
        stroke="#00f5ff"
        strokeOpacity="0.4"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />

      {/* Center fold crease */}
      <line
        x1="15" y1="20"
        x2="35" y2="20"
        stroke="#00f5ff"
        strokeOpacity="0.5"
        strokeWidth="0.8"
      />

      {/* Nose highlight dot */}
      <circle cx="35" cy="20" r="1.2" fill="#00f5ff" fillOpacity="0.9" filter="url(#pp-glow)" />
    </svg>
  );
}
