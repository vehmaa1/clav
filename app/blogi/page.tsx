// app/blogi/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader, SiteFooter } from '@/components/NavFooter'
import ScrollTopButton from '@/components/ScrollTopButton'
import { BLOG_POSTS } from '@/lib/data'
import '../clav.css'

export const metadata: Metadata = {
  title: 'Blogi – Asuntomarkkinat & Vinkit | Clav.fi',
  description: 'Asiantuntija-artikkelit asuntokaupasta, markkinatrendeistä ja käytännön vinkeistä.',
}

export default function BlogiPage() {
  const tags = ['Kaikki', 'Ostaminen', 'Myyminen', 'Markkinat', 'Vinkit', 'Sijoittaminen']
  return (
    <>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <SiteHeader />
      <main id="main-content">
        <div className="blog-hero" style={{paddingBottom:'3rem'}}>
          <div className="container">
            <p className="static-hero-eyebrow">Blogi</p>
            <h1 className="static-hero-title">Asuntomarkkinat & vinkit</h1>
            <p className="static-hero-desc">Asiantuntija-artikkelit asuntokaupasta, hintatrendeistä ja käytännön vinkeistä.</p>
            <div style={{display:'flex',gap:'.5rem',marginTop:'1.5rem',flexWrap:'wrap'}}>
              {tags.map((t,i)=>(
                <button key={t} className={`filter-chip${i===0?' selected':''}`} style={{borderRadius:'100px'}}>{t}</button>
              ))}
            </div>
          </div>
        </div>

        <section style={{background:'var(--bg)',padding:'3rem 0'}}>
          <div className="container">
            <ul className="blog-grid" role="list">
              {BLOG_POSTS.map(post=>(
                <li key={post.slug}>
                  <Link href={`/blogi/${post.slug}`} className="blog-card" style={{textDecoration:'none',display:'block'}}>
                    <div className="blog-card-img">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                    </div>
                    <div className="blog-card-body">
                      <p className="blog-card-tag">{post.tag}</p>
                      <h2 className="blog-card-title">{post.title}</h2>
                      <p className="blog-card-excerpt">{post.excerpt}</p>
                      <div className="blog-card-meta">
                        <span>{post.author}</span>
                        <span>·</span>
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
      <ScrollTopButton />
    </>
  )
}