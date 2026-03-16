'use client'
// app/kohde/[slug]/KohdeClient.tsx
import { useState } from 'react'
import Link from 'next/link'

export default function KohdeClient({ agentName, listingTitle }: { agentName: string; listingTitle: string }) {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [msg, setMsg] = useState(`Hei, olen kiinnostunut kohteesta "${listingTitle}". Voitteko ottaa minuun yhteyttä?`)

  if (sent) return (
    <div style={{background:'var(--bg)',border:'1px solid var(--border-mid)',borderRadius:'var(--r)',padding:'1.25rem',marginTop:'.75rem',textAlign:'center'}}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{margin:'0 auto .5rem'}}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <p style={{fontSize:'.875rem',fontWeight:700,color:'var(--text-1)',marginBottom:'.25rem'}}>Viesti lähetetty!</p>
      <p style={{fontSize:'.8rem',color:'var(--text-3)'}}>{agentName} ottaa sinuun yhteyttä pian.</p>
    </div>
  )

  return (
    <form className="contact-form" onSubmit={e=>{e.preventDefault();if(name&&phone)setSent(true)}} aria-label="Yhteydenottolomake" noValidate>
      <label htmlFor="c-name" className="sr-only">Nimi</label>
      <input id="c-name" type="text" className="contact-input" placeholder="Nimesi" value={name} onChange={e=>setName(e.target.value)} autoComplete="name"/>
      <label htmlFor="c-phone" className="sr-only">Puhelinnumero</label>
      <input id="c-phone" type="tel" className="contact-input" placeholder="Puhelinnumero" value={phone} onChange={e=>setPhone(e.target.value)} autoComplete="tel"/>
      <label htmlFor="c-msg" className="sr-only">Viesti</label>
      <textarea id="c-msg" className="contact-input contact-textarea" value={msg} onChange={e=>setMsg(e.target.value)} rows={3}/>
      <button type="submit" className="contact-submit">Ota yhteyttä välittäjään</button>
      <p className="contact-disclaimer">
        Hyväksyt <Link href="/tietosuoja" style={{color:'var(--text-1)',textDecoration:'underline',textUnderlineOffset:'3px'}}>tietosuojakäytäntömme</Link>.
      </p>
    </form>
  )
}