import { chromium } from 'playwright';
const url = process.argv[2] || 'http://localhost:5173';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const errors = [];
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on('console', m => { if (m.type()==='error') errors.push('CONSOLE: '+m.text()); });
page.on('pageerror', e => errors.push('PAGEERROR: '+e.message));
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
await page.evaluate(() => { document.querySelectorAll('.reveal').forEach(e => e.classList.add('is-visible')); });
await page.waitForTimeout(500);

const data = await page.evaluate(() => {
  const out = {};
  // horizontal overflow
  out.docScrollW = document.documentElement.scrollWidth;
  out.winW = window.innerWidth;
  // sections and their heights
  out.sections = [...document.querySelectorAll('section, footer, header')].map(s => {
    const r = s.getBoundingClientRect();
    return { id: s.id||s.className, top: Math.round(r.top+scrollY), h: Math.round(r.height), w: Math.round(r.width) };
  });
  // find elements wider than viewport (overflow culprits)
  const vw = window.innerWidth;
  const vwides = [];
  document.querySelectorAll('body *').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.width > vw + 2 && r.height > 0 && getComputedStyle(el).position !== 'fixed') {
      vwides.push({ tag: el.tagName.toLowerCase(), cls: el.className.toString().slice(0,40), w: Math.round(r.width) });
    }
  });
  out.wides = [...new Set(vwides.map(v=>JSON.stringify(v)))].slice(0,20).map(s=>JSON.parse(s));
  // gap detection: vertical gaps between consecutive major blocks
  // check computed styles on a few key items
  const gs = sel => { const e=document.querySelector(sel); return e?getComputedStyle(e):null; };
  const bodyFont = gs('body');
  out.fonts = { body: bodyFont.fontFamily };
  // measure text contrast-ish
  out.bodyBg = bodyFont.backgroundColor;
  // avatar image natural size
  const img = document.querySelector('.hero__portrait-frame img');
  if (img) out.avatar = { natW: img.naturalWidth, natH: img.naturalHeight, dispW: Math.round(img.getBoundingClientRect().width), dispH: Math.round(img.getBoundingClientRect().height), complete: img.complete };
  return out;
});

console.log(JSON.stringify(data, null, 2));
console.log('\n--- ERRORS ---');
console.log(errors.length ? errors.join('\n') : 'none');
await browser.close();
