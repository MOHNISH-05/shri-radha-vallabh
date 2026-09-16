import { expect, test } from '@playwright/test';
import { waitForApp } from './test-utils';

test('informational safari guide connects to planning, place and commercial routes', async ({ page }) => {
  await page.goto('/jaisalmer/safari-adventure');
  await waitForApp(page);

  await expect(page.getByRole('link', { name: /View desert safari packages/i })).toHaveAttribute('href', '/safari');
  await expect(page.getByRole('link', { name: /Read the Sam Sand Dunes guide/i })).toHaveAttribute('href', '/jaisalmer/places/sam-dunes');
  await expect(page.getByRole('link', { name: /Plan the desert within 2–4 days/i })).toHaveAttribute('href', '/jaisalmer/itinerary');

  const jsonLd = JSON.parse(await page.locator('script#route-json-ld').textContent() || '{}') as { '@graph': Array<Record<string, unknown>> };
  const entity = jsonLd['@graph'].find((node) => String(node['@id']).endsWith('/jaisalmer/safari-adventure#entity'));
  expect(entity?.['@type']).toBe('Thing');
});

test('commercial safari page provides informational next steps', async ({ page }) => {
  await page.goto('/safari');
  await waitForApp(page);

  await expect(page.getByRole('link', { name: /Compare safari styles/i })).toHaveAttribute('href', '/jaisalmer/safari-adventure');
  await expect(page.getByRole('link', { name: /Explore Sam Sand Dunes/i })).toHaveAttribute('href', '/jaisalmer/places/sam-dunes');
  await expect(page.getByRole('link', { name: /View itinerary guide/i })).toHaveAttribute('href', '/jaisalmer/itinerary');
});

test('destination and itinerary intents remain distinct', async ({ page }) => {
  await page.goto('/jaisalmer');
  await waitForApp(page);
  await expect(page).toHaveTitle('Jaisalmer Travel Guide & Custom Tours | SRV Yaatra');
  await expect(page.getByText('What is Jaisalmer known for?')).toBeVisible();
  await expect(page.getByText('How many days are recommended to explore Jaisalmer properly?')).toHaveCount(0);

  await page.goto('/jaisalmer/itinerary');
  await waitForApp(page);
  await expect(page.getByText('How many days are enough for Jaisalmer?')).toBeVisible();
  await expect(page.getByRole('link', { name: /Start with the Jaisalmer guide/i })).toHaveAttribute('href', '/jaisalmer');
});

test('modified pages contain no broken internal links', async ({ page, request }) => {
  for (const route of ['/', '/jaisalmer', '/jaisalmer/itinerary', '/jaisalmer/safari-adventure', '/safari', '/stories']) {
    await page.goto(route);
    await waitForApp(page);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'index, follow, max-image-preview:large');
    const structuredData = JSON.parse(await page.locator('script#route-json-ld').textContent() || '{}') as { '@graph': Array<Record<string, unknown>> };
    expect(structuredData['@graph'].some((node) => node['@type'] === 'BreadcrumbList'), `${route} breadcrumb schema`).toBe(true);
    const hrefs = await page.locator('a[href^="/"]').evaluateAll((links) => [
      ...new Set(links.map((link) => (link as HTMLAnchorElement).getAttribute('href')?.split('#')[0]).filter(Boolean)),
    ] as string[]);

    for (const href of hrefs) {
      const response = await request.get(href);
      expect(response.status(), `${route} → ${href}`).toBeLessThan(400);
    }
  }
});
