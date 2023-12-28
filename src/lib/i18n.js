import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "../locale/en.json"
import ptTranslation from "../locale/pt.json"


i18n
.use(initReactI18next)
.use(LanguageDetector)
.init({
    resources: {
        en: { ...enTranslation },
        pt: { ...ptTranslation }
    },
    fallbackLng: "en",
    detection: {
        order: ['cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path'],
        caches: ["cookie"]
    }

})