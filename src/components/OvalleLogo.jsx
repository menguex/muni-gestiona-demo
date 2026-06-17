import { useState } from 'react'

const base = import.meta.env.BASE_URL || '/'
/** `logo.png` primero (nombre habitual en `public/`). Luego `logo-municipal.png`. */
const LOGO_CANDIDATES = [`${base}logo.png`, `${base}logo-municipal.png`]

/**
 * Ilustre Municipalidad de Ovalle.
 * PNG en `public/`: `logo-municipal.png` o `logo.png` (horizontal). Si ninguno carga → SVG de respaldo.
 */
export function OvalleLogo({ variant = 'horizontal', className = '' }) {
  if (variant === 'wordmark') {
    return <WordmarkOnly className={className} />
  }

  if (variant === 'vertical') {
    return (
      <LogoPngOrFallback
        className={`mx-auto max-h-32 w-full max-w-sm object-contain ${className}`}
        fallback={<LogoVerticalSvg className={className} />}
      />
    )
  }

  const horizontalCls = (className ?? '').trim() || 'block h-10 w-auto max-w-full object-contain'

  return (
    <LogoPngOrFallback
      className={horizontalCls}
      fallback={<LogoHorizontalSvg className={horizontalCls} />}
    />
  )
}

function LogoPngOrFallback({ className, fallback }) {
  const [candidateIndex, setCandidateIndex] = useState(0)

  if (candidateIndex >= LOGO_CANDIDATES.length) {
    return fallback
  }

  const src = LOGO_CANDIDATES[candidateIndex]

  return (
    <img
      key={src}
      src={src}
      alt="Municipalidad de Ovalle"
      className={['block border-0 bg-transparent p-0 shadow-none outline-none ring-0', className]
        .filter(Boolean)
        .join(' ')}
      decoding="async"
      fetchPriority="high"
      onError={() => setCandidateIndex((i) => i + 1)}
    />
  )
}

/** Azul corporativo (guía logo oficial) */
const BRAND_BLUE = '#1E60A9'
const BRAND_BLUE_DEEP = '#005696'

function LogoHorizontalSvg({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 268 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ilustre Municipalidad de Ovalle"
    >
      <defs>
        <linearGradient id="ovalle-sun-h" x1="26" y1="8" x2="26" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDB813" />
          <stop offset="1" stopColor="#F57C00" />
        </linearGradient>
        <linearGradient id="ovalle-wave-h" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5A9FD4" />
          <stop offset="0.5" stopColor={BRAND_BLUE} />
          <stop offset="1" stopColor={BRAND_BLUE_DEEP} />
        </linearGradient>
      </defs>

      <g transform="translate(0,2)">
        <rect x="2" y="10" width="7" height="30" rx="1.5" fill="#388E3C" />
        <circle cx="5.5" cy="17" r="1.4" fill="white" />
        <circle cx="5.5" cy="24" r="1.4" fill="white" />
        <circle cx="5.5" cy="31" r="1.4" fill="white" />

        <rect x="11" y="38" width="42" height="3.5" rx="1" fill={BRAND_BLUE_DEEP} />
        <rect x="12" y="34" width="40" height="3" rx="1" fill="url(#ovalle-wave-h)" />
        <rect x="13" y="30" width="38" height="3" rx="1" fill="#5A9FD4" opacity="0.85" />

        <path
          d="M11 34 C16 26 24 24 32 27 C38 29 44 31 52 32 L52 38 L11 38 Z"
          fill="#388E3C"
        />
        <path
          d="M11 34 C18 28 28 26 38 30 C44 32 50 33 52 33.5 L52 38 L11 38 Z"
          fill="#66BB6A"
          opacity="0.92"
        />

        <path d="M22 33 L31 12 L40 33 Z" fill="#E2E2D1" stroke="#C9C9B6" strokeWidth="0.4" />

        <path d="M14 20 C18 10 28 6 38 10 C46 13 50 18 50 22 L50 24 C38 20 24 20 14 24 Z" fill="url(#ovalle-sun-h)" />
      </g>

      <text x="62" y="24" fill={BRAND_BLUE} fontSize="20" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">
        Ovalle
      </text>
      <text
        x="62"
        y="38"
        fill={BRAND_BLUE}
        fontSize="8.5"
        fontWeight="600"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="0.06em"
      >
        ILUSTRE MUNICIPALIDAD
      </text>
      <path d="M62 44.5 H258" stroke={BRAND_BLUE} strokeWidth="1.2" strokeLinecap="round" opacity="0.85" />
    </svg>
  )
}

function LogoVerticalSvg({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ilustre Municipalidad de Ovalle"
    >
      <defs>
        <linearGradient id="ovalle-sun-v" x1="60" y1="12" x2="60" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDB813" />
          <stop offset="1" stopColor="#F57C00" />
        </linearGradient>
        <linearGradient id="ovalle-wave-v" x1="60" y1="68" x2="60" y2="78" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5A9FD4" />
          <stop offset="0.55" stopColor={BRAND_BLUE} />
          <stop offset="1" stopColor={BRAND_BLUE_DEEP} />
        </linearGradient>
      </defs>

      <g transform="translate(34,0)">
        <rect x="0" y="14" width="8" height="44" rx="1.5" fill="#388E3C" />
        <circle cx="4" cy="24" r="1.5" fill="white" />
        <circle cx="4" cy="34" r="1.5" fill="white" />
        <circle cx="4" cy="44" r="1.5" fill="white" />

        <rect x="12" y="62" width="48" height="4" rx="1" fill={BRAND_BLUE_DEEP} />
        <rect x="14" y="57" width="44" height="3.5" rx="1" fill="url(#ovalle-wave-v)" />
        <rect x="15" y="52" width="42" height="3.5" rx="1" fill="#5A9FD4" opacity="0.88" />

        <path
          d="M12 56 C22 44 38 40 54 48 C60 50 66 52 72 54 L72 62 L12 62 Z"
          fill="#388E3C"
        />
        <path
          d="M12 56 C24 46 42 44 58 52 C64 54 70 56 72 56.5 L72 62 L12 62 Z"
          fill="#66BB6A"
          opacity="0.92"
        />

        <path d="M28 55 L42 22 L56 55 Z" fill="#E2E2D1" stroke="#C9C9B6" strokeWidth="0.45" />

        <path
          d="M16 32 C22 14 38 8 54 16 C64 21 68 28 68 34 L68 36 C48 28 32 28 16 36 Z"
          fill="url(#ovalle-sun-v)"
        />
      </g>

      <text
        x="60"
        y="88"
        textAnchor="middle"
        fill={BRAND_BLUE}
        fontSize="17"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Ovalle
      </text>
      <text
        x="60"
        y="102"
        textAnchor="middle"
        fill={BRAND_BLUE}
        fontSize="6.2"
        fontWeight="600"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="0.08em"
      >
        ILUSTRE MUNICIPALIDAD
      </text>
      <path d="M14 108 H106" stroke={BRAND_BLUE} strokeWidth="1.1" strokeLinecap="round" opacity="0.85" />
    </svg>
  )
}

function WordmarkOnly({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 36"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ilustre Municipalidad de Ovalle"
    >
      <text x="0" y="18" fill={BRAND_BLUE} fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">
        Ovalle
      </text>
      <text
        x="0"
        y="30"
        fill={BRAND_BLUE}
        fontSize="7.5"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.07em"
      >
        ILUSTRE MUNICIPALIDAD
      </text>
      <path d="M0 34 H196" stroke={BRAND_BLUE} strokeWidth="1" strokeLinecap="round" opacity="0.85" />
    </svg>
  )
}
