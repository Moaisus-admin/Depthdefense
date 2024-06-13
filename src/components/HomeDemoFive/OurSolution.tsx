"use client";
import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const OurSolution: React.FC = () => {
  return (
    <>
      <div className="solution-area pb-70 dark:bg-zinc-800">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="solution-content">
                <div className="solution-title">
                  <span className="text-2xl text-red-600">Who we Are</span>
                  <h2 className="dark:text-white">
                    <Typewriter
                      words={[
                        " We are team of young, dynamic & passionate experienced team, always ready to take up challenges & deliver them responsibility ensuring extreme customer satisfaction & high quality of standards.",
                      ]}
                      loop={1}
                      cursor
                      cursorStyle=""
                      typeSpeed={20}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </h2>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one dark:bg-zinc-900">
                      <div className="overly-two">
                        <h3 className="dark:text-white">Vision</h3>
                        <p className="dark:text-white">
                          To become a highly revered Saudi Organization,
                          recognized for deep domain knowledge & applied wisdom.
                        </p>
                        <span className="NumberLogo">01</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one dark:bg-zinc-900">
                      <div className="overly-two">
                        <h3 className="dark:text-white">Mission</h3>
                        <p className="dark:text-white">
                          Empower clients to fortify their Infrastructure by
                          delivering value to build secure.
                        </p>
                        <span className="NumberLogo">02</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one dark:bg-zinc-900">
                      <div className="overly-two">
                        <h3 className="dark:text-white">What we do</h3>
                        <p className="dark:text-white">
                          Advisory consulting is our forte. We understand that
                          business have more questions than answers to the
                          evolving cyber threats. We assist in identifying gaps
                          suggest solutions to mitigate risks & reduce exposure
                          to cyber-attacks. This helps in meeting your business
                          demands & conducting business with aplomb.
                        </p>
                        <span className="NumberLogo">03</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div className="solution-img">
                <Image
                  src="/images/solution-img.png"
                  alt="Image"
                  width={875}
                  height={700}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSolution;
