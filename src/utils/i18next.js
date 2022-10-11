import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';

import translationEN from '../locales/en/translation.json';
import translationUA from '../locales/ua/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },

  ua: {
    translation: translationUA,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    whitelist: ['ua', 'en'],
    debug: false,
    detection: {
      order: ['localStorage', 'cookie'],
      cashes: ['localStorage', 'cookie'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
