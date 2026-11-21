import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/Typography'
import { divisions } from '../content'

/** "Tujuh divisi produksi": the crew's departments as a numbered film credit list. */
export function Audiences() {
  return (
    <section id="divisi" aria-labelledby="divisi-title" className="pb-12 pt-24 sm:pb-16 sm:pt-32">
      <Container>
        <Reveal>
          <SectionHeading
            id="divisi-title"
            eyebrow="Divisi produksi"
            title={['Tujuh divisi produksi.', 'Satu redaksi.']}
            body="Setiap produksi dikerjakan penuh oleh pelajar, lintas divisi, dengan peran dan tanggung jawab yang jelas."
            align="left"
            size="md"
          />
        </Reveal>
        <ul className="mt-12 grid border-t border-white/10 sm:grid-cols-2 sm:gap-x-14">
          {divisions.map((d, i) => (
            <Reveal as="li" key={d.name} delay={(i % 2) * 0.05} className="group border-b border-white/10">
              <div className="flex items-baseline gap-5 py-5">
                <span className="w-7 shrink-0 text-[13px] tabular-nums text-faint transition-colors group-hover:text-fire-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[17px] font-medium">{d.name}</h3>
                  <p className="mt-1 text-pretty text-[14.5px] leading-snug text-muted">{d.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
