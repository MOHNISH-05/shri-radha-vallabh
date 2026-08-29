import { expect, test } from '@playwright/test';

test('homepage intro uses the matching poster and mobile delivery asset', async ({ page }) => {
  await page.clock.install();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const video = page.locator('video');
  await expect(video).toBeVisible();
  await expect(video).toHaveAttribute('poster', '/assets/optimized/srv-intro-poster.webp');
  await expect(video).toHaveAttribute('preload', 'auto');
  await expect.poll(() => video.evaluate((element) => (element as HTMLVideoElement).currentSrc))
    .toContain('/assets/optimized/srv-reassembly-mobile.mp4');
});

test('direct Jaisalmer routes preload their actual LCP image', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/jaisalmer/explore');

  const preload = page.locator('link[rel="preload"][as="image"][fetchpriority="high"]');
  await expect(preload).toHaveAttribute('href', '/assets/optimized/jaisalmer-fort-1280.webp');
  await expect(preload).toHaveAttribute('imagesrcset', /jaisalmer-fort-1280\.webp 1280w/);
});

test('shared page heroes retain eager high-priority responsive delivery', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/plan-journey');

  const hero = page.locator('section img').first();
  await expect(hero).toHaveAttribute('loading', 'eager');
  await expect(hero).toHaveAttribute('fetchpriority', 'high');
  await expect(hero).toHaveAttribute('srcset', /jaisalmer-night-fort-1280\.webp 1280w/);
  await expect.poll(() => hero.evaluate((element) => (element as HTMLImageElement).complete)).toBe(true);
});
