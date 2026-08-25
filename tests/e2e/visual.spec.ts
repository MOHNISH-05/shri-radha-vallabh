import { expect, test } from '@playwright/test';
import { waitForApp } from './test-utils';

const visualRoutes = [
  ['home', '/'],
  ['jaisalmer', '/jaisalmer'],
  ['jaisalmer-explore', '/jaisalmer/explore'],
  ['jaisalmer-history', '/jaisalmer/history'],
  ['jaisalmer-riyasat', '/jaisalmer/riyasat'],
  ['chaitanya-raj-singh', '/jaisalmer/riyasat/chaitanya-raj-singh'],
  ['gallery', '/gallery'],
  ['about', '/about'],
  ['plan-journey', '/plan-journey'],
] as const;

for (const width of [375, 768, 1440]) {
  for (const [name, route] of visualRoutes) {
    test(`${name} visual baseline at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: width < 768 ? 844 : width < 1024 ? 1024 : 900 });
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(route);
      await waitForApp(page);
      await page.addStyleTag({ content: '*, *::before, *::after { animation: none !important; transition: none !important; }' });
      await page.waitForTimeout(150);
      await expect(page).toHaveScreenshot(`${name}-${width}.png`, { fullPage: false });
    });
  }
}
