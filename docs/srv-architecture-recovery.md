# SRV Yaatra Architecture Recovery

**Project:** `D:\radhavallabh`  
**Recovery date:** 2026-09-23  
**Branch:** `main`  
**Reference commit:** `dc1f7011e2a728c747e279ef71f7f8d5b4968c03`  
**Scope:** SRV runtime, SEO, sitemap, regression tests, and recovery documentation only. No Phase 4A feature work or deployment.

## 1. Root cause

The SRV repository contained uncommitted separate FolkMiles project material. Ten tracked SRV files had working-tree replacements that redirected the active build to FolkMiles:

- `README.md`
- `index.html`
- `public/favicon.svg`
- `public/robots.txt`
- `public/sitemap.xml`
- `scripts/generate-seo-pages.mjs`
- `src/App.tsx`
- `src/data/seo.ts`
- `src/index.css`
- `vercel.json`

The replacement `src/App.tsx` imported `src/folkmiles/*`, the replacement SEO registry used `folkmiles.example`, and the replacement generator emitted FolkMiles metadata and sitemap entries. A pre-recovery build consequently produced a FolkMiles application and 15 FolkMiles SEO routes.

There is no Git commit that introduced FolkMiles. `git log --all -- src/folkmiles tests/e2e/folkmiles.spec.ts public/folkmiles-logo.svg public/logo.jpeg .env.example` returns no history, and `git ls-files` returns no FolkMiles path. Repository evidence therefore identifies an uncommitted working-tree replacement after `HEAD`, not a rebrand, migration, historical SRV version, or committed architectural change. Git alone cannot establish whether the files arrived through a mistaken copy, checkout, or another unrecorded operation.

## 2. Commit/change where the disconnect occurred

No commit hash exists for the disconnect. The change existed only in the dirty working tree after `dc1f701`.

- Latest commit and latest genuine SRV runtime: `dc1f701` (`feat(seo): add Jaisalmer itinerary planning hub`).
- Disconnecting change: uncommitted tracked-file replacements plus untracked separate FolkMiles project files.
- Evidence-based classification: accidental cross-project contamination of the active SRV path. The remaining standalone FolkMiles files are unused foreign files after recovery.
- Intent cannot be established from repository history and is not inferred.

## 3. Last known good architecture used as reference

`dc1f701` is the most recent known-good SRV architecture. It contains:

- the SRV HTML shell and `src/main.tsx` entry;
- the SRV `BrowserRouter` and lazy page imports;
- all committed SRV pages and redirects;
- Phase 2 SEO and Phase 3 topical-authority work;
- `/jaisalmer/itinerary` and its SEO/sitemap entries;
- current package, safari, taxi, about, stories, gallery, and plan-journey pages;
- favicon/logo fixes, internal links, tests, and documentation.

The recovery restored only the ten affected tracked files from this exact commit. It did not revert the repository to an older revision.

## 4. Files repaired

The following working-tree files were restored byte-for-byte from `dc1f701`:

- `README.md`
- `index.html`
- `public/favicon.svg`
- `public/robots.txt`
- `public/sitemap.xml`
- `scripts/generate-seo-pages.mjs`
- `src/App.tsx`
- `src/data/seo.ts`
- `src/index.css`
- `vercel.json`

Recovery-specific test changes:

- Added `tests/e2e/architecture-runtime.spec.ts` to verify the source entry chain and built runtime separation.
- Extended `tests/e2e/responsive.spec.ts` route coverage to 1920px.
- Refreshed the 768px and 1440px `jaisalmer-explore` snapshots. The baselines predated committed SRV changes: `73da414` established seven editorial chapters and `dc1f701` added the itinerary CTA. The updated images now describe the already-committed SRV UI.

No package price, food page, Plan Journey UX, Hidden Gems, analytics, or other Phase 4A feature was added.

## 5. How newer SRV work was preserved

The repository was not reset to an older commit. `HEAD` remained at `dc1f701`, one commit ahead of `origin/main`. Restoration used `HEAD` as the per-file source, so the newest committed itinerary page, its route and metadata, topical-authority links, current SRV pages, tests, favicons, SEO data, and sitemap additions remained intact.

## 6. Final runtime entry chain

The production entry chain is:

`index.html` → `/src/main.tsx` → `src/App.tsx` → `BrowserRouter` / `Routes` → lazy-loaded `src/pages/*` SRV components.

The built `/jaisalmer` route renders the SRV `JaisalmerPage`. The active source entry and emitted JavaScript contain no import or runtime reference to `src/folkmiles`, `FolkMiles`, or `folkmiles.example`.

## 7. Final route mapping

| Route | SRV runtime component |
|---|---|
| `/` | `HomePage` |
| `/jaisalmer` | `JaisalmerPage` |
| `/jaisalmer/explore` | `JaisalmerExplorePage` |
| `/jaisalmer/itinerary` | `JaisalmerItineraryPage` |
| `/packages` | `PackagesPage` |
| `/packages/jaisalmer-3-nights-4-days` | `JaisalmerPackageDetailPage` |
| `/safari` | `SafariExperiencesPage` |
| `/safari/thar-soul` | `TharSoulPage` |
| `/jaisalmer-taxi` | `JaisalmerTaxiPage` |
| `/plan-journey` | `PlanJourneyPage` |
| `/about` | `AboutPage` |

The router also retains the committed journeys, history, riyasat, place-detail, gallery, stories, safari-guide, redirect, and 404 routes.

## 8. SEO source of truth

`src/data/seo.ts` is the SRV metadata registry. It defines `https://srvyaatra.com` as `SEO_ORIGIN`, SRV titles/descriptions/images, public route metadata, breadcrumbs, and structured data. `scripts/generate-seo-pages.mjs` imports that registry during `npm run build` to create route-specific HTML. `src/App.tsx` applies the same registry during client-side routing.

Generated representative pages were inspected for `/`, `/jaisalmer`, `/jaisalmer/itinerary`, `/packages`, `/packages/jaisalmer-3-nights-4-days`, and `/plan-journey`. Each contains route-specific SRV title, description, canonical URL, Open Graph metadata, and SRV branding.

## 9. Sitemap source of truth

`src/data/seo.ts` exports `PUBLIC_SEO_ROUTES`; `scripts/generate-seo-pages.mjs` uses it to overwrite `dist/sitemap.xml` during the build. `public/sitemap.xml` is the committed source copy but the generated `dist/sitemap.xml` is the authoritative build artifact.

The recovered build generated 36 current canonical SRV routes. It includes `https://srvyaatra.com/jaisalmer/itinerary` and contains zero `folkmiles.example` URLs.

## 10. FolkMiles status

SRV Yaatra and FolkMiles are treated as completely separate projects.

The following untracked separate FolkMiles project material remains preserved inside the SRV working directory because deletion was neither necessary nor proven safe:

- `.env.example`
- `src/folkmiles/FolkLayout.tsx`
- `src/folkmiles/Pages.tsx`
- `src/folkmiles/folkmiles.css`
- `src/folkmiles/site.ts`
- `public/folkmiles-logo.svg`
- `public/logo.jpeg`
- `tests/e2e/folkmiles.spec.ts`
- `public/WhatsApp Image 2026-08-21 at 00.18.40.jpeg` (untracked provenance not established by Git)

Classification:

- The prior overlays of tracked SRV entry/configuration files were **A. accidental cross-project contamination** of the SRV active path.
- The preserved standalone files are **C. unused foreign files** after recovery.
- No file is classified as a genuinely shared utility because repository evidence does not establish uncoupled shared ownership.

The files are not imported by the recovered SRV application, are absent from emitted JavaScript, have no SRV routes, and are not used as SRV content, metadata, navigation, or configuration. The untracked FolkMiles test is intentionally outside the relevant SRV validation command; it describes a separate application and conflicts by design with SRV assertions.

## 11. Vercel project-link status

No Vercel metadata was changed and no deployment occurred.

- Local `.vercel/project.json`: project `shri-radha-vallabh`, project ID `prj_XFVWQMTN2qc2l17B2XDxIJrvKS7q`.
- Verified production owner of `srvyaatra.com`: project `radhavallabh`, live deployment `dpl_5Qd4KgChY7iZPBYN6PmfDQeArc1s`.

This remains deployment-link drift. The Vercel CLI is not installed on this machine, so credentials and ownership were not revalidated during recovery. Before any release, an authenticated owner should inspect both projects and their domain assignments, then from `D:\radhavallabh` explicitly run `npx vercel link --project radhavallabh` (adding the verified team scope if Vercel requires it). The resulting `.vercel/project.json` must be checked to ensure it names `radhavallabh` and the expected organization before any deploy command is permitted. No FolkMiles domain or project should be modified or linked.

## 12. Build results

`npm run build` passed with zero TypeScript or Vite errors.

- 2,267 modules transformed.
- 36 SRV route-specific clean-URL HTML documents plus directory fallbacks and `404.html` generated.
- SRV page chunks include `JaisalmerPage`, `JaisalmerItineraryPage`, `PackagesPage`, `JaisalmerPackageDetailPage`, `SafariExperiencesPage`, `JaisalmerTaxiPage`, and `PlanJourneyPage`.
- No emitted JavaScript match for `FolkMiles`, `folkmiles.example`, or `src/folkmiles`.

## 13. Test results

- `npm run lint`: passed with one pre-existing warning in `company-profile/build_company_profile.cjs:1921` (`no-unused-expressions`).
- Relevant SRV Playwright suite: **226 passed, 0 failed** in one final run.
- New runtime regression coverage proves the source entry reaches the SRV router and the built `/jaisalmer` runtime renders SRV while excluding FolkMiles from the active entry bundle.
- Existing route, itinerary, package, SEO/accessibility, sitemap, topical-authority, interaction, favicon, performance, responsive, and visual suites passed.
- Responsive checks passed at 360, 375, 390, 412, 768, 1440, and 1920 pixels. Representative SRV routes showed no horizontal overflow.

## 14. Remaining release steps

1. Review and commit the recovery tests, corrected visual baselines, and this report.
2. Decide separately how to move or remove the untracked FolkMiles project material only after its correct repository/location and recoverability are proven.
3. Authenticate to Vercel, inspect both named projects and domain assignments, and relink this directory specifically to `radhavallabh` as described above.
4. Verify the resulting local project ID and organization before release.
5. Push only after review.
6. Deploy SRV from the verified SRV project in a separate authorized release task; then verify production routes, especially `/jaisalmer/itinerary`.
7. Start Phase 4A only after this recovery is accepted.

No commit, push, relink, domain change, or deployment was performed during this recovery.
