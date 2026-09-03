import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptBR from '../locales/pt-BR.json';
import ptPT from '../locales/pt-PT.json';
import enUS from '../locales/en-US.json';
import esES from '../locales/es-ES.json';

const resources = {
  'pt-BR': {
    translation: ptBR,
  },
  'pt-PT': {
    translation: ptPT,
  },
  'en-US': {
    translation: enUS,
  },
  'es-ES': {
    translation: esES,
  }
};

i18n
  // Detects user language
  .use(LanguageDetector)
  // Passes i18n down to react-i18next
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt-BR', // default language
    supportedLngs: ['pt-BR', 'pt-PT', 'en-US', 'es-ES'],
    
    interpolation: {
      escapeValue: false, // React already safe from xss
    },
    
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    }
  });

export default i18n;
