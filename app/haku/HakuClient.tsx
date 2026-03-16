'use client'
// app/haku/HakuClient.tsx
import { useState } from 'react'

function FilterIcon() { return <svg style={{width:14,height:14}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg> }
function GridIcon()   { return <svg style={{width:14,height:14}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg> }
function MapIcon()    { return <svg style={{width:14,height:14}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg> }

export default function HakuClient() {
  const [view, setView] = useState<'grid'|'map'>('grid')
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className={`strip-filter-btn${open?' active':''}`} aria-expanded={open} onClick={()=>setOpen(v=>!v)}>
        <FilterIcon />Suodattimet
      </button>
      <div className="strip-map-toggle" role="group" aria-label="Näkymä">
        <button className={`map-toggle-btn${view==='grid'?' active':''}`} aria-pressed={view==='grid'} onClick={()=>setView('grid')}><GridIcon />Lista</button>
        <button className={`map-toggle-btn${view==='map'?' active':''}`} aria-pressed={view==='map'} onClick={()=>setView('map')}><MapIcon />Kartta</button>
      </div>
    </>
  )
}