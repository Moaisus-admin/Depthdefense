"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    localStorage.setItem("darkMode", newMode.toString());
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <FontAwesomeIcon
        icon={faSun}
        className={`text-yellow-400 w-6 ${
          darkMode ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className="relative w-12 h-6 bg-gray-400 rounded-full shadow-inner"
        onClick={toggleDarkMode}
      >
        <div
          className={`absolute left-0 w-6 h-6 bg-white rounded-full shadow-md transform ${
            darkMode ? "translate-x-full" : ""
          }`}
        ></div>
      </div>
      <FontAwesomeIcon
        icon={faMoon}
        className={`text-yellow-200  w-6 ${
          !darkMode ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default DarkModeToggle;
