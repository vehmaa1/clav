'use client'
// app/valittajille/dashboard/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { SiteHeader } from '@/components/NavFooter'
import { HomeIcon, ListIcon, UsersIcon, BarChart2Icon, CalendarIcon, SettingsIcon, LogOutIcon, PlusIcon, EyeIcon } from '@/lib/icons'
import { LISTINGS } from '@/lib/data'
import '../../clav.css'

const NAV = [
  { key:'dash',     label:'Kojelauta',    I:HomeIcon,      href:'/valittajille/dashboard' },
  { key:'listings', label:'Kohteet',      I:ListIcon,      href:'/valittajille/dashboard/kohteet', badge:'5' },
  { key:'leads',    label:'Liidit',       I:UsersIcon,     href:'/valittajille/dashboard/liidit',  badge:'12' },
  { key:'stats',    label:'Tilastot',     I:BarChart2Icon, href:'/valittajille/dashboard/tilastot' },
  { key:'calendar', label:'Kalenteri',    I:CalendarIcon,  href:'/valittajille/dashboard/kalenteri' },
  { key:'settings', label:'Asetukset',    I:SettingsIcon,  href:'/valittajille/dashboard/asetukset' },
  { key:'logout',   label:'Kirjaudu ulos',I:LogOutIcon,    href:'/kirjaudu' },
]

const TABLE_LISTINGS = LISTINGS.slice(0,5).map((l,i)=>({
  ...l,
  views:[247,183,312,89,441][i],
  leads:[8,5,11,2,16][i],
  status:(['active','active','reserved','draft','active'] as const)[i],
}))

const LEADS = [
  { id:1, initials:'MK', name:'Marianne K.', listing:'3h+k Kalliossa',       time:'2 min',  isNew:true  },
  { id:2, initials:'PL', name:'Petri L.',    listing:'Omakotitalo Espoossa',  time:'34 min', isNew:true  },
  { id:3, initials:'ST', name:'Sofia T.',    listing:'2h rivitalo Tampere',   time:'1 t',    isNew:false },
  { id:4, initials:'JV', name:'Juha V.',     listing:'1h+kk Oulu',            time:'3 t',    isNew:false },
  { id:5, initials:'AM', name:'Anni M.',     listing:'3h+k Kalliossa',        time:'5 t',    isNew:false },
]

const STATUS: Record<string,string> = { active:'Aktiivinen', reserved:'Varattu', draft:'Luonnos' }

export default function DashboardPage() {
  const [active, setActive] = useState('dash')
  return (
    <>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <header className="site-header" role="banner">
        <div className="container">
          <nav className="nav-inner">
            <Link href="/" className="nav-logo"><Image src="/icon_clav.png" alt="Clav.fi" width={26} height={26} className="nav-logo-img"/><span className="nav-logo-text">clav.fi</span></Link>
            <div className="nav-actions">
              <Link href="/valittajille/dashboard/kohteet/uusi" className="btn-dark" style={{display:'flex',alignItems:'center',gap:'.3rem',fontSize:'.85rem'}}>
                <span style={{width:14,height:14,display:'inline-flex'}}><PlusIcon /></span> Uusi kohde
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="dashboard-layout" id="main-content">
        <aside className="dashboard-sidebar" aria-label="Dashboard navigaatio">
          <div className="dash-logo">
            <span className="dash-logo-text">Välittäjäportaali</span>
          </div>
          <div style={{padding:'1rem 1.25rem .75rem',borderBottom:'1px solid rgba(255,255,255,.07)',marginBottom:'.5rem'}}>
            <p style={{fontSize:'.845rem',fontWeight:700,color:'rgba(255,255,255,.85)'}}>Tero Leinonen</p>
            <p style={{fontSize:'.75rem',color:'rgba(255,255,255,.35)'}}>Kiinteistömaailma Kallio</p>
            <p style={{fontSize:'.68rem',color:'rgba(255,255,255,.4)',marginTop:'.15rem'}}>LKV-123456</p>
          </div>
          <nav aria-label="Dashboard osiot">
            <p className="dash-nav-section">Päävalikko</p>
            {NAV.map(item=>(
              <Link key={item.key} href={item.href} className={`dash-nav-item${active===item.key?' active':''}`} onClick={()=>setActive(item.key)} aria-current={active===item.key?'page':undefined}>
                <item.I />{item.label}
                {item.badge && <span className="badge">{item.badge}</span>}
              </Link>
            ))}
          </nav>
        </aside>

        <main className="dashboard-content" aria-label="Dashboard">
          <div className="dash-topbar">
            <h1 className="dash-title">Kojelauta</h1>
            <div className="dash-topbar-actions">
              <Link href="/valittajille/dashboard/kohteet/uusi" className="dash-btn primary" style={{textDecoration:'none',display:'inline-flex',alignItems:'center',gap:'.3rem'}}>
                <span style={{width:13,height:13,display:'inline-flex'}}><PlusIcon /></span>Lisää kohde
              </Link>
              <button className="dash-btn ghost">Vie raportti</button>
            </div>
          </div>

          <div className="dash-stats" role="list">
            {[
              { v:'5',     l:'Aktiivista kohdetta',  d:'+1',   up:true  },
              { v:'1 272', l:'Katselukertaa (kk)',   d:'+18%', up:true  },
              { v:'42',    l:'Liidiä tässä kuussa',  d:'+7',   up:true  },
              { v:'2',     l:'Kauppaa tehty (kk)',   d:'0',    up:false },
            ].map(s=>(
              <div key={s.l} className="dash-stat" role="listitem">
                <div><span className="dash-stat-val">{s.v}</span><span className={`dash-stat-delta${s.up?' up':''}`}>{s.d}</span></div>
                <div className="dash-stat-lbl">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Listings table */}
          <div className="dash-table" aria-labelledby="t-listings">
            <div className="dash-table-header">
              <h2 className="dash-table-title" id="t-listings">Omat kohteet</h2>
              <Link href="/valittajille/dashboard/kohteet" className="dash-table-action">Katso kaikki</Link>
            </div>
            <div className="dash-th" style={{gridTemplateColumns:'1fr 100px 60px 70px 90px'}}>
              <span>Kohde</span><span>Hinta</span><span>Näytöt</span><span>Liidit</span><span>Tila</span>
            </div>
            <ul role="list">
              {TABLE_LISTINGS.map(l=>(
                <li key={l.id} className="dash-tr" style={{gridTemplateColumns:'1fr 100px 60px 70px 90px'}}>
                  <div>
                    <Link href={`/kohde/${l.slug}`} className="listing-title-cell">{l.title}</Link>
                    <p className="listing-addr-cell">{l.address}</p>
                  </div>
                  <span className="cell-price">{l.price}</span>
                  <span className="cell-views">{l.views}</span>
                  <span className="cell-views" style={{color:l.leads>8?'var(--green-ok)':undefined,fontWeight:l.leads>8?700:undefined}}>{l.leads}</span>
                  <span><span className={`status-pill ${l.status}`}>{STATUS[l.status]}</span></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Leads */}
          <div className="dash-table" aria-labelledby="t-leads">
            <div className="dash-table-header">
              <h2 className="dash-table-title" id="t-leads">Uusimmat liidit</h2>
              <Link href="/valittajille/dashboard/liidit" className="dash-table-action">Katso kaikki</Link>
            </div>
            <ul role="list">
              {LEADS.map(lead=>(
                <li key={lead.id} className="lead-row">
                  <div className="lead-avatar">{lead.initials}</div>
                  <div><p className="lead-name">{lead.name}</p><p className="lead-listing">{lead.listing}</p></div>
                  {lead.isNew && <span className="lead-status-new">Uusi</span>}
                  <span className="lead-time">{lead.time} sitten</span>
                  <button className="row-action-btn" aria-label={`Avaa: ${lead.name}`} style={{marginLeft:'.5rem'}}><EyeIcon /></button>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  )
}