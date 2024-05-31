"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="testimonials-area ptb-100 jarallax">
        <div className="container">
          <div className="testimonials">
            <span>What our customers say</span>

            <Swiper
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay, Navigation]}
              className="testimonials-slide"
            >
              <SwiperSlide>
                <div className="testimonials-item">
                  <i className="flaticon-quote"></i>
                  <p>
                    “Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imperdiet doming id quod mazim placerat facer possim
                    assum. Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat.”
                  </p>

                  <ul>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                  </ul>

                  <h3>Jastin Anderson</h3>
                  <span>CEO</span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonials-item">
                  <i className="flaticon-quote"></i>
                  <p>
                    “Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imperdiet doming id quod mazim placerat facer possim
                    assum. Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat.”
                  </p>

                  <ul>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                  </ul>

                  <h3>Juhon Anderson</h3>
                  <span>Manager</span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
