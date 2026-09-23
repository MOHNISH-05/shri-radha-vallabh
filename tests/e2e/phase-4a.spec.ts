import { expect, test } from '@playwright/test';
import { PACKAGE_TIERS, PRICE_DISCLAIMER, formatPackagePrice } from '../../src/data/jaisalmerPackages.ts';
import { PRODUCTION_ORIGIN, waitForApp } from './test-utils';

test('verified five-tier prices use the shared INR formatter', () => {
  expect(Object.fromEntries(Object.entries(PACKAGE_TIERS).map(([key, tier]) => [key, tier.startingPricePerPerson]))).toEqual({
    gorbandh: 11100,
    jharokha: 15400,
    morchan: 18700,
    leheriya: 24300,
    maharawal: 28600,
  });
  expect(formatPackagePrice(11100)).toBe('From ₹11,100/person');
  expect(formatPackagePrice(28600)).toBe('From ₹28,600/person');
});

test('packages expose all starting prices, comparison and disclaimer', async ({ page }) => {
  await page.goto('/packages');
  await waitForApp(page);
  for (const price of ['₹11,100', '₹15,400', '₹18,700', '₹24,300', '₹28,600']) {
    await expect(page.getByText(new RegExp(`From ${price.replace('₹', '₹')}\\/person`)).first()).toBeVisible();
  }
  await expect(page.getByText(PRICE_DISCLAIMER).first()).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Compare Jaisalmer Packages' })).toBeVisible();
});

test('tier query selects the tier while canonical and sitemap stay on the base package', async ({ page, request }) => {
  await page.goto('/packages/jaisalmer-3-nights-4-days?type=family&tier=morchan');
  await waitForApp(page);
  await expect(page.getByRole('tab', { name: 'Family', exact: true })).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByRole('tab', { name: 'Select Morchan (Deluxe) package tier' })).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByText('From ₹18,700/person').first()).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${PRODUCTION_ORIGIN}/packages/jaisalmer-3-nights-4-days`);
  const packageWhatsAppHref = await page.getByRole('link', { name: /Enquire on WhatsApp/i }).getAttribute('href');
  const packageWhatsAppMessage = decodeURIComponent(packageWhatsAppHref || '');
  expect(packageWhatsAppMessage).toContain('Package: Morchan');
  expect(packageWhatsAppMessage).toContain('Travel type: Family');
  expect(packageWhatsAppMessage).toContain('Duration: Jaisalmer 3 Nights / 4 Days');
  expect(packageWhatsAppMessage).toContain('Starting price viewed: From ₹18,700/person');
  expect(packageWhatsAppMessage).toContain('Source page: /packages/jaisalmer-3-nights-4-days');
  const sitemap = await (await request.get('/sitemap.xml')).text();
  expect((sitemap.match(/<url>/g) || [])).toHaveLength(37);
  expect(sitemap).toContain(`${PRODUCTION_ORIGIN}/packages/jaisalmer-3-nights-4-days`);
  expect(sitemap).not.toContain('?tier=');
});

test('Food guide has unique SEO, one H1, sitemap entry and required pathways', async ({ page, request }) => {
  await page.goto('/jaisalmer/food');
  await waitForApp(page);
  await expect(page).toHaveTitle('Jaisalmer Food Guide | Famous Local Dishes & What to Eat');
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /Ghotua.*Makhaniya Lassi/);
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${PRODUCTION_ORIGIN}/jaisalmer/food`);
  const structuredData = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n');
  expect(structuredData).toContain('Food & Flavours');
  expect(structuredData).toContain(`${PRODUCTION_ORIGIN}/jaisalmer/food`);
  await expect(page.getByRole('link', { name: /View Jaisalmer itinerary/i })).toHaveAttribute('href', '/jaisalmer/itinerary');
  await expect(page.getByRole('link', { name: /Back to Jaisalmer/i })).toHaveAttribute('href', '/jaisalmer');
  await expect(page.locator('a[href="/plan-journey?destination=Jaisalmer"]', { hasText: 'Plan Journey' })).toBeVisible();
  const sitemap = await (await request.get('/sitemap.xml')).text();
  expect(sitemap).toContain(`${PRODUCTION_ORIGIN}/jaisalmer/food`);
});

test('Jaisalmer teaser links to the Food guide', async ({ page }) => {
  await page.goto('/jaisalmer');
  await waitForApp(page);
  await expect(page.getByRole('link', { name: /Explore Jaisalmer Food/i })).toHaveAttribute('href', '/jaisalmer/food');
});

test('Plan Journey carries tier context and optional fields into encoded WhatsApp enquiry', async ({ page }) => {
  await page.goto('/plan-journey?destination=Jaisalmer&tier=morchan&price=18700');
  await waitForApp(page);
  await expect(page.getByText('Package viewed: Morchan (Deluxe)')).toBeVisible();
  await page.getByLabel('Children').selectOption('2 Children');
  await page.getByLabel('Pickup City / Point (Optional)').fill('Jaisalmer Railway Station');
  await page.getByLabel('Full Name').fill('Phase Four Traveller');
  await page.getByLabel('WhatsApp Mobile Number').fill('9876543210');
  await page.evaluate(() => { window.open = (url) => { document.body.dataset.qaOpenedUrl = String(url); return null; }; });
  await page.getByRole('button', { name: /Send Enquiry on WhatsApp/i }).click();
  const openedUrl = await page.locator('body').getAttribute('data-qa-opened-url');
  const decoded = decodeURIComponent(openedUrl || '');
  expect(decoded).toContain('Children: 2 Children');
  expect(decoded).toContain('Pickup point: Jaisalmer Railway Station');
  expect(decoded).toContain('Package: Morchan (Deluxe)');
  expect(decoded).toContain('Starting price viewed: From ₹18,700/person');
  expect(decoded).toContain('Source page: /plan-journey');
  expect(decoded).toContain('Please share the exact quote and availability.');
});
