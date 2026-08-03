import { cn } from '@/lib/utils';

interface GoodiesBoxLogoProps {
  className?: string;
  size?: number;
  showGlow?: boolean;
}

/**
 * GoodiesBox custom logomark.
 * A mystery box being ripped open — sharp torn lid, star burst emerging from the tear.
 * Designed to work at navbar scale (28px) and larger.
 */
export function GoodiesBoxMark({ className, size = 28, showGlow = true }: GoodiesBoxLogoProps) {
  const id = `gb-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('flex-shrink-0', className)}
      aria-hidden="true"
    >
      <defs>
        {/* Lid gradient — cyan left, pink right */}
        <linearGradient id={`${id}-lid`} x1="0" y1="0" x2="28" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#FF3CAC" />
        </linearGradient>
        {/* Star burst gradient */}
        <linearGradient id={`${id}-star`} x1="14" y1="2" x2="14" y2="13" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE600" />
          <stop offset="55%" stopColor="#FF3CAC" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
        {/* Box body inner fill */}
        <linearGradient id={`${id}-box`} x1="3" y1="13" x2="25" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#111124" />
          <stop offset="100%" stopColor="#0A0A18" />
        </linearGradient>
        {/* Cyan glow filter */}
        {showGlow && (
          <filter id={`${id}-glow`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
        {/* Pink glow for star */}
        {showGlow && (
          <filter id={`${id}-starglow`} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>

      {/* ── Box body ── */}
      <path
        d="M3 13.5 L25 13.5 L25 26 Q25 27 24 27 L4 27 Q3 27 3 26 Z"
        fill={`url(#${id}-box)`}
        stroke="#00E5FF"
        strokeWidth="1.4"
        filter={showGlow ? `url(#${id}-glow)` : undefined}
      />

      {/* Vertical ribbon down box center */}
      <rect x="12.2" y="13.5" width="3.6" height="13.5" fill={`url(#${id}-lid)`} opacity="0.35" />

      {/* ── Torn lid — left wing (angled up-left) ── */}
      <path
        d="M3 10.5 L13.2 13.5 L3 13.5 Z"
        fill={`url(#${id}-lid)`}
        opacity="0.92"
      />
      {/* ── Torn lid — right wing (angled up-right) ── */}
      <path
        d="M25 10.5 L14.8 13.5 L25 13.5 Z"
        fill={`url(#${id}-lid)`}
        opacity="0.92"
      />

      {/* Lid top edge line — thin separator */}
      <line x1="3" y1="10.5" x2="25" y2="10.5" stroke={`url(#${id}-lid)`} strokeWidth="1.2" opacity="0.5" />

      {/* ── 4-pointed star burst at the tear ── */}
      {/* Centered at (14, 8) — 4-point diamond star */}
      <path
        d="M14 2.5 L15.35 6.8 L19.8 7.0 L16.3 9.7 L17.6 14.0 L14 11.5 L10.4 14.0 L11.7 9.7 L8.2 7.0 L12.65 6.8 Z"
        fill={`url(#${id}-star)`}
        filter={showGlow ? `url(#${id}-starglow)` : undefined}
      />

      {/* Small diamond knot at center of star */}
      <path
        d="M14 6 L15.1 7.8 L14 9.6 L12.9 7.8 Z"
        fill="#FFE600"
        opacity="0.9"
      />
    </svg>
  );
}

/**
 * Full lockup: mark + wordmark, matches Navbar usage.
 */
export function GoodiesBoxLockup({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-2 group', className)}>
      <GoodiesBoxMark size={28} />
      <span className="font-black text-xl tracking-tight text-gradient-primary">
        GoodiesBox
      </span>
    </span>
  );
}
