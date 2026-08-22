import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const imageRoot = path.resolve("public/images");

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const target = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(target) : target;
    }),
  );
  return files.flat();
}

const sourceFiles = (await walk(imageRoot)).filter((file) => /\.(png|jpe?g)$/i.test(file));

for (const source of sourceFiles) {
  const relative = path.relative(imageRoot, source).replaceAll("\\", "/");
  const destination = source.replace(/\.(png|jpe?g)$/i, ".webp");
  const isLogo = relative.startsWith("brand/");
  const isCampaign = relative.startsWith("campaign/");
  const pipeline = sharp(source).rotate();

  if (isLogo) pipeline.resize({ width: 1600, withoutEnlargement: true });
  if (isCampaign) pipeline.resize({ width: 900, withoutEnlargement: true });

  await pipeline
    .webp(isLogo ? { lossless: true, effort: 6 } : { quality: isCampaign ? 80 : 76, effort: 6 })
    .toFile(destination);

  const [before, after] = await Promise.all([stat(source), stat(destination)]);
  const saved = Math.round((1 - after.size / before.size) * 100);
  console.log(`${relative} -> ${path.basename(destination)} (${saved}% smaller)`);
}
