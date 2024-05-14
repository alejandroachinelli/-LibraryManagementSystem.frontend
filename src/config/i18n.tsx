import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from '../utils/traslation/en/en.json'
import es from '../utils/traslation/es/es.json'

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    lng: 'es',
    debug: true,
    interpolation: {
        escapeValue: false
    },
    supportedLngs: ["es", "en"],
    resources: {
        es: {
            translation: es
        },
        en: {
            translation: en
        }
    },
    
})

export default i18n;