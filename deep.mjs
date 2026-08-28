import { chromium } from 'playwright';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
// ---- Globe color analysis ----
const page = await browser.newPage({ viewport: { width: 1000, height: 700 } });
await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
await page.evaluate(() => { document.querySelectorAll('.reveal').forEach(e=>e.classList.add('is-visible')); });
// scroll to the orbit block
await page.evaluate(() => { const o=document.querySelector('.company__orbit'); if(o) o.scrollIntoView(); });
await page.waitForTimeout(2500);
const globe = await page.evaluate(() => {
  const c = document.querySelector('.satellite-orbit canvas');
  if (!c) return {err:'no canvas'};
  const w=c.width,h=c.height; const tmp=document.createElement('canvas'); tmp.width=w; tmp.height=h;
  const ctx=tmp.getContext('2d'); ctx.drawImage(c,0,0);
  const d=ctx.getImageData(0,0,w,h).data;
  let blue=0,green=0,brown=0,white=0,dark=0,other=0; const n=d.length/4;
  const buckets={};
  for(let i=0;i<d.length;i+=4*97){ // sample
    const r=d[i],g=d[i+1],b=d[i+2];
    if(b>120&&b>r+30) blue++;
    else if(g>80&&g>r&&g>=b) green++;
    else if(r>90&&r>b&&g<b+30) brown++;
    else if(r>180&&g>180&&b>180) white++;
    else if(r<30&&g<30&&b<40) dark++;
    else other++;
  }
  return {w,h,total:Math.round(d.length/(4*97)),blue,green,brown,white,dark,other};
});
console.log('GLOBE:', JSON.stringify(globe));

// ---- Contrast ratios (WCAG) ----
function lum(c){const s=c.map(v=>{v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4);});return 0.2126*s[0]+0.7152*s[1]+0.0722*s[2];}
function ratio(a,b){const L1=lum(a),L2=lum(b);const hi=Math.max(L1,L2),lo=Math.min(L1,L2);return (hi+0.05)/(lo+0.05);}
const p2rgb = s => { const m=s.match(/\d+/g); return m?m.slice(0,3).map(Number):null; };
const contrast = await page.evaluate(() => {
  const get=(sel,prop='color')=>{const e=document.querySelector(sel);if(!e)return null;return {sel,rgb:getComputedStyle(e)[prop]};};
  return [get('.role__meta'),get('.hero__location'),get('.company__orbit-caption'),get('.footer__copy'),get('.hero__scroll-label')].filter(Boolean);
});
const bg=[10,10,12];
console.log('CONTRAST (vs page bg #0a0a0c):');
for(const c of contrast){ const rgb=p2rgb(c.rgb); if(rgb){ console.log(' ', c.sel, c.rgb, '=>', ratio(rgb,bg).toFixed(2)); } }
await browser.close();
