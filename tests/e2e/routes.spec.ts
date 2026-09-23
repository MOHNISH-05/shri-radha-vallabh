import { expect, test } from '@playwright/test';
import { collectFatalErrors, CRITICAL_ROUTES, PRODUCTION_ORIGIN, scrollThroughPage, waitForApp } from './test-utils';

const expectedTitles: Record<(typeof CRITICAL_ROUTES)[number], RegExp> = {
  '/': /Jaisalmer Travel Agency & Custom Tours/,
  '/journeys': /Heritage & Spiritual Journeys Across India/,
  '/jaisalmer': /Jaisalmer Travel Guide & Custom Tours/,
  '/jaisalmer/explore': /Places to Visit in Jaisalmer/,
  '/jaisalmer/itinerary': /Jaisalmer Itinerary for 2, 3 & 4 Days/,
  '/jaisalmer/food': /Jaisalmer Food Guide/,
  '/jaisalmer/safari-adventure': /Jaisalmer Desert Safari Guide/,
  '/jaisalmer/history': /History of Jaisalmer/,
  '/jaisalmer/riyasat': /Jaisalmer Riyasat/,
  '/jaisalmer/riyasat/chaitanya-raj-singh': /Maharawal Chaitanya Raj Singh/,
  '/packages': /Jaisalmer Tour Packages for Couples & Families/,
  '/packages/jaisalmer-3-nights-4-days': /Jaisalmer 3 Nights 4 Days Tour Package/,
  '/safari': /Jaisalmer Desert Safari Packages & Camp Options/,
  '/safari/thar-soul': /Thar Soul Sunset Safari Jaisalmer/,
  '/jaisalmer-taxi': /Jaisalmer Taxi Service, Airport Pickup & Sightseeing Cab/,
  '/about': /About SRV Yaatra & Ashish Vyas/,
  '/experience': /Heritage Travel Stories & Journey Reflections/,
  '/stories': /Heritage Travel Stories & Journey Reflections/,
  '/gallery': /Jaisalmer Heritage & Desert Photo Gallery/,
  '/plan-journey': /Plan a Custom Jaisalmer Trip/,
};

for (const route of CRITICAL_ROUTES) {
  test(`${route} renders without route, image, or console failure`, async ({ page }) => {
    const fatalErrors = collectFatalErrors(page);
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await waitForApp(page);
    await scrollThroughPage(page);

    if (route === '/experience') {
      await expect(page).toHaveURL(/\/stories$/);
    }

    await expect(page).toHaveTitle(expectedTitles[route]);
    await expect(page.locator('body')).not.toContainText('Page Not Found');
    const brokenImages = await page.locator('img').evaluateAll((images) =>
      images
        .filter((image) => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth === 0)
        .map((image) => (image as HTMLImageElement).currentSrc || (image as HTMLImageElement).src),
    );
    expect(brokenImages).toEqual([]);
    expect(fatalErrors).toEqual([]);

    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    const canonicalPath = route === '/experience' ? '/stories' : route;
    expect(canonical).toBe(`${PRODUCTION_ORIGIN}${canonicalPath}`);
  });
}
