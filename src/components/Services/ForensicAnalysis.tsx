"use client";

import React from "react";
import Image from "next/image";

const ForensicAnalysis: React.FC = () => {
  return (
    <>
      <div className="about-us-area ptb-50 dark:bg-zinc-800">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img mb_30">
                <Image
                  src="/images/services/services-Ai.jpg"
                  alt="Image"
                  width={600}
                  height={545}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-title">
                  <div className="col-lg-12 col-md-12 mt-[100px]">
                    <div className="single-blog-posts">
                      <div className="single-blog-content dark:bg-zinc-900 rounded-xl">
                        <p className="dark:text-white">
                          Forensic analysis definition can be described as a
                          detailed process of detecting, investigating, and
                          documenting the reason, course, and consequences of a
                          security incident or violation against state and
                          organization laws. Forensic analysis is often used for
                          providing evidence in court hearings, especially in
                          criminal investigations. It employs wide range of
                          investigative procedures and technologies.
                        </p>

                        <p className="mt-4 dark:text-white">
                          By tracking digital activity, investigators can relate
                          digital information to physical evidence. Digital
                          forensics can also allow investigators to discover
                          planned attacks and prevent a crime from occurring.
                          There are five critical forensic analysis components
                          involved in conducting a detailed forensic analysis,
                          all of which are involved in contributing towards a
                          successful investigation.
                        </p>

                        <ul className="text-red-700">
                          <li>
                            <i className="bx bx-check-circle"></i>
                            Developing Policy and Procedures
                          </li>
                          <li>
                            <i className="bx bx-check-circle mt-2"></i>
                            Assess the Evidence
                          </li>
                          <li>
                            <i className="bx bx-check-circle mt-2"></i>
                            Acquire Evidence
                          </li>
                          <li>
                            <i className="bx bx-check-circle mt-2"></i>
                            Examining the Evidence
                          </li>
                          <li>
                            <i className="bx bx-check-circle mt-2"></i>
                            Documenting and Reporting
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForensicAnalysis;
