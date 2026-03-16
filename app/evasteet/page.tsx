// app/evasteet/page.tsx
import type { Metadata } from 'next'
import { SiteHeader, SiteFooter } from '@/components/NavFooter'
import '../clav.css'
export const metadata: Metadata = { title: 'Evästeet – Clav.fi', robots:{ index:false } }
export default function EvasteketPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <SiteHeader />
      <main id="main-content">
        <div className="static-hero"><div className="container" style={{maxWidth:760}}><p className="static-hero-eyebrow">Juridiikka</p><h1 className="static-hero-title">Evästekäytäntö</h1><p className="static-hero-desc">Päivitetty viimeksi 1.1.2025</p></div></div>
        <div className="static-content">
          <div className="prose">
            <h2>Mitä evästeet ovat?</h2>
            <p>Evästeet ovat pieniä tekstitiedostoja, jotka tallennetaan laitteellesi kun vierailet verkkosivustollamme. Ne auttavat meitä tarjoamaan paremman käyttökokemuksen.</p>
            <h2>Käyttämämme evästeet</h2>
            <ul>
              <li><strong>Välttämättömät evästeet</strong> – Tarvitaan palvelun perustoimintoihin. Et voi kieltäytyä näistä.</li>
              <li><strong>Analytiikkaevästeet</strong> – Auttavat meitä ymmärtämään miten palvelua käytetään. Voit kieltäytyä.</li>
              <li><strong>Markkinointiévästeet</strong> – Kohdennettu mainonta. Voit kieltäytyä.</li>
            </ul>
            <h2>Evästeasetukset</h2>
            <p>Voit muuttaa evästeasetuksiasi milloin tahansa selaimen asetuksista tai ottamalla yhteyttä meihin osoitteessa tietosuoja@clav.fi.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}