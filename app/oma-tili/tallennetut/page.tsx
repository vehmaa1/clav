'use client'
// app/oma-tili/tallennetut/page.tsx
import Link from 'next/link'
import { useState } from 'react'
import { SiteHeader, SiteFooter } from '@/components/NavFooter'
import PropertyCard from '@/components/PropertyCard'
import { LISTINGS } from '@/lib/data'
import '../../clav.css'

export default function TallennetutPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <SiteHeader />
      <div style={{paddingTop:64,background:'var(--bg)',minHeight:'100svh'}} id="main-content">
        <div className="container" style={{padding:'2rem 1.5rem'}}>
          <div style={{marginBottom:'2rem'}}>
            <p style={{fontSize:'.8rem',color:'var(--text-4)',marginBottom:'.5rem'}}>
              <Link href="/oma-tili">Oma tili</Link> / Tallennetut
            </p>
            <h1 style={{fontFamily:'var(--font-display)',fontSize:'1.6rem',fontWeight:400,fontStyle:'italic',letterSpacing:'-.02em',color:'var(--text-1)'}}>
              Tallennetut kohteet
            </h1>
            <p style={{fontSize:'.875rem',color:'var(--text-4)',marginTop:'.25rem'}}>3 tallennettua kohdetta</p>
          </div>
          <div className="listings-grid" role="list">
            {LISTINGS.slice(0,3).map(l=>(
              <div key={l.id} role="listitem"><PropertyCard listing={l}/></div>
            ))}
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}