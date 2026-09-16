# Phase 2: Jaisalmer authority and content architecture

## Inventory and intent map

| Content role | Canonical pages | Primary job |
| --- | --- | --- |
| Commercial hubs | `/jaisalmer`, `/packages`, `/safari`, `/jaisalmer-taxi` | Help a visitor compare a trip, a package, a desert experience, or transport and enquire. |
| Transactional detail | `/packages/jaisalmer-3-nights-4-days`, `/safari/thar-soul` | Help a visitor evaluate a defined offering before requesting current availability. |
| Planning and discovery | `/jaisalmer/explore`, `/jaisalmer/itinerary`, `/jaisalmer/safari-adventure` | Help a visitor choose what to see, how long to stay, and what kind of desert experience suits them. |
| Landmark authority | `/jaisalmer/places/:slug` | Answer a specific place query with an editorial visitor guide. |
| History and trust | `/jaisalmer/history`, `/jaisalmer/riyasat`, `/about` | Explain heritage context and who is behind the service. |
| Conversion and navigation | `/plan-journey`, footer and contextual links | Let a visitor turn planning into an enquiry. |

## Priority decisions

1. **High — publish one itinerary hub:** `/jaisalmer/itinerary` serves 2-, 3-, and 4-day planning intent in one substantial guide. Separate thin 2-day, 3-day, and 4-day pages would compete with each other and with the package detail page.
2. **High — connect planning to booking:** link the itinerary hub from Jaisalmer discovery, packages, safari, taxi, Sam Dunes, and the footer. Each link has a distinct visitor reason to continue.
3. **High — preserve intent separation:** `/safari` remains commercial; `/jaisalmer/safari-adventure` remains an impartial planning guide. Neither should be consolidated.
4. **Medium — editorial expansion after verification:** future guides may cover food, shopping, seasonality, and how to reach Jaisalmer only when they contain original, maintained local detail. The existing Stories area should not receive generic SEO articles.
5. **Low — intentionally excluded:** no city-variant pages, keyword-only package pages, duplicate landmark pages, or fabricated itinerary claims.

## Cluster architecture

`Jaisalmer hub` → `Explore places` → `Place guides`<br>
`Jaisalmer hub` → `Itinerary hub` → `Packages`, `Safari`, `Taxi`, `Plan Journey`<br>
`Safari guide` → `Safari packages` → `Sam Dunes`<br>
`History/Riyasat/About` → heritage trust and entity understanding

The itinerary hub is informational and planning-led. It is not a price, availability, or fixed-inclusions page; those remain on commercial pages and are confirmed through an enquiry.
