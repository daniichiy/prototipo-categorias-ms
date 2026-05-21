import { chromium } from 'playwright-core';

const URL = 'http://localhost:5173';

async function main() {
  // Tenta vários paths comuns de Chrome no Windows
  const candidates = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  ];
  const fs = await import('node:fs');
  const exe = candidates.find((p) => fs.existsSync(p));
  if (!exe) {
    console.error('No Chrome/Edge found in standard locations.');
    process.exit(2);
  }

  const browser = await chromium.launch({ executablePath: exe, headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 2200 } });
  const page = await context.newPage();

  console.log('Navigating /…');
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 20_000 });
  await page.waitForSelector('a[href^="/categoria/"]', { timeout: 10_000 });
  await page.screenshot({ path: './verify-home.png', fullPage: true });
  const titleHome = await page.title();
  const headlineHome = await page.locator('h2').first().innerText();
  const cardsCount = await page.locator('a[href^="/categoria/"]').count();

  console.log('Navigating /categoria/administracao-publica…');
  await page.goto(`${URL}/categoria/administracao-publica`, { waitUntil: 'networkidle', timeout: 20_000 });
  await page.waitForSelector('h1', { timeout: 10_000 });
  await page.screenshot({ path: './verify-category.png', fullPage: true });
  const titleCat = await page.locator('h1').first().innerText();
  const accordionCount = await page.locator('button[aria-expanded]').count();
  const firstSubcatExpanded = await page.locator('button[aria-expanded="true"]').count();
  const firstCardHref = await page.locator('a[target="_blank"]').first().getAttribute('href');

  console.log(JSON.stringify({
    home: { title: titleHome, headline: headlineHome, categoryCards: cardsCount },
    category: { headline: titleCat, accordions: accordionCount, openByDefault: firstSubcatExpanded, firstCardUrl: firstCardHref },
  }, null, 2));

  await browser.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
