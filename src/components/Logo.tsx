import { brand } from '../content'
import { cx } from '../lib/cx'

/** The SatuArah mark: a film reel, amber rim light on black. */
export function LogoMark({ className }: { className?: string }) {
  const holes = Array.from({ length: 5 }, (_, i) => {
    const a = (i / 5) * Math.PI * 2 - Math.PI / 2
    return { x: 16 + Math.cos(a) * 8.2, y: 16 + Math.sin(a) * 8.2 }
  })
  return (
    <svg viewBox="0 0 32 32" className={cx('size-7', className)} aria-hidden>
      <defs>
        <linearGradient id="sa-reel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffd36b" />
          <stop offset="1" stopColor="#ff5a0a" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="13" fill="none" stroke="url(#sa-reel)" strokeWidth="2.2" />
      <circle cx="16" cy="16" r="13" fill="none" stroke="#fff" strokeOpacity="0.18" strokeWidth="0.8" />
      {holes.map((h) => (
        <circle key={`${h.x}-${h.y}`} cx={h.x} cy={h.y} r="2.4" fill="url(#sa-reel)" />
      ))}
      <circle cx="16" cy="16" r="2.6" fill="#fff" fillOpacity="0.92" />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cx('inline-flex items-center gap-2.5', className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="text-[17px] font-semibold tracking-[-0.02em]">{brand.short}</span>
        <span className="mt-1 text-[8.5px] font-medium uppercase tracking-[0.28em] text-muted">Entertainment</span>
      </span>
    </span>
  )
}
