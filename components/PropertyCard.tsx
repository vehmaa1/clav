'use client'
// app/components/PropertyCard.tsx

import Link from 'next/link'
import { useState } from 'react'
import { HeartIcon, MapPinIcon, BedIcon, AreaIcon, BuildingIcon } from '@/lib/icons'

export type ListingCardData = {
  id: number
  title: string
  address: string
  price: string
  rooms: string
  area: string
  type: string
  badge: string | null
  badgeText: string | null
  slug: string
}

export default function PropertyCard({ listing }: { listing: ListingCardData }) {
  const [saved, setSaved] = useState(false)
  return (
    <article
      className="property-card"
      aria-label={`${listing.title}, ${listing.address}, ${listing.price}`}
      itemScope itemType="https://schema.org/RealEstateListing"
    >
      <Link href={`/kohde/${listing.slug}`}>
        <div className="card-image-wrap">
          <div className="card-placeholder" role="img" aria-label={`${listing.title} – kuva`}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </div>
          {listing.badge && <span className={`card-badge ${listing.badge}`}>{listing.badgeText}</span>}
          <button
            className={`card-save${saved ? ' saved' : ''}`}
            aria-label={saved ? `Poistettu: ${listing.title}` : `Tallenna: ${listing.title}`}
            aria-pressed={saved}
            onClick={e => { e.preventDefault(); e.stopPropagation(); setSaved(v => !v) }}
          >
            <HeartIcon filled={saved} />
          </button>
        </div>
        <div className="card-body">
          <p className="card-price" itemProp="price">{listing.price}</p>
          <h3 className="card-title" itemProp="name">{listing.title}</h3>
          <address className="card-address" itemProp="address">
            <MapPinIcon /><span>{listing.address}</span>
          </address>
          <div className="card-divider" aria-hidden="true"/>
          <dl className="card-meta">
            <div className="card-meta-item"><dt className="sr-only">Huoneluku</dt><BedIcon /><dd className="card-meta-value">{listing.rooms}</dd></div>
            <div className="card-meta-item"><dt className="sr-only">Pinta-ala</dt><AreaIcon /><dd className="card-meta-value">{listing.area}</dd></div>
            <div className="card-meta-item"><dt className="sr-only">Tyyppi</dt><BuildingIcon /><dd className="card-meta-value">{listing.type}</dd></div>
          </dl>
        </div>
      </Link>
    </article>
  )
}