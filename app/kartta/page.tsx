'use client'
// app/kartta/page.tsx — full map search page
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SiteHeader } from '@/components/NavFooter'
import PropertyCard from '@/components/PropertyCard'
import { LISTINGS } from '@/lib/data'
import { SearchIcon, FilterIcon } from '@/lib/icons'
import '../clav.css'

const MAP_PINS = [
  { id:1,  top:'38%', left:'28%', price:'389 k', active:true  },
  { id:2,  top:'26%', left:'54%', price:'695 k', active:false },
  { id:3,  top:'54%', left:'64%', price:'225 k', active:false },
  { id:4,  top:'46%', left:'18%', price:'89 k',  active:false },
  { id:5,  top:'64%', left:'44%', price:'345 k', active:false },
  { id:6,  top:'32%', left:'38%', price:'435 k', active:false },
  { id:7,  top:'50%', left:'72%', price:'185 k', active:false },
  { id:8,  top:'42%', left:'58%', price:'520 k', active:false },
]

export default function KarttaPage() {
  const [selected, setSelected] = useState<number | null>(1)
  const [search, setSearch] = useState('')
  const selectedListing = selected ? LISTINGS.find(l => l.id === selected) : null

  return (
    <>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <SiteHeader currentPage="/kartta" />

      <div className="map-full-page" id="main-content">
        {/* Top search bar */}
        <div className="map-top-bar">
          <div className="container">
            <div style={{display:'flex',gap:'.5rem',alignItems:'center'}}>
              <div style={{position:'relative',flex:1,maxWidth:380}}>
                <span style={{position:'absolute',left:'.8rem',top:'50%',transform:'translateY(-50%)',color:'var(--text-4)',width:15,height:15,pointerEvents:'none'}}><SearchIcon /></span>
                <input
                  type="search"
                  className="strip-input"
                  style={{paddingLeft:'2.3rem'}}
                  placeholder="Kaupunki, alue tai osoite"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  aria-label="Hae kartalta"
                />
              </div>
              <label htmlFor="map-type" className="sr-only">Kohdetyyppi</label>
              <select id="map-type" className="strip-select" defaultValue="">
                <option value="">Kaikki tyypit</option>
                <option>Kerrostalo</option><option>Omakotitalo</option><option>Rivitalo</option>
              </select>
              <label htmlFor="map-price" className="sr-only">Hinta</label>
              <select id="map-price" className="strip-select" defaultValue="">
                <option value="">Kaikki hinnat</option>
                <option value="250000">Alle 250 000 €</option>
                <option value="500000">Alle 500 000 €</option>
              </select>
              <button className="strip-filter-btn"><FilterIcon />Lisää suodattimia</button>
              <span style={{marginLeft:'auto',fontSize:'.8rem',color:'var(--text-4)'}}>
                <strong style={{color:'var(--text-1)'}}>12 400</strong> kohdetta alueella
              </span>
            </div>
          </div>
        </div>

        {/* Map area */}
        <div className="map-container" role="application" aria-label="Kohteiden kartta">
          {/* Stylised map */}
          <div style={{position:'absolute',inset:0,background:'linear-gradient(150deg,var(--bg-alt) 0%,var(--bg-deep) 60%,#E2DDD5 100%)'}}>
            {/* Grid lines */}
            <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(26,26,26,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(26,26,26,.04) 1px,transparent 1px)',backgroundSize:'60px 60px'}}/>

            {/* Road-like lines */}
            <div style={{position:'absolute',top:'40%',left:0,right:0,height:3,background:'rgba(255,255,255,.6)',borderTop:'1px solid rgba(26,26,26,.06)',borderBottom:'1px solid rgba(26,26,26,.06)'}}/>
            <div style={{position:'absolute',top:0,bottom:0,left:'35%',width:2,background:'rgba(255,255,255,.5)',borderLeft:'1px solid rgba(26,26,26,.05)'}}/>
            <div style={{position:'absolute',top:'60%',left:0,right:0,height:2,background:'rgba(255,255,255,.4)'}}/>
            <div style={{position:'absolute',top:0,bottom:0,left:'65%',width:1.5,background:'rgba(255,255,255,.4)'}}/>

            {/* Map pins */}
            {MAP_PINS.map(pin => (
              <button
                key={pin.id}
                onClick={() => setSelected(pin.id === selected ? null : pin.id)}
                style={{
                  position:'absolute', top:pin.top, left:pin.left,
                  background: pin.id === selected ? 'var(--dark)' : 'var(--surface)',
                  color: pin.id === selected ? '#fff' : 'var(--text-1)',
                  border: pin.id === selected ? '2px solid var(--dark)' : '1.5px solid var(--border-mid)',
                  borderRadius:'100px',
                  padding:'.25rem .65rem',
                  fontSize:'.72rem',fontWeight:700,
                  cursor:'pointer',
                  boxShadow:'var(--shadow-sm)',
                  transition:'all .15s ease',
                  zIndex: pin.id === selected ? 10 : 1,
                  transform: pin.id === selected ? 'scale(1.1)' : 'scale(1)',
                  whiteSpace:'nowrap',
                }}
                aria-label={`Kohde ${pin.price} € – ${pin.id === selected ? 'valittu' : 'avaa'}`}
                aria-pressed={pin.id === selected}
              >
                {pin.price} €
              </button>
            ))}
          </div>

          {/* Overlay card — selected listing */}
          {selectedListing && (
            <div className="map-overlay-card" role="complementary" aria-label="Valittu kohde">
              <div style={{padding:'.75rem',borderBottom:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <span style={{fontSize:'.72rem',fontWeight:700,letterSpacing:'.07em',textTransform:'uppercase',color:'var(--text-4)'}}>Valittu kohde</span>
                <button onClick={() => setSelected(null)} style={{color:'var(--text-4)',fontSize:'.8rem',cursor:'pointer'}} aria-label="Sulje">✕</button>
              </div>
              <div style={{padding:'.75rem'}}>
                <PropertyCard listing={selectedListing} />
              </div>
              <div style={{padding:'.75rem',borderTop:'1px solid var(--border)',background:'var(--bg)'}}>
                <Link href="/haku" style={{display:'block',textAlign:'center',fontSize:'.815rem',fontWeight:600,color:'var(--text-2)',textDecoration:'underline',textUnderlineOffset:'3px'}}>
                  Näytä kaikki {MAP_PINS.length} kohdetta tässä näkymässä
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}