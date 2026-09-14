const fs = require('fs');
const path = require('path');
const { chromium } = require('@playwright/test');

// Helper to convert local image to base64 data URI
function toBase64(relPath) {
  try {
    const fullPath = path.resolve(__dirname, '..', relPath);
    if (!fs.existsSync(fullPath)) {
      console.warn(`[WARN] Image not found: ${fullPath}`);
      return '';
    }
    const ext = path.extname(fullPath).toLowerCase();
    let mime = 'image/jpeg';
    if (ext === '.png') mime = 'image/png';
    else if (ext === '.webp') mime = 'image/webp';
    else if (ext === '.svg') mime = 'image/svg+xml';
    const b64 = fs.readFileSync(fullPath).toString('base64');
    return `data:${mime};base64,${b64}`;
  } catch (err) {
    console.error(`[ERR] Failed to read ${relPath}:`, err.message);
    return '';
  }
}

console.log('Loading and encoding brand and destination assets...');

const IMAGES = {
  logo: toBase64('public/assets/optimized/srv-logo-192.webp'),
  coverHero: toBase64('public/assets/optimized/jaisalmer-fort-palace-1920.webp'),
  ashishVyas: toBase64('public/images/about/ashish-vyas-640.webp'),
  jeetVyas: toBase64('public/images/about/yuvraj-jeet-vyas-640.webp'),
  jaisalmerFortHero: toBase64('public/assets/optimized/jaisalmer-fort-1920.webp'),
  camelSafari: toBase64('public/images/jaisalmer/safari/camel-safari/camel-safari-jaisalmer.webp'),
  desertCamp: toBase64('public/images/jaisalmer/safari/desert-camp/jaisalmer-desert-camp.webp'),
  jeepSafari: toBase64('public/images/jaisalmer/safari/jeep-safari/jeep-safari-jaisalmer.webp'),
  culturalEvening: toBase64('public/images/jaisalmer/safari/cultural-evening/jaisalmer-folk-music.webp'),
  jaisalmerHeritage: toBase64('public/images/jaisalmer/web_DJI_0065.JPG'),
  desertGlamping: toBase64('public/images/jaisalmer/web_DJI_0727.jpg'),
  patwonHaveli: toBase64('public/images/jaisalmer/Jaisalmer Photos/patawa haveli1.jpeg'),
  gadisarLake: toBase64('public/images/jaisalmer/Jaisalmer Photos/gadisar.JPG'),
  jaisalmerFort: toBase64('public/images/jaisalmer/Jaisalmer Photos/jaisalmer fort.JPG'),
  badaBagh: toBase64('public/images/jaisalmer/Jaisalmer Photos/bada bagh.jpeg'),
  laxminathJi: toBase64('public/images/jaisalmer/Jaisalmer Photos/laxmi nath ji 1.jpeg'),
  samDunes: toBase64('public/images/jaisalmer/Jaisalmer Photos/desertsam1.JPG'),
  laxminathHero: toBase64('public/assets/laxminath-hero.jpg'),
};

console.log('Building 8-page HTML template...');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Shri Radha Vallabh Yatra — Official Company Profile</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Noto+Serif+Devanagari:wght@400;600;700&display=swap');

    @page {
      size: A4 portrait;
      margin: 0;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      background-color: #06080C;
      color: #F5EDE0;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.45;
      font-size: 11px;
    }

    .font-serif {
      font-family: 'Cinzel', 'Playfair Display', Georgia, serif;
    }

    .font-devanagari {
      font-family: 'Noto Serif Devanagari', Georgia, serif;
    }

    /* Page container */
    .page {
      width: 210mm;
      height: 297mm;
      max-height: 297mm;
      position: relative;
      overflow: hidden;
      page-break-after: always;
      page-break-inside: avoid;
      background: #070A0F;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 14mm 16mm 12mm 16mm;
    }

    /* Page 1 (Cover) override */
    .page.cover {
      padding: 0;
      background: #05070A;
      display: block;
    }

    /* Header & Footer */
    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(201, 162, 74, 0.3);
      padding-bottom: 3.5mm;
      margin-bottom: 5mm;
    }

    .page-header .brand {
      display: flex;
      align-items: center;
      gap: 3mm;
    }

    .page-header .brand img {
      width: 6.5mm;
      height: 6.5mm;
      border-radius: 50%;
      border: 1px solid #C9A24A;
    }

    .page-header .brand-title {
      font-family: 'Cinzel', serif;
      font-size: 8.5pt;
      font-weight: 700;
      letter-spacing: 0.18em;
      color: #F5EDE0;
    }

    .page-header .brand-sub {
      font-size: 6.5pt;
      font-weight: 600;
      letter-spacing: 0.22em;
      color: #C9A24A;
      text-transform: uppercase;
    }

    .page-header .section-tag {
      font-size: 7pt;
      font-weight: 700;
      letter-spacing: 0.22em;
      color: #E5C378;
      text-transform: uppercase;
      background: rgba(201, 162, 74, 0.12);
      border: 1px solid rgba(201, 162, 74, 0.35);
      padding: 1.5mm 3.5mm;
      border-radius: 20px;
    }

    .page-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid rgba(201, 162, 74, 0.25);
      padding-top: 3mm;
      font-size: 7pt;
      color: rgba(245, 237, 224, 0.6);
      letter-spacing: 0.08em;
    }

    .page-footer .page-number {
      font-family: 'Cinzel', serif;
      font-weight: 700;
      color: #C9A24A;
      letter-spacing: 0.15em;
    }

    /* Common Card & Typography Elements */
    h1.page-title {
      font-family: 'Cinzel', serif;
      font-size: 19pt;
      font-weight: 700;
      color: #F8F0E4;
      line-height: 1.15;
      letter-spacing: 0.04em;
      margin-bottom: 1.5mm;
    }

    p.page-subtitle {
      font-size: 8.5pt;
      color: #C9A24A;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 4mm;
    }

    .card {
      background: rgba(15, 20, 29, 0.78);
      border: 1px solid rgba(201, 162, 74, 0.28);
      border-radius: 10px;
      padding: 4mm 4.5mm;
    }

    .gold-accent {
      color: #C9A24A;
    }

    .badge {
      display: inline-block;
      font-size: 6.5pt;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #070A0F;
      background: #C9A24A;
      padding: 1mm 2.8mm;
      border-radius: 4px;
    }

    .badge-outline {
      display: inline-block;
      font-size: 6.5pt;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #D8B982;
      border: 1px solid rgba(201, 162, 74, 0.4);
      background: rgba(201, 162, 74, 0.08);
      padding: 0.8mm 2.2mm;
      border-radius: 4px;
    }

    /* Page Content Grid helpers */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4mm;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 3.5mm;
    }

    .grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3mm;
    }

    .grid-5 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 2.2mm;
    }

    /* Page 1 (Cover) Custom Styles */
    .cover-container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 16mm 18mm;
    }

    .cover-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.36;
      filter: saturate(1.1) brightness(0.7);
      z-index: 1;
    }

    .cover-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(6,9,14,0.92) 0%, rgba(6,9,14,0.65) 45%, rgba(6,9,14,0.96) 100%);
      z-index: 2;
    }

    .cover-border {
      position: absolute;
      top: 8mm;
      left: 8mm;
      right: 8mm;
      bottom: 8mm;
      border: 1px solid rgba(201, 162, 74, 0.35);
      border-radius: 8px;
      pointer-events: none;
      z-index: 3;
    }

    .cover-inner-border {
      position: absolute;
      top: 10mm;
      left: 10mm;
      right: 10mm;
      bottom: 10mm;
      border: 1px solid rgba(201, 162, 74, 0.15);
      border-radius: 6px;
      pointer-events: none;
      z-index: 3;
    }

    .cover-content {
      position: relative;
      z-index: 4;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .cover-logo-seal {
      display: flex;
      align-items: center;
      gap: 4mm;
    }

    .cover-logo-seal img {
      width: 14mm;
      height: 14mm;
      border-radius: 50%;
      border: 2px solid #C9A24A;
      box-shadow: 0 0 20px rgba(201, 162, 74, 0.35);
    }

    .cover-hero-box {
      margin-top: 10mm;
      margin-bottom: 8mm;
    }

    .cover-hero-title {
      font-family: 'Cinzel', serif;
      font-size: 27pt;
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: 0.06em;
      color: #FFFFFF;
      text-shadow: 0 4px 18px rgba(0,0,0,0.8);
    }

    .cover-hero-sub {
      font-family: 'Cinzel', serif;
      font-size: 11pt;
      font-weight: 600;
      letter-spacing: 0.28em;
      color: #E5C378;
      text-transform: uppercase;
      margin-top: 3mm;
      margin-bottom: 4.5mm;
    }

    .cover-tagline-quote {
      font-style: italic;
      font-size: 10.5pt;
      color: rgba(245, 237, 224, 0.88);
      font-weight: 300;
      border-left: 2.5px solid #C9A24A;
      padding-left: 4mm;
      margin-bottom: 3.5mm;
    }

    .cover-hindi {
      font-family: 'Noto Serif Devanagari', serif;
      font-size: 11pt;
      color: #E5C378;
      font-weight: 600;
      letter-spacing: 0.05em;
    }

    .cover-cards-strip {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      gap: 4mm;
      background: rgba(10, 14, 22, 0.82);
      border: 1px solid rgba(201, 162, 74, 0.4);
      border-radius: 10px;
      padding: 5mm 6mm;
      backdrop-filter: blur(10px);
    }

    .cover-spec-item {
      display: flex;
      flex-direction: column;
      gap: 1mm;
    }

    .cover-spec-label {
      font-size: 6.5pt;
      font-weight: 700;
      letter-spacing: 0.18em;
      color: #C9A24A;
      text-transform: uppercase;
    }

    .cover-spec-val {
      font-size: 8.5pt;
      color: #F8F0E4;
      font-weight: 500;
    }

    /* Page 2: About Specifics */
    .leader-card {
      display: grid;
      grid-template-columns: 34mm 1fr;
      gap: 4mm;
      background: rgba(15, 20, 29, 0.85);
      border: 1px solid rgba(201, 162, 74, 0.32);
      border-radius: 10px;
      padding: 3.5mm;
      align-items: center;
    }

    .leader-card img {
      width: 100%;
      height: 38mm;
      object-fit: cover;
      object-position: top center;
      border-radius: 8px;
      border: 1px solid rgba(201, 162, 74, 0.45);
    }

    .metric-box {
      background: rgba(15, 20, 29, 0.7);
      border: 1px solid rgba(201, 162, 74, 0.25);
      border-radius: 8px;
      padding: 3mm 3.5mm;
      text-align: center;
    }

    .metric-val {
      font-family: 'Cinzel', serif;
      font-size: 15pt;
      font-weight: 700;
      color: #E5C378;
      line-height: 1;
      margin-bottom: 1mm;
    }

    .metric-lbl {
      font-size: 6.5pt;
      font-weight: 600;
      color: rgba(245, 237, 224, 0.75);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      line-height: 1.25;
    }

    /* Section Highlights */
    .pillar-box {
      display: flex;
      gap: 3mm;
      background: rgba(13, 17, 25, 0.65);
      border: 1px solid rgba(201, 162, 74, 0.2);
      border-radius: 8px;
      padding: 3mm 3.5mm;
    }

    .pillar-num {
      width: 6mm;
      height: 6mm;
      border-radius: 50%;
      background: rgba(201, 162, 74, 0.15);
      border: 1px solid #C9A24A;
      color: #E5C378;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Cinzel', serif;
      font-size: 7pt;
      font-weight: 700;
      flex-shrink: 0;
    }

    /* Service Cards (Page 3) */
    .service-card {
      background: rgba(15, 20, 30, 0.85);
      border: 1px solid rgba(201, 162, 74, 0.3);
      border-radius: 10px;
      padding: 4mm 4.5mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .service-card-header {
      display: flex;
      align-items: center;
      gap: 2.5mm;
      margin-bottom: 2mm;
      border-bottom: 1px solid rgba(201, 162, 74, 0.18);
      padding-bottom: 2mm;
    }

    .service-card-title {
      font-family: 'Cinzel', serif;
      font-size: 9.5pt;
      font-weight: 700;
      color: #E5C378;
      letter-spacing: 0.05em;
    }

    .service-list {
      list-style: none;
      margin-top: 1.5mm;
    }

    .service-list li {
      font-size: 7.5pt;
      color: rgba(245, 237, 224, 0.85);
      margin-bottom: 1.2mm;
      display: flex;
      align-items: flex-start;
      gap: 1.8mm;
      line-height: 1.35;
    }

    .service-list li::before {
      content: "✦";
      color: #C9A24A;
      font-size: 6pt;
      margin-top: 0.5mm;
      flex-shrink: 0;
    }

    /* Packages Grid (Page 4) */
    .package-card {
      background: rgba(14, 19, 28, 0.88);
      border: 1px solid rgba(201, 162, 74, 0.32);
      border-radius: 9px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .package-img-wrap {
      height: 27mm;
      position: relative;
      overflow: hidden;
    }

    .package-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .package-tag {
      position: absolute;
      top: 2mm;
      right: 2mm;
      background: rgba(7, 10, 15, 0.88);
      border: 1px solid rgba(201, 162, 74, 0.4);
      color: #E5C378;
      font-size: 6pt;
      font-weight: 700;
      letter-spacing: 0.12em;
      padding: 0.8mm 2mm;
      border-radius: 4px;
    }

    .package-body {
      padding: 3mm 3.5mm;
      display: flex;
      flex-direction: column;
      gap: 1.8mm;
      flex: 1;
    }

    .package-title {
      font-family: 'Cinzel', serif;
      font-size: 9pt;
      font-weight: 700;
      color: #F8F0E4;
      line-height: 1.2;
    }

    .package-meta {
      display: flex;
      justify-content: space-between;
      font-size: 6.8pt;
      color: #C9A24A;
      font-weight: 600;
      border-bottom: 1px solid rgba(201, 162, 74, 0.15);
      padding-bottom: 1.2mm;
    }

    /* Vehicle Table / Cards (Page 5) */
    .vehicle-card {
      background: rgba(15, 20, 30, 0.82);
      border: 1px solid rgba(201, 162, 74, 0.28);
      border-radius: 8px;
      padding: 3.5mm 4mm;
      display: flex;
      flex-direction: column;
      gap: 1.8mm;
    }

    .vehicle-cat {
      font-family: 'Cinzel', serif;
      font-size: 9.5pt;
      font-weight: 700;
      color: #E5C378;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .vehicle-models {
      font-size: 7.2pt;
      color: rgba(245, 237, 224, 0.7);
      font-style: italic;
    }

    .vehicle-spec-row {
      display: flex;
      gap: 3mm;
      font-size: 7.2pt;
      border-top: 1px solid rgba(201, 162, 74, 0.15);
      padding-top: 1.5mm;
    }

    .vehicle-spec-col strong {
      color: #E5C378;
    }

    /* Destinations Grid (Page 6) */
    .dest-card {
      background: rgba(14, 19, 28, 0.8);
      border: 1px solid rgba(201, 162, 74, 0.25);
      border-radius: 8px;
      padding: 3mm 3.5mm;
    }

    .dest-card-title {
      font-family: 'Cinzel', serif;
      font-size: 8.5pt;
      font-weight: 700;
      color: #E5C378;
      margin-bottom: 1mm;
    }

    /* B2B Points (Page 7) */
    .b2b-card {
      background: rgba(15, 20, 30, 0.85);
      border: 1px solid rgba(201, 162, 74, 0.3);
      border-radius: 8px;
      padding: 3.5mm 4mm;
    }

    .b2b-card-title {
      font-family: 'Cinzel', serif;
      font-size: 9pt;
      font-weight: 700;
      color: #E5C378;
      margin-bottom: 1.5mm;
      display: flex;
      align-items: center;
      gap: 2mm;
    }

    /* Page 8 Contact Directory */
    .contact-grid-cell {
      background: rgba(15, 20, 30, 0.85);
      border: 1px solid rgba(201, 162, 74, 0.3);
      border-radius: 8px;
      padding: 3.5mm 4mm;
      display: flex;
      flex-direction: column;
      gap: 1.2mm;
    }

    .contact-lbl {
      font-size: 6.5pt;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: #C9A24A;
      text-transform: uppercase;
    }

    .contact-val {
      font-size: 8.5pt;
      color: #F8F0E4;
      font-weight: 600;
    }

    .cta-banner {
      background: linear-gradient(135deg, rgba(201, 162, 74, 0.18) 0%, rgba(13, 18, 26, 0.95) 100%);
      border: 1.5px solid #C9A24A;
      border-radius: 10px;
      padding: 5mm 6mm;
      text-align: center;
    }

    .cta-title {
      font-family: 'Cinzel', serif;
      font-size: 13pt;
      font-weight: 700;
      color: #F8F0E4;
      letter-spacing: 0.06em;
      margin-bottom: 1.5mm;
    }
  </style>
</head>
<body>

  <!-- ========================================================================= -->
  <!-- PAGE 1: COVER                                                             -->
  <!-- ========================================================================= -->
  <section class="page cover">
    <div class="cover-container">
      <img src="${IMAGES.coverHero}" alt="Jaisalmer Sandstone Heritage" class="cover-bg" />
      <div class="cover-overlay"></div>
      <div class="cover-border"></div>
      <div class="cover-inner-border"></div>

      <div class="cover-content">
        <!-- Top Strip -->
        <div class="cover-logo-seal">
          <img src="${IMAGES.logo}" alt="Shri Radha Vallabh Emblem" />
          <div>
            <div style="font-family:'Cinzel',serif; font-size:11pt; font-weight:800; letter-spacing:0.2em; color:#F8F0E4;">
              SHRI RADHA VALLABH
            </div>
            <div style="font-size:7pt; font-weight:700; letter-spacing:0.25em; color:#C9A24A; text-transform:uppercase;">
              Heritage · Journeys · Hospitality
            </div>
          </div>
        </div>

        <!-- Main Cover Headline -->
        <div class="cover-hero-box">
          <div style="display:inline-block; margin-bottom:3.5mm;">
            <span class="badge" style="letter-spacing:0.22em; font-size:7pt; padding:1.2mm 3.5mm;">
              OFFICIAL CORPORATE PROFILE &amp; B2B CAPABILITY DECK
            </span>
          </div>
          <h1 class="cover-hero-title">
            SHRI RADHA VALLABH<br/>YATRA
          </h1>
          <div class="cover-hero-sub">
            Tours • Travel • Transportation • Desert Experiences
          </div>
          <p class="cover-tagline-quote">
            "Journeys rooted in tradition. Designed for today."
          </p>
          <div class="cover-hindi">
            आस्था से अनुभव तक।
          </div>
        </div>

        <!-- Bottom Credentials Strip -->
        <div>
          <div class="cover-cards-strip">
            <div class="cover-spec-item">
              <span class="cover-spec-label">Operational Headquarters &amp; Locality</span>
              <span class="cover-spec-val">Vyasa Para, On Fort, Jaisalmer, Rajasthan, India</span>
              <span style="font-size:6.8pt; color:#C8BFB0; margin-top:0.5mm;">
                Specialist Ground Handling for Jaisalmer, Desert Camps, &amp; Major Rajasthan Circuits
              </span>
            </div>
            <div class="cover-spec-item" style="border-left:1px solid rgba(201,162,74,0.3); padding-left:4mm;">
              <span class="cover-spec-label">Portfolio &amp; Editions</span>
              <span class="cover-spec-val">2026 – 2027 Destination Profile</span>
              <span style="font-size:6.8pt; color:#E5C378; margin-top:0.5mm;">
                OTA Onboarding • DMC • B2B Agent • Corporate
              </span>
            </div>
          </div>
          <div style="margin-top:3.5mm; display:flex; justify-content:space-between; font-size:6.8pt; color:rgba(245,237,224,0.6); letter-spacing:0.12em; text-transform:uppercase;">
            <span>Verified Client Source-of-Truth</span>
            <span>Founder-Led • 7+ Generations in Jaisalmer</span>
            <span>Direct WhatsApp: +91 79760 15517</span>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- ========================================================================= -->
  <!-- PAGE 2: ABOUT THE COMPANY                                                 -->
  <!-- ========================================================================= -->
  <section class="page">
    <div class="page-header">
      <div class="brand">
        <img src="${IMAGES.logo}" alt="Logo" />
        <div>
          <div class="brand-title">SHRI RADHA VALLABH YATRA</div>
          <div class="brand-sub">Rooted in Tradition • Designed for Today</div>
        </div>
      </div>
      <div class="section-tag">01 / Corporate Overview</div>
    </div>

    <div>
      <h1 class="page-title">Rooted in the Thar. Guided by Responsibility.</h1>
      <p class="page-subtitle">A heritage tour, desert hospitality, and mobility specialist based in Jaisalmer</p>

      <!-- Intro narrative -->
      <div class="card" style="margin-bottom:4mm; background:rgba(18,24,35,0.7);">
        <p style="font-size:8.2pt; line-height:1.55; color:rgba(245,237,224,0.92);">
          Founded in <strong style="color:#E5C378;">2007 in Jaisalmer</strong>, Shri Radha Vallabh Yatra operates on a foundational philosophy: travel across Rajasthan and sacred Indian routes should be executed with personal responsibility, dignified hospitality, and unwavering safety. The business grew from a multi-generational family tradition of organizing local journeys and sacred pilgrimages into a specialized destination management service spanning bespoke tours, desert camps, and private chauffeur mobility.
        </p>
      </div>

      <!-- Founders Grid -->
      <div class="grid-2" style="margin-bottom:4mm;">
        <!-- Ashish Vyas -->
        <div class="leader-card">
          <img src="${IMAGES.ashishVyas}" alt="Ashish Vyas" />
          <div>
            <span class="badge" style="font-size:5.8pt; padding:0.6mm 2mm; margin-bottom:1mm;">Founder &amp; Operations Lead</span>
            <div style="font-family:'Cinzel',serif; font-size:10.5pt; font-weight:700; color:#F8F0E4; margin-top:0.5mm;">Ashish Vyas</div>
            <div style="font-size:6.8pt; color:#C9A24A; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:1.5mm;">Native of Jaisalmer · 7+ Generations</div>
            <p style="font-size:7.2pt; line-height:1.42; color:rgba(245,237,224,0.8);">
              Belonging to a family rooted in the Golden City for seven generations, Ashish brings 20+ years of active field experience in desert itineraries, living fort coordination, and long-distance pilgrimages. His operational ethos was forged on the ground, notably leading yatris during the 2013 Kedarnath Himalayan events, instilling an uncompromising protocol for route planning, health awareness, and calm traveler care.
            </p>
          </div>
        </div>

        <!-- Jeet Vyas & Family Background -->
        <div class="leader-card">
          <img src="${IMAGES.jeetVyas}" alt="Yuvraj Jeet Vyas" />
          <div>
            <span class="badge" style="font-size:5.8pt; padding:0.6mm 2mm; margin-bottom:1mm;">Operations &amp; Digital Relations</span>
            <div style="font-family:'Cinzel',serif; font-size:10.5pt; font-weight:700; color:#F8F0E4; margin-top:0.5mm;">Yuvraj “Jeet” Vyas</div>
            <div style="font-size:6.8pt; color:#C9A24A; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:1.5mm;">Next-Generation Operations</div>
            <p style="font-size:7.2pt; line-height:1.42; color:rgba(245,237,224,0.8);">
              Representing the family's next generation, Jeet spearheads digital communication, OTA coordination, travel agent outreach, and fast WhatsApp response times, while actively assisting in field coordination. The Vyas family's presence in Jaisalmer also encompasses <em>Shingar Collection</em>, anchoring the company's local integrity and multi-decade civic trust.
            </p>
          </div>
        </div>
      </div>

      <!-- Metrics Row -->
      <div class="grid-4" style="margin-bottom:4mm;">
        <div class="metric-box">
          <div class="metric-val">2007</div>
          <div class="metric-lbl">Year Established<br/>in Jaisalmer</div>
        </div>
        <div class="metric-box">
          <div class="metric-val">7+ Gens</div>
          <div class="metric-lbl">Rooted Heritage<br/>in Thar Region</div>
        </div>
        <div class="metric-box">
          <div class="metric-val">20+ Yrs</div>
          <div class="metric-lbl">Travel &amp; Pilgrimage<br/>Coordination Mastery</div>
        </div>
        <div class="metric-box">
          <div class="metric-val">50+</div>
          <div class="metric-lbl">Major Sacred Yatras<br/>Successfully Guided</div>
        </div>
      </div>

      <!-- Core Commitments -->
      <div class="grid-3">
        <div class="pillar-box">
          <div class="pillar-num">1</div>
          <div>
            <strong style="color:#E5C378; font-size:7.8pt; display:block; margin-bottom:0.5mm;">Personal Touch &amp; Dignity</strong>
            <p style="font-size:7pt; color:rgba(245,237,224,0.75); line-height:1.35;">
              Every traveler and group receives tailored pacing, dedicated assistance for senior family members, and direct human coordination.
            </p>
          </div>
        </div>
        <div class="pillar-box">
          <div class="pillar-num">2</div>
          <div>
            <strong style="color:#E5C378; font-size:7.8pt; display:block; margin-bottom:0.5mm;">Living Local Network</strong>
            <p style="font-size:7pt; color:rgba(245,237,224,0.75); line-height:1.35;">
              Longstanding ties with fort havelis, desert glamping camps, local artisans, and trusted highway drivers across Western Rajasthan.
            </p>
          </div>
        </div>
        <div class="pillar-box">
          <div class="pillar-num">3</div>
          <div>
            <strong style="color:#E5C378; font-size:7.8pt; display:block; margin-bottom:0.5mm;">Safety &amp; Sattvik Dining</strong>
            <p style="font-size:7pt; color:rgba(245,237,224,0.75); line-height:1.35;">
              Clean, sanitized chauffeur vehicles, vetted properties, and curated pure vegetarian, Jain, and mild sattvik dining arrangements.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>SHRI RADHA VALLABH YATRA • Jaisalmer, Rajasthan</span>
      <span>Official Company Profile &amp; B2B Capability Document</span>
      <span class="page-number">02 / 08</span>
    </div>
  </section>


  <!-- ========================================================================= -->
  <!-- PAGE 3: OUR SERVICES                                                      -->
  <!-- ========================================================================= -->
  <section class="page">
    <div class="page-header">
      <div class="brand">
        <img src="${IMAGES.logo}" alt="Logo" />
        <div>
          <div class="brand-title">SHRI RADHA VALLABH YATRA</div>
          <div class="brand-sub">Comprehensive Service Portfolio</div>
        </div>
      </div>
      <div class="section-tag">02 / Services Ecosystem</div>
    </div>

    <div>
      <h1 class="page-title">Our Service Ecosystem</h1>
      <p class="page-subtitle">End-to-End Travel Management, Desert Experiences &amp; Ground Mobility</p>

      <!-- 4 Service Pillars Grid -->
      <div class="grid-2" style="gap:4mm; margin-bottom:4mm;">
        
        <!-- Service 1 -->
        <div class="service-card">
          <div>
            <div class="service-card-header">
              <span style="font-size:11pt; color:#C9A24A;">🏰</span>
              <div class="service-card-title">Tour &amp; Travel Management</div>
            </div>
            <p style="font-size:7.2pt; color:rgba(245,237,224,0.78); margin-bottom:2mm; line-height:1.4;">
              Handcrafted itineraries providing authentic cultural immersion, architectural exploration, and sacred darshans across Rajasthan.
            </p>
            <ul class="service-list">
              <li><strong>5 Jaisalmer 3N/4D Tiers:</strong> Gorbandh (Basic), Jharokha (Standard), Morchan (Deluxe), Leheriya (Super Deluxe), and Maharawal (Executive).</li>
              <li><strong>Audience Tailoring:</strong> Dedicated itineraries for Couples, Families, Groups/Corporate, and Solo/Bachelor travelers.</li>
              <li><strong>Thar Soul Sunset Safari:</strong> Dedicated 1-day desert immersion (village visit, chai, camel trek, sunset).</li>
              <li><strong>Rajasthan Intercity Circuits:</strong> Seamless circuits linking Jodhpur, Bikaner, Jaipur, and Udaipur.</li>
              <li><strong>Sacred Pilgrimage Yatras:</strong> Complete logistical coordination with senior-friendly care (Char Dham, Vrindavan, Ayodhya).</li>
            </ul>
          </div>
          <div style="margin-top:2mm; padding-top:1.5mm; border-top:1px solid rgba(201,162,74,0.15); display:flex; justify-content:space-between; align-items:center;">
            <span class="badge-outline">Tailored Pacing</span>
            <span style="font-size:6.5pt; color:#C9A24A;">Private &amp; Group departures</span>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="service-card">
          <div>
            <div class="service-card-header">
              <span style="font-size:11pt; color:#C9A24A;">🐪</span>
              <div class="service-card-title">Thar Desert &amp; Safari Experiences</div>
            </div>
            <p style="font-size:7.2pt; color:rgba(245,237,224,0.78); margin-bottom:2mm; line-height:1.4;">
              Authentic Thar desert adventures coordinated with respectful local handlers and verified desert camp partners.
            </p>
            <ul class="service-list">
              <li><strong>Camel Safari:</strong> Traditional camel caravans across the sweeping dunes of Sam and Khuri during golden hour.</li>
              <li><strong>Jeep Desert Safari &amp; Dune Bashing:</strong> Coordinated 4×4 desert excursions driven by experienced drivers.</li>
              <li><strong>Desert Luxury Glamping:</strong> Swiss-style luxury canvas tents with modern en-suite baths and amenities.</li>
              <li><strong>Rajasthani Cultural Evenings:</strong> Live Manganiyar vocalists, Khartal beats, and dynamic Kalbelia folk dance.</li>
              <li><strong>Dark Sky Stargazing:</strong> Unobstructed open-sky viewing away from urban glare in the deep desert.</li>
            </ul>
          </div>
          <div style="margin-top:2mm; padding-top:1.5mm; border-top:1px solid rgba(201,162,74,0.15); display:flex; justify-content:space-between; align-items:center;">
            <span class="badge-outline">Sam &amp; Khuri Dunes</span>
            <span style="font-size:6.5pt; color:#C9A24A;">Boutique Tented Hospitality</span>
          </div>
        </div>

        <!-- Service 3 -->
        <div class="service-card">
          <div>
            <div class="service-card-header">
              <span style="font-size:11pt; color:#C9A24A;">🚘</span>
              <div class="service-card-title">Transportation &amp; Fleet Logistics</div>
            </div>
            <p style="font-size:7.2pt; color:rgba(245,237,224,0.78); margin-bottom:2mm; line-height:1.4;">
              A comprehensive category of sanitized, chauffeur-driven vehicles catering to solo travelers, families, and tour groups.
            </p>
            <ul class="service-list">
              <li><strong>Sedans &amp; Compact Cars:</strong> Swift Dzire / Etios for couples and individual executives.</li>
              <li><strong>Premium SUVs:</strong> Toyota Innova / Crysta / Ertiga for outstation desert highways and joint families.</li>
              <li><strong>Tempo Travellers:</strong> 12, 17, and 26-seater AC configurations for group comfort and luggage capacity.</li>
              <li><strong>Mini Buses &amp; Coaches:</strong> 27 to 45-seater luxury coaches for corporate and pilgrim delegations.</li>
              <li><strong>Experienced Highway Chauffeurs:</strong> Courteous drivers thoroughly familiar with desert highway routes.</li>
            </ul>
          </div>
          <div style="margin-top:2mm; padding-top:1.5mm; border-top:1px solid rgba(201,162,74,0.15); display:flex; justify-content:space-between; align-items:center;">
            <span class="badge-outline">Verified Fleet</span>
            <span style="font-size:6.5pt; color:#C9A24A;">All Rajasthan Circuits</span>
          </div>
        </div>

        <!-- Service 4 -->
        <div class="service-card">
          <div>
            <div class="service-card-header">
              <span style="font-size:11pt; color:#C9A24A;">✈️</span>
              <div class="service-card-title">Transfers &amp; Ground Logistics</div>
            </div>
            <p style="font-size:7.2pt; color:rgba(245,237,224,0.78); margin-bottom:2mm; line-height:1.4;">
              Punctual, dedicated arrival and departure management eliminating airport and railway station transit friction.
            </p>
            <ul class="service-list">
              <li><strong>Airport Transfers:</strong> Coordinated pickups and drops at Jaisalmer Airport (JSA) and Jodhpur Airport (JDH).</li>
              <li><strong>Railway Station Meet &amp; Assist:</strong> Platform-side reception at Jaisalmer Railway Station (JSM) with porter care.</li>
              <li><strong>Intercity Outstation Transfers:</strong> Direct chauffeur connections between Jaisalmer, Jodhpur, Bikaner, and Jaipur.</li>
              <li><strong>Local Sightseeing Charters:</strong> Flexible hourly or full-day vehicle hire with local cultural drivers.</li>
              <li><strong>Senior Citizen Transit Care:</strong> Assistance right up to accessible gates with minimal walking strain.</li>
            </ul>
          </div>
          <div style="margin-top:2mm; padding-top:1.5mm; border-top:1px solid rgba(201,162,74,0.15); display:flex; justify-content:space-between; align-items:center;">
            <span class="badge-outline">Punctual &amp; Monitored</span>
            <span style="font-size:6.5pt; color:#C9A24A;">24×7 Local Dispatch</span>
          </div>
        </div>

      </div>

      <!-- Visual Strip -->
      <div class="grid-3" style="gap:3.5mm;">
        <div style="height:23mm; border-radius:8px; overflow:hidden; border:1px solid rgba(201,162,74,0.3); position:relative;">
          <img src="${IMAGES.camelSafari}" alt="Camel Safari" style="width:100%; height:100%; object-fit:cover;" />
          <span style="position:absolute; bottom:1.5mm; left:2mm; font-size:6.5pt; font-weight:700; color:#F8F0E4; background:rgba(0,0,0,0.7); padding:0.5mm 1.8mm; border-radius:3px;">Thar Camel Caravans</span>
        </div>
        <div style="height:23mm; border-radius:8px; overflow:hidden; border:1px solid rgba(201,162,74,0.3); position:relative;">
          <img src="${IMAGES.desertCamp}" alt="Desert Camp" style="width:100%; height:100%; object-fit:cover;" />
          <span style="position:absolute; bottom:1.5mm; left:2mm; font-size:6.5pt; font-weight:700; color:#F8F0E4; background:rgba(0,0,0,0.7); padding:0.5mm 1.8mm; border-radius:3px;">Luxury Desert Glamping</span>
        </div>
        <div style="height:23mm; border-radius:8px; overflow:hidden; border:1px solid rgba(201,162,74,0.3); position:relative;">
          <img src="${IMAGES.culturalEvening}" alt="Cultural Evening" style="width:100%; height:100%; object-fit:cover;" />
          <span style="position:absolute; bottom:1.5mm; left:2mm; font-size:6.5pt; font-weight:700; color:#F8F0E4; background:rgba(0,0,0,0.7); padding:0.5mm 1.8mm; border-radius:3px;">Live Folk Performances</span>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>SHRI RADHA VALLABH YATRA • Jaisalmer, Rajasthan</span>
      <span>Official Company Profile &amp; B2B Capability Document</span>
      <span class="page-number">03 / 08</span>
    </div>
  </section>


  <!-- ========================================================================= -->
  <!-- PAGE 4: TOUR PACKAGES & EXPERIENCES                                       -->
  <!-- ========================================================================= -->
  <section class="page">
    <div class="page-header">
      <div class="brand">
        <img src="${IMAGES.logo}" alt="Logo" />
        <div>
          <div class="brand-title">SHRI RADHA VALLABH YATRA</div>
          <div class="brand-sub">5-Tier Package Architecture &amp; Desert Experiences</div>
        </div>
      </div>
      <div class="section-tag">03 / Tour Packages</div>
    </div>

    <div>
      <h1 class="page-title">Curated Packages &amp; Desert Experiences</h1>
      <p class="page-subtitle" style="margin-bottom:2.5mm;">5 Verified Package Tiers (3N/4D) • Confirmed Master Itinerary • Dedicated Thar Soul Sunset Safari</p>

      <!-- SECTION A: 5 SIGNATURE PACKAGE TIERS -->
      <div style="margin-bottom:2.5mm;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5mm; border-bottom:1px solid rgba(201,162,74,0.25); padding-bottom:1mm;">
          <strong style="font-family:'Cinzel',serif; font-size:8.2pt; color:#E5C378; letter-spacing:0.08em; text-transform:uppercase;">
            The 5 Signature Package Tiers (3 Nights / 4 Days)
          </strong>
          <span style="font-size:6pt; color:#C9A24A; font-weight:600; text-transform:uppercase; letter-spacing:0.1em;">
            Handcrafted for Couple • Family • Group • Solo
          </span>
        </div>

        <div class="grid-5">
          <!-- Tier 1: Gorbandh -->
          <div class="package-card" style="padding:2.5mm 2.2mm; gap:1.2mm; border-top:2px solid #8A723D;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="badge" style="font-size:5pt; padding:0.6mm 1.6mm; background:rgba(201,162,74,0.2); color:#E5C378; border:1px solid rgba(201,162,74,0.4);">BASIC</span>
              <span class="font-devanagari" style="font-size:6.5pt; color:#C9A24A; font-weight:600;">गोरबंद</span>
            </div>
            <div style="font-family:'Cinzel',serif; font-size:8pt; font-weight:700; color:#F8F0E4; line-height:1.1;">Gorbandh</div>
            <div style="font-size:5.5pt; color:#C9A24A; font-weight:600; text-transform:uppercase; letter-spacing:0.04em; line-height:1.15;">
              Essential Golden City &amp; Thar
            </div>
            <div style="font-size:5.8pt; color:rgba(245,237,224,0.8); line-height:1.28; margin-top:0.5mm; border-top:1px solid rgba(201,162,74,0.15); padding-top:1mm;">
              • Station / Airport transfers<br/>
              • Sonar Qila &amp; Gadisar circuit<br/>
              • Sam dunes excursion &amp; camp<br/>
              • Bada Bagh &amp; Lodhurva trail
            </div>
            <div style="margin-top:auto; padding-top:1mm; border-top:1px solid rgba(201,162,74,0.15); display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:5.2pt; color:#E5C378; font-weight:700;">3N / 4D</span>
              <span style="font-size:5.2pt; color:rgba(245,237,224,0.6);">Price on Request</span>
            </div>
          </div>

          <!-- Tier 2: Jharokha -->
          <div class="package-card" style="padding:2.5mm 2.2mm; gap:1.2mm; border-top:2px solid #A88742;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="badge" style="font-size:5pt; padding:0.6mm 1.6mm; background:rgba(201,162,74,0.2); color:#E5C378; border:1px solid rgba(201,162,74,0.4);">STANDARD</span>
              <span class="font-devanagari" style="font-size:6.5pt; color:#C9A24A; font-weight:600;">झरोखा</span>
            </div>
            <div style="font-family:'Cinzel',serif; font-size:8pt; font-weight:700; color:#F8F0E4; line-height:1.1;">Jharokha</div>
            <div style="font-size:5.5pt; color:#C9A24A; font-weight:600; text-transform:uppercase; letter-spacing:0.04em; line-height:1.15;">
              Heritage Perspective &amp; Comfort
            </div>
            <div style="font-size:5.8pt; color:rgba(245,237,224,0.8); line-height:1.28; margin-top:0.5mm; border-top:1px solid rgba(201,162,74,0.15); padding-top:1mm;">
              • Sanitized private transit<br/>
              • Guided Fort &amp; Royal Havelis<br/>
              • Sam dunes sunset &amp; folk night<br/>
              • Royal cenotaphs &amp; Lodhurva
            </div>
            <div style="margin-top:auto; padding-top:1mm; border-top:1px solid rgba(201,162,74,0.15); display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:5.2pt; color:#E5C378; font-weight:700;">3N / 4D</span>
              <span style="font-size:5.2pt; color:rgba(245,237,224,0.6);">Price on Request</span>
            </div>
          </div>

          <!-- Tier 3: Morchan -->
          <div class="package-card" style="padding:2.5mm 2.2mm; gap:1.2mm; border-top:2px solid #C9A24A;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="badge" style="font-size:5pt; padding:0.6mm 1.6mm; background:rgba(201,162,74,0.25); color:#E5C378; border:1px solid rgba(201,162,74,0.5);">DELUXE</span>
              <span class="font-devanagari" style="font-size:6.5pt; color:#C9A24A; font-weight:600;">मोरछन</span>
            </div>
            <div style="font-family:'Cinzel',serif; font-size:8pt; font-weight:700; color:#F8F0E4; line-height:1.1;">Morchan</div>
            <div style="font-size:5.5pt; color:#C9A24A; font-weight:600; text-transform:uppercase; letter-spacing:0.04em; line-height:1.15;">
              Rajputana Elegance &amp; Magic
            </div>
            <div style="font-size:5.8pt; color:rgba(245,237,224,0.8); line-height:1.28; margin-top:0.5mm; border-top:1px solid rgba(201,162,74,0.15); padding-top:1mm;">
              • Dedicated arrival escort<br/>
              • Comprehensive city trail<br/>
              • Sam camp + Kalbelia dinner<br/>
              • Lodhurva Jain temple visit
            </div>
            <div style="margin-top:auto; padding-top:1mm; border-top:1px solid rgba(201,162,74,0.15); display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:5.2pt; color:#E5C378; font-weight:700;">3N / 4D</span>
              <span style="font-size:5.2pt; color:rgba(245,237,224,0.6);">Price on Request</span>
            </div>
          </div>

          <!-- Tier 4: Leheriya -->
          <div class="package-card" style="padding:2.5mm 2.2mm; gap:1.2mm; border-top:2px solid #E5C378;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="badge" style="font-size:5pt; padding:0.6mm 1.6mm; background:rgba(201,162,74,0.3); color:#FFF; border:1px solid #C9A24A;">SUPER DELUXE</span>
              <span class="font-devanagari" style="font-size:6.5pt; color:#E5C378; font-weight:600;">लहरिया</span>
            </div>
            <div style="font-family:'Cinzel',serif; font-size:8pt; font-weight:700; color:#F8F0E4; line-height:1.1;">Leheriya</div>
            <div style="font-size:5.5pt; color:#C9A24A; font-weight:600; text-transform:uppercase; letter-spacing:0.04em; line-height:1.15;">
              Distinguished Desert Luxury
            </div>
            <div style="font-size:5.8pt; color:rgba(245,237,224,0.8); line-height:1.28; margin-top:0.5mm; border-top:1px solid rgba(201,162,74,0.15); padding-top:1mm;">
              • Priority private AC SUV<br/>
              • Fort palace &amp; secret havelis<br/>
              • Luxury glamping under stars<br/>
              • Kuldhara &amp; Amar Sagar
            </div>
            <div style="margin-top:auto; padding-top:1mm; border-top:1px solid rgba(201,162,74,0.15); display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:5.2pt; color:#E5C378; font-weight:700;">3N / 4D</span>
              <span style="font-size:5.2pt; color:rgba(245,237,224,0.6);">Price on Request</span>
            </div>
          </div>

          <!-- Tier 5: Maharawal -->
          <div class="package-card" style="padding:2.5mm 2.2mm; gap:1.2mm; border-top:2px solid #F5EDE0; background:rgba(22, 28, 40, 0.95);">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="badge" style="font-size:5pt; padding:0.6mm 1.6mm; background:#C9A24A; color:#070A0F; font-weight:800;">EXECUTIVE</span>
              <span class="font-devanagari" style="font-size:6.5pt; color:#F5EDE0; font-weight:700;">महारावल</span>
            </div>
            <div style="font-family:'Cinzel',serif; font-size:8pt; font-weight:800; color:#F8F0E4; line-height:1.1;">Maharawal</div>
            <div style="font-size:5.5pt; color:#E5C378; font-weight:600; text-transform:uppercase; letter-spacing:0.04em; line-height:1.15;">
              Sovereign Royal Hospitality
            </div>
            <div style="font-size:5.8pt; color:rgba(245,237,224,0.85); line-height:1.28; margin-top:0.5mm; border-top:1px solid rgba(201,162,74,0.15); padding-top:1mm;">
              • Executive VIP coordination<br/>
              • Curated fort &amp; temple darshan<br/>
              • Premium desert stay &amp; folk gala<br/>
              • Bespoke pacing &amp; escort
            </div>
            <div style="margin-top:auto; padding-top:1mm; border-top:1px solid rgba(201,162,74,0.15); display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:5.2pt; color:#E5C378; font-weight:700;">3N / 4D</span>
              <span style="font-size:5.2pt; color:rgba(245,237,224,0.6);">Price on Request</span>
            </div>
          </div>
        </div>
      </div>

      <!-- SECTION B: CONFIRMED 4-DAY / 3-NIGHT MASTER ITINERARY -->
      <div style="margin-bottom:2.5mm;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5mm; border-bottom:1px solid rgba(201,162,74,0.25); padding-bottom:1mm;">
          <strong style="font-family:'Cinzel',serif; font-size:8.2pt; color:#E5C378; letter-spacing:0.08em; text-transform:uppercase;">
            Confirmed 4-Day / 3-Night Master Itinerary (Source of Truth)
          </strong>
          <span style="font-size:6pt; color:#C9A24A; font-weight:600; text-transform:uppercase; letter-spacing:0.1em;">
            Citadel • Kuldhara • Sam Sand Dunes • Lodhurva
          </span>
        </div>

        <div class="grid-4" style="gap:2.2mm;">
          <!-- Day 1 -->
          <div class="card" style="padding:2.5mm 2.8mm; display:flex; flex-direction:column; gap:1.2mm;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="badge" style="font-size:5.2pt; padding:0.6mm 1.8mm;">DAY 01</span>
              <span style="font-size:5.5pt; color:#C9A24A; font-weight:600;">Golden City Citadel</span>
            </div>
            <div style="font-family:'Cinzel',serif; font-size:7.5pt; font-weight:700; color:#F8F0E4; line-height:1.15;">
              Welcome to the Golden City
            </div>
            <div style="font-size:5.6pt; color:#D8B982; font-weight:600; line-height:1.2;">
              Station/Airport → Fort → Havelis → Gadisar
            </div>
            <div style="font-size:5.8pt; color:rgba(245,237,224,0.8); line-height:1.3; margin-top:0.5mm;">
              Arrival pickup, living Sonar Qila bastions, Raj Mahal, sacred Jain Temples, carved Patwon &amp; Nathmal Havelis, and sunset at Gadisar Lake.
            </div>
            <div style="margin-top:auto; font-size:5.5pt; color:#E5C378; background:rgba(201,162,74,0.1); padding:0.8mm 1.5mm; border-radius:3px; border-left:2px solid #C9A24A;">
              <strong>Overnight:</strong> Heritage Hotel, Jaisalmer
            </div>
          </div>

          <!-- Day 2 -->
          <div class="card" style="padding:2.5mm 2.8mm; display:flex; flex-direction:column; gap:1.2mm;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="badge" style="font-size:5.2pt; padding:0.6mm 1.8mm;">DAY 02</span>
              <span style="font-size:5.5pt; color:#C9A24A; font-weight:600;">Thar Desert Immersion</span>
            </div>
            <div style="font-family:'Cinzel',serif; font-size:7.5pt; font-weight:700; color:#F8F0E4; line-height:1.15;">
              Desert Adventure &amp; Dunes
            </div>
            <div style="font-size:5.6pt; color:#D8B982; font-weight:600; line-height:1.2;">
              Jaisalmer → Kuldhara → Sam Dunes → Camp
            </div>
            <div style="font-size:5.8pt; color:rgba(245,237,224,0.8); line-height:1.3; margin-top:0.5mm;">
              Drive through 13th-century abandoned Kuldhara village to Sam Sand Dunes. Camel/Jeep safari across sand ridges, sunset, campfire, Kalbelia folk &amp; dinner.
            </div>
            <div style="margin-top:auto; font-size:5.5pt; color:#E5C378; background:rgba(201,162,74,0.1); padding:0.8mm 1.5mm; border-radius:3px; border-left:2px solid #C9A24A;">
              <strong>Overnight:</strong> Luxury Desert Camp, Sam
            </div>
          </div>

          <!-- Day 3 -->
          <div class="card" style="padding:2.5mm 2.8mm; display:flex; flex-direction:column; gap:1.2mm;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="badge" style="font-size:5.2pt; padding:0.6mm 1.8mm;">DAY 03</span>
              <span style="font-size:5.5pt; color:#C9A24A; font-weight:600;">Royal Oasis &amp; Dynasties</span>
            </div>
            <div style="font-family:'Cinzel',serif; font-size:7.5pt; font-weight:700; color:#F8F0E4; line-height:1.15;">
              Desert to Golden Heritage
            </div>
            <div style="font-size:5.6pt; color:#D8B982; font-weight:600; line-height:1.2;">
              Sam Dunes → Bada Bagh → Lodhurva → City
            </div>
            <div style="font-size:5.8pt; color:rgba(245,237,224,0.8); line-height:1.3; margin-top:0.5mm;">
              Dawn over dunes, dramatic royal cenotaphs at Bada Bagh, Amar Sagar historic garden &amp; temple, ancient Lodhurva capital &amp; Kalpavriksha. Free evening in bazaars.
            </div>
            <div style="margin-top:auto; font-size:5.5pt; color:#E5C378; background:rgba(201,162,74,0.1); padding:0.8mm 1.5mm; border-radius:3px; border-left:2px solid #C9A24A;">
              <strong>Overnight:</strong> Heritage Hotel, Jaisalmer
            </div>
          </div>

          <!-- Day 4 -->
          <div class="card" style="padding:2.5mm 2.8mm; display:flex; flex-direction:column; gap:1.2mm;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="badge" style="font-size:5.2pt; padding:0.6mm 1.8mm;">DAY 04</span>
              <span style="font-size:5.5pt; color:#C9A24A; font-weight:600;">Farewell Departure</span>
            </div>
            <div style="font-family:'Cinzel',serif; font-size:7.5pt; font-weight:700; color:#F8F0E4; line-height:1.15;">
              Farewell Jaisalmer
            </div>
            <div style="font-size:5.6pt; color:#D8B982; font-weight:600; line-height:1.2;">
              Morning Bazaar → Station / Airport Drop
            </div>
            <div style="font-size:5.8pt; color:rgba(245,237,224,0.8); line-height:1.3; margin-top:0.5mm;">
              Relaxed breakfast, stroll through stone alleys for authentic textiles, mirror-work handicrafts &amp; souvenirs. Timely transfer to Jaisalmer Station or Airport.
            </div>
            <div style="margin-top:auto; font-size:5.5pt; color:#E5C378; background:rgba(201,162,74,0.1); padding:0.8mm 1.5mm; border-radius:3px; border-left:2px solid #C9A24A;">
              <strong>Departure:</strong> Station / Airport Transfer
            </div>
          </div>
        </div>
      </div>

      <!-- SECTION C: DEDICATED THAR SOUL SAFARI + AUDIENCE CUSTOMIZATION & COMMERCIALS -->
      <div style="display:grid; grid-template-columns:1.25fr 0.95fr; gap:2.5mm;">
        <!-- Left: Thar Soul Sunset Safari -->
        <div class="card" style="padding:2.8mm 3.2mm; border:1px solid rgba(201,162,74,0.45); background:linear-gradient(135deg, rgba(16,22,34,0.92) 0%, rgba(10,14,22,0.95) 100%);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5mm; border-bottom:1px solid rgba(201,162,74,0.25); padding-bottom:1mm;">
            <div>
              <span style="font-family:'Cinzel',serif; font-size:8.2pt; font-weight:700; color:#E5C378; letter-spacing:0.06em;">THAR SOUL — 1 DAY / SUNSET SAFARI</span>
              <span class="font-devanagari" style="font-size:6.8pt; color:#C9A24A; margin-left:1.5mm;">थार सोल — सूर्यास्त सफारी</span>
            </div>
            <span class="badge-outline" style="font-size:5.2pt;">2:30 PM – 9:30 PM (~7 HRS)</span>
          </div>
          <p style="font-size:6pt; color:rgba(245,237,224,0.82); line-height:1.3; margin-bottom:1.5mm;">
            A pure, unhurried sunset safari through untouched Thar dunes—ideal for travelers wanting genuine desert serenity without overnight camp stay.
          </p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5mm;">
            <div style="background:rgba(201,162,74,0.08); border-left:2px solid #C9A24A; padding:1mm 1.8mm; border-radius:3px;">
              <strong style="font-size:5.8pt; color:#E5C378; display:block;">1. Desert Village Visit</strong>
              <span style="font-size:5.4pt; color:rgba(245,237,224,0.75);">Mud-thatch homes &amp; rural lifestyle</span>
            </div>
            <div style="background:rgba(201,162,74,0.08); border-left:2px solid #C9A24A; padding:1mm 1.8mm; border-radius:3px;">
              <strong style="font-size:5.8pt; color:#E5C378; display:block;">2. Cardamom Chai &amp; Snacks</strong>
              <span style="font-size:5.4pt; color:rgba(245,237,224,0.75);">Fresh local tea in tranquil desert breeze</span>
            </div>
            <div style="background:rgba(201,162,74,0.08); border-left:2px solid #C9A24A; padding:1mm 1.8mm; border-radius:3px;">
              <strong style="font-size:5.8pt; color:#E5C378; display:block;">3. Camel Safari across Dunes</strong>
              <span style="font-size:5.4pt; color:rgba(245,237,224,0.75);">Quiet riding over golden sand crests</span>
            </div>
            <div style="background:rgba(201,162,74,0.08); border-left:2px solid #C9A24A; padding:1mm 1.8mm; border-radius:3px;">
              <strong style="font-size:5.8pt; color:#E5C378; display:block;">4. Thar Sunset Panorama</strong>
              <span style="font-size:5.4pt; color:rgba(245,237,224,0.75);">Spectacular golden-hour desert colors</span>
            </div>
          </div>
        </div>

        <!-- Right: Audience Profiles & Commercial Transparency -->
        <div class="card" style="padding:2.8mm 3.2mm; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="font-family:'Cinzel',serif; font-size:7.8pt; font-weight:700; color:#E5C378; letter-spacing:0.06em; margin-bottom:1.5mm; border-bottom:1px solid rgba(201,162,74,0.25); padding-bottom:1mm;">
              AUDIENCE PROFILES &amp; B2B TARIFF POLICY
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.2mm; margin-bottom:1.5mm;">
              <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(201,162,74,0.2); border-radius:3px; padding:1mm 1.5mm;">
                <strong style="font-size:5.8pt; color:#C9A24A;">Couple / युगल</strong>
                <div style="font-size:5.2pt; color:rgba(245,237,224,0.7);">Romantic pacing, privacy &amp; sunset views</div>
              </div>
              <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(201,162,74,0.2); border-radius:3px; padding:1mm 1.5mm;">
                <strong style="font-size:5.8pt; color:#C9A24A;">Family / परिवार</strong>
                <div style="font-size:5.2pt; color:rgba(245,237,224,0.7);">Multi-gen safety, comfort &amp; heritage</div>
              </div>
              <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(201,162,74,0.2); border-radius:3px; padding:1mm 1.5mm;">
                <strong style="font-size:5.8pt; color:#C9A24A;">Group / समूह</strong>
                <div style="font-size:5.2pt; color:rgba(245,237,224,0.7);">Corporate teams, alumni &amp; convoys</div>
              </div>
              <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(201,162,74,0.2); border-radius:3px; padding:1mm 1.5mm;">
                <strong style="font-size:5.8pt; color:#C9A24A;">Solo / एकल</strong>
                <div style="font-size:5.2pt; color:rgba(245,237,224,0.7);">Flexible pace, culture &amp; photography</div>
              </div>
            </div>
          </div>
          <div style="background:rgba(201,162,74,0.06); border:1px dashed rgba(201,162,74,0.35); border-radius:4px; padding:1.2mm 2mm; display:flex; justify-content:space-between; align-items:center;">
            <div style="font-size:5.4pt; color:rgba(245,237,224,0.85); line-height:1.25;">
              <strong style="color:#E5C378;">Strict Commercial Policy:</strong> All itineraries priced on request. Zero fabricated tariffs. Confidential B2B Net Rates provided for registered OTAs &amp; DMCs.
            </div>
            <span class="badge" style="font-size:4.8pt; padding:0.6mm 1.6mm; flex-shrink:0; margin-left:1.5mm;">B2B RATES</span>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>SHRI RADHA VALLABH YATRA • Jaisalmer, Rajasthan</span>
      <span>Official Company Profile &amp; B2B Capability Document</span>
      <span class="page-number">04 / 08</span>
    </div>
  </section>


  <!-- ========================================================================= -->
  <!-- PAGE 5: TRANSPORTATION & MOBILITY                                         -->
  <!-- ========================================================================= -->
  <section class="page">
    <div class="page-header">
      <div class="brand">
        <img src="${IMAGES.logo}" alt="Logo" />
        <div>
          <div class="brand-title">SHRI RADHA VALLABH YATRA</div>
          <div class="brand-sub">Mobility &amp; Chauffeur Fleet</div>
        </div>
      </div>
      <div class="section-tag">04 / Fleet &amp; Logistics</div>
    </div>

    <div>
      <h1 class="page-title">Transportation &amp; Ground Mobility</h1>
      <p class="page-subtitle">Safe, Sanitized &amp; Chauffeur-Driven Travel Across Rajasthan</p>

      <div class="card" style="margin-bottom:4mm; background:rgba(18,24,35,0.7);">
        <p style="font-size:7.8pt; line-height:1.5; color:rgba(245,237,224,0.9);">
          Transportation is an essential cornerstone of the Shri Radha Vallabh Yatra service capability. We coordinate clean, air-conditioned, well-maintained vehicles driven by experienced, polite highway chauffeurs who possess deep knowledge of Rajasthan’s highway terrain, heritage city gateways, and desert approach routes.
        </p>
      </div>

      <!-- 4 Vehicle Categories Grid -->
      <div class="grid-2" style="gap:4mm; margin-bottom:4.5mm;">
        
        <!-- Category 1: Sedans -->
        <div class="vehicle-card">
          <div class="vehicle-cat">
            <span>Executive Sedans &amp; Compact Cars</span>
            <span style="font-size:7pt; color:#C9A24A;">1 – 3 Guests</span>
          </div>
          <div class="vehicle-models">Typical Models: Maruti Swift Dzire, Toyota Etios or equivalent</div>
          <p style="font-size:7.2pt; color:rgba(245,237,224,0.78); line-height:1.35;">
            Optimal for couples, solo travelers, and corporate executives requiring nimble transfers and city sightseeing.
          </p>
          <div class="vehicle-spec-row">
            <div class="vehicle-spec-col" style="flex:1;">
              <strong>Luggage:</strong> 2 Medium Bags
            </div>
            <div class="vehicle-spec-col" style="flex:1.5;">
              <strong>Ideal For:</strong> City tours &amp; airport/rail transfers
            </div>
          </div>
          <div style="font-size:6.8pt; color:rgba(245,237,224,0.65); line-height:1.3; border-top:1px solid rgba(201,162,74,0.12); padding-top:1.2mm;">
            Equipped with effective climate AC, mobile charging, and sanitized interiors.
          </div>
        </div>

        <!-- Category 2: SUVs -->
        <div class="vehicle-card">
          <div class="vehicle-cat">
            <span>Premium &amp; Executive SUVs</span>
            <span style="font-size:7pt; color:#C9A24A;">4 – 6 Guests</span>
          </div>
          <div class="vehicle-models">Typical Models: Toyota Innova, Innova Crysta, Maruti Ertiga</div>
          <p style="font-size:7.2pt; color:rgba(245,237,224,0.78); line-height:1.35;">
            The standard of choice for family vacations, small group circuits, and long-distance desert highway journeys.
          </p>
          <div class="vehicle-spec-row">
            <div class="vehicle-spec-col" style="flex:1;">
              <strong>Luggage:</strong> 4 – 5 Suitcases
            </div>
            <div class="vehicle-spec-col" style="flex:1.5;">
              <strong>Ideal For:</strong> Desert highway stretches &amp; family tours
            </div>
          </div>
          <div style="font-size:6.8pt; color:rgba(245,237,224,0.65); line-height:1.3; border-top:1px solid rgba(201,162,74,0.12); padding-top:1.2mm;">
            Elevated clearance, superior rear suspension comfort, dual climate AC, pushback seats.
          </div>
        </div>

        <!-- Category 3: Tempo Travellers -->
        <div class="vehicle-card">
          <div class="vehicle-cat">
            <span>Tempo Travellers</span>
            <span style="font-size:7pt; color:#C9A24A;">7 – 20 Guests</span>
          </div>
          <div class="vehicle-models">Configurations: 12-Seater, 17-Seater, 26-Seater (Standard &amp; Luxury)</div>
          <p style="font-size:7.2pt; color:rgba(245,237,224,0.78); line-height:1.35;">
            Designed for joint families, pilgrimage groups, friend circles, and corporate offsite delegations.
          </p>
          <div class="vehicle-spec-row">
            <div class="vehicle-spec-col" style="flex:1;">
              <strong>Luggage:</strong> Dedicated Rear/Roof Bay
            </div>
            <div class="vehicle-spec-col" style="flex:1.5;">
              <strong>Ideal For:</strong> Small groups &amp; multigenerational families
            </div>
          </div>
          <div style="font-size:6.8pt; color:rgba(245,237,224,0.65); line-height:1.3; border-top:1px solid rgba(201,162,74,0.12); padding-top:1.2mm;">
            High-roof aisle clearance, individual AC louvers, reclining seats, PA sound setup.
          </div>
        </div>

        <!-- Category 4: Mini Buses & Coaches -->
        <div class="vehicle-card">
          <div class="vehicle-cat">
            <span>Mini Buses &amp; Luxury Coaches</span>
            <span style="font-size:7pt; color:#C9A24A;">20 – 45 Guests</span>
          </div>
          <div class="vehicle-models">Configurations: 27-Seater, 35-Seater, 45-Seater Tourist Coaches</div>
          <p style="font-size:7.2pt; color:rgba(245,237,224,0.78); line-height:1.35;">
            Engineered for large travel groups, institutional groups, conference delegations, and major yatras.
          </p>
          <div class="vehicle-spec-row">
            <div class="vehicle-spec-col" style="flex:1;">
              <strong>Luggage:</strong> Underfloor Luggage Hold
            </div>
            <div class="vehicle-spec-col" style="flex:1.5;">
              <strong>Ideal For:</strong> Large tour groups &amp; corporate events
            </div>
          </div>
          <div style="font-size:6.8pt; color:rgba(245,237,224,0.65); line-height:1.3; border-top:1px solid rgba(201,162,74,0.12); padding-top:1.2mm;">
            Air suspension on select coaches, panoramic windows, verified two-driver crew for long routes.
          </div>
        </div>

      </div>

      <!-- Transportation Standards -->
      <div class="card">
        <div style="font-family:'Cinzel',serif; font-size:8.8pt; font-weight:700; color:#E5C378; margin-bottom:2mm; border-bottom:1px solid rgba(201,162,74,0.2); padding-bottom:1.5mm;">
          Our Fleet Operation Commitments:
        </div>
        <div class="grid-3" style="gap:3.5mm;">
          <div>
            <strong style="color:#C9A24A; font-size:7.5pt; display:block; margin-bottom:0.5mm;">Vetted Local Highway Chauffeurs</strong>
            <p style="font-size:7pt; color:rgba(245,237,224,0.75); line-height:1.35;">
              Polite, non-smoking, uniformed drivers with clean commercial licenses and thorough route familiarity.
            </p>
          </div>
          <div>
            <strong style="color:#C9A24A; font-size:7.5pt; display:block; margin-bottom:0.5mm;">Transparent Billing &amp; Clear Accounting</strong>
            <p style="font-size:7pt; color:rgba(245,237,224,0.75); line-height:1.35;">
              Zero hidden charges. Fuel, state road taxes, interstate permits, tolls, and driver allowances clearly specified.
            </p>
          </div>
          <div>
            <strong style="color:#C9A24A; font-size:7.5pt; display:block; margin-bottom:0.5mm;">24×7 Route Monitoring &amp; Support</strong>
            <p style="font-size:7pt; color:rgba(245,237,224,0.75); line-height:1.35;">
              Active dispatch tracking ensures proactive coordination during train/flight delays or seasonal desert weather.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>SHRI RADHA VALLABH YATRA • Jaisalmer, Rajasthan</span>
      <span>Official Company Profile &amp; B2B Capability Document</span>
      <span class="page-number">05 / 08</span>
    </div>
  </section>


  <!-- ========================================================================= -->
  <!-- PAGE 6: DESTINATIONS & RAJASTHAN EXPERTISE                                -->
  <!-- ========================================================================= -->
  <section class="page">
    <div class="page-header">
      <div class="brand">
        <img src="${IMAGES.logo}" alt="Logo" />
        <div>
          <div class="brand-title">SHRI RADHA VALLABH YATRA</div>
          <div class="brand-sub">Destination Knowledge &amp; Gateways</div>
        </div>
      </div>
      <div class="section-tag">05 / Regional Expertise</div>
    </div>

    <div>
      <h1 class="page-title">Destinations &amp; Rajasthan Expertise</h1>
      <p class="page-subtitle">Unmatched Local Focus on Jaisalmer &amp; Operational Presence in Rajasthan</p>

      <!-- Jaisalmer Core Highlights Grid -->
      <div style="margin-bottom:3.5mm;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2mm;">
          <span style="font-family:'Cinzel',serif; font-size:9pt; font-weight:700; color:#E5C378;">
            JAISALMER: The Golden Citadel &amp; Thar Desert
          </span>
          <span class="badge" style="font-size:6pt;">Primary Operational Hub</span>
        </div>
        <div class="grid-3" style="gap:3mm;">
          <div class="dest-card">
            <div class="dest-card-title">Sonar Qella (Living Fort)</div>
            <p style="font-size:6.8pt; color:rgba(245,237,224,0.8); line-height:1.35;">
              Founded 1156 AD atop Trikuta Hill. 99 bastions, royal palaces, living residential alleys, and panoramic desert vistas.
            </p>
          </div>
          <div class="dest-card">
            <div class="dest-card-title">Carved Merchant Havelis</div>
            <p style="font-size:6.8pt; color:rgba(245,237,224,0.8); line-height:1.35;">
              Patwon Ki Haveli (1805 AD stone filigree), Salim Singh Ki Haveli (peacock balconies), and Nathmal Ki Haveli carvings.
            </p>
          </div>
          <div class="dest-card">
            <div class="dest-card-title">Sacred Temples &amp; Shrines</div>
            <p style="font-size:6.8pt; color:rgba(245,237,224,0.8); line-height:1.35;">
              Shri Laxminath Ji Temple (ruler deity of Jaisalmer), 12th–15th century Jain temples, and Lodurva sacred tirth.
            </p>
          </div>
          <div class="dest-card">
            <div class="dest-card-title">Gadisar Lake &amp; Chhatris</div>
            <p style="font-size:6.8pt; color:rgba(245,237,224,0.8); line-height:1.35;">
              14th-century sacred rainwater reservoir encircled by intricately carved domed cenotaphs, ghats, and Tillon Ki Pol.
            </p>
          </div>
          <div class="dest-card">
            <div class="dest-card-title">Sam &amp; Khuri Sand Dunes</div>
            <p style="font-size:6.8pt; color:rgba(245,237,224,0.8); line-height:1.35;">
              Expansive golden sand dunes bordering Desert National Park. Camel safaris, 4×4 dune bashing, and tranquil stargazing.
            </p>
          </div>
          <div class="dest-card">
            <div class="dest-card-title">Bada Bagh &amp; Kuldhara</div>
            <p style="font-size:6.8pt; color:rgba(245,237,224,0.8); line-height:1.35;">
              Hilltop royal Maharawal cenotaphs overlooking the desert, alongside the 13th-century abandoned Paliwal heritage village.
            </p>
          </div>
        </div>
      </div>

      <!-- Greater Rajasthan Regional Network -->
      <div class="card" style="margin-bottom:3.5mm;">
        <div style="font-family:'Cinzel',serif; font-size:8.8pt; font-weight:700; color:#E5C378; margin-bottom:2mm; border-bottom:1px solid rgba(201,162,74,0.2); padding-bottom:1.2mm;">
          Intercity Circuits &amp; Rajasthan Gateways Supported:
        </div>
        <div class="grid-4" style="gap:2.8mm;">
          <div>
            <strong style="color:#C9A24A; font-size:7.5pt; display:block;">JODHPUR (280 km)</strong>
            <span style="font-size:6.8pt; color:rgba(245,237,224,0.75); line-height:1.3; display:block;">
              Mehrangarh Fort, Jaswant Thada, year-round airport hub linking desert transit.
            </span>
          </div>
          <div>
            <strong style="color:#C9A24A; font-size:7.5pt; display:block;">BIKANER (330 km)</strong>
            <span style="font-size:6.8pt; color:rgba(245,237,224,0.75); line-height:1.3; display:block;">
              Junagarh Fort, Karni Mata Shrine, Camel Breeding Farm, desert architecture.
            </span>
          </div>
          <div>
            <strong style="color:#C9A24A; font-size:7.5pt; display:block;">JAIPUR (560 km)</strong>
            <span style="font-size:6.8pt; color:rgba(245,237,224,0.75); line-height:1.3; display:block;">
              Pink City, Amer Fort, City Palace; state capital and major airline entry gateway.
            </span>
          </div>
          <div>
            <strong style="color:#C9A24A; font-size:7.5pt; display:block;">UDAIPUR (490 km)</strong>
            <span style="font-size:6.8pt; color:rgba(245,237,224,0.75); line-height:1.3; display:block;">
              City of Lakes, royal palace retreats, seamless connection to Thar desert circuits.
            </span>
          </div>
        </div>
      </div>

      <!-- 4 Image Showcase -->
      <div class="grid-4" style="gap:3mm;">
        <div style="height:28mm; border-radius:7px; overflow:hidden; border:1px solid rgba(201,162,74,0.3); position:relative;">
          <img src="${IMAGES.jaisalmerFort}" alt="Jaisalmer Fort" style="width:100%; height:100%; object-fit:cover;" />
          <span style="position:absolute; bottom:1.2mm; left:1.5mm; font-size:6.2pt; color:#fff; background:rgba(0,0,0,0.7); padding:0.4mm 1.5mm; border-radius:3px;">Sonar Qella Fort</span>
        </div>
        <div style="height:28mm; border-radius:7px; overflow:hidden; border:1px solid rgba(201,162,74,0.3); position:relative;">
          <img src="${IMAGES.badaBagh}" alt="Bada Bagh" style="width:100%; height:100%; object-fit:cover;" />
          <span style="position:absolute; bottom:1.2mm; left:1.5mm; font-size:6.2pt; color:#fff; background:rgba(0,0,0,0.7); padding:0.4mm 1.5mm; border-radius:3px;">Bada Bagh Cenotaphs</span>
        </div>
        <div style="height:28mm; border-radius:7px; overflow:hidden; border:1px solid rgba(201,162,74,0.3); position:relative;">
          <img src="${IMAGES.gadisarLake}" alt="Gadisar Lake" style="width:100%; height:100%; object-fit:cover;" />
          <span style="position:absolute; bottom:1.2mm; left:1.5mm; font-size:6.2pt; color:#fff; background:rgba(0,0,0,0.7); padding:0.4mm 1.5mm; border-radius:3px;">Gadisar Lake Chhatris</span>
        </div>
        <div style="height:28mm; border-radius:7px; overflow:hidden; border:1px solid rgba(201,162,74,0.3); position:relative;">
          <img src="${IMAGES.samDunes}" alt="Sam Dunes" style="width:100%; height:100%; object-fit:cover;" />
          <span style="position:absolute; bottom:1.2mm; left:1.5mm; font-size:6.2pt; color:#fff; background:rgba(0,0,0,0.7); padding:0.4mm 1.5mm; border-radius:3px;">Sam Sand Dunes</span>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>SHRI RADHA VALLABH YATRA • Jaisalmer, Rajasthan</span>
      <span>Official Company Profile &amp; B2B Capability Document</span>
      <span class="page-number">06 / 08</span>
    </div>
  </section>


  <!-- ========================================================================= -->
  <!-- PAGE 7: B2B PARTNERSHIPS                                                  -->
  <!-- ========================================================================= -->
  <section class="page">
    <div class="page-header">
      <div class="brand">
        <img src="${IMAGES.logo}" alt="Logo" />
        <div>
          <div class="brand-title">SHRI RADHA VALLABH YATRA</div>
          <div class="brand-sub">B2B Partner &amp; DMC Division</div>
        </div>
      </div>
      <div class="section-tag">06 / B2B Partnerships</div>
    </div>

    <div>
      <h1 class="page-title">Partner With Shri Radha Vallabh Yatra</h1>
      <p class="page-subtitle">Your Dedicated On-Ground Destination Management Partner in Western Rajasthan</p>

      <div class="card" style="margin-bottom:4mm; background:rgba(18,24,35,0.7);">
        <p style="font-size:7.8pt; line-height:1.5; color:rgba(245,237,224,0.92);">
          Shri Radha Vallabh Yatra serves as an established, dependable on-ground handling agent (DMC) for travel professionals across India and abroad. Operating directly from our Jaisalmer base, we provide seamless execution, verified accommodation inventory, sanitized fleet mobility, and 24×7 guest coordination, allowing our B2B partners to sell with complete confidence.
        </p>
      </div>

      <!-- Who We Partner With -->
      <div style="margin-bottom:4mm;">
        <span style="font-family:'Cinzel',serif; font-size:8.5pt; font-weight:700; color:#E5C378; display:block; margin-bottom:2mm;">
          Who We Collaborate With:
        </span>
        <div class="grid-3" style="gap:3.5mm;">
          <div class="b2b-card">
            <div class="b2b-card-title">
              <span>🌐</span> <span>Online Travel Platforms (OTAs)</span>
            </div>
            <p style="font-size:7.1pt; color:rgba(245,237,224,0.75); line-height:1.35;">
              Reliable local fulfillment for Jaisalmer day packages, desert safaris, glamping stays, and seamless railway/airport station transfers.
            </p>
          </div>
          <div class="b2b-card">
            <div class="b2b-card-title">
              <span>🤝</span> <span>Tour Operators &amp; Inbound DMCs</span>
            </div>
            <p style="font-size:7.1pt; color:rgba(245,237,224,0.75); line-height:1.35;">
              White-label ground handling in Western Rajasthan, priority check-ins, multilingual escort coordination, and authentic cultural touchpoints.
            </p>
          </div>
          <div class="b2b-card">
            <div class="b2b-card-title">
              <span>✈️</span> <span>Travel Agents &amp; Outbound Planners</span>
            </div>
            <p style="font-size:7.1pt; color:rgba(245,237,224,0.75); line-height:1.35;">
              Confidential B2B net rates, instant quotation turnaround, group pricing, and flexible payment arrangements for your retail clientele.
            </p>
          </div>
          <div class="b2b-card">
            <div class="b2b-card-title">
              <span>🏢</span> <span>Corporate &amp; MICE Organizers</span>
            </div>
            <p style="font-size:7.1pt; color:rgba(245,237,224,0.75); line-height:1.35;">
              Curated offsite retreats, private desert campfire gala evenings, dune team-building, and coordinated tempo traveller/coach logistics.
            </p>
          </div>
          <div class="b2b-card">
            <div class="b2b-card-title">
              <span>👥</span> <span>Group Travel Organizers</span>
            </div>
            <p style="font-size:7.1pt; color:rgba(245,237,224,0.75); line-height:1.35;">
              Dedicated handling for large family reunions, wedding guest mobility, pilgrimage groups, and educational study tours.
            </p>
          </div>
          <div class="b2b-card">
            <div class="b2b-card-title">
              <span>🛕</span> <span>Pilgrimage &amp; Sacred Yatras</span>
            </div>
            <p style="font-size:7.1pt; color:rgba(245,237,224,0.75); line-height:1.35;">
              Specialized unhurried pacing, ground-floor accessibility, priority shrine darshans, and pure vegetarian / sattvik catering coordination.
            </p>
          </div>
        </div>
      </div>

      <!-- B2B Support Services -->
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2mm; border-bottom:1px solid rgba(201,162,74,0.2); padding-bottom:1.5mm;">
          <strong style="font-family:'Cinzel',serif; font-size:8.8pt; color:#E5C378;">Dedicated B2B Support &amp; Operational Capabilities</strong>
          <span class="badge" style="font-size:6pt;">Partner Benefits</span>
        </div>
        <div class="grid-3" style="gap:3.5mm;">
          <div>
            <strong style="color:#C9A24A; font-size:7.5pt; display:block; margin-bottom:0.5mm;">Confidential B2B Net Rates</strong>
            <p style="font-size:7pt; color:rgba(245,237,224,0.75); line-height:1.35;">
              Direct on-ground contracting ensures competitive agent margins with zero intermediary markups.
            </p>
          </div>
          <div>
            <strong style="color:#C9A24A; font-size:7.5pt; display:block; margin-bottom:0.5mm;">Fast WhatsApp &amp; Email Quotes</strong>
            <p style="font-size:7pt; color:rgba(245,237,224,0.75); line-height:1.35;">
              Direct access to our operations desk ensures swift quotation and itinerary adjustments for your leads.
            </p>
          </div>
          <div>
            <strong style="color:#C9A24A; font-size:7.5pt; display:block; margin-bottom:0.5mm;">White-Label Coordination</strong>
            <p style="font-size:7pt; color:rgba(245,237,224,0.75); line-height:1.35;">
              We seamlessly represent your company name during airport pickups and local tour coordination upon request.
            </p>
          </div>
          <div>
            <strong style="color:#C9A24A; font-size:7.5pt; display:block; margin-bottom:0.5mm;">Verified Property Allotments</strong>
            <p style="font-size:7pt; color:rgba(245,237,224,0.75); line-height:1.35;">
              Handpicked heritage havelis and luxury Swiss desert camps audited personally for hygiene and service quality.
            </p>
          </div>
          <div>
            <strong style="color:#C9A24A; font-size:7.5pt; display:block; margin-bottom:0.5mm;">Single Point of Contact (SPOC)</strong>
            <p style="font-size:7pt; color:rgba(245,237,224,0.75); line-height:1.35;">
              A designated manager oversees your booking from pre-arrival verification to final departure drop-off.
            </p>
          </div>
          <div>
            <strong style="color:#C9A24A; font-size:7.5pt; display:block; margin-bottom:0.5mm;">24×7 Local Emergency Line</strong>
            <p style="font-size:7pt; color:rgba(245,237,224,0.75); line-height:1.35;">
              Real-time on-call support handles delayed train schedules, flight diversions, or medical emergencies smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>SHRI RADHA VALLABH YATRA • Jaisalmer, Rajasthan</span>
      <span>Official Company Profile &amp; B2B Capability Document</span>
      <span class="page-number">07 / 08</span>
    </div>
  </section>


  <!-- ========================================================================= -->
  <!-- PAGE 8: CONTACT & CALL TO ACTION                                          -->
  <!-- ========================================================================= -->
  <section class="page">
    <div class="page-header">
      <div class="brand">
        <img src="${IMAGES.logo}" alt="Logo" />
        <div>
          <div class="brand-title">SHRI RADHA VALLABH YATRA</div>
          <div class="brand-sub">Official Contact &amp; Directory</div>
        </div>
      </div>
      <div class="section-tag">07 / Connect With Us</div>
    </div>

    <div>
      <h1 class="page-title">Connect &amp; Collaborate</h1>
      <p class="page-subtitle">Plan Your Rajasthan Journey or Establish a B2B Partnership</p>

      <!-- Main CTA Box -->
      <div class="cta-banner" style="margin-bottom:4.5mm;">
        <div class="badge" style="margin-bottom:2mm; font-size:6.5pt;">PARTNERSHIP &amp; ENQUIRY DESK</div>
        <h2 class="cta-title">Plan Your Rajasthan Journey With Us</h2>
        <p style="font-size:8pt; color:rgba(245,237,224,0.85); max-width:140mm; margin:0 auto 3mm auto; line-height:1.45;">
          For Customized Tours • Chauffeur Transportation • Desert Glamping &amp; Safaris • B2B Contracting &amp; DMC Alliances
        </p>
        <div style="font-size:7.5pt; color:#E5C378; font-weight:600;">
          Direct WhatsApp / Call Line: <span style="color:#FFFFFF; font-size:9.5pt; font-family:'Cinzel',serif; margin-left:1.5mm;">+91 79760 15517</span>
          <span style="color:rgba(201,162,74,0.6); margin:0 2mm;">|</span>
          Email: <span style="color:#FFFFFF; font-size:8.5pt; font-family:'Plus Jakarta Sans',sans-serif;">shriradhavallabhtours@gmail.com</span>
        </div>
      </div>

      <!-- Corporate Directory Grid -->
      <div class="grid-2" style="gap:3.5mm; margin-bottom:4mm;">
        
        <div class="contact-grid-cell">
          <span class="contact-lbl">Official Brand Entity</span>
          <span class="contact-val">SHRI RADHA VALLABH YATRA</span>
          <span style="font-size:6.8pt; color:#C9A24A;">Operating also as <em>Shriradha Vallabh tours</em></span>
        </div>

        <div class="contact-grid-cell">
          <span class="contact-lbl">Operational Office &amp; Address (Confirmed)</span>
          <span class="contact-val" style="font-size:8.2pt;">Vyasa Para, On Fort, Jaisalmer, Rajasthan, India</span>
          <span style="font-size:6.8pt; color:rgba(245,237,224,0.7);">
            Located directly inside the UNESCO Living Fort of Jaisalmer
          </span>
        </div>

        <div class="contact-grid-cell">
          <span class="contact-lbl">Direct Phone &amp; WhatsApp (Confirmed)</span>
          <span class="contact-val" style="color:#25D366; font-size:9.5pt;">+91 79760 15517</span>
          <span style="font-size:6.8pt; color:rgba(245,237,224,0.7);">Instant messaging for B2B queries &amp; custom quotes</span>
        </div>

        <div class="contact-grid-cell">
          <span class="contact-lbl">Official Email Address (Confirmed)</span>
          <span class="contact-val" style="color:#E5C378; font-size:8.5pt;">shriradhavallabhtours@gmail.com</span>
          <span style="font-size:6.8pt; color:rgba(245,237,224,0.7);">Direct commercial correspondence, bookings &amp; contracting</span>
        </div>

        <div class="contact-grid-cell">
          <span class="contact-lbl">Operations &amp; Founder Contacts</span>
          <span class="contact-val" style="font-size:8.2pt;">
            Ashish Vyas <span style="font-size:7pt; color:#C9A24A;">(Founder &amp; Operations Lead)</span><br/>
            Yuvraj “Jeet” Vyas <span style="font-size:7pt; color:#C9A24A;">(Digital &amp; B2B Relations)</span>
          </span>
        </div>

        <div class="contact-grid-cell">
          <span class="contact-lbl">Digital Presence &amp; Google Maps</span>
          <span class="contact-val" style="font-size:8pt;">https://shriradhavallabh.com</span>
          <span style="font-size:6.8pt; color:rgba(245,237,224,0.7);">
            Google Maps: <em>Shriradha Vallabh tours</em> (26.9127521° N, 70.9118934° E)<br/>
            Instagram: @shri_radhavallabh2008
          </span>
        </div>

      </div>

      <!-- Information Required & Safety Compliance Notice -->
      <div class="card" style="background:rgba(12,16,24,0.85); border:1px solid rgba(201,162,74,0.25);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5mm;">
          <strong style="font-size:7.2pt; color:#E5C378; text-transform:uppercase; letter-spacing:0.1em;">
            Verification &amp; OTA/B2B Compliance Statement:
          </strong>
          <span class="badge-outline" style="font-size:5.8pt;">Audit Compliant</span>
        </div>
        <p style="font-size:6.8pt; color:rgba(245,237,224,0.75); line-height:1.45;">
          This official profile contains only authentic, factually verified business data established by the founders. Operational history, generational Jaisalmer roots, and vehicle mobility categories reflect genuine capacity. Commercial net tariffs, formal corporate agreements, and custom itineraries are provided confidentially to registered B2B partners, OTAs, and tour operators upon direct request.
        </p>
      </div>
    </div>

    <div class="page-footer">
      <span>SHRI RADHA VALLABH YATRA • Jaisalmer, Rajasthan</span>
      <span>Official Company Profile &amp; B2B Capability Document</span>
      <span class="page-number">08 / 08</span>
    </div>
  </section>

</body>
</html>
`;

const htmlFilePath = path.resolve(__dirname, 'SHRI_RADHA_VALLABH_COMPANY_PROFILE.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
console.log('Saved self-contained HTML to:', htmlFilePath);

async function generatePdf() {
  console.log('Launching browser to generate PDF...');
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });
  const page = await browser.newPage();
  
  // Set viewport to exact A4 pixel aspect ratio at high DPI
  await page.setViewportSize({ width: 1240, height: 1754 });

  console.log('Loading HTML file in browser...');
  await page.goto('file:///' + htmlFilePath.replace(/\\/g, '/'), {
    waitUntil: 'networkidle'
  });

  // Evaluate page count and ensure all webfonts and images are ready
  await page.evaluate(async () => {
    document.fonts.ready;
  });

  const pdfPath = path.resolve(__dirname, 'SHRI_RADHA_VALLABH_COMPANY_PROFILE.pdf');
  const rootPdfPath = path.resolve(__dirname, '..', 'SHRI_RADHA_VALLABH_COMPANY_PROFILE.pdf');

  console.log('Rendering high-fidelity A4 PDF...');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 }
  });

  // Also copy to root for easy user access
  fs.copyFileSync(pdfPath, rootPdfPath);

  await browser.close();
  console.log('✅ PDF generated successfully at:');
  console.log('  1.', pdfPath);
  console.log('  2.', rootPdfPath);
}

generatePdf().catch(err => {
  console.error('❌ Error generating PDF:', err);
  process.exit(1);
});
