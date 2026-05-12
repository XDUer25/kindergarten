const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = "D:\\桌面\\picture";
const outputDir = "D:\\桌面\\pictures\\高清去水印照片";

const files = [
  "2fa5a1f34ca73a51d748dd6892bcff2e.jpg",
  "3c90f034b71cbb87a5c5ed75baeaeb96.jpg",
  "7a14f8a4d4ef24cd6b2a0908b11f150a.jpg",
  "7cbf4a5da4a2c575f3fedfe844a05859.jpg",
  "9c1d05c84902112ed978949f52a3c480.jpg",
  "14a7da3fc94dc457398a10db8e8b2489.jpg",
  "21dddfa0dcd073a5b528205fb1a6e580.jpg",
  "69bc74f12522aa3bfd6ae08c389dc876.jpg",
  "91cddf532e398712d4d5a725a59cfdad.jpg",
  "95ac42f2458b878a2f642b79068428ba.jpg",
  "132f25100a19406d0b8d228682182657.jpg",
  "561c578435cf4a9d70c3d38efcb218a1.jpg",
  "958f8b3ba36e207c284d2780415ec5f9.jpg",
  "97163d69d59b3f554ab13624fdcb3e3b.jpg",
  "57033064e0ca32c0507aa58dccd5e3a5.jpg",
  "b58722246434d65e74125e32f045689a.jpg",
  "f42a0c5c24faf3c0c39aabbdf7e9d26d.jpg",
];

const watermarkZones = {
  "3c90f034b71cbb87a5c5ed75baeaeb96.jpg": [{ side: "br", w: 0.43, h: 0.12 }],
  "7a14f8a4d4ef24cd6b2a0908b11f150a.jpg": [{ side: "br", w: 0.44, h: 0.12 }],
  "7cbf4a5da4a2c575f3fedfe844a05859.jpg": [{ side: "bl", w: 0.2, h: 0.14 }],
  "9c1d05c84902112ed978949f52a3c480.jpg": [{ side: "br", w: 0.33, h: 0.13 }],
  "14a7da3fc94dc457398a10db8e8b2489.jpg": [{ side: "br", w: 0.44, h: 0.12 }],
  "95ac42f2458b878a2f642b79068428ba.jpg": [{ side: "br", w: 0.33, h: 0.13 }],
  "561c578435cf4a9d70c3d38efcb218a1.jpg": [{ side: "br", w: 0.34, h: 0.13 }],
  "958f8b3ba36e207c284d2780415ec5f9.jpg": [{ side: "br", w: 0.33, h: 0.13 }],
  "57033064e0ca32c0507aa58dccd5e3a5.jpg": [{ side: "br", w: 0.34, h: 0.13 }],
  "f42a0c5c24faf3c0c39aabbdf7e9d26d.jpg": [{ side: "br", w: 0.44, h: 0.12 }],
};

const bottomCrop = {
  "3c90f034b71cbb87a5c5ed75baeaeb96.jpg": 0.11,
  "7a14f8a4d4ef24cd6b2a0908b11f150a.jpg": 0.11,
  "7cbf4a5da4a2c575f3fedfe844a05859.jpg": 0.2,
  "9c1d05c84902112ed978949f52a3c480.jpg": 0.1,
  "14a7da3fc94dc457398a10db8e8b2489.jpg": 0.11,
  "95ac42f2458b878a2f642b79068428ba.jpg": 0.1,
  "561c578435cf4a9d70c3d38efcb218a1.jpg": 0.1,
  "958f8b3ba36e207c284d2780415ec5f9.jpg": 0.1,
  "57033064e0ca32c0507aa58dccd5e3a5.jpg": 0.1,
  "f42a0c5c24faf3c0c39aabbdf7e9d26d.jpg": 0.11,
};

function zoneRect(zone, width, height) {
  const w = Math.round(width * zone.w);
  const h = Math.round(height * zone.h);
  const marginX = Math.round(width * 0.015);
  const marginY = Math.round(height * 0.015);

  if (zone.side === "bl") {
    return { left: marginX, top: height - h - marginY, width: w, height: h };
  }

  return { left: width - w - marginX, top: height - h - marginY, width: w, height: h };
}

async function makePatch(base, rect, width, height, side) {
  const srcLeft = side === "bl" ? rect.left : rect.left;
  const srcTop = Math.max(0, rect.top - rect.height - Math.round(height * 0.02));

  return base
    .clone()
    .extract({ left: srcLeft, top: srcTop, width: rect.width, height: rect.height })
    .blur(7)
    .modulate({ brightness: 1.02, saturation: 0.95 })
    .png()
    .toBuffer();
}

function shouldMaskPixel(data, idx) {
  const r = data[idx];
  const g = data[idx + 1];
  const b = data[idx + 2];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  const sat = max === 0 ? 0 : (max - min) / max;
  return lum > 172 && sat < 0.28;
}

function dilateMask(mask, width, height, passes) {
  let current = mask;
  for (let pass = 0; pass < passes; pass += 1) {
    const next = current.slice();
    for (let y = 1; y < height - 1; y += 1) {
      for (let x = 1; x < width - 1; x += 1) {
        const i = y * width + x;
        if (current[i]) continue;
        if (
          current[i - 1] ||
          current[i + 1] ||
          current[i - width] ||
          current[i + width] ||
          current[i - width - 1] ||
          current[i - width + 1] ||
          current[i + width - 1] ||
          current[i + width + 1]
        ) {
          next[i] = 1;
        }
      }
    }
    current = next;
  }
  return current;
}

function inpaintWatermark(data, width, height, zones) {
  for (const zone of zones) {
    const rect = zoneRect(zone, width, height);
    let mask = new Uint8Array(width * height);

    for (let y = rect.top; y < rect.top + rect.height; y += 1) {
      for (let x = rect.left; x < rect.left + rect.width; x += 1) {
        const pixel = y * width + x;
        const idx = pixel * 3;
        if (shouldMaskPixel(data, idx)) {
          mask[pixel] = 1;
        }
      }
    }

    mask = dilateMask(mask, width, height, 3);

    let remaining = true;
    let rounds = 0;
    while (remaining && rounds < 90) {
      remaining = false;
      const nextMask = mask.slice();
      const nextData = Buffer.from(data);

      for (let y = rect.top; y < rect.top + rect.height; y += 1) {
        for (let x = rect.left; x < rect.left + rect.width; x += 1) {
          const pixel = y * width + x;
          if (!mask[pixel]) continue;

          let r = 0;
          let g = 0;
          let b = 0;
          let count = 0;
          for (let dy = -2; dy <= 2; dy += 1) {
            for (let dx = -2; dx <= 2; dx += 1) {
              if (dx === 0 && dy === 0) continue;
              const nx = x + dx;
              const ny = y + dy;
              if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
              const neighbor = ny * width + nx;
              if (mask[neighbor]) continue;
              const nidx = neighbor * 3;
              r += data[nidx];
              g += data[nidx + 1];
              b += data[nidx + 2];
              count += 1;
            }
          }

          if (count > 0) {
            const idx = pixel * 3;
            nextData[idx] = Math.round(r / count);
            nextData[idx + 1] = Math.round(g / count);
            nextData[idx + 2] = Math.round(b / count);
            nextMask[pixel] = 0;
          } else {
            remaining = true;
          }
        }
      }

      data = nextData;
      mask = nextMask;
      rounds += 1;
    }
  }
  return data;
}

async function processFile(file) {
  const input = path.join(inputDir, file);
  const output = path.join(outputDir, file.replace(/\.jpg$/i, "_高清.jpg"));

  const original = sharp(input, { failOn: "none" }).rotate();
  const meta = await original.metadata();
  const cropFraction = bottomCrop[file] || 0;
  const cropHeight = Math.round(meta.height * (1 - cropFraction));
  const upWidth = meta.width * 2;
  const upHeight = cropHeight * 2;

  const image = original
    .extract({ left: 0, top: 0, width: meta.width, height: cropHeight })
    .resize({ width: upWidth, kernel: sharp.kernel.lanczos3 })
    .median(1)
    .modulate({ brightness: 1.03, saturation: 1.08 })
    .linear(1.08, -5)
    .sharpen({ sigma: 1.05, m1: 0.45, m2: 1.15, x1: 2, y2: 8, y3: 18 });

  let raw = await image.removeAlpha().raw().toBuffer();

  await sharp(raw, {
    raw: { width: upWidth, height: upHeight, channels: 3 },
  })
    .jpeg({ quality: 95, mozjpeg: true })
    .toFile(output);
  return { file, width: upWidth, height: upHeight, output };
}

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });
  const results = [];
  for (const file of files) {
    results.push(await processFile(file));
  }
  for (const result of results) {
    console.log(`${result.file} -> ${result.width}x${result.height}`);
  }
  console.log(`Done: ${outputDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
