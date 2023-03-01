import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {tr, en} from './translations';
//empty for now
const resources = {
  tr: {
    translation: tr,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  fallbackLng: 'tr',
  interpolation: {
    escapeValue: false,
  },
  // lng: 'en',
});

export default i18n;
