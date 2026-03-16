// app/valittajille/page.tsx — Agent landing
import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SiteHeader, SiteFooter } from '@/components/NavFooter'
import ScrollTopButton from '@/components/ScrollTopButton'
import { CheckIcon, ArrowRightIcon } from '@/lib/icons'
import '../clav.css'

export const metadata: Metadata = {
  title: 'Välittäjille – Tehokkaat työkalut kiinteistönvälitykseen',
  description: 'Liity tuhansien ammattilaisten joukkoon. Clav.fi tarjoaa tehokkaita työkaluja kohteiden hallintaan ja markkinointiin.',
}

const features = [
  'Kohteiden hallinta yhdessä näkymässä',
  'Liidien hallinta ja seuranta automaattisesti',
  'Hinta-analytiikka ja markkinatiedot',
  'Sähköinen kauppakirja sisäänrakennettuna',
  'Integraatio yleisimpiin CRM-järjestelmiin',
  'Mobiilisovellus ja reaaliaikaiset ilmoitukset',
]

const plans = [
  { name:'Startti', price:'0 €', period:'/kk', badge:null, features:['5 aktiivista kohdetta','Perusnäkyvyys','Liidihallinta','Sähköinen viestintä'], btn:'outline' },
  { name:'Pro',     price:'79 €', period:'/kk', badge:'Suosituin', features:['30 aktiivista kohdetta','Korostettu näkyvyys','Hinta-analytiikka','CRM-integraatio','Tilastot & raportit'], btn:'dark' },
  { name:'Tiimi',   price:'199 €', period:'/kk', badge:null, features:['Rajaton määrä kohteita','Ensiluokkainen näkyvyys','Kaikki Pro-ominaisuudet','Tiimiprofiili','Oma asiakasvastaava'], btn:'outline' },
]

export default function ValittajillePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <SiteHeader currentPage="/valittajille" />
      <main id="main-content">

        <section className="agent-hero" aria-labelledby="agent-h">
          <div className="container">
            <div className="agent-hero-inner">
              <div>
                <p className="seller-eyebrow">Välittäjille</p>
                <h1 style={{fontFamily:'var(--font-display)',fontSize:'clamp(2rem,4vw,3.2rem)',fontWeight:400,fontStyle:'italic',letterSpacing:'-.025em',color:'var(--text-1)',lineHeight:1.08,marginBottom:'1rem'}}>Myy enemmän.<br/>Työskentele älykkäämmin.</h1>
                <p style={{fontSize:'.975rem',color:'var(--text-3)',lineHeight:1.75,maxWidth:'46ch',marginBottom:'2rem'}}>Clav.fi tarjoaa ammattilaisvälittäjille tehokkaat työkalut kohteiden hallintaan, asiakkuudenhallintaan ja markkinointiin.</p>
                <div className="seller-cta-row">
                  <Link href="/valittajille/dashboard" className="btn-dark-lg">Kokeile ilmaiseksi <ArrowRightIcon /></Link>
                  <Link href="#hinnoittelu" className="btn-outline">Näytä hinnat</Link>
                </div>
              </div>
              <div aria-hidden="true" style={{background:'var(--bg-alt)',border:'1px solid var(--border)',borderRadius:'var(--r-xl)',padding:'2rem',boxShadow:'var(--shadow-md)'}}>
                <p style={{fontSize:'.72rem',fontWeight:700,letterSpacing:'.09em',textTransform:'uppercase',color:'var(--text-4)',marginBottom:'1.1rem'}}>Kuukauden tilastot</p>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
                  {[['5','Aktiivista kohdetta'],['1 272','Katselukertaa'],['42','Liidiä'],['2','Kauppaa']].map(([v,l])=>(
                    <div key={l} style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--r-lg)',padding:'1.1rem'}}>
                      <div style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:400,color:'var(--text-1)',letterSpacing:'-.02em'}}>{v}</div>
                      <div style={{fontSize:'.775rem',color:'var(--text-4)',marginTop:'.2rem'}}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section style={{padding:'4rem 0',background:'var(--surface)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}} aria-labelledby="feat-h">
          <div className="container">
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
              <div>
                <p className="section-eyebrow">Ominaisuudet</p>
                <h2 className="section-title" id="feat-h" style={{marginBottom:'1.25rem'}}>Kaikki mitä tarvitset yhdessä paikassa</h2>
                <ul style={{display:'flex',flexDirection:'column',gap:'.75rem'}}>
                  {features.map(f=>(
                    <li key={f} style={{display:'flex',alignItems:'flex-start',gap:'.6rem',fontSize:'.875rem',color:'var(--text-2)',lineHeight:1.6}}>
                      <span style={{width:16,height:16,flexShrink:0,marginTop:'.1rem',color:'var(--text-2)'}}><CheckIcon /></span>{f}
                    </li>
                  ))}
                </ul>
              </div>
              <div aria-hidden="true" style={{background:'var(--bg)',border:'1px solid var(--border)',borderRadius:'var(--r-xl)',padding:'1.5rem',boxShadow:'var(--shadow-sm)'}}>
                <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--r-lg)',padding:'1rem',marginBottom:'.75rem'}}>
                  <div style={{fontSize:'.72rem',fontWeight:700,letterSpacing:'.07em',textTransform:'uppercase',color:'var(--text-4)',marginBottom:'.5rem'}}>Viimeisimmät liidit</div>
                  {[['Marianne K.','3h+k Kalliossa','2 min'],['Petri L.','Omakotitalo Espoo','1 t'],['Sofia M.','2h Tampere','3 t']].map(([n,l,t])=>(
                    <div key={n} style={{display:'flex',alignItems:'center',gap:'.75rem',padding:'.6rem 0',borderBottom:'1px solid var(--border)'}}>
                      <div style={{width:30,height:30,borderRadius:'50%',background:'var(--bg-alt)',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.7rem',fontWeight:700,color:'var(--text-3)',flexShrink:0}}>{n[0]}{n.split(' ')[1]?.[0]}</div>
                      <div style={{flex:1}}><p style={{fontSize:'.825rem',fontWeight:700,color:'var(--text-1)'}}>{n}</p><p style={{fontSize:'.75rem',color:'var(--text-4)'}}>{l}</p></div>
                      <span style={{fontSize:'.72rem',color:'var(--text-4)'}}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="hinnoittelu" style={{padding:'4rem 0',background:'var(--bg)'}} aria-labelledby="price-h">
          <div className="container">
            <div style={{textAlign:'center',marginBottom:'2.5rem'}}>
              <p className="section-eyebrow" style={{display:'flex',justifyContent:'center'}}>Hinnoittelu</p>
              <h2 className="section-title" id="price-h">Yksinkertainen, rehellinen hinnoittelu</h2>
            </div>
            <div className="agent-pricing-grid" style={{maxWidth:900,margin:'0 auto'}}>
              {plans.map(p=>(
                <div key={p.name} className={`pricing-card${p.btn==='dark'?' featured':''}`}>
                  {p.badge && <span className="pricing-badge">{p.badge}</span>}
                  <p className="pricing-name">{p.name}</p>
                  <div className="pricing-price">{p.price}</div>
                  <p className="pricing-period">{p.period} · sis. alv</p>
                  <ul className="pricing-features">
                    {p.features.map(f=>(
                      <li key={f} className="pricing-feature"><CheckIcon />{f}</li>
                    ))}
                  </ul>
                  <Link href="/valittajille/dashboard" className={`pricing-btn ${p.btn}`} style={{display:'block',textDecoration:'none',textAlign:'center'}}>
                    {p.btn==='dark'?'Aloita Pro-kokeilu':'Valitse '+p.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
      <ScrollTopButton />
      <Script id="v-ui" strategy="afterInteractive">{`const h=document.querySelector('.site-header');window.addEventListener('scroll',()=>h?.classList.toggle('scrolled',window.scrollY>20),{passive:true});`}</Script>
    </>
  )
}