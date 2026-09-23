# SRV Yaatra — Pre-Phase-4A Architecture Verification

**Project:** `D:\radhavallabh`  
**Verification date:** 2026-09-23  
**Current branch:** `main`  
**Current `HEAD`:** `dc1f7011e2a728c747e279ef71f7f8d5b4968c03`  
**Scope:** Investigation only. No application source, routing, SEO, sitemap, package, or deployment configuration was changed.

## Executive finding

The Antigravity finding is correct **for the current uncommitted working tree**, but it is not an accurate description of the application currently deployed at `https://srvyaatra.com`.

There are three distinct states:

1. **Committed `HEAD` (`dc1f701`)** contains the SRV Yaatra router, SRV pages, SRV SEO registry, and the new `/jaisalmer/itinerary` route.
2. **The dirty working tree** replaces the active entry chain, router, HTML shell, SEO registry, sitemap inputs, styles, and Vercel behavior with FolkMiles code. A build from this state produces FolkMiles, not SRV Yaatra.
3. **Live production** is an earlier SRV deployment created on 2026-09-17 at 01:12:08 IST, seconds after commit `481531e`. Its route/chunk set matches that pre-itinerary SRV state. It is not serving the dirty FolkMiles tree. Consequently, most SRV routes work live, but `/jaisalmer/itinerary` returns HTTP 404 because that route was added later in `dc1f701` at 01:27:43 IST.

The working tree must not be used for Phase 4A or deployed until the FolkMiles replacement is resolved and the SRV architecture is restored or intentionally separated.

## 1. Runtime entry chain

### Current dirty working tree

The exact active build/runtime chain is:

```text
index.html
  -> <script type="module" src="/src/main.tsx">
  -> src/main.tsx
  -> import App from './App.tsx'
  -> src/App.tsx
  -> BrowserRouter
  -> FolkLayout from src/folkmiles/FolkLayout.tsx
  -> route components imported from src/folkmiles/Pages.tsx
  -> src/folkmiles/folkmiles.css
```

There is no alias, conditional entry, generated root, or Vite transform that substitutes another application:

- `vite.config.ts` defines only `react()` and `tailwindcss()` plugins.
- It defines no `resolve.alias`, HTML transform, alternate root, or conditional input.
- `src/main.tsx` imports `./App.tsx` directly.
- The current `src/App.tsx` has direct, non-lazy imports from `src/folkmiles/*` and no imports from `src/pages/*`.
- A repository reference search found no active import path from the current entry graph into the SRV page directory.

Therefore the current SRV page files under `src/pages/` are disconnected from the working-tree bundle.

### Committed SRV chain at `HEAD`

`git show HEAD:src/App.tsx` proves that the committed version is a different application root:

```text
index.html
  -> src/main.tsx
  -> src/App.tsx
  -> BrowserRouter
  -> shared SRV shell: ScrollToTop, LogoIntro, Navbar, Footer, WhatsAppFloatingButton
  -> React.lazy imports from src/pages/*
  -> SRV route components
```

This committed router includes `HomePage`, `JaisalmerPage`, `JaisalmerExplorePage`, `JaisalmerItineraryPage`, `PackagesPage`, `JaisalmerPackageDetailPage`, `SafariExperiencesPage`, `PlanJourneyPage`, `AboutPage`, and the other established SRV pages.

### Live production chain

The current `srvyaatra.com` root HTML loads:

```text
/assets/index-CD9w6lyN.js
```

That live bundle:

- contains `/jaisalmer`, `/jaisalmer/explore`, `/packages`, `/packages/jaisalmer-3-nights-4-days`, `/safari`, and `/plan-journey`;
- contains lazy chunk references such as `JaisalmerPage-D-eBggwf.js`, `JaisalmerExplorePage-BuHLxbON.js`, `PackagesPage-DOzfYtfr.js`, `JaisalmerPackageDetailPage-gwr-L6ZU.js`, `SafariExperiencesPage-Dcj91WmE.js`, `PlanJourneyPage-BEGks4FE.js`, and `AboutPage-BHYRn8rY.js`;
- contains no `FolkMiles` string;
- contains neither `/jaisalmer/itinerary` nor a `JaisalmerItineraryPage` chunk.

This proves that live production uses the earlier SRV router, not the current FolkMiles working-tree router.

## 2. Router architecture

Both applications use React Router's `BrowserRouter`, `Routes`, and `Route`. Neither application generates its client-side routes outside React Router.

The SEO generator creates route-specific static HTML shells, but it does not create React route definitions and cannot connect a component to a URL. On navigation, the single Vite JS bundle boots and React Router selects the component.

The current dirty `vercel.json` adds a catch-all rewrite to `/index.html`. That rewrite only ensures the SPA shell is returned; it does not change the React route table. If deployed, an SRV URL would receive the FolkMiles root shell and then be handled by the FolkMiles wildcard `NotFoundPage`.

The committed/deployed SRV `vercel.json` does not contain that catch-all rewrite. It relies on generated clean-URL HTML for indexable routes and explicit redirects for legacy aliases.

## 3. Route → component mapping

### Live production mapping

The mapping below is proven by the live JS bundle/chunk manifest, HTTP behavior, and the matching SRV router in commit `481531e`.

| Route | Router definition file | Live component | Live status |
|---|---|---|---|
| `/` | `src/App.tsx` (deployed SRV version) | `HomePage` from `src/pages/HomePage.tsx` | HTTP 200 |
| `/jaisalmer` | `src/App.tsx` (deployed SRV version) | `JaisalmerPage` from `src/pages/JaisalmerPage.tsx` | HTTP 200 |
| `/jaisalmer/explore` | `src/App.tsx` (deployed SRV version) | `JaisalmerExplorePage` from `src/pages/JaisalmerExplorePage.tsx` | HTTP 200 |
| `/jaisalmer/itinerary` | Not present in deployed router | No live route component; server returns the SRV 404 document | **HTTP 404** |
| `/packages` | `src/App.tsx` (deployed SRV version) | `PackagesPage` from `src/pages/PackagesPage.tsx` | HTTP 200 |
| `/packages/jaisalmer-3-nights-4-days` | `src/App.tsx` (deployed SRV version) | `JaisalmerPackageDetailPage` from `src/pages/JaisalmerPackageDetailPage.tsx` | HTTP 200 |
| `/safari` | `src/App.tsx` (deployed SRV version) | `SafariExperiencesPage` from `src/pages/SafariExperiencesPage.tsx` | HTTP 200 |
| `/plan-journey` | `src/App.tsx` (deployed SRV version) | `PlanJourneyPage` from `src/pages/PlanJourneyPage.tsx` | HTTP 200 |
| `/about` | `src/App.tsx` (deployed SRV version) | `AboutPage` from `src/pages/AboutPage.tsx` | HTTP 200 |

The committed `HEAD` router additionally maps `/jaisalmer/itinerary` to `JaisalmerItineraryPage`. That commit postdates the current production deployment.

### What the current dirty working tree maps

| Requested route | Current working-tree component |
|---|---|
| `/` | FolkMiles `HomePage` from `src/folkmiles/Pages.tsx` |
| `/about` | FolkMiles `AboutPage` from `src/folkmiles/Pages.tsx` |
| `/jaisalmer` | FolkMiles `NotFoundPage` through `path="*"` |
| `/jaisalmer/explore` | FolkMiles `NotFoundPage` through `path="*"` |
| `/jaisalmer/itinerary` | FolkMiles `NotFoundPage` through `path="*"` |
| `/packages` | FolkMiles `NotFoundPage` through `path="*"` |
| `/packages/jaisalmer-3-nights-4-days` | FolkMiles `NotFoundPage` through `path="*"` |
| `/safari` | FolkMiles `NotFoundPage` through `path="*"` |
| `/plan-journey` | FolkMiles `NotFoundPage` through `path="*"` |

The local Playwright proof is explicit: the newly added FolkMiles suite passes 16/16 against the current build, while the existing `/packages` route test receives the title `FolkMiles | Jaisalmer travel planning` instead of the SRV packages title.

## 4. Build pipeline

`npm run build` executes exactly:

```text
tsc -b
  -> vite build
  -> node --experimental-strip-types scripts/generate-seo-pages.mjs
```

### Stage 1: TypeScript

`tsc -b` type-checks the configured TypeScript project references before bundling.

### Stage 2: Vite

Vite treats `index.html` as the HTML entry, follows `/src/main.tsx`, then follows the direct `./App.tsx` import and its import graph. Vite also copies `public/*` into `dist` before emitting the compiled JS and CSS assets.

For the current dirty tree, Vite emitted one active application bundle:

```text
dist/assets/index-DE4BdSeg.js
```

That bundle is the FolkMiles router/application.

### Stage 3: SEO/static-shell generator

`scripts/generate-seo-pages.mjs` then:

1. imports `PUBLIC_SEO_ROUTES`, `SEO_ORIGIN`, `getSeoForPath`, and `buildStructuredData` from `src/data/seo.ts`;
2. reads Vite's already-built `dist/index.html` as a template;
3. replaces title, description, robots, canonical, Open Graph, Twitter, and JSON-LD values for each SEO route;
4. writes `dist/<route>/index.html` and `dist/<route>.html`;
5. writes `dist/404.html`;
6. overwrites `dist/sitemap.xml` from `PUBLIC_SEO_ROUTES`.

The generator does **not** alter the JS bundle, add React routes, or choose React components. It changes metadata/static shells only. Every generated HTML document still loads the same Vite application bundle.

### Vercel

The live domain is attached to Vercel deployment `dpl_5Qd4KgChY7iZPBYN6PmfDQeArc1s`, project `radhavallabh`, created 2026-09-17 01:12:08 IST and currently `Ready`.

The repository's current `.vercel/project.json` instead names project `shri-radha-vallabh`. This is deployment-link drift and is another reason not to deploy from the current directory without first resolving the intended target.

## 5. Generated output behavior

The required `npm run build` completed successfully, but success confirms compilation only. Its output stated:

```text
Generated 15 route-specific clean-URL HTML documents ... for https://folkmiles.example.
```

For the current build:

| Route | Route HTML generated? | JS bundle loaded | React component | Static canonical/title | Behavior |
|---|---|---|---|---|---|
| `/jaisalmer` | No | `/assets/index-DE4BdSeg.js` via fallback/rewrite shell | FolkMiles `NotFoundPage` | Root FolkMiles shell: `https://folkmiles.example/`; `FolkMiles | Local tours & experiences in India` before client update | Vite preview/catch-all returns the shell, then FolkMiles wildcard handles it |
| `/packages` | No | `/assets/index-DE4BdSeg.js` via fallback/rewrite shell | FolkMiles `NotFoundPage` | Same root FolkMiles canonical/title | Existing SRV Playwright test fails with FolkMiles runtime title |
| `/jaisalmer/itinerary` | No | `/assets/index-DE4BdSeg.js` via fallback/rewrite shell | FolkMiles `NotFoundPage` | Same root FolkMiles canonical/title | Not an SRV page in the current bundle |

None of the three paths has either a directory HTML file or a clean `.html` file in the current `dist` output.

For live production, `/jaisalmer` and `/packages` have route-specific SRV HTML, correct SRV canonicals, and load the live SRV bundle. `/jaisalmer/itinerary` returns the SRV 404 HTML because the live deployment predates that route.

## 6. FolkMiles code status

The FolkMiles files are not legacy-unused code.

| Files | Status | Evidence |
|---|---|---|
| `src/folkmiles/FolkLayout.tsx`, `Pages.tsx`, `folkmiles.css`, `site.ts` | **A. production runtime code in a build from the current tree; C. uncommitted/experimental by Git status; E. accidentally active relative to the SRV project** | Direct imports from active `src/App.tsx`; FolkMiles Playwright suite passes 16/16 |
| `index.html` FolkMiles metadata | **D. build-time input and E. accidentally active** | Vite entry template and source of the emitted root shell |
| `src/data/seo.ts` FolkMiles registry | **D. build-time input and E. accidentally active** | Imported directly by `generate-seo-pages.mjs`; produces 15 FolkMiles static pages/sitemap |
| `public/folkmiles-logo.svg`, `public/logo.jpeg`, FolkMiles favicon | **A/D active assets for the current build** | Copied by Vite and referenced by FolkMiles runtime/HTML |
| `tests/e2e/folkmiles.spec.ts` | **C. uncommitted experimental test code** | Not part of runtime, but validates the replacement application |

They are not active on `srvyaatra.com` today because that domain serves an earlier SRV deployment.

## 7. SEO source of truth

The Antigravity claim that the current `src/data/seo.ts` contains FolkMiles data is true.

In the dirty working tree it defines:

- `SEO_ORIGIN = https://folkmiles.example` by default;
- 15 FolkMiles routes;
- FolkMiles titles/descriptions;
- FolkMiles `TravelAgency` structured data.

This exact file participates in the current build through a direct import in `scripts/generate-seo-pages.mjs`. There is no second SEO registry that overrides it during the build.

In the current FolkMiles runtime, `src/App.tsx` does not import the SEO registry. `FolkLayout` sets a generic FolkMiles document title client-side. Therefore:

- build-time/static metadata comes from `src/data/seo.ts`;
- runtime route titles come from `FolkLayout`;
- neither source restores SRV metadata.

The live deployment contains SRV metadata because it was built from the prior SRV version of the same `src/data/seo.ts` path. Live source contains SRV canonicals, SRV titles, and no FolkMiles metadata.

## 8. Sitemap source of truth

There are two relevant files during a build:

1. `public/sitemap.xml` is copied by Vite into `dist` as an ordinary public asset.
2. `scripts/generate-seo-pages.mjs` subsequently overwrites `dist/sitemap.xml` from `PUBLIC_SEO_ROUTES` in `src/data/seo.ts`.

Therefore the authoritative emitted sitemap is the generated `dist/sitemap.xml`, not the source `public/sitemap.xml`.

Current evidence:

- dirty `public/sitemap.xml`: 3 FolkMiles URLs;
- freshly built `dist/sitemap.xml`: 15 FolkMiles URLs on `folkmiles.example`;
- deployed `https://srvyaatra.com/sitemap.xml`: 35 SRV URLs, zero FolkMiles references;
- committed `HEAD` source expects 36 SRV routes because it adds `/jaisalmer/itinerary` after the live deployment.

Thus the deployed sitemap matches the earlier SRV source lineage, not the newly generated local sitemap. The one-route difference is the undeployed itinerary commit.

## 9. Why existing tests passed

The established tests are not merely superficial static-file tests:

- `routes.spec.ts` opens each route in a browser, waits for the React application, scrolls the page, checks titles, broken images, console errors, and canonical URLs. It genuinely exercises React routing.
- `topical-authority.spec.ts` opens live React pages and checks route-specific internal links and JSON-LD relationships.
- `seo-accessibility.spec.ts` checks both runtime head state and fetched `robots.txt`/`sitemap.xml` content.
- `seo-source.spec.ts` imports the SEO registry and fetches route-specific HTML to validate crawler-readable source metadata and structured data.
- `jaisalmer-safari.spec.ts` exercises both component content and generated sitemap behavior.

They previously passed because they were run against the committed SRV application before the uncommitted FolkMiles replacements. Git proves that `HEAD` still contains the full SRV router and SEO registry.

They do not pass against the current working-tree build:

- the FolkMiles-only suite passes 16/16;
- the established SRV route test for `/packages` fails because the browser title is `FolkMiles | Jaisalmer travel planning`;
- selected established SRV routes similarly fail or enter the FolkMiles wildcard page;
- the current build emits 15 FolkMiles SEO routes, so the SRV sitemap and structured-data expectations are no longer satisfied.

There is also an important invocation distinction:

- `npm run test:e2e` performs a fresh build before Playwright;
- running `npx playwright test` directly only previews the existing `dist` directory and can test stale output if a fresh build was not run first.

The live production route run further confirms deployment drift: 14/19 established route tests passed; `/jaisalmer/itinerary` correctly exposed the real HTTP 404, while three failures were stale title expectations and one was a transient connection reset—not FolkMiles rendering.

## 10. Final classification of D-001/D-002/D-003/D-004

### D-001 — `src/App.tsx` uses FolkMiles and disconnects SRV pages

**Classification: CONFIRMED CRITICAL DEFECT**

Evidence: the current direct entry graph imports only `src/folkmiles/*`; a fresh build emits a FolkMiles bundle; SRV URLs resolve to the FolkMiles wildcard page. The live domain is unaffected only because it is serving an earlier deployment.

### D-002 — `src/data/seo.ts` contains FolkMiles routes/data

**Classification: CONFIRMED CRITICAL DEFECT**

Evidence: the current file defines `folkmiles.example`, 15 FolkMiles routes, FolkMiles metadata, and FolkMiles schema. The build generator imports it directly and emitted a FolkMiles sitemap/static pages.

### D-003 — `index.html` contains FolkMiles metadata/noindex/canonical

**Classification: CONFIRMED CRITICAL DEFECT**

Evidence: it is the actual Vite HTML entry. It supplies the FolkMiles shell and default canonical. Although the SEO generator changes `robots` for generated routes, it does not change the bundled application, and non-generated SRV paths would receive the wrong fallback shell.

### D-004 — SEO generator produces a FolkMiles sitemap/static shells

**Classification: CONFIRMED CRITICAL DEFECT**

Evidence: the script directly consumes the FolkMiles registry and also contains hardcoded FolkMiles `og:site_name` and 404 text. The required fresh build emitted 15 `folkmiles.example` URLs. The script changes metadata only; it cannot reconnect SRV components.

## 11. Can Phase 4A safely proceed?

No.

Before Phase 4A feature work, the team must deliberately resolve the uncommitted FolkMiles replacement and re-establish one authoritative SRV entry/router/SEO/sitemap configuration. The correct deployment project must also be confirmed because the local Vercel link points to `shri-radha-vallabh`, while `srvyaatra.com` is served by project `radhavallabh`.

The live SRV site is not presently overwritten by FolkMiles, but deploying the current working tree would replace its application and indexable route set. Separately, the committed itinerary route is not live and currently returns HTTP 404.

ARCHITECTURE DEFECT CONFIRMED — FIX REQUIRED BEFORE PHASE 4A
