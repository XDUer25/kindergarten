const fs = require("fs");
const sharp = require("sharp");

async function main() {
  const files = fs.readdirSync("public/images").filter((file) => file.endsWith(".jpg"));
  const thumbs = [];

  for (const file of files) {
    const label = file.replace("_高清.jpg", "");
    const svg = Buffer.from(
      `<svg width="260" height="44" xmlns="http://www.w3.org/2000/svg"><rect width="260" height="44" fill="white"/><text x="8" y="18" font-size="12" font-family="Arial" fill="#111">${label.slice(0, 12)}</text><text x="8" y="36" font-size="11" font-family="Arial" fill="#555">${file.slice(0, 32)}</text></svg>`
    );
    const input = await sharp(`public/images/${file}`)
      .resize(260, 160, { fit: "cover" })
      .extend({ top: 0, bottom: 44, left: 0, right: 0, background: "#fff" })
      .composite([{ input: svg, top: 160, left: 0 }])
      .png()
      .toBuffer();
    thumbs.push({
      input,
      top: Math.floor(thumbs.length / 3) * 204,
      left: (thumbs.length % 3) * 260
    });
  }

  await sharp({
    create: {
      width: 780,
      height: Math.ceil(files.length / 3) * 204,
      channels: 4,
      background: "#eef8ff"
    }
  })
    .composite(thumbs)
    .png()
    .toFile("asset-index.png");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
