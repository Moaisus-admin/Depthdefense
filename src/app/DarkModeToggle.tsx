import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);

    // Update dark mode class on the document root element
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

    // Toggle dark mode class on the document root element
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      className="flex items-center justify-center w-10 h-6 sm:w-12 sm:h-8 bg-gray-400 rounded-md shadow-md focus:outline-none"
      onClick={toggleDarkMode}
    >
      <FontAwesomeIcon
        icon={darkMode ? faMoon : faSun}
        className={`text-yellow-400 w-6 ${
          darkMode ? "opacity-100" : "opacity-100"
        }`}
      />
    </button>
  );
};

export default DarkModeToggle;
