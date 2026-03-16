// app/components/NavFooter.tsx
// Shared Header + Footer for all clav.fi pages

import Image from 'next/image'
import Link from 'next/link'
import { FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon } from '@/lib/icons'

type NavProps = { currentPage?: string }

export function SiteHeader({ currentPage }: NavProps) {
  const links = [
    { href: '/osta',           label: 'Osta' },
    { href: '/vuokraa',        label: 'Vuokraa' },
    { href: '/myy',            label: 'Myy' },
    { href: '/uudet-kohteet',  label: 'Uudet kohteet' },
    { href: '/hinnasto',       label: 'Hinnasto' },
  ]
  return (
    <header className="site-header" role="banner">
      <div className="container">
        <nav className="nav-inner" role="navigation" aria-label="Päänavigaatio">
          <Link href="/" className="nav-logo" aria-label="Clav.fi – Etusivulle">
            <Image src="/icon_clav.png" alt="Clav.fi logo" width={26} height={26} className="nav-logo-img" priority />
            <span className="nav-logo-text">clav.fi</span>
          </Link>
          <ul className="nav-links" role="list">
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} aria-current={currentPage === l.href ? 'page' : undefined}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <Link href="/kirjaudu" className="btn-ghost">Kirjaudu</Link>
            <Link href="/rekisteroidy" className="btn-dark">Rekisteröidy</Link>
          </div>
          <button className="nav-hamburger" aria-label="Avaa valikko" aria-expanded="false">
            <span aria-hidden="true"/><span aria-hidden="true"/><span aria-hidden="true"/>
          </button>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link href="/" className="footer-logo">
              <Image src="/icon_clav.png" alt="Clav.fi logo" width={22} height={22} className="footer-logo-img" />
              <span className="footer-logo-text">clav.fi</span>
            </Link>
            <p className="footer-tagline">Suomen helpoin tapa löytää, ostaa ja myydä asuntoja.</p>
            <nav className="footer-socials" aria-label="Sosiaalinen media">
              <a href="https://facebook.com/clav.fi" className="social-link" aria-label="Facebook" rel="noopener noreferrer" target="_blank"><FacebookIcon /></a>
              <a href="https://instagram.com/clav.fi" className="social-link" aria-label="Instagram" rel="noopener noreferrer" target="_blank"><InstagramIcon /></a>
              <a href="https://linkedin.com/company/clav-fi" className="social-link" aria-label="LinkedIn" rel="noopener noreferrer" target="_blank"><LinkedinIcon /></a>
              <a href="mailto:info@clav.fi" className="social-link" aria-label="Sähköposti"><MailIcon /></a>
            </nav>
          </div>
          <nav className="footer-col" aria-label="Kohteet">
            <h4>Kohteet</h4>
            <ul role="list">
              <li><Link href="/haku?tyyppi=kerrostalo">Kerrostaloasunnot</Link></li>
              <li><Link href="/haku?tyyppi=omakotitalo">Omakotitalot</Link></li>
              <li><Link href="/haku?tyyppi=rivitalo">Rivitalot</Link></li>
              <li><Link href="/haku?vuokra=true">Vuokra-asunnot</Link></li>
              <li><Link href="/haku?uudet=true">Uudet kohteet</Link></li>
              <li><Link href="/kartta">Karttahaku</Link></li>
            </ul>
          </nav>
          <nav className="footer-col" aria-label="Palvelut">
            <h4>Palvelut</h4>
            <ul role="list">
              <li><Link href="/myy">Myy asunto</Link></li>
              <li><Link href="/hinta-arvio">Hinta-arvio</Link></li>
              <li><Link href="/hakuvahti">Hakuvahti</Link></li>
              <li><Link href="/valittajille">Välittäjille</Link></li>
              <li><Link href="/blogi">Blogi</Link></li>
            </ul>
          </nav>
          <nav className="footer-col" aria-label="Yritys">
            <h4>Yritys</h4>
            <ul role="list">
              <li><Link href="/meista">Meistä</Link></li>
              <li><Link href="/ura">Avoimet tehtävät</Link></li>
              <li><Link href="/yhteystiedot">Yhteystiedot</Link></li>
              <li><Link href="/hinnasto">Hinnasto</Link></li>
              <li><Link href="/asiakaspalvelu">Asiakaspalvelu</Link></li>
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} Clav Oy. Kaikki oikeudet pidätetään.</p>
          <nav className="footer-legal">
            <Link href="/tietosuoja">Tietosuoja</Link>
            <Link href="/kayttoehdot">Käyttöehdot</Link>
            <Link href="/evasteet">Evästeet</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}