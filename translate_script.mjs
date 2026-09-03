import fs from 'fs';
import { translate } from '@vitalets/google-translate-api';

const inputFile = '/Users/vision/dev/vision/vision-site/src/locales/pt-BR.json';
const localesDir = '/Users/vision/dev/vision/vision-site/src/locales/';

const languages = [
  { code: 'pt', file: 'pt-PT.json' }, // Portuguese (Portugal) might be close enough to pt, google translate does not distinguish pt-PT and pt-BR well, but we can try.
  { code: 'en', file: 'en-US.json' },
  { code: 'es', file: 'es-ES.json' }
];

async function translateObject(obj, targetLang) {
  const result = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      // Regex to temporarily replace placeholders like {{name}} or <1>text</1> so they don't get broken, or just translate directly
      try {
        const res = await translate(obj[key], { from: 'pt', to: targetLang });
        result[key] = res.text;
        // console.log(`Translated [${key}]: ${result[key]}`);
        await new Promise(r => setTimeout(r, 100)); // Sleep to avoid rate limits
      } catch (err) {
        console.error(`Error translating key ${key}:`, err.message);
        result[key] = obj[key];
      }
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      result[key] = await translateObject(obj[key], targetLang);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}

async function main() {
  const ptBRContent = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));
  
  for (const lang of languages) {
    console.log(`Starting translation for ${lang.file} (${lang.code})...`);
    let result;
    if (lang.code === 'pt') {
        // Just copy pt-BR to pt-PT, maybe replace some specific words if needed, but for now copying is safest since Google Translate doesn't specifically target pt-PT from pt-BR well.
        console.log('Copying pt-BR to pt-PT for simplicity');
        result = ptBRContent;
    } else {
        result = await translateObject(ptBRContent, lang.code);
    }
    fs.writeFileSync(localesDir + lang.file, JSON.stringify(result, null, 2));
    console.log(`Finished writing ${lang.file}`);
  }
}

main().catch(console.error);
