import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { expect, test } from '@playwright/test';
import {
  PUBLIC_SEO_ROUTES,
  absoluteSeoUrl,
  getSeoForPath,
} from '../../src/data/seo.ts';

const extractJsonLd = (html: string) => {
  const match = html.match(/<script id="route-json-ld" type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  expect(match, 'route JSON-LD script').not.toBeNull();
  return JSON.parse(match?.[1] || '{}') as { '@graph'?: Array<Record<string, unknown>> };
};

for (const route of PUBLIC_SEO_ROUTES) {
  test(`${route} serves crawlable route-specific source metadata`, async ({ request }) => {
    const seo = getSeoForPath(route);
    expect(seo).not.toBeNull();

    const response = await request.get(route);
    expect(response.status()).toBe(200);
    const html = await response.text();
    const canonical = absoluteSeoUrl(route);
    const image = absoluteSeoUrl(seo?.image || '/');

    expect(html).toContain(`<link rel="canonical" href="${canonical}" />`);
    expect(html).toContain('<meta name="robots" content="index, follow, max-image-preview:large" />');
    expect(html).toContain(`<meta property="og:url" content="${canonical}" />`);
    expect(html).toContain(`<meta property="og:image" content="${image}" />`);
    expect(html).toContain(`<meta name="twitter:image" content="${image}" />`);

    const structuredData = extractJsonLd(html);
    const graphTypes = structuredData['@graph']?.map((node) => node['@type']);
    expect(graphTypes).toEqual(expect.arrayContaining([
      'TravelAgency',
      'WebSite',
      'ImageObject',
      'BreadcrumbList',
      seo?.pageType,
    ]));
  });
}

test('all indexable routes have unique titles and descriptions', () => {
  const seoEntries = PUBLIC_SEO_ROUTES.map((route) => getSeoForPath(route));
  const titles = seoEntries.map((seo) => seo?.title);
  const descriptions = seoEntries.map((seo) => seo?.description);

  expect(new Set(titles).size).toBe(PUBLIC_SEO_ROUTES.length);
  expect(new Set(descriptions).size).toBe(PUBLIC_SEO_ROUTES.length);
});

test('generated 404 document is explicitly non-indexable', async () => {
  const html = await readFile(path.resolve('dist/404.html'), 'utf8');
  expect(html).toContain('<meta name="robots" content="noindex, follow" />');
  expect(html).not.toContain('rel="canonical"');
  expect(html).not.toContain('id="route-json-ld"');
});

test('client-side unknown routes remove canonical and structured data signals', async ({ page }) => {
  await page.goto('/definitely-not-a-real-page');
  await expect(page).toHaveTitle('Page Not Found | SRV Yaatra');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, follow');
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
  await expect(page.locator('script#route-json-ld')).toHaveCount(0);
});
