'use client'
// app/(auth)/kirjaudu/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import '../../clav.css'
import { GoogleIcon, EyeIcon, EyeOffIcon } from '@/lib/icons'

export default function KirjauduPage() {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  return (
    <div className="auth-page">
      <div className="auth-left" aria-hidden="true">
        <div className="auth-left-logo">
          <Image src="/icon_clav.png" alt="" width={24} height={24} style={{filter:'invert(1)',opacity:.85}}/>
          <span className="auth-left-logo-text">clav.fi</span>
        </div>
        <div className="auth-left-content">
          <h2 className="auth-left-title">Tervetuloa takaisin.<br/>Kotisi odottaa.</h2>
          <p className="auth-left-desc">Jatka siitä, mihin jäit. Tallennetut kohteet, hakuvahdit ja viestit odottavat sinua.</p>
        </div>
        <div className="auth-left-stats">
          {[['12 400+','Aktiivista kohdetta'],['98 000+','Rekisteröitynyttä']].map(([v,l])=>(
            <div key={l}><div className="auth-stat-value">{v}</div><div className="auth-stat-label">{l}</div></div>
          ))}
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-form-wrap">
          <Link href="/" className="nav-logo" style={{marginBottom:'2rem',display:'inline-flex',gap:'.5rem',alignItems:'center'}}>
            <Image src="/icon_clav.png" alt="Clav.fi" width={24} height={24}/>
            <span className="auth-left-logo-text" style={{color:'var(--text-1)'}}>clav.fi</span>
          </Link>
          <h1 className="auth-form-title">Kirjaudu sisään</h1>
          <p className="auth-form-sub">Ei tiliä? <Link href="/rekisteroidy">Rekisteröidy ilmaiseksi</Link></p>
          <form className="auth-form" onSubmit={e=>e.preventDefault()} noValidate>
            <button type="button" className="oauth-btn"><GoogleIcon />Jatka Googlella</button>
            <div className="auth-divider"><div className="auth-divider-line"/><span className="auth-divider-text">tai sähköpostilla</span><div className="auth-divider-line"/></div>
            <div className="field">
              <label className="field-label" htmlFor="l-email">Sähköposti</label>
              <input id="l-email" type="email" className="field-input" placeholder="sinä@esimerkki.fi" autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className="field">
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
                <label className="field-label" htmlFor="l-pass">Salasana</label>
                <Link href="/unohditko-salasanan" className="auth-forgot">Unohditko?</Link>
              </div>
              <div className="password-wrap">
                <input id="l-pass" type={show?'text':'password'} className="field-input" placeholder="••••••••" autoComplete="current-password" value={pass} onChange={e=>setPass(e.target.value)} style={{paddingRight:'2.5rem'}}/>
                <button type="button" className="password-toggle" onClick={()=>setShow(v=>!v)} aria-label={show?'Piilota':'Näytä'}>
                  {show ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>
            <button type="submit" className="submit-btn">Kirjaudu sisään</button>
          </form>
        </div>
      </div>
    </div>
  )
}