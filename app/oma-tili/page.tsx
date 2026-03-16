'use client'
// app/oma-tili/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { SiteHeader, SiteFooter } from '@/components/NavFooter'
import ScrollTopButton from '@/components/ScrollTopButton'
import { HomeIcon, HeartIcon, BellIcon, SearchIcon, SettingsIcon, LogOutIcon, EyeIcon, TrashIcon, EditIcon, ClockIcon } from '@/lib/icons'
import { LISTINGS } from '@/lib/data'
import '../clav.css'

const NAV = [
  { key:'dash',     label:'Kojelauta',          href:'/oma-tili',              I:HomeIcon },
  { key:'saved',    label:'Tallennetut',         href:'/oma-tili/tallennetut',  I:HeartIcon,  badge:'3' },
  { key:'watchdog', label:'Hakuvahdit',          href:'/oma-tili/hakuvahdit',   I:BellIcon,   badge:'24' },
  { key:'recent',   label:'Viimeisimmät haut',   href:'/oma-tili',              I:SearchIcon },
  { key:'settings', label:'Asetukset',           href:'/oma-tili/asetukset',    I:SettingsIcon },
  { key:'logout',   label:'Kirjaudu ulos',       href:'/kirjaudu',              I:LogOutIcon },
]

const SAVED = LISTINGS.slice(0, 3)
const WATCHDOGS = [
  { id:1, name:'Helsinki kerrostalo',    criteria:'Helsinki · 2–3h · Alle 400 000 €', count:'14 uutta', freq:'Heti' },
  { id:2, name:'Espoo omakotitalo',      criteria:'Espoo · 4h+ · Alle 800 000 €',    count:'3 uutta',  freq:'Päivittäin' },
  { id:3, name:'Tampere sijoitusasunto', criteria:'Tampere · 1–2h · Alle 150 000 €', count:'7 uutta',  freq:'Viikoittain' },
]
const RECENT = ['Kerrostalo Helsinki 2h alle 300 000 €','Omakotitalo Espoo 4h+','Rivitalo Tampere alle 250 000 €','Tontti Turku']

export default function OmaTiliPage() {
  const [active, setActive] = useState('dash')
  return (
    <>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <SiteHeader />
      <div className="account-layout" id="main-content">
        <aside className="account-sidebar" aria-label="Tilin navigaatio">
          <div className="account-user">
            <div className="account-avatar">MV</div>
            <p className="account-name">Matti Virtanen</p>
            <p className="account-email">matti@esimerkki.fi</p>
          </div>
          <nav aria-label="Tilin osiot">
            <p className="account-nav-section">Oma tili</p>
            {NAV.map(item=>(
              <Link key={item.key} href={item.href} className={`account-nav-item${active===item.key?' active':''}`} onClick={()=>setActive(item.key)} aria-current={active===item.key?'page':undefined}>
                <item.I />{item.label}
                {item.badge && <span className="badge">{item.badge}</span>}
              </Link>
            ))}
          </nav>
        </aside>

        <main className="account-content">
          <h1 className="account-page-title">Hei, Matti!</h1>
          <p className="account-page-sub">Viimeksi kirjautunut 15.3.2025 klo 14:22</p>

          <div className="stat-cards-row" role="list">
            {[['3','Tallennettua kohdetta'],['24','Uutta kohdetta hauissasi'],['3','Aktiivista hakuvahtiasi'],['8','Katsottua kohdetta']].map(([v,l])=>(
              <div key={l} className="stat-card" role="listitem">
                <div className="stat-card-val">{v}</div>
                <div className="stat-card-lbl">{l}</div>
              </div>
            ))}
          </div>

          {/* Saved listings */}
          <div className="account-section" aria-labelledby="saved-h">
            <div className="account-section-header">
              <h2 className="account-section-title" id="saved-h">Tallennetut kohteet</h2>
              <Link href="/oma-tili/tallennetut" className="account-section-action">Katso kaikki</Link>
            </div>
            <ul role="list">
              {SAVED.map(l=>(
                <li key={l.id} className="saved-listing-row">
                  <div className="saved-listing-img"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg></div>
                  <div className="saved-listing-info" style={{flex:1,minWidth:0}}>
                    <Link href={`/kohde/${l.slug}`} className="saved-listing-title">{l.title}</Link>
                    <p className="saved-listing-addr">{l.address}</p>
                  </div>
                  <span className="saved-listing-price">{l.price}</span>
                  <div className="saved-listing-actions">
                    <Link href={`/kohde/${l.slug}`} className="row-action-btn" aria-label={`Avaa: ${l.title}`}><EyeIcon /></Link>
                    <button className="row-action-btn" aria-label={`Poista: ${l.title}`}><TrashIcon /></button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Watchdogs */}
          <div className="account-section" aria-labelledby="watch-h">
            <div className="account-section-header">
              <h2 className="account-section-title" id="watch-h">Hakuvahdit</h2>
              <Link href="/oma-tili/hakuvahdit" className="account-section-action">Hallitse</Link>
            </div>
            <ul role="list">
              {WATCHDOGS.map(w=>(
                <li key={w.id} className="watchdog-row">
                  <div className="watchdog-icon"><BellIcon /></div>
                  <div>
                    <p className="watchdog-name">{w.name}</p>
                    <p className="watchdog-criteria">{w.criteria}</p>
                  </div>
                  <div className="watchdog-meta">
                    <p className="watchdog-count">{w.count}</p>
                    <p className="watchdog-freq">{w.freq}</p>
                  </div>
                  <label className="toggle-pill" aria-label={`${w.name} päällä`}>
                    <input type="checkbox" defaultChecked/>
                    <div className="toggle-track"/>
                    <div className="toggle-knob"/>
                  </label>
                  <button className="row-action-btn" aria-label={`Muokkaa: ${w.name}`}><EditIcon /></button>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent searches */}
          <div className="account-section" aria-labelledby="recent-h">
            <div className="account-section-header">
              <h2 className="account-section-title" id="recent-h">Viimeisimmät haut</h2>
            </div>
            <ul role="list">
              {RECENT.map(r=>(
                <li key={r} className="recent-search-row">
                  <ClockIcon /><span>{r}</span>
                  <Link href={`/haku?q=${encodeURIComponent(r)}`} className="account-section-action">Hae</Link>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
      <SiteFooter />
      <ScrollTopButton />
    </>
  )
}