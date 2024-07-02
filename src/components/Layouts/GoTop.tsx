"use client";

import React, { useEffect, useState } from "react";

const GoTop = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <div onClick={scrollToTop} className="go-top ">
          <i className="bx bx-chevrons-up"></i>
          <i className="bx bx-chevrons-up"></i>
        </div>
      )}
    </>
  );
};

export default GoTop;
