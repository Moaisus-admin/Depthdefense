"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const PartnersTwo: React.FC = () => {
  const swiperOptions = {
    loop: true,
    freeMode: false,
    freeModeMomentum: false,
    speed: 3000, // Set the slide transition speed (adjust as needed)
    autoplay: {
      delay: 1, // Set a very short delay (e.g., 1 millisecond)
      disableOnInteraction: false,
      pauseOnMouseEnter: false, // Add this to prevent pausing on mouse hover
    },
  };

  return (
    <>
      <div className="partner-area bg-color pt-[60px] pb-5 dark:bg-zinc-800 text-black relative">
        <h1 className="text-4xl dark:text-white">Our Valued Vendors</h1>
        <div className="container mt-8">
          <Swiper
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 2 },
              375: { slidesPerView: 1 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1260: { slidesPerView: 4 },
            }}
            modules={[Autoplay, Navigation]}
            className="partner-slide"
            navigation={{}}
            {...swiperOptions} // Apply the swiperOptions
          >
            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/vendors/F5.jpg"
                    alt="Image"
                    width={230}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/vendors/Sentinel.jpg"
                    alt="Image"
                    width={230}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/vendors/Fortinet.jpg"
                    alt="Image"
                    width={230}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/vendors/IBM.jpg"
                    alt="Image"
                    width={230}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/vendors/Mcafee.jpg"
                    alt="Image"
                    width={230}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/vendors/Sophos.jpg"
                    alt="Image"
                    width={230}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/vendors/symantec.jpg"
                    alt="Image"
                    width={230}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/vendors/tenable.jpg"
                    alt="Image"
                    width={230}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/vendors/trend.jpg"
                    alt="Image"
                    width={230}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PartnersTwo;
