import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';

async function generateFavicon() {
  const size = 1024;
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Blue gradient background
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#3b82f6');
  gradient.addColorStop(1, '#2563eb');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  // White text
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // JPG text (top)
  ctx.font = 'bold 280px Arial';
  ctx.fillText('JPG', size / 2, size * 0.35);

  // Arrow down
  ctx.font = 'bold 180px Arial';
  ctx.fillText('↓', size * 0.75, size / 2);

  // Arrow up
  ctx.fillText('↑', size * 0.25, size / 2);

  // WEBP text (bottom)
  ctx.font = 'bold 280px Arial';
  ctx.fillText('WEBP', size / 2, size * 0.65);

  // Save to file
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('public/favicon.png', buffer);
  fs.writeFileSync('images/favicon.png', buffer);

  console.log('✓ Favicon generated successfully!');
}

generateFavicon().catch(console.error);
