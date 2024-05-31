import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        english: "English",
        arabic: "Arabic",
        worldClassCyberSecurity: "World Class Cyber Security",
        cyberSecurityDescription:
          "Cyber security is the protection from the theft to protect of our computer systems and networks or being damaged of our hardware and software.",
        powerfulProtectionEasyRecovery: "Powerful Protection Easy Recovery",
        // Add more English translations here
      },
    },
    ar: {
      translation: {
        english: "إنجليزي",
        arabic: "عربي",
        worldClassCyberSecurity: "الأمن السيبراني على مستوى عالمي",
        cyberSecurityDescription:
          "الأمن السيبراني هو الحماية من السرقة لحماية أنظمة الكمبيوتر والشبكات لدينا أو التلف الذي قد يلحق بأجهزتنا وبرامجنا.",
        powerfulProtectionEasyRecovery: "حماية قوية سهلة الاستعادة",
        // Add more Arabic translations here
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
