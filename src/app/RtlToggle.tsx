import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

const LanguageToggle: React.FC = () => {
  const { t } = useTranslation();
  const [isRtlEnabled, setIsRtlEnabled] = useState(false);
  const [isSmallWindow, setIsSmallWindow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallWindow(window.innerWidth < 640); // Adjust threshold as needed
    };

    handleResize(); // Call initially to set state based on current window size
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on component unmount
    };
  }, []);

  const handleToggle = () => {
    setIsRtlEnabled(!isRtlEnabled);

    const container = document.getElementById("app-container");
    if (container) {
      container.classList.toggle("rtl-enabled");
    }

    // Change the language
    i18n.changeLanguage(isRtlEnabled ? "en" : "ar");
  };

  // Determine margin based on window size
  const marginTopStyle = isSmallWindow
    ? { marginTop: "15px" }
    : { marginTop: "16px" };

  return (
    <div className="flex items-center mb-3">
      <button
        className="h-fit"
        onClick={handleToggle}
        style={{
          ...marginTopStyle,
          padding: isSmallWindow ? "4px 8px" : "6px 12px",
          fontSize: isSmallWindow ? "10px" : "12px",
          backgroundColor: isRtlEnabled ? "#3182ce" : "#e2e8f0",
          color: isRtlEnabled ? "#ffffff" : "#4a5568",
          borderRadius: "8px", // Make it square with rounded corners
          outline: "none",
          cursor: "pointer",
        }}
      >
        {isRtlEnabled ? t("english") : t("arabic")}
      </button>
    </div>
  );
};

export default LanguageToggle;
