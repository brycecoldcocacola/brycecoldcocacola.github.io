import { chromium } from 'playwright';
import fs from 'fs';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 440, height: 440 } });
// load the avatar directly
await page.goto('http://localhost:5173/src/assets/avatar.png');
await page.waitForTimeout(500);
await page.screenshot({ path: 'avatar-view.png' });
// Sample average color / variance to detect if it's a flat placeholder
const stats = await page.evaluate(async () => {
  const img = document.querySelector('img');
  if (!img) return null;
  const c = document.createElement('canvas'); c.width=img.naturalWidth; c.height=img.naturalHeight;
  const ctx=c.getContext('2d'); ctx.drawImage(img,0,0);
  const d=ctx.getImageData(0,0,c.width,c.height).data;
  let rs=0,gs=0,bs=0,n=0; const set=new Set();
  for(let i=0;i<d.length;i+=4){rs+=d[i];gs+=d[i+1];bs+=d[i+2];n++;set.add((d[i]>>4)+','+(d[i+1]>>4)+','+(d[i+2]>>4));}
  return {avg:[Math.round(rs/n),Math.round(gs/n),Math.round(bs/n)], uniqueColorsApprox:set.size};
});
console.log('AVATAR STATS:', JSON.stringify(stats));
await browser.close();
