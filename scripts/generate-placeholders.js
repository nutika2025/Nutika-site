const fs = require('fs');
const path = require('path');

const products = [
  'echo-dot.jpg',
  'instant-pot.jpg',
  'anker-powerbank.jpg',
  'philips-hue.jpg',
  'fitbit.jpg',
  'bose-qc45.jpg',
  'hydroflask.jpg',
  'kindle.jpg',
  'lodge-skillet.jpg',
  'airtag.jpg',
  'yeti-cooler.jpg',
  'ninja-airfryer.jpg',
];

const colors = [
  '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#3B82F6',
  '#6366F1', '#14B8A6', '#F97316', '#06B6D4', '#8B5CF6',
  '#A855F7', '#EF4444'
];

const productsDir = path.join(__dirname, '..', 'public', 'products');

if (!fs.existsSync(productsDir)) {
  fs.mkdirSync(productsDir, { recursive: true });
}

products.forEach((filename, index) => {
  const color = colors[index % colors.length];
  const name = filename.replace('.jpg', '').replace(/-/g, ' ').toUpperCase();

  const svg = `<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad${index}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.7" />
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#grad${index})"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="20" fill="white" text-anchor="middle" dy=".3em" opacity="0.9">${name}</text>
</svg>`;

  fs.writeFileSync(path.join(productsDir, filename), svg);
  console.log(`Created ${filename}`);
});

console.log('All placeholder images created!');
