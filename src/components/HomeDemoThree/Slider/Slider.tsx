"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "./sliderstyle.css"; // Correct import for the CSS file

const imageNames = [
  "image1.png",
  "image2.png",
  "image3.jpeg",
  "image4.jpeg",
  "image5.jpeg",
  "image6.png",
  "image7.png",
  "image8.png",
  "image9.png",
  "image10.png",
  "image11.png",
  "image12.jpeg",
  "image1.png",
  "image2.png",
  "image3.jpeg",
  "image4.jpeg",
  "image5.jpeg",
  "image6.png",
  "image7.png",
  "image8.png",
  "image9.png",
  "image10.png",
  "image11.png",
  "image12.jpeg",
];

const Slider = () => {
  const { t } = useTranslation();
  return (
    <div className="dark:bg-zinc-600 main">
      <div className="section-title">
        {/* <span className="dark:text-white text-2xl">Why Choose Us</span> */}
        <h2 className="dark:text-white">{t("ourEsteemedClients")}</h2>
      </div>
      <div className="sliderContainer  pt-[5px] relative">
        <div className="slider dark:text-white relative">
          <div className="slideTrack dark:text-white">
            {imageNames.map((imageName, index) => (
              <div className="slide " key={index}>
                <Image
                  src={`/images/vendors/${imageName}`}
                  alt={`Slide ${index + 1}`}
                  width={350}
                  height={200}
                  className="img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
