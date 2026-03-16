// app/kohde/[slug]/page.tsx — Property detail
import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SiteHeader, SiteFooter } from '@/components/NavFooter'
import ScrollTopButton from '@/components/ScrollTopButton'
import PropertyCard from '@/components/PropertyCard'
import KohdeClient from './KohdeClient'
import { LISTINGS } from '@/lib/data'
import '../../clav.css'

const DETAIL: Record<string, any> = {
  'moderni-3hk-kalliossa': {
    slug:'moderni-3hk-kalliossa', title:'Moderni 3h+k Kalliossa', address:'Fleminginkatu 14 B 12, 00500 Helsinki',
    price:'389 000 €', priceNum:389000, maintenance:'312 €/kk', rooms:'3h+k', area:'72 m²', floor:'4/5', type:'Kerrostalo', year:1965,
    photoCount:18,
    description:[
      'Tilava ja moderni kolmio Kallion sydämessä, aivan Hakaniemen torin tuntumassa. Asunto on remontoitu perusteellisesti vuonna 2021 — uusi keittiö, kylpyhuone ja lattiat.',
      'Olohuoneen suuret ikkunat avautuvat rauhalliseen pihakatua kohti. Keittiö on täysin varusteltu laadukkailla kodinkonevalmistajien laitteilla ja tarjoaa runsaasti säilytystilaa.',
      'Taloyhtiössä tehdyt putkiremontti 2018 ja julkisivuremontti 2020. Yhtiön talous on vakavarainen. Hissi. Asunnon hintaan sisältyy autopaikka pihakannen alta.',
    ],
    details:[
      ['Tyyppi','Kerrostaloasunto'],['Huoneistoseloste','3h+k'],['Pinta-ala','72 m²'],['Kerros','4/5'],
      ['Rakennusvuosi','1965'],['Remontoitu','2021'],['Energialuokka','D'],['Lämmitys','Kaukolämpö'],
      ['Vastike','312 €/kk'],['Vesimaksu','30 €/hlö/kk'],['Yhtiölaina','0 €'],['Hallintamuoto','Omistusasunto'],
      ['Tonttimuoto','Vuokramaapohja'],['Autopaikka','Kyllä (pihakansi)'],['Sauna','Taloyhtiön sauna'],['Parveke','Ranskalaiset parvekkeet'],
    ],
    agent:{ name:'Tero Leinonen', company:'Kiinteistömaailma Helsinki Kallio', phone:'+358 40 123 4567', email:'tero@km.fi', initials:'TL' },
    viewings:[
      { date:'La 22.3.', time:'11:00–12:00', spots:'4 paikkaa' },
      { date:'Su 23.3.', time:'13:00–14:00', spots:'6 paikkaa' },
      { date:'La 29.3.', time:'11:00–12:00', spots:'8 paikkaa' },
    ],
    priceHistory:[ {l:'Maa 2023',v:55},{l:'Huh 2023',v:58},{l:'Syy 2023',v:54},{l:'Jou 2023',v:57},{l:'Maa 2024',v:62},{l:'Syy 2024',v:68},{l:'Nyt',v:75,current:true} ],
  }
}

export async function generateMetadata({ params }: { params: { slug:string } }): Promise<Metadata> {
  const d = DETAIL[params.slug]
  if (!d) return { title:'Kohdetta ei löydy' }
  return {
    title:`${d.title} – ${d.price}`,
    description:`${d.rooms}, ${d.area}, ${d.type}. ${d.address}. ${d.description[0].slice(0,120)}…`,
    alternates:{ canonical:`https://clav.fi/kohde/${d.slug}` },
  }
}

export function generateStaticParams() {
  return Object.keys(DETAIL).map(slug=>({ slug }))
}

function CameraIcon() { return <svg style={{width:14,height:14}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg> }
function PinIcon()    { return <svg style={{width:13,height:13}} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg> }
function ShareIcon()  { return <svg style={{width:14,height:14}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> }
function PrintIcon()  { return <svg style={{width:14,height:14}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg> }
function PhoneIcon()  { return <svg style={{width:13,height:13}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> }
function HeartIcon()  { return <svg style={{width:14,height:14}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> }
function BedIcon()    { return <svg style={{width:12,height:12}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 10V4"/><line x1="2" y1="20" x2="22" y2="20"/></svg> }
function AreaIcon()   { return <svg style={{width:12,height:12}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg> }
function BuildIcon()  { return <svg style={{width:12,height:12}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/></svg> }

export default function KohdePage({ params }: { params: { slug:string } }) {
  const d = DETAIL[params.slug] ?? DETAIL['moderni-3hk-kalliossa']
  const maxV = Math.max(...d.priceHistory.map((p:any)=>p.v))
  const similar = LISTINGS.filter(l=>l.slug!==params.slug).slice(0,3)

  return (
    <>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <SiteHeader currentPage="/osta" />

      <div className="kohde-layout" id="main-content">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Sivupolku">
          <div className="container">
            <div className="breadcrumb-inner">
              <Link href="/" className="breadcrumb-link">Etusivu</Link>
              <span className="breadcrumb-sep">/</span>
              <Link href="/haku" className="breadcrumb-link">Kohteet</Link>
              <span className="breadcrumb-sep">/</span>
              <Link href="/haku?alue=helsinki" className="breadcrumb-link">Helsinki</Link>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current" aria-current="page">{d.title}</span>
            </div>
          </div>
        </nav>

        {/* Gallery */}
        <div className="photo-gallery" aria-label="Kohteen valokuvat">
          <div className="gallery-grid">
            <div className="gallery-main">
              <div className="gallery-placeholder main-ph" role="img" aria-label={`${d.title} – pääkuva`}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
              </div>
              <button className="gallery-count-btn"><CameraIcon />{d.photoCount} kuvaa</button>
            </div>
            <div className="gallery-thumb"><div className="gallery-placeholder thumb-ph" role="img" aria-label="Kuva 2"><svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg></div></div>
            <div className="gallery-thumb"><div className="gallery-placeholder thumb-ph" role="img" aria-label="Kuva 3"><svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg></div></div>
          </div>
        </div>

        {/* Content grid */}
        <div className="kohde-content" itemScope itemType="https://schema.org/RealEstateListing">
          <main className="kohde-main">
            <div className="kohde-title-row">
              <h1 className="kohde-title">{d.title}</h1>
              <div className="kohde-actions">
                <button className="action-btn"><HeartIcon /> Tallenna</button>
                <button className="action-btn"><ShareIcon /> Jaa</button>
                <button className="action-btn"><PrintIcon /></button>
              </div>
            </div>
            <address className="kohde-address"><PinIcon />{d.address}</address>

            <div className="kohde-stats">
              {[['Velaton hinta',d.price,'Sis. yhtiölainan'],['Huoneisto',d.rooms,d.area],['Kerros',d.floor,`${d.type}, ${d.year}`],['Vastike',d.maintenance,'Hoitovastike']].map(([label,val,sub])=>(
                <div key={label} className="kohde-stat">
                  <span className="stat-label">{label}</span>
                  <span className="stat-value">{val}</span>
                  <span className="stat-sub">{sub}</span>
                </div>
              ))}
            </div>

            <section className="kohde-section" aria-labelledby="desc-h">
              <h2 className="kohde-section-title" id="desc-h">Esittely</h2>
              <div className="kohde-description">{d.description.map((p:string,i:number)=><p key={i}>{p}</p>)}</div>
            </section>

            <section className="kohde-section" aria-labelledby="details-h">
              <h2 className="kohde-section-title" id="details-h">Perustiedot</h2>
              <dl className="details-grid">
                {d.details.map(([k,v]:string[])=>(
                  <div key={k} className="detail-row">
                    <dt className="detail-key">{k}</dt>
                    <dd className="detail-val">{v}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="kohde-section" aria-labelledby="price-h">
              <h2 className="kohde-section-title" id="price-h">Hintakehitys alueella</h2>
              <div className="price-history-placeholder">
                <div className="price-chart-bars" aria-label="Hintatrendi" aria-hidden="true">
                  {d.priceHistory.map((bar:any)=>(
                    <div key={bar.l} className="price-bar-wrap">
                      <div className={`price-bar${bar.current?' current':''}`} style={{height:`${(bar.v/maxV)*100}%`}}/>
                      <span className="price-bar-label">{bar.l}</span>
                    </div>
                  ))}
                </div>
                <div className="price-chart-legend" aria-hidden="true">
                  <span className="legend-item"><span className="legend-dot" style={{background:'var(--dark)'}}/>Tämä kohde</span>
                  <span className="legend-item"><span className="legend-dot" style={{background:'var(--bg-deep)'}}/>Alueen ka €/m²</span>
                </div>
              </div>
            </section>

            <section className="kohde-section" aria-labelledby="map-h">
              <h2 className="kohde-section-title" id="map-h">Sijainti</h2>
              <div className="kohde-map" role="img" aria-label={`Kartta: ${d.address}`}>
                <div style={{width:'100%',height:'100%',background:'linear-gradient(150deg,var(--bg-alt) 0%,var(--bg-deep) 100%)',position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(26,26,26,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(26,26,26,.04) 1px,transparent 1px)',backgroundSize:'36px 36px'}}/>
                  <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--r)',padding:'.5rem 1rem',fontSize:'.8rem',fontWeight:700,color:'var(--text-1)',boxShadow:'var(--shadow-sm)',zIndex:1,position:'relative'}}>{d.address}</div>
                </div>
              </div>
            </section>

            <section aria-labelledby="similar-h">
              <h2 className="kohde-section-title" id="similar-h" style={{marginBottom:'1rem'}}>Samankaltaisia kohteita</h2>
              <ul className="similar-grid" role="list">
                {similar.map(s=><li key={s.id}><PropertyCard listing={s}/></li>)}
              </ul>
            </section>
          </main>

          {/* Sidebar contact card */}
          <aside className="kohde-sidebar" aria-label="Yhteydenotto">
            <div className="contact-card">
              <div className="contact-card-header">
                <p className="contact-price">{d.price}</p>
                <p className="contact-price-note">Velaton hinta · {d.maintenance} vastike</p>
              </div>
              <div className="contact-card-body">
                <div className="agent-row">
                  <div className="agent-avatar">{d.agent.initials}</div>
                  <div>
                    <p className="agent-name">{d.agent.name}</p>
                    <p className="agent-company">{d.agent.company}</p>
                  </div>
                  <span className="agent-badge">LKV</span>
                </div>
                <p className="viewing-title">Näyttöajat</p>
                <div className="viewing-slots" role="list">
                  {d.viewings.map((v:any,i:number)=>(
                    <div key={i} className="viewing-slot" role="listitem" tabIndex={0}>
                      <div>
                        <span className="slot-date">{v.date}</span>
                        <span style={{color:'var(--text-4)',fontSize:'.78rem',marginLeft:'.4rem'}}>{v.time}</span>
                      </div>
                      <span className="slot-spots">{v.spots}</span>
                    </div>
                  ))}
                </div>
                <KohdeClient agentName={d.agent.name} listingTitle={d.title} />
              </div>
              <div className="contact-card-footer">
                <button className="footer-action"><ShareIcon /> Jaa</button>
                <button className="footer-action"><PrintIcon /> Tulosta</button>
                <a href={`tel:${d.agent.phone}`} className="footer-action"><PhoneIcon /> Soita</a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <SiteFooter />
      <ScrollTopButton />
      <Script id="kohde-ui" strategy="afterInteractive">{`
        const h=document.querySelector('.site-header');
        window.addEventListener('scroll',()=>h?.classList.toggle('scrolled',window.scrollY>20),{passive:true});
        document.querySelectorAll('.viewing-slot').forEach(s=>{
          s.addEventListener('click',function(){document.querySelectorAll('.viewing-slot').forEach(x=>x.classList.remove('selected'));this.classList.add('selected');});
          s.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();s.click();}});
        });
      `}</Script>
    </>
  )
}