// app/meista/page.tsx
import type { Metadata } from 'next'
import { SiteHeader, SiteFooter } from '@/components/NavFooter'
import '../clav.css'
export const metadata: Metadata = { title: 'Meistä – Clav.fi', description: 'Clav.fi on Suomalainen kiinteistöportaali.' }
export default function MeistaPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <SiteHeader />
      <main id="main-content">
        <div className="static-hero">
          <div className="container" style={{maxWidth:760}}>
            <p className="static-hero-eyebrow">Yritys</p>
            <h1 className="static-hero-title">Meistä</h1>
            <p className="static-hero-desc">Clav.fi on suomalainen kiinteistöportaali, jonka missio on tehdä asuntokaupasta helpompaa, läpinäkyvämpää ja luotettavampaa kaikille osapuolille.</p>
          </div>
        </div>
        <div className="static-content">
          <div className="prose">
            <h2>Tarinamme</h2>
            <p>Clav.fi perustettiin vuonna 2024 vastauksena yksinkertaiseen ongelmaan: asunnon osto tai myynti tuntui liian monimutkaiselta. Liian monta portaalia, liian vähän läpinäkyvyyttä, liian paljon paperityötä.</p>
            <p>Rakensimme Clav.fi:n yhdistämään ostajat, myyjät ja välittäjät yhteen paikkaan — yksinkertaisesti, luotettavasti ja reilusti.</p>
            <h2>Arvomme</h2>
            <ul>
              <li><strong>Läpinäkyvyys</strong> — Realistiset hinta-arviot, selkeä hinnoittelu, ei piilomaksuja.</li>
              <li><strong>Luottamus</strong> — Kaikki välittäjät ovat LKV-tutkinnon suorittaneita ja tarkistettuja ammattilaisia.</li>
              <li><strong>Helppous</strong> — Selkeä käyttöliittymä, joka toimii kaikilla laitteilla.</li>
            </ul>
            <h2>Tiimimme</h2>
            <p>Clav.fi:tä rakentaa noin 30 hengen tiimi Helsingissä. Taustamme ovat teknologiassa, kiinteistöalalla ja käyttökokemussuunnittelussa.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}