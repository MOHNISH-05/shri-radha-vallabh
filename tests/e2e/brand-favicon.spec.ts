import { expect, test } from '@playwright/test';
import { SITE_CONFIG } from '../../src/data/siteConfig';
import { PRODUCTION_ORIGIN, waitForApp } from './test-utils';

const iconAssets = [
  ['/favicon-48.png', 'image/png'],
  ['/favicon-96.png', 'image/png'],
  ['/favicon-192.png', 'image/png'],
  ['/favicon.ico', 'image/x-icon'],
  ['/apple-touch-icon.png', 'image/png'],
  ['/assets/brand/srv-logo-512.png', 'image/png'],
] as const;

test('official crest assets are statically served with image MIME types', async ({ request }) => {
  for (const [path, type] of iconAssets) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
    expect(response.headers()['content-type'], path).toContain(type);
    expect((await response.body()).length, path).toBeGreaterThan(500);
  }
});

for (const route of ['/', '/jaisalmer', '/packages', '/safari', '/about']) {
  test(`${route} retains consistent favicon, organization logo and header branding`, async ({ page, request }) => {
    const response = await request.get(route);
    expect(response.status()).toBe(200);
    const html = await response.text();
    for (const [path] of iconAssets.slice(0, 5)) {
      expect(html, `${route} favicon source ${path}`).toContain(`href="${path}"`);
    }
    expect(html).not.toContain('rel="alternate icon"');
    expect(html).not.toContain('href="/favicon.svg"');

    await page.goto(route);
    await waitForApp(page);
    await expect(page.locator('link[rel="icon"]')).toHaveCount(3);
    const logo = page.getByRole('img', { name: SITE_CONFIG.brandName }).first();
    await expect(logo).toHaveAttribute('src', SITE_CONFIG.logoUrl);
    const data = JSON.parse(await page.locator('script#route-json-ld').textContent() || '{}') as {
      '@graph': Array<Record<string, unknown>>;
    };
    const agency = data['@graph'].find((node) => node['@type'] === 'TravelAgency');
    expect(agency?.logo).toEqual({
      '@type': 'ImageObject',
      url: `${PRODUCTION_ORIGIN}/assets/brand/srv-logo-512.png`,
      contentUrl: `${PRODUCTION_ORIGIN}/assets/brand/srv-logo-512.png`,
      width: 512,
      height: 512,
    });
  });
}
