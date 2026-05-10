import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import viTranslations from './locales/vi.json';
import enTranslations from './locales/en.json';

const resources = {
  vi: { translation: viTranslations },
  en: { translation: enTranslations },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi',
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
