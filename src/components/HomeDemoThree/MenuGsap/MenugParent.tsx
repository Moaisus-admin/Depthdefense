import React, { useState, useEffect } from "react";
import MenuG from "./MenuG";
import MenuGMobile from "./MenuGMobile";

const ParentComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
  };

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? (
    <MenuGMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
  ) : (
    <MenuG isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
  );
};

export default ParentComponent;
