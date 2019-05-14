import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-xhr-backend";
i18n
  .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true,
    load: "languageOnly",
    lng: "fr",
    fallbackLng: "fr",
    ns: "translation",
    defaultNS: "translation",
    interpolation: {
      escapeValue: false
    },
    saveMissing: true,
    missingKeyHandler: function(lng, ns, key, fallbackValue) {
      console.warn("Missing key", lng, ns, key);
    }
  });
