'use client'
// app/oma-tili/hakuvahdit/page.tsx
import Link from 'next/link'
import { useState } from 'react'
import { SiteHeader, SiteFooter } from '@/components/NavFooter'
import { BellIcon, PlusIcon, EditIcon, TrashIcon } from '@/lib/icons'
import '../../clav.css'

const WATCHDOGS = [
  { id:1, name:'Helsinki kerrostalo',    criteria:'Helsinki · 2–3h · Alle 400 000 €', count:14, freq:'Heti',        active:true  },
  { id:2, name:'Espoo omakotitalo',      criteria:'Espoo · 4h+ · Alle 800 000 €',    count:3,  freq:'Päivittäin',  active:true  },
  { id:3, name:'Tampere sijoitusasunto', criteria:'Tampere · 1–2h · Alle 150 000 €', count:7,  freq:'Viikoittain', active:false },
]

export default function HakuvahditPage() {
  const [dogs, setDogs] = useState(WATCHDOGS)
  const toggle = (id: number) => setDogs(d => d.map(w => w.id === id ? { ...w, active: !w.active } : w))

  return (
    <>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <SiteHeader />
      <div style={{paddingTop:64,background:'var(--bg)',minHeight:'100svh'}} id="main-content">
        <div className="container" style={{padding:'2rem 1.5rem',maxWidth:800}}>
          <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',marginBottom:'2rem',flexWrap:'wrap',gap:'1rem'}}>
            <div>
              <p style={{fontSize:'.8rem',color:'var(--text-4)',marginBottom:'.5rem'}}><Link href="/oma-tili">Oma tili</Link> / Hakuvahdit</p>
              <h1 style={{fontFamily:'var(--font-display)',fontSize:'1.6rem',fontWeight:400,fontStyle:'italic',letterSpacing:'-.02em',color:'var(--text-1)'}}>Hakuvahdit</h1>
              <p style={{fontSize:'.875rem',color:'var(--text-4)',marginTop:'.25rem'}}>Saat ilmoituksen heti kun sopiva kohde tulee tarjolle.</p>
            </div>
            <Link href="/haku" className="btn-dark-lg" style={{textDecoration:'none',display:'inline-flex',alignItems:'center',gap:'.4rem',fontSize:'.875rem'}}>
              <PlusIcon />Uusi hakuvahti
            </Link>
          </div>

          <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--r-lg)',overflow:'hidden'}}>
            {dogs.map((w, i) => (
              <div key={w.id} style={{display:'flex',alignItems:'center',gap:'1rem',padding:'1.25rem',borderBottom:i<dogs.length-1?'1px solid var(--border)':'none'}}>
                <div className="watchdog-icon"><BellIcon /></div>
                <div style={{flex:1,minWidth:0}}>
                  <p className="watchdog-name">{w.name}</p>
                  <p className="watchdog-criteria">{w.criteria}</p>
                </div>
                <div style={{textAlign:'right',flexShrink:0}}>
                  <p style={{fontSize:'.815rem',fontWeight:700,color:w.active?'var(--text-1)':'var(--text-4)'}}>{w.active ? `${w.count} uutta kohdetta` : 'Ei uusia'}</p>
                  <p className="watchdog-freq">{w.freq}</p>
                </div>
                <label className="toggle-pill" aria-label={`${w.name} ${w.active?'päällä':'pois'}`}>
                  <input type="checkbox" checked={w.active} onChange={()=>toggle(w.id)}/>
                  <div className="toggle-track"/>
                  <div className="toggle-knob"/>
                </label>
                <div style={{display:'flex',gap:'.35rem',flexShrink:0}}>
                  <button className="row-action-btn" aria-label={`Muokkaa: ${w.name}`}><EditIcon /></button>
                  <button className="row-action-btn" aria-label={`Poista: ${w.name}`} onClick={()=>setDogs(d=>d.filter(x=>x.id!==w.id))}><TrashIcon /></button>
                </div>
              </div>
            ))}
            {dogs.length === 0 && (
              <div style={{padding:'3rem',textAlign:'center'}}>
                <p style={{fontSize:'.875rem',color:'var(--text-4)'}}>Ei aktiivisia hakuvahteja.</p>
                <Link href="/haku" className="btn-dark-lg" style={{textDecoration:'none',display:'inline-flex',marginTop:'1rem',fontSize:'.875rem'}}>Luo ensimmäinen hakuvahti</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}