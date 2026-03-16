// app/tietosuoja/page.tsx
import type { Metadata } from 'next'
import { SiteHeader, SiteFooter } from '@/components/NavFooter'
import '../clav.css'
export const metadata: Metadata = { title: 'Tietosuojakäytäntö – Clav.fi', robots:{ index:false } }
export default function TietosuojaPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <SiteHeader />
      <main id="main-content">
        <div className="static-hero"><div className="container" style={{maxWidth:760}}><p className="static-hero-eyebrow">Juridiikka</p><h1 className="static-hero-title">Tietosuojakäytäntö</h1><p className="static-hero-desc">Päivitetty viimeksi 1.1.2025</p></div></div>
        <div className="static-content">
          <div className="prose">
            <h2>Rekisterinpitäjä</h2>
            <p>Clav Oy (Y-tunnus 1234567-8), Esimerkkikatu 1, 00100 Helsinki. Sähköposti: tietosuoja@clav.fi</p>
            <h2>Kerättävät tiedot</h2>
            <p>Keräämme käyttäjiltä nimi- ja yhteystiedot rekisteröitymisen yhteydessä, hakuhistorian ja tallennetut kohteet, sekä laitetiedot ja käyttölokit palvelun kehittämiseksi.</p>
            <h2>Tietojen käyttötarkoitus</h2>
            <p>Tietoja käytetään palvelun tarjoamiseen ja kehittämiseen, asiakasviestintään sekä lakisääteisten velvoitteiden täyttämiseen. Emme myy tietojasi kolmansille osapuolille.</p>
            <h2>Tietojen säilytys</h2>
            <p>Säilytämme henkilötiedot niin kauan kuin palvelusopimus on voimassa sekä sen jälkeen lakisääteisten velvoitteiden mukaisesti.</p>
            <h2>Rekisteröidyn oikeudet</h2>
            <p>Sinulla on oikeus tarkistaa, korjata ja poistaa tietosi. Voit tehdä pyynnön osoitteeseen tietosuoja@clav.fi.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}