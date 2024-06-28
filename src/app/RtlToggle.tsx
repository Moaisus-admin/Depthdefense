import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

const LanguageToggle: React.FC = () => {
  const { t } = useTranslation();
  const [isRtlEnabled, setIsRtlEnabled] = useState(() => {
    const savedRtl = localStorage.getItem("isRtlEnabled");
    const isRtl = savedRtl ? JSON.parse(savedRtl) : false;
    const savedLang = localStorage.getItem("lang");
    const lang = savedLang ? savedLang : "en";
    i18n.changeLanguage(lang);
    return isRtl;
  });
  const [isSmallWindow, setIsSmallWindow] = useState(false);
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const container = document.getElementById("app-container");
    if (container) {
      if (isRtlEnabled) {
        container.classList.add("rtl-enabled");
      } else {
        container.classList.remove("rtl-enabled");
      }
    }

    const handleResize = () => {
      setIsSmallWindow(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isRtlEnabled]);

  const handleToggle = () => {
    const newIsRtlEnabled = !isRtlEnabled;
    setIsRtlEnabled(newIsRtlEnabled);
    localStorage.setItem("isRtlEnabled", JSON.stringify(newIsRtlEnabled));
    const newLang = newIsRtlEnabled ? "ar" : "en";
    localStorage.setItem("lang", newLang);

    const container = document.getElementById("app-container");
    if (container) {
      if (newIsRtlEnabled) {
        container.classList.add("rtl-enabled");
      } else {
        container.classList.remove("rtl-enabled");
      }
    }

    i18n.changeLanguage(newLang);
    setContextMenu(null); // Close context menu
  };

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu({
      x: event.pageX,
      y: event.pageY,
    });
  };

  const handleClickOutside = () => {
    setContextMenu(null);
  };

  useEffect(() => {
    if (contextMenu) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [contextMenu]);

  const marginTopStyle = isSmallWindow
    ? { marginTop: "15px" }
    : { marginTop: "16px" };

  return (
    <div className="flex items-center mb-3">
      <button
        className="h-fit"
        onClick={handleToggle}
        onContextMenu={handleContextMenu}
        style={{
          ...marginTopStyle,
          padding: isSmallWindow ? "4px 8px" : "6px 12px",
          fontSize: isSmallWindow ? "10px" : "12px",
          backgroundColor: isRtlEnabled ? "#3182ce" : "#e2e8f0",
          color: isRtlEnabled ? "#ffffff" : "#4a5568",
          borderRadius: "8px",
          outline: "none",
          cursor: "pointer",
        }}
      >
        {isRtlEnabled ? t("english") : t("arabic")}
      </button>

      {contextMenu && (
        <ul
          className="context-menu"
          style={{
            top: contextMenu.y,
            left: contextMenu.x,
            position: "absolute",
            zIndex: 1000,
            backgroundColor: "#fff",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            padding: "5px 0",
            borderRadius: "5px",
            listStyle: "none",
          }}
        >
          <li
            className="context-menu-item"
            style={{ padding: "5px 20px", cursor: "pointer" }}
            onClick={handleToggle}
          >
            {isRtlEnabled ? t("switch_to_english") : t("switch_to_arabic")}
          </li>
          <li
            className="context-menu-item"
            style={{ padding: "5px 20px", cursor: "pointer" }}
            onClick={() => alert(t("context_menu_action"))}
          >
            {t("another_action")}
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageToggle;
