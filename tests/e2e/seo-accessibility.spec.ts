import { expect, test } from '@playwright/test';
import { PRODUCTION_ORIGIN, waitForApp } from './test-utils';

for (const route of ['/', '/jaisalmer', '/jaisalmer/explore', '/jaisalmer/safari-adventure', '/jaisalmer-taxi', '/gallery', '/plan-journey']) {
  test(`${route} has consistent social and canonical metadata`, async ({ page }) => {
    await page.goto(route);
    await waitForApp(page);
    const metadata = await page.evaluate(() => ({
      title: document.title,
      description: document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content,
      canonical: document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href,
      ogTitle: document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.content,
      ogDescription: document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.content,
      ogUrl: document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.content,
      twitterTitle: document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.content,
      h1Count: document.querySelectorAll('h1').length,
    }));
    expect(metadata.description).toBeTruthy();
    expect(metadata.canonical).toBe(`${PRODUCTION_ORIGIN}${route}`);
    expect(metadata.ogTitle).toBe(metadata.title);
    expect(metadata.ogDescription).toBe(metadata.description);
    expect(metadata.ogUrl).toBe(metadata.canonical);
    expect(metadata.twitterTitle).toBe(metadata.title);
    expect(metadata.h1Count).toBe(1);
  });
}

test('robots and sitemap remain available and canonical', async ({ request }) => {
  const robots = await request.get('/robots.txt');
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain(`${PRODUCTION_ORIGIN}/sitemap.xml`);

  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  expect((xml.match(/<url>/g) || []).length).toBe(35);
  expect(xml).toContain(`${PRODUCTION_ORIGIN}/jaisalmer/safari-adventure`);
  expect(xml).toContain(`${PRODUCTION_ORIGIN}/packages/jaisalmer-3-nights-4-days`);
  expect(xml).toContain(`${PRODUCTION_ORIGIN}/safari/thar-soul`);
  expect(xml).toContain(`${PRODUCTION_ORIGIN}/jaisalmer/places/mandir-palace`);
  expect(xml).toContain('xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"');
  expect((xml.match(/<image:image>/g) || []).length).toBe(35);
  expect(xml).toContain(`${PRODUCTION_ORIGIN}/jaisalmer-taxi`);
  expect(xml).not.toContain(`${PRODUCTION_ORIGIN}/experience`);
});

for (const route of ['/', '/jaisalmer/safari-adventure', '/jaisalmer-taxi', '/gallery', '/plan-journey']) {
  test(`${route} retains core semantic accessibility`, async ({ page }) => {
    await page.goto(route);
    await waitForApp(page);
    const audit = await page.evaluate(() => {
      const controls = [...document.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('input:not([type="hidden"]), select, textarea')];
      const ids = [...document.querySelectorAll<HTMLElement>('[id]')].map((element) => element.id);
      return {
        unlabeledControls: controls.filter((control) => !control.labels?.length && !control.getAttribute('aria-label') && !control.getAttribute('aria-labelledby')).map((control) => control.outerHTML),
        imagesWithoutAlt: [...document.images].filter((image) => !image.hasAttribute('alt')).map((image) => image.src),
        duplicateIds: [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))],
        unnamedButtons: [...document.querySelectorAll<HTMLButtonElement>('button')].filter((button) => !(button.getAttribute('aria-label') || button.textContent?.trim() || button.getAttribute('title'))).map((button) => button.outerHTML),
        brokenAriaControls: [...document.querySelectorAll<HTMLElement>('[aria-controls]')].filter((element) => !document.getElementById(element.getAttribute('aria-controls') || '')).map((element) => element.outerHTML),
      };
    });
    expect(audit).toEqual({ unlabeledControls: [], imagesWithoutAlt: [], duplicateIds: [], unnamedButtons: [], brokenAriaControls: [] });
  });
}
