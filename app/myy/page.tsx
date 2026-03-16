// app/myy/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SiteHeader, SiteFooter } from '@/components/NavFooter'
import ScrollTopButton from '@/components/ScrollTopButton'
import { CheckIcon, ArrowRightIcon, StarIcon } from '@/lib/icons'
import '../clav.css'

export const metadata: Metadata = {
  title: 'Myy asuntosi – Nopea ja luotettava',
  description: 'Laita asuntosi myyntiin Clav.fi:ssä. Tavoitat tuhansia ostajaehdokkaita. Ilmainen hinta-arvio ja helppo prosessi.',
  alternates: { canonical: 'https://clav.fi/myy' },
}

const steps = [
  { n:'01', title:'Hinta-arvio', desc:'Saat ilmaisen hinta-arvion hetkessä. Vertailemme asuntoasi alueen viimeisimpiin kauppoihin.' },
  { n:'02', title:'Ilmoitus julki', desc:'Täytä tiedot ja lataa kuvat. Ilmoituksesi näkyy tuhansille ostajille minuuteissa.' },
  { n:'03', title:'Näytöt & tarjoukset', desc:'Välittäjä hoitaa näytöt ja neuvottelut. Saat reaaliaikaiset ilmoitukset yhteydenotoista.' },
  { n:'04', title:'Kaupat kiinni', desc:'Sähköinen kauppakirja, turvallinen maksaminen ja avainten luovutus – kaikki yhdessä.' },
]

const testimonials = [
  { name:'Karoliina H.', location:'Helsinki', stars:5, initials:'KH', quote:'Asunto myytiin 11 päivässä, pyyntihinnan yläpuolelta. Täysin vaivaton prosessi.' },
  { name:'Markus V.',   location:'Tampere',  stars:5, initials:'MV', quote:'Välittäjä oli käytettävissä kellon ympäri. Suosittelen kaikille.' },
  { name:'Sanna P.',    location:'Espoo',    stars:5, initials:'SP', quote:'Hinta-arvio osui täsmälleen. Kohde myytiin viikossa.' },
]

export default function MyyPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <SiteHeader currentPage="/myy" />
      <main id="main-content">

        {/* Hero */}
        <section className="seller-hero" aria-labelledby="seller-h">
          <div className="container">
            <div className="seller-hero-inner">
              <div>
                <p className="seller-eyebrow">Myy asuntosi</p>
                <h1 className="seller-title" id="seller-h">Myy nopeammin,<br/>paremmilla ehdoilla.</h1>
                <p className="seller-desc">Clav.fi yhdistää sinut Suomen suurimpaan ostajajoukkoon. Ammattilaisvälittäjät, helppo prosessi ja läpinäkyvä hinnoittelu.</p>
                <div className="seller-cta-row">
                  <Link href="/hinta-arvio" className="btn-dark-lg">Ilmainen hinta-arvio <ArrowRightIcon /></Link>
                  <Link href="/myy/ilmoita" className="btn-outline">Lisää kohde itse</Link>
                </div>
              </div>
              <div className="seller-visual-card" aria-hidden="true">
                <div className="seller-stat-grid">
                  {[['23 pv','Keskimääräinen myyntiaika'],['98%','Pyyntihinnan saavuttaa'],['850+','LKV-välittäjää'],['4,8/5','Asiakastyytyväisyys']].map(([v,l])=>(
                    <div key={l} className="seller-stat-card"><div className="seller-stat-val">{v}</div><div className="seller-stat-lbl">{l}</div></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="seller-section-alt" style={{padding:'4rem 0'}} aria-labelledby="steps-h">
          <div className="container">
            <p className="section-eyebrow">Näin se toimii</p>
            <h2 className="section-title" id="steps-h" style={{marginBottom:'2rem'}}>Neljä askelta myyntiin</h2>
            <ol className="steps-row">
              {steps.map(s=>(
                <li key={s.n} className="sell-step">
                  <div className="sell-step-num">{s.n}</div>
                  <h3 className="sell-step-title">{s.title}</h3>
                  <p className="sell-step-desc">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Why */}
        <section style={{padding:'4rem 0',background:'var(--bg)'}} aria-labelledby="why-h">
          <div className="container">
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center'}}>
              <div>
                <p className="section-eyebrow">Miksi Clav.fi?</p>
                <h2 className="section-title" id="why-h" style={{marginBottom:'1.25rem'}}>Luotettava kumppani myyntiin</h2>
                <ul style={{display:'flex',flexDirection:'column',gap:'.75rem'}}>
                  {['Suomen suurin asuntoportaali – eniten ostajaehdokkaita','Ilmainen hinta-arvio perustuu toteutuneisiin kauppahintoihin','LKV-tutkinnon suorittaneet, tarkastetut välittäjät','Sähköinen kauppakirja ja turvallinen maksaminen','Reaaliaikainen seuranta: katsojat, tarjoukset, viestit'].map(item=>(
                    <li key={item} style={{display:'flex',alignItems:'flex-start',gap:'.6rem',fontSize:'.875rem',color:'var(--text-2)',lineHeight:1.6}}>
                      <span style={{color:'var(--text-2)',marginTop:'.1rem',flexShrink:0,width:16,height:16}}><CheckIcon /></span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div aria-hidden="true" style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--r-xl)',padding:'2rem',boxShadow:'var(--shadow-md)'}}>
                <p style={{fontSize:'.72rem',fontWeight:700,letterSpacing:'.09em',textTransform:'uppercase',color:'var(--text-4)',marginBottom:'1rem'}}>Esimerkkikohde</p>
                <div style={{background:'linear-gradient(135deg,var(--bg-alt),var(--bg-deep))',borderRadius:'var(--r-lg)',aspectRatio:'16/9',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--border-strong)',marginBottom:'1rem'}}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <div>
                    <p style={{fontFamily:'var(--font-display)',fontSize:'1.2rem',fontStyle:'italic',color:'var(--text-1)',letterSpacing:'-.01em'}}>389 000 €</p>
                    <p style={{fontSize:'.775rem',color:'var(--text-4)'}}>3h+k · 72 m² · Kallio</p>
                  </div>
                  <span style={{background:'var(--dark)',color:'#fff',fontSize:'.72rem',fontWeight:700,padding:'.25rem .7rem',borderRadius:'var(--r-xs)',textTransform:'uppercase',letterSpacing:'.04em'}}>Myyty 11 pv</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="seller-section-alt" style={{padding:'4rem 0'}} aria-labelledby="t-h">
          <div className="container">
            <p className="section-eyebrow">Asiakaskokemukset</p>
            <h2 className="section-title" id="t-h" style={{marginBottom:'2rem'}}>Mitä myyjät sanovat</h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1rem'}}>
              {testimonials.map(t=>(
                <div key={t.name} style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--r-lg)',padding:'1.5rem'}}>
                  <div style={{display:'flex',gap:'2px',marginBottom:'.75rem',color:'#C4922A'}}>
                    {Array.from({length:t.stars}).map((_,i)=><span key={i} style={{width:13,height:13,display:'inline-block'}}><StarIcon filled/></span>)}
                  </div>
                  <blockquote style={{fontSize:'.875rem',color:'var(--text-3)',lineHeight:1.75,marginBottom:'1rem'}}>"{t.quote}"</blockquote>
                  <div style={{display:'flex',alignItems:'center',gap:'.65rem',borderTop:'1px solid var(--border)',paddingTop:'.9rem'}}>
                    <div style={{width:32,height:32,borderRadius:'50%',background:'var(--bg-alt)',border:'1px solid var(--border-mid)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.72rem',fontWeight:700,color:'var(--text-3)'}}>{t.initials}</div>
                    <div><p style={{fontSize:'.815rem',fontWeight:700,color:'var(--text-1)'}}>{t.name}</p><p style={{fontSize:'.72rem',color:'var(--text-4)'}}>{t.location}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{padding:'4rem 0',background:'var(--bg)',textAlign:'center'}} aria-labelledby="cta-h">
          <div className="container" style={{maxWidth:540,margin:'0 auto'}}>
            <p className="section-eyebrow" style={{display:'flex',justifyContent:'center'}}>Aloita heti</p>
            <h2 className="section-title" id="cta-h" style={{marginBottom:'.75rem'}}>Valmis myymään?</h2>
            <p style={{fontSize:'.925rem',color:'var(--text-3)',lineHeight:1.72,marginBottom:'1.75rem'}}>Aloita ilmaisella hinta-arviolla. Se ei sido sinua mihinkään ja kestää alle minuutin.</p>
            <div className="seller-cta-row" style={{justifyContent:'center'}}>
              <Link href="/hinta-arvio" className="btn-dark-lg">Hae hinta-arvio <ArrowRightIcon /></Link>
              <Link href="/myy/ilmoita" className="btn-outline">Lisää kohde itse</Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
      <ScrollTopButton />
      <Script id="myy-ui" strategy="afterInteractive">{`const h=document.querySelector('.site-header');window.addEventListener('scroll',()=>h?.classList.toggle('scrolled',window.scrollY>20),{passive:true});`}</Script>
    </>
  )
}