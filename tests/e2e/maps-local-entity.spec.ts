import { expect, test } from '@playwright/test';
import { MAPS_CONFIG } from '../../src/data/siteConfig.ts';
import { waitForApp } from './test-utils';

const widths = [360, 375, 390, 412, 480, 768, 820, 1024, 1280, 1440, 1920];

test('Google Maps calls to action use the exact owner-provided listing', async ({ page }) => {
  await page.goto('/about');
  await waitForApp(page);

  const directions = page.getByRole('link', { name: `Get directions to ${MAPS_CONFIG.listingName} on Google Maps` });
  await expect(directions).toHaveAttribute('href', MAPS_CONFIG.mapsUrl);
  await expect(directions).toHaveAttribute('target', '_blank');
  await expect(directions).toHaveAttribute('rel', 'noopener noreferrer');

  const footerMap = page.getByRole('link', { name: `Find ${MAPS_CONFIG.listingName} on Google Maps` });
  await expect(footerMap).toHaveAttribute('href', MAPS_CONFIG.mapsUrl);
  await expect(footerMap).toHaveAttribute('target', '_blank');
  await expect(footerMap).toHaveAttribute('rel', 'noopener noreferrer');
});

test('Plan Journey includes a responsive lazy-loaded coordinate map', async ({ page }) => {
  await page.goto('/plan-journey');
  await waitForApp(page);

  const map = page.getByTitle(`${MAPS_CONFIG.listingName} location in Jaisalmer`);
  await expect(map).toHaveAttribute('src', MAPS_CONFIG.embedUrl);
  await expect(map).toHaveAttribute('loading', 'lazy');
  await expect(map).toHaveAttribute('referrerpolicy', 'no-referrer-when-downgrade');

  const mapsLink = page.getByRole('link', { name: `View ${MAPS_CONFIG.listingName} on Google Maps` });
  await expect(mapsLink).toHaveAttribute('href', MAPS_CONFIG.mapsUrl);
  await expect(page.getByRole('heading', { name: `Where is ${MAPS_CONFIG.listingName} located?` })).toBeVisible();
});

test('location integration remains contained at every required width', async ({ page }) => {
  for (const width of widths) {
    await page.setViewportSize({ width, height: width < 768 ? 844 : 950 });
    await page.goto('/plan-journey');
    await waitForApp(page);

    const wrapper = page.getByTestId('google-map-wrapper');
    await wrapper.scrollIntoViewIfNeeded();
    const geometry = await wrapper.evaluate((element) => {
      const rect = element.getBoundingClientRect();
      return {
        documentOverflow: document.documentElement.scrollWidth - window.innerWidth,
        left: rect.left,
        right: rect.right,
        height: rect.height,
      };
    });

    expect(geometry.documentOverflow, `${width}px document overflow`).toBeLessThanOrEqual(0);
    expect(geometry.left, `${width}px map left edge`).toBeGreaterThanOrEqual(0);
    expect(geometry.right, `${width}px map right edge`).toBeLessThanOrEqual(width);
    expect(geometry.height, `${width}px usable map height`).toBeGreaterThanOrEqual(279);
  }
});

for (const route of ['/about', '/plan-journey']) {
  test(`${route} source schema references the verified Place without invented business facts`, async ({ request }) => {
    const response = await request.get(route);
    expect(response.status()).toBe(200);
    const html = await response.text();
    const match = html.match(/<script id="route-json-ld" type="application\/ld\+json">([\s\S]*?)<\/script>/i);
    expect(match).not.toBeNull();

    const schema = JSON.parse(match?.[1] || '{}') as { '@graph': Array<Record<string, unknown>> };
    const place = schema['@graph'].find((node) => node['@type'] === 'Place');
    expect(place).toMatchObject({
      name: MAPS_CONFIG.listingName,
      hasMap: MAPS_CONFIG.mapsUrl,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: MAPS_CONFIG.latitude,
        longitude: MAPS_CONFIG.longitude,
      },
    });
    expect(place).not.toHaveProperty('address');
    expect(place).not.toHaveProperty('telephone');
    expect(place).not.toHaveProperty('openingHours');
    expect(place).not.toHaveProperty('aggregateRating');
    expect(place).not.toHaveProperty('review');
    expect(schema['@graph'].some((node) => node['@type'] === 'TravelAgency')).toBe(false);
  });
}
