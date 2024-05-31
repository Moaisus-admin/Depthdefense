"use client";

import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const GetInTouchFormTwo: React.FC = () => {
  return (
    <>
      <div className="get-in-touch-area get-in-touch-area-two bg-color ptb-100 text-black dark:bg-zinc-900">
        <div className="container">
          <div className="section-title">
            <span className="text-2xl text-[#e21f36]">Contact Us</span>
            <h2 className="dark:text-white">
              <Typewriter
                words={["Speak With An Expert About Your Specific Needs"]}
                loop={1}
                cursor
                cursorStyle=""
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          </div>

          <form id="contactForm" className="get-in-touch-form">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="form-group dark:text-white">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control dark:text-white rounded-3xl"
                    placeholder="Enter Name"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group dark:text-white">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control dark:text-white rounded-3xl"
                    placeholder="Enter Email"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group dark:text-white">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="number"
                    className="form-control dark:text-white rounded-3xl"
                    placeholder="Enter Number"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group dark:text-white">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control dark:text-white rounded-3xl"
                    placeholder="Enter Subject"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group dark:text-white rounded-3xl">
                  <label>Message</label>
                  <textarea
                    name="text"
                    cols={30}
                    rows={5}
                    className="form-control dark:text-white rounded-2xl"
                    placeholder="Enter Message"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-12 col-sm-12">
                <button type="submit" className="default-btn rounded-full">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="get-in-touch-shape">
          <Image
            src="/images/get-in-touch-shape.png"
            alt="Image"
            width={512}
            height={512}
          />
        </div>
      </div>
    </>
  );
};

export default GetInTouchFormTwo;
