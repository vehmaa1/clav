'use client'
// app/hinta-arvio/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { SiteHeader, SiteFooter } from '@/components/NavFooter'
import ScrollTopButton from '@/components/ScrollTopButton'
import { SearchIcon, TrendingUpIcon, CheckIcon } from '@/lib/icons'
import '../clav.css'

const COMPS = [
  { addr:'Fleminginkatu 8, Helsinki',   price:'375 000 €', perM2:'5 208 €/m²', sold:'14.2.2025' },
  { addr:'Vaasankatu 5, Helsinki',      price:'402 000 €', perM2:'5 588 €/m²', sold:'3.1.2025' },
  { addr:'Hämeentie 22 A, Helsinki',    price:'361 000 €', perM2:'5 014 €/m²', sold:'28.11.2024' },
  { addr:'Toinen linja 12, Helsinki',   price:'415 500 €', perM2:'5 777 €/m²', sold:'15.10.2024' },
]
const BARS = [
  { label:'Sijainti', pct:88 },{ label:'Pinta-ala', pct:72 },{ label:'Kunto', pct:65 },{ label:'Kerros', pct:80 },{ label:'Ominaisuudet', pct:55 },
]

export default function HintaArvioPage() {
  const [addr, setAddr] = useState('')
  const [area, setArea] = useState('')
  const [rooms, setRooms] = useState('')
  const [year, setYear] = useState('')
  const [condition, setCondition] = useState('')
  const [result, setResult] = useState(false)

  return (
    <>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <SiteHeader currentPage="/myy" />
      <main className="valuation-page" id="main-content">
        <div className="valuation-hero">
          <div className="container">
            <div style={{textAlign:'center',maxWidth:540,margin:'0 auto 2.5rem'}}>
              <p className="section-eyebrow" style={{display:'flex',justifyContent:'center'}}>Ilmainen hinta-arvio</p>
              <h1 style={{fontFamily:'var(--font-display)',fontSize:'clamp(1.8rem,4vw,3rem)',fontWeight:400,fontStyle:'italic',letterSpacing:'-.025em',color:'var(--text-1)',lineHeight:1.1,marginBottom:'.75rem'}}>
                Paljonko asuntosi on<br/>arvoinen tänään?
              </h1>
              <p style={{fontSize:'.95rem',color:'var(--text-3)',lineHeight:1.72}}>Syötä osoite ja saat välittömästi arvion alueen viimeisimpien kauppahintojen perusteella.</p>
            </div>
            <div className="valuation-hero-inner">
              <div className="valuation-form-card">
                <h2 className="valuation-form-title">Kohteen tiedot</h2>
                <form className="valuation-form" onSubmit={e=>{e.preventDefault();if(addr&&area)setResult(true)}} noValidate>
                  <div className="field">
                    <label className="field-label" htmlFor="va-addr">Osoite</label>
                    <div style={{position:'relative'}}>
                      <span style={{position:'absolute',left:'.85rem',top:'50%',transform:'translateY(-50%)',color:'var(--text-4)',width:15,height:15,pointerEvents:'none'}}><SearchIcon /></span>
                      <input id="va-addr" type="text" className="field-input" style={{paddingLeft:'2.3rem'}} placeholder="Esim. Fleminginkatu 14, Helsinki" value={addr} onChange={e=>setAddr(e.target.value)} required/>
                    </div>
                  </div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'.65rem'}}>
                    <div className="field"><label className="field-label" htmlFor="va-area">Pinta-ala (m²)</label><input id="va-area" type="number" className="field-input" placeholder="72" value={area} onChange={e=>setArea(e.target.value)} required/></div>
                    <div className="field">
                      <label className="field-label" htmlFor="va-rooms">Huoneluku</label>
                      <select id="va-rooms" className="field-select" value={rooms} onChange={e=>setRooms(e.target.value)}>
                        <option value="">Valitse</option>{['1h','2h','3h','4h','5h+'].map(r=><option key={r}>{r}</option>)}
                      </select>
                    </div>
                  </div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'.65rem'}}>
                    <div className="field"><label className="field-label" htmlFor="va-year">Rakennusvuosi</label><input id="va-year" type="number" className="field-input" placeholder="1965" value={year} onChange={e=>setYear(e.target.value)}/></div>
                    <div className="field">
                      <label className="field-label" htmlFor="va-cond">Kunto</label>
                      <select id="va-cond" className="field-select" value={condition} onChange={e=>setCondition(e.target.value)}>
                        <option value="">Valitse</option><option>Erinomainen</option><option>Hyvä</option><option>Tyydyttävä</option><option>Remontoitava</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="submit-btn" style={{marginTop:'.25rem'}}>Laske arvio</button>
                  <p style={{fontSize:'.72rem',color:'var(--text-5)',textAlign:'center'}}>Ilmainen, ei vaadi rekisteröitymistä</p>
                </form>
              </div>

              <div className="valuation-result" aria-live="polite">
                {result ? (
                  <>
                    <div className="valuation-result-tag"><TrendingUpIcon />Hinta-arvio valmis</div>
                    <p className="valuation-range">340 000 – 415 000 €</p>
                    <p className="valuation-per-m2">Arvioitu hintahaarukka · n. 5 140 €/m²</p>
                    <p style={{fontSize:'.72rem',fontWeight:700,letterSpacing:'.07em',textTransform:'uppercase',color:'var(--text-4)',marginBottom:'.65rem'}}>Arvioon vaikuttavat tekijät</p>
                    <div className="valuation-bars">
                      {BARS.map(b=>(
                        <div key={b.label} className="val-bar-row">
                          <span className="val-bar-label">{b.label}</span>
                          <div className="val-bar-track"><div className="val-bar-fill" style={{width:`${b.pct}%`}}/></div>
                          <span className="val-bar-val">{b.pct}/100</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/myy/ilmoita" className="valuation-cta" style={{display:'block',textAlign:'center',textDecoration:'none'}}>Laita myyntiin nyt</Link>
                    <p className="comparable-title">Vertailukaupat alueella</p>
                    <ul className="comparable-list">
                      {COMPS.map(c=>(
                        <li key={c.addr} className="comparable-item">
                          <div><p className="comparable-addr">{c.addr}</p><p style={{fontSize:'.72rem',color:'var(--text-5)'}}>Myyty {c.sold} · {c.perM2}</p></div>
                          <span className="comparable-price">{c.price}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%',minHeight:320,textAlign:'center',gap:'.75rem'}}>
                    <div style={{width:48,height:48,borderRadius:'50%',background:'var(--bg-deep)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--text-4)'}}><TrendingUpIcon /></div>
                    <p style={{fontSize:'.875rem',fontWeight:700,color:'var(--text-1)'}}>Arvio näkyy tässä</p>
                    <p style={{fontSize:'.815rem',color:'var(--text-3)',maxWidth:'30ch'}}>Täytä osoite ja pinta-ala saadaksesi välittömän arvion.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <section style={{padding:'4rem 0',background:'var(--surface)',borderTop:'1px solid var(--border)'}}>
          <div className="container">
            <h2 className="section-title" style={{textAlign:'center',marginBottom:'2.5rem'}}>Miksi luottaa Clav.fi:n arvioon?</h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.5rem'}}>
              {[
                {title:'Perustuu toteutuneisiin kauppoihin',desc:'Hyödynnämme Maanmittauslaitoksen kauppahintatietoja sekä omaa transaktiohistoriadataaMme.'},
                {title:'Reaaliaikainen markkina-analyysi',desc:'Malli päivittyy päivittäin ja huomioi alueelliset trendit, kausivaihtelun ja markkinadynamiikan.'},
                {title:'Ilmainen ja sitoutumisvapaa',desc:'Arvio ei vaadi rekisteröitymistä eikä sido sinua mihinkään. Pyydä niin monta arviota kuin haluat.'},
              ].map(f=>(
                <div key={f.title} style={{background:'var(--bg)',border:'1px solid var(--border)',borderRadius:'var(--r-lg)',padding:'1.5rem'}}>
                  <div style={{width:32,height:32,borderRadius:'var(--r-sm)',background:'var(--bg-alt)',border:'1px solid var(--border-mid)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--text-2)',marginBottom:'.85rem'}}><CheckIcon /></div>
                  <h3 style={{fontSize:'.875rem',fontWeight:700,color:'var(--text-1)',marginBottom:'.4rem'}}>{f.title}</h3>
                  <p style={{fontSize:'.815rem',color:'var(--text-3)',lineHeight:1.7}}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <ScrollTopButton />
    </>
  )
}