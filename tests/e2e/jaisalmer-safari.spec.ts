import { expect, test } from '@playwright/test';
import { PRODUCTION_ORIGIN, scrollThroughPage, waitForApp } from './test-utils';

const experienceNames = [
  'Camel Safari',
  'Jeep Desert Safari',
  'Dune Bashing',
  'Desert Camp Experience',
  'Stargazing in the Thar',
  'Rajasthani Cultural Evening',
];

const requiredWidths = [360, 375, 390, 412, 480, 768, 820, 1024, 1280, 1440, 1920];

test('all Jaisalmer Safari surfaces remain contained at every required width', async ({ page }) => {
  test.setTimeout(120_000);
  for (const width of requiredWidths) {
    await page.setViewportSize({ width, height: width < 768 ? 844 : 950 });
    for (const route of ['/jaisalmer', '/jaisalmer/explore', '/jaisalmer/safari-adventure']) {
      await page.goto(route);
      await waitForApp(page);
      const geometry = await page.evaluate(() => ({
        innerWidth: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        clippedHindi: [...document.querySelectorAll<HTMLElement>('[lang="hi"]')].filter((element) => element.scrollWidth > element.clientWidth + 1).map((element) => element.textContent),
      }));
      expect(geometry.innerWidth, `${route} viewport at ${width}px`).toBe(width);
      expect(geometry.scrollWidth, `${route} overflow at ${width}px`).toBeLessThanOrEqual(width);
      expect(geometry.clippedHindi, `${route} Hindi clipping at ${width}px`).toEqual([]);
    }
  }
});

test('Jaisalmer keeps Safari as section 05 and previews all six experiences', async ({ page }) => {
  await page.goto('/jaisalmer');
  await waitForApp(page);

  const sectionIds = await page.locator('section[id]').evaluateAll((sections) =>
    sections.map((section) => section.id),
  );
  expect(sectionIds.indexOf('safari-adventure')).toBeGreaterThan(sectionIds.indexOf('explore-highlights'));
  expect(sectionIds.indexOf('safari-adventure')).toBeLessThan(sectionIds.indexOf('history-story'));
  await expect(page.getByRole('button', { name: 'Safari & Adventure', exact: true })).toBeVisible();

  const preview = page.locator('#safari-adventure');
  await expect(preview.getByRole('heading', { name: 'Desert Safari & Adventure' })).toBeVisible();
  await expect(preview.getByText('थार का रोमांच')).toBeVisible();
  for (const name of experienceNames) {
    await expect(preview.getByRole('heading', { name })).toBeVisible();
  }
  await expect(preview.getByRole('link', { name: /Explore all desert experiences/i })).toHaveAttribute('href', '/jaisalmer/safari-adventure');
});

test('Safari page renders the complete journey, valid CTAs, and healthy local images', async ({ page }) => {
  const response = await page.goto('/jaisalmer/safari-adventure');
  expect(response?.status()).toBe(200);
  await waitForApp(page);
  await expect(page).toHaveTitle(/Jaisalmer Desert Safari Guide/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${PRODUCTION_ORIGIN}/jaisalmer/safari-adventure`);

  for (const name of experienceNames) {
    await expect(page.getByRole('heading', { name, exact: true })).toBeVisible();
  }
  await expect(page.getByRole('heading', { name: 'Desert Experience FAQs' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Plan Your Desert Experience' })).toBeVisible();
  const whatsapp = page.getByRole('link', { name: /WhatsApp/i }).first();
  await expect(whatsapp).toHaveAttribute('href', /^https:\/\/wa\.me\/\d+\?text=.+/);

  await scrollThroughPage(page);
  const imageAudit = await page.locator('main img').evaluateAll((images) => images.map((image) => ({
    src: (image as HTMLImageElement).currentSrc,
    naturalWidth: (image as HTMLImageElement).naturalWidth,
    local: new URL((image as HTMLImageElement).currentSrc).origin === window.location.origin,
    hasDimensions: image.hasAttribute('width') && image.hasAttribute('height'),
  })));
  expect(imageAudit.every((image) => image.local && image.naturalWidth > 0 && image.hasDimensions)).toBe(true);
});

test('Explore chapter 06 models Safari cards as experiences', async ({ page }) => {
  await page.goto('/jaisalmer/explore#chapter-safari');
  await waitForApp(page);
  const chapter = page.locator('#chapter-safari');
  await expect(chapter).toContainText('CHAPTER 06');
  await expect(chapter.getByRole('heading', { name: /Desert Experiences — Safari, Camp & Culture/i })).toBeVisible();
  await expect(chapter.locator('a[href^="/jaisalmer/safari-adventure#"]')).toHaveCount(3);
  await expect(page.locator('a[href="#chapter-safari"]')).toBeVisible();
});

test('generated sitemap contains one canonical Safari route', async ({ request }) => {
  const response = await request.get('/sitemap.xml');
  expect(response.ok()).toBe(true);
  const sitemap = await response.text();
  const matches = sitemap.match(/https:\/\/srvyaatra\.com\/jaisalmer\/safari-adventure/g) ?? [];
  expect(matches).toHaveLength(1);
});
