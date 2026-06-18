import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = process.env.VITE_SITE_URL ?? "https://visiontaubate.com.br";

const seoPages = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/tech", priority: 0.9, changefreq: "weekly" },
  { path: "/tech/servicos", priority: 0.8, changefreq: "monthly" },
  { path: "/tech/solucoes", priority: 0.8, changefreq: "monthly" },
  { path: "/tech/portfolio", priority: 0.8, changefreq: "monthly" },
  { path: "/design", priority: 0.9, changefreq: "weekly" },
  { path: "/design/servicos", priority: 0.8, changefreq: "monthly" },
  { path: "/sobre", priority: 0.7, changefreq: "monthly" },
  { path: "/metodologia", priority: 0.7, changefreq: "monthly" },
];

const lastmod = new Date().toISOString().split("T")[0];

const urlEntries = seoPages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.path === "/" ? "" : page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

const outputPath = resolve(__dirname, "../public/sitemap.xml");
writeFileSync(outputPath, sitemap, "utf-8");
console.log(`Sitemap gerado em ${outputPath}`);
