import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import {
  PUBLIC_SEO_ROUTES,
  SEO_ORIGIN,
  absoluteSeoUrl,
  buildStructuredData,
  getSeoForPath,
} from '../src/data/seo.ts';

const projectRoot = process.cwd();
const distDir = path.join(projectRoot, 'dist');
const templatePath = path.join(distDir, 'index.html');
const template = await readFile(templatePath, 'utf8');
const lastModified = process.env.SEO_LASTMOD || new Date().toISOString().slice(0, 10);

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const escapeXml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const replaceMeta = (html, attribute, name, content) => {
  const matcher = new RegExp(`<meta\\s+${attribute}="${escapeRegExp(name)}"\\s+content="[^"]*"\\s*\\/?>(?:\\r?\\n)?`, 'i');
  const tag = `<meta ${attribute}="${name}" content="${escapeHtml(content)}" />`;
  return matcher.test(html) ? html.replace(matcher, `${tag}\n`) : html.replace('</head>', `  ${tag}\n  </head>`);
};

const renderRouteHtml = (seo) => {
  const canonicalUrl = absoluteSeoUrl(seo.path);
  const imageUrl = absoluteSeoUrl(seo.image);
  const schema = JSON.stringify(buildStructuredData(seo)).replaceAll('<', '\\u003c');
  let html = template;

  html = html.replace(/<html\s+lang="[^"]+"/i, '<html lang="en-IN"');
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`);
  html = replaceMeta(html, 'name', 'title', seo.title);
  html = replaceMeta(html, 'name', 'description', seo.description);
  html = replaceMeta(html, 'name', 'robots', 'index, follow, max-image-preview:large');
  html = replaceMeta(html, 'property', 'og:type', 'website');
  html = replaceMeta(html, 'property', 'og:site_name', 'SRV Yaatra');
  html = replaceMeta(html, 'property', 'og:url', canonicalUrl);
  html = replaceMeta(html, 'property', 'og:title', seo.title);
  html = replaceMeta(html, 'property', 'og:description', seo.description);
  html = replaceMeta(html, 'property', 'og:image', imageUrl);
  html = replaceMeta(html, 'property', 'og:image:alt', seo.imageAlt);
  html = replaceMeta(html, 'property', 'og:locale', 'en_IN');
  html = replaceMeta(html, 'property', 'og:locale:alternate', 'hi_IN');
  html = replaceMeta(html, 'name', 'twitter:card', 'summary_large_image');
  html = replaceMeta(html, 'name', 'twitter:title', seo.title);
  html = replaceMeta(html, 'name', 'twitter:description', seo.description);
  html = replaceMeta(html, 'name', 'twitter:image', imageUrl);
  html = replaceMeta(html, 'name', 'twitter:image:alt', seo.imageAlt);
  html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/i, `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`);
  html = html.replace(/<script\s+id="route-json-ld"\s+type="application\/ld\+json">[\s\S]*?<\/script>/i, `<script id="route-json-ld" type="application/ld+json">${schema}</script>`);

  return html;
};

for (const route of PUBLIC_SEO_ROUTES) {
  const seo = getSeoForPath(route);
  if (!seo) throw new Error(`Missing SEO configuration for ${route}`);

  const outputPath = route === '/'
    ? templatePath
    : path.join(distDir, ...route.slice(1).split('/'), 'index.html');
  await mkdir(path.dirname(outputPath), { recursive: true });
  const renderedHtml = renderRouteHtml(seo);
  await writeFile(outputPath, renderedHtml, 'utf8');

  if (route !== '/') {
    const cleanUrlPath = path.join(distDir, `${route.slice(1)}.html`);
    await mkdir(path.dirname(cleanUrlPath), { recursive: true });
    await writeFile(cleanUrlPath, renderedHtml, 'utf8');
  }
}

let notFound = template
  .replace(/<title>[\s\S]*?<\/title>/i, '<title>Page Not Found | SRV Yaatra</title>')
  .replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/>\s*/i, '')
  .replace(/<script\s+id="route-json-ld"\s+type="application\/ld\+json">[\s\S]*?<\/script>\s*/i, '');
notFound = replaceMeta(notFound, 'name', 'title', 'Page Not Found | SRV Yaatra');
notFound = replaceMeta(notFound, 'name', 'description', 'The requested page could not be found.');
notFound = replaceMeta(notFound, 'name', 'robots', 'noindex, follow');
await writeFile(path.join(distDir, '404.html'), notFound, 'utf8');

const sitemapEntries = PUBLIC_SEO_ROUTES.map((route) => {
  const seo = getSeoForPath(route);
  if (!seo) throw new Error(`Missing SEO configuration for sitemap route ${route}`);
  return [
    '  <url>',
    `    <loc>${escapeXml(absoluteSeoUrl(route))}</loc>`,
    `    <lastmod>${lastModified}</lastmod>`,
    '    <image:image>',
    `      <image:loc>${escapeXml(absoluteSeoUrl(seo.image))}</image:loc>`,
    `      <image:caption>${escapeXml(seo.imageAlt)}</image:caption>`,
    '    </image:image>',
    '  </url>',
  ].join('\n');
}).join('\n');

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
  sitemapEntries,
  '</urlset>',
  '',
].join('\n');

await writeFile(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');

console.log(`Generated ${PUBLIC_SEO_ROUTES.length} route-specific clean-URL HTML documents, directory fallbacks, 404.html and an image sitemap for ${SEO_ORIGIN}.`);
