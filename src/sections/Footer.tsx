import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { brand, footer } from '../content'
import { Link } from '../lib/router'

export function Footer() {
  const tel = `tel:${brand.phone.replace(/[^+\d]/g, '')}`
  return (
    <footer className="border-t border-white/[0.08] bg-black pb-10 pt-16">
      <Container size="xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.6fr_0.6fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label={`${brand.name} home`} className="-m-2 self-start rounded-[12px] p-2">
              <Logo />
            </Link>
            <p className="max-w-[300px] text-[15px] text-muted">{footer.blurb}</p>
            <address className="text-[14px] not-italic leading-relaxed text-faint">
              {brand.address.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          </div>
          {footer.columns.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h2 className="text-[14px] font-medium text-white">{c.title}</h2>
              <ul className="mt-3 flex flex-col">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-flex min-h-10 items-center text-[15px] text-muted transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div>
            <h2 className="text-[14px] font-medium text-white">Kontak</h2>
            <ul className="mt-3 flex flex-col">
              <li>
                <a href={tel} className="inline-flex min-h-10 items-center text-[15px] text-muted transition-colors hover:text-white">
                  {brand.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="inline-flex min-h-10 items-center text-[15px] text-muted transition-colors hover:text-white">
                  {brand.email}
                </a>
              </li>
              <li>
                <Link href={brand.site} className="inline-flex min-h-10 items-center text-[15px] text-muted transition-colors hover:text-white">
                  Situs utama
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-14 border-t border-white/[0.08] pt-6 text-[13px] text-faint">{footer.legal}</p>
      </Container>
    </footer>
  )
}
