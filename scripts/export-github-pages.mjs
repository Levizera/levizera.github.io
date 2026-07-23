import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import react from "@vitejs/plugin-react";
import { createServer } from "vite";

const projectRoot = resolve(import.meta.dirname, "..");
const outputRoot = join(projectRoot, "github-pages-ready");

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

const vite = await createServer({
  root: projectRoot,
  configFile: false,
  appType: "custom",
  plugins: [react()],
  server: { middlewareMode: true },
});

try {
  const pageModule = await vite.ssrLoadModule("/app/page.tsx");
  const bodyMarkup = renderToStaticMarkup(React.createElement(pageModule.default))
    .replace(/<link rel="preload" as="image" href="[^"]+"\/>/g, "")
    .replaceAll('src="/', 'src="./')
    .replaceAll('href="/favicon.svg"', 'href="./favicon.svg"');

  const document = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Portfólio de Levi Ferreira: estratégia de conteúdo, crescimento de audiência, páginas de vendas, newsletters, idiomas e preservação digital."
    />
    <title>Levi Ferreira — Conteúdo, Audiência e Projetos Digitais</title>
    <link rel="icon" href="./favicon.svg" />
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    ${bodyMarkup}
    <script async src="https://www.instagram.com/embed.js"></script>
    <script src="./script.js"></script>
  </body>
</html>
`;

  const styles = (await readFile(join(projectRoot, "app/globals.css"), "utf8"))
    .replace('@import "tailwindcss";', "")
    .trimStart();

  await writeFile(join(outputRoot, "index.html"), document);
  await writeFile(join(outputRoot, "styles.css"), styles);
  await cp(join(projectRoot, "public"), outputRoot, { recursive: true });
  await cp(
    join(projectRoot, "scripts/github-pages-runtime.js"),
    join(outputRoot, "script.js"),
  );
  await cp(
    join(projectRoot, "GITHUB_PAGES.md"),
    join(outputRoot, "README.md"),
  );
  await writeFile(join(outputRoot, ".nojekyll"), "");
} finally {
  await vite.close();
}

console.log(`GitHub Pages export ready: ${outputRoot}`);
