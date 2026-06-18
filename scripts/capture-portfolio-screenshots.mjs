import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(__dirname, "../public/portfolio/screenshots/sites");

const sites = [
  {
    slug: "pousada-marina-paraty",
    url: "https://pousadamarinaparaty.com.br/",
  },
  { slug: "brexecutive", url: "https://brexecutive.com.br/" },
  { slug: "gestcacambas", url: "https://www.gestcacambas.com.br/" },
  { slug: "stellaturismo", url: "https://stellaturismo.com.br/" },
  { slug: "jfcursoanimal", url: "https://jfcursoanimal.com.br/" },
  { slug: "spartanvale", url: "https://spartanvale.com.br/" },
  { slug: "bcelv", url: "https://bcelv.com.br/" },
];

mkdirSync(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});

for (const site of sites) {
  const page = await context.newPage();
  const outputPath = resolve(outputDir, `${site.slug}.jpg`);

  try {
    console.log(`Capturando ${site.url}...`);
    await page.goto(site.url, {
      waitUntil: "commit",
      timeout: 90000,
    });
    await page.waitForTimeout(4000);
    await page.screenshot({
      path: outputPath,
      type: "jpeg",
      quality: 85,
      fullPage: false,
    });
    console.log(`  OK → ${outputPath}`);
  } catch (error) {
    console.warn(`  Falha em ${site.url}:`, error.message);
  } finally {
    await page.close();
  }
}

await context.close();
await browser.close();
console.log("Captura concluída.");
