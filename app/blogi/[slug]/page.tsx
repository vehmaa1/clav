// app/blogi/[slug]/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader, SiteFooter } from '@/components/NavFooter'
import ScrollTopButton from '@/components/ScrollTopButton'
import { BLOG_POSTS } from '@/lib/data'
import '../../clav.css'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = BLOG_POSTS.find(p => p.slug === params.slug)
  if (!post) return { title: 'Artikkelia ei löydy' }
  return { title: post.title, description: post.excerpt, alternates: { canonical: `https://clav.fi/blogi/${post.slug}` } }
}

export function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }))
}

// Fake article content — replace with CMS/MDX
const CONTENT = `
  Asunnon osto on monelle suomalaiselle elämänsä suurin taloudellinen päätös. Tässä oppaassa käymme läpi kaikki tärkeimmät askeleet prosessin alusta loppuun.

  Aloita selvittämällä oma taloudellinen tilanteesi. Laske kuinka paljon sinulla on säästöjä ja kuinka suuren asuntolainan voit saada. Suomalainen pankki myöntää yleensä lainaa 3–5 kertaa vuosibruttotulojesi verran.

  Kun budjetti on selvillä, voit aloittaa aktiivisen kohdehaun. Aseta hakuvahti haluamillesi alueille ja kiinteistötyypeille – saat välittömästi ilmoituksen kun sopiva kohde ilmestyy markkinoille.

  Kun löydät sopivan kohteen, varaa näyttöaika välittömästi. Suosituimmissa kohteissa näytöllä saattaa olla kymmeniä muita ostajaehdokkaita. Valmistele kysymykset etukäteen: putkiremontin ajoitus, yhtiölaina, vastike.

  Tarjouksen tekeminen on jännittävin vaihe. Pohja tarjouksellesi alueen toteutuneista kauppahinnoista – Clav.fi näyttää sinulle viimeisimmät kaupat alueelta. Älä ylihinnoittele, mutta älä myöskään alihinnoittele jos kohde on juuri oikea.

  Kaupanteko tapahtuu notaarilla tai sähköisesti. Muista tilata kuntotarkastus ennen kaupantekoa, ellet osta uudisrakennusta.
`

export default function BlogiArticlePage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug) ?? BLOG_POSTS[0]
  const related = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <SiteHeader />
      <main id="main-content">
        {/* Article header */}
        <div style={{background:'var(--surface)',borderBottom:'1px solid var(--border)',paddingTop:64}}>
          <div style={{maxWidth:760,margin:'0 auto',padding:'3rem 1.5rem 2.5rem'}}>
            <nav style={{marginBottom:'1.5rem'}}>
              <Link href="/blogi" style={{fontSize:'.8rem',color:'var(--text-4)'}}>Blogi</Link>
              <span style={{fontSize:'.75rem',color:'var(--text-5)',margin:'0 .4rem'}}>/</span>
              <span style={{fontSize:'.8rem',color:'var(--text-2)'}}>{post.tag}</span>
            </nav>
            <div style={{display:'inline-block',background:'var(--bg-alt)',border:'1px solid var(--border)',borderRadius:'100px',fontSize:'.68rem',fontWeight:700,letterSpacing:'.07em',textTransform:'uppercase',color:'var(--text-3)',padding:'.2rem .7rem',marginBottom:'1rem'}}>
              {post.tag}
            </div>
            <h1 style={{fontFamily:'var(--font-display)',fontSize:'clamp(1.7rem,4vw,2.8rem)',fontWeight:400,fontStyle:'italic',letterSpacing:'-.025em',color:'var(--text-1)',lineHeight:1.1,marginBottom:'1rem'}}>
              {post.title}
            </h1>
            <div style={{display:'flex',alignItems:'center',gap:'.75rem',fontSize:'.815rem',color:'var(--text-4)'}}>
              <div style={{width:32,height:32,borderRadius:'50%',background:'var(--bg-alt)',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.72rem',fontWeight:700,color:'var(--text-3)',flexShrink:0}}>
                {post.author.split(' ').map(n=>n[0]).join('')}
              </div>
              <span>{post.author}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Article image placeholder */}
        <div style={{background:'linear-gradient(135deg,var(--bg-alt),var(--bg-deep))',aspectRatio:'21/7',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--border-strong)',borderBottom:'1px solid var(--border)'}}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
        </div>

        {/* Article body */}
        <div style={{maxWidth:760,margin:'0 auto',padding:'3rem 1.5rem'}}>
          <div className="prose">
            {CONTENT.trim().split('\n\n').map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}
          </div>

          {/* Author */}
          <div style={{marginTop:'3rem',paddingTop:'2rem',borderTop:'1px solid var(--border)',display:'flex',alignItems:'center',gap:'1rem'}}>
            <div style={{width:48,height:48,borderRadius:'50%',background:'var(--bg-alt)',border:'1px solid var(--border-mid)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontSize:'1rem',fontStyle:'italic',color:'var(--text-2)',flexShrink:0}}>
              {post.author.split(' ').map(n=>n[0]).join('')}
            </div>
            <div>
              <p style={{fontWeight:700,fontSize:'.875rem',color:'var(--text-1)'}}>{post.author}</p>
              <p style={{fontSize:'.8rem',color:'var(--text-4)'}}>Sisällöntuottaja, Clav.fi</p>
            </div>
          </div>
        </div>

        {/* Related posts */}
        <section style={{background:'var(--bg)',borderTop:'1px solid var(--border)',padding:'3rem 0'}}>
          <div className="container">
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.3rem',fontWeight:400,fontStyle:'italic',color:'var(--text-1)',letterSpacing:'-.02em',marginBottom:'1.5rem'}}>Lisää luettavaa</h2>
            <ul className="blog-grid" role="list">
              {related.map(p=>(
                <li key={p.slug}>
                  <Link href={`/blogi/${p.slug}`} className="blog-card" style={{textDecoration:'none',display:'block'}}>
                    <div className="blog-card-img"><svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg></div>
                    <div className="blog-card-body">
                      <p className="blog-card-tag">{p.tag}</p>
                      <h3 className="blog-card-title">{p.title}</h3>
                      <div className="blog-card-meta"><span>{p.date}</span><span>·</span><span>{p.readTime}</span></div>
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