// app/hinnasto/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader, SiteFooter } from '@/components/NavFooter'
import ScrollTopButton from '@/components/ScrollTopButton'
import { CheckIcon } from '@/lib/icons'
import '../clav.css'

export const metadata: Metadata = {
  title: 'Hinnasto – Clav.fi',
  description: 'Selkeä ja rehellinen hinnoittelu yksityishenkilöille ja ammattilaisille.',
}

const BUYER_FEATURES = ['Kohteiden selaaminen ilmaiseksi','Hakuvahti-ilmoitukset','Kohteiden tallentaminen','Yhteydenotto välittäjiin','Hinta-arvio omalle asunnolle']
const SELLER_FEATURES = ['1 myynti-ilmoitus (yksityishenkilö)','Kohteet näkyvissä 60 päivää','Enintään 20 kuvaa','Yhteydenottolomake','Tilastot: katsojat ja yhteydenotot']

export default function HinnastoPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <SiteHeader currentPage="/hinnasto" />
      <main id="main-content">

        <div className="pricing-hero">
          <div className="container">
            <p className="section-eyebrow" style={{display:'flex',justifyContent:'center'}}>Hinnoittelu</p>
            <h1 className="section-title" style={{textAlign:'center',marginBottom:'.75rem'}}>Yksinkertainen, rehellinen hinnoittelu</h1>
            <p className="section-lead" style={{textAlign:'center',margin:'0 auto'}}>Kohteiden selaaminen on aina ilmaista. Maksat vain kun myyt tai tarvitset ammattilaistason ominaisuuksia.</p>
          </div>
        </div>

        <div className="pricing-section">
          <div className="container">

            {/* Private plans */}
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.3rem',fontWeight:400,fontStyle:'italic',color:'var(--text-1)',marginBottom:'1.25rem',letterSpacing:'-.02em'}}>Yksityishenkilöille</h2>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',maxWidth:640,marginBottom:'3rem'}}>
              <div className="pricing-card">
                <p className="pricing-name">Ostaja / Vuokraaja</p>
                <div className="pricing-price">0 €</div>
                <p className="pricing-period">Aina ilmainen</p>
                <ul className="pricing-features">
                  {BUYER_FEATURES.map(f=><li key={f} className="pricing-feature"><CheckIcon />{f}</li>)}
                </ul>
                <Link href="/rekisteroidy" className="pricing-btn outline" style={{display:'block',textDecoration:'none',textAlign:'center'}}>Rekisteröidy ilmaiseksi</Link>
              </div>
              <div className="pricing-card featured">
                <span className="pricing-badge">Yksityismyyjälle</span>
                <p className="pricing-name">Myyjä</p>
                <div className="pricing-price">0 €</div>
                <p className="pricing-period">Maksuton yksityismyynti</p>
                <ul className="pricing-features">
                  {SELLER_FEATURES.map(f=><li key={f} className="pricing-feature"><CheckIcon />{f}</li>)}
                </ul>
                <Link href="/myy/ilmoita" className="pricing-btn dark" style={{display:'block',textDecoration:'none',textAlign:'center'}}>Lisää kohde</Link>
              </div>
            </div>

            {/* Agent plans */}
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.3rem',fontWeight:400,fontStyle:'italic',color:'var(--text-1)',marginBottom:'1.25rem',letterSpacing:'-.02em'}}>Välittäjille ja toimistoille</h2>
            <div className="pricing-grid-main">
              {[
                { name:'Startti', price:'0 €',   period:'/kk', badge:null, features:['5 aktiivista kohdetta','Perusnäkyvyys','Liidihallinta','Sähköinen viestintä'], btn:'outline' },
                { name:'Pro',     price:'79 €',  period:'/kk', badge:'Suosituin', features:['30 aktiivista kohdetta','Korostettu näkyvyys','Hinta-analytiikka','CRM-integraatio','Tilastot & raportit'], btn:'dark' },
                { name:'Tiimi',   price:'199 €', period:'/kk', badge:null, features:['Rajaton määrä kohteita','Ensiluokkainen näkyvyys','Kaikki Pro-ominaisuudet','Tiimiprofiili','Oma asiakasvastaava'], btn:'outline' },
              ].map(p=>(
                <div key={p.name} className={`pricing-card${p.btn==='dark'?' featured':''}`}>
                  {p.badge && <span className="pricing-badge">{p.badge}</span>}
                  <p className="pricing-name">{p.name}</p>
                  <div className="pricing-price">{p.price}</div>
                  <p className="pricing-period">{p.period} · sis. alv</p>
                  <ul className="pricing-features">{p.features.map(f=><li key={f} className="pricing-feature"><CheckIcon />{f}</li>)}</ul>
                  <Link href="/valittajille/dashboard" className={`pricing-btn ${p.btn}`} style={{display:'block',textDecoration:'none',textAlign:'center'}}>
                    {p.btn==='dark'?'Aloita Pro-kokeilu':'Valitse '+p.name}
                  </Link>
                </div>
              ))}
            </div>

            <p style={{textAlign:'center',fontSize:'.815rem',color:'var(--text-4)',marginTop:'2rem'}}>
              Kaikki hinnat ovat arvonlisäverottomia. Laskutus kuukausittain. Peruutus milloin tahansa. <Link href="/yhteystiedot" style={{color:'var(--text-2)',textDecoration:'underline',textUnderlineOffset:'3px'}}>Ota yhteyttä</Link> räätälöityyn sopimukseen.
            </p>
          </div>
        </div>

      </main>
      <SiteFooter />
      <ScrollTopButton />
    </>
  )
}