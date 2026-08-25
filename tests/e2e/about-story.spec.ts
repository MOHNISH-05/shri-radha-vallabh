import { expect, test } from '@playwright/test';
import { MAPS_CONFIG } from '../../src/data/siteConfig.ts';
import { scrollThroughPage, waitForApp } from './test-utils';

const personalPhotoAlts = [
  'Ashish Vyas, founder and owner of Shri Radha Vallabh Tours',
  'Yuvraj Jeet Vyas, next generation of Shri Radha Vallabh',
  'Premanand Ji Maharaj',
] as const;

test('About page tells the complete founder-led story', async ({ page }) => {
  await page.goto('/about');
  await waitForApp(page);

  await expect(page.getByRole('heading', { level: 1, name: 'About Shri Radha Vallabh' })).toBeVisible();
  for (const heading of [
    'A journey shaped by faith, place and responsibility.',
    'Seven generations in the Golden City.',
    'From family yatras to Shri Radha Vallabh.',
    'A journey that changed everything.',
    'Yuvraj “Jeet” Vyas',
    'Inspired by Premanand Ji Maharaj',
    'Plan your journey with Ashish & team.',
  ]) {
    await expect(page.getByRole('heading', { name: heading })).toHaveCount(1);
  }

  await expect(page.getByText('Shriradha Vallabh Tours established', { exact: true })).toBeVisible();
  await expect(page.getByText('Char Dham Yatras Conducted', { exact: true })).toHaveCount(2);
  await expect(page.getByText('Shingar Collection', { exact: true })).toBeVisible();
  await expect(page.getByText('24×7 traveller assistance', { exact: true })).toBeVisible();
});

test('personal photographs use the approved order and responsive derivatives', async ({ page }) => {
  await page.goto('/about');
  await waitForApp(page);
  await scrollThroughPage(page);

  const order = await page.locator('img').evaluateAll((images, expected) => images
    .map((image) => image.getAttribute('alt'))
    .filter((alt) => expected.includes(alt || '')), [...personalPhotoAlts]);
  expect(order).toEqual([...personalPhotoAlts]);

  for (const alt of personalPhotoAlts) {
    const image = page.getByAltText(alt);
    await expect(image).toHaveCount(1);
    await expect(image).toHaveAttribute('loading', 'lazy');
    await expect(image).toHaveAttribute('srcset', /images\/about\/.*\.webp/);
    await expect.poll(() => image.evaluate((element) => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  }
});

test('About page retains Plan Journey, WhatsApp and Maps conversion paths', async ({ page }) => {
  await page.goto('/about');
  await waitForApp(page);
  const content = page.locator('main');

  await expect(content.getByRole('link', { name: 'Plan a Journey', exact: true })).toHaveAttribute('href', '/plan-journey');
  await expect(content.getByRole('link', { name: 'WhatsApp Us', exact: true })).toHaveAttribute('href', /^https:\/\/wa\.me\/918209290716/);
  const directions = content.getByRole('link', { name: `Get directions to ${MAPS_CONFIG.listingName} on Google Maps` });
  await expect(directions).toHaveCount(2);
  await expect(directions.first()).toHaveAttribute('href', MAPS_CONFIG.mapsUrl);
});

test('About source identifies Ashish and Yuvraj without implying Premanand Ji affiliation', async ({ request }) => {
  const response = await request.get('/about');
  expect(response.status()).toBe(200);
  const html = await response.text();
  const match = html.match(/<script id="route-json-ld" type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  expect(match).not.toBeNull();
  const schema = JSON.parse(match?.[1] || '{}') as { '@graph': Array<Record<string, unknown>> };
  const people = schema['@graph'].filter((node) => node['@type'] === 'Person');
  expect(people).toEqual(expect.arrayContaining([
    expect.objectContaining({ name: 'Ashish Vyas' }),
    expect.objectContaining({ name: 'Yuvraj Ashish Vyas', alternateName: 'Jeet Vyas' }),
  ]));
  expect(JSON.stringify(schema)).not.toContain('Premanand Ji');
  expect(JSON.stringify(schema)).not.toContain('affiliation');
});

for (const width of [360, 375, 390, 412, 480, 768, 820, 1024, 1280, 1440, 1920]) {
  test(`About page remains contained at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width < 768 ? 844 : 950 });
    await page.goto('/about');
    await waitForApp(page);
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
    await expect(page.getByAltText(personalPhotoAlts[0])).toHaveCount(1);
    await expect(page.getByAltText(personalPhotoAlts[1])).toHaveCount(1);
    await expect(page.getByAltText(personalPhotoAlts[2])).toHaveCount(1);
  });
}
