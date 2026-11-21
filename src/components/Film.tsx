import { cx } from '../lib/cx'

/*
  Film furniture, drawn rather than photographed: a strip of 35mm with
  sprocket holes and lit frames, and a clapperboard. Both are pure SVG so
  they recolour with whatever panel they sit on.
*/

const holes = Array.from({ length: 15 }, (_, i) => 10 + i * 23)

export function FilmStrip({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 250" className={cx('block', className)} aria-hidden>
      <defs>
        <radialGradient id="film-bulb" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff1d0" />
          <stop offset="0.5" stopColor="#ffb04a" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ff5a0a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="film-edge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <g transform="rotate(-7 180 125)">
        <rect x="0" y="62" width="360" height="126" rx="12" fill="#07090e" stroke="#ffffff" strokeOpacity="0.16" />
        <rect x="0" y="62" width="360" height="126" rx="12" fill="none" stroke="url(#film-edge)" strokeOpacity="0.35" />
        {holes.map((x) => (
          <g key={x} fill="#ffffff" fillOpacity="0.2">
            <rect x={x} y="72" width="11" height="9" rx="2" />
            <rect x={x} y="169" width="11" height="9" rx="2" />
          </g>
        ))}
        {[18, 130, 242].map((x, i) => (
          <g key={x}>
            <rect x={x} y="90" width="100" height="70" rx="5" fill="#12161f" stroke="#ffffff" strokeOpacity="0.1" />
            <ellipse cx={x + 50} cy="125" rx="38" ry="28" fill="url(#film-bulb)" opacity={i === 1 ? 1 : 0.5} />
          </g>
        ))}
      </g>
    </svg>
  )
}

export function Clapperboard({ className }: { className?: string }) {
  const stripes = [0, 1, 2, 3, 4, 5, 6, 7]
  return (
    <svg viewBox="0 0 420 250" className={cx('block', className)} aria-hidden>
      <g transform="rotate(-5 40 60)">
        <rect x="24" y="46" width="340" height="34" rx="5" fill="#f6f8ff" />
        {stripes.map((i) => (
          <path
            key={i}
            d={`M${48 + i * 42} 46 h20 l-14 34 h-20 Z`}
            fill="#12203f"
            opacity="0.9"
          />
        ))}
      </g>
      <rect x="24" y="86" width="340" height="132" rx="8" fill="#0b1730" fillOpacity="0.72" stroke="#ffffff" strokeOpacity="0.75" />
      <path d="M24 112 H364 M24 140 H364 M24 168 H364" stroke="#ffffff" strokeOpacity="0.22" />
      <path d="M132 112 V218 M252 112 V218" stroke="#ffffff" strokeOpacity="0.18" />
      {[0, 1, 2, 3].map((r) => (
        <g key={r} fill="#ffffff" fillOpacity="0.55">
          <rect x="36" y={122 + r * 28} width="60" height="5" rx="2.5" />
          <rect x="144" y={122 + r * 28} width="60" height="5" rx="2.5" />
          <rect x="264" y={122 + r * 28} width="60" height="5" rx="2.5" />
        </g>
      ))}
      <circle cx="330" cy="196" r="10" fill="#ffb04a" fillOpacity="0.9" />
    </svg>
  )
}
