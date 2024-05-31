import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

const LanguageToggle: React.FC = () => {
  const { t } = useTranslation();
  const [isRtlEnabled, setIsRtlEnabled] = useState(false);

  const handleToggle = () => {
    setIsRtlEnabled(!isRtlEnabled);

    const container = document.getElementById("app-container");
    if (container) {
      container.classList.toggle("rtl-enabled");
    }

    // Change the language
    i18n.changeLanguage(isRtlEnabled ? "en" : "ar");
  };

  return (
    <div className="flex justify-center mb-3">
      <button
        onClick={handleToggle}
        className={`px-2 py-1 rounded-full focus:outline-none text-xs sm:text-sm ${
          isRtlEnabled ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        {isRtlEnabled ? t("english") : t("arabic")}
      </button>
    </div>
  );
};

export default LanguageToggle;
