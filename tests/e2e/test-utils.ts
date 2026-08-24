import { expect, type Page } from '@playwright/test';

export const PRODUCTION_ORIGIN = 'https://shri-radha-vallabh.vercel.app';

export const CRITICAL_ROUTES = [
  '/',
  '/journeys',
  '/jaisalmer',
  '/jaisalmer/explore',
  '/jaisalmer/history',
  '/jaisalmer/riyasat',
  '/jaisalmer/riyasat/chaitanya-raj-singh',
  '/packages',
  '/about',
  '/experience',
  '/stories',
  '/gallery',
  '/plan-journey',
] as const;

export async function dismissIntro(page: Page) {
  const skip = page.getByRole('button', { name: /Skip Intro/i });
  if (await skip.isVisible().catch(() => false)) {
    await skip.click();
    await skip.waitFor({ state: 'hidden', timeout: 5_000 });
  }
}

export async function waitForApp(page: Page) {
  await page.waitForLoadState('domcontentloaded');
  await dismissIntro(page);
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator('h1')).toBeVisible();
  await page.evaluate(async () => {
    const visibleImages = [...document.images].filter((image) => {
      const rect = image.getBoundingClientRect();
      return rect.bottom > 0 && rect.top < window.innerHeight && rect.right > 0 && rect.left < window.innerWidth;
    });
    await Promise.all(visibleImages.map(async (image) => {
      if (!image.complete) {
        await new Promise<void>((resolve) => {
          image.addEventListener('load', () => resolve(), { once: true });
          image.addEventListener('error', () => resolve(), { once: true });
        });
      }
      await image.decode().catch(() => undefined);
    }));
    await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
  });
}

export async function scrollThroughPage(page: Page) {
  await page.evaluate(async () => {
    const step = Math.max(500, window.innerHeight * 0.8);
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((resolve) => window.setTimeout(resolve, 30));
    }
    await Promise.all([...document.images].map((image) => {
      if (image.complete) return Promise.resolve();
      return new Promise<void>((resolve) => {
        const timeout = window.setTimeout(resolve, 10_000);
        const settle = () => {
          window.clearTimeout(timeout);
          resolve();
        };
        image.addEventListener('load', settle, { once: true });
        image.addEventListener('error', settle, { once: true });
      });
    }));
    window.scrollTo(0, 0);
  });
}

export function collectFatalErrors(page: Page) {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(`pageerror: ${error.message}`));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(`console: ${message.text()}`);
  });
  return errors;
}
