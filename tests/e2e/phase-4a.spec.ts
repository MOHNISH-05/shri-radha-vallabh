import { expect, test } from '@playwright/test';
import { PRODUCTION_ORIGIN, waitForApp } from './test-utils';

test('tier query selects the tier while canonical and sitemap stay on the base package', async ({ page, request }) => {
  await page.goto('/packages/jaisalmer-3-nights-4-days?type=family&tier=morchan');
  await waitForApp(page);
  await expect(page.getByRole('tab', { name: 'Family', exact: true })).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByRole('tab', { name: 'Select Morchan (Deluxe) package tier' })).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByText('From ?18,700/person').first()).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${PRODUCTION_ORIGIN}/packages/jaisalmer-3-nights-4-days`);
  const packageWhatsAppHref = await page.getByRole('link', { name: /Enquire on WhatsApp/i }).getAttribute('href');
  const packageWhatsAppMessage = decodeURIComponent(packageWhatsAppHref || '');
  expect(packageWhatsAppMessage).toContain('Package: Morchan');
  expect(packageWhatsAppMessage).toContain('Travel type: Family');
  expect(packageWhatsAppMessage).toContain('Duration: Jaisalmer 3 Nights / 4 Days');
  expect(packageWhatsAppMessage).toContain('Starting price viewed: From ?18,700/person');
  expect(packageWhatsAppMessage).toContain('Source page: /packages/jaisalmer-3-nights-4-days');
  const sitemap = await (await request.get('/sitemap.xml')).text();
  expect((sitemap.match(/<url>/g) || [])).toHaveLength(37);
  expect(sitemap).toContain(`${PRODUCTION_ORIGIN}/packages/jaisalmer-3-nights-4-days`);
  expect(sitemap).not.toContain('?tier=');
});
