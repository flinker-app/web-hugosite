import { access, mkdir, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import sharp from "sharp";

const root = process.cwd();
const blogDirectory = path.join(root, "content", "blog");
const outputDirectory = path.join(root, "static", "generated", "social");
const width = 1200;
const height = 630;

const exists = async (filePath) => {
  try {
    await access(filePath, constants.R_OK);
    return true;
  } catch {
    return false;
  }
};

const escapeXml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const wrapTitle = (title, maxCharacters = 31, maxLines = 3) => {
  const words = String(title).trim().split(/\s+/);
  const lines = [];

  for (const word of words) {
    const current = lines.at(-1);
    if (!current || `${current} ${word}`.length > maxCharacters) {
      if (lines.length === maxLines) {
        lines[maxLines - 1] = `${lines[maxLines - 1].replace(/\s+…$/, "")}…`;
        break;
      }
      lines.push(word);
    } else {
      lines[lines.length - 1] = `${current} ${word}`;
    }
  }

  return lines;
};

const fallbackCard = (title) => {
  const lines = wrapTitle(title);
  const tspans = lines
    .map(
      (line, index) =>
        `<tspan x="82" dy="${index === 0 ? 0 : 76}">${escapeXml(line)}</tspan>`,
    )
    .join("");

  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#ffffff"/>
          <stop offset="1" stop-color="#edf4fe"/>
        </linearGradient>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#1778f2"/>
          <stop offset="1" stop-color="#78a8ed"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#background)"/>
      <circle cx="1110" cy="-10" r="260" fill="#1778f2" opacity="0.07"/>
      <circle cx="70" cy="650" r="230" fill="#78a8ed" opacity="0.09"/>
      <rect x="82" y="78" width="82" height="8" rx="4" fill="url(#accent)"/>
      <text x="82" y="145" fill="#1778f2" font-family="Arial, sans-serif" font-size="27" font-weight="700" letter-spacing="2">FLINKER INSIGHTS</text>
      <text x="82" y="255" fill="#111827" font-family="Arial, sans-serif" font-size="62" font-weight="700">${tspans}</text>
      <text x="82" y="558" fill="#486581" font-family="Arial, sans-serif" font-size="27">The built-environment layer for Microsoft 365</text>
      <text x="1118" y="558" text-anchor="end" fill="#1778f2" font-family="Arial, sans-serif" font-size="30" font-weight="700">flinker</text>
    </svg>
  `);
};

const resolveFeaturedImage = async (bundleDirectory, featuredImage) => {
  if (!featuredImage || typeof featuredImage !== "string") return undefined;

  let decoded;
  try {
    decoded = decodeURIComponent(featuredImage.split(/[?#]/, 1)[0]);
  } catch {
    decoded = featuredImage.split(/[?#]/, 1)[0];
  }

  const candidates = decoded.startsWith("/")
    ? [
        path.join(root, "static", decoded.replace(/^\/+/, "")),
        path.join(bundleDirectory, path.basename(decoded)),
      ]
    : [path.join(bundleDirectory, decoded)];

  for (const candidate of candidates) {
    if (await exists(candidate)) return candidate;
  }

  return undefined;
};

const renderSocialImage = async ({ source, title, destination }) => {
  const input = source ?? fallbackCard(title);

  await sharp(input, { density: 180, animated: false })
    .flatten({ background: "#f5f8fc" })
    .resize(width, height, {
      fit: "contain",
      background: "#f5f8fc",
      withoutEnlargement: false,
    })
    .png({ compressionLevel: 9, palette: true })
    .toFile(destination);
};

const directoryEntries = await (await import("node:fs/promises")).readdir(blogDirectory, {
  withFileTypes: true,
});

await mkdir(outputDirectory, { recursive: true });

let generated = 0;
let fallbacks = 0;

for (const entry of directoryEntries) {
  if (!entry.isDirectory()) continue;

  const bundleDirectory = path.join(blogDirectory, entry.name);
  const indexPath = path.join(bundleDirectory, "index.md");
  if (!(await exists(indexPath))) continue;

  const parsed = matter(await readFile(indexPath, "utf8"));
  if (parsed.data.draft === true) continue;

  const title = parsed.data.title;
  const slug = parsed.data.slug || entry.name;
  if (!title || !slug) {
    throw new Error(`Missing title or slug in ${indexPath}`);
  }

  const source = await resolveFeaturedImage(bundleDirectory, parsed.data.featured_image);
  const destination = path.join(outputDirectory, `${slug}.png`);
  await renderSocialImage({ source, title, destination });

  generated += 1;
  if (!source) fallbacks += 1;
  console.log(`${source ? "source" : "fallback"} ${slug}.png`);
}

console.log(`Generated ${generated} social images (${fallbacks} fallbacks).`);
