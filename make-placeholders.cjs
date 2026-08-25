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

const dirs = ['src/home','src/blog/posts/python-venv'];
dirs.forEach(d => fs.mkdirSync(d, {recursive:true}));

fs.writeFileSync('src/home/avatar-removebg-min.png', makePNG(400,400,200,200,200));
fs.writeFileSync('src/blog/posts/python-venv/python.png', makePNG(300,200,100,150,200));
fs.writeFileSync('src/blog/posts/python-venv/PythonPackage.png', makePNG(300,200,100,150,200));
console.log('Placeholder images created');
