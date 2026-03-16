// app/yhteystiedot/page.tsx
import type { Metadata } from 'next'
import { SiteHeader, SiteFooter } from '@/components/NavFooter'
import '../clav.css'
export const metadata: Metadata = { title: 'Yhteystiedot – Clav.fi' }
export default function YhteystiedotPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <SiteHeader />
      <main id="main-content">
        <div className="static-hero">
          <div className="container" style={{maxWidth:760}}>
            <p className="static-hero-eyebrow">Ota yhteyttä</p>
            <h1 className="static-hero-title">Yhteystiedot</h1>
            <p className="static-hero-desc">Olemme täällä auttamassa. Ota yhteyttä asiakaspalveluumme tai löydä meidät toimistoltamme.</p>
          </div>
        </div>
        <div className="static-content">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2rem',marginBottom:'2rem'}}>
            {[
              { title:'Asiakaspalvelu', lines:['info@clav.fi','010 000 0000','Ma–Pe 8–20, La–Su 9–18'] },
              { title:'Toimisto', lines:['Esimerkkikatu 1','00100 Helsinki','Y-tunnus: 1234567-8'] },
              { title:'Lehdistö', lines:['press@clav.fi','Median kyselyihin vastaamme','arkisin 9–17'] },
              { title:'Välittäjät', lines:['partners@clav.fi','Yhteistyökyselyt','välittäjille'] },
            ].map(c=>(
              <div key={c.title} style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--r-lg)',padding:'1.5rem'}}>
                <h2 style={{fontSize:'.875rem',fontWeight:700,color:'var(--text-1)',marginBottom:'.75rem'}}>{c.title}</h2>
                {c.lines.map(l=><p key={l} style={{fontSize:'.875rem',color:'var(--text-3)',lineHeight:1.7}}>{l}</p>)}
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}