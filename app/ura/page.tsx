// app/ura/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader, SiteFooter } from '@/components/NavFooter'
import '../clav.css'
export const metadata: Metadata = { title: 'Avoimet tehtävät – Clav.fi', description: 'Tule rakentamaan Suomen parasta kiinteistöportaalia.' }
const JOBS = [
  { title:'Senior Full-Stack Developer', team:'Tuotekehitys', type:'Kokoaikainen', location:'Helsinki / Remote' },
  { title:'Product Designer',            team:'Muotoilu',     type:'Kokoaikainen', location:'Helsinki' },
  { title:'Data Analyst',                team:'Analytiikka',  type:'Kokoaikainen', location:'Helsinki / Remote' },
  { title:'Customer Success Manager',    team:'Asiakkuudet',  type:'Kokoaikainen', location:'Helsinki' },
]
export default function UraPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <SiteHeader />
      <main id="main-content">
        <div className="static-hero">
          <div className="container" style={{maxWidth:760}}>
            <p className="static-hero-eyebrow">Ura</p>
            <h1 className="static-hero-title">Tule mukaan rakentamaan</h1>
            <p className="static-hero-desc">Etsimme lahjakkaita ihmisiä, jotka haluavat uudistaa kiinteistöalaa. Tarjoamme merkityksellisen työn, kilpailukykyisen palkan ja joustavat työolosuhteet.</p>
          </div>
        </div>
        <div className="static-content">
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.4rem',fontWeight:400,fontStyle:'italic',color:'var(--text-1)',marginBottom:'1rem'}}>Avoimet tehtävät</h2>
          <div style={{display:'flex',flexDirection:'column',gap:'.75rem'}}>
            {JOBS.map(j=>(
              <div key={j.title} style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--r-lg)',padding:'1.25rem 1.5rem',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1rem',flexWrap:'wrap'}}>
                <div>
                  <p style={{fontWeight:700,color:'var(--text-1)',marginBottom:'.25rem'}}>{j.title}</p>
                  <p style={{fontSize:'.815rem',color:'var(--text-4)'}}>{j.team} · {j.type} · {j.location}</p>
                </div>
                <Link href="mailto:rekry@clav.fi" className="btn-dark" style={{textDecoration:'none',fontSize:'.85rem'}}>Hae tehtävää</Link>
              </div>
            ))}
          </div>
          <div className="prose" style={{marginTop:'2rem'}}>
            <h2>Miksi Clav.fi?</h2>
            <ul>
              <li>Kasvava startup-ympäristö, jossa päätöksillä on oikeaa vaikutusta</li>
              <li>Kilpailukykyinen palkka ja osakeohjelma</li>
              <li>Joustavat työajat ja etätyömahdollisuus</li>
              <li>Kattava työterveys ja hyvinvointietu</li>
            </ul>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}