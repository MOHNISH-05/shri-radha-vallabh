# SRV Yaatra Phase 4A Implementation

**Project:** `D:\radhavallabh`
**Baseline:** `92f6309` on `main`
**Scope:** Pricing, package comparison, Food guide, conversion context, trust, SEO, accessibility and responsive regression coverage.

## Exact five-price mapping

The canonical source remains `src/data/jaisalmerPackages.ts`. Each package tier now stores one numeric `startingPricePerPerson`, formatted only through `formatPackagePrice()`.

| Tier | Package | Starting price |
|---|---|---:|
| Basic | Gorbandh | From ₹11,100/person |
| Standard | Jharokha | From ₹15,400/person |
| Deluxe | Morchan | From ₹18,700/person |
| Super Deluxe | Leheriya | From ₹24,300/person |
| Executive | Maharawal | From ₹28,600/person |

All commercial price surfaces use the shared disclaimer: “Final price may vary by travel dates, hotel/camp availability, room selection and traveller count.” Safari pricing remains on request because no safari amount was supplied.

## Package comparison

The existing five-tier comparison remains limited to verified source data: package identity, tier, 3 Nights / 4 Days duration, confirmed itinerary, starting price and detail action. It now displays the verified formatted prices, the common disclaimer, and a mobile swipe hint. The table remains in its own horizontal scroll container so it does not create page-level overflow.

## Tier and canonical behavior

`/packages/jaisalmer-3-nights-4-days?tier=...` continues to deep-link to the selected tier. Supported values select the corresponding card; the historical `rajwadi` alias continues to select Maharawal. Type and tier changes update UI state through search parameters.

SEO normalization continues to remove query strings. Every tier selection uses the single canonical `https://srvyaatra.com/packages/jaisalmer-3-nights-4-days`; tier URLs do not enter the sitemap and do not create separate titles, H1s or schema entities.

## Food implementation

Added `/jaisalmer/food` through the recovered SRV lazy router. The page uses the existing premium dark/gold system and contains:

1. Food hero
2. Jaisalmer food-culture introduction
3. Regional/traditional dishes
4. Breakfast and snacks
5. Sweets
6. Lassi and drinks
7. Conservative SRV local picks
8. Practical food tips
9. Itinerary pathway
10. Jaisalmer pathway
11. Plan Journey and WhatsApp actions

Content uses only the supplied food names. It makes no rankings, ratings, awards, founding-year, price, address or opening-hour claims and does not emit Restaurant schema. Rajasthan-wide dishes are explicitly described as regional rather than invented in Jaisalmer.

## Jaisalmer Food teaser

Added `food-and-flavours` between the living-traditions and stay/travel sections on `/jaisalmer`. The section previews Ghotua, kachori, dal pakwan, Makhaniya Lassi and jalebi and links to `/jaisalmer/food`. The section navigation now includes Food.

## Plan Journey

The existing planner remains the sole enquiry system. It now visibly collects children and optional pickup point, while retaining travel date, adults, duration, accommodation preference, contact details and optional special request. Package tier links can carry the selected tier into the planner, where the package and verified starting price are shown and included in the enquiry.

The compact homepage planner was kept in sync with children and pickup fields.

## WhatsApp

Package enquiry links now include package name, traveller type, duration, starting price viewed, source page and a request for the exact current quote and availability.

Plan Journey safely URL-encodes submitted data and includes only fields supplied or selected in the form. It includes travel date, adults, children, duration, accommodation, optional pickup, optional package context, optional special request and source page. No form values are sent to analytics.

## Internal links

- `/jaisalmer` → `/jaisalmer/food`
- `/jaisalmer/food` → `/jaisalmer`
- `/jaisalmer/food` → `/jaisalmer/itinerary`
- `/jaisalmer/food` → `/plan-journey`
- `/jaisalmer/itinerary` → `/packages` and `/plan-journey`
- `/jaisalmer/history` → `/packages`
- `/about` → `/packages`

Existing contextual Safari, Sam Sand Dunes, landmark, itinerary and Stories pathways were retained.

## Trust

Compact trust strips on `/packages` and the package-detail route use verified SRV context only: local Jaisalmer team, transparent starting prices and direct WhatsApp coordination. Existing direct-human coordination, local office/map and flexible-planning trust content remains unchanged. No ratings, reviews, awards, certifications or traveller counts were introduced.

## Analytics

No SRV analytics vendor or existing event convention was found. No SDK or third-party script was installed.

Future event contract (no PII): `package_view`, `package_tier_select`, `package_quote_click`, `whatsapp_enquiry_click`, `plan_journey_start`, `plan_journey_submit`, `food_guide_view`, `food_to_itinerary_click`, and `phone_click`. Event payloads must never include names, phone numbers or free-text requests.

## SEO and sitemap

Added one unique SEO registry entry for `/jaisalmer/food` with Food-guide intent, one H1, route-specific description, breadcrumb, canonical and WebPage/Thing structured data. The page uses no Restaurant schema. The route was added to the source sitemap and generated sitemap.

The production build now generates 37 canonical SRV routes. The package tier query is absent from the sitemap.

## Tests

Added `tests/e2e/phase-4a.spec.ts` for exact price data/formatting, price surfaces, disclaimer, tier selection, base canonical, sitemap query exclusion, Food metadata/H1/pathways, Jaisalmer teaser and decoded structured WhatsApp content.

Food was added to critical route coverage. Responsive route coverage now includes Food, packages, package detail and Plan Journey at 360, 375, 390, 412, 768, 1024, 1440 and 1920 pixels. Runtime-isolation coverage remains unchanged and verifies the SRV entry bundle contains no FolkMiles project code.

Final-review validation: `npm run build` passed and generated 37 route-specific SRV documents; `npm run lint` passed with the single pre-existing warning in `company-profile/build_company_profile.cjs`; all **237/237 functional Playwright checks** passed across the complete run and focused correction rerun, including the architecture-isolation checks. Visual regression checks passed **29/30**; the remaining 1440px homepage snapshot is a pre-existing stale baseline that predates already-committed Navbar and Hero copy changes and was intentionally left untouched because it is outside Phase 4A.

## Deferred Phase 4B

- Hidden Gems
- `/jaisalmer/hidden-gems`
- Taxi pricing
- Verified customer reviews
- Traveller photographs
- Additional hotel/camp data
- Additional verified local recommendations
- Remaining client-provided information
- Rajasthan, Char Dham or unrelated destination expansion
- Analytics vendor installation

No push, deployment or Vercel relink was performed.
