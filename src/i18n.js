// src/i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import các bản dịch cho từng ngôn ngữ
import enTranslation from './locales/en.json'
import viTranslation from './locales/vi.json'

const resources = {
  en: {
    translation: enTranslation,
  },
  vi: {
    translation: viTranslation,
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Ngôn ngữ mặc định
    fallbackLng: 'en', // Ngôn ngữ dự phòng
    interpolation: {
      escapeValue: false, // Không cần escape HTML trong bản dịch
    },
  });

export default i18n
