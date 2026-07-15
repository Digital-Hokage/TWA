/**
 * One-time privacy script for the Five Star donor photo.
 *
 * The source is a 6-panel WhatsApp collage (1599x899) full of patient faces.
 * For privacy we DO NOT publish the whole collage. Instead we crop to a single
 * panel (bottom-left) that clearly shows the two people who consented to appear —
 * Mr. Sivaramakrishnan (CSR, grey checked shirt + lanyard) and Dr. Revathi Raj
 * (green dress) — and blur every other face (patients, families, other visitors).
 *
 * All processing is local (sharp/libvips). The original never leaves the machine
 * and is git-ignored. Only the blurred crop (five-star-visit.jpeg) is committed.
 *
 * Coordinates below are in the CROPPED panel's pixel space (1051x593). If any
 * face is missed, adjust and re-run, then re-verify visually.
 */
const sharp = require('sharp');
const fs = require('fs');

// The unblurred original lives OUTSIDE public/ so it is never copied into the
// build output (out/) and never deployed. It is also git-ignored.
const SRC = 'private-assets/five-star-visit-original.jpg';
const OUT = 'public/images/donors/five-star-visit.jpeg';

// Crop the bottom-left panel out of the full collage.
const CROP = { left: 0, top: 306, width: 1051, height: 593 };

// Faces to blur, in cropped-panel coordinates { x, y, w, h }.
// KEPT CLEAR (do NOT cover): CSR officer (~x255-340) and Dr. Revathi (~x650-748).
const BLUR_REGIONS = [
  { x: 0,   y: 140, w: 62,  h: 135 }, // far-left sliver person
  // { x: 45,  y: 90,  w: 145, h: 165 }, // elderly man (light blue shirt), left
  { x: 338, y: 180, w: 95,  h: 115 }, // woman in blue saree
  { x: 480, y: 275, w: 120, h: 125 }, // young patient on the bed
  // { x: 825, y: 90,  w: 145, h: 165 }, // elderly man (white checked shirt), right
  { x: 960, y: 140, w: 91,  h: 165 }, // far-right edge person
];

const BLUR_STRENGTH = 30;

async function run() {
  // Crop once to a buffer, then blur regions out of that buffer.
  const baseBuf = await sharp(SRC).extract(CROP).toBuffer();
  const { width, height } = await sharp(baseBuf).metadata();
  console.log(`Cropped panel: ${width}x${height}`);

  const composites = [];
  for (const r of BLUR_REGIONS) {
    const left = Math.max(0, r.x);
    const top = Math.max(0, r.y);
    const w = Math.min(r.w, width - left);
    const h = Math.min(r.h, height - top);
    if (w <= 0 || h <= 0) continue;
    const blurred = await sharp(baseBuf)
      .extract({ left, top, width: w, height: h })
      .blur(BLUR_STRENGTH)
      .toBuffer();
    composites.push({ input: blurred, left, top });
  }

  await sharp(baseBuf).composite(composites).jpeg({ quality: 90 }).toFile(OUT);
  console.log(`✓ Saved blurred crop to ${OUT} (${composites.length} regions blurred)`);
}

if (!fs.existsSync(SRC)) {
  console.error(`Original not found at ${SRC}. Save the unblurred photo there first.`);
  process.exit(1);
}
run().catch((e) => { console.error(e); process.exit(1); });
