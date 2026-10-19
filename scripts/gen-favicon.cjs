const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

const SIZE = 256;
const FOREST = [0x11, 0x34, 0x17];
const CITRON = [0xdb, 0xd0, 0x00];
const PETAL = [0xdf, 0x84, 0xa8];

const cx = 118;
const cy = 148;
const rOuter = 76;
const rInner = 42;
const barHalfHeight = 15;
const barCy = cy - 8;

const dotCx = cx + 108;
const dotCy = cy + 50;
const dotR = 17;

function pixelColor(x, y) {
  const dx = x - cx;
  const dy = y - cy;
  const d = Math.sqrt(dx * dx + dy * dy);
  let angle = (Math.atan2(dy, dx) * 180) / Math.PI;
  if (angle < 0) angle += 360;

  const inRing = d <= rOuter && d >= rInner;
  const inOpeningWedge = angle >= 12 && angle <= 62;
  const ring = inRing && !inOpeningWedge;

  const inBar = Math.abs(y - barCy) <= barHalfHeight && d <= rOuter;

  if (ring || inBar) return CITRON;

  const ddx = x - dotCx;
  const ddy = y - dotCy;
  if (Math.sqrt(ddx * ddx + ddy * ddy) <= dotR) return PETAL;

  return FOREST;
}

function buildRawRGBA() {
  const raw = Buffer.alloc(SIZE * (SIZE * 4 + 1));
  let offset = 0;
  for (let y = 0; y < SIZE; y++) {
    raw[offset++] = 0; // filter type: none
    for (let x = 0; x < SIZE; x++) {
      const [r, g, b] = pixelColor(x, y);
      raw[offset++] = r;
      raw[offset++] = g;
      raw[offset++] = b;
      raw[offset++] = 255;
    }
  }
  return raw;
}

function crc32(buf) {
  let c;
  const table = crc32.table || (crc32.table = (() => {
    const t = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      t[n] = c >>> 0;
    }
    return t;
  })());
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeData = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(typeData), 0);
  return Buffer.concat([len, typeData, crc]);
}

function buildPNG() {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(SIZE, 0);
  ihdr.writeUInt32BE(SIZE, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const raw = buildRawRGBA();
  const idatData = zlib.deflateSync(raw, { level: 9 });

  return Buffer.concat([
    signature,
    chunk("IHDR", ihdr),
    chunk("IDAT", idatData),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function buildICO(pngBuffer) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // 1 image

  const entry = Buffer.alloc(16);
  entry[0] = 0; // width (0 = 256)
  entry[1] = 0; // height (0 = 256)
  entry[2] = 0; // color palette
  entry[3] = 0; // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngBuffer.length, 8); // size of image data
  entry.writeUInt32LE(6 + 16, 12); // offset

  return Buffer.concat([header, entry, pngBuffer]);
}

const png = buildPNG();
const ico = buildICO(png);

const outDir = path.join(__dirname, "..", "public");
fs.writeFileSync(path.join(outDir, "favicon.ico"), ico);
fs.writeFileSync(path.join(outDir, "favicon.png"), png);

// SVG wrapper embedding the identical raster, so modern browsers (which
// prefer <link type="image/svg+xml">) render the exact same mark as the
// .ico fallback, just requested through a different <link> tag.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}"><image width="${SIZE}" height="${SIZE}" href="data:image/png;base64,${png.toString("base64")}"/></svg>\n`;
fs.writeFileSync(path.join(outDir, "favicon.svg"), svg);

console.log("Wrote favicon.ico, favicon.png, favicon.svg:", ico.length, "/", png.length, "/", svg.length, "bytes");
