import { chromium } from 'playwright';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 64, height: 64 } });
await page.goto('http://localhost:5173/favicon.png');
const stats = await page.evaluate(async () => {
  const img = document.querySelector('img');
  if (!img || !img.naturalWidth) return {err:'no img', w: img&&img.naturalWidth};
  const c = document.createElement('canvas'); c.width=img.naturalWidth; c.height=img.naturalHeight;
  const ctx=c.getContext('2d'); ctx.drawImage(img,0,0);
  const d=ctx.getImageData(0,0,c.width,c.height).data;
  const set=new Set(); let rs=0,gs=0,bs=0,n=0;
  for(let i=0;i<d.length;i+=4){set.add(d[i]+','+d[i+1]+','+d[i+2]+','+d[i+3]);rs+=d[i];gs+=d[i+1];bs+=d[i+2];n++;}
  return {dims:[img.naturalWidth,img.naturalHeight], avg:[Math.round(rs/n),Math.round(gs/n),Math.round(bs/n)], unique:set.size};
});
console.log('FAVICON STATS:', JSON.stringify(stats));
await browser.close();
