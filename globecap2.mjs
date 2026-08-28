import { chromium } from 'playwright';
import fs from 'fs';
import { PNG } from 'pngjs';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1000, height: 900 } });
await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
await page.evaluate(() => { document.querySelectorAll('.reveal').forEach(e=>e.classList.add('is-visible')); });
// center orbit in viewport using scrollTo + getBoundingClientRect
await page.evaluate(() => { const o=document.querySelector('.company__orbit'); const b=o.getBoundingClientRect(); window.scrollTo(0, scrollY+b.top-20); });
await page.waitForTimeout(2500);
const box = await page.evaluate(() => { const r=document.querySelector('.company__orbit').getBoundingClientRect(); return {x:Math.max(0,r.x),y:Math.max(0,r.y),width:Math.min(r.width,1000-Math.max(0,r.x)),height:Math.min(r.height,900-Math.max(0,r.y))}; });
console.log('box', JSON.stringify(box));
const pngBuf = await page.screenshot({ clip: box });
fs.writeFileSync('globe.png', pngBuf);
const png = PNG.sync.read(fs.readFileSync('globe.png'));
const d=png.data; let blue=0,green=0,brown=0,white=0,dark=0,mid=0; const N=png.width*png.height; let rs=0,gss=0,bs=0;
for(let i=0;i<d.length;i+=4){const r=d[i],g=d[i+1],b=d[i+2];rs+=r;gss+=g;bs+=b;
  if(b>120&&b>r+30) blue++;
  else if(g>90&&g>=r&&g>=b) green++;
  else if(r>110&&g>70&&r>b+30) brown++;
  else if(r>200&&g>200&&b>200) white++;
  else if(r<25&&g<25&&b<35) dark++;
  else mid++;
}
console.log('GLOBE VISUAL HISTOGRAM:', JSON.stringify({dims:[png.width,png.height],total:N,blue,green,brown,white,dark,mid}));
console.log('AVERAGE COLOR:', [Math.round(rs/N),Math.round(gss/N),Math.round(bs/N)]);
await browser.close();
