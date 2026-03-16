'use client'
// app/(auth)/unohditko-salasanan/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import '../../clav.css'

export default function UnohditkoPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  return (
    <div className="auth-page">
      <div className="auth-left" aria-hidden="true">
        <div className="auth-left-logo">
          <Image src="/icon_clav.png" alt="" width={24} height={24} style={{filter:'invert(1)',opacity:.85}}/>
          <span className="auth-left-logo-text">clav.fi</span>
        </div>
        <div className="auth-left-content">
          <h2 className="auth-left-title">Ei hätää.<br/>Autamme sinut takaisin.</h2>
          <p className="auth-left-desc">Lähetämme sinulle sähköpostin salasanan vaihtamiseksi.</p>
        </div>
        <div className="auth-left-stats">
          {[['2 min','Palautusaika'],['100%','Ilmainen']].map(([v,l])=>(
            <div key={l}><div className="auth-stat-value">{v}</div><div className="auth-stat-label">{l}</div></div>
          ))}
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-form-wrap">
          <Link href="/" style={{marginBottom:'2rem',display:'inline-flex',gap:'.5rem',alignItems:'center'}}>
            <Image src="/icon_clav.png" alt="Clav.fi" width={24} height={24}/>
            <span style={{fontFamily:'var(--font-display)',fontSize:'1.1rem',fontStyle:'italic',color:'var(--text-1)'}}>clav.fi</span>
          </Link>
          {sent ? (
            <div className="success-box">
              <svg className="success-box-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <p className="success-box-title">Sähköposti lähetetty!</p>
              <p className="success-box-desc">Jos osoite <strong>{email}</strong> on rekisteröity, sait ohjeet salasanan vaihtoon. Tarkista myös roskapostikansio.</p>
              <div style={{marginTop:'1rem'}}><Link href="/kirjaudu" style={{fontSize:'.875rem',fontWeight:700,color:'var(--text-1)',textDecoration:'underline',textUnderlineOffset:'3px'}}>Takaisin kirjautumiseen</Link></div>
            </div>
          ) : (
            <>
              <h1 className="auth-form-title">Unohditko salasanan?</h1>
              <p className="auth-form-sub">Syötä sähköpostiosoitteesi niin lähetämme palautusohjeet.</p>
              <form className="auth-form" onSubmit={e=>{e.preventDefault();if(email)setSent(true)}} noValidate>
                <div className="field">
                  <label className="field-label" htmlFor="reset-email">Sähköpostiosoite</label>
                  <input id="reset-email" type="email" className="field-input" placeholder="sinä@esimerkki.fi" autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
                </div>
                <button type="submit" className="submit-btn">Lähetä palautuslinkki</button>
                <div style={{textAlign:'center'}}><Link href="/kirjaudu" className="auth-forgot">Takaisin kirjautumiseen</Link></div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}