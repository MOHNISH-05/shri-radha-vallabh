import { expect, test } from '@playwright/test';
import { MODERN_ROYAL_TIMELINE, RAWAL_JAISAL } from '../../src/data/jaisalmerRoyalTimeline';
import { collectFatalErrors, scrollThroughPage, waitForApp } from './test-utils';

const expectedPortraits = [
  ['Rawal Jaisal', '/images/riyasat/kings/rawal-jaisal-800.webp'],
  ['Maharawal Jawahir Singh', '/images/riyasat/kings/jawahir-singh-800.webp'],
  ['Maharawal Girdhar Singh', '/images/riyasat/kings/girdhar-singh-514.webp'],
  ['Maharawal Raghunath Singh', '/images/riyasat/kings/raghunath-singh-800.webp'],
  ['Maharawal Brijraj Singh', '/images/riyasat/kings/brijraj-singh-533.webp'],
  ['Maharawal Chaitanya Raj Singh', '/images/riyasat/kings/chaitanya-raj-singh-800.webp'],
] as const;

test('royal timeline data preserves verified order and image mapping', () => {
  const entries = [RAWAL_JAISAL, ...MODERN_ROYAL_TIMELINE];
  expect(entries.map((entry) => [entry.englishName, entry.portrait.src])).toEqual(expectedPortraits);
  expect(entries.find((entry) => entry.id === 'raghunath-singh')?.hindiName).toBe('महारावल रघुनाथ सिंह');
});

test('Riyasat page renders verified portraits, names, navigation, and conversion links', async ({ page }) => {
  const fatalErrors = collectFatalErrors(page);
  await page.goto('/jaisalmer/riyasat');
  await waitForApp(page);
  await scrollThroughPage(page);

  for (const [name, portrait] of expectedPortraits.slice(1)) {
    const chapter = page.locator(`[data-ruler="${name}"]`);
    await expect(chapter).toBeVisible();
    await expect(chapter).toHaveAttribute('data-portrait', portrait);
  }

  await expect(page.getByRole('heading', { name: 'Rawal Jaisal' })).toBeVisible();
  await expect(page.getByText('महारावल रघुनाथ सिंह', { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: /dedicated profile/i })).toHaveAttribute('href', '/jaisalmer/riyasat/chaitanya-raj-singh');
  await expect(page.locator('main a[href="/jaisalmer/history"]').first()).toBeVisible();
  await expect(page.locator('main a[href="/jaisalmer/explore"]').first()).toBeVisible();
  await expect(page.getByRole('link', { name: /Plan the journey/i })).toHaveAttribute('href', '/plan-journey?destination=Jaisalmer');
  await expect(page.locator('main a[href^="https://wa.me/"]')).toHaveAttribute('href', /wa\.me|api\.whatsapp\.com/);

  const brokenImages = await page.locator('img').evaluateAll((images) => images
    .filter((image) => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth === 0)
    .map((image) => (image as HTMLImageElement).currentSrc));
  expect(brokenImages).toEqual([]);
  expect(fatalErrors).toEqual([]);
});

for (const width of [360, 375, 390, 412, 480, 768, 820, 1024, 1280, 1440, 1920]) {
  test(`Riyasat timeline has no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width < 768 ? 844 : 900 });
    await page.goto('/jaisalmer/riyasat');
    await waitForApp(page);
    const dimensions = await page.evaluate(() => ({
      viewport: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.viewport);
  });
}
