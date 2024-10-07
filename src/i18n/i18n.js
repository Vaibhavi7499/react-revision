import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",

  resources: {
    en: {
      translation: {
        allhooks: "All Hooks",
        usestate: "useState",
        useeffect: "useEffect",
        usereducer: "useReducer",
        usememo: "useMemo",
        usecontext: "useContext",
        usecallback: "useCallback",
      },
    },

    hi: {
      translation: {
        allhooks: "सभी हुक",
        usestate: "उपयोग राज्य",
        useeffect: "उपयोगप्रभाव",
        usereducer: "यूज़रेड्यूसर",
        usememo: "मेमो का उपयोग करें",
        usecontext: "उपयोग संदर्भ",
        usecallback: "  कॉलबैक का उपयोग करें",
      },
    },

    ma: {
      translation: {
        allhooks: "सर्व हुक",
        usestate: " राज्य वापरा",
        useeffect: "प्रभाव वापरा",
        usereducer: "Reducer वापरा",
        usememo: "मेमो वापरा",
        usecontext: "संदर्भ वापरा",
        usecallback: "कॉलबॅक वापरा",
      },
    },
  },
});
