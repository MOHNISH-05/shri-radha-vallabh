import { expect, test } from '@playwright/test';
import { waitForApp } from './test-utils';

test('mobile navigation exposes state, closes with Escape, and navigates', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/jaisalmer');
  await waitForApp(page);

  const toggle = page.locator('button[aria-label="Open Navigation Menu"]');
  await toggle.click();
  const openToggle = page.locator('button[aria-controls="mobile-navigation-menu"]');
  await expect(openToggle).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#mobile-navigation-menu')).toBeVisible();

  await page.keyboard.press('Escape');
  await expect(page.locator('button[aria-label="Open Navigation Menu"]')).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('#mobile-navigation-menu')).toHaveCount(0);

  await page.locator('button[aria-label="Open Navigation Menu"]').click();
  await page.locator('#mobile-navigation-menu').getByRole('button', { name: /Plan Journey/ }).click();
  await expect(page).toHaveURL(/\/plan-journey$/);
});

test('gallery card supports keyboard activation and Escape close', async ({ page }) => {
  await page.goto('/gallery');
  await waitForApp(page);

  const card = page.locator('section button').filter({ has: page.locator('img') }).first();
  await card.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(card).toBeFocused();
});

test('Plan Journey validates safely and generates the expected WhatsApp payload', async ({ page }) => {
  await page.goto('/plan-journey?destination=jaisalmer');
  await waitForApp(page);

  await page.getByLabel('Full Name').fill('Automated QA Traveller');
  await page.getByLabel('WhatsApp Mobile Number').fill('123');
  await page.getByRole('button', { name: /Send Enquiry on WhatsApp/i }).click();
  await expect(page.getByRole('alert')).toContainText('valid 10-digit WhatsApp mobile number');

  await page.getByLabel('WhatsApp Mobile Number').fill('9876543210');
  await page.evaluate(() => {
    window.open = (url) => {
      document.body.dataset.qaOpenedUrl = String(url);
      return null;
    };
  });
  await page.getByRole('button', { name: /Send Enquiry on WhatsApp/i }).click();

  const openedUrl = await page.locator('body').getAttribute('data-qa-opened-url');
  expect(openedUrl).toMatch(/^https:\/\/wa\.me\/918209290716\?text=/);
  const decoded = decodeURIComponent(openedUrl || '');
  expect(decoded).toContain('Automated QA Traveller');
  expect(decoded).toContain('9876543210');
  expect(decoded).toContain('Jaisalmer (The Golden City)');
});

test('footer MNB credit exposes the isolated developer WhatsApp link', async ({ page }) => {
  await page.goto('/jaisalmer');
  await waitForApp(page);

  const credit = page.getByRole('link', { name: 'Contact MNB Mohnish on WhatsApp' });
  await expect(credit).toBeVisible();
  await expect(credit).toHaveText('Designed & Developed by MNB (MOHNISH)');
  await expect(credit).toHaveAttribute(
    'href',
    'https://wa.me/917849931611?text=Hi%20Mohnish%2C%20I%20visited%20the%20Shri%20Radha%20Vallabh%20website%20and%20would%20like%20to%20connect%20with%20you.',
  );
  await expect(credit).toHaveAttribute('target', '_blank');
  await expect(credit).toHaveAttribute('rel', 'noopener noreferrer');

  const href = await credit.getAttribute('href');
  const developerWhatsApp = new URL(href || '');
  expect(developerWhatsApp.pathname).toBe('/917849931611');
  expect(developerWhatsApp.searchParams.get('text')).toBe(
    'Hi Mohnish, I visited the Shri Radha Vallabh website and would like to connect with you.',
  );

  await credit.focus();
  await expect(credit).toBeFocused();
  await expect(page.locator('a[href^="https://wa.me/918209290716"]')).not.toHaveCount(0);
});
