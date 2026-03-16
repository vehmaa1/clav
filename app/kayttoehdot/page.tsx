// app/kayttoehdot/page.tsx
import type { Metadata } from 'next'
import { SiteHeader, SiteFooter } from '@/components/NavFooter'
import '../clav.css'
export const metadata: Metadata = { title: 'Käyttöehdot – Clav.fi', robots:{ index:false } }
export default function KayttoehdotPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <SiteHeader />
      <main id="main-content">
        <div className="static-hero"><div className="container" style={{maxWidth:760}}><p className="static-hero-eyebrow">Juridiikka</p><h1 className="static-hero-title">Käyttöehdot</h1><p className="static-hero-desc">Päivitetty viimeksi 1.1.2025</p></div></div>
        <div className="static-content">
          <div className="prose">
            <h2>Palvelun käyttö</h2>
            <p>Käyttämällä Clav.fi-palvelua hyväksyt nämä käyttöehdot. Palvelu on tarkoitettu täysi-ikäisille henkilöille ja yrityksille kiinteistökauppaan liittyviin tarkoituksiin.</p>
            <h2>Ilmoitukset</h2>
            <p>Käyttäjä vastaa julkaisemiensa ilmoitusten oikeellisuudesta. Harhaanjohtavat tai asiattomat ilmoitukset poistetaan ilman ennakkoilmoitusta.</p>
            <h2>Vastuunrajoitus</h2>
            <p>Clav.fi toimii tietojen välitysalustana. Emme vastaa käyttäjien välisten sopimusten sisällöstä tai kiinteistökaupan lopputuloksesta.</p>
            <h2>Muutokset ehtoihin</h2>
            <p>Pidätämme oikeuden muuttaa käyttöehtoja. Olennaisista muutoksista ilmoitetaan sähköpostitse vähintään 30 päivää etukäteen.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}