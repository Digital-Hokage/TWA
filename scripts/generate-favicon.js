const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons(inputPath) {
  console.log('Generating favicons from:', inputPath);

  const sizes = [
    { name: 'favicon-16x16.png',   size: 16  },
    { name: 'favicon-32x32.png',   size: 32  },
    { name: 'favicon-96x96.png',   size: 96  },
    { name: 'apple-touch-icon.png',size: 180 },
    { name: 'android-chrome-192.png', size: 192 },
    { name: 'android-chrome-512.png', size: 512 },
  ];

  for (const { name, size } of sizes) {
    await sharp(inputPath)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join('public', name));
    console.log(`✓ Generated ${name} (${size}x${size})`);
  }

  // Generate favicon.ico (browsers accept a 32x32 PNG served as .ico)
  await sharp(inputPath)
    .resize(32, 32, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .png()
    .toFile('public/favicon.ico');

  console.log('✓ Generated favicon.ico');
  console.log('All favicons generated successfully.');
}

// Find the logo — try common paths (this project's logo is public/images/logo.jpeg)
const logoPaths = [
  'public/logo.svg',
  'public/logo.png',
  'public/logo.jpeg',
  'public/logo.jpg',
  'public/images/logo.svg',
  'public/images/logo.png',
  'public/images/logo.jpeg',
  'public/images/logo.jpg',
];

const logoPath = logoPaths.find(p => fs.existsSync(p));
if (!logoPath) {
  console.error('Logo file not found. Checked:', logoPaths);
  process.exit(1);
}

generateFavicons(logoPath).catch(console.error);
