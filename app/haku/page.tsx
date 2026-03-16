// app/haku/page.tsx — Search results
import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import { SiteHeader, SiteFooter } from '@/components/NavFooter'
import ScrollTopButton from '@/components/ScrollTopButton'
import PropertyCard from '@/components/PropertyCard'
import HakuClient from './HakuClient'
import { LISTINGS } from '@/lib/data'
import '../clav.css'

export const metadata: Metadata = {
  title: 'Asunnot ja kohteet Suomessa',
  description: 'Selaa tuhansia myynti- ja vuokrakohteita koko Suomessa.',
}

function XIcon() { return <svg style={{width:10,height:10}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> }
function ChevLeft() { return <svg style={{width:14,height:14}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg> }
function ChevRight() { return <svg style={{width:14,height:14}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg> }
function SearchIcon() { return <svg style={{width:15,height:15}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg> }

export default function HakuPage({ searchParams }: { searchParams: Record<string,string> }) {
  const q = searchParams?.q ?? ''
  return (
    <>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <SiteHeader currentPage="/osta" />

      <div className="search-strip" role="search" aria-label="Kohteen haku">
        <div className="container">
          <div className="search-strip-inner">
            <div className="strip-input-wrap">
              <span className="strip-input-icon"><SearchIcon /></span>
              <label htmlFor="strip-q" className="sr-only">Hae</label>
              <input id="strip-q" type="search" className="strip-input" defaultValue={q} placeholder="Kaupunki, kaupunginosa tai osoite"/>
            </div>
            <label htmlFor="s-type" className="sr-only">Tyyppi</label>
            <select id="s-type" className="strip-select" defaultValue="">
              <option value="">Kaikki tyypit</option>
              <option>Kerrostalo</option><option>Omakotitalo</option><option>Rivitalo</option><option>Paritalo</option>
            </select>
            <label htmlFor="s-hinta" className="sr-only">Hinta</label>
            <select id="s-hinta" className="strip-select" defaultValue="">
              <option value="">Kaikki hinnat</option>
              <option value="250000">Alle 250 000 €</option><option value="500000">Alle 500 000 €</option><option value="1000000">Alle 1 M€</option>
            </select>
            <HakuClient />
          </div>
        </div>
      </div>

      <main id="main-content" className="results-layout" role="main">
        <aside className="filters-sidebar" aria-label="Suodattimet">
          <div className="filter-group">
            <p className="filter-group-label">Kohdetyyppi</p>
            <div className="filter-chips" role="group">
              {['Kerrostalo','Omakotitalo','Rivitalo','Paritalo','Tontti'].map(t=>(
                <span key={t} className="filter-chip" role="checkbox" aria-checked="false" tabIndex={0}>{t}</span>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <p className="filter-group-label">Hinta</p>
            <div className="range-row">
              <input type="text" className="range-input" placeholder="Min €" aria-label="Min €"/>
              <input type="text" className="range-input" placeholder="Max €" aria-label="Max €"/>
            </div>
            <input type="range" className="range-slider" min="0" max="1000000" defaultValue="500000" aria-label="Hinta"/>
          </div>
          <div className="filter-group">
            <p className="filter-group-label">Pinta-ala</p>
            <div className="range-row">
              <input type="text" className="range-input" placeholder="Min m²" aria-label="Min m²"/>
              <input type="text" className="range-input" placeholder="Max m²" aria-label="Max m²"/>
            </div>
          </div>
          <div className="filter-group">
            <p className="filter-group-label">Huoneluku</p>
            <div className="filter-chips" role="group">
              {['1h','2h','3h','4h','5h+'].map(r=>(
                <span key={r} className="filter-chip" role="checkbox" aria-checked="false" tabIndex={0}>{r}</span>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <p className="filter-group-label">Lisäsuodattimet</p>
            {['Hissi','Parveke','Sauna','Uusrakentaminen'].map(f=>(
              <label key={f} className="filter-checkbox-row">
                <input type="checkbox" aria-label={f}/><span>{f}</span>
              </label>
            ))}
          </div>
          <button className="filter-apply-btn">Näytä kohteet</button>
          <button className="filter-reset">Tyhjennä</button>
        </aside>

        <section className="results-col" aria-labelledby="results-heading">
          <h1 id="results-heading" className="sr-only">Hakutulokset – 12 400 kohdetta</h1>
          <div className="active-filters">
            {['Helsinki','Kerrostalo','Alle 500 000 €'].map(tag=>(
              <div key={tag} className="active-filter-tag">{tag}<button aria-label={`Poista: ${tag}`}><XIcon /></button></div>
            ))}
          </div>
          <div className="results-header">
            <p className="results-count"><strong>12 400</strong> kohdetta löytyi</p>
            <label htmlFor="sort" className="sr-only">Järjestä</label>
            <select id="sort" className="sort-select">
              <option>Uusin ensin</option><option>Halvin ensin</option><option>Kallein ensin</option><option>Isoin ensin</option>
            </select>
          </div>
          <ul className="results-grid" role="list">
            {LISTINGS.map(l=>(
              <li key={l.id} role="listitem"><PropertyCard listing={l}/></li>
            ))}
          </ul>
          <nav className="pagination" aria-label="Sivutus">
            <button className="page-btn disabled" aria-disabled="true"><ChevLeft /></button>
            {[1,2,3,4,5].map(n=>(
              <button key={n} className={`page-btn${n===1?' active':''}`} aria-current={n===1?'page':undefined}>{n}</button>
            ))}
            <span className="page-ellipsis">…</span>
            <button className="page-btn">24</button>
            <button className="page-btn"><ChevRight /></button>
          </nav>
        </section>
      </main>

      <SiteFooter />
      <ScrollTopButton />
      <Script id="haku-ui" strategy="afterInteractive">{`
        const h=document.querySelector('.site-header');
        window.addEventListener('scroll',()=>h?.classList.toggle('scrolled',window.scrollY>20),{passive:true});
        document.querySelectorAll('.filter-chip').forEach(c=>{
          c.addEventListener('click',function(){this.classList.toggle('selected');this.setAttribute('aria-checked',this.classList.contains('selected').toString());});
          c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();c.click();}});
        });
      `}</Script>
    </>
  )
}