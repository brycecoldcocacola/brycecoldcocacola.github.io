import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import fs from 'node:fs';

const url = process.argv[2] || 'http://localhost:5173';
const outDir = process.argv[3] || '.';
const maxWidth = Number(process.argv[4] || 1100);

function downscale(buf, maxW) {
  const src = PNG.sync.read(buf);
  if (src.width <= maxW) return src;
  const ratio = maxW / src.width;
  const w = Math.round(src.width * ratio);
  const h = Math.round(src.height * ratio);
  const out = new PNG({ width: w, height: h });
  // Box-filter downscale.
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let r = 0, g = 0, b = 0, a = 0, n = 0;
      const sx0 = Math.floor(x / ratio), sx1 = Math.ceil(((x + 1) / ratio)) - 1;
      const sy0 = Math.floor(y / ratio), sy1 = Math.ceil(((y + 1) / ratio)) - 1;
      for (let sy = sy0; sy <= sy1; sy++) {
        for (let sx = sx0; sx <= sx1; sx++) {
          const p = (sy * src.width + sx) << 2;
          r += src.data[p]; g += src.data[p + 1]; b += src.data[p + 2]; a += src.data[p + 3];
          n++;
        }
      }
      const o = (y * w + x) << 2;
      out.data[o] = Math.round(r / n);
      out.data[o + 1] = Math.round(g / n);
      out.data[o + 2] = Math.round(b / n);
      out.data[o + 3] = Math.round(a / n);
    }
  }
  return out;
}

const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(1200);
await page.evaluate(() => { document.querySelectorAll('.reveal').forEach(e => e.classList.add('is-visible')); });
await page.waitForTimeout(4000);

const top = await page.screenshot();
fs.writeFileSync(outDir + '/shot-top.png', PNG.sync.write(downscale(top, maxWidth)));
const full = await page.screenshot({ fullPage: true });
fs.writeFileSync(outDir + '/shot-full.png', PNG.sync.write(downscale(full, maxWidth)));

await browser.close();
console.log('done');
