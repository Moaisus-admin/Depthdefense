"use client";

import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const TeamMember: React.FC = () => {
  return (
    <>
      <div className="challenges-area pt-[50px] jarallax dark:bg-slate-900 text-black">
        <div className="container">
          <div className="section-title white-title m-auto">
            <span className="text-2xl text-red-500">About Company</span>
            <h2 className="dark:text-white">
              <Typewriter
                words={["Cybersecurity Solutions Built On Customer Trust"]}
                loop={1}
                cursor
                cursorStyle=""
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          </div>

          <div className="row w-full cardd">
            <div className="col-lg-12 col-sm-6 dark:bg-slate-900">
              <div className="single-challenges overly-one dark:bg-slate-900 dark:text-white flex flex-wrap rounded-full">
                {/* <div className="col-lg-3 col-sm-6">
                  <div className="single-team m-auto">
                    <Image
                      src="/images/About-1.jpg"
                      alt="Image"
                      width={550}
                      height={600}
                    />
                  </div>
                </div> */}
                <div className="overly-two water-effect m-auto">
                  <i className="flaticon-threat pb-4"></i>
                  <div
                  // className="floating-line"
                  // style={{ animationDelay: "0.1s" }}
                  >
                    <p>
                      Depth defense is Saudi based company with panache to
                      deliver competitive & quality cyber consulting services
                      with ease.
                    </p>
                  </div>

                  <div
                  // className="floating-line"
                  // style={{ animationDelay: "0.2s" }}
                  >
                    <p>
                      Modern cyber threats can originate from virtually (pun
                      intended) anywhere-even from inside your own network.
                    </p>
                  </div>

                  <div
                  // className="floating-line"
                  // style={{ animationDelay: "0.3s" }}
                  >
                    <p>
                      Hackers use all kinds of tricks to bypass your company’s
                      tough perimeter defenses while careles or actively
                      malicious
                    </p>
                  </div>

                  <div
                  // className="floating-line"
                  // style={{ animationDelay: "0.4s" }}
                  >
                    <p>
                      insiders can create or exacerbate cybersecurity issues.
                      Defense in depth cybersecurity strategies are crucial for
                    </p>
                  </div>

                  <div
                  // className="floating-line"
                  // style={{ animationDelay: "0.5s" }}
                  >
                    <p>
                      countering insider threats- those threats which originate
                      from within the network itself. Without some kind of
                      strong
                    </p>
                  </div>

                  <div
                  // className="floating-line"
                  // style={{ animationDelay: "0.6s" }}
                  >
                    <p>
                      network segmentation to prevent attacks on the inside from
                      hopping from one asset to the next, any insider threat
                      would
                    </p>
                  </div>

                  <div
                  // className="floating-line"
                  // style={{ animationDelay: "0.7s" }}
                  >
                    <p>be able to easily compromise the entire network.</p>
                  </div>
                  <span className="flaticon-threat"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
