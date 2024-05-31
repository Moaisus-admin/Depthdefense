"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const Partners: React.FC = () => {
  return (
    <>
      <div className="partner-area ptb-100 dark:bg-slate-900">
        <div className="container">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="partner-slide"
          >
            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partner/partner-1.png"
                    alt="Image"
                    width={140}
                    height={140}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partner/partner-2.png"
                    alt="Image"
                    width={140}
                    height={140}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partner/partner-3.png"
                    alt="Image"
                    width={140}
                    height={140}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partner/partner-4.png"
                    alt="Image"
                    width={140}
                    height={140}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partner/partner-5.png"
                    alt="Image"
                    width={140}
                    height={140}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/images/partner/partner-3.png"
                    alt="Image"
                    width={140}
                    height={140}
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

export default Partners;
