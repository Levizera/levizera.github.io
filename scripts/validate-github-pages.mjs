import { access, readFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const outputRoot = resolve(import.meta.dirname, "..", "github-pages-ready");
const html = await readFile(join(outputRoot, "index.html"), "utf8");
const styles = await readFile(join(outputRoot, "styles.css"), "utf8");
const runtime = await readFile(join(outputRoot, "script.js"), "utf8");

const requiredText = [
  "peshto@proton.me",
  "https://www.instagram.com/embed.js",
  'src="./script.js"',
  'href="./styles.css"',
];

for (const text of requiredText) {
  if (!html.includes(text)) {
    throw new Error(`Missing required export content: ${text}`);
  }
}

if (html.includes('src="/work/') || html.includes('href="/work/')) {
  throw new Error("Root-relative portfolio assets remain in the static export.");
}

if (!runtime.includes("IntersectionObserver") || !runtime.includes("animated-number")) {
  throw new Error("Animated counters are missing from the static runtime.");
}

if (!styles.includes(".hero-stats") || !styles.includes(".audio-proof")) {
  throw new Error("Core portfolio styles are missing from the export.");
}

const relativeFiles = [
  ...html.matchAll(/(?:src|href)="\.\/([^"#?]+)"/g),
].map((match) => match[1]);

for (const relativeFile of new Set(relativeFiles)) {
  await access(join(outputRoot, relativeFile));
}

console.log(
  `Validated GitHub Pages export with ${new Set(relativeFiles).size} local references.`,
);
