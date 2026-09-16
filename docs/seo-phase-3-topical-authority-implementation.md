# SRV Yaatra Phase 3 topical-authority implementation

Completion date: 2026-09-16<br>
Audit: `docs/seo-phase-3-topical-authority-audit.md`

## 1. Executive summary

Phase 3 strengthened intent clarity and the Jaisalmer topic graph without adding, removing, renaming or redirecting a public URL. All 36 canonical routes were preserved. Implementation was limited to the high-priority findings documented in the audit: clearer homepage/Jaisalmer/Stories metadata, one FAQ ownership correction, one schema-type correction, and contextual links connecting informational desert research to the relevant place, itinerary and commercial pages.

The premium visual identity, homepage hero/H1, photography, navigation, robots rules, sitemap architecture, canonical origin, redirect set and global TravelAgency entity were intentionally preserved.

## 2. Changes implemented and reasons

| Change | Reason |
| --- | --- |
| Homepage title changed to `Jaisalmer Travel Agency & Custom Tours \| SRV Yaatra` | Makes the business/entity entry point clear and stops the homepage title from competing directly with the package collection. |
| `/jaisalmer` title changed to `Jaisalmer Travel Guide & Custom Tours \| SRV Yaatra` | Aligns metadata with the visible destination-led hub while retaining its legitimate custom-tour role. |
| Homepage and Jaisalmer entries in the finite keyword map updated | Keeps documented intent ownership synchronized with visible and source metadata. |
| Jaisalmer hub FAQ “How many days…” replaced by “What is Jaisalmer known for?” | Assigns duration planning to the itinerary hub and gives the destination hub a destination-level answer. |
| Safari guide entity changed from `TouristDestination` to `Thing` | A safari/adventure guide topic is not itself a geographic destination. |
| Informational safari guide links added to `/safari`, Sam Sand Dunes and itinerary | Gives readers useful next steps from comparison research to place context, trip pacing and commercial options. |
| Commercial safari page links added to the guide and Sam Sand Dunes | Provides impartial planning context from the commercial page and completes reciprocal topical relationships. |
| Itinerary related-content set now includes the main Jaisalmer guide | Restores the destination context above the itinerary’s place/package/safari/transport paths. |
| Stories title/description changed to “Journey Reflections” | Aligns the search snippet with the visible multi-destination editorial collection instead of claiming a Jaisalmer guide library. |
| Topical-authority and responsive regression tests added/extended | Makes intent separation, schema type, internal links and relevant viewport containment directly verifiable. |

## 3. Existing URLs modified

- `/` — title only.
- `/jaisalmer` — title, keyword ownership and one visible/schema-backed FAQ.
- `/jaisalmer/itinerary` — one related destination link.
- `/jaisalmer/safari-adventure` — schema entity type and three contextual links.
- `/safari` — three contextual planning links.
- `/stories` — title and description only.

No other Phase 3 page content was modified.

## 4. New URLs created

None.

## 5. URLs intentionally not created

- `/jaisalmer/2-day-itinerary`, `/3-day-itinerary`, `/4-day-itinerary`;
- separate airport, railway, sightseeing-cab or desert-transfer pages;
- separate camel, jeep, camping, sunset or sunrise pages;
- a second sightseeing page;
- a Kuldhara page in this phase;
- generic keyword-led Stories articles.

These would either overlap an existing owner or lack sufficient approved assets and verified original content.

## 6. URLs intentionally preserved

All 36 canonical public URLs and all existing legacy redirects. The distinct roles of `/jaisalmer/safari-adventure` (information) and `/safari` (commercial comparison/enquiry) were preserved.

## 7. Search-intent ownership changes

| Intent | Owner after Phase 3 |
| --- | --- |
| Jaisalmer travel agency / tourism services | `/` |
| Jaisalmer destination / travel guide / supported custom tours | `/jaisalmer` |
| Places to visit / sightseeing | `/jaisalmer/explore` |
| 2-, 3-, 4-day itinerary / trip planning | `/jaisalmer/itinerary` |
| Safari comparison guide | `/jaisalmer/safari-adventure` |
| Safari packages / commercial desert options | `/safari` |
| Tour packages | `/packages` |
| Taxi, airport, railway, sightseeing and desert transport | `/jaisalmer-taxi` |
| Editorial journey reflections | `/stories` |

## 8. Internal-link changes

```text
/jaisalmer/safari-adventure
  → /safari
  → /jaisalmer/places/sam-dunes
  → /jaisalmer/itinerary

/safari
  → /jaisalmer/safari-adventure
  → /jaisalmer/places/sam-dunes
  → /jaisalmer/itinerary (preserved)

/jaisalmer/itinerary
  → /jaisalmer
```

Anchors explain the value of the destination rather than repeating one exact phrase.

## 9. Schema changes

Only one route-level entity type changed:

- `/jaisalmer/safari-adventure`: `TouristDestination` → `Thing`.

Global TravelAgency/WebSite, breadcrumbs, images, TouristAttraction, TouristTrip, Service, Person and FAQ schema behavior were left unchanged. No rating, review, price, award or unsupported claim was added.

## 10. Content changes

- One Jaisalmer destination FAQ replaced an overlapping duration FAQ.
- Three concise next-step cards were added to the safari guide.
- Two additional contextual buttons were added beside the existing itinerary link on the commercial safari page.
- No long-form filler, hidden SEO text, copied wording or unverifiable fact was added.

## 11. Homepage/entity changes

The homepage title now states the travel-agency/custom-tour purpose. The approved Hindi H1, Laxminath Ji hero, brand styling and existing visible explanation of SRV Yaatra/Shri Radha Vallabh/Shriradha Vallabh tours were preserved. No legal relationship was invented.

## 12. Itinerary changes

The consolidated 2/3/4-day architecture remains unchanged. One related-content link to the Jaisalmer destination guide was added. No child itinerary route was created.

## 13. Technical SEO intentionally left unchanged

- production origin and canonical logic;
- `robots.txt`;
- sitemap generation and its 36-URL inventory;
- route-specific static source generation;
- redirect set;
- Open Graph/Twitter system;
- global TravelAgency/Website identity;
- indexability defaults and 404 noindex behavior;
- navbar and visual identity.

## 14. Redirect changes

None.

## 15. Build result

`npm run build` — **PASS**

- TypeScript build passed.
- Vite production build passed.
- 36 route-specific clean-URL HTML documents were generated.
- Directory fallbacks, 404 page and image sitemap were generated.

## 16. Route and SEO validation result

The following Phase 3–modified routes were validated in browser tests: `/`, `/jaisalmer`, `/jaisalmer/itinerary`, `/jaisalmer/safari-adventure`, `/safari`, `/stories`.

Passed checks include:

- successful render and expected title;
- exactly one visible H1 through existing route tests/helpers;
- no broken loaded images;
- no page or console errors;
- route-specific canonical/indexable source metadata;
- unique titles and descriptions across all 36 indexable routes;
- unchanged 36-URL sitemap and image-sitemap counts;
- corrected safari-guide `Thing` entity;
- visible FAQ and FAQ ownership separation;
- intended contextual link targets;
- no broken internal links from the six modified routes;
- current CTA links retain valid internal or WhatsApp destinations.

Focused Playwright results recorded during this phase:

- topical-authority suite: **4 passed**;
- modified route render/image/console checks: **6 passed across bounded runs**;
- crawlable source-metadata checks for modified canonical routes: **6 passed across bounded runs**;
- unique-title/description check: **passed**;
- sitemap/canonical and tested semantic checks: **passed**.

## 17. Responsive validation result

Horizontal containment passed on the Phase 3 relevant pages at:

- 360px;
- 375px;
- 390px;
- 412px;
- 768px;
- 1440px.

The homepage journey carousel also passed its dedicated containment test across 360, 375, 390, 412, 480, 768, 820, 1024, 1280, 1440 and 1920px. No new image or fixed-size media was introduced, reducing layout-shift risk.

## 18. Known limitations

- This phase did not use Search Console query/page performance data; the property is newly configured and useful trend evidence may not yet exist.
- Representative SERP research is a snapshot, not rank tracking or a guarantee of indexing/ranking.
- A Kuldhara guide was not created because the repository lacks an approved real Kuldhara photograph and sufficiently verified original content.
- The validation was executed against the local production build, not a post-deployment production URL.

## 19. Remaining opportunities

1. Reassess Kuldhara when approved media and verified local content are supplied.
2. Review Search Console query-to-page data after meaningful impressions accrue.
3. Expand best-time/how-to-reach information only with maintainable current facts.
4. Build verified food/shopping coverage from first-party local knowledge and original photography.
5. Consider server-level handling for `/packages/rajwadi` only if logs or Search Console show real legacy demand.

## 20. Recommended next SEO phase

Phase 4 should be evidence-led rather than page-count-led: analyze Search Console query/page ownership, impressions, click-through rates and indexing coverage; then improve the few pages with demonstrated opportunity. Content creation should be limited to verified gaps with original local value and approved imagery.
