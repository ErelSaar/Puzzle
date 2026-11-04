interface LogoProps {
  size?: number
  className?: string
}

/**
 * Abstract logo mark: a central hub node connected to surrounding nodes,
 * representing multiple capabilities coordinated through one address.
 */
export default function Logo({ size = 36, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Connection lines from peripherals to center — drawn first (behind nodes) */}
      <line x1="24" y1="24" x2="8"  y2="10" stroke="#0f766e" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="24" y1="24" x2="40" y2="10" stroke="#0f766e" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="24" y1="24" x2="6"  y2="27" stroke="#0f766e" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="24" y1="24" x2="42" y2="27" stroke="#0f766e" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="24" y1="24" x2="16" y2="40" stroke="#0f766e" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="24" y1="24" x2="32" y2="40" stroke="#0f766e" strokeWidth="1.4" strokeLinecap="round" />

      {/* Lighter cross-connections between peripheral nodes */}
      <line x1="8"  y1="10" x2="40" y2="10" stroke="#0f766e" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <line x1="6"  y1="27" x2="16" y2="40" stroke="#0f766e" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <line x1="42" y1="27" x2="32" y2="40" stroke="#0f766e" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Peripheral nodes */}
      <circle cx="8"  cy="10" r="2.5" fill="#a1a1aa" />
      <circle cx="40" cy="10" r="2.5" fill="#a1a1aa" />
      <circle cx="6"  cy="27" r="2.5" fill="#a1a1aa" />
      <circle cx="42" cy="27" r="2.5" fill="#a1a1aa" />
      <circle cx="16" cy="40" r="2.5" fill="#a1a1aa" />
      <circle cx="32" cy="40" r="2.5" fill="#a1a1aa" />

      {/* Central node — Puzzle */}
      <circle cx="24" cy="24" r="6.5" fill="#0f766e" />
      <circle cx="24" cy="24" r="3.5" fill="#0a0a0b" />
      <circle cx="24" cy="24" r="1.8" fill="#14b8a6" />
    </svg>
  )
}
