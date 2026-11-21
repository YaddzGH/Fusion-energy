import { Card, CardText } from '../components/Card'
import { Container } from '../components/Container'
import { FilmStrip } from '../components/Film'
import { FireStreaks } from '../components/FireStreaks'
import { Pedigree } from '../components/Pedigree'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/Typography'
import { photos, why } from '../content'

/** "Kenapa SatuArah?": three proof cards over a band of projector streaks. */
export function Why() {
  const [team, workflow, volume] = why.cards
  return (
    <section id="tentang" aria-labelledby="why-title" className="relative isolate overflow-hidden py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading id="why-title" title={why.title} />
        </Reveal>
      </Container>
      <div className="relative mt-14 sm:mt-20">
        <div className="absolute inset-x-0 top-1/2 -z-10 h-[150%] -translate-y-1/2" aria-hidden>
          <FireStreaks intensity={1.5} />
        </div>
        <Container size="xl">
          <ul className="mx-auto grid max-w-[420px] gap-4 lg:max-w-[1180px] lg:grid-cols-3 lg:gap-8">
            <Reveal as="li">
              <Card tone="fire" as="article" className="flex h-[560px] flex-col sm:h-[600px]">
                <div className="absolute inset-0 -z-10">
                  <img
                    src={photos.crew}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-[50%_60%]"
                  />
                  <div
                    className="absolute inset-0 bg-[radial-gradient(120%_85%_at_72%_88%,rgb(255_90_10/0.42)_0%,transparent_62%)]"
                    aria-hidden
                  />
                  <div className="grain absolute inset-0" aria-hidden />
                  <div className="absolute inset-x-0 top-0 h-[58%] bg-gradient-to-b from-[#3a0f02]/95 via-[#5d1a04]/65 to-transparent" aria-hidden />
                </div>
                <CardText title={team.title} body={team.body} />
                <div className="mt-auto p-1.5">
                  <Pedigree marks={why.pedigree} label="Genre yang kami kerjakan" />
                </div>
              </Card>
            </Reveal>
            <Reveal as="li" delay={0.08}>
              <Card tone="ocean" as="article" className="flex h-[560px] flex-col sm:h-[600px]">
                <div className="absolute inset-x-0 top-0 -z-10 h-1/2 bg-gradient-to-b from-[#0e1c3d] to-transparent" aria-hidden />
                <CardText title={workflow.title} body={workflow.body} />
                <div className="relative mx-auto mt-auto w-[104%] translate-y-[6%]">
                  <div className="absolute inset-[18%] -z-10 rounded-full bg-fire-1/45 blur-[60px]" aria-hidden />
                  <FilmStrip className="w-full" />
                </div>
              </Card>
            </Reveal>
            <Reveal as="li" delay={0.16}>
              <Card tone="stripes" as="article" className="flex h-[560px] flex-col sm:h-[600px]">
                <div className="absolute inset-x-0 top-0 -z-10 h-[45%] bg-gradient-to-b from-[#132651] via-[#1d3263]/70 to-transparent" aria-hidden />
                <CardText title={volume.title} body={volume.body} />
                <div className="mt-auto flex flex-col items-center gap-1 px-6 pb-8">
                  <span className="text-[96px] font-medium leading-none tracking-[-0.05em] sm:text-[112px]">{volume.stat}</span>
                  <span className="text-[18px] font-medium uppercase tracking-[0.18em] text-white/80">{volume.unit}</span>
                </div>
              </Card>
            </Reveal>
          </ul>
        </Container>
      </div>
    </section>
  )
}
