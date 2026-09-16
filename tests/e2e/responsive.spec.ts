import { expect, test } from '@playwright/test';
import { dismissIntro } from './test-utils';

const widths = [360, 375, 390, 412, 480, 768, 820, 1024, 1280, 1440, 1920];

test('homepage and journey carousel remain contained at every required width', async ({ page }) => {
  for (const width of widths) {
    await page.setViewportSize({ width, height: width < 768 ? 844 : 950 });
    await page.goto('/');
    await dismissIntro(page);
    const carousel = page.getByRole('list', { name: 'Journey destinations' });
    await carousel.scrollIntoViewIfNeeded();

    const geometry = await carousel.evaluate((element) => {
      const container = element.getBoundingClientRect();
      const cards = [...element.children].map((child) => {
        const rect = child.getBoundingClientRect();
        return {
          full: rect.left >= container.left - 1 && rect.right <= container.right + 1,
          intersects: rect.right > container.left + 1 && rect.left < container.right - 1,
        };
      });
      return {
        documentOverflow: document.documentElement.scrollWidth - window.innerWidth,
        full: cards.filter((card) => card.full).length,
        intersecting: cards.filter((card) => card.intersects).length,
      };
    });

    const expectedFull = width >= 1024 ? 5 : width >= 768 ? 3 : 1;
    expect(geometry.documentOverflow, `${width}px document overflow`).toBeLessThanOrEqual(0);
    expect(geometry.full, `${width}px fully visible cards`).toBe(expectedFull);
    if (width < 768) expect(geometry.intersecting, `${width}px mobile next-card peek`).toBeGreaterThanOrEqual(2);
  }
});

test('footer developer credit remains readable and contained at every required width', async ({ page }) => {
  for (const width of widths) {
    await page.setViewportSize({ width, height: width < 768 ? 844 : 950 });
    await page.goto('/about');

    const credit = page.getByRole('link', { name: 'Contact MNB Mohnish on WhatsApp' });
    await credit.scrollIntoViewIfNeeded();
    await expect(credit).toBeVisible();
    await expect(credit).toHaveText('Designed & Developed by MNB (MOHNISH)');

    const geometry = await credit.evaluate((element) => {
      const rect = element.getBoundingClientRect();
      return {
        documentOverflow: document.documentElement.scrollWidth - window.innerWidth,
        left: rect.left,
        right: rect.right,
        width: rect.width,
      };
    });

    expect(geometry.documentOverflow, `${width}px document overflow`).toBeLessThanOrEqual(0);
    expect(geometry.left, `${width}px credit left edge`).toBeGreaterThanOrEqual(0);
    expect(geometry.right, `${width}px credit right edge`).toBeLessThanOrEqual(width);
    expect(geometry.width, `${width}px readable credit width`).toBeGreaterThan(0);
  }
});

for (const width of [360, 375, 390, 412, 768, 1440]) {
  for (const route of ['/jaisalmer', '/jaisalmer/explore', '/jaisalmer/itinerary', '/jaisalmer/safari-adventure', '/safari', '/jaisalmer-taxi', '/stories', '/gallery', '/plan-journey']) {
    test(`${route} has no horizontal overflow at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: width < 768 ? 844 : 950 });
      await page.goto(route);
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
    });
  }
}
