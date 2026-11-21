import { motion } from 'motion/react'

import { ButtonLink } from '../components/Button'
import { Badge } from '../components/Controls'
import { Container } from '../components/Container'
import { hero, photos } from '../content'

const ease = [0.22, 1, 0.36, 1] as const

const corner = 'pointer-events-none absolute size-5 border-white/45'

/** "Satu arah, banyak cerita.": the promise on the left, a frame from set on the right. */
export function Hero() {
  return (
    <section id="atas" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      {/* Black sky lifting to deep blue at the horizon */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#000_0%,#000_45%,#071233_78%,#17306a_100%)]" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-sky/50 to-transparent" aria-hidden />
      <Container size="xl" className="grid min-h-[min(100svh,920px)] items-center gap-12 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:pb-12 lg:pt-24">
        <div className="flex flex-col items-start gap-7">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <Badge tone="fire" pulse>
              {hero.eyebrow}
            </Badge>
          </motion.div>
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease }}
            className="display text-balance text-[46px] sm:text-[64px] lg:text-[76px]"
          >
            {hero.title.map((line, i) => (
              <span key={line} className={i === 1 ? 'block text-fire-2' : 'block'}>
                {line}
              </span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16, ease }}
            className="max-w-[530px] text-pretty text-[18px] leading-[1.55] text-muted"
          >
            {hero.body}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.24, ease }}
            className="flex flex-wrap items-center gap-3"
          >
            <ButtonLink href={hero.primary.href} size="lg">
              {hero.primary.label}
            </ButtonLink>
            <ButtonLink href={hero.secondary.href} size="lg" variant="secondary">
              {hero.secondary.label}
            </ButtonLink>
          </motion.div>
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-4 grid w-full max-w-[560px] grid-cols-3 gap-4 border-t border-white/10 pt-6"
          >
            {hero.stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <dt className="order-2 text-[13px] leading-snug text-muted">{s.label}</dt>
                <dd className="order-1 text-[28px] font-medium tracking-[-0.03em] sm:text-[34px]">
                  {s.value}
                  <span className="ml-1 text-[16px] text-soft sm:text-[18px]">{s.unit}</span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* One frame from set, with viewfinder marks laid over it. */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.12, ease }}
          className="relative mx-auto w-full max-w-[500px]"
        >
          <div className="absolute -inset-8 -z-10 rounded-[48px] bg-fire-1/25 blur-[90px]" aria-hidden />
          <div className="depth relative overflow-hidden rounded-[28px] ring-1 ring-white/15">
            <img
              src={photos.set}
              alt="Kru SatuArah di lokasi syuting, kamera dan lampu di balik layar"
              width={880}
              height={1184}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="grain pointer-events-none absolute inset-0" aria-hidden />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0/0.55)_0%,transparent_26%,transparent_58%,rgb(0_0_0/0.88)_100%)]"
              aria-hidden
            />
            {/* Viewfinder corners */}
            <span className={`${corner} left-3 top-3 border-l border-t`} aria-hidden />
            <span className={`${corner} right-3 top-3 border-r border-t`} aria-hidden />
            <span className={`${corner} bottom-3 left-3 border-b border-l`} aria-hidden />
            <span className={`${corner} bottom-3 right-3 border-b border-r`} aria-hidden />

            <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 pt-5 text-[11px] font-medium tracking-[0.2em] text-white/80">
              <span className="inline-flex items-center gap-2">
                <span className="round size-2 rounded-full bg-fire-1" aria-hidden />
                {hero.frame.top}
              </span>
              <span>{hero.frame.meta}</span>
            </div>

            <div className="round pointer-events-none absolute left-1/2 top-[44%] size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25" aria-hidden />

            <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-6">
              <span className="text-[11.5px] font-medium uppercase tracking-[0.24em] text-fire-3">{hero.frame.caption}</span>
              <span className="text-[15px] leading-snug text-white/85">{hero.frame.note}</span>
            </figcaption>
          </div>

          {/* Film perforation rail on the left edge */}
          <div className="absolute -left-3 top-10 hidden h-[calc(100%-5rem)] w-3 flex-col justify-between sm:flex" aria-hidden>
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="h-2 w-3 rounded-[2px] bg-white/15" />
            ))}
          </div>
        </motion.figure>
      </Container>
    </section>
  )
}
