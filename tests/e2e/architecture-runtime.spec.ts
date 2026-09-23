import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { expect, test } from '@playwright/test';

test('production entry chain connects index.html to the SRV router', async () => {
  const indexHtml = await readFile(path.resolve('index.html'), 'utf8');
  const mainSource = await readFile(path.resolve('src/main.tsx'), 'utf8');
  const appSource = await readFile(path.resolve('src/App.tsx'), 'utf8');

  expect(indexHtml).toContain('src="/src/main.tsx"');
  expect(mainSource).toMatch(/import App from ['"]\.\/App\.tsx['"]/);
  expect(appSource).toContain("import('./pages/JaisalmerPage')");
  expect(appSource).toContain('path="/jaisalmer"');
  expect(appSource).toContain('element={<JaisalmerPage />}');
  expect(appSource).not.toMatch(/(?:from|import\()\s*['"]\.\/folkmiles\//);
});

test('built SRV route renders and the active production entry excludes FolkMiles', async ({ page, request }) => {
  const response = await page.goto('/jaisalmer');
  expect(response?.status()).toBe(200);
  await expect(page.locator('h1')).toContainText(/Jaisalmer/i);
  await expect(page).toHaveTitle(/Jaisalmer Travel Guide & Custom Tours/);
  await expect(page.locator('body')).not.toContainText('FolkMiles');

  const entrySource = await page.locator('script[type="module"][src]').getAttribute('src');
  expect(entrySource).toMatch(/^\/assets\/index-.+\.js$/);

  const entryBundle = await (await request.get(entrySource as string)).text();
  expect(entryBundle).toContain('/jaisalmer');
  expect(entryBundle).not.toContain('FolkMiles');
  expect(entryBundle).not.toContain('folkmiles.example');
  expect(entryBundle).not.toContain('/src/folkmiles');
});
