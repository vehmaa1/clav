'use client'
import { ArrowUpIcon } from '@/lib/icons'
// app/components/ScrollTopButton.tsx

import { useEffect, useState } from 'react'

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <button
      className={`scroll-top${visible ? ' visible' : ''}`}
      aria-label="Takaisin sivun alkuun"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUpIcon />
    </button>
  )
}