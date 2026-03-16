// app/page.tsx — clav.fi etusivu
import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import {
  SearchIcon, ArrowRightIcon, HomeIcon, BuildingIcon, RowsIcon,
  KeyIcon, TrendingUpIcon, TreeIcon, BellIcon, MapIcon, ShieldIcon,
  SmartphoneIcon, UsersIcon, CheckCircleIcon, StarIcon,
} from '@/lib/icons'
import './clav.css'
import { SiteFooter, SiteHeader } from '@/components/NavFooter'
import { CITIES, LISTINGS, TESTIMONIALS } from '@/lib/data'
import PropertyCard from '@/components/PropertyCard'
import ScrollTopButton from '@/components/ScrollTopButton'

export const metadata: Metadata = {
  title: { default: 'Clav.fi – Asunnot & Kiinteistöt Suomessa | Osta, Myy, Vuokraa', template: '%s | Clav.fi' },
  description: 'Clav.fi on Suomen johtava kiinteistöportaali. Selaa tuhansia asuntoja, omakotitaloja ja vuokra-asuntoja. Löydä unelmiesi koti – osta, myy tai vuokraa.',
  alternates: { canonical: 'https://clav.fi' },
  openGraph: { type:'website', locale:'fi_FI', url:'https://clav.fi', siteName:'Clav.fi', title:'Clav.fi – Suomen Kiinteistöportaali', description:'Löydä unelmiesi koti Suomen laajimmasta asuntokannasta.', images:[{ url:'https://clav.fi/og-image.jpg', width:1200, height:630, alt:'Clav.fi' }] },
  robots: { index:true, follow:true },
}

const websiteSchema = {
  '@context':'https://schema.org', '@type':'WebSite', name:'Clav.fi', url:'https://clav.fi',
  potentialAction: { '@type':'SearchAction', target:{ '@type':'EntryPoint', urlTemplate:'https://clav.fi/haku?q={search_term_string}' }, 'query-input':'required name=search_term_string' },
}

const SearchTabsClient = () => null // replaced by inline Script

export default function HomePage() {
  return (
    <>
      <Script id="schema-home" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} strategy="afterInteractive"/>
      <a href="#main-content" className="skip-link">Siirry pääsisältöön</a>
      <SiteHeader currentPage="/" />

      <main id="main-content">

        {/* ── HERO ── */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="container">
            <div className="hero-inner">
              <div>
                <div className="hero-overline"><span className="hero-overline-line"/>Suomen kiinteistöportaali</div>
                <h1 className="hero-title" id="hero-heading">Löydä kotisi<em>luottavaisin mielin.</em></h1>
                <p className="hero-subtitle">Clav.fi kokoaa kaikki asunnot, omakotitalot ja vuokra-asunnot yhteen paikkaan. Helppo hakea, helppo vertailla.</p>
                <div className="hero-search-card">
                  <div className="search-tabs" role="tablist">
                    <button className="search-tab active" role="tab" aria-selected="true" id="tab-osta">Osta</button>
                    <button className="search-tab" role="tab" aria-selected="false" id="tab-vuokraa">Vuokraa</button>
                    <button className="search-tab" role="tab" aria-selected="false" id="tab-myy">Myy</button>
                  </div>
                  <form className="search-form" action="/haku" method="GET" role="search">
                    <div className="search-input-wrap">
                      <span className="search-input-icon"><SearchIcon /></span>
                      <label htmlFor="hero-q" className="sr-only">Paikkakunta tai osoite</label>
                      <input id="hero-q" name="q" type="search" className="search-input" placeholder="Kaupunki, kaupunginosa tai osoite" autoComplete="off"/>
                    </div>
                    <div className="search-row">
                      <div>
                        <label htmlFor="hero-type" className="sr-only">Kohdetyyppi</label>
                        <select id="hero-type" name="tyyppi" className="search-select">
                          <option value="">Kaikki tyypit</option>
                          <option>Kerrostalo</option><option>Omakotitalo</option><option>Rivitalo</option><option>Paritalo</option><option>Tontti</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="hero-price" className="sr-only">Maksimihinta</label>
                        <select id="hero-price" name="hinta" className="search-select">
                          <option value="">Kaikki hinnat</option>
                          <option value="100000">Alle 100 000 €</option><option value="250000">Alle 250 000 €</option><option value="500000">Alle 500 000 €</option><option value="1000000">Alle 1 M€</option>
                        </select>
                      </div>
                    </div>
                    <button type="submit" className="search-btn"><SearchIcon />Hae kohteita</button>
                  </form>
                  <div className="hero-trust">
                    {[['12 400+','Aktiivista kohdetta'],['850+','Välittäjää'],['98 000+','Rekisteröitynyttä']].map(([v,l])=>(
                      <div className="hero-trust-item" key={l}><span className="hero-trust-value">{v}</span><span className="hero-trust-label">{l}</span></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hero-visual-col" aria-hidden="true">
                <div className="hero-map-card">
                  <div className="hero-map-placeholder">
                    <div className="map-pin p1"/><div className="map-pin p2"/><div className="map-pin p3"/><div className="map-pin p4"/><div className="map-pin p5"/>
                    <div className="map-pin-label">389 000 € · Kallio</div>
                  </div>
                  <div className="hero-map-footer">
                    <span className="hero-map-footer-text">12 400 kohdetta kartalla</span>
                    <Link href="/kartta" className="hero-map-footer-link">Avaa kartta <ArrowRightIcon /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CATEGORIES ── */}
        <nav className="categories-section" aria-label="Kohteiden kategoriat">
          <div className="container">
            <div className="categories-row">
              <span className="cat-label">Selaa:</span>
              {[
                { label:'Kerrostalo',href:'/haku?tyyppi=kerrostalo',I:BuildingIcon },
                { label:'Omakotitalo',href:'/haku?tyyppi=omakotitalo',I:HomeIcon },
                { label:'Rivitalo',href:'/haku?tyyppi=rivitalo',I:RowsIcon },
                { label:'Vuokraus',href:'/haku?vuokra=true',I:KeyIcon },
                { label:'Uudet kohteet',href:'/haku?uudet=true',I:TrendingUpIcon },
                { label:'Tontit',href:'/haku?tyyppi=tontti',I:TreeIcon },
                { label:'Sijoitusasunto',href:'/haku?sijoitus=true',I:TrendingUpIcon },
              ].map(({label,href,I})=>(
                <Link key={label} href={href} className="cat-chip"><I />{label}</Link>
              ))}
            </div>
          </div>
        </nav>

        {/* ── LISTINGS ── */}
        <section className="listings-section" aria-labelledby="listings-heading" itemScope itemType="https://schema.org/ItemList">
          <div className="container">
            <div className="section-header">
              <div className="section-header-left">
                <p className="section-eyebrow">Uusimmat kohteet</p>
                <h2 className="section-title" id="listings-heading">Juuri lisätyt kohteet</h2>
                <p className="section-lead">Tuoreet kohteet suoraan markkinoilta — ennen muita.</p>
              </div>
              <Link href="/haku" className="section-link">Kaikki kohteet <ArrowRightIcon /></Link>
            </div>
            <div className="listings-grid" role="list">
              {LISTINGS.slice(0,6).map((l,i)=>(
                <div key={l.id} role="listitem" itemScope itemType="https://schema.org/ListItem">
                  <meta itemProp="position" content={String(i+1)}/>
                  <PropertyCard listing={l}/>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="how-section" aria-labelledby="how-heading">
          <div className="container">
            <div className="section-header">
              <div className="section-header-left">
                <p className="section-eyebrow">Näin se toimii</p>
                <h2 className="section-title" id="how-heading">Yksinkertaisesti parempi tapa löytää koti</h2>
              </div>
            </div>
            <ol className="steps-grid">
              {[
                { num:'01',I:SearchIcon,title:'Hae kohdetta',desc:'Tarkat suodattimet: sijainti, hinta, huoneluku, pinta-ala. Aseta hakuvahti ja saat ilmoituksen uusista kohteista.' },
                { num:'02',I:MapIcon,title:'Varaa näyttöaika',desc:'Ota yhteyttä välittäjään suoraan palvelun kautta. Nopea yhteydenotto yhdellä klikkauksella.' },
                { num:'03',I:TrendingUpIcon,title:'Vertaile ja päätä',desc:'Seuraa alueen hintatietoja ja tee tarjouksesi luottavaisesti tuoreimman markkinadatan tukemana.' },
                { num:'04',I:CheckCircleIcon,title:'Muuta sisään',desc:'Kauppakirjoista avainten luovutukseen — Clav.fi tukee sinua prosessin jokaisessa vaiheessa.' },
              ].map(s=>(
                <li key={s.num} className="step-item">
                  <div className="step-icon-wrap"><s.I /></div>
                  <span className="step-label">Vaihe {s.num}</span>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── CITIES ── */}
        <section className="cities-section" aria-labelledby="cities-heading">
          <div className="container">
            <div className="section-header">
              <div className="section-header-left">
                <p className="section-eyebrow">Hae sijainnin mukaan</p>
                <h2 className="section-title" id="cities-heading">Kohteet kaupungeittain</h2>
              </div>
              <Link href="/haku" className="section-link">Kaikki kunnat <ArrowRightIcon /></Link>
            </div>
            <ul className="cities-grid" role="list">
              {CITIES.map(c=>(
                <li key={c.slug}>
                  <Link href={`/haku?alue=${c.slug}`} className="city-card" aria-label={`${c.name}: ${c.count} kohdetta`}>
                    <div><p className="city-name">{c.name}</p><p className="city-count">{c.count} kohdetta</p></div>
                    <div className="city-arrow"><ArrowRightIcon /></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="features-section" aria-labelledby="features-heading">
          <div className="container">
            <div className="section-header">
              <div className="section-header-left">
                <p className="section-eyebrow">Miksi Clav.fi?</p>
                <h2 className="section-title" id="features-heading">Rakennettu luottamuksen varaan</h2>
              </div>
            </div>
            <ul className="features-grid" role="list">
              {[
                { I:BellIcon,      title:'Hakuvahti',            desc:'Aseta hakuvahti ja saat ilmoituksen heti, kun kriteereitäsi vastaava kohde ilmestyy palveluun.' },
                { I:TrendingUpIcon,title:'Hinta-analytiikka',    desc:'Näe alueen historiallinen hintatrendi, vertailukelpoiset kaupat ja arvio kohteen käyvästä hinnasta.' },
                { I:MapIcon,       title:'Karttahaku',           desc:'Etsi kohteita kartalla. Näe sijainti suhteessa kouluihin, kauppoihin ja julkiseen liikenteeseen.' },
                { I:UsersIcon,     title:'Luotettavat välittäjät',desc:'Kaikki palvelussa toimivat välittäjät ovat LKV-tutkinnon suorittaneita ja tarkistettuja ammattilaisia.' },
                { I:SmartphoneIcon,title:'Mobiilisovellus',      desc:'Selaa kohteita missä ja milloin vain. iOS- ja Android-sovellus saatavilla ilmaiseksi.' },
                { I:ShieldIcon,    title:'Turvallinen ostopolku',desc:'Sähköinen kauppakirja, vahva tunnistautuminen ja turvallinen maksaminen samassa palvelussa.' },
              ].map(({I,title,desc})=>(
                <li key={title} className="feature-item" role="listitem">
                  <div className="feature-icon"><I /></div>
                  <h3 className="feature-title">{title}</h3>
                  <p className="feature-desc">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── AGENTS CTA ── */}
        <section className="agents-section" aria-labelledby="agents-heading">
          <div className="container">
            <div className="agents-cta-card">
              <div>
                <p className="agents-label">Ammattilaisille</p>
                <h2 className="agents-title" id="agents-heading">Oletko kiinteistönvälittäjä tai kehittäjä?</h2>
                <p className="agents-desc">Liity tuhansien ammattilaisten joukkoon. Tehokkaat työkalut kohteiden hallintaan, asiakkuudenhallintaan ja markkinointiin.</p>
              </div>
              <div className="agents-actions">
                <Link href="/valittajille/rekisteroidy" className="btn-white">Luo välittäjätili</Link>
                <Link href="/valittajille" className="btn-outline-white">Lue lisää</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="testimonials-section" aria-labelledby="testimonials-heading">
          <div className="container">
            <div className="section-header">
              <div className="section-header-left">
                <p className="section-eyebrow">Asiakaskokemukset</p>
                <h2 className="section-title" id="testimonials-heading">Mitä käyttäjämme sanovat</h2>
              </div>
            </div>
            <ul className="testimonials-grid" role="list">
              {TESTIMONIALS.map(t=>(
                <li key={t.id} className="testimonial-card" itemScope itemType="https://schema.org/Review">
                  <div className="t-stars">{Array.from({length:t.stars}).map((_,i)=><StarIcon key={i} filled/>)}</div>
                  <blockquote className="t-quote" itemProp="reviewBody">&ldquo;{t.quote}&rdquo;</blockquote>
                  <div className="t-author" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <div className="t-avatar">{t.initials}</div>
                    <div><p className="t-name" itemProp="name">{t.name}</p><p className="t-location">{t.location}</p></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="faq-section" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <div className="section-header">
              <div className="section-header-left">
                <p className="section-eyebrow">Usein kysyttyä</p>
                <h2 className="section-title" id="faq-heading">UKK</h2>
              </div>
            </div>
            <dl className="faq-grid">
              {[
                { q:'Miten ilmoitan asunnon myyntiin Clav.fi:ssä?', a:'Rekisteröidy ilmaiseksi, valitse "Lisää kohde" ja täytä tiedot. Ilmoitus näkyy tuhansille asunnonetsijöille heti.' },
                { q:'Onko Clav.fi:n käyttö ilmaista?', a:'Kohteiden selaaminen on täysin ilmaista. Myynti-ilmoitus on maksuton yksityishenkilöille. Ammattilaisille on omat paketit.' },
                { q:'Kuinka monta kohdetta Clav.fi:ssä on?', a:'Yli 12 000 aktiivista kohdetta koko Suomessa, myynti- ja vuokrakohteet mukaan lukien.' },
                { q:'Toimiiko Clav.fi mobiilissa?', a:'Kyllä. Sovellus löytyy App Storesta ja Google Play -kaupasta.' },
              ].map(item=>(
                <div key={item.q} className="faq-item" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                  <dt className="faq-q" itemProp="name">{item.q}</dt>
                  <dd className="faq-a" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer"><span itemProp="text">{item.a}</span></dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── NEWSLETTER ── */}
        <section className="newsletter-section" aria-labelledby="newsletter-heading">
          <div className="container">
            <div className="newsletter-inner">
              <h2 className="newsletter-title" id="newsletter-heading">Pysy asuntomarkkinoiden hermoilla</h2>
              <p className="newsletter-sub">Viikoittain parhaat kohteet, hintatiedot ja asiantuntijaneuvot suoraan sähköpostiisi.</p>
              <form className="newsletter-form" action="/api/uutiskirje" method="POST">
                <label htmlFor="nl-email" className="sr-only">Sähköpostiosoite</label>
                <input id="nl-email" type="email" name="email" className="newsletter-input" placeholder="sähköpostisi@esimerkki.fi" required autoComplete="email"/>
                <button type="submit" className="newsletter-btn">Tilaa</button>
              </form>
              <p className="newsletter-note">Ei roskapostia. Peruutus milloin tahansa.</p>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
      <ScrollTopButton />

      <Script id="clav-home-ui" strategy="afterInteractive">{`
        const h = document.querySelector('.site-header');
        window.addEventListener('scroll', () => h?.classList.toggle('scrolled', window.scrollY > 20), { passive: true });
        document.querySelectorAll('.search-tab').forEach(tab => {
          tab.addEventListener('click', function() {
            document.querySelectorAll('.search-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
            this.classList.add('active'); this.setAttribute('aria-selected','true');
          });
        });
        document.querySelector('.nav-hamburger')?.addEventListener('click', function() {
          const open = this.getAttribute('aria-expanded') === 'true';
          this.setAttribute('aria-expanded', String(!open));
        });
      `}</Script>
    </>
  )
}