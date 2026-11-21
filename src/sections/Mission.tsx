import { Container } from '../components/Container'
import { LinkRow } from '../components/Controls'
import { Reveal } from '../components/Reveal'
import { Clapperboard } from '../components/Film'
import { mission } from '../content'

/** "Satu sistem, banyak catatan": the blue panel with the three internal systems. */
export function Mission() {
  return (
    <section id="sistem" aria-labelledby="mission-title" className="pb-24 pt-8 sm:pb-32">
      <Container>
        <Reveal>
          <div className="depth relative isolate grid overflow-hidden rounded-panel bg-[radial-gradient(90%_120%_at_0%_100%,#a9bde3_0%,#6c88c4_30%,#2f4a86_60%,#1a2c57_100%)] p-7 sm:p-10 lg:min-h-[440px] lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:p-14">
            <div className="grain pointer-events-none absolute inset-0 -z-10" aria-hidden />
            <div className="flex flex-col">
              <h2 id="mission-title" className="display text-[40px] sm:text-[52px]">
                {mission.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="mt-4 max-w-[380px] text-pretty text-[16px] leading-[1.5] text-white/80">{mission.body}</p>
              <Clapperboard className="mt-10 w-[min(420px,100%)] lg:mt-auto" />
            </div>
            <ul className="mt-12 flex flex-col self-center lg:mt-0">
              {mission.rows.map((r) => (
                <li key={r.title}>
                  <LinkRow href={r.href} title={r.title} body={r.body} />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
