const fs = require('fs');
const zlib = require('zlib');

function makePNG(w, h, r, g, b) {
  function chunk(type, data) {
    const header = Buffer.alloc(4);
    header.writeUInt32BE(data.length, 0);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(zlib.crc32(Buffer.concat([Buffer.from(type), data])) >>> 0, 0);
    return Buffer.concat([header, Buffer.from(type), data, crc]);
  }
  const sig = Buffer.from([0x89,0x50,0x4E,0x47,0x0D,0x0A,0x1A,0x0A]);
  const ihdr = chunk('IHDR', Buffer.from([
    (w>>24)&0xff,(w>>16)&0xff,(w>>8)&0xff,w&0xff,
    (h>>24)&0xff,(h>>16)&0xff,(h>>8)&0xff,h&0xff,
    8,2,0,0,0
  ]));
  const row = Buffer.alloc(w*3+1);
  row[0] = 0;
  for(let i=0;i<w;i++) { row[i*3+1]=r; row[i*3+2]=g; row[i*3+3]=b; }
  const raw = Buffer.alloc(h * row.length);
  for(let y=0;y<h;y++) row.copy(raw, y*row.length);
  const idat = chunk('IDAT', zlib.deflateSync(raw));
  const iend = chunk('IEND', Buffer.alloc(0));
  return Buffer.concat([sig, ihdr, idat, iend]);
}

const dir = 'icons';
fs.mkdirSync(dir, {recursive:true});

// Android chrome icons
fs.writeFileSync(dir + '/android-chrome-192x192.png', makePNG(192,192,0,123,255));
fs.writeFileSync(dir + '/android-chrome-512x512.png', makePNG(512,512,0,123,255));
// Apple touch icon
fs.writeFileSync(dir + '/apple-touch-icon.png', makePNG(180,180,0,123,255));
// Favicon sizes
fs.writeFileSync(dir + '/favicon-16x16.png', makePNG(16,16,0,123,255));
fs.writeFileSync(dir + '/favicon-32x32.png', makePNG(32,32,0,123,255));

// Also copy to public/icons
const pubDir = 'public/icons';
fs.mkdirSync(pubDir, {recursive:true});
fs.readdirSync(dir).forEach(f => {
  fs.copyFileSync(dir + '/' + f, pubDir + '/' + f);
});

console.log('All icon placeholders created');
