// app/lib/data.ts
// Fake data for all clav.fi pages — replace with DB/API calls

export const LISTINGS = [
  { id:1,  title:'Moderni 3h+k Kalliossa',           address:'Fleminginkatu 14, Helsinki',    price:'389 000 €', priceNum:389000, rooms:'3h+k',  area:'72 m²',  floor:'4/5',         type:'Kerrostalo',  badge:'new',      badgeText:'Uusi',   slug:'moderni-3hk-kalliossa',  year:1965 },
  { id:2,  title:'Tilava omakotitalo puutarhoineen',  address:'Koivukuja 7, Espoo',            price:'695 000 €', priceNum:695000, rooms:'5h+k+s', area:'165 m²', floor:'2 krs',       type:'Omakotitalo', badge:null,       badgeText:null,     slug:'omakotitalo-espoo',      year:2004 },
  { id:3,  title:'Viihtyisä 2h rivitalo',             address:'Rantatie 22, Tampere',          price:'225 000 €', priceNum:225000, rooms:'2h+k',  area:'58 m²',  floor:'Pohjakerros', type:'Rivitalo',    badge:'reserved', badgeText:'Varattu',slug:'rivitalo-tampere',       year:1992 },
  { id:4,  title:'Luksushuoneisto meren rannalla',    address:'Merikatu 5, Turku',             price:'520 000 €', priceNum:520000, rooms:'4h+k+s', area:'112 m²', floor:'6/6',         type:'Kerrostalo',  badge:'new',      badgeText:'Uusi',   slug:'luksus-turku',           year:2019 },
  { id:5,  title:'Toimiva 1h+kk opiskelija-asunto',   address:'Yliopistokatu 3, Oulu',         price:'89 000 €',  priceNum:89000,  rooms:'1h+kk', area:'31 m²',  floor:'2/4',         type:'Kerrostalo',  badge:null,       badgeText:null,     slug:'1h-oulu',                year:1978 },
  { id:6,  title:'Uusi paritalo Jyväskylässä',        address:'Harjukatu 11, Jyväskylä',      price:'345 000 €', priceNum:345000, rooms:'4h+k',  area:'98 m²',  floor:'2 krs',       type:'Paritalo',    badge:'new',      badgeText:'Uusi',   slug:'paritalo-jyvaskyla',     year:2023 },
  { id:7,  title:'Rauhallinen 3h Lahdessa',           address:'Puistokatu 8, Lahti',           price:'185 000 €', priceNum:185000, rooms:'3h+k',  area:'68 m²',  floor:'3/5',         type:'Kerrostalo',  badge:null,       badgeText:null,     slug:'3h-lahti',               year:1988 },
  { id:8,  title:'Valoisa 2h Töölössä',               address:'Topeliuksenkatu 20, Helsinki',  price:'435 000 €', priceNum:435000, rooms:'2h+k',  area:'62 m²',  floor:'5/6',         type:'Kerrostalo',  badge:null,       badgeText:null,     slug:'2h-toolo',               year:1952 },
  { id:9,  title:'Sijoitusasunto hyvällä tuotolla',   address:'Hämeenpuisto 4, Tampere',       price:'142 000 €', priceNum:142000, rooms:'2h+kk', area:'44 m²',  floor:'1/4',         type:'Kerrostalo',  badge:null,       badgeText:null,     slug:'sijoitusasunto-tampere', year:1975 },
  { id:10, title:'Ylellinen huvila järven rannalla',  address:'Järvitie 1, Savonlinna',        price:'890 000 €', priceNum:890000, rooms:'6h+k+s', area:'220 m²', floor:'2 krs',       type:'Omakotitalo', badge:'new',      badgeText:'Uusi',   slug:'huvila-savonlinna',      year:2015 },
  { id:11, title:'Kompakti studio Punavuoressa',      address:'Fredrikinkatu 38, Helsinki',    price:'275 000 €', priceNum:275000, rooms:'1h+k',  area:'28 m²',  floor:'3/7',         type:'Kerrostalo',  badge:null,       badgeText:null,     slug:'studio-punavuori',       year:2001 },
  { id:12, title:'Remontoitu rivitalo Kuopiossa',     address:'Männistönkatu 5, Kuopio',       price:'198 000 €', priceNum:198000, rooms:'3h+k',  area:'82 m²',  floor:'Pohjakerros', type:'Rivitalo',    badge:null,       badgeText:null,     slug:'rivitalo-kuopio',        year:1987 },
]

export const CITIES = [
  { name:'Helsinki',  count:'3 241', slug:'helsinki' },
  { name:'Espoo',     count:'1 820', slug:'espoo' },
  { name:'Tampere',   count:'1 654', slug:'tampere' },
  { name:'Turku',     count:'1 108', slug:'turku' },
  { name:'Oulu',      count:'897',   slug:'oulu' },
  { name:'Vantaa',    count:'742',   slug:'vantaa' },
  { name:'Jyväskylä', count:'631',   slug:'jyvaskyla' },
  { name:'Lahti',     count:'559',   slug:'lahti' },
]

export const TESTIMONIALS = [
  { id:1, quote:'Löysimme unelmiemme omakotitalon viikossa. Hakutoiminnot ovat ylivoimaisesti parhaat – hinta-aluehaku ja karttanäkymä tekivät etsimisestä helppoa.', name:'Marianne K.', location:'Espoo',    initials:'MK', stars:5 },
  { id:2, quote:'Myimme asuntomme nopeasti ja vaivattomasti. Ilmoituksen jättäminen oli yksinkertaista ja saimme heti paljon yhteydenottoja kiinnostuneilta ostajilta.', name:'Petri L.',    location:'Helsinki', initials:'PL', stars:5 },
  { id:3, quote:'Vuokra-asunnon löytäminen Tampereelta onnistui todella nopeasti. Hakuvahti lähetti ilmoituksen heti kun sopiva kohde tuli tarjolle.',   name:'Sofia M.',    location:'Tampere',  initials:'SM', stars:5 },
]

export const BLOG_POSTS = [
  { slug:'asunnon-ostajan-opas-2025',        title:'Asunnon ostajan täydellinen opas 2025',     tag:'Ostaminen',  excerpt:'Kaikki mitä sinun tulee tietää ennen ensimmäistä asuntokauppaa – rahoituksesta kauppakirjaan.', date:'12.3.2025', readTime:'8 min', author:'Sanna Virtanen' },
  { slug:'helsingin-hinnat-kevat-2025',       title:'Helsingin asuntomarkkinat keväällä 2025',   tag:'Markkinat',  excerpt:'Hinnat laskivat maltillisesti, mutta kysyntä pysyy vahvana suosituilla alueilla. Analyysi maaliskuun datasta.', date:'8.3.2025', readTime:'5 min', author:'Mikael Järvinen' },
  { slug:'kodin-myynti-nopeasti',             title:'Kuinka myydä asunto nopeasti parhaaseen hintaan', tag:'Myyminen', excerpt:'Viisi askelta, jotka voivat lyhentää myyntiaikasi puoleen ja nostaa myyntihintaa.', date:'3.3.2025', readTime:'6 min', author:'Sanna Virtanen' },
  { slug:'remonttivinkit-myynti',             title:'Mitkä remontit kannattaa tehdä ennen myyntiä?', tag:'Myyminen', excerpt:'Kaikki remontit eivät nosta hintaa yhtä paljon. Selvitimme mihin kannattaa investoida.', date:'25.2.2025', readTime:'7 min', author:'Lauri Korhonen' },
  { slug:'hakuvahti-kayttoopas',              title:'Hakuvahti – älä enää missaa yhtään kohdetta', tag:'Vinkit',    excerpt:'Näin asetat hakuvahdin, joka lähettää ilmoituksen juuri sinulle sopivista kohteista ennen muita.', date:'18.2.2025', readTime:'3 min', author:'Mikael Järvinen' },
  { slug:'sijoitusasunto-suomi',              title:'Sijoitusasunto Suomessa – missä paras tuotto?', tag:'Sijoittaminen', excerpt:'Kaupunkikohtainen analyysi vuokratuotoista ja arvonnousupotentiaalista vuodelle 2025.', date:'10.2.2025', readTime:'9 min', author:'Lauri Korhonen' },
]

export type Listing = typeof LISTINGS[0]
export type BlogPost = typeof BLOG_POSTS[0]