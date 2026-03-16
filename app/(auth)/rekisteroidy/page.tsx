'use client'
// app/(auth)/rekisteroidy/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import '../../clav.css'
import { GoogleIcon, EyeIcon, EyeOffIcon, UserIcon, BriefcaseIcon } from '@/lib/icons'

export default function RekisteroidyPage() {
  const [role, setRole] = useState<'buyer' | 'agent'>('buyer')
  const [show, setShow] = useState(false)

  return (
    <div className="auth-page">
      <div className="auth-left" aria-hidden="true">
        <div className="auth-left-logo">
          <Image src="/icon_clav.png" alt="" width={24} height={24} style={{ filter: 'invert(1)', opacity: 0.85 }} />
          <span className="auth-left-logo-text">clav.fi</span>
        </div>
        <div className="auth-left-content">
          <h2 className="auth-left-title">Aloita etsiminen<br />ilmaiseksi.</h2>
          <p className="auth-left-desc">Rekisteröityminen on ilmaista. Tallenna hakuja, saa ilmoituksia uusista kohteista ja ota yhteyttä välittäjiin suoraan.</p>
        </div>
        <div className="auth-left-stats">
          {[['12 400+', 'Kohdetta'], ['850+', 'Välittäjää']].map(([v, l]) => (
            <div key={l}><div className="auth-stat-value">{v}</div><div className="auth-stat-label">{l}</div></div>
          ))}
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-wrap">
          <Link href="/" style={{ marginBottom: '2rem', display: 'inline-flex', gap: '.5rem', alignItems: 'center' }}>
            <Image src="/icon_clav.png" alt="Clav.fi" width={24} height={24} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-1)' }}>clav.fi</span>
          </Link>
          <h1 className="auth-form-title">Luo tili</h1>
          <p className="auth-form-sub">Onko sinulla jo tili? <Link href="/kirjaudu">Kirjaudu</Link></p>

          <form className="auth-form" onSubmit={e => e.preventDefault()} noValidate>
            <div className="role-toggle" role="group" aria-label="Tilin tyyppi">
              <button type="button" className={`role-btn${role === 'buyer' ? ' active' : ''}`} onClick={() => setRole('buyer')} aria-pressed={role === 'buyer'}>
                <UserIcon />Ostaja / Vuokraaja
              </button>
              <button type="button" className={`role-btn${role === 'agent' ? ' active' : ''}`} onClick={() => setRole('agent')} aria-pressed={role === 'agent'}>
                <BriefcaseIcon />Välittäjä
              </button>
            </div>

            <button type="button" className="oauth-btn"><GoogleIcon />Jatka Googlella</button>

            <div className="auth-divider">
              <div className="auth-divider-line" /><span className="auth-divider-text">tai sähköpostilla</span><div className="auth-divider-line" />
            </div>

            <div className="field">
              <label className="field-label" htmlFor="r-name">Nimi</label>
              <input id="r-name" type="text" className="field-input" placeholder="Matti Virtanen" autoComplete="name" />
            </div>

            {role === 'agent' && (
              <div className="field">
                <label className="field-label" htmlFor="r-company">Välitystoimisto</label>
                <input id="r-company" type="text" className="field-input" placeholder="Kiinteistömaailma Oy" />
              </div>
            )}

            <div className="field">
              <label className="field-label" htmlFor="r-email">Sähköposti</label>
              <input id="r-email" type="email" className="field-input" placeholder="sinä@esimerkki.fi" autoComplete="email" />
            </div>

            <div className="field">
              <label className="field-label" htmlFor="r-pass">Salasana</label>
              <div className="password-wrap">
                <input id="r-pass" type={show ? 'text' : 'password'} className="field-input" placeholder="Vähintään 8 merkkiä" autoComplete="new-password" style={{ paddingRight: '2.5rem' }} />
                <button type="button" className="password-toggle" onClick={() => setShow(v => !v)} aria-label={show ? 'Piilota' : 'Näytä'}>
                  {show ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
              <span className="field-hint">Vähintään 8 merkkiä, 1 numero ja 1 erikoismerkki</span>
            </div>

            <button type="submit" className="submit-btn">
              {role === 'agent' ? 'Luo välittäjätili' : 'Luo tili ilmaiseksi'}
            </button>

            <p className="auth-terms">
              Rekisteröitymällä hyväksyt <Link href="/kayttoehdot">käyttöehdot</Link> ja <Link href="/tietosuoja">tietosuojakäytännön</Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}