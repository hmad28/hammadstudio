import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const assetsToDownload = [
  // Brand
  '/assets/img/brand/dytama-white.svg',
  '/assets/img/brand/dytama-icon.svg',
  '/assets/img/brand/opengraphdytama.jpg',
  
  // Illustrations
  '/assets/img/illustration/background-web-dytama.webp',
  '/assets/img/illustration/background-pattern.svg',
  '/assets/img/illustration/ribbon.webp',
  '/assets/img/illustration/topology.svg',
  '/assets/img/illustration/dashboard.png',
  '/assets/img/illustration/spotlight.svg',
  
  // Users / Clients
  '/assets/img/user/user-01.png',
  '/assets/img/user/user-02.png',
  '/assets/img/user/user-03.png',
  '/assets/img/user/user-04.png',
  '/assets/img/user/user-05.png',
  
  // Services
  '/assets/img/services/uiux.webp',
  '/assets/img/services/web-development.webp',
  '/assets/img/services/mobile-development.webp',
  '/assets/img/services/seo.webp',
];

async function downloadAsset(relativePath) {
  const url = `https://dytama.com${relativePath}`;
  const localPath = path.join(projectRoot, 'public', relativePath);
  
  const dir = path.dirname(localPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  try {
    console.log(`Fetching ${url}...`);
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Failed ${url}: ${res.status}`);
      return;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(localPath, buffer);
    console.log(`Saved -> ${localPath}`);
  } catch (err) {
    console.error(`Error fetching ${url}:`, err);
  }
}

async function main() {
  for (const assetPath of assetsToDownload) {
    await downloadAsset(assetPath);
  }
  console.log('Done downloading dytama assets!');
}

main();
