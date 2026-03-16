'use client'
// app/myy/ilmoita/page.tsx — multi-step listing form
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import '../../clav.css'
import { HomeIcon, BuildingIcon, RowsIcon, TreeIcon, PairIcon, UploadIcon, ChevronRightIcon, CheckIcon } from '@/lib/icons'

const STEPS = ['Kohdetyyppi', 'Tiedot', 'Kuvat & hinta', 'Vahvistus']
const TYPES = [
  { value:'kerrostalo',  label:'Kerrostalo',  I:BuildingIcon },
  { value:'omakotitalo', label:'Omakotitalo', I:HomeIcon },
  { value:'rivitalo',    label:'Rivitalo',    I:RowsIcon },
  { value:'paritalo',    label:'Paritalo',    I:PairIcon },
  { value:'tontti',      label:'Tontti',      I:TreeIcon },
  { value:'muu',         label:'Muu',         I:HomeIcon },
]

export default function IlmoitaPage() {
  const [step, setStep] = useState(0)
  const [type, setType] = useState('')
  const [form, setForm] = useState({ address:'', zip:'', city:'', area:'', rooms:'', floor:'', year:'', condition:'', description:'', price:'', maintenance:'' })
  const [done, setDone] = useState(false)
  const upd = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  return (
    <>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <header className="site-header" role="banner">
        <div className="container">
          <nav className="nav-inner">
            <Link href="/" className="nav-logo">
              <Image src="/icon_clav.png" alt="Clav.fi" width={26} height={26} className="nav-logo-img"/>
              <span className="nav-logo-text">clav.fi</span>
            </Link>
            <div className="nav-actions">
              <Link href="/kirjaudu" className="btn-ghost">Kirjaudu</Link>
              <Link href="/rekisteroidy" className="btn-dark">Rekisteröidy</Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="ilmoita-page" id="main-content">
        <div className="ilmoita-header">
          <nav className="ilmoita-progress" aria-label="Edistyminen">
            {STEPS.map((label, i) => (
              <div key={label} style={{display:'contents'}}>
                <div className="progress-step">
                  <div className={`progress-dot${i < step ? ' done' : i === step ? ' active' : ''}`}>
                    {i < step ? <CheckIcon /> : i + 1}
                  </div>
                  <span className={`progress-label${i === step ? ' active' : ''}`}>{label}</span>
                </div>
                {i < STEPS.length - 1 && <div className={`progress-connector${i < step ? ' done' : ''}`}/>}
              </div>
            ))}
          </nav>
        </div>

        {done ? (
          <div className="ilmoita-body" style={{textAlign:'center',paddingTop:'4rem'}}>
            <div style={{width:64,height:64,borderRadius:'50%',background:'var(--bg-alt)',border:'1px solid var(--border-mid)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--text-2)',margin:'0 auto 1.25rem'}}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h1 className="ilmoita-step-title">Ilmoitus lähetetty!</h1>
            <p className="ilmoita-step-desc" style={{maxWidth:'42ch',margin:'0 auto 2rem'}}>Kohteesi on tarkistuksessa ja julkaistaan 1–2 tunnin kuluessa.</p>
            <Link href="/oma-tili" className="btn-dark-lg">Siirry omaan tiliin</Link>
          </div>
        ) : (
          <div className="ilmoita-body">
            {step === 0 && (
              <>
                <h1 className="ilmoita-step-title">Minkä tyyppinen kohde?</h1>
                <p className="ilmoita-step-desc">Valitse kohteen tyyppi jatkaaksesi.</p>
                <div className="ilmoita-type-grid" role="radiogroup">
                  {TYPES.map(({ value, label, I }) => (
                    <button key={value} type="button" className={`type-card${type === value ? ' selected' : ''}`} role="radio" aria-checked={type === value} onClick={() => setType(value)}>
                      <div className="type-card-icon"><I /></div>
                      <span className="type-card-label">{label}</span>
                    </button>
                  ))}
                </div>
                <div className="ilmoita-nav" style={{justifyContent:'flex-end'}}>
                  <button className="btn-next" disabled={!type} onClick={() => setStep(1)}>Seuraava <ChevronRightIcon /></button>
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <h1 className="ilmoita-step-title">Kohteen tiedot</h1>
                <p className="ilmoita-step-desc">Täytä perustiedot. Voit muokata niitä myöhemmin.</p>
                <div className="ilmoita-form">
                  <div className="field"><label className="field-label" htmlFor="f-addr">Katuosoite</label><input id="f-addr" type="text" className="field-input" placeholder="Esimerkinkatu 1" value={form.address} onChange={e=>upd('address',e.target.value)}/></div>
                  <div className="form-row-2">
                    <div className="field"><label className="field-label" htmlFor="f-zip">Postinumero</label><input id="f-zip" type="text" className="field-input" placeholder="00100" value={form.zip} onChange={e=>upd('zip',e.target.value)} maxLength={5}/></div>
                    <div className="field"><label className="field-label" htmlFor="f-city">Kaupunki</label><input id="f-city" type="text" className="field-input" placeholder="Helsinki" value={form.city} onChange={e=>upd('city',e.target.value)}/></div>
                  </div>
                  <div className="form-row-2">
                    <div className="field"><label className="field-label" htmlFor="f-area">Pinta-ala (m²)</label><input id="f-area" type="number" className="field-input" placeholder="72" value={form.area} onChange={e=>upd('area',e.target.value)}/></div>
                    <div className="field"><label className="field-label" htmlFor="f-rooms">Huoneistoseloste</label><input id="f-rooms" type="text" className="field-input" placeholder="3h+k" value={form.rooms} onChange={e=>upd('rooms',e.target.value)}/></div>
                  </div>
                  <div className="form-row-2">
                    <div className="field"><label className="field-label" htmlFor="f-floor">Kerros</label><input id="f-floor" type="text" className="field-input" placeholder="4/5" value={form.floor} onChange={e=>upd('floor',e.target.value)}/></div>
                    <div className="field"><label className="field-label" htmlFor="f-year">Rakennusvuosi</label><input id="f-year" type="number" className="field-input" placeholder="1965" value={form.year} onChange={e=>upd('year',e.target.value)}/></div>
                  </div>
                  <div className="field">
                    <label className="field-label" htmlFor="f-cond">Kunto</label>
                    <select id="f-cond" className="field-select" value={form.condition} onChange={e=>upd('condition',e.target.value)}>
                      <option value="">Valitse kunto</option>
                      <option>Uusi / juuri remontoitu</option><option>Hyvä</option><option>Tyydyttävä</option><option>Remontoitava</option>
                    </select>
                  </div>
                  <div className="field"><label className="field-label" htmlFor="f-desc">Kuvaus</label><textarea id="f-desc" className="field-input field-textarea" placeholder="Kerro kohteesta..." value={form.description} onChange={e=>upd('description',e.target.value)} rows={4}/></div>
                </div>
                <div className="ilmoita-nav">
                  <button className="btn-back" onClick={()=>setStep(0)}>Takaisin</button>
                  <button className="btn-next" onClick={()=>setStep(2)}>Seuraava <ChevronRightIcon /></button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h1 className="ilmoita-step-title">Kuvat ja hinta</h1>
                <p className="ilmoita-step-desc">Laadukkaat kuvat nopeuttavat myyntiä merkittävästi.</p>
                <div className="ilmoita-form">
                  <div className="photo-dropzone" role="button" tabIndex={0} aria-label="Lataa kuvia">
                    <div className="photo-dropzone-icon"><UploadIcon /></div>
                    <p className="photo-dropzone-text">Lataa kuvat tähän</p>
                    <p className="photo-dropzone-hint">PNG, JPG tai WEBP · Max 20 Mt / kuva · Max 30 kuvaa</p>
                  </div>
                  <div className="field"><label className="field-label" htmlFor="f-price">Pyyntihinta (€)</label><input id="f-price" type="number" className="field-input" placeholder="389000" value={form.price} onChange={e=>upd('price',e.target.value)}/></div>
                  <div className="field"><label className="field-label" htmlFor="f-maint">Hoitovastike (€/kk)</label><input id="f-maint" type="number" className="field-input" placeholder="312" value={form.maintenance} onChange={e=>upd('maintenance',e.target.value)}/></div>
                </div>
                <div className="ilmoita-nav">
                  <button className="btn-back" onClick={()=>setStep(1)}>Takaisin</button>
                  <button className="btn-next" onClick={()=>setStep(3)}>Esikatsele <ChevronRightIcon /></button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h1 className="ilmoita-step-title">Tarkista ja julkaise</h1>
                <p className="ilmoita-step-desc">Tarkista tiedot ennen julkaisua.</p>
                <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--r-lg)',overflow:'hidden',marginBottom:'1.5rem'}}>
                  {[['Tyyppi',type||'–'],['Osoite',[form.address,form.zip,form.city].filter(Boolean).join(', ')||'–'],['Pinta-ala',form.area?`${form.area} m²`:'–'],['Huoneet',form.rooms||'–'],['Pyyntihinta',form.price?`${Number(form.price).toLocaleString('fi-FI')} €`:'–']].map(([k,v],i,arr)=>(
                    <div key={k} style={{display:'flex',justifyContent:'space-between',padding:'.75rem 1.1rem',borderBottom:i<arr.length-1?'1px solid var(--border)':'none',fontSize:'.875rem'}}>
                      <span style={{color:'var(--text-3)'}}>{k}</span>
                      <span style={{fontWeight:600,color:'var(--text-1)'}}>{v}</span>
                    </div>
                  ))}
                </div>
                <div className="ilmoita-nav">
                  <button className="btn-back" onClick={()=>setStep(2)}>Takaisin</button>
                  <button className="btn-next" onClick={()=>setDone(true)}>Julkaise ilmoitus <ChevronRightIcon /></button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  )
}