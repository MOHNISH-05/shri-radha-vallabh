# SRV Yaatra Phase 3 topical-authority audit

Audit date: 2026-09-16<br>
Production origin: `https://srvyaatra.com`<br>
Evidence base: application routes, SEO registry, generated-route script, redirects, route components, content data, navigation/footer links, automated tests, and representative current search results.

## 1. Executive summary

The current site has **36 canonical, indexable public URLs**, not approximately 35: 18 core routes and 18 attraction pages. It also has 9 server redirect rules plus client fallbacks for legacy aliases. The Phase 1 technical foundation is intact and Phase 2 added a correctly consolidated itinerary hub.

The architecture already covers the most important commercial and planning intents without needing more URLs. The strongest assets are the Jaisalmer destination portal, 18-place Explore cluster, itinerary hub, commercial packages, separate informational/commercial safari pages, taxi page, and original heritage/about material. The principal Phase 3 issues are narrower:

1. Homepage metadata targets tours and packages although `/packages` owns package intent and the homepage's documented primary role is the Jaisalmer travel-agency/entity entry point.
2. `/jaisalmer` can more clearly own the destination/travel-guide intent while still supporting custom tours. A new `/jaisalmer/tours` URL is not justified by the present content.
3. `/jaisalmer/safari-adventure` and `/safari` have genuinely distinct informational and commercial purposes, but reciprocal contextual links are incomplete. The information guide also uses `TouristDestination` for a non-place concept.
4. The Jaisalmer hub and itinerary hub repeat the same “how many days” FAQ. Duration intent should primarily belong to the itinerary hub.
5. `/stories` calls itself a Jaisalmer guides page in metadata, but the visible page is a multi-destination editorial/reflection collection.
6. Kuldhara is a meaningful destination gap seen in official tourism coverage and representative SERPs, but the repository has no approved Kuldhara photograph and not enough verified source material to publish a defensible new page now.

High-priority implementation should therefore improve existing pages and internal relationships. No new public route, URL rename, redirect, robots change, sitemap-architecture change, or design change is warranted.

## 2. Source-of-truth route inventory

### Canonical public routes

`PUBLIC_SEO_ROUTES` in `src/data/seo.ts` is the canonical inventory consumed by the build-time HTML and image-sitemap generator. It currently resolves to 36 URLs. Every entry receives a unique title, description, canonical, indexable robots directive, social metadata, breadcrumbs, primary image data, and route JSON-LD.

### Redirect-only routes

| Source | Destination | Assessment |
| --- | --- | --- |
| old Vercel hostname, any path | same path on `srvyaatra.com` | KEEP; canonical-host migration. |
| `/experience` | `/stories` | KEEP; old navigation alias. |
| `/jaisalmer-tours` | `/jaisalmer` | KEEP; avoids a duplicate tours page. |
| `/jaisalmer-tour-packages` | `/packages` | KEEP; package intent already has one owner. |
| `/jaisalmer-sightseeing` | `/jaisalmer/explore` | KEEP; sightseeing/places intent is consolidated. |
| `/desert-safari` | `/safari` | KEEP; commercial safari alias. |
| `/jaisalmer-camping` | `/safari` | KEEP; camping is part of the commercial safari collection. |
| `/sam-sand-dunes` | `/jaisalmer/places/sam-dunes` | KEEP; attraction intent already has a canonical guide. |
| `/contact` | `/plan-journey` | KEEP; conversion intent already has one owner. |
| `/blog` | `/stories` | KEEP; prevents an empty duplicate blog index. |
| `/packages/rajwadi` | `/packages/jaisalmer-3-nights-4-days?tier=maharawal` | KEEP client compatibility route; production server redirect is not currently declared, but it is not linked or indexed. No Phase 3 change is necessary without evidence of external usage. |

## 3. Core URL inventory and page-by-page audit

All canonicals are `https://srvyaatra.com` plus the listed path. All listed routes are indexable. “Inbound” describes important current contextual or global sources, not an external-backlink claim.

| URL / class | Title; meta description; H1 | Primary intent, audience and themes | Inbound / outbound / schema | Depth, overlap, business purpose | Recommendation and reason |
| --- | --- | --- | --- | --- | --- |
| `/` — CORE COMMERCIAL / BRAND | **Jaisalmer Tours & Tour Packages \| SRV Yaatra**; “Plan Jaisalmer tours, tour packages, sightseeing, desert experiences and transportation…”; H1 `एक दिव्य यात्रा` | Local-commercial entry point; travellers seeking a Jaisalmer travel team; travel agency, custom tours, heritage journeys | Brand navigation and backlinks; links to journeys, Jaisalmer, packages, safari, taxi, gallery, stories, planner; WebPage + global TravelAgency/WebSite | Deep, cinematic homepage. The Jaisalmer service block explicitly explains that SRV Yaatra is the online identity of Jaisalmer-based Shriradha Vallabh tours. Title overlaps package intent. | **IMPROVE.** Change title toward travel-agency/custom-tour identity; preserve H1 and visual hero because description and service section establish purpose without redesign. |
| `/journeys` — NAVIGATION | **Heritage & Spiritual Journeys Across India \| Shri Radha Vallabh**; multi-destination journey description; H1 `SACRED & HERITAGE JOURNEYS` | Browse destination universe; heritage/pilgrimage audience | Navbar/footer/home; Jaisalmer and planner; CollectionPage | Useful navigation collection; not a Jaisalmer query owner. | **KEEP.** Distinct browse intent and brand breadth. |
| `/jaisalmer` — DESTINATION / CORE COMMERCIAL | **Jaisalmer Tours, Travel Guide & Custom Trips \| SRV Yaatra**; fort, havelis, sacred places, Thar and planning; H1 `JAISALMER` | Destination overview and custom-tour discovery; first-time and planning travellers; travel guide, tourism, tours | Home, journeys, footer, attraction return links, history/royal pages; links to packages, Explore, safari guide, history, Riyasat, itinerary, gallery and planner; WebPage + TouristDestination + FAQ | Very deep hub with packages, attractions, experiences, history, culture, stay/reach and FAQ. It can legitimately support tours, but its dominant visible entity is destination Jaisalmer. Duration FAQ overlaps itinerary. | **IMPROVE.** Clarify destination/travel-guide ownership in title/keyword map and replace the duplicated duration FAQ with a destination question. Do not create a separate tours URL now. |
| `/jaisalmer/explore` — DESTINATION / INFORMATIONAL | **Places to Visit in Jaisalmer \| Heritage, Temples & Desert**; 18-place summary; H1 `Explore All of Jaisalmer` | Places to visit, sightseeing, landmark discovery; independent planners | Jaisalmer hub, taxi, footer and legacy sightseeing redirect; links to all place details, itinerary and planner; CollectionPage + TouristDestination | Deep chaptered collection with strong entity relationships. It covers sightseeing intent better than a new duplicate route would. | **KEEP.** Own “places to visit / sightseeing”; no separate sightseeing page. |
| `/jaisalmer/itinerary` — ITINERARY / PLANNING | **Jaisalmer Itinerary for 2, 3 & 4 Days \| SRV Yaatra**; duration-led plan; matching H1 | Itinerary/trip-plan intent across 2/3/4 days; first-time, family and pace-conscious travellers | Jaisalmer, Explore, packages, safari, taxi, Sam and footer; links to Explore, packages, safari, taxi and planner; WebPage + Thing + visible FAQ | Substantive consolidated hub with distinct day frameworks, pacing factors, related chapters and FAQ. No doorway-page problem. | **KEEP / minor link improvement only.** Retain one URL for all duration variants. Add destination-hub context if editing related links. |
| `/jaisalmer/safari-adventure` — INFORMATIONAL | **Jaisalmer Desert Safari Guide \| Camel, Jeep & Camp Options**; comparison-led description; H1 `Desert Safari & Adventure` | Learn and compare desert experience types before booking; uncertain/early-stage travellers | Jaisalmer and footer/intent map; currently mainly links to planner/WhatsApp; CollectionPage + `TouristDestination` + FAQ | Good guide: choices, experience detail, styles and visible FAQ. It is not itself a geographic destination. Missing links to commercial safari, Sam guide and itinerary weaken the cluster. | **IMPROVE.** Preserve URL and copy; add contextual links and change entity type to `Thing`. |
| `/jaisalmer/history` — INFORMATIONAL | **History of Jaisalmer \| Rawal Jaisal, Bhati Rajputs & Sonar Qila**; historical chronology; H1 `THE HISTORY OF JAISALMER` | Historical research and heritage context | Jaisalmer, Riyasat, footer; links to Riyasat, Chaitanya profile, Jaisalmer and planner; WebPage + Thing | Deep editorial content distinct from travel planning. | **KEEP.** Clear informational intent and heritage authority. |
| `/jaisalmer/riyasat` — INFORMATIONAL | **Jaisalmer Riyasat \| Rawal Jaisal & Bhati Royal Timeline**; royal timeline description; H1 `JAISALMER RIYASAT` | Royal-state chronology and royal heritage | Jaisalmer, history, profile, footer; links history, Explore, planner; WebPage + Thing | Distinct from broad history through its royal-line focus. | **KEEP.** No consolidation required. |
| `/jaisalmer/riyasat/chaitanya-raj-singh` — INFORMATIONAL | **Maharawal Chaitanya Raj Singh \| Royal House of Jaisalmer**; photographic heritage profile; H1 `CHAITANYA RAJ SINGH` | Named-person / contemporary royal heritage | Riyasat, history; links Riyasat, Jaisalmer and planner; WebPage + Person | Substantial, photographic and editorial. Low overlap because the parent timeline remains broader. | **KEEP.** Person schema is supported by visible named-person content; historical note already handles legal context subtly. |
| `/packages` — CORE COMMERCIAL | **Jaisalmer Tour Packages for Couples & Families \| SRV Yaatra**; package comparison; H1 `JAISALMER TOUR PACKAGES` | Package comparison and custom quote; couples, families, groups | Home, Jaisalmer, itinerary, footer and alias redirect; links detail package, safari, itinerary and planner; CollectionPage | Deep commercial page with audience selection and quote flow. Distinct from the non-priced itinerary guide. | **KEEP.** Own tour-package intent. |
| `/packages/jaisalmer-3-nights-4-days` — SUPPORTING COMMERCIAL | **Jaisalmer 3 Nights 4 Days Tour Package \| SRV Yaatra**; customizable defined package; H1 `JAISALMER 3 NIGHTS / 4 DAYS` | Evaluate one package duration/tier; high-intent travellers | Packages, safari; links packages, Thar Soul and planner; WebPage + TouristTrip | Substantive product-detail route, not a duplicate of the planning guide because its purpose is offering evaluation. | **KEEP.** Preserve transactional ownership. |
| `/safari` — CORE COMMERCIAL | **Jaisalmer Desert Safari Packages & Camp Options \| SRV Yaatra**; current availability/quote framing; H1 `JAISALMER DESERT SAFARI PACKAGES` | Compare bookable safari formats and enquire; commercial travellers | Home, packages, itinerary, footer and aliases; links Thar Soul, package detail, itinerary and planner; CollectionPage | Clear commercial page with offering cards and quote clarity. Missing links back to the impartial guide and Sam destination page. | **IMPROVE.** Add useful guide/Sam links; do not merge with informational safari guide. |
| `/safari/thar-soul` — SUPPORTING COMMERCIAL | **Thar Soul Sunset Safari Jaisalmer \| 1 Day Desert Village & Camel Trail**; defined schedule/experience; H1 `THAR SOUL` | Evaluate named sunset product | Safari, packages, Jaisalmer, footer; links package detail, safari and planner; WebPage + TouristTrip | Unique named offering with detailed sequence. | **KEEP.** Distinct transactional intent. |
| `/jaisalmer-taxi` — TRANSPORT / UTILITY | **Jaisalmer Taxi Service, Airport Pickup & Sightseeing Cab**; pickups, sightseeing, desert/regional transfers; H1 `JAISALMER TAXI & TRANSPORTATION` | Taxi/transfer coordination; arrivals and independent planners | Home, itinerary, Explore, footer; links itinerary, Explore and planner; WebPage + Service + FAQ | Strong consolidated service page covering airport, railway, local sightseeing and desert transfer variants. | **KEEP / minor contextual link improvement only.** Do not create thin transfer subpages. |
| `/about` — BRAND | **About SRV Yaatra & Ashish Vyas \| Jaisalmer Travel Team**; founder, roots and next generation; H1 `About Shri Radha Vallabh` | Brand/entity/trust navigation | Navbar/footer; links planner; AboutPage + visible Person entities + TravelAgency | Deep founder story and explicit Jaisalmer address/business presentation. Homepage separately explains SRV/brand relationship. | **KEEP.** No invented legal relationship; current wording describes an online identity and listing name without claiming a corporate structure. |
| `/stories` — INFORMATIONAL / EDITORIAL | **Heritage Travel Stories & Jaisalmer Guides \| SRV Yaatra**; cultural/spiritual reflections; H1 `THE EXPERIENCE & STORIES` | Browse editorial journey reflections | Navbar/footer/home and `/experience`/`/blog` redirects; links journeys/planner; CollectionPage | Visible collection includes Jaisalmer and non-Jaisalmer reflections but not a real Jaisalmer guide library. Metadata overstates guides. | **IMPROVE.** Rename metadata to “journey reflections”; do not mass-create articles. |
| `/gallery` — OTHER / BRAND | **Jaisalmer Heritage & Desert Photo Gallery \| SRV Yaatra**; original photography; H1 `EDITORIAL VISUAL ARCHIVE` | Visual research/inspiration and brand proof | Navbar/footer/home/Jaisalmer; links planner; ImageGallery | Strong original visual archive. | **KEEP.** Correct format and intent. |
| `/plan-journey` — CORE COMMERCIAL / UTILITY | **Plan a Custom Jaisalmer Trip \| Contact SRV Yaatra**; dates/group/interests enquiry; H1 `PLAN YOUR CUSTOM JOURNEY` | Conversion/contact and custom planning | Sitewide CTAs; form/WhatsApp; ContactPage + organization mention | Dedicated conversion endpoint with no informational competition. | **KEEP.** One clear enquiry destination. |

## 4. Attraction URL inventory and page-by-page audit

All 18 attraction routes use the same substantial `PlaceDetailPage` template: hero/H1, overview, why visit, history or sacred context, architecture/nature highlights, visitor context, related places, journey CTA, breadcrumb, TouristAttraction schema and a canonical. Each links back to Explore and Jaisalmer; nearby cards create lateral discovery. The Sam page additionally links to the itinerary hub.

| URL | Title; meta description; H1 / primary entity | Intent, audience, themes | Depth / risk / purpose | Recommendation and reason |
| --- | --- | --- | --- | --- |
| `/jaisalmer/places/jaisalmer-fort` | **Jaisalmer Fort (Sonar Qila) \| History & Visitor Guide**; living medieval fort and 99 bastions; H1 Jaisalmer Fort (Sonar Qila) | Fort visitor guide; heritage travellers; architecture, living fort, temples | High depth; overlaps Explore summary only, which appropriately links here; attraction discovery and itinerary support | **KEEP.** Strong standalone entity and major search intent. |
| `/jaisalmer/places/bada-bagh` | **Bada Bagh Jaisalmer \| Royal Cenotaphs & Visitor Guide**; carved royal chhatri complex; H1 Bada Bagh | Attraction guide; royal architecture and sunset visitors | High depth; distinct photo/entity; supports sightseeing | **KEEP.** Independently useful attraction. |
| `/jaisalmer/places/gadisar-lake` | **Gadisar Lake Jaisalmer \| History & Visitor Guide**; reservoir, cenotaphs, temples, Tillon Ki Pol; H1 Gadisar Lake | Lake/heritage visitor guide | High depth; distinct entity and image | **KEEP.** Major standalone attraction. |
| `/jaisalmer/places/laxminath-ji` | **Shri Laxminath Ji Temple, Jaisalmer \| Heritage Guide**; sacred local temple; matching H1 | Sacred/heritage guide; devotees and cultural visitors | High depth; unique spiritual entity; supports visual brand story | **KEEP.** Distinct and central to brand heritage. |
| `/jaisalmer/places/jain-temples` | **Jain Temples in Jaisalmer Fort \| Heritage Guide**; seven-temple cluster; H1 Seven Sacred Jain Temples | Sacred architecture guide | High depth; slight fort relationship but distinct visitor intent | **KEEP.** Separate entity/visit within fort. |
| `/jaisalmer/places/patwon-haveli` | **Patwon Ki Haveli Jaisalmer \| Architecture & Visitor Guide**; five mansions and carved jharokhas; matching H1 | Haveli architecture guide | High depth; one of three haveli pages but distinct named entity | **KEEP.** Do not consolidate named havelis. |
| `/jaisalmer/places/nathmal-haveli` | **Nathmal Ki Haveli Jaisalmer \| Architecture & Visitor Guide**; architect-brother story; matching H1 | Haveli architecture guide | High depth; distinct entity; related-card overlap only | **KEEP.** Independently useful. |
| `/jaisalmer/places/salim-singh-haveli` | **Salim Singh Ki Haveli Jaisalmer \| Visitor Guide**; peacock pavilion and balconies; matching H1 | Haveli visitor guide | High depth; distinct entity | **KEEP.** Independently useful. |
| `/jaisalmer/places/vyas-chhatri` | **Vyas Chhatri Jaisalmer \| Cenotaphs & Sunset Guide**; scholar cenotaphs and city view; matching H1 | Attraction/sunset guide | High depth; some cenotaph overlap with Bada Bagh but distinct location/history | **KEEP.** Clear entity separation. |
| `/jaisalmer/places/lodruva` | **Lodrava Jain Temple & Ancient Capital \| Jaisalmer Guide**; ancient capital and Parshvanath temple; matching H1 | Regional heritage/pilgrimage guide | High depth; distinct day-trip entity | **KEEP.** Strong standalone regional intent. |
| `/jaisalmer/places/amar-sagar` | **Amar Sagar Jaisalmer \| Lake, Palace & Temple Guide**; seasonal lake/palace/temples; matching H1 | Regional heritage stop | High depth; lower demand is not grounds for deletion; connects Lodruva route | **KEEP.** Unique content and itinerary value. |
| `/jaisalmer/places/tanot-mata` | **Tanot Mata Temple Jaisalmer \| Pilgrimage Guide**; border temple; matching H1 | Pilgrimage/day-trip guide | High depth; distinct spiritual/regional intent | **KEEP.** Useful for excursion decisions. |
| `/jaisalmer/places/ramdevra` | **Ramdevra Temple \| Baba Ramdevji Pilgrimage Guide**; samadhi and harmony; matching H1 | Pilgrimage/day-trip guide | High depth; distinct route and audience | **KEEP.** Standalone pilgrimage entity. |
| `/jaisalmer/places/sam-dunes` | **Sam Sand Dunes Jaisalmer \| Desert Visitor Guide**; dunes, sunset, glamping, stargazing; matching H1 | Destination guide, not package sale | High depth; overlaps safari topic but serves place intent; itinerary link sharpens distinction | **KEEP.** Own Sam destination intent; link with guide/commercial safari. |
| `/jaisalmer/places/khuri-dunes` | **Khuri Sand Dunes & Village \| Jaisalmer Desert Guide**; quieter dunes/village; matching H1 | Alternative desert destination guide | High depth; differentiated from Sam by location and quieter-village intent | **KEEP.** No consolidation. |
| `/jaisalmer/places/desert-national-park` | **Desert National Park Jaisalmer \| Wildlife Guide**; protected ecosystem and Great Indian Bustard; matching H1 | Nature/wildlife guide | High depth; distinct from recreational safari | **KEEP.** Important entity diversity. |
| `/jaisalmer/places/fort-palace` | **Jaisalmer Fort Palace & Museum \| Royal Heritage Guide**; royal residence/museum; matching H1 | Museum/royal attraction guide | High depth; sits inside Fort but has separate visit/collections | **KEEP.** Distinct attraction entity. |
| `/jaisalmer/places/mandir-palace` | **Mandir Palace Jaisalmer \| Tazia Tower Heritage Guide**; royal residence/Tazia Tower; matching H1 | Palace/architecture guide | High depth; distinct from Fort Palace | **KEEP.** Standalone named attraction. |

## 5. Search-intent ownership map

| Intent cluster | Primary canonical owner | Supporting pages | Decision |
| --- | --- | --- | --- |
| Jaisalmer travel agency / tourism services | `/` | `/about`, `/plan-journey` | Homepage should say travel agency/custom tours in title; no location-variant pages. |
| Jaisalmer destination / tourism / travel guide | `/jaisalmer` | `/jaisalmer/explore`, itinerary, attraction guides | Make destination/travel-guide intent primary; tours remain a supported commercial theme. |
| Jaisalmer tours / custom tours | `/jaisalmer` | `/`, `/packages`, `/plan-journey` | One combined destination/tour hub is adequate; `/jaisalmer-tours` remains redirected. |
| Tour packages / family / couple / group | `/packages` | 3N/4D package detail | Preserve commercial collection → detail relationship. |
| 3 nights / 4 days package | `/packages/jaisalmer-3-nights-4-days` | `/packages` | Transactional package owner, distinct from itinerary planning. |
| Places to visit / sightseeing / things to see | `/jaisalmer/explore` | attraction pages | Keep consolidated. “Things to do” also receives experience context from Jaisalmer/safari; no new route now. |
| Itinerary / trip plan / 2, 3, 4 days | `/jaisalmer/itinerary` | destination hub, packages | Protected consolidated hub; no duration child pages. |
| Desert safari packages / camping / camel / jeep commercial | `/safari` | `/safari/thar-soul` | Commercial owner. Camping does not warrant a separate thin page. |
| Desert safari guide / compare experience types | `/jaisalmer/safari-adventure` | `/jaisalmer/places/sam-dunes` | Informational owner; strengthen links to commercial next step. |
| Thar Soul sunset safari | `/safari/thar-soul` | `/safari` | Named product owner. |
| Sam Sand Dunes destination | `/jaisalmer/places/sam-dunes` | safari guide/commercial safari | Destination/entity owner. |
| Taxi / airport / railway / sightseeing vehicle / desert transfer | `/jaisalmer-taxi` | itinerary, Explore | One strong service page; do not create transfer doorway pages. |
| Best time to visit | section + FAQ on `/jaisalmer`; pacing context on itinerary | safari guide | Current scope is sufficient; a separate seasonal guide is medium priority only if expanded with maintained month-by-month value. |
| How to reach | travel/logistics section on `/jaisalmer` | `/jaisalmer-taxi` | Current section → service flow is appropriate; no new route now. |
| Jaisalmer Fort / individual attractions | each `/jaisalmer/places/:slug` | Explore collection | One named-entity page per existing substantive guide. |
| History / Riyasat / Chaitanya Raj Singh | respective existing pages | Jaisalmer hub | Distinct broad history, royal chronology and named-person intents. |
| Brand/founder | `/about` | homepage entity block | Clear enough; do not invent legal relationships. |

## 6. Cannibalization analysis

### Material but fixable

- **Homepage vs packages:** homepage title currently contains “Tour Packages” even though `/packages` is the clear package owner. Fix the homepage title, not the URL architecture.
- **Jaisalmer hub vs itinerary:** both visibly answer “how many days.” Keep duration depth and FAQ on itinerary; change the Jaisalmer hub FAQ to a destination-level question.
- **Informational vs commercial safari:** titles and H1s already distinguish “guide” from “packages.” Missing reciprocal links, rather than content duplication, is the principal issue.
- **Stories metadata vs visible content:** “Jaisalmer Guides” is not the page’s visible primary content. Correct metadata rather than generating articles to match it.

### Acceptable overlap

- `/jaisalmer` and `/jaisalmer/explore`: hub vs detailed places collection.
- `/jaisalmer/itinerary` and 3N/4D package: independent planning framework vs defined commercial offering.
- Sam guide, safari guide and safari packages: place vs information comparison vs commercial selection.
- Jaisalmer Fort and Fort Palace: broad living fort vs museum/palace visit.
- Three haveli pages: separate named entities, histories and architecture.

No page currently requires consolidation, deletion or a new redirect.

## 7. Current content strengths

- Finite, code-backed canonical registry and route-specific source metadata.
- Unique titles/descriptions for all 36 routes.
- Strong Jaisalmer photography and place-specific images.
- Useful Explore → detail hierarchy with 18 substantial attraction records.
- Consolidated itinerary instead of duration doorway pages.
- Clear commercial separation between packages, named package, safari collection, named safari and transport.
- Visible FAQs match emitted FAQ schema.
- Strong heritage/history/about content gives the site more than transactional depth.
- Jaisalmer-based address, contact, Maps entity and TravelAgency schema are centralized.
- CTA and WhatsApp paths are present without invented fixed prices.

## 8. Meaningful content gaps

| Gap | Best treatment | Priority | Reason |
| --- | --- | --- | --- |
| Kuldhara | Future standalone attraction page only after an approved real photograph and verified original content are supplied | MEDIUM | Major recognized entity and frequent itinerary stop, but present assets are insufficient for publication under the site’s photo/source standards. |
| Best time by month / weather decisions | Expand the existing destination section first; standalone guide only if maintained month-by-month detail is available | MEDIUM | Current FAQ answers the basic question. A new URL needs more unique utility than keyword coverage. |
| How to reach with current transport options | Keep as `/jaisalmer` section linked to taxi; consider future guide only with maintained rail/flight/road information | MEDIUM | Transport schedules change; current static section plus service page is safer. |
| Food and shopping | Future editorial guide after local names, areas, dietary context, and original media are verified | MEDIUM | Genuine local value is possible, but no source-of-truth dataset exists yet. |
| Sunrise-specific desert page | Keep within Sam/Khuri/safari content | LOW | Too narrow and highly overlapping. |
| Airport and railway taxi child pages | Keep within `/jaisalmer-taxi` | LOW | Doorway risk; current consolidated service answers both. |

## 9. Homepage audit

- **Identity:** visual brand is Shri Radha Vallabh; title/site schema use SRV Yaatra; the local-service section explicitly connects them as an online identity and names the Jaisalmer-based listing.
- **Purpose:** English hero copy says Jaisalmer tours, desert experiences and curated journeys. The local-service grid lists tours, packages, safari and taxi.
- **H1:** Hindi devotional H1 is brand-led rather than search-led. It is visible, meaningful and supported immediately by English copy; changing it would alter an approved hero. Retain.
- **Metadata:** description is clear. Title should own travel-agency/custom-tour intent and stop competing with `/packages`.
- **Internal discovery:** strong routes to journeys and planner in hero, and to Jaisalmer, packages, safari and taxi in the service section.
- **Schema:** WebPage about the global TravelAgency is defensible; no ratings/reviews/prices are emitted.
- **Action:** targeted title change only.

## 10. Brand/entity audit

The code uses three related presentations:

- visual brand: `SHRI RADHA VALLABH`;
- SEO brand: `SRV Yaatra`;
- Maps/listing and TravelAgency schema name: `Shriradha Vallabh tours`.

The homepage currently states: “SRV Yaatra is the online travel identity of Jaisalmer-based Shriradha Vallabh tours.” The About page names Ashish Vyas as founder/owner and provides visible founder details. This is enough to reduce ambiguity without inventing a corporate/legal relationship. The audit cannot independently prove legal naming, so schema should continue to use the owner-provided Maps listing as the organization name with SRV Yaatra and Shri Radha Vallabh Tours as alternate names. No further claim should be added.

## 11. Itinerary hub audit

The hub serves the protected intent well:

- title/H1 name 2, 3 and 4 days;
- introduction clearly presents a flexible planning framework, not a fixed product;
- three duration cards provide materially different pacing;
- arrival, mobility, family, lodging and transfer constraints are considered;
- links lead to Explore, packages, safari, taxi and planner;
- visible FAQs support emitted schema;
- no separate duration routes exist.

The only overlap is a duplicate duration FAQ on `/jaisalmer`, which should be removed from the destination hub. No itinerary child URL is justified.

## 12. Commercial page audit

- `/packages` correctly owns comparison and custom-package intent.
- the 3N/4D route is a defensible product detail, not an itinerary duplicate.
- `/safari` correctly uses commercial language, quote clarity and “price on request.” It needs links to the informational guide and Sam place page.
- `/safari/thar-soul` is a named offering with a clear schedule and appropriate TouristTrip schema.
- `/jaisalmer-taxi` consolidates all transport variants with Service schema and visible FAQs. It should remain one page.
- `/plan-journey` remains the common conversion endpoint.

No invented price, rating, award, partnership or ranking claim is needed.

## 13. Informational and destination opportunities

The existing history, royal, attraction, itinerary and safari-guide content provides a credible authority base. The next editorial expansion should be based on verified local information and unique media, not search-volume variants. Kuldhara is the clearest missing destination, but publication is blocked by the absence of an approved photograph and verified content in the repository. Food, shopping, detailed seasonality and current transport can follow later if maintainable source data is supplied.

## 14. Internal-link architecture

Recommended high-priority graph:

```text
Homepage (travel agency/entity)
  ├─ Jaisalmer destination hub
  ├─ Packages
  ├─ Safari packages
  └─ Taxi

Jaisalmer hub
  ├─ Explore / 18 attraction pages
  ├─ Itinerary
  ├─ Informational safari guide
  ├─ Packages
  ├─ History / Riyasat
  └─ Plan Journey

Informational safari guide
  ├─ Safari packages
  ├─ Sam Sand Dunes guide
  └─ Itinerary

Safari packages
  ├─ Thar Soul
  ├─ Informational safari guide
  ├─ Sam Sand Dunes guide
  └─ Itinerary / package detail

Itinerary
  ├─ Jaisalmer hub / Explore
  ├─ Packages
  ├─ Safari
  └─ Taxi / Plan Journey
```

Anchors should describe why the next page helps (“compare camel, jeep and camp options,” “understand Sam Sand Dunes,” “fit the desert into 2–4 days”) rather than repeat one exact keyword.

## 15. FAQ strategy

Current FAQ schema is emitted only when visible FAQ data is rendered on the route, which is correct. The actionable duplication is the duration question on both `/jaisalmer` and `/jaisalmer/itinerary`. The itinerary hub should own it. The destination hub should instead answer what Jaisalmer is known for. Safari-guide and taxi questions are distinct and useful. No FAQ should be added to pages without a visible FAQ component.

## 16. Structured-data observations

- Global TravelAgency, WebSite, ImageObject and BreadcrumbList nodes are consistently generated.
- Route page type and optional primary entity are connected to the WebPage.
- TouristAttraction entities are appropriate for individual place pages.
- TouristTrip is appropriate for defined package and named safari pages.
- Service is appropriate for taxi/transport coordination.
- Visible FAQ and FAQPage data are aligned.
- Person entities on About and Chaitanya pages are supported by visible content.
- **Correction needed:** “Jaisalmer Desert Safari & Adventure” is an experience/guide topic, not a geographic `TouristDestination`; `Thing` is the safer existing supported type.
- No AggregateRating, Review, price, award or unsupported location schema is present.

## 17. Representative SERP / competitor observations

Research was sampled, not treated as a complete ranking study:

- [Rajasthan Tourism’s Jaisalmer page](https://www.tourism.rajasthan.gov.in/jaisalmer.html) combines attractions, how-to-reach and trip planning, supporting the decision to keep reach/season context in the main destination hub.
- Representative itinerary results commonly consolidate multiple durations and emphasize city/desert sequencing, arrival time and realistic pacing. This supports one itinerary hub rather than duration doorway pages.
- Representative commercial results emphasize ready-made formats, customizable inclusions and clear enquiry paths. `/packages` and `/safari` already satisfy that expectation without inventing prices.
- Representative safari-guide results separate camel/jeep/camp explanations from commercial selection. This supports preserving `/jaisalmer/safari-adventure` and `/safari` as distinct pages.
- Kuldhara recurs in official tourism coverage and itinerary results, confirming a real content gap; however, SERP presence alone does not justify publication without site-owned assets and verified content.

Competitor wording, prices, claims and first-hand statements must not be copied.

## 18. Recommended content hierarchy

```text
SRV Yaatra / Shri Radha Vallabh
├─ Jaisalmer destination and custom-tour hub (/jaisalmer)
│  ├─ Places and sightseeing (/jaisalmer/explore)
│  │  └─ 18 current attraction guides
│  ├─ Planning (/jaisalmer/itinerary)
│  ├─ Desert guide (/jaisalmer/safari-adventure)
│  ├─ History and royal heritage
│  └─ Visual archive
├─ Commercial services
│  ├─ Packages → 3N/4D detail
│  ├─ Safari packages → Thar Soul
│  ├─ Taxi and transfers
│  └─ Plan Journey
├─ Brand / About
└─ Broader journeys and editorial stories
```

## 19. Priority matrix

| Priority | Change | Specific problem solved |
| --- | --- | --- |
| HIGH | Change homepage title to travel-agency/custom-tour intent | Removes avoidable package-title overlap and clarifies business identity. |
| HIGH | Make `/jaisalmer` title/keyword map destination-guide-led | Clarifies the hub’s dominant purpose without creating a new tours URL. |
| HIGH | Replace duplicate Jaisalmer duration FAQ | Assigns duration intent to itinerary and adds a more appropriate destination answer. |
| HIGH | Add reciprocal safari-guide/commercial/Sam/itinerary links | Repairs the main missing topical and informational-to-commercial flow. |
| HIGH | Change safari-guide entity from TouristDestination to Thing | Makes schema accurately represent a guide topic rather than a place. |
| HIGH | Correct Stories metadata | Aligns search snippet with visible editorial/reflection content. |
| MEDIUM | Add Kuldhara guide after supplied real image and verified source data | Fills a meaningful entity gap safely. |
| MEDIUM | Enrich season/how-to-reach sections with maintained factual data | Adds planning depth when reliable current data exists. |
| MEDIUM | Verified food/shopping guide(s) | Adds local usefulness only if original detail exists. |
| LOW | Separate 2/3/4-day itinerary pages | No distinct intent; doorway/cannibalization risk. Do not create. |
| LOW | Taxi airport/station child pages | Current consolidated service is sufficient. Do not create. |

## 20. Keep / improve / consolidate / redirect / create decisions

### KEEP

All 36 current canonical URLs. Each has a defensible purpose; attraction pages have unique entities and substantive shared-template content.

### IMPROVE

`/`, `/jaisalmer`, `/jaisalmer/safari-adventure`, `/safari`, and `/stories` for the narrowly defined high-priority changes above. `/jaisalmer/itinerary` and `/jaisalmer-taxi` may receive only small contextual-link additions if needed to complete the graph.

### CONSOLIDATE

None. Existing separation is defensible.

### REDIRECT

No new redirects. Preserve current aliases.

### CREATE

No new URL in Phase 3. A future Kuldhara route is **MEDIUM** priority and gated on real photography plus verified, original content.

### Pages that should not be created

- 2-day, 3-day and 4-day itinerary child routes;
- airport-transfer, station-transfer and local-cab doorway routes;
- separate camel, jeep, camping, sunset and sunrise keyword pages;
- a second sightseeing route;
- city/near-me location variants;
- thin Stories articles written only to capture keyword variations.

## 21. High-priority implementation scope for Phase 3

1. Metadata/intent adjustments for `/`, `/jaisalmer`, `/stories`.
2. Keyword-map alignment for homepage and Jaisalmer hub.
3. One destination-level FAQ replacement on `/jaisalmer`.
4. Safari-guide schema correction.
5. Contextual links among `/jaisalmer/safari-adventure`, `/safari`, Sam Dunes, itinerary and taxi where genuinely useful.
6. Tests for intent ownership, links, schema and unchanged canonical/indexability behavior.

No new route, redirect, design, imagery, robots or sitemap architecture will be introduced.

## 22. Future Phase 4 opportunities

1. Obtain an approved real Kuldhara photograph and verified content, then reassess a standalone destination guide.
2. Use Search Console query/page data after sufficient impressions accrue to validate intent ownership rather than guessing from early indexing.
3. Expand best-time/how-to-reach content only with maintainable, current operational facts.
4. Develop original local food/shopping/editorial coverage from verified first-party input and photography.
5. Review server logs/Search Console for legacy `/packages/rajwadi` demand before considering a server redirect.
