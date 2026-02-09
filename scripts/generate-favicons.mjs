import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { deflateSync } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.resolve(projectRoot, 'public');

const crcTable = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
})();

const crc32 = (buf) => {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i += 1) {
    c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
};

const u32 = (n) => {
  const b = Buffer.alloc(4);
  b.writeUInt32BE(n >>> 0, 0);
  return b;
};

const pngChunk = (type, data) => {
  const typeBuf = Buffer.from(type, 'ascii');
  const length = u32(data.length);
  const crc = u32(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([length, typeBuf, data, crc]);
};

const makePng = (width, height, pixelsRGBA) => {
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);

  for (let y = 0; y < height; y += 1) {
    const rowStart = y * (stride + 1);
    raw[rowStart] = 0;
    pixelsRGBA.copy(raw, rowStart + 1, y * stride, y * stride + stride);
  }

  const compressed = deflateSync(raw, { level: 9 });

  return Buffer.concat([
    signature,
    pngChunk('IHDR', ihdr),
    pngChunk('IDAT', compressed),
    pngChunk('IEND', Buffer.alloc(0)),
  ]);
};

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const fillRect = (buf, w, h, x0, y0, rw, rh, r, g, b, a) => {
  const x1 = clamp(x0 + rw, 0, w);
  const y1 = clamp(y0 + rh, 0, h);
  const sx = clamp(x0, 0, w);
  const sy = clamp(y0, 0, h);
  for (let y = sy; y < y1; y += 1) {
    for (let x = sx; x < x1; x += 1) {
      const idx = (y * w + x) * 4;
      buf[idx] = r;
      buf[idx + 1] = g;
      buf[idx + 2] = b;
      buf[idx + 3] = a;
    }
  }
};

const fillCircle = (buf, w, h, cx, cy, radius, r, g, b, a) => {
  const r2 = radius * radius;
  const xMin = clamp(Math.floor(cx - radius), 0, w - 1);
  const xMax = clamp(Math.ceil(cx + radius), 0, w - 1);
  const yMin = clamp(Math.floor(cy - radius), 0, h - 1);
  const yMax = clamp(Math.ceil(cy + radius), 0, h - 1);
  for (let y = yMin; y <= yMax; y += 1) {
    for (let x = xMin; x <= xMax; x += 1) {
      const dx = x - cx;
      const dy = y - cy;
      if (dx * dx + dy * dy <= r2) {
        const idx = (y * w + x) * 4;
        buf[idx] = r;
        buf[idx + 1] = g;
        buf[idx + 2] = b;
        buf[idx + 3] = a;
      }
    }
  }
};

const drawShieldIcon = (size) => {
  const w = size;
  const h = size;
  const pixels = Buffer.alloc(w * h * 4);

  fillRect(pixels, w, h, 0, 0, w, h, 255, 255, 255, 255);

  const navy = { r: 0x00, g: 0x33, b: 0x66 };
  const teal = { r: 0x00, g: 0x56, b: 0x70 };

  fillCircle(pixels, w, h, w * 0.22, h * 0.2, size * 0.22, teal.r, teal.g, teal.b, 35);
  fillCircle(pixels, w, h, w * 0.78, h * 0.26, size * 0.26, navy.r, navy.g, navy.b, 28);
  fillCircle(pixels, w, h, w * 0.62, h * 0.78, size * 0.3, teal.r, teal.g, teal.b, 22);

  const sX = Math.floor(size * 0.22);
  const sY = Math.floor(size * 0.16);
  const sW = Math.floor(size * 0.56);
  const sH = Math.floor(size * 0.66);

  fillRect(pixels, w, h, sX, sY, sW, sH, navy.r, navy.g, navy.b, 255);
  fillRect(pixels, w, h, sX + 1, sY + 1, sW - 2, sH - 2, 255, 255, 255, 255);
  fillRect(pixels, w, h, sX + 3, sY + 3, sW - 6, sH - 6, navy.r, navy.g, navy.b, 255);

  fillRect(pixels, w, h, Math.floor(size * 0.46), Math.floor(size * 0.27), Math.floor(size * 0.08), Math.floor(size * 0.38), 255, 255, 255, 255);
  fillRect(pixels, w, h, Math.floor(size * 0.34), Math.floor(size * 0.42), Math.floor(size * 0.32), Math.floor(size * 0.08), 255, 255, 255, 255);

  return pixels;
};

const makeIco = (pngImages) => {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngImages.length, 4);

  const dirEntries = [];
  let offset = 6 + pngImages.length * 16;
  const imageData = [];

  pngImages.forEach(({ size, data }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size === 256 ? 0 : size, 0);
    entry.writeUInt8(size === 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    dirEntries.push(entry);
    imageData.push(data);
    offset += data.length;
  });

  return Buffer.concat([header, ...dirEntries, ...imageData]);
};

const outputs = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
];

const pngs = [];
for (const out of outputs) {
  const pixels = drawShieldIcon(out.size);
  const png = makePng(out.size, out.size, pixels);
  await fs.writeFile(path.resolve(publicDir, out.name), png);
  pngs.push({ size: out.size, data: png });
}

const faviconIco = makeIco([
  pngs.find((p) => p.size === 16),
  pngs.find((p) => p.size === 32),
].filter(Boolean));

await fs.writeFile(path.resolve(publicDir, 'favicon.ico'), faviconIco);
